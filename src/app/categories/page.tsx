"use client";

import { motion } from "framer-motion";
import { Laptop, Shirt, Carrot, Sofa, Headphones, HeartPulse, Sparkles, BookOpen } from "lucide-react";
import Link from "next/link";

const CATEGORIES = [
  { id: "electronics", name: "Electronics", icon: Laptop, color: "bg-blue-100 text-blue-600", items: "12,450" },
  { id: "fashion", name: "Fashion", icon: Shirt, color: "bg-pink-100 text-pink-600", items: "45,200" },
  { id: "grocery", name: "Fresh Grocery", icon: Carrot, color: "bg-green-100 text-green-600", items: "8,900" },
  { id: "furniture", name: "Furniture", icon: Sofa, color: "bg-orange-100 text-orange-600", items: "3,200" },
  { id: "audio", name: "Audio & Music", icon: Headphones, color: "bg-purple-100 text-purple-600", items: "1,850" },
  { id: "health", name: "Health & Beauty", icon: HeartPulse, color: "bg-rose-100 text-rose-600", items: "15,300" },
  { id: "jewelry", name: "Jewelry", icon: Sparkles, color: "bg-amber-100 text-amber-600", items: "4,100" },
  { id: "books", name: "Books", icon: BookOpen, color: "bg-slate-100 text-slate-600", items: "22,000" },
];

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Explore All Categories</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Browse through our extensive catalog of verified products across thousands of subcategories.</p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((category, index) => (
          <motion.div
            key={category.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link href={`/search?q=${category.name}`} className="group flex flex-col items-center p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer">
              <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 transition-transform group-hover:scale-110 ${category.color}`}>
                <category.icon className="w-10 h-10" />
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-1">{category.name}</h3>
              <p className="text-sm text-slate-400 font-medium">{category.items} Items</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
