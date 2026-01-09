// app/product/[slug]/page.tsx - With Real Fabric Color Images
"use client";

import Image from "next/image";
import { motion, Variants } from "framer-motion";
import {
  ShoppingCart,
  CheckCircle,
  Minus,
  Plus,
  ChevronLeft,
} from "lucide-react";
import { useState, use, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { getProductBySlug } from "@/lib/productData";
import { addToCart } from "@/lib/cartUtils";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

const imageVariants: Variants = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 20,
    },
  },
};

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const router = useRouter();
  const { slug } = use(params);
  const product = getProductBySlug(slug);

  const [selectedSize, setSelectedSize] = useState<string>(
    product.availableSizes[0]
  );
  const [quantity, setQuantity] = useState<number>(1);
  const [isAdded, setIsAdded] = useState<boolean>(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  
  // For fabric color variants
  const [selectedColorIndex, setSelectedColorIndex] = useState<number>(0);
  const selectedColor = product.fabricColors?.[selectedColorIndex];

  // Update main image when color changes for fabrics
  useEffect(() => {
    if (product.isFabric && selectedColor?.imageUrl) {
      // Reset to first image when color changes
      setSelectedImageIndex(0);
    }
  }, [selectedColorIndex, product.isFabric, selectedColor]);

  // Get the current image to display
  const getCurrentImage = () => {
    if (product.isFabric && selectedColor?.imageUrl) {
      return selectedColor.imageUrl;
    }
    return product.images[selectedImageIndex] || product.imageUrl;
  };

  const handleAddToCart = () => {
    const cartProduct = {
      ...product,
      name: product.isFabric && selectedColor 
        ? `${product.name} - ${selectedColor.name}` 
        : product.name,
    };

    addToCart(
      {
        id: product.id,
        name: cartProduct.name,
        price: product.price,
        imageUrl: selectedColor?.imageUrl || product.imageUrl,
        slug: product.slug,
      },
      selectedSize,
      quantity
    );

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleBuyNow = () => {
    const cartProduct = {
      ...product,
      name: product.isFabric && selectedColor 
        ? `${product.name} - ${selectedColor.name}` 
        : product.name,
    };

    addToCart(
      {
        id: product.id,
        name: cartProduct.name,
        price: product.price,
        imageUrl: selectedColor?.imageUrl || product.imageUrl,
        slug: product.slug,
      },
      selectedSize,
      quantity
    );

    router.push("/checkout");
  };

  return (
    <div className="min-h-screen bg-[#faf9f6]">
      <div className="container mx-auto py-8 px-4">
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
                key={getCurrentImage()} // Force re-render on image change
                src={getCurrentImage()}
                alt={`${product.name}${selectedColor ? ` - ${selectedColor.name}` : ''}`}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
                unoptimized
              />
            </div>

            {/* Thumbnail Images - Only show for non-fabric items */}
            {!product.isFabric && product.images.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.images.map((image: string, index: number) => (
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
                      unoptimized
                    />
                  </button>
                ))}
              </div>
            )}

            {/* Color Thumbnails for Fabrics */}
            {product.isFabric && product.fabricColors && product.fabricColors.length > 1 && (
              <div className="grid grid-cols-3 gap-3">
                {product.fabricColors.map((color, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedColorIndex(idx)}
                    className={`relative aspect-square overflow-hidden rounded-lg border-2 transition-all duration-300 ${
                      selectedColorIndex === idx
                        ? "border-[#4a5d3f] shadow-md scale-105"
                        : "border-gray-200 hover:border-[#4a5d3f] hover:scale-105"
                    }`}
                  >
                    {color.imageUrl ? (
                      <Image
                        src={color.imageUrl}
                        alt={color.name}
                        fill
                        className="object-cover"
                        sizes="150px"
                        unoptimized
                      />
                    ) : (
                      <div 
                        className="w-full h-full"
                        style={{ backgroundColor: color.hexCode }}
                      />
                    )}
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Product Info Section */}
          <motion.div variants={itemVariants} className="lg:w-1/2">
            <p className="text-sm font-semibold uppercase text-gray-500 mb-2">
              {product.category}
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">
              {product.name}
              {product.isFabric && selectedColor && (
                <span className="text-2xl text-[#4a5d3f] block mt-2">
                  {selectedColor.name}
                </span>
              )}
            </h1>
            <p className="text-3xl md:text-4xl font-bold text-[#4a5d3f] mb-6">
              ₦{product.price.toLocaleString()}
            </p>

            <p className="text-gray-700 leading-relaxed mb-6">
              {product.isFabric && selectedColor?.description
                ? selectedColor.description
                : product.description}
            </p>

            {/* Color Selection for Fabrics */}
            {product.isFabric && product.fabricColors && (
              <motion.div variants={itemVariants} className="mb-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Select Color: ({product.fabricColors.length} options available)
                </h3>
                <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                  {product.fabricColors.map((color, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSelectedColorIndex(idx)}
                      className={`relative group transition-all duration-300 ${
                        selectedColorIndex === idx
                          ? "ring-4 ring-[#4a5d3f] ring-offset-2"
                          : "hover:ring-2 hover:ring-gray-400"
                      }`}
                      title={color.name}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                        {color.imageUrl ? (
                          <Image
                            src={color.imageUrl}
                            alt={color.name}
                            width={100}
                            height={100}
                            className="w-full h-full object-cover"
                            unoptimized
                          />
                        ) : (
                          <div 
                            className="w-full h-full"
                            style={{ backgroundColor: color.hexCode }}
                          />
                        )}
                      </div>
                      <p className="text-xs text-center mt-1 font-medium text-gray-700 group-hover:text-[#4a5d3f] transition-colors">
                        {color.name}
                      </p>
                      {selectedColorIndex === idx && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-[#4a5d3f] rounded-full flex items-center justify-center">
                          <CheckCircle className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </button>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Product Details */}
            {product.details && (
              <div className="mb-6 p-4 bg-[#f5f5f5] rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">
                  Product Features:
                </h3>
                <ul className="space-y-2">
                  {product.details.map((detail: string, index: number) => (
                    <li key={index} className="flex items-start text-gray-700">
                      <span className="text-[#4a5d3f] mr-2">✓</span>
                      <span className="text-sm">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Size Selection */}
            <motion.div variants={itemVariants} className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Select {product.isFabric ? "Yardage" : "Size"}:
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.availableSizes.map((size: string) => (
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
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center gap-4">
                <div className="flex items-center border-2 border-gray-300 rounded-lg">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="p-3 text-gray-600 hover:text-[#4a5d3f] transition-colors"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-6 text-lg font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="p-3 text-gray-600 hover:text-[#4a5d3f] transition-colors"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 inline-flex items-center justify-center rounded-full border-2 border-[#4a5d3f] px-8 py-3 text-lg font-medium text-[#4a5d3f] bg-white hover:bg-[#4a5d3f] hover:text-white transition-all duration-300"
                >
                  {isAdded ? (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="flex items-center space-x-2"
                    >
                      <CheckCircle className="h-5 w-5" />
                      <span>Added!</span>
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

                <motion.button
                  onClick={handleBuyNow}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 inline-flex items-center justify-center rounded-full bg-[#4a5d3f] px-8 py-3 text-lg font-medium text-white shadow-lg transition-all duration-300 hover:opacity-90"
                >
                  Buy Now
                </motion.button>
              </div>
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
                  Free over ₦50,000
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}