"use client";

import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { products } from "@/data/products";
import { useCategoryStore } from "@/store/categoryStore";

export function JustForYouSection() {
  const { selectedCategory } = useCategoryStore();

  const filtered =
    selectedCategory === "সব অফার"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const displayProducts = filtered.length > 0 ? filtered : products.slice(0, 8);

  return (
    <section className="container mx-auto px-4 md:px-6">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-slate-900">আপনার জন্য</h2>
        <Button variant="link" className="text-primary cursor-pointer hover:underline">
          সব দেখুন
        </Button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        {displayProducts.slice(0, 8).map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </section>
  );
}
