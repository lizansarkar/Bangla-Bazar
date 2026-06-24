"use client";

import Link from "next/link";
import { Search, ShoppingCart, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/store/cartStore";
import { useAuthStore } from "@/store/authStore";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function Header() {
  const router = useRouter();
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);
  
  const totalItems = useCartStore((state) => state.totalItems());
  const { user, isAuthenticated, logout } = useAuthStore();

  // Handle transparent to blur transition on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  // Shared active/hover design styles for dynamic navlinks
  const getNavLinkClass = (path: string) => {
    const isActive = pathname === path;
    return cn(
      "relative font-medium text-sm transition-all duration-300 cursor-pointer py-1",
      isActive 
        ? "text-[#D1A174] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] after:bg-[#D1A174]" 
        : "text-foreground/80 hover:text-[#D1A174]"
    );
  };

  return (
    <header 
      className={cn(
        "sticky top-0 z-50 w-full border-b transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md" 
          : "bg-background border-transparent"
      )}
    >
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6 relative">
        
        {/* Left Side: Brand Logo */}
        <div className="flex items-center">
          <Link href="/" className="flex items-center space-x-2">
            <img src="/logo.png" alt="Bangla Bazar Logo" className="h-6 md:h-12 w-auto" />
          </Link>
        </div>
        
        {/* Absolute Centered Navigation Links */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 transform -translate-x-1/2">
          <Link href="/categories" className={getNavLinkClass("/categories")}>Categories</Link>
          <Link href="/brands" className={getNavLinkClass("/brands")}>Brands</Link>
          <Link href="/stores" className={getNavLinkClass("/stores")}>Stores</Link>
        </nav>

        {/* Right Side: Utilities (Search, Actions) */}
        <div className="flex items-center justify-end space-x-4 ml-auto flex-1 md:flex-initial">
          <form onSubmit={handleSearch} className="w-full max-w-xs hidden lg:flex items-center relative">
            <input 
              type="search" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search products, brands..." 
              className="flex h-10 w-full rounded-full border border-input bg-muted/50 px-4 py-2 text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D1A174] pr-12 transition-all duration-300"
            />
            <Button 
              type="submit" 
              size="icon" 
              variant="default" 
              className="absolute right-0 h-10 w-10 rounded-r-full rounded-l-none bg-[#D1A174] hover:bg-[#C59263] cursor-pointer text-white transition-colors duration-300"
            >
              <Search className="h-4 w-4" />
            </Button>
          </form>
          
          <nav className="flex items-center space-x-2">
            {/* Notifications Button */}
            <Button variant="ghost" size="icon" className="relative cursor-pointer transition-colors duration-300 hover:text-[#D1A174]" asChild>
              <Link href="/notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
              </Link>
            </Button>

            {/* Shopping Cart Button */}
            <Button variant="ghost" size="icon" className="relative cursor-pointer transition-colors duration-300 hover:text-[#D1A174]" asChild>
              <Link href="/cart">
                <ShoppingCart className="h-5 w-5" />
                {totalItems > 0 && (
                  <span className="absolute -top-1 -right-1 h-5 w-5 rounded-full bg-destructive text-white text-[10px] font-bold flex items-center justify-center animate-in fade-in zoom-in duration-300">
                    {totalItems}
                  </span>
                )}
              </Link>
            </Button>

            {/* Authentication Avatar State */}
            {isAuthenticated && user ? (
              <div className="flex items-center gap-2 cursor-pointer ml-2">
                <div 
                  className="w-8 h-8 rounded-full bg-[#D1A174]/20 flex items-center justify-center border border-[#D1A174]/50 text-[#D1A174] font-bold text-xs transition-transform duration-300 hover:scale-105" 
                  onClick={logout} 
                  title="Click to logout"
                >
                  {user.name.charAt(0)}
                </div>
              </div>
            ) : (
              <Button variant="ghost" size="icon" className="cursor-pointer transition-colors duration-300 hover:text-[#D1A174]" asChild>
                <Link href="/auth">
                  <User className="h-5 w-5" />
                </Link>
              </Button>
            )}
          </nav>
        </div>

      </div>
    </header>
  );
}