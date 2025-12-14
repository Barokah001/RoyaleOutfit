// app/cart/page.tsx - Fixed useEffect Pattern
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Plus, Minus, ShoppingBag } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  quantity: number;
  slug: string;
}

export default function CartPage() {
  // Initialize cart from localStorage on mount
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });
  const [isLoading, setIsLoading] = useState(true);

  // Set loading to false after mount
  useEffect(() => {
    setIsLoading(false);
  }, []);

  // Save cart to localStorage whenever it changes (after initial load)
  useEffect(() => {
    if (!isLoading && typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cartItems));
    }
  }, [cartItems, isLoading]);

  const updateQuantity = (id: string, change: number) => {
    setCartItems((items) =>
      items.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) }
          : item
      )
    );
  };

  const removeItem = (id: string) => {
    setCartItems((items) => items.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50000 ? 0 : 5000;
  const total = subtotal + shipping;

  if (isLoading) {
    return (
      <div className="container mx-auto py-12 min-h-[70vh] flex items-center justify-center">
        <p className="text-xl text-gray-600">Loading cart...</p>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 min-h-[70vh]">
        <div className="max-w-md mx-auto text-center py-20">
          <ShoppingBag className="h-24 w-24 mx-auto text-gray-300 mb-6" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Your Cart is Empty
          </h1>
          <p className="text-gray-600 mb-8">
            Looks like you haven`&apos;`t added anything to your cart yet.
          </p>
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-[#4a5d3f] px-8 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:opacity-90"
          >
            Start Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 min-h-[70vh]">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Cart Items */}
        <div className="lg:w-3/5 space-y-4">
          {cartItems.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, x: -100 }}
              className="flex gap-4 p-4 border rounded-lg bg-white shadow-sm"
            >
              {/* Product Image */}
              <div className="relative w-24 h-24 flex-shrink-0 rounded-lg overflow-hidden">
                <Image
                  src={item.imageUrl}
                  alt={item.name}
                  fill
                  className="object-cover"
                  sizes="96px"
                  unoptimized
                />
              </div>

              {/* Product Info */}
              <div className="flex-grow">
                <Link
                  href={`/product/${item.slug}`}
                  className="font-semibold text-gray-900 hover:text-[#4a5d3f] transition-colors"
                >
                  {item.name}
                </Link>
                <p className="text-sm text-gray-600 mt-1">Size: {item.size}</p>
                <p className="text-lg font-bold text-[#4a5d3f] mt-2">
                  ₦{(item.price * item.quantity).toLocaleString()}
                </p>
              </div>

              {/* Quantity Controls */}
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeItem(item.id)}
                  className="text-red-500 hover:text-red-700 transition-colors"
                  aria-label="Remove item"
                >
                  <Trash2 className="h-5 w-5" />
                </button>

                <div className="flex items-center border border-gray-300 rounded-lg">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="px-4 font-medium">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="p-2 hover:bg-gray-100 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}

          <p className="text-gray-600 text-sm pt-4">
            {cartItems.length} {cartItems.length === 1 ? "item" : "items"} in
            your cart
          </p>
        </div>

        {/* Order Summary */}
        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:w-2/5 rounded-xl bg-white p-6 shadow-lg border border-gray-200 sticky top-24 h-fit"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Order Summary
          </h2>

          <div className="space-y-3 border-b pb-4 mb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>
                {shipping === 0 ? "FREE" : `₦${shipping.toLocaleString()}`}
              </span>
            </div>
            {shipping === 0 && (
              <p className="text-xs text-green-600">
                🎉 You qualify for free shipping!
              </p>
            )}
            {shipping > 0 && subtotal < 50000 && (
              <p className="text-xs text-gray-500">
                Add ₦{(50000 - subtotal).toLocaleString()} more for free
                shipping
              </p>
            )}
          </div>

          <div className="flex justify-between pt-2 text-xl font-bold text-gray-900 mb-6">
            <span>Order Total</span>
            <span>₦{total.toLocaleString()}</span>
          </div>

          <Link
            href="/checkout"
            className="w-full inline-flex items-center justify-center rounded-full bg-[#4a5d3f] px-6 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:opacity-90"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/products"
            className="mt-4 w-full block text-center text-sm text-[#4a5d3f] hover:underline"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
