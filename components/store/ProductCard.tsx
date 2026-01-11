// components/store/ProductCard.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingCart } from "lucide-react";
import { Product } from "@/types";
import { addToCart } from "@/lib/cartUtils";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const [isAdded, setIsAdded] = useState(false);

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent navigation to product page
    e.stopPropagation(); // Stop event from bubbling

    // Add to cart with first available size
    addToCart(
      {
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        slug: product.slug,
      },
      product.availableSizes[0], // Use first available size
      1 // Quantity 1
    );

    // Show feedback
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 1500);

    // Trigger cart update event for header
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event("cartUpdated"));
    }

    // Optional: Show console log for debugging
    console.log(`Added ${product.name} to cart`);
  };

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-brown hover:shadow-brown-lg transition-all duration-300 border border-brand-brown-200"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-brand-cream-100">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            unoptimized
          />
          {product.isMonogrammed && (
            <div className="absolute top-2 right-2 bg-primary text-white text-xs font-semibold px-2 py-1 rounded-full shadow-brown">
              Monogram
            </div>
          )}

          {/* Quick Add Button - Shows on Hover */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <button
              onClick={handleQuickAdd}
              className="bg-gradient-brown text-white px-6 py-2 rounded-full text-sm font-semibold shadow-brown-lg flex items-center gap-2 whitespace-nowrap hover:opacity-90 transition-opacity"
            >
              {isAdded ? (
                <>
                  <span>✓ Added!</span>
                </>
              ) : (
                <>
                  <ShoppingCart className="h-4 w-4" />
                  <span>Quick Add</span>
                </>
              )}
            </button>
          </div>
        </div>

        <div className="p-4">
          <p className="text-xs font-medium text-brand-brown-500 uppercase mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-brand-brown-800 mb-2 line-clamp-2 group-hover:text-primary transition-colors">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-primary">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}