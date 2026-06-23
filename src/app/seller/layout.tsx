"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { LayoutDashboard, Truck, Package, ShoppingBag, Wallet, Settings, HelpCircle, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const MENU_ITEMS = [
  { name: "Dashboard", icon: LayoutDashboard, href: "/seller/dashboard" },
  { name: "Analytics", icon: Sparkles, href: "/seller/analytics" },
  { name: "Products", icon: Package, href: "/seller/products" },
  { name: "Orders", icon: ShoppingBag, href: "/seller/orders" },
  { name: "Logistics", icon: Truck, href: "/seller/logistics" },
  { name: "Wallet", icon: Wallet, href: "/seller/wallet" },
];

export default function SellerLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-[calc(100vh-64px)] w-full bg-slate-50">
      {/* Sidebar */}
      <aside className="w-64 border-r bg-white flex flex-col hidden md:flex">
        <div className="p-6">
          <Button className="w-full bg-gradient-to-r from-primary to-secondary text-white shadow-lg border-none flex items-center justify-center gap-2">
            <Sparkles className="h-4 w-4" /> AI Optimization
          </Button>
        </div>
        <nav className="flex-1 px-4 space-y-2 overflow-y-auto">
          {MENU_ITEMS.map((item) => {
            const isActive = pathname.startsWith(item.href);
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all font-medium ${
                  isActive 
                    ? "bg-primary/10 text-primary" 
                    : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                <item.icon className={`h-5 w-5 ${isActive ? "text-primary" : "text-slate-400"}`} />
                {item.name}
              </Link>
            );
          })}
        </nav>
        <div className="p-4 border-t space-y-2">
          <Link href="/seller/settings" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-slate-900">
            <Settings className="h-4 w-4 text-slate-400" /> Settings
          </Link>
          <Link href="/seller/support" className="flex items-center gap-3 px-4 py-2 text-sm text-slate-600 hover:text-slate-900">
            <HelpCircle className="h-4 w-4 text-slate-400" /> Support
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {children}
      </main>
    </div>
  );
}
