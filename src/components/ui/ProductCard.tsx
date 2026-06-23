"use client";

import Link from "next/link";
import { Heart, ShoppingCart, Star } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export interface ProductProps {
  id: string;
  title: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviews: number;
  image: string;
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
  tag,
  storeName,
}: ProductProps) {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative flex flex-col rounded-2xl border bg-card p-4 shadow-sm transition-all hover:shadow-md h-full cursor-pointer"
    >
      {tag && (
        <div className="absolute left-4 top-4 z-10">
          <Badge
            variant={tag === "FLASH SALE" ? "destructive" : "default"}
            className="px-2 py-1 text-[10px] font-bold tracking-wider rounded-md"
          >
            {tag}
          </Badge>
        </div>
      )}
      
      <div className="absolute right-4 top-4 z-10 opacity-0 transition-opacity group-hover:opacity-100">
        <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full bg-background/80 backdrop-blur-sm text-muted-foreground hover:text-destructive hover:bg-background">
          <Heart className="h-4 w-4" />
        </Button>
      </div>

      <Link href={`/products/${id}`} className="flex flex-col flex-1">
        <div className="relative mb-4 aspect-square overflow-hidden rounded-xl bg-muted">
          {/* using unoptimized img for demo placeholder */}
          <img
            src={image}
            alt={title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        <div className="flex flex-col flex-1">
          {storeName && <span className="text-xs text-muted-foreground mb-1">{storeName}</span>}
          <h3 className="line-clamp-2 text-sm font-semibold text-foreground flex-1">
            {title}
          </h3>

          <div className="mt-2 flex items-center space-x-1">
            <Star className="h-3.5 w-3.5 fill-primary text-primary" />
            <span className="text-xs font-medium text-foreground">{rating}</span>
            <span className="text-xs text-muted-foreground">({reviews})</span>
          </div>

          <div className="mt-3 flex items-end justify-between">
            <div className="flex flex-col">
              {originalPrice && (
                <span className="text-xs text-muted-foreground line-through decoration-destructive/50">
                  ${originalPrice.toFixed(2)}
                </span>
              )}
              <span className="text-lg font-bold text-primary">
                ${price.toFixed(2)}
              </span>
            </div>
          </div>
        </div>
      </Link>
      
      <div className="absolute bottom-4 right-4 translate-y-4 opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
        <Button size="icon" className="h-10 w-10 rounded-full shadow-lg">
          <ShoppingCart className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}
