"use client";

import { useState } from "react";
import Image from "next/image";
import { Star, ShieldCheck, ChevronRight, Plus, Minus, Heart, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function ProductDetailsPage({ params }: { params: { id: string } }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="container mx-auto px-4 md:px-6 py-8">
      {/* Breadcrumbs */}
      <nav className="flex text-sm text-muted-foreground mb-8">
        <ol className="flex items-center space-x-2">
          <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li><a href="/categories/electronics" className="hover:text-primary transition-colors">Electronics</a></li>
          <li><ChevronRight className="h-4 w-4" /></li>
          <li className="text-foreground font-medium">Premium Quantum Series X</li>
        </ol>
      </nav>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        {/* Left Column: Images */}
        <div className="flex gap-4">
          <div className="hidden sm:flex flex-col gap-4 w-24">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl bg-muted overflow-hidden border-2 border-transparent hover:border-primary cursor-pointer transition-colors">
                <img src={`https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=100&q=80`} alt={`Thumbnail ${i}`} className="w-full h-full object-cover" />
              </div>
            ))}
          </div>
          <div className="flex-1 bg-slate-900 rounded-3xl aspect-square overflow-hidden relative group">
            <img 
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&q=80" 
              alt="Premium Quantum Series X" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 cursor-zoom-in" 
            />
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="flex flex-col">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Quantum Series X: Ultra-Precision Hub</h1>
            <div className="flex items-center gap-4 mb-4">
              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map(star => (
                  <Star key={star} className={`h-5 w-5 ${star === 5 ? 'text-muted fill-muted' : 'text-primary fill-primary'}`} />
                ))}
                <span className="ml-2 font-medium">4.9</span>
                <span className="ml-1 text-muted-foreground">(128 Reviews)</span>
              </div>
              <Badge variant="secondary" className="bg-primary/10 text-primary hover:bg-primary/20">Top Rated</Badge>
            </div>
            <div className="text-4xl font-bold text-primary mb-2">$1,299.00</div>
          </div>

          <Card className="p-4 mb-6 bg-slate-50 border-slate-200">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">
                  TL
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900">TechNexus Labs</h3>
                  <div className="flex items-center text-xs text-slate-500">
                    <ShieldCheck className="h-3 w-3 text-primary mr-1" />
                    Verified Vendor
                  </div>
                </div>
              </div>
              <Button variant="outline" className="text-primary border-primary hover:bg-primary hover:text-white">Follow</Button>
            </div>
          </Card>

          <div className="bg-gradient-to-r from-primary/10 to-transparent p-6 rounded-2xl border border-primary/20 mb-8 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
            <h3 className="font-bold flex items-center gap-2 mb-2">
              ✨ AI-GENERATED PRODUCT INSIGHT
            </h3>
            <p className="text-sm text-slate-700 leading-relaxed">
              Based on 128 verified reviews, this item excels in build quality and precision. Users frequently mention its seamless integration capabilities. Perfect for professional environments requiring high reliability.
            </p>
          </div>

          <div className="flex items-center gap-6 mb-8 mt-auto">
            <div className="flex items-center border rounded-xl h-14 overflow-hidden">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-full flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <Minus className="h-4 w-4" />
              </button>
              <div className="w-12 h-full flex items-center justify-center font-semibold border-x text-lg">
                {quantity}
              </div>
              <button 
                onClick={() => setQuantity(quantity + 1)}
                className="w-12 h-full flex items-center justify-center hover:bg-slate-100 transition-colors"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
            <div className="flex gap-4 flex-1">
              <Button size="lg" variant="outline" className="flex-1 h-14 text-lg border-2 border-primary text-primary hover:bg-primary hover:text-white">
                Add to Cart
              </Button>
              <Button size="lg" className="flex-1 h-14 text-lg bg-primary hover:bg-primary/90 text-white shadow-primary/30 shadow-lg border-none">
                Buy Now
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Reviews section */}
      <div className="border-t pt-16 mb-16">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h2 className="text-2xl font-bold mb-2">Customer Reviews</h2>
            <div className="flex items-center gap-2">
              <span className="text-4xl font-bold">4.9</span>
              <div className="flex flex-col">
                <div className="flex">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className={`h-4 w-4 ${star === 5 ? 'text-muted fill-muted' : 'text-primary fill-primary'}`} />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">Based on 128 reviews</span>
              </div>
            </div>
          </div>
          <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
            <MessageSquare className="h-4 w-4" /> Write a Review
          </Button>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map(review => (
            <Card key={review} className="p-6">
              <div className="flex justify-between mb-4">
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(star => (
                    <Star key={star} className="h-4 w-4 text-primary fill-primary" />
                  ))}
                </div>
                <span className="text-sm text-muted-foreground">2 days ago</span>
              </div>
              <h4 className="font-bold mb-2 text-slate-900">Exceeded my expectations</h4>
              <p className="text-sm text-slate-600 mb-4 line-clamp-3">
                The precision is unmatched. I was skeptical about the AI features but they actually make a huge difference in my daily workflow. Packaging was premium.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-slate-200 rounded-full overflow-hidden">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt="User" />
                </div>
                <div>
                  <div className="text-sm font-semibold">Sarah M.</div>
                  <div className="text-xs text-primary flex items-center gap-1">
                    <ShieldCheck className="h-3 w-3" /> Verified Buyer
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
