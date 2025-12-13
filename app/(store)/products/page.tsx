// app/products/page.tsx - SIMPLIFIED VERSION
"use client";

import { ProductCard } from "@/components/store/ProductCard";
import { Filter, Grid, List } from "lucide-react";
import { useState } from "react";
import { allProducts } from "@/lib/productData";

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "Kaftans", "Caps", "Trousers", "Ready-Made Wears"];
  
  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

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

      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="text-sm font-medium text-gray-700">
          Showing {filteredProducts.length} products
        </div>

        <div className="flex items-center space-x-4 flex-wrap gap-2">
          <button className="flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-[#4a5d3f] transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>

          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-[#4a5d3f] focus:ring-[#4a5d3f] focus:outline-none transition">
            <option>Sort by Price: Low to High</option>
            <option>Sort by Price: High to Low</option>
            <option>Sort by Newest</option>
            <option>Sort by Name</option>
          </select>

          <div className="hidden sm:flex border border-gray-300 rounded-lg p-1">
            <button className="p-1 bg-[#4a5d3f] text-white rounded-md">
              <Grid className="h-5 w-5" />
            </button>
            <button className="p-1 text-gray-500 hover:bg-gray-100 rounded-md">
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-gray-700">
            No Products Found
          </h2>
          <p className="text-gray-500 mt-2">
            Try selecting a different category
          </p>
        </div>
      )}
    </div>
  );
}