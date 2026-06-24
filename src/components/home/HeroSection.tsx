"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ShieldCheck, Lock, CheckCircle2, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import Lottie from "lottie-react";
import shoppingCart from "@/../public/shopping-cart.json";

const TYPEWRITER_TEXTS = [
  "তাজা শাকসবজি ও ফল",
  "ইলেকট্রনিক্স পণ্য",
  "পোশাক ও ফ্যাশন",
  "রান্নার সরঞ্জাম",
  "স্বাস্থ্য ও সৌন্দর্য",
];

function TypewriterText() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = TYPEWRITER_TEXTS[index];
    let timeout: ReturnType<typeof setTimeout>;

    if (!isDeleting && displayed.length < current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length + 1));
      }, 80);
    } else if (!isDeleting && displayed.length === current.length) {
      timeout = setTimeout(() => setIsDeleting(true), 1800);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, displayed.length - 1));
      }, 40);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setIndex((prev) => (prev + 1) % TYPEWRITER_TEXTS.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, index]);

  return (
    <span className="text-primary">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
}

export function HeroSection() {
  return (
    <section
      className="pt-20 pb-16 overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, hsl(40,33%,93%) 0%, hsl(40,33%,98%) 50%, hsl(30,40%,92%) 100%)",
      }}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left">

            {/* TITLE with typewriter */}
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 mb-4 leading-tight"
            >
              আপনার জন্য{" "}
              <span className="block mt-1">
                <TypewriterText />
              </span>
              <span className="block text-slate-800 mt-1">
                এখন পাচ্ছেন ঘরে বসে
              </span>
            </motion.h1>

            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.6 }}
              className="text-base text-slate-600 max-w-xl mx-auto lg:mx-0 mb-8"
            >
              যাচাইকৃত বিক্রেতা, নিরাপদ পেমেন্ট এবং দ্রুত ডেলিভারির সাথে
              অনলাইনে কেনাকাটার নতুন অভিজ্ঞতা নিন।
            </motion.p>

            {/* CTA BUTTON */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 flex justify-center lg:justify-start"
            >
              <button
                className="group flex items-center gap-3 px-8 py-4 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-xl active:scale-95 transition-all duration-300"
                style={{
                  background:
                    "linear-gradient(90deg, hsl(30,48%,58%) 0%, hsl(28,43%,52%) 100%)",
                }}
              >
                এখনই কেনাকাটা করুন
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </motion.div>
          </div>

          {/* RIGHT — LOTTIE ANIMATION */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.7 }}
            className="relative flex justify-center lg:justify-end"
          >
            {/* Decorative glow behind animation */}
            <div
              className="absolute inset-0 rounded-3xl blur-3xl opacity-30 scale-90"
              style={{
                background:
                  "radial-gradient(ellipse, hsl(30,48%,64%) 0%, transparent 70%)",
              }}
            />
            <div className="relative w-full max-w-lg">
              <Lottie
                animationData={shoppingCart}
                loop={true}
                autoplay={true}
                className="w-full h-auto"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}