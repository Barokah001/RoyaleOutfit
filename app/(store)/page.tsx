"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, TrendingUp } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-brand-cream-200">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-20"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-6xl md:text-7xl font-bold text-brand-brown-800 mb-4">
              Royale Outfits
            </h1>
            <p className="text-xl md:text-2xl text-brand-brown-600 mb-8">
              Premium Custom-Tailored Kaftans & Menswear
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-gradient-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-brown-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              View Collections
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="bg-white p-8 rounded-xl shadow-brown-lg border border-brand-brown-200">
              <Sparkles className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-brand-brown-800">
                Premium Quality
              </h3>
              <p className="text-brand-brown-600">
                Handcrafted with finest fabrics and attention to detail
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-brown-lg border border-brand-brown-200">
              <TrendingUp className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-brand-brown-800">
                Modern Designs
              </h3>
              <p className="text-brand-brown-600">
                Contemporary styles that honor traditional craftsmanship
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-brown-lg border border-brand-brown-200">
              <ShoppingBag className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-brand-brown-800">
                Custom Tailoring
              </h3>
              <p className="text-brand-brown-600">
                Personalized monograms and perfect fit guaranteed
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}