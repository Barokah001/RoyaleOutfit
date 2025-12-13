// app/collections/[slug]/page.tsx
"use client";

import { ProductCard } from "@/components/store/ProductCard";
import { Filter, Grid, List } from "lucide-react";

// Complete product database
const allProducts = [
  // KAFTANS
  {
    id: "p1",
    name: "Emerald Kaftan with Gold Monogram",
    price: 75000,
    slug: "kaftan-emerald",
    imageUrl: "/images/kaftan-emerald.jpg",
    images: ["/images/kaftan-emerald.jpg", "/images/kaftan-emerald-2.jpg", "/images/kaftan-emerald-3.jpg"],
    description: "A luxurious, custom-tailored kaftan made from premium silk-cotton blend.",
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
    images: ["/images/kaftan-blue.jpg", "/images/kaftan-blue-2.jpg", "/images/kaftan-blue-3.jpg"],
    description: "Elegant royal blue kaftan with silver embroidery.",
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
    images: ["/images/kaftan-white.jpg", "/images/kaftan-white-2.jpg", "/images/kaftan-white-3.jpg"],
    description: "Pure white kaftan with subtle gold accents.",
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
    images: ["/images/kaftan-burgundy.jpg", "/images/kaftan-burgundy-2.jpg", "/images/kaftan-burgundy-3.jpg"],
    description: "Rich burgundy kaftan with intricate beadwork.",
    category: "Kaftans",
    availableSizes: ["M", "L", "XL"],
    isMonogrammed: true,
  },
  {
    id: "p5",
    name: "Navy Ceremonial Kaftan",
    price: 78000,
    slug: "kaftan-navy-ceremonial",
    imageUrl: "/images/kaftan-navy.jpg",
    images: ["/images/kaftan-navy.jpg", "/images/kaftan-navy-2.jpg", "/images/kaftan-navy-3.jpg"],
    description: "Navy blue ceremonial kaftan with gold threading.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
  },
  {
    id: "p6",
    name: "Black Premium Kaftan",
    price: 82000,
    slug: "kaftan-black-premium",
    imageUrl: "/images/kaftan-black.jpg",
    images: ["/images/kaftan-black.jpg", "/images/kaftan-black-2.jpg", "/images/kaftan-black-3.jpg"],
    description: "Sophisticated black kaftan with silver accents.",
    category: "Kaftans",
    availableSizes: ["M", "L", "XL", "XXL"],
    isMonogrammed: true,
  },

  // CAPS
  {
    id: "p7",
    name: "Aso Oke Fila Cap - Red",
    price: 15000,
    slug: "cap-aso-oke-red",
    imageUrl: "/images/cap-red.jpg",
    images: ["/images/cap-red.jpg", "/images/cap-red-2.jpg", "/images/cap-red-3.jpg"],
    description: "Traditional Nigerian cap made from authentic Aso Oke fabric in vibrant red.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },
  {
    id: "p8",
    name: "Aso Oke Fila Cap - Gold",
    price: 18000,
    slug: "cap-aso-oke-gold",
    imageUrl: "/images/cap-gold.jpg",
    images: ["/images/cap-gold.jpg", "/images/cap-gold-2.jpg", "/images/cap-gold-3.jpg"],
    description: "Premium gold Aso Oke cap with intricate threading.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },
  {
    id: "p9",
    name: "Traditional Fila Cap - Blue",
    price: 16000,
    slug: "cap-traditional-blue",
    imageUrl: "/images/cap-blue.jpg",
    images: ["/images/cap-blue.jpg", "/images/cap-blue-2.jpg", "/images/cap-blue-3.jpg"],
    description: "Handwoven traditional cap in royal blue.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },
  {
    id: "p10",
    name: "Embroidered Fila Cap - White",
    price: 17000,
    slug: "cap-embroidered-white",
    imageUrl: "/images/cap-white.jpg",
    images: ["/images/cap-white.jpg", "/images/cap-white-2.jpg", "/images/cap-white-3.jpg"],
    description: "White Fila cap with gold embroidery.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },
  {
    id: "p11",
    name: "Luxury Fila Cap - Burgundy",
    price: 19000,
    slug: "cap-luxury-burgundy",
    imageUrl: "/images/cap-burgundy.jpg",
    images: ["/images/cap-burgundy.jpg", "/images/cap-burgundy-2.jpg", "/images/cap-burgundy-3.jpg"],
    description: "Burgundy Fila cap with premium finish.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
  },

  // TROUSERS
  {
    id: "p12",
    name: "Linen Trousers - Olive Green",
    price: 35000,
    slug: "trousers-olive",
    imageUrl: "/images/trousers-olive.jpg",
    images: ["/images/trousers-olive.jpg", "/images/trousers-olive-2.jpg", "/images/trousers-olive-3.jpg"],
    description: "Comfortable linen trousers in olive green.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38"],
    isMonogrammed: false,
  },
  {
    id: "p13",
    name: "Premium Black Trousers",
    price: 40000,
    slug: "trousers-black-premium",
    imageUrl: "/images/trousers-black.jpg",
    images: ["/images/trousers-black.jpg", "/images/trousers-black-2.jpg", "/images/trousers-black-3.jpg"],
    description: "Classic black trousers with modern fit.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38", "40"],
    isMonogrammed: false,
  },
  {
    id: "p14",
    name: "Beige Casual Trousers",
    price: 38000,
    slug: "trousers-beige-casual",
    imageUrl: "/images/trousers-beige.jpg",
    images: ["/images/trousers-beige.jpg", "/images/trousers-beige-2.jpg", "/images/trousers-beige-3.jpg"],
    description: "Lightweight beige trousers for all occasions.",
    category: "Trousers",
    availableSizes: ["32", "34", "36", "38"],
    isMonogrammed: false,
  },
  {
    id: "p15",
    name: "Navy Formal Trousers",
    price: 42000,
    slug: "trousers-navy-formal",
    imageUrl: "/images/trousers-navy.jpg",
    images: ["/images/trousers-navy.jpg", "/images/trousers-navy-2.jpg", "/images/trousers-navy-3.jpg"],
    description: "Navy formal trousers with perfect tailoring.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38"],
    isMonogrammed: false,
  },
  {
    id: "p16",
    name: "Grey Slim Fit Trousers",
    price: 39000,
    slug: "trousers-grey-slim",
    imageUrl: "/images/trousers-grey.jpg",
    images: ["/images/trousers-grey.jpg", "/images/trousers-grey-2.jpg", "/images/trousers-grey-3.jpg"],
    description: "Modern slim fit trousers in charcoal grey.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36"],
    isMonogrammed: false,
  },

  // READY-MADE WEARS
  {
    id: "p17",
    name: "Navy Blue Senator Wear",
    price: 55000,
    slug: "readymade-senator-navy",
    imageUrl: "/images/senator-navy.jpg",
    images: ["/images/senator-navy.jpg", "/images/senator-navy-2.jpg", "/images/senator-navy-3.jpg"],
    description: "Complete navy blue senator outfit.",
    category: "Ready-Made Wears",
    availableSizes: ["M", "L", "XL", "XXL"],
    isMonogrammed: false,
  },
  {
    id: "p18",
    name: "White Agbada Set",
    price: 95000,
    slug: "readymade-agbada-white",
    imageUrl: "/images/agbada-white.jpg",
    images: ["/images/agbada-white.jpg", "/images/agbada-white-2.jpg", "/images/agbada-white-3.jpg"],
    description: "Complete white Agbada set with cap.",
    category: "Ready-Made Wears",
    availableSizes: ["L", "XL", "XXL"],
    isMonogrammed: true,
  },
  {
    id: "p19",
    name: "Royal Blue Senator Set",
    price: 58000,
    slug: "readymade-senator-royal",
    imageUrl: "/images/senator-royal.jpg",
    images: ["/images/senator-royal.jpg", "/images/senator-royal-2.jpg", "/images/senator-royal-3.jpg"],
    description: "Royal blue senator wear with matching cap.",
    category: "Ready-Made Wears",
    availableSizes: ["M", "L", "XL"],
    isMonogrammed: false,
  },
  {
    id: "p20",
    name: "Burgundy Agbada Complete",
    price: 98000,
    slug: "readymade-agbada-burgundy",
    imageUrl: "/images/agbada-burgundy.jpg",
    images: ["/images/agbada-burgundy.jpg", "/images/agbada-burgundy-2.jpg", "/images/agbada-burgundy-3.jpg"],
    description: "Luxury burgundy Agbada with full accessories.",
    category: "Ready-Made Wears",
    availableSizes: ["L", "XL", "XXL"],
    isMonogrammed: true,
  },
];

const fetchProductsByCollection = (collectionSlug: string) => {
  const categoryMap: { [key: string]: string } = {
    kaftans: "Kaftans",
    caps: "Caps",
    trousers: "Trousers",
    readymade: "Ready-Made Wears",
    all: "",
  };

  const targetCategory = categoryMap[collectionSlug.toLowerCase()];

  if (!targetCategory) return allProducts;

  return allProducts.filter((p) => p.category === targetCategory);
};

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collectionSlug = params.slug;
  const products = fetchProductsByCollection(collectionSlug);

  const collectionName = collectionSlug
    ? collectionSlug.replace(/-/g, " ").toUpperCase()
    : "ALL COLLECTIONS";

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen">
      <header className="mb-10 p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#4a5d3f]">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#4a5d3f] mb-2">
          {collectionName}
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Discover {products.length} exclusive items in this collection
        </p>
      </header>

      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="text-sm font-medium text-gray-700">
          Showing 1 - {products.length} of {products.length} products
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
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-gray-700">
            No Products Found
          </h2>
          <p className="text-gray-500 mt-2">
            Check back soon or explore our other collections.
          </p>
        </div>
      )}
    </div>
  );
}