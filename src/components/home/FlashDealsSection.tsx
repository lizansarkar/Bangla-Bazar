"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Timer } from "lucide-react";
import { motion } from "framer-motion";
import { flashDeals } from "@/data/products";
import { useCategoryStore } from "@/store/categoryStore";

export function FlashDealsSection() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });
  const { selectedCategory } = useCategoryStore();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const filtered =
    selectedCategory === "সব অফার"
      ? flashDeals
      : flashDeals.filter((p) => p.category === selectedCategory);

  if (filtered.length === 0) return null;

  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between mb-8 shadow-2xl relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
        <div className="z-10 mb-8 md:mb-0 text-center md:text-left flex-1">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">টেক আপগ্রেড সপ্তাহ</h2>
          <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
            <Timer className="text-primary h-6 w-6" />
            <div className="flex gap-2">
              {[
                String(timeLeft.hours).padStart(2, "0"),
                String(timeLeft.minutes).padStart(2, "0"),
                String(timeLeft.seconds).padStart(2, "0"),
              ].map((time, i) => (
                <div
                  key={i}
                  className="bg-slate-800 rounded-lg px-3 py-2 text-xl font-mono font-bold border border-slate-700 w-12 text-center"
                >
                  {time}
                </div>
              ))}
            </div>
          </div>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
            <Button size="lg" variant="default" className="w-full md:w-auto text-slate-900 bg-primary hover:bg-primary/90 font-bold border-none shadow-primary/30 shadow-lg cursor-pointer">
              সেল দেখুন
            </Button>
          </motion.div>
        </div>
        <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2 lg:w-[400px]">
          {filtered.slice(0, 2).map((product) => (
            <div key={product.id} className="w-full">
              <ProductCard {...product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
