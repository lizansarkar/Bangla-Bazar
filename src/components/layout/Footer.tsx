import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-50 mt-auto">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary">BanglaBazar</h3>
            <p className="text-sm text-slate-400">
              Frictionless Commerce for the Digital Age. Securing the future of Bangladeshi Digital Commerce.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Marketplace</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/categories" className="hover:text-primary transition-colors duration-300 cursor-pointer">All Categories</Link></li>
              <li><Link href="/flash-deals" className="hover:text-primary transition-colors duration-300 cursor-pointer">Flash Deals</Link></li>
              <li><Link href="/search" className="hover:text-primary transition-colors duration-300 cursor-pointer">Search Products</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-slate-200">Partner with Us</h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li><Link href="/auth" className="hover:text-primary transition-colors duration-300 cursor-pointer">Become a Seller</Link></li>
              <li><Link href="/auth" className="hover:text-primary transition-colors duration-300 cursor-pointer">Delivery Fleet</Link></li>
              <li><Link href="/seller/dashboard" className="hover:text-primary transition-colors duration-300 cursor-pointer">Seller Dashboard</Link></li>
            </ul>
          </div>
          
          <div className="rounded-2xl bg-slate-800 p-6 border border-slate-700">
            <div className="flex items-center space-x-3 mb-4">
              <ShieldCheck className="h-8 w-8 text-primary" />
              <h4 className="font-semibold text-lg text-slate-100">Escrow Protected</h4>
            </div>
            <p className="text-sm text-slate-400 mb-6">
              Institutional-Grade Security for Every Transaction. Your funds are secured until delivery is confirmed.
            </p>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-sm">
                <span className="text-slate-400">Protected Balance:</span>
                <span className="font-bold text-primary">$14,285.50</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-2">
                <Button variant="default" className="w-full font-semibold" asChild>
                  <Link href="/auth">Join BanglaBazar</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} BanglaBazar. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
