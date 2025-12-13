// app/page.tsx - UPDATED with correct routing
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ShoppingBag, Sparkles, TrendingUp, Truck, Shield, Award, Heart } from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#faf9f6]">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="container mx-auto px-4 py-20 md:py-32"
      >
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-6"
          >
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-4">
              Royale Outfits
            </h1>
            <p className="text-xl md:text-2xl text-[#4a5d3f] mb-8">
              Premium Custom-Tailored Kaftans & Menswear
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
          >
            {/* FIXED: Changed from single product to products page */}
            <Link
              href="/products"
              className="inline-flex items-center justify-center gap-2 bg-[#4a5d3f] text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-all duration-300 shadow-lg"
            >
              <ShoppingBag className="h-5 w-5" />
              Shop Now
            </Link>
            <Link
              href="/collections/kaftans"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#4a5d3f] border-2 border-[#4a5d3f] px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#4a5d3f] hover:text-white transition-all duration-300"
            >
              View Collections
            </Link>
          </motion.div>

          {/* Features Grid */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          >
            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Sparkles className="h-12 w-12 text-[#4a5d3f] mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Handcrafted with finest fabrics and attention to detail
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-[#4a5d3f] mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Modern Designs
              </h3>
              <p className="text-gray-600">
                Contemporary styles that honor traditional craftsmanship
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <ShoppingBag className="h-12 w-12 text-[#4a5d3f] mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-gray-900">
                Custom Tailoring
              </h3>
              <p className="text-gray-600">
                Personalized monograms and perfect fit guaranteed
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Featured Collections Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Featured Collections
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of traditional Nigerian attire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Luxury Kaftans', items: '6+ Styles', href: '/collections/kaftans', emoji: '🎭' },
              { name: 'Traditional Caps', items: '5+ Designs', href: '/collections/caps', emoji: '👑' },
              { name: 'Premium Trousers', items: '5+ Options', href: '/collections/trousers', emoji: '👔' }
            ].map((collection, idx) => (
              <Link
                key={idx}
                href={collection.href}
                className="group relative overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 block"
              >
                <div className="aspect-[4/5] bg-[#e8efe6] flex items-center justify-center text-8xl">
                  {collection.emoji}
                </div>
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center">
                    <h3 className="text-2xl font-bold mb-2">{collection.name}</h3>
                    <p className="text-sm">{collection.items}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-[#faf9f6]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose African Attire
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: 'Free Shipping', desc: 'On orders over ₦50,000' },
              { icon: Shield, title: 'Secure Payment', desc: '100% secure transactions' },
              { icon: Award, title: 'Quality Guaranteed', desc: 'Premium materials only' },
              { icon: Heart, title: 'Made with Love', desc: 'Handcrafted perfection' }
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8efe6] mb-4">
                  <item.icon className="h-8 w-8 text-[#4a5d3f]" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Join Our Community
            </h2>
            <p className="text-gray-600 mb-8">
              Subscribe to get special offers, style updates, and exclusive access to new collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-gray-300 focus:border-[#4a5d3f] focus:outline-none transition-colors"
              />
              <button className="px-8 py-3 bg-[#4a5d3f] text-white rounded-full font-semibold hover:opacity-90 transition-opacity">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}