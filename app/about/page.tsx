// app/about/page.tsx - Brown Theme
"use client";

import { motion } from "framer-motion";
import { Award, Heart, Users, Sparkles } from "lucide-react";

export default function AboutPage() {
  const values = [
    {
      icon: Award,
      title: "Quality Craftsmanship",
      description:
        "Every piece is meticulously crafted with attention to detail and traditional techniques passed down through generations.",
    },
    {
      icon: Heart,
      title: "Customer First",
      description:
        "Your satisfaction is our priority. We work closely with each client to ensure perfect fit and style.",
    },
    {
      icon: Users,
      title: "Community Focused",
      description:
        "We support local artisans and contribute to preserving Nigerian textile traditions.",
    },
    {
      icon: Sparkles,
      title: "Innovation",
      description:
        "While honoring tradition, we incorporate modern designs and techniques to create timeless pieces.",
    },
  ];

  const stats = [
    { value: "500+", label: "Happy Customers" },
    { value: "1000+", label: "Custom Pieces Made" },
    { value: "7+", label: "Years of Excellence" },
    { value: "100%", label: "Satisfaction Rate" },
  ];

  return (
    <div className="min-h-screen bg-brand-cream-200">
      {/* Hero Section */}
      <section className="relative h-[400px] md:h-[500px] overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary to-brand-brown-700">
          <div className="absolute inset-0 bg-[url('/images/cap-grid.jpeg')] opacity-30"></div>
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4 font-display">
              About Royale Outfits
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
              Crafting Excellence in Traditional Nigerian Attire Since 2017
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-brown-800 mb-6 font-display">
                Our Story
              </h2>
              <div className="space-y-4 text-lg text-brand-brown-700 leading-relaxed text-left">
                <p>
                  Royale Outfits was born from a passion for preserving and
                  celebrating Nigerian textile heritage. What started as a small
                  tailoring workshop in Abeokuta has grown into a premier
                  destination for custom-made traditional attire.
                </p>
                <p>
                  Our founder, inspired by the rich history of Nigerian
                  craftsmanship, envisioned creating a brand that would bring
                  together the finest fabrics, skilled artisans, and modern
                  design sensibilities. Today, we&apos;re proud to serve
                  customers across Nigeria and beyond, delivering pieces that
                  tell stories and create memories.
                </p>
                <p>
                  Every kaftan, cap, and agbada that leaves our workshop carries
                  with it the dedication of our master tailors, the quality of
                  premium fabrics, and the promise of elegance that defines
                  Royale Outfits.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-brand-cream-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-brand-brown-800 mb-4 font-display">
              Our Values
            </h2>
            <p className="text-lg text-brand-brown-600 max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl shadow-brown hover:shadow-brown-lg transition-shadow text-center"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-cream-100 mb-4">
                  <value.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-brand-brown-800 mb-3">
                  {value.title}
                </h3>
                <p className="text-brand-brown-600 text-sm leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-brand-brown-700 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">
                  {stat.value}
                </div>
                <div className="text-sm md:text-base text-white/80">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-cream-100 p-8 rounded-xl"
            >
              <h3 className="text-3xl font-bold text-brand-brown-800 mb-4 font-display">
                Our Mission
              </h3>
              <p className="text-brand-brown-700 leading-relaxed">
                To preserve and promote Nigerian textile heritage by creating
                premium, custom-tailored attire that celebrates tradition while
                embracing modern sophistication. We strive to make every
                customer feel royal in their own right.
              </p>
            </motion.div>

            <motion.div
              initial={{ x: 20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-brand-cream-100 p-8 rounded-xl"
            >
              <h3 className="text-3xl font-bold text-brand-brown-800 mb-4 font-display">
                Our Vision
              </h3>
              <p className="text-brand-brown-700 leading-relaxed">
                To become the leading name in African traditional attire,
                recognized globally for exceptional quality, innovative designs,
                and unwavering commitment to customer satisfaction. We envision
                a future where Nigerian craftsmanship is celebrated worldwide.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-brand-cream-200">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold text-brand-brown-800 mb-6 font-display">
              Ready to Experience Royale Quality?
            </h2>
            <p className="text-lg text-brand-brown-600 mb-8">
              Discover our collection and let us create something special for
              you
            </p>
            <a
              href="/products"
              className="inline-block bg-gradient-brown text-white px-8 py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity shadow-brown-lg"
            >
              Shop Our Collection
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
