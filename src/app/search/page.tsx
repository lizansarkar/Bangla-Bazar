"use client";

import { useState } from "react";
import { Filter, ChevronDown, ListFilter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { Card } from "@/components/ui/card";

// Dummy data
const SEARCH_RESULTS = [
  { id: "s1", title: "Minimalist Lounge Chair", price: 299.99, rating: 4.8, reviews: 156, image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=500&q=80", tag: "AI TOP PICK" as const, storeName: "Modern Living" },
  { id: "s2", title: "Nordic Coffee Table", price: 149.00, rating: 4.5, reviews: 89, image: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=500&q=80", tag: "NEW ARRIVAL" as const, storeName: "FurnishCo" },
  { id: "s3", title: "Velvet Accent Sofa", price: 899.00, rating: 4.9, reviews: 412, image: "https://images.unsplash.com/photo-1550254478-ead40cc54513?w=500&q=80", tag: "BESTSELLER" as const, storeName: "Premium Home" },
  { id: "s4", title: "Geometric Bookshelf", price: 199.50, rating: 4.4, reviews: 67, image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=500&q=80", storeName: "WoodCrafters" },
  { id: "s5", title: "Ceramic Table Lamp", price: 89.99, rating: 4.7, reviews: 234, image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80", storeName: "Lumina" },
  { id: "s6", title: "Woven Area Rug", price: 129.00, rating: 4.6, reviews: 112, image: "https://images.unsplash.com/photo-1558211583-05b106f3630f?w=500&q=80", storeName: "TextileArts" },
];

export default function SearchPage() {
  const [priceRange, setPriceRange] = useState(5000);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Filters Panel */}
        <aside className="w-full lg:w-72 flex-shrink-0 space-y-8">
          <div className="flex items-center gap-2 mb-6 text-xl font-bold">
            <Filter className="h-5 w-5 text-primary" />
            Filters
          </div>

          <Card className="p-6 border-0 shadow-sm ring-1 ring-slate-100">
            <h3 className="font-semibold mb-4 text-slate-900">Categories</h3>
            <div className="space-y-3">
              {['Furniture', 'Lighting', 'Decor', 'Textiles', 'Outdoor'].map((cat, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 transition-colors" defaultChecked={i === 0} />
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{cat}</span>
                </label>
              ))}
            </div>
          </Card>

          <Card className="p-6 border-0 shadow-sm ring-1 ring-slate-100">
            <h3 className="font-semibold mb-4 text-slate-900">Price Range</h3>
            <div className="mb-4 text-primary font-semibold text-sm flex justify-between">
              <span> 0</span>
              <span> {priceRange}+</span>
            </div>
            <input 
              type="range" 
              min="0" 
              max="5000" 
              value={priceRange} 
              onChange={(e) => setPriceRange(parseInt(e.target.value))}
              className="w-full accent-primary h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer"
            />
          </Card>

          <Card className="p-6 border-0 shadow-sm ring-1 ring-slate-100">
            <h3 className="font-semibold mb-4 text-slate-900">Verified Manufacturers</h3>
            <div className="space-y-3">
              {['Modern Living', 'Premium Home', 'FurnishCo', 'WoodCrafters'].map((brand, i) => (
                <label key={i} className="flex items-center gap-3 cursor-pointer group">
                  <input type="checkbox" className="w-4 h-4 rounded text-primary focus:ring-primary border-slate-300 transition-colors" />
                  <span className="text-sm text-slate-600 group-hover:text-primary transition-colors">{brand}</span>
                </label>
              ))}
            </div>
          </Card>
        </aside>

        {/* Product Index Board */}
        <div className="flex-1 flex flex-col">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4 bg-white p-4 rounded-2xl shadow-sm border border-slate-100">
            <h1 className="text-slate-600 text-sm sm:text-base">
              Showing <span className="font-bold text-slate-900">1-24</span> of <span className="font-bold text-slate-900">850</span> results for <span className="font-bold text-slate-900">&apos;Modern Furniture&apos;</span>
            </h1>
            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="flex items-center gap-2 flex-1 sm:flex-none justify-end">
                <span className="text-sm text-slate-500 whitespace-nowrap">Sort by:</span>
                <div className="relative">
                  <select className="appearance-none bg-slate-50 border border-slate-200 text-slate-700 py-2 pl-4 pr-10 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary text-sm font-medium">
                    <option>Recommended</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Newest Arrivals</option>
                  </select>
                  <ChevronDown className="absolute right-3 top-2.5 h-4 w-4 text-slate-400 pointer-events-none" />
                </div>
              </div>
              <Button variant="outline" size="icon" className="hidden sm:flex border-slate-200">
                <ListFilter className="h-4 w-4 text-slate-600" />
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-4 md:gap-6">
            {SEARCH_RESULTS.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
            {SEARCH_RESULTS.map((product) => (
              <ProductCard key={product.id + 'copy'} {...product} id={product.id + 'copy'} />
            ))}
          </div>

          <div className="mt-12 flex justify-center">
            <div className="flex gap-2">
              <Button variant="outline" disabled>Previous</Button>
              <Button className="bg-primary text-white">1</Button>
              <Button variant="outline" className="border-transparent hover:bg-slate-100">2</Button>
              <Button variant="outline" className="border-transparent hover:bg-slate-100">3</Button>
              <span className="flex items-center px-2">...</span>
              <Button variant="outline" className="border-transparent hover:bg-slate-100">36</Button>
              <Button variant="outline">Next</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
