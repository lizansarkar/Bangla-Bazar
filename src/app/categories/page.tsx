"use client";

import { motion } from "framer-motion";
import Link from "next/link";

// Localized Bangladeshi ecommerce category dataset with relevant cover images
const CATEGORIES = [
  { 
    id: "electronics", 
    name: "ইলেকট্রনিক্স ও গ্যাজেট", 
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=500&q=80", 
    items: "১২,৪৫০" 
  },
  { 
    id: "fashion", 
    name: "প্রিমিয়াম ফ্যাশন ও পোশাক", 
    image: "https://images.unsplash.com/photo-1544441893-675973e31985?w=500&q=80", 
    items: "৪৫,২০০" 
  },
  { 
    id: "grocery", 
    name: "নিত্যপ্রয়োজনীয় ও কাঁচাবাজার", 
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=500&q=80", 
    items: "৮,৯০০" 
  },
  { 
    id: "furniture", 
    name: "হোম ডেকর ও ফার্নিচার", 
    image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=500&q=80", 
    items: "৩,২০০" 
  },
  { 
    id: "audio", 
    name: "হেডফোন ও অডিও ডিভাইস", 
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", 
    items: "১,৮৫০" 
  },
  { 
    id: "health", 
    name: "হেলথ, স্কিনকেয়ার ও বিউটি", 
    image: "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=500&q=80", 
    items: "১৫,৩০০" 
  },
  { 
    id: "jewelry", 
    name: "অলংকার ও জুয়েলারি কালেকশন", 
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=500&q=80", 
    items: "৪,১০০" 
  },
  { 
    id: "books", 
    name: "বই, সাহিত্য ও স্টেশনরি", 
    image: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=500&q=80", 
    items: "২২,০০০" 
  },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      {/* Page Heading & Intro */}
      <div className="mb-12 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-[#D1A174] mb-2 block">
          সব পণ্য এক জায়গায়
        </span>
        <h1 className="text-3xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
          আমাদের ক্যাটাগরি সমূহ
        </h1>
        <p className="text-slate-500 max-w-xl mx-auto text-sm md:text-base font-medium">
          আপনার প্রয়োজনীয় সব ভেরিফাইড প্রোডাক্ট খুঁজে নিন আমাদের হাজারো সাব-ক্যাটাগরি থেকে।
        </p>
      </div>

      {/* Grid Canvas for Image-based Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.05, ease: "easeOut" }}
          >
            <Link 
              href={`/search?q=${encodeURIComponent(category.name)}`} 
              className="group flex flex-col relative h-[280px] rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer border border-slate-100"
            >
              {/* Background Cover Image with Inner Zoom Layout */}
              <div className="absolute inset-0 w-full h-full bg-slate-200">
                <img 
                  src={category.image} 
                  alt={category.name} 
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>

              {/* Dynamic Gradient Mask Filter for High Contrast Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-950/40 to-transparent transition-opacity duration-300 group-hover:via-slate-950/50" />

              {/* Text Layer content alignment at the bottom */}
              <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                <h3 className="text-lg font-bold text-white mb-1 tracking-tight group-hover:text-[#D1A174] transition-colors duration-300">
                  {category.name}
                </h3>
                <p className="text-xs text-slate-300 font-medium tracking-wide">
                  {category.items} টি পণ্য
                </p>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}