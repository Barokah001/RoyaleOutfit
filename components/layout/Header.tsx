// components/layout/Header.tsx - With Dropdown Menus
"use client";

import Link from "next/link";
import { ShoppingCart, User, Menu, Search, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import { getCartCount } from "@/lib/cartUtils";

const navLinks = [
  {
    label: "Shop",
    dropdown: [
      { name: "All Products", href: "/products" },
      { name: "Kaftans", href: "/collections/kaftans" },
      { name: "Caps & Headwear", href: "/collections/caps" },
      { name: "Agbada Sets", href: "/collections/agbada" },
      { name: "Premium Fabrics", href: "/collections/fabrics" },
    ],
  },
  {
    label: "Customer Care",
    dropdown: [
      { name: "Contact Us", href: "/contact" },
      { name: "FAQs", href: "/faq" },
      { name: "Shipping & Returns", href: "/policy/shipping" },
    ],
  },
  {
    label: "Company",
    dropdown: [
      { name: "About Us", href: "/about" },
      { name: "Careers", href: "/careers" },
      { name: "Terms of Service", href: "/policy/terms" },
    ],
  },
];

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const updateCartCount = () => {
      setCartCount(getCartCount());
    };

    updateCartCount();
    window.addEventListener("cartUpdated", updateCartCount);

    return () => {
      window.removeEventListener("cartUpdated", updateCartCount);
    };
  }, []);

  const handleMouseEnter = (label: string) => {
    setActiveDropdown(label);
  };

  const handleMouseLeave = () => {
    setActiveDropdown(null);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tight text-[#4a5d3f] transition-colors hover:text-black"
        >
          ROYALE OUTFITS
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="relative group"
              onMouseEnter={() => handleMouseEnter(link.label)}
              onMouseLeave={handleMouseLeave}
            >
              <button className="flex items-center gap-1 text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 py-2">
                {link.label}
                <ChevronDown className="h-4 w-4" />
              </button>

              {/* Dropdown Menu */}
              {activeDropdown === link.label && (
                <div className="absolute top-full left-0 mt-0 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                  {link.dropdown.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2.5 text-sm text-gray-700 hover:bg-[#f5f9f5] hover:text-[#4a5d3f] transition-colors"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* Right Side Icons */}
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
        <div className="md:hidden py-4 border-t border-gray-200 bg-white max-h-[calc(100vh-5rem)] overflow-y-auto">
          <nav className="flex flex-col px-4">
            {navLinks.map((link) => (
              <div key={link.label} className="border-b border-gray-100 last:border-0">
                <div className="py-3">
                  <div className="font-semibold text-gray-900 mb-2">{link.label}</div>
                  <div className="space-y-1 pl-4">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block text-sm text-gray-700 hover:text-[#4a5d3f] py-2 transition-colors"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}