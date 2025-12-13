"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function CartPage() {
  const subtotal = 125000;

  return (
    <div className="container mx-auto py-12 min-h-[70vh]">
      <h1 className="text-4xl font-extrabold text-foreground mb-8">
        Your Shopping Cart
      </h1>

      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:w-3/5 space-y-6">
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <p className="font-medium">Item 1: Emerald Kaftan (L) - ₦75,000</p>
          </div>
          <div className="p-4 border rounded-lg bg-white shadow-sm">
            <p className="font-medium">Item 2: Aso Oke Fila Cap - ₦15,000</p>
          </div>
          <p className="text-gray-500">2 items currently in your cart.</p>
        </div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-2/5 rounded-xl bg-white p-6 shadow-lg border border-gray-200 sticky top-24 h-fit"
        >
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Order Summary
          </h2>
          <div className="space-y-2 border-b pb-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>₦5,000</span>
            </div>
          </div>
          <div className="flex justify-between pt-4 text-xl font-bold text-foreground">
            <span>Order Total</span>
            <span>₦{(subtotal + 5000).toLocaleString()}</span>
          </div>

          <Link
            href="/checkout"
            className="mt-6 w-full inline-flex items-center justify-center rounded-full bg-nigerian-olive px-6 py-3 text-lg font-semibold text-white shadow-lg transition-colors duration-300 hover:opacity-90"
          >
            Proceed to Checkout
          </Link>

          <Link
            href="/collections/all"
            className="mt-4 w-full block text-center text-sm text-nigerian-olive hover:underline"
          >
            Continue Shopping
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
