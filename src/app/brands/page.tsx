"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const BRANDS = [
  { id: "1", name: "Titan Electronics", logo: "T", banner: "https://images.unsplash.com/photo-1550009158-9c16bea54cbd?w=800&q=80" },
  { id: "2", name: "Vantage Co.", logo: "V", banner: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80" },
  { id: "3", name: "Apex Dynamics", logo: "A", banner: "https://images.unsplash.com/photo-1542838132-92c53300491e?w=800&q=80" },
  { id: "4", name: "Nexus Apparel", logo: "N", banner: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&q=80" },
];

export default function BrandsPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex flex-col md:flex-row justify-between items-center mb-10">
        <div>
          <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Verified Brands</h1>
          <p className="text-slate-500">Shop directly from official brand stores with escrow protection.</p>
        </div>
        <div className="mt-4 md:mt-0 flex gap-2">
          {["A-Z", "Popular", "New"].map(filter => (
            <Button key={filter} variant="outline" className="rounded-full cursor-pointer">{filter}</Button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {BRANDS.map((brand, index) => (
          <motion.div
            key={brand.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-3xl bg-slate-900 h-64 shadow-lg cursor-pointer"
          >
            <img src={brand.banner} alt={brand.name} className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-8 flex flex-col justify-end">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center text-2xl font-black text-slate-900 shadow-xl">
                  {brand.logo}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-2xl font-bold text-white">{brand.name}</h2>
                    <BadgeCheck className="text-blue-400 w-5 h-5" />
                  </div>
                  <p className="text-slate-300">Official Partner Store</p>
                </div>
                <div className="ml-auto">
                  <Link href={`/search?q=${brand.name}`}>
                    <Button variant="secondary" className="bg-white/20 hover:bg-white/30 text-white border-none backdrop-blur-md rounded-xl cursor-pointer">
                      Visit Store
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
