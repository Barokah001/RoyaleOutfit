// app/products/page.tsx - With Grid/List Toggle, Search & Filter
"use client";

import { ProductCard } from "@/components/store/ProductCard";
import { Filter, Grid, List, Search, X } from "lucide-react";
import { useState } from "react";
import { allProducts } from "@/lib/productData";
import Image from "next/image";
import Link from "next/link";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("default");

  const categories = ["All", "Kaftans", "Caps", "Agbada Set", "Fabrics"];

  // Filter by category
  let filteredProducts =
    selectedCategory === "All"
      ? allProducts
      : allProducts.filter((p) => p.category === selectedCategory);

  // Filter by search query
  if (searchQuery) {
    filteredProducts = filteredProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // Filter by price range
  if (priceRange !== "all") {
    filteredProducts = filteredProducts.filter((p) => {
      if (priceRange === "under-50k") return p.price < 50000;
      if (priceRange === "50k-80k") return p.price >= 50000 && p.price <= 80000;
      if (priceRange === "above-80k") return p.price > 80000;
      return true;
    });
  }

  // Sort products
  if (sortBy === "price-low") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sortBy === "price-high") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sortBy === "name") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.name.localeCompare(b.name)
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen">
      <header className="mb-10 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a5d3f] mb-4">
          Our Products
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Explore our complete collection of premium African attire
        </p>
      </header>

      {/* Search Bar */}
      <div className="mb-8 max-w-2xl mx-auto">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 border-2 border-gray-300 rounded-full focus:border-[#4a5d3f] focus:outline-none transition-colors"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              <X className="h-5 w-5" />
            </button>
          )}
        </div>
      </div>

      {/* Category Filter */}
      <div className="mb-8 flex flex-wrap justify-center gap-3">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-[#4a5d3f] text-white shadow-md"
                : "bg-white text-gray-700 border border-gray-300 hover:border-[#4a5d3f]"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Toolbar */}
      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="text-sm font-medium text-gray-700">
          {filteredProducts.length}{" "}
          {filteredProducts.length === 1 ? "product" : "products"}
        </div>

        <div className="flex items-center space-x-4 flex-wrap gap-2">
          {/* Filter Button */}
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`flex items-center space-x-2 rounded-lg border px-4 py-2 text-sm transition-colors ${
              showFilters
                ? "bg-[#4a5d3f] text-white border-[#4a5d3f]"
                : "bg-white text-gray-700 border-gray-300 hover:border-[#4a5d3f]"
            }`}
          >
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>

          {/* Sort Dropdown */}
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-[#4a5d3f] focus:ring-[#4a5d3f] focus:outline-none transition"
          >
            <option value="default">Sort by Default</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="name">Name: A to Z</option>
          </select>

          {/* View Toggle */}
          <div className="hidden sm:flex border border-gray-300 rounded-lg p-1 bg-white">
            <button
              onClick={() => setViewMode("grid")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "grid"
                  ? "bg-[#4a5d3f] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <Grid className="h-5 w-5" />
            </button>
            <button
              onClick={() => setViewMode("list")}
              className={`p-2 rounded-md transition-colors ${
                viewMode === "list"
                  ? "bg-[#4a5d3f] text-white"
                  : "text-gray-500 hover:bg-gray-100"
              }`}
            >
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Filter Panel */}
      {showFilters && (
        <div className="mb-8 p-6 bg-white rounded-xl shadow-md border border-gray-200">
          <h3 className="text-lg font-bold text-gray-900 mb-4">
            Filter by Price
          </h3>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setPriceRange("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                priceRange === "all"
                  ? "bg-[#4a5d3f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              All Prices
            </button>
            <button
              onClick={() => setPriceRange("under-50k")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                priceRange === "under-50k"
                  ? "bg-[#4a5d3f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Under ₦50,000
            </button>
            <button
              onClick={() => setPriceRange("50k-80k")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                priceRange === "50k-80k"
                  ? "bg-[#4a5d3f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              ₦50,000 - ₦80,000
            </button>
            <button
              onClick={() => setPriceRange("above-80k")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                priceRange === "above-80k"
                  ? "bg-[#4a5d3f] text-white"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
            >
              Above ₦80,000
            </button>
          </div>
        </div>
      )}

      {/* Products Display */}
      {viewMode === "grid" ? (
        <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {filteredProducts.map((product) => (
            <Link
              key={product.id}
              href={`/product/${product.slug}`}
              className="flex gap-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="relative w-32 h-32 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="128px"
                  unoptimized
                />
              </div>
              <div className="flex-grow">
                <p className="text-xs font-medium text-gray-500 uppercase mb-1">
                  {product.category}
                </p>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-[#4a5d3f]">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {product.description}
                </p>
                <p className="text-2xl font-bold text-[#4a5d3f]">
                  ₦{product.price.toLocaleString()}
                </p>
              </div>
            </Link>
          ))}
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-gray-700">
            No Products Found
          </h2>
          <p className="text-gray-500 mt-2">
            Try adjusting your filters or search query
          </p>
          <button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
              setPriceRange("all");
            }}
            className="mt-6 px-6 py-3 bg-[#4a5d3f] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
          >
            Clear All Filters
          </button>
        </div>
      )}
    </div>
  );
}
