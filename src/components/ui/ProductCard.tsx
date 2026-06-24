"use client";

import Link from "next/link";
import { Heart, Star, ShoppingCart } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { useState } from "react";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
  category?: string;
  tag?: string;
  discount?: number;
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
  category = "ক্যাটাগরি",
  tag,
  discount,
}: ProductProps) {
  const addItem = useCartStore((state) => state.addItem);
  const [isWishlisted, setIsWishlisted] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem({ id, title, price, image, category });
  };

  const handleWishlist = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsWishlisted((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.03 }}
      transition={{ duration: 0.3 }}
      className="group relative flex flex-col w-full h-full cursor-pointer bg-white rounded-2xl border border-slate-100 shadow-sm hover:shadow-lg hover:bg-primary/[0.03] transition-all duration-300 overflow-hidden"
    >
      {/* Image Frame */}
      <div className="relative aspect-[3/4] w-full overflow-hidden" style={{ backgroundColor: "#BACCCF" }}>
        {/* Wishlist Icon */}
        <div className="absolute top-3 right-3 z-10">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleWishlist}
            className="w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-sm hover:bg-white transition-colors cursor-pointer"
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isWishlisted ? "fill-red-500 text-red-500" : "text-slate-400"
              }`}
            />
          </motion.button>
        </div>

        {discount && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-1 text-[10px] font-bold tracking-wider rounded-md text-white shadow-sm bg-red-500">
              -{discount}%
            </span>
          </div>
        )}
        {tag && !discount && (
          <div className="absolute top-3 left-3 z-10">
            <span className="px-2 py-1 text-[10px] font-bold tracking-wider rounded-md text-white shadow-sm bg-slate-900">
              {tag}
            </span>
          </div>
        )}

        <Link href={`/products/${id}`} className="w-full h-full block">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover mix-blend-multiply transition-transform duration-700 group-hover:scale-110"
          />
        </Link>

        {/* Add to Cart - slides up on hover */}
        <motion.div
          initial={{ y: 60, opacity: 0 }}
          whileHover={{ y: 0, opacity: 1 }}
          className="absolute bottom-0 left-0 w-full translate-y-full opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 z-20"
        >
          <div className="bg-gradient-to-t from-slate-900/90 via-slate-900/70 to-transparent p-3 pt-6">
            <Button
              onClick={handleQuickAdd}
              size="sm"
              className="w-full bg-primary hover:bg-primary/90 text-white font-bold rounded-xl flex items-center justify-center gap-2 cursor-pointer shadow-lg"
            >
              <ShoppingCart className="w-4 h-4" />
              কার্টে যোগ করুন
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Content Block */}
      <Link href={`/products/${id}`} className="flex flex-col px-3 pb-3 pt-2.5 flex-1">
        <span className="text-[10px] uppercase tracking-widest text-primary font-semibold mb-1">
          {category}
        </span>

        <h3 className="text-sm font-bold text-slate-900 line-clamp-2 mb-2 leading-tight">
          {title}
        </h3>

        <div className="flex items-center gap-0.5 mb-2.5">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className={`w-3 h-3 ${
                star <= Math.round(rating)
                  ? "fill-[#D1A174] text-[#D1A174]"
                  : "fill-slate-200 text-slate-200"
              }`}
            />
          ))}
          <span className="text-[11px] text-slate-500 ml-1">({reviews})</span>
        </div>

        <div className="mt-auto flex items-center gap-2">
          {originalPrice && (
            <span className="text-xs text-slate-400 line-through">
               {originalPrice.toFixed(2)}
            </span>
          )}
          <span className="text-base font-extrabold text-slate-900">
             {price.toFixed(2)}
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
