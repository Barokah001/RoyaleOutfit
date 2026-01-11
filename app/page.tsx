// app/page.tsx - Brown Theme Homepage
"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  ShoppingBag,
  Sparkles,
  TrendingUp,
  Truck,
  Shield,
  Award,
  Heart,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useState, useEffect } from "react";

export default function HomePage() {
  const collections = [
    {
      name: "Luxury Kaftans",
      items: "26+ Styles",
      href: "/collections/kaftans",
      imageUrl: "/images/kaftan-grid.jpg",
    },
    {
      name: "Traditional Caps",
      items: "6+ Designs",
      href: "/collections/caps",
      imageUrl: "/images/cap-grid.jpeg",
    },
    {
      name: "Premium Fabrics",
      items: "10+ Options",
      href: "/collections/fabrics",
      imageUrl: "/images/forest-green-fabric.jpg",
    },
  ];

  const brandPosts = [
    {
      id: 1,
      image: "/images/content-3.jpg",
      title: "Aso-Oke Cap Sale",
      description: "Premium caps starting from ₦7,000",
    },
    {
      id: 2,
      image: "/images/content-4.PNG",
      title: "We're Hiring",
      description: "Join our skilled team of tailors",
    },
    {
      id: 3,
      image: "/images/content-1.PNG",
      title: "Happy New Year 2026",
      description: "Celebrating a year of excellence",
    },
    {
      id: 4,
      image: "/images/content-2.PNG",
      title: "Welcome to 2026",
      description: "Thank you for choosing Royale Outfits",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % brandPosts.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, brandPosts.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % brandPosts.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + brandPosts.length) % brandPosts.length
    );
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  return (
    <div className="min-h-screen bg-brand-cream-200">
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
            <h1 className="text-5xl md:text-7xl font-bold text-brand-brown-800 mb-4 font-display">
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
              Shop Now
            </Link>
            <Link
              href="/collections/kaftans"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary border-2 border-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary hover:text-white transition-all duration-300"
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
            <div className="bg-white p-8 rounded-xl shadow-brown hover:shadow-brown-lg transition-shadow">
              <Sparkles className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-brand-brown-800">
                Premium Quality
              </h3>
              <p className="text-brand-brown-600">
                Handcrafted with finest fabrics and attention to detail
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-brown hover:shadow-brown-lg transition-shadow">
              <TrendingUp className="h-12 w-12 text-primary mb-4 mx-auto" />
              <h3 className="text-xl font-bold mb-2 text-brand-brown-800">
                Modern Designs
              </h3>
              <p className="text-brand-brown-600">
                Contemporary styles that honor traditional craftsmanship
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-brown hover:shadow-brown-lg transition-shadow">
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

      {/* Brand Content Slider Section */}
      <section className="py-20 bg-gradient-to-b from-white to-brand-cream-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-brown-800 mb-4 font-display">
              Latest Updates
            </h2>
            <p className="text-lg text-brand-brown-600 max-w-2xl mx-auto">
              Stay connected with our brand news and special announcements
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="relative h-[500px] md:h-[600px] rounded-2xl overflow-hidden shadow-brown-xl bg-white">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlide}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0"
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={brandPosts[currentSlide].image}
                      alt={brandPosts[currentSlide].title}
                      fill
                      className="object-contain"
                      priority
                      unoptimized
                    />

                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-brown-900/90 via-brand-brown-900/60 to-transparent p-8">
                      <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-2xl md:text-4xl font-bold text-white mb-2">
                          {brandPosts[currentSlide].title}
                        </h3>
                        <p className="text-lg text-white/90">
                          {brandPosts[currentSlide].description}
                        </p>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-brown-lg flex items-center justify-center transition-all hover:scale-110 z-10"
              >
                <ChevronLeft className="h-6 w-6 text-primary" />
              </button>

              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/90 hover:bg-white shadow-brown-lg flex items-center justify-center transition-all hover:scale-110 z-10"
              >
                <ChevronRight className="h-6 w-6 text-primary" />
              </button>
            </div>

            <div className="flex justify-center gap-3 mt-6">
              {brandPosts.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`transition-all duration-300 rounded-full ${
                    currentSlide === index
                      ? "w-12 h-3 bg-primary"
                      : "w-3 h-3 bg-brand-brown-300 hover:bg-brand-brown-400"
                  }`}
                />
              ))}
            </div>

            
          </div>
        </div>
      </section>

      {/* Featured Collections Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-brown-800 mb-4 font-display">
              Featured Collections
            </h2>
            <p className="text-lg text-brand-brown-600 max-w-2xl mx-auto">
              Explore our carefully curated selection of traditional Nigerian
              attire
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {collections.map((collection, idx) => (
              <Link key={idx} href={collection.href} className="group block">
                <div className="relative w-full h-[500px] overflow-hidden rounded-xl shadow-brown group-hover:shadow-brown-xl transition-all duration-300">
                  <Image
                    src={collection.imageUrl}
                    alt={collection.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    priority={idx === 0}
                    unoptimized
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-brand-brown-900/80 via-brand-brown-900/40 to-transparent" />
                  <div className="absolute inset-0 bg-primary/0 md:group-hover:bg-primary/30 transition-all duration-500" />

                  <div className="absolute bottom-0 left-0 right-0 p-6 text-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2 drop-shadow-2xl">
                      {collection.name}
                    </h3>
                    <p className="text-base text-white/95 drop-shadow-lg font-medium">
                      {collection.items}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-brand-cream-200">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-brand-brown-800 mb-4 font-display">
              Why Choose Royale Outfits
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              {
                icon: Truck,
                title: "Free Shipping",
                desc: "On orders over ₦50,000",
              },
              {
                icon: Shield,
                title: "Secure Payment",
                desc: "100% secure transactions",
              },
              {
                icon: Award,
                title: "Quality Guaranteed",
                desc: "Premium materials only",
              },
              {
                icon: Heart,
                title: "Made with Love",
                desc: "Handcrafted perfection",
              },
            ].map((item, idx) => (
              <div key={idx} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-brown-100 mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-brand-brown-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-brand-brown-600 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-brand-brown-800 mb-4 font-display">
              Join Our Community
            </h2>
            <p className="text-brand-brown-600 mb-8">
              Subscribe to get special offers, style updates, and exclusive
              access to new collections
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full border-2 border-brand-brown-300 focus:border-primary focus:outline-none transition-colors"
              />
              <button className="px-8 py-3 bg-gradient-brown text-white rounded-full font-semibold hover:opacity-90 transition-opacity shadow-brown">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
