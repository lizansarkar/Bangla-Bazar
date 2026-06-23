"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { ProductCard } from "@/components/ui/ProductCard";
import { ShieldCheck, Lock, CheckCircle2, Timer } from "lucide-react";
import { motion } from "framer-motion";

// Dummy data
const FLASH_DEALS = [
  { id: "1", title: "Titan X Pro Smart Handset", price: 899.99, originalPrice: 1099.99, rating: 4.8, reviews: 342, image: "https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=500&q=80", tag: "FLASH SALE" as const, category: "ELECTRONICS" },
  { id: "2", title: "Acoustic S10 ANC Headphones", price: 199.99, originalPrice: 299.99, rating: 4.9, reviews: 1024, image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80", tag: "FLASH SALE" as const, category: "AUDIO" },
  { id: "3", title: "Vantage Silver Edition Watch", price: 349.50, originalPrice: 450.00, rating: 4.7, reviews: 89, image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80", tag: "FLASH SALE" as const, category: "WEARABLES" },
  { id: "4", title: "UltraVision 4K Monitor", price: 499.00, originalPrice: 599.00, rating: 4.6, reviews: 215, image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80", tag: "FLASH SALE" as const, category: "MONITORS" },
];

export default function Home() {
  const [timeLeft, setTimeLeft] = useState({ hours: 12, minutes: 45, seconds: 30 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        let { hours, minutes, seconds } = prev;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) hours--;
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-16 pb-16 overflow-hidden"
    >
      {/* Hero Module */}
      <section className="bg-slate-50 pt-16 pb-12">
        <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
          <motion.h1 
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6"
          >
            Frictionless Commerce for the <span className="text-primary">Digital Age.</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-slate-600 max-w-2xl mb-10"
          >
            Experience the next generation of multi-vendor marketplace with AI-driven insights and escrow-protected transactions.
          </motion.p>
          
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="w-full max-w-3xl flex flex-col sm:flex-row gap-4 mb-16"
          >
            <input 
              type="text" 
              placeholder="What are you looking for today?" 
              className="flex-1 h-14 rounded-2xl border-2 border-slate-200 px-6 text-lg focus:border-primary focus:outline-none transition-colors"
            />
            <Button size="lg" className="h-14 px-10 text-lg shadow-primary/25 shadow-lg hover:scale-105 transition-transform cursor-pointer">
              Search
            </Button>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
            {[
              { icon: ShieldCheck, title: "ESCROW PROTECTED", desc: "Funds locked until delivery" },
              { icon: Lock, title: "SECURE PAYMENTS", desc: "Bank-grade encryption" },
              { icon: CheckCircle2, title: "QUALITY CHECKED", desc: "Verified merchant program" },
            ].map((feature, i) => (
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.3 + (i * 0.1) }}
                key={i} 
                className="flex flex-col items-center p-6 bg-white rounded-2xl shadow-sm border border-slate-100"
              >
                <feature.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="font-bold text-slate-900 tracking-wide mb-2">{feature.title}</h3>
                <p className="text-sm text-slate-500">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Flash Deals */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white flex flex-col md:flex-row items-center justify-between mb-8 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="z-10 mb-8 md:mb-0 text-center md:text-left flex-1">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Tech Upgrade Week</h2>
            <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
              <Timer className="text-primary h-6 w-6" />
              <div className="flex gap-2">
                {[
                  String(timeLeft.hours).padStart(2, '0'), 
                  String(timeLeft.minutes).padStart(2, '0'), 
                  String(timeLeft.seconds).padStart(2, '0')
                ].map((time, i) => (
                  <div key={i} className="bg-slate-800 rounded-lg px-3 py-2 text-xl font-mono font-bold border border-slate-700 w-12 text-center">
                    {time}
                  </div>
                ))}
              </div>
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="inline-block">
              <Button size="lg" variant="default" className="w-full md:w-auto text-slate-900 bg-primary hover:bg-primary/90 font-bold border-none shadow-primary/30 shadow-lg cursor-pointer">
                Shop the Sale
              </Button>
            </motion.div>
          </div>
          <div className="z-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full md:w-1/2 lg:w-[400px]">
            {FLASH_DEALS.slice(0, 2).map(product => (
              <div key={product.id} className="w-full">
                <ProductCard {...product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Just for You */}
      <section className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl font-bold text-slate-900">Just for You</h2>
          <Button variant="link" className="text-primary cursor-pointer hover:underline">View All</Button>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {FLASH_DEALS.map(product => (
            <ProductCard key={product.id} {...product} tag={undefined} />
          ))}
          {FLASH_DEALS.map(product => (
            <ProductCard key={product.id + 'copy'} {...product} id={product.id + 'copy'} tag={undefined} />
          ))}
        </div>
      </section>

    </motion.div>
  );
}
