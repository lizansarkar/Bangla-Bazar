"use client";

import dynamic from "next/dynamic";
import { Card } from "@/components/ui/card";
import { ShieldCheck, Truck, Navigation, CheckCircle2, Clock } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Dynamically import Map component to avoid SSR window errors
const MapWithNoSSR = dynamic(() => import("@/components/seller/MapComponent"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-slate-100 animate-pulse rounded-2xl flex items-center justify-center text-slate-400">Loading Map...</div>
});

export default function LogisticsPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8 h-[calc(100vh-64px)] flex flex-col">
      <div>
        <h1 className="text-2xl font-bold text-slate-900 mb-2">Delivery & Fleet</h1>
        <div className="flex flex-wrap gap-4">
          <Card className="flex items-center gap-3 p-3 bg-white border-slate-200">
            <div className="p-2 bg-green-100 rounded-lg text-green-600"><ShieldCheck className="h-4 w-4" /></div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Trust Score</p>
              <p className="font-bold text-slate-900">98.5%</p>
            </div>
          </Card>
          <Card className="flex items-center gap-3 p-3 bg-white border-slate-200">
            <div className="p-2 bg-blue-100 rounded-lg text-blue-600"><Truck className="h-4 w-4" /></div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Active Fleet</p>
              <p className="font-bold text-slate-900">12 Drivers</p>
            </div>
          </Card>
          <Card className="flex items-center gap-3 p-3 bg-white border-slate-200">
            <div className="p-2 bg-orange-100 rounded-lg text-orange-600"><Navigation className="h-4 w-4" /></div>
            <div>
              <p className="text-xs text-slate-500 font-medium">On-Time Delivery</p>
              <p className="font-bold text-slate-900">94%</p>
            </div>
          </Card>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 flex-1 min-h-[500px]">
        {/* Left Side: Order Progress */}
        <div className="lg:col-span-1 space-y-6 flex flex-col">
          <Card className="p-6 border-slate-200 flex-1 flex flex-col">
            <div className="flex justify-between items-center mb-6">
              <h3 className="font-bold text-slate-900">Active Delivery</h3>
              <Badge variant="outline" className="text-primary border-primary">ORD-8829</Badge>
            </div>
            
            <div className="p-4 bg-slate-50 rounded-xl mb-6">
              <div className="flex gap-4">
                <div className="w-16 h-16 bg-white rounded-lg border overflow-hidden">
                   <img src="https://images.unsplash.com/photo-1598327105666-5b89351cb31b?w=100&q=80" alt="Item" className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 line-clamp-1">Titan X Pro Smart Handset</h4>
                  <p className="text-xs text-slate-500 mt-1">Delivery to: Dhanmondi, Dhaka</p>
                  <p className="text-xs font-semibold text-primary mt-1">Expected: 2:45 PM Today</p>
                </div>
              </div>
            </div>

            <div className="flex-1">
              <div className="relative pl-6 border-l-2 border-slate-200 space-y-8 pb-4 ml-3">
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white" />
                  <h4 className="font-bold text-slate-900 text-sm">Order Pending</h4>
                  <p className="text-xs text-slate-500">10:00 AM - Order placed and paid via Escrow</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-primary ring-4 ring-white" />
                  <h4 className="font-bold text-slate-900 text-sm">Picked Up</h4>
                  <p className="text-xs text-slate-500">11:30 AM - Package collected by Driver Karim</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[35px] top-0 w-6 h-6 rounded-full bg-primary flex items-center justify-center ring-4 ring-white shadow-md shadow-primary/30">
                    <div className="w-2 h-2 rounded-full bg-white animate-ping absolute" />
                    <div className="w-2 h-2 rounded-full bg-white relative z-10" />
                  </div>
                  <h4 className="font-bold text-primary text-sm">In Transit</h4>
                  <p className="text-xs text-slate-500">Currently near Banani. Est. arrival in 45 mins.</p>
                </div>
                <div className="relative">
                  <div className="absolute -left-[31px] top-1 w-4 h-4 rounded-full bg-slate-200 ring-4 ring-white" />
                  <h4 className="font-bold text-slate-400 text-sm">Delivered</h4>
                  <p className="text-xs text-slate-400">Waiting for customer confirmation to release funds.</p>
                </div>
              </div>
            </div>

            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white mt-auto">
              Contact Driver
            </Button>
          </Card>
        </div>

        {/* Right Side: Map Viewport */}
        <div className="lg:col-span-2 relative h-full min-h-[400px]">
          <MapWithNoSSR />
          <div className="absolute top-4 left-4 z-[400] bg-white/90 backdrop-blur-md p-3 rounded-xl shadow-lg border border-white flex gap-4 items-center">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-primary animate-pulse" />
              <span className="text-sm font-semibold">Live Tracking Active</span>
            </div>
            <div className="w-px h-6 bg-slate-200" />
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <Clock className="h-4 w-4" /> Driver: Karim
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
