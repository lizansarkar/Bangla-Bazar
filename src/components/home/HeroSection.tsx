"use client";

import { Button } from "@/components/ui/button";
import { ShieldCheck, Lock, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="bg-slate-50 pt-16 pb-12">
      <div className="container mx-auto px-4 md:px-6 flex flex-col items-center text-center">
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-4xl md:text-6xl font-extrabold tracking-tight text-slate-900 max-w-4xl mb-6"
        >
          ডিজিটাল যুগের জন্য{" "}
          <span className="text-primary">আধুনিক বাণিজ্য</span>
        </motion.h1>
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
          className="text-lg text-slate-600 max-w-2xl mb-10"
        >
          এআই-চালিত অন্তর্দৃষ্টি এবং এসক্রো-সুরক্ষিত লেনদেনের সাথে বহু-বিক্রেতা বাজারের পরবর্তী প্রজন্মের অভিজ্ঞতা নিন।
        </motion.p>

        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="w-full max-w-3xl flex flex-col sm:flex-row gap-4 mb-16"
        >
          <input
            type="text"
            placeholder="আপনি কী খুঁজছেন?"
            className="flex-1 h-14 rounded-2xl border-2 border-slate-200 px-6 text-lg focus:border-primary focus:outline-none transition-colors"
          />
          <Button size="lg" className="h-14 px-10 text-lg shadow-primary/25 shadow-lg hover:scale-105 transition-transform cursor-pointer">
            সার্চ করুন
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-5xl">
          {[
            { icon: ShieldCheck, title: "এসক্রো সুরক্ষিত", desc: "ডেলিভারি নিশ্চিত না হওয়া পর্যন্ত তহবিল লক করা থাকে" },
            { icon: Lock, title: "নিরাপদ পেমেন্ট", desc: "ব্যাংক-গ্রেড এনক্রিপশন" },
            { icon: CheckCircle2, title: "গুণগত মান নিশ্চিত", desc: "যাচাইকৃত ব্যবসায়ী প্রোগ্রাম" },
          ].map((feature, i) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 + i * 0.1 }}
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
  );
}
