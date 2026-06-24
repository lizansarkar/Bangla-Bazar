"use client";

import { motion } from "framer-motion";
import { BadgeCheck, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

// Localized Bangladeshi verified brands dataset
const BRANDS = [
  { id: "1", name: "টাইটান ইলেকট্রনিক্স", logo: "T", banner: "https://images.unsplash.com/photo-1550009158-9c16bea54cbd?w=800&q=80" },
  { id: "2", name: "ভ্যানটেজ কোং", logo: "V", banner: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { id: "3", name: "এপেক্স ডায়নামিকস", logo: "A", banner: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
  { id: "4", name: "নেক্সাস অ্যাপারেলস", logo: "N", banner: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80" },
];

export default function BrandsPage() {
  // Local state to track active filter configurations
  const [activeFilter, setActiveFilter] = useState("জনপ্রিয়");

  const filters = [
    { label: "অক্ষরানুযায়ী", value: "A-Z" },
    { label: "জনপ্রিয়", value: "জনপ্রিয়" },
    { label: "নতুন ব্র্যান্ড", value: "নতুন" }
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      {/* Dynamic Header Section with Filter Switches */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-6 mb-12">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-[#D1A174] mb-2 block">
            অফিশিয়াল পার্টনারস
          </span>
          <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-3 tracking-tight">
            ভেরিফাইড ব্র্যান্ড সমূহ
          </h1>
          <p className="text-slate-500 font-medium max-w-xl text-sm md:text-base">
            এসক্রো পেমেন্ট সুরক্ষায় সরাসরি অফিশিয়াল ব্র্যান্ড স্টোর থেকে আসল পণ্য কেনাকাটা করুন।
          </p>
        </div>

        {/* Enhanced Premium Filter Pills */}
        <div className="flex flex-wrap gap-2.5">
          {filters.map(filter => (
            <Button 
              key={filter.value} 
              onClick={() => setActiveFilter(filter.value)}
              variant={activeFilter === filter.value ? "default" : "outline"}
              className={cn(
                "rounded-full px-5 py-2 text-xs font-semibold tracking-wide transition-all duration-300 cursor-pointer h-9",
                activeFilter === filter.value 
                  ? "bg-[#D1A174] hover:bg-[#C59263] text-white border-transparent shadow-sm" 
                  : "hover:border-[#D1A174] hover:text-[#D1A174] bg-white text-slate-600"
              )}
            >
              {filter.label}
            </Button>
          ))}
        </div>
      </div>

      {/* Grid Mesh Layout for Brand Showcases */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {BRANDS.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.08, ease: "easeOut" }}
            className="group relative overflow-hidden rounded-2xl bg-slate-950 h-72 shadow-md hover:shadow-xl border border-slate-100 transition-all duration-500 cursor-pointer"
          >
            {/* Background Image Banner Canvas with Filter Shields */}
            <img 
              src={brand.banner} 
              alt={brand.name} 
              className="absolute inset-0 w-full h-full object-cover opacity-50 transition-transform duration-1000 ease-out group-hover:scale-105" 
            />
            
            {/* Optimized High Contrast Premium Gradient Filter Layer */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent p-6 md:p-8 flex flex-col justify-end z-10" />

            {/* Main Interactive Content Block */}
            <div className="absolute inset-0 p-6 md:p-8 flex flex-col justify-end z-20">
              <div className="flex flex-col sm:flex-row sm:items-center gap-5 w-full">
                
                {/* Brand Identity / Miniature Logo Frame */}
                <div className="w-16 h-16 bg-white/95 backdrop-blur-sm rounded-xl flex items-center justify-center text-2xl font-black text-slate-900 shadow-xl border border-white/20 transition-transform duration-500 group-hover:scale-105 shrink-0">
                  {brand.logo}
                </div>

                {/* Typography metadata configuration block */}
                <div className="space-y-1">
                  <div className="flex items-center gap-2 flex-wrap">
                    <h2 className="text-xl md:text-2xl font-bold text-white tracking-tight group-hover:text-[#D1A174] transition-colors duration-300">
                      {brand.name}
                    </h2>
                    <BadgeCheck className="text-blue-400 w-5 h-5 fill-blue-400/10" />
                  </div>
                  <p className="text-xs md:text-sm text-slate-300 font-medium tracking-wide">
                    অফিশিয়াল পার্টনার স্টোর
                  </p>
                </div>

                {/* Right Aligned CTA Button Frame */}
                <div className="sm:ml-auto pt-2 sm:pt-0">
                  <Link href={`/search?q=${encodeURIComponent(brand.name)}`}>
                    <Button 
                      variant="secondary" 
                      className="bg-white/10 hover:bg-white/20 text-white border border-white/20 backdrop-blur-md rounded-xl px-5 font-semibold text-xs transition-all duration-300 cursor-pointer group/btn gap-1.5 h-10 shadow-lg"
                    >
                      স্টোরে যান
                      <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </Button>
                  </Link>
                </div>

              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}