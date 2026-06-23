"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Bell, Package, Tag, CreditCard } from "lucide-react";
import { Card } from "@/components/ui/card";

const NOTIFICATIONS = [
  { id: "1", type: "order", title: "Order Shipped", desc: "Your order ORD-8829 is on the way.", time: "2 hours ago", icon: Package, color: "bg-blue-100 text-blue-600" },
  { id: "2", type: "campaign", title: "Tech Upgrade Week Started!", desc: "Get up to 40% off on all electronics.", time: "5 hours ago", icon: Tag, color: "bg-pink-100 text-pink-600" },
  { id: "3", type: "system", title: "Escrow Payment Released", desc: "Funds for ORD-7710 have been released.", time: "1 day ago", icon: CreditCard, color: "bg-green-100 text-green-600" },
];

export default function NotificationsPage() {
  const [activeTab, setActiveTab] = useState("all");

  return (
    <div className="max-w-3xl mx-auto px-4 py-12 min-h-[calc(100vh-64px)]">
      <div className="flex items-center gap-4 mb-8">
        <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
          <Bell className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h1 className="text-3xl font-extrabold text-slate-900">Notifications</h1>
          <p className="text-slate-500">Stay updated with your activities.</p>
        </div>
      </div>

      <div className="flex gap-2 mb-8 border-b border-slate-200 pb-4">
        {["all", "orders", "campaigns"].map(tab => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-full text-sm font-bold capitalize transition-all cursor-pointer ${
              activeTab === tab ? "bg-slate-900 text-white shadow-md" : "bg-white text-slate-500 hover:bg-slate-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {NOTIFICATIONS.map((note, index) => (
          <motion.div
            key={note.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Card className="p-4 flex gap-4 items-start hover:shadow-md transition-shadow cursor-pointer border-slate-200">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${note.color}`}>
                <note.icon className="w-5 h-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-start mb-1">
                  <h3 className="font-bold text-slate-900">{note.title}</h3>
                  <span className="text-xs font-semibold text-slate-400">{note.time}</span>
                </div>
                <p className="text-sm text-slate-600">{note.desc}</p>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
