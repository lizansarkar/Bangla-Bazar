import Link from "next/link";
import { Search, ShoppingCart, User, Bell } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="text-2xl font-bold tracking-tight text-primary">BanglaBazar</span>
        </Link>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
          <Link href="/categories" className="transition-colors hover:text-primary text-foreground/80">Categories</Link>
          <Link href="/brands" className="transition-colors hover:text-primary text-foreground/80">Brands</Link>
          <Link href="/stores" className="transition-colors hover:text-primary text-foreground/80">Stores</Link>
        </nav>

        <div className="flex flex-1 items-center justify-end space-x-4">
          <div className="w-full max-w-sm hidden md:flex items-center relative">
            <input 
              type="search" 
              placeholder="Search products, brands..." 
              className="flex h-10 w-full rounded-full border border-input bg-muted/50 px-4 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50 pr-12 transition-all duration-300"
            />
            <Button size="icon" variant="default" className="absolute right-0 h-10 w-10 rounded-r-full rounded-l-none">
              <Search className="h-4 w-4" />
            </Button>
          </div>
          
          <nav className="flex items-center space-x-2">
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/notifications">
                <Bell className="h-5 w-5" />
                <span className="absolute top-2 right-2 h-2 w-2 rounded-full bg-destructive" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" className="relative" asChild>
              <Link href="/checkout">
                <ShoppingCart className="h-5 w-5" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
              <Link href="/auth">
                <User className="h-5 w-5" />
              </Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
