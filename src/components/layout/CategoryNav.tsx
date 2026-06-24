"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useCategoryStore } from "@/store/categoryStore";
import { categoryList, subcategories, categoryImages } from "@/data/products";

const categoryColors: Record<string, string> = {
  [categoryList[0]]: "bg-slate-100 text-slate-700",
  [categoryList[1]]: "bg-emerald-50 text-emerald-700",
  [categoryList[2]]: "bg-orange-50 text-orange-700",
  [categoryList[3]]: "bg-rose-50 text-rose-700",
  [categoryList[4]]: "bg-amber-50 text-amber-700",
  [categoryList[5]]: "bg-violet-50 text-violet-700",
  [categoryList[6]]: "bg-pink-50 text-pink-700",
  [categoryList[7]]: "bg-blue-50 text-blue-700",
  [categoryList[8]]: "bg-teal-50 text-teal-700",
  [categoryList[9]]: "bg-red-50 text-red-700",
};

export function CategoryNav() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const { selectedCategory, setSelectedCategory } = useCategoryStore();

  const handleCategoryClick = (cat: string) => {
    if (cat === "সব অফার") {
      setSelectedCategory("সব অফার");
      setOpenDropdown(null);
      return;
    }
    if (openDropdown === cat) {
      setOpenDropdown(null);
    } else {
      setOpenDropdown(cat);
    }
    setSelectedCategory(cat);
  };

  const handleSubcategoryClick = (sub: string) => {
    setOpenDropdown(null);
  };

  return (
    <nav className="bg-white border-b border-slate-200 shadow-sm sticky top-16 z-40">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center gap-1 overflow-x-auto py-2 [&::-webkit-scrollbar]:hidden">
          {categoryList.map((cat) => {
            const isActive =
              selectedCategory === cat || (selectedCategory !== "সব অফার" && selectedCategory === cat);
            const isAllOffers = cat === "সব অফার";
            const hasSubcategories = !isAllOffers && subcategories[cat];

            return (
              <div
                key={cat}
                className="relative flex-shrink-0"
                onMouseEnter={() => hasSubcategories && setOpenDropdown(cat)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  onClick={() => handleCategoryClick(cat)}
                  className={`
                    flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium whitespace-nowrap
                    transition-all duration-200 cursor-pointer
                    ${isActive || (!isAllOffers && selectedCategory === cat)
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
