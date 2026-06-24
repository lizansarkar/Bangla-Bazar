"use client";

import { motion } from "framer-motion";
import { Star, MapPin, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Localized Bangladeshi marketplace vendors dataset
const STORES = [
  { id: "1", name: "ঢাকা ইলেকট্রনিক্স হাব", rating: 4.8, reviews: "১,২০৫", location: "মিরপুর, ঢাকা", items: "৪৫০", color: "bg-blue-50 text-blue-600 border-blue-100" },
  { id: "2", name: "ফ্যাশন ফিয়েস্তা", rating: 4.6, reviews: "৮৪০", location: "বনানী, ঢাকা", items: "১,২০০", color: "bg-pink-50 text-pink-600 border-pink-100" },
  { id: "3", name: "চট্টগ্রাম ট্রেডার্স", rating: 4.9, reviews: "৩,২০০", location: "আগ্রাবাদ, চট্টগ্রাম", items: "৮৯", color: "bg-amber-50 text-amber-600 border-amber-100" },
  { id: "4", name: "সিলেট অর্গানিক ফার্ম", rating: 4.7, reviews: "৪১২", location: "জিন্দাবাজার, সিলেট", items: "২৩০", color: "bg-emerald-50 text-emerald-600 border-emerald-100" },
];

export default function StoresPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Centered Heading Layout */}
      <div className="text-center mb-14">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D1A174] mb-2 block">
          আমাদের সেলার নেটওয়ার্ক
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          রেজিস্টার্ড শপ সমূহ
        </h1>
        <p className="text-slate-500 max-w-2xl mx-auto text-sm md:text-base font-medium">
          সারাদেশের নির্ভরযোগ্য ও ভেরিফাইড বিক্রেতাদের স্টোর থেকে সরাসরি সেরা পণ্যটি বেছে নিন।
        </p>
      </div>

      {/* Grid Canvas for Store Showcase Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {STORES.map((store, index) => {
          // Extracts the first character of the store name to use as a dynamic placeholder logo
          const logoPlaceholder = store.name.charAt(0);

          return (
            <motion.div
              key={store.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.06 }}
              className="group bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl hover:border-slate-200 transition-all duration-300 cursor-pointer flex flex-col justify-between relative overflow-hidden"
            >
              {/* Subtle top background highlight bar on hover */}
              <div className="absolute top-0 left-0 w-full h-[3px] bg-transparent group-hover:bg-[#D1A174] transition-colors duration-300" />

              <div>
                {/* Dynamically Styled Avatar Circle Logo */}
                <div className={`w-14 h-14 rounded-xl flex items-center justify-center font-black text-xl border shadow-sm mb-5 transition-transform duration-300 group-hover:scale-105 ${store.color}`}>
                  {logoPlaceholder}
                </div>
                
                {/* Store Typography Meta Details */}
                <h3 className="text-base font-bold text-slate-900 mb-2 tracking-tight line-clamp-1 group-hover:text-[#D1A174] transition-colors duration-300">
                  {store.name}
                </h3>
                
                {/* Rating & Review Segment */}
                <div className="flex items-center gap-1 mb-3.5">
                  <Star className="w-3.5 h-3.5 fill-[#D1A174] text-[#D1A174]" />
                  <span className="text-xs font-extrabold text-slate-800 pt-0.5">{store.rating}</span>
                  <span className="text-xs text-slate-400 font-medium pt-0.5">({store.reviews} রিভিউ)</span>
                </div>

                {/* Geo Location Identifier */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 font-medium mb-6">
                  <MapPin className="w-3.5 h-3.5 text-slate-400" /> 
                  {store.location}
                </div>
              </div>

              {/* Bottom Decorative Footer Panel */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
                <span className="text-xs font-bold text-slate-500 bg-slate-50 px-2.5 py-1 rounded-md">
                  {store.items} টি পণ্য
                </span>
                
                <Link href={`/search?q=${encodeURIComponent(store.name)}`}>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="rounded-xl px-4 py-0 h-8 text-xs font-bold transition-all duration-300 hover:bg-[#D1A174] hover:text-white hover:border-transparent group/btn flex items-center gap-1 cursor-pointer"
                  >
                    ভিজিট করুন
                    <ArrowRight className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}