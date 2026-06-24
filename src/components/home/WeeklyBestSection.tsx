"use client";

import { useRef, useEffect } from "react";
import { ProductCard } from "@/components/ui/ProductCard";
import { weeklyBest } from "@/data/products";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useCategoryStore } from "@/store/categoryStore";

export function WeeklyBestSection() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { selectedCategory } = useCategoryStore();

  const filtered =
    selectedCategory === "সব অফার"
      ? weeklyBest
      : weeklyBest.filter((p) => p.category === selectedCategory);

  if (filtered.length === 0) return null;

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!scrollRef.current) return;
      const el = scrollRef.current;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 10) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: el.clientWidth, behavior: "smooth" });
      }
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">সাপ্তাহিক সেরা পণ্য</h2>
        <div className="flex gap-2">
          <button
            onClick={() => scroll("left")}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={() => scroll("right")}
            className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center hover:bg-primary hover:text-white transition-colors cursor-pointer shadow-sm"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-4 md:gap-6 overflow-x-auto scroll-smooth pb-4 [&::-webkit-scrollbar]:hidden"
      >
        {filtered.map((product) => (
          <div
            key={product.id}
            className="min-w-[calc(50%-8px)] md:min-w-[calc(33.33%-16px)] lg:min-w-[calc(25%-18px)] flex-shrink-0"
          >
            <ProductCard {...product} />
          </div>
        ))}
      </div>
    </section>
  );
}
