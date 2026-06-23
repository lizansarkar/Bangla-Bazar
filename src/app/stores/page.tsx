"use client";

import { motion } from "framer-motion";
import { Star, Store, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const STORES = [
  { id: "1", name: "Dhaka Electronics Hub", rating: 4.8, reviews: 1205, location: "Mirpur, Dhaka", items: 450 },
  { id: "2", name: "Fashion Fiesta", rating: 4.6, reviews: 840, location: "Banani, Dhaka", items: 1200 },
  { id: "3", name: "Chittagong Traders", rating: 4.9, reviews: 3200, location: "Agrabad, Chittagong", items: 89 },
  { id: "4", name: "Sylhet Organic Farm", rating: 4.7, reviews: 412, location: "Zindabazar, Sylhet", items: 230 },
];

export default function StoresPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-4">Marketplace Vendors</h1>
        <p className="text-slate-500 max-w-2xl mx-auto">Discover local businesses and sellers across the country.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STORES.map((store, index) => (
          <motion.div
            key={store.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all cursor-pointer group"
          >
            <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center text-slate-400 mb-4 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
              <Store className="w-8 h-8" />
            </div>
            
            <h3 className="text-lg font-bold text-slate-900 mb-2">{store.name}</h3>
            
            <div className="flex items-center gap-1 mb-3">
              <Star className="w-4 h-4 fill-primary text-primary" />
              <span className="text-sm font-bold text-slate-900">{store.rating}</span>
              <span className="text-sm text-slate-500">({store.reviews} reviews)</span>
            </div>

            <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
              <MapPin className="w-4 h-4" /> {store.location}
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-sm font-semibold text-slate-600">{store.items} Products</span>
              <Button variant="outline" size="sm" className="rounded-xl cursor-pointer">Visit</Button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
