// app/products/page.tsx
"use client";

import { ProductCard } from "@/components/store/ProductCard";
import { Filter, Grid, List } from "lucide-react";
import { useState } from "react";

// Generate mock products
const allProducts = [
  {
    id: "p1",
    name: "Emerald Kaftan with Gold Monogram",
    price: 75000,
    slug: "kaftan-emerald",
    imageUrl: "/images/kaftan-emerald.jpg",
    images: [
      "/images/kaftan-emerald.jpg",
      "/images/kaftan-emerald-2.jpg",
      "/images/kaftan-emerald-3.jpg"
    ],
    description: "A luxurious, custom-tailored kaftan made from premium silk-cotton blend. Features intricate gold thread embroidery and a personalized chest monogram.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
  },
  {
    id: "p2",
    name: "Royal Blue Kaftan",
    price: 80000,
    slug: "kaftan-royal-blue",
    imageUrl: "/images/kaftan-blue.jpg",
    images: [
      "/images/kaftan-blue.jpg",
      "/images/kaftan-blue-2.jpg",
      "/images/kaftan-blue-3.jpg"
    ],
    description: "Elegant royal blue kaftan with silver embroidery and premium fabric finish.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
  },
  {
    id: "p3",
    name: "Classic White Kaftan",
    price: 70000,
    slug: "kaftan-white-classic",
    imageUrl: "/images/kaftan-white.jpg",
    images: [
      "/images/kaftan-white.jpg",
      "/images/kaftan-white-2.jpg",
      "/images/kaftan-white-3.jpg"
    ],
    description: "Pure white kaftan with subtle gold accents, perfect for special occasions.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    isMonogrammed: true,
  },
  {
    id: "p4",
    name: "Burgundy Luxury Kaftan",
    price: 85000,
    slug: "kaftan-burgundy",
    imageUrl: "/images/kaftan-burgundy.jpg",
    images: [
      "/images/kaftan-burgundy.jpg",
      "/images/kaftan-burgundy-2.jpg",
      "/images/kaftan-burgundy-3.jpg"
    ],
    description: "Rich burgundy kaftan with intricate beadwork and premium silk material.",
    category: "Kaftans",
    availableSizes: ["M", "L", "XL"],
    isMonogrammed: true,
  },
  {
    id: "p5",
    name: "Aso Oke Fila Cap - Red",
    price: 15000,
    slug: "cap-aso-oke-red",
    imageUrl: "/images/cap-red.jpg",
    images: [
      "/images/cap-red.jpg",
      "/images/cap-red-2.jpg",
      "/images/cap-red-3.jpg"
    ],
    description: "Traditional Nigerian cap made from authentic Aso Oke fabric in vibrant red.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },
  {
    id: "p6",
    name: "Aso Oke Fila Cap - Gold",
    price: 18000,
    slug: "cap-aso-oke-gold",
    imageUrl: "/images/cap-gold.jpg",
    images: [
      "/images/cap-gold.jpg",
      "/images/cap-gold-2.jpg",
      "/images/cap-gold-3.jpg"
    ],
    description: "Premium gold Aso Oke cap with intricate threading and traditional design.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },
  {
    id: "p7",
    name: "Traditional Fila Cap - Blue",
    price: 16000,
    slug: "cap-traditional-blue",
    imageUrl: "/images/cap-blue.jpg",
    images: [
      "/images/cap-blue.jpg",
      "/images/cap-blue-2.jpg",
      "/images/cap-blue-3.jpg"
    ],
    description: "Handwoven traditional cap in royal blue with fine craftsmanship.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },
  {
    id: "p8",
    name: "Linen Trousers - Olive Green",
    price: 35000,
    slug: "trousers-olive",
    imageUrl: "/images/trousers-olive.jpg",
    images: [
      "/images/trousers-olive.jpg",
      "/images/trousers-olive-2.jpg",
      "/images/trousers-olive-3.jpg"
    ],
    description: "Comfortable linen trousers in olive green, perfect for any occasion.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38"],
    isMonogrammed: false,
  },
  {
    id: "p9",
    name: "Premium Black Trousers",
    price: 40000,
    slug: "trousers-black-premium",
    imageUrl: "/images/trousers-black.jpg",
    images: [
      "/images/trousers-black.jpg",
      "/images/trousers-black-2.jpg",
      "/images/trousers-black-3.jpg"
    ],
    description: "Classic black trousers with modern fit and premium fabric.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38", "40"],
    isMonogrammed: false,
  },
  {
    id: "p10",
    name: "Beige Casual Trousers",
    price: 38000,
    slug: "trousers-beige-casual",
    imageUrl: "/images/trousers-beige.jpg",
    images: [
      "/images/trousers-beige.jpg",
      "/images/trousers-beige-2.jpg",
      "/images/trousers-beige-3.jpg"
    ],
    description: "Lightweight beige trousers perfect for casual and formal wear.",
    category: "Trousers",
    availableSizes: ["32", "34", "36", "38"],
    isMonogrammed: false,
  },
  {
    id: "p11",
    name: "Navy Blue Senator Wear",
    price: 55000,
    slug: "readymade-senator-navy",
    imageUrl: "/images/senator-navy.jpg",
    images: [
      "/images/senator-navy.jpg",
      "/images/senator-navy-2.jpg",
      "/images/senator-navy-3.jpg"
    ],
    description: "Complete navy blue senator outfit with matching trousers.",
    category: "Ready-Made Wears",
    availableSizes: ["M", "L", "XL", "XXL"],
    isMonogrammed: false,
  },
  {
    id: "p12",
    name: "White Agbada Set",
    price: 95000,
    slug: "readymade-agbada-white",
    imageUrl: "/images/agbada-white.jpg",
    images: [
      "/images/agbada-white.jpg",
      "/images/agbada-white-2.jpg",
      "/images/agbada-white-3.jpg"
    ],
    description: "Complete white Agbada set with intricate embroidery and cap included.",
    category: "Ready-Made Wears",
    availableSizes: ["L", "XL", "XXL"],
    isMonogrammed: true,
  },
];

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  
  const categories = ["All", "Kaftans", "Caps", "Trousers", "Ready-Made Wears"];
  
  const filteredProducts = selectedCategory === "All" 
    ? allProducts 
    : allProducts.filter(p => p.category === selectedCategory);

  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-10 text-center">
        <h1 className="text-5xl font-extrabold text-[#4a5d3f] mb-4">
          Our Products
        </h1>
        <p className="text-xl text-gray-600">
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