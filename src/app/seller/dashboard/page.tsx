"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { DollarSign, ShoppingBag, TrendingUp, Wallet, Sparkles, Image as ImageIcon, Search } from "lucide-react";

export default function DashboardPage() {
  return (
    <div className="p-6 md:p-8 max-w-7xl mx-auto space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Seller Dashboard</h1>
          <p className="text-slate-500 text-sm">Welcome back, TechNexus Labs. You are currently Level 2.</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90 text-white shadow-lg">
          Add New Product
        </Button>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {[
          { title: "Total Sales", value: "৳ 1,245,000", change: "+14.5%", icon: DollarSign },
          { title: "Active Orders", value: "142", change: "+5.2%", icon: ShoppingBag },
          { title: "Net Revenue", value: "৳ 980,500", change: "+12.1%", icon: TrendingUp },
          { title: "Escrow Wallet", value: "৳ 245,000", change: "Available", icon: Wallet },
        ].map((metric, i) => (
          <Card key={i} className="p-6 border-slate-100 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 rounded-xl bg-primary/10">
                <metric.icon className="h-6 w-6 text-primary" />
              </div>
              <Badge variant={i === 3 ? "default" : "secondary"} className={i === 3 ? "bg-green-100 text-green-700 hover:bg-green-100" : "bg-emerald-50 text-emerald-600"}>
                {metric.change}
              </Badge>
            </div>
            <div>
              <p className="text-sm font-medium text-slate-500">{metric.title}</p>
              <h3 className="text-2xl font-bold text-slate-900">{metric.value}</h3>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Inventory Database */}
        <Card className="lg:col-span-2 p-6 border-slate-100 shadow-sm flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-slate-900">Inventory Overview</h3>
            <Button variant="outline" size="sm">View All</Button>
          </div>
          
          <div className="overflow-x-auto flex-1">
            <table className="w-full text-sm text-left">
              <thead className="text-xs text-slate-500 bg-slate-50 uppercase">
                <tr>
                  <th className="px-4 py-3 rounded-l-lg">Product</th>
                  <th className="px-4 py-3">Stock</th>
                  <th className="px-4 py-3">Price</th>
                  <th className="px-4 py-3">Health</th>
                  <th className="px-4 py-3 rounded-r-lg">Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { name: "Quantum Series X Hub", stock: 45, price: "৳ 89,999", health: "Excellent" },
                  { name: "Acoustic ANC Headphones", stock: 12, price: "৳ 12,500", health: "Action Required" },
                  { name: "UltraVision 4K Monitor", stock: 0, price: "৳ 45,000", health: "Out of Stock" },
                ].map((item, i) => (
                  <tr key={i} className="border-b border-slate-50 last:border-0 hover:bg-slate-50/50 transition-colors">
                    <td className="px-4 py-4 font-medium text-slate-900">{item.name}</td>
                    <td className="px-4 py-4">
                      <span className={`px-2 py-1 rounded-md text-xs font-semibold ${item.stock > 20 ? 'bg-green-100 text-green-700' : item.stock > 0 ? 'bg-orange-100 text-orange-700' : 'bg-red-100 text-red-700'}`}>
                        {item.stock} Units
                      </span>
                    </td>
                    <td className="px-4 py-4">{item.price}</td>
                    <td className="px-4 py-4">
                      <span className={`text-xs font-semibold ${item.health === 'Excellent' ? 'text-green-600' : item.health === 'Action Required' ? 'text-orange-600' : 'text-red-600'}`}>
                        {item.health}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <Button variant="ghost" size="sm" className="h-8">Edit</Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        {/* AI Listing Optimizer (Beta) */}
        <Card className="p-6 border-slate-100 shadow-sm bg-gradient-to-b from-white to-primary/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-4 opacity-10">
            <Sparkles className="h-24 w-24 text-primary" />
          </div>
          <div className="flex items-center gap-2 mb-2 relative z-10">
            <Sparkles className="h-5 w-5 text-primary" />
            <h3 className="font-bold text-slate-900">AI Listing Optimizer</h3>
            <Badge variant="secondary" className="ml-auto bg-primary/10 text-primary text-[10px]">BETA</Badge>
          </div>
          <p className="text-sm text-slate-500 mb-6 relative z-10">
            Boost your sales by letting our AI enhance your product assets automatically.
          </p>

          <div className="space-y-4 relative z-10">
            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                <ImageIcon className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold">Image Quality</span>
                  <span className="text-sm font-bold text-blue-600">65%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-blue-500 w-[65%]" />
                </div>
              </div>
            </div>

            <div className="p-4 bg-white rounded-xl border border-slate-100 shadow-sm flex items-center gap-4">
              <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                <Search className="h-5 w-5" />
              </div>
              <div className="flex-1">
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-semibold">SEO Score</span>
                  <span className="text-sm font-bold text-purple-600">82%</span>
                </div>
                <div className="h-2 bg-slate-100 rounded-full w-full overflow-hidden">
                  <div className="h-full bg-purple-500 w-[82%]" />
                </div>
              </div>
            </div>
            
            <Button className="w-full bg-slate-900 hover:bg-slate-800 text-white mt-2">
              Run Auto-Enhance
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}
