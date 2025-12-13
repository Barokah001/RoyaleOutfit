// app/product/[slug]/page.tsx
"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ShoppingCart,
  CheckCircle,
  Minus,
  Plus,
  ChevronLeft,
} from "lucide-react";
import { useState } from "react";
import Link from "next/link";

// This would normally come from your database or API
const getProductBySlug = (slug: string) => {
  const products = {
    "kaftan-emerald": {
      id: "p1",
      name: "Emerald Kaftan with Gold Monogram",
      price: 75000,
      slug: "kaftan-emerald",
      images: [
        "/images/kaftan-emerald.jpg",
        "/images/kaftan-emerald-2.jpg",
        "/images/kaftan-emerald-3.jpg",
      ],
      description:
        "A luxurious, custom-tailored kaftan made from premium silk-cotton blend. Features intricate gold thread embroidery and a personalized chest monogram. Perfect for traditional events and high-end occasions.",
      category: "Kaftans",
      isMonogrammed: true,
      availableSizes: ["S", "M", "L", "XL"],
      details: [
        "Premium silk-cotton blend fabric",
        "Hand-embroidered gold thread detailing",
        "Personalized chest monogram included",
        "Perfect for weddings and traditional events",
        "Professional tailoring and fitting",
      ],
    },
    "kaftan-royal-blue": {
      id: "p2",
      name: "Royal Blue Kaftan",
      price: 80000,
      slug: "kaftan-royal-blue",
      images: [
        "/images/kaftan-blue.jpg",
        "/images/kaftan-blue-2.jpg",
        "/images/kaftan-blue-3.jpg",
      ],
      description:
        "Elegant royal blue kaftan with silver embroidery and premium fabric finish. A statement piece for any special occasion.",
      category: "Kaftans",
      isMonogrammed: true,
      availableSizes: ["S", "M", "L", "XL"],
      details: [
        "Royal blue premium fabric",
        "Silver thread embroidery",
        "Custom monogram available",
        "Elegant and sophisticated design",
        "Made to measure",
      ],
    },
    // Add more products here...
  };

  return products[slug as keyof typeof products] || products["kaftan-emerald"];
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
  const product = getProductBySlug(params.slug);
  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);

  const handleAddToCart = () => {
    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="container mx-auto py-8 px-4">
        {/* Back Button */}
        <Link
          href="/products"
          className="inline-flex items-center text-gray-600 hover:text-[#4a5d3f] mb-6 transition-colors"
        >
          <ChevronLeft className="h-5 w-5 mr-1" />
          Back to Products
        </Link>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col lg:flex-row gap-8 lg:gap-12 bg-white p-6 md:p-10 rounded-xl shadow-lg"
        >
          {/* Image Gallery Section */}
          <motion.div variants={imageVariants} className="lg:w-1/2">
            {/* Main Image */}
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-xl shadow-xl border-2 border-gray-200 mb-4">
              <Image
                src={product.images[selectedImageIndex]}
                alt={product.name}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>

            {/* Thumbnail Images */}
            <div className="grid grid-cols-3 gap-3">
              {product.images.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedImageIndex(index)}
                  className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                    selectedImageIndex === index
                      ? "border-[#4a5d3f] shadow-md scale-105"
                      : "border-gray-200 hover:border-[#4a5d3f] hover:scale-105"
                  }`}
                >
                  <Image
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    fill
                    className="object-cover"
                    sizes="150px"
                  />
                </button>
              ))}
            </div>
          </motion.div>

          {/* Product Info Section */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {product.name}
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-[#4a5d3f] mb-6">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {product.description}
            </p>

            {/* Product Details */}
            <div className="mb-6 p-4 bg-[#f5f5f5] rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Product Features:
              </h3>
              <ul className="space-y-2">
                {product.details.map((detail, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <span className="text-[#4a5d3f] mr-2">✓</span>
                    <span className="text-sm">{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Size Selection */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Select Size:
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.availableSizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-5 py-2.5 text-sm font-medium border-2 rounded-md transition-all duration-200 ${
                      selectedSize === size
                        ? "border-[#4a5d3f] bg-[#4a5d3f] text-white shadow-md"
                        : "border-gray-300 bg-white hover:border-[#4a5d3f] text-gray-700"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Quantity and Add to Cart */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mt-8"
            >
              <div className="flex items-center border-2 border-gray-300 rounded-lg p-1">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="p-3 text-gray-600 hover:text-[#4a5d3f] transition-colors"
                >
                  <Minus className="h-4 w-4" />
                </button>
                <span className="w-12 text-center text-lg font-medium">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="p-3 text-gray-600 hover:text-[#4a5d3f] transition-colors"
                >
                  <Plus className="h-4 w-4" />
                </button>
              </div>

              <motion.button
                onClick={handleAddToCart}
                whileTap={{ scale: 0.95 }}
                className="flex-1 inline-flex items-center justify-center rounded-full bg-[#4a5d3f] px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:opacity-90"
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

            {/* Additional Info */}
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-gray-600">
                <div>
                  <span className="font-semibold text-gray-900">SKU:</span>{" "}
                  {product.id}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Category:</span>{" "}
                  {product.category}
                </div>
                <div>
                  <span className="font-semibold text-gray-900">
                    Availability:
                  </span>{" "}
                  In Stock
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Shipping:</span>{" "}
                  Free shipping over ₦50,000
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
