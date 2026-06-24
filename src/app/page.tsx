"use client";

import { motion } from "framer-motion";
import { HeroSection } from "@/components/home/HeroSection";
import { FlashDealsSection } from "@/components/home/FlashDealsSection";
import { JustForYouSection } from "@/components/home/JustForYouSection";
import { BestSellingSection } from "@/components/home/BestSellingSection";
import { WeeklyBestSection } from "@/components/home/WeeklyBestSection";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="flex flex-col gap-16 pb-16 overflow-hidden"
    >
      <HeroSection />
      <JustForYouSection />
      <BestSellingSection />
      <WeeklyBestSection />
      <FlashDealsSection />
    </motion.div>
  );
}
