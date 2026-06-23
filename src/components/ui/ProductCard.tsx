"use client";

import Link from "next/link";
import { Heart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category?: string;
  tag?: "AI TOP PICK" | "NEW ARRIVAL" | "BESTSELLER" | "FLASH SALE";
  storeName?: string;
}

export function ProductCard({
  id,
  title,
  price,
  originalPrice,
  rating,
  reviews,
  image,
  category = "CATEGORY",
  tag,
}: ProductProps) {
  const addItem = useCartStore((state) => state.addItem);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    addItem({ id, title, price, image, category });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      className="group flex flex-col w-full h-full cursor-pointer"
    >
      {/* Image Frame */}
      <div className="relative aspect-[3/4] w-full rounded-2xl overflow-hidden mb-4" style={{ backgroundColor: "#BACCCF" }}>
        {/* Wishlist Icon */}
        <div className="absolute top-3 right-3 z-10">
          <motion.button 
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm text-slate-400 hover:text-red-500 transition-colors cursor-pointer"
          >
            <Heart className="w-4 h-4" />
          </motion.button>
        </div>

        {/* Tags */}
        {tag && (
          <div className="absolute top-3 left-3 z-10">
            <span className={`px-2 py-1 text-[10px] font-bold tracking-wider rounded-md text-white shadow-sm ${tag === 'FLASH SALE' ? 'bg-destructive' : 'bg-slate-900'}`}>
              {tag}
            </span>
          </div>
        )}

        <Link href={`/products/${id}`} className="w-full h-full block">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-105"
          />
        </Link>

        {/* Hover Quick Add Bar */}
        <div className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20">
          <div className="bg-slate-900 p-2 flex items-center justify-center">
            <Button 
              onClick={handleQuickAdd}
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold tracking-wide rounded-xl cursor-pointer"
            >
              QUICK ADD
            </Button>
          </div>
        </div>
      </div>

      {/* Content Block */}
      <Link href={`/products/${id}`} className="flex flex-col items-center text-center flex-1">
        <span className="text-[10px] uppercase tracking-widest text-slate-500 font-semibold mb-1.5">
          {category}
        </span>
        
        <h3 className="text-sm font-bold text-slate-900 line-clamp-2 mb-2 w-full px-2">
          {title}
        </h3>

        <div className="flex items-center justify-center gap-0.5 mb-2.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className={`w-3.5 h-3.5 ${star <= Math.round(rating) ? 'fill-[#D1A174] text-[#D1A174]' : 'fill-slate-200 text-slate-200'}`} />
          ))}
          <span className="text-xs text-slate-500 ml-1">({reviews})</span>
        </div>

        <div className="mt-auto flex items-center justify-center gap-2">
          {originalPrice && (
            <span className="text-xs text-slate-400 line-through">
              ${originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-base font-extrabold text-slate-900">
            ${price.toFixed(2)}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
