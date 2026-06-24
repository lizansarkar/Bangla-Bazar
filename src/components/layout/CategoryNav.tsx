"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCategoryStore } from "@/store/categoryStore";
import { categoryList, subcategories, categoryImages } from "@/data/products";
import { useRouter } from "next/navigation";

export function CategoryNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const { selectedCategory, setSelectedCategory } = useCategoryStore();
  const router = useRouter(); // ✅ Added for safe navigation

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ Handles navigation to search page cleanly on click
  const handleCategoryClick = (cat: string) => {
    setSelectedCategory(cat);
    
    if (cat === "সব অফার") {
      setOpenDropdown(null);
      router.push("/search"); // Redirect to all search
    } else {
      setOpenDropdown(openDropdown === cat ? null : cat);
      // Encodes safely to prevent routing errors with Bengali characters
      router.push(`/search?q=${encodeURIComponent(cat)}`);
    }
  };

  const handleSubcategoryClick = (sub: string) => {
    setOpenDropdown(null);
    router.push(`/search?q=${encodeURIComponent(sub)}`);
  };

  return (
    <nav
      className={`
        sticky top-16 z-40 border-b border-slate-200 transition-all duration-300
        ${isScrolled
          ? "bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-background shadow-sm"
        }
      `}
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* 
          FIXED: Removed 'overflow-x-auto' from the immediate flex container to prevent cutoff.
          Added relative/static balancing to allow custom dropdown rendering context.
        */}
        <div className="flex items-center gap-1 overflow-x-visible py-2 [&::-webkit-scrollbar]:hidden">
          {categoryList.map((cat) => {
            const isActive = selectedCategory === cat;
            const isAllOffers = cat === "সব অফার";
            const hasSubcategories = !isAllOffers && subcategories[cat];

            return (
              <div
                key={cat}
                /* 
                  FIXED: Keeping it relative so absolute position dropdown triggers right underneath. 
                  Using static position block override could clear the boundary context entirely if needed.
                */
                className="relative flex-shrink-0"
                onMouseEnter={() => hasSubcategories && setOpenDropdown(cat)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap
                    transition-all duration-200 cursor-pointer
                    ${isActive
                      ? "bg-primary/10 text-primary shadow-sm"
                      : "text-slate-600 hover:bg-slate-100"
                    }
                  `}
                >
                  {categoryImages[cat] && (
                    <img
                      src={categoryImages[cat]}
                      alt=""
                      className="w-5 h-5 rounded-full object-cover"
                    />
                  )}
                  <span>{cat}</span>
                  {hasSubcategories && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        openDropdown === cat ? "rotate-180" : ""
                      }`}
                    />
                  )}
                </button>

                <AnimatePresence>
                  {hasSubcategories && openDropdown === cat && (
                    <motion.div
                      initial={{ opacity: 0, y: -8, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -8, scale: 0.95 }}
                      transition={{ duration: 0.15 }}
                      /* FIXED: Added explicit higher z-index (z-50) & optimized context positioning */
                      className="absolute top-full left-0 mt-1 w-56 bg-white rounded-2xl shadow-xl border border-slate-200 p-2 z-50"
                    >
                      <div className="text-xs font-semibold text-slate-400 px-3 py-2 uppercase tracking-wider">
                        {cat}
                      </div>
                      {subcategories[cat]?.map((sub) => (
                        <button
                          key={sub}
                          onClick={() => handleSubcategoryClick(sub)}
                          className="w-full text-left px-3 py-2 rounded-xl text-sm text-slate-700 hover:bg-primary/5 hover:text-primary transition-colors cursor-pointer"
                        >
                          {sub}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </nav>
  );
}