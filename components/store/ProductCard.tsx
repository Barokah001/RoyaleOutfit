"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Product } from "@/types";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-xl bg-white shadow-md hover:shadow-2xl transition-shadow duration-300"
    >
      <Link href={`/product/${product.slug}`}>
        <div className="relative aspect-[3/4] overflow-hidden bg-gray-100">
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
          />
          {product.isMonogrammed && (
            <div className="absolute top-2 right-2 bg-nigerian-olive text-white text-xs font-semibold px-2 py-1 rounded-full">
              Monogram
            </div>
          )}
        </div>

        <div className="p-4">
          <p className="text-xs font-medium text-gray-500 uppercase mb-1">
            {product.category}
          </p>
          <h3 className="text-lg font-bold text-foreground mb-2 line-clamp-2 group-hover:text-nigerian-olive transition-colors">
            {product.name}
          </h3>
          <p className="text-xl font-bold text-nigerian-olive">
            ₦{product.price.toLocaleString()}
          </p>
        </div>
      </Link>
    </motion.div>
  );
}
