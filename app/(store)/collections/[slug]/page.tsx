// app/collections/[slug]/page.tsx - Brown Theme
"use client";

import { ProductCard } from "@/components/store/ProductCard";
import { Filter, Grid, List } from "lucide-react";
import { use } from "react";
import { fetchProductsByCollection } from "@/lib/productData";

export default function CollectionDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug: collectionSlug } = use(params);
  const products = fetchProductsByCollection(collectionSlug);

  const collectionName = collectionSlug
    ? collectionSlug.replace(/-/g, " ").toUpperCase()
    : "ALL COLLECTIONS";

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen">
      <header className="mb-10 p-6 bg-white rounded-xl shadow-brown-lg border-t-4 border-primary">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2 font-display">
          {collectionName}
        </h1>
        <p className="text-lg md:text-xl text-brand-brown-600">
          Discover {products.length} exclusive items in this collection
        </p>
      </header>

      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="text-sm font-medium text-brand-brown-700">
          Showing 1 - {products.length} of {products.length} products
        </div>

        <div className="flex items-center space-x-4 flex-wrap gap-2">
          <button className="flex items-center space-x-2 rounded-lg border border-brand-brown-300 bg-white px-4 py-2 text-sm text-brand-brown-700 hover:border-primary transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>

          <select className="rounded-lg border border-brand-brown-300 bg-white px-4 py-2 text-sm text-brand-brown-700 focus:border-primary focus:ring-primary focus:outline-none transition">
            <option>Sort by Price: Low to High</option>
            <option>Sort by Price: High to Low</option>
            <option>Sort by Newest</option>
            <option>Sort by Name</option>
          </select>

          <div className="hidden sm:flex border border-brand-brown-300 rounded-lg p-1 bg-white">
            <button className="p-1 bg-primary text-white rounded-md">
              <Grid className="h-5 w-5" />
            </button>
            <button className="p-1 text-brand-brown-500 hover:bg-brand-cream-100 rounded-md">
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
        <div className="text-center py-20 bg-white rounded-xl shadow-brown-lg mt-10">
          <h2 className="text-2xl font-bold text-brand-brown-700">
            No Products Found
          </h2>
          <p className="text-brand-brown-500 mt-2">
            Check back soon or explore our other collections.
          </p>
        </div>
      )}
    </div>
  );
}
