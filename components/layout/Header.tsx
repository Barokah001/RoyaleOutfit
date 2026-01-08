// components/layout/Header.tsx - With Dynamic Cart Count
"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { getCartCount } from "@/lib/cartUtils";

const navLinks = [
  { href: "/collections/kaftans", label: "Kaftans" },
  { href: "/collections/caps", label: "Caps & Headwear" },
  { href: "/collections/agbada", label: "Agbada Set" },
  { href: "/collections/fabrics", label: "Fabrics" },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  // Update cart count on mount and when cart changes
  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };

    // Initial load
    updateCartCount();

    // Listen for cart updates
    window.addEventListener("cartUpdated", updateCartCount);

    // Cleanup
    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#4a5d3f] transition-colors hover:text-black"
        >
          ROYALE OUTFITS
        </Link>

        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 group py-2"
            >
              {link.label}
              <span className="absolute left-0 bottom-0 h-[2px] w-0 bg-[#4a5d3f] transition-all duration-300 group-hover:w-full"></span>
            </Link>
          ))}
        </nav>

        <div className="flex items-center space-x-2 md:space-x-4">
          <button
            className="p-2 rounded-full hover:bg-gray-100 transition-colors hidden sm:block"
            title="Search"
          >
            <Search className="h-5 w-5 text-gray-700" />
          </button>

          <Link
            href="/sign-in"
            className="p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Account"
          >
            <User className="h-5 w-5 text-gray-700" />
          </Link>

          <Link
            href="/cart"
            className="relative p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Shopping Cart"
          >
            <ShoppingCart className="h-5 w-5 text-[#4a5d3f]" />
            {cartCount > 0 && (
              <span className="absolute top-1 right-1 flex h-5 w-5 items-center justify-center rounded-full bg-[#4a5d3f] text-xs font-bold text-white leading-none">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </Link>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-full hover:bg-gray-100 transition-colors"
            title="Menu"
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6 text-gray-700" />
            ) : (
              <Menu className="h-6 w-6 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden py-4 border-t border-gray-200 bg-white">
          <nav className="flex flex-col space-y-3 px-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-base font-medium text-gray-700 hover:text-gray-900 py-2 px-4 rounded-lg hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
