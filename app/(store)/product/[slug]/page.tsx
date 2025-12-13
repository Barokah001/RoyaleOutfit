// ============================================================
// 8. Product Detail Page - UPDATED
// ============================================================

"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ShoppingCart, CheckCircle, Minus, Plus } from "lucide-react";
import { useState } from "react";
import { Product } from "@/types";

const mockProduct: Product = {
  id: "p1",
  name: "Emerald Kaftan with Gold Monogram",
  price: 75000,
  slug: "kaftan-emerald",
  imageUrl: "/images/kaftan-emerald.jpg",
  description:
    "A luxurious, custom-tailored kaftan made from premium silk-cotton blend. Features intricate gold thread embroidery and a personalized chest monogram. Perfect for traditional events and high-end occasions.",
  category: "Kaftans",
  isMonogrammed: true,
  availableSizes: ["S", "M", "L", "XL"],
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const imageVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const product = mockProduct;
  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="container mx-auto py-12 px-4 min-h-screen"
    >
      <div className="flex flex-col md:flex-row gap-12 bg-white p-6 md:p-10 rounded-xl shadow-2xl">
        <motion.div
          variants={itemVariants}
          className="md:w-1/2 order-2 md:order-1"
        >
          <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
            {product.category}
          </p>
          <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
            {product.name}
          </h1>
          <p className="text-3xl font-bold text-[#4a5d3f] mb-6">
            ₦{product.price.toLocaleString()}
          </p>

          <p className="text-gray-700 leading-relaxed mb-8">
            {product.description}
          </p>

          <motion.div variants={itemVariants} className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Select Size:
            </h3>
            <div className="flex space-x-3">
              {product.availableSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 text-sm font-medium border rounded-md transition-all duration-200 ${
                    selectedSize === size
                      ? "border-[#4a5d3f] bg-[#4a5d3f] text-white shadow-md"
                      : "border-gray-300 bg-white hover:border-[#4a5d3f]"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex items-center space-x-6 mt-8"
          >
            <div className="flex items-center border border-gray-300 rounded-lg p-1">
              <button
                onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                className="p-2 text-gray-600 hover:text-[#4a5d3f]"
              >
                <Minus className="h-4 w-4" />
              </button>
              <span className="w-10 text-center text-lg font-medium">
                {quantity}
              </span>
              <button
                onClick={() => setQuantity((q) => q + 1)}
                className="p-2 text-gray-600 hover:text-[#4a5d3f]"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>

            <motion.button
              onClick={handleAddToCart}
              whileTap={{ scale: 0.95 }}
              className="flex-1 max-w-xs inline-flex items-center justify-center rounded-full bg-[#4a5d3f] px-8 py-3 text-lg font-medium text-white shadow-lg transition-colors duration-300 hover:opacity-90"
            >
              {isAdded ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <CheckCircle className="h-5 w-5" />
                  <span>Added to Cart!</span>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex items-center space-x-2"
                >
                  <ShoppingCart className="h-5 w-5" />
                  <span>Add to Cart</span>
                </motion.div>
              )}
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          variants={imageVariants}
          className="md:w-1/2 order-1 md:order-2"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-2xl border-2 border-gray-200">
            <Image
              src={product.imageUrl}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
