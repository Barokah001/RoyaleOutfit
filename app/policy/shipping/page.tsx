// app/policy/shipping/page.tsx
"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Truck, Package, RefreshCw, Clock } from "lucide-react";

export default function ShippingReturnsPage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#faf9f6] py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Shipping & Returns
              </h1>
              <p className="text-lg text-gray-600">
                Everything you need to know about delivery and returns
              </p>
            </div>

            {/* Quick Info Cards */}
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e8efe6] mb-3">
                  <Truck className="h-6 w-6 text-[#4a5d3f]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over ₦50,000</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e8efe6] mb-3">
                  <Clock className="h-6 w-6 text-[#4a5d3f]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Fast Delivery</h3>
                <p className="text-sm text-gray-600">3-7 business days</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e8efe6] mb-3">
                  <Package className="h-6 w-6 text-[#4a5d3f]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Track Orders</h3>
                <p className="text-sm text-gray-600">Real-time tracking</p>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[#e8efe6] mb-3">
                  <RefreshCw className="h-6 w-6 text-[#4a5d3f]" />
                </div>
                <h3 className="font-bold text-gray-900 mb-1">Easy Returns</h3>
                <p className="text-sm text-gray-600">14-day return window</p>
              </div>
            </div>

            {/* Shipping Information */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Shipping Information
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Shipping Rates
                  </h3>
                  <div className="bg-[#faf9f6] p-4 rounded-lg">
                    <ul className="space-y-2 text-gray-700">
                      <li className="flex justify-between">
                        <span>Orders over ₦50,000:</span>
                        <span className="font-semibold text-[#4a5d3f]">
                          FREE
                        </span>
                      </li>
                      <li className="flex justify-between">
                        <span>Orders under ₦50,000:</span>
                        <span className="font-semibold">₦5,000</span>
                      </li>
                      <li className="flex justify-between">
                        <span>Express Delivery (1-3 days):</span>
                        <span className="font-semibold">₦10,000</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Delivery Timeframes
                  </h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-[#faf9f6] p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Custom Orders
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Production: 7-21 business days
                        <br />
                        Delivery: Additional 3-7 business days
                      </p>
                    </div>
                    <div className="bg-[#faf9f6] p-4 rounded-lg">
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Ready-Made Items
                      </h4>
                      <p className="text-gray-700 text-sm">
                        Processing: 1-2 business days
                        <br />
                        Delivery: 3-7 business days
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Delivery Coverage
                  </h3>
                  <p className="text-gray-700 mb-3">
                    We deliver to all states in Nigeria. Major cities (Lagos,
                    Abuja, Port Harcourt, etc.) typically receive faster
                    delivery times.
                  </p>
                  <div className="bg-amber-50 border-l-4 border-amber-500 p-4">
                    <p className="text-amber-900 text-sm">
                      <strong>International Shipping:</strong> Available to
                      select countries. Contact us for rates and delivery times.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Order Tracking
                  </h3>
                  <p className="text-gray-700">
                    Once your order is dispatched, you&apos;ll receive a
                    tracking number via email and SMS. Use this number to track
                    your package in real-time through our courier partner&apos;s
                    website.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Returns & Exchanges */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-8 rounded-xl shadow-lg mb-8"
            >
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Returns & Exchanges
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Return Policy
                  </h3>
                  <p className="text-gray-700 mb-4">
                    We want you to be completely satisfied with your purchase.
                    If you&apos;re not happy, here&apos;s what you need to know:
                  </p>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start">
                      <span className="text-[#4a5d3f] mr-2 mt-1">✓</span>
                      <span>
                        You have <strong>14 days</strong> from delivery to
                        return eligible items
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4a5d3f] mr-2 mt-1">✓</span>
                      <span>
                        Items must be unworn, unaltered, and with original tags
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-[#4a5d3f] mr-2 mt-1">✓</span>
                      <span>
                        Original packaging should be retained when possible
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-red-500 mr-2 mt-1">✗</span>
                      <span>
                        <strong>Custom-made items</strong> cannot be returned
                        unless defective
                      </span>
                    </li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    How to Return an Item
                  </h3>
                  <div className="bg-[#faf9f6] p-6 rounded-lg">
                    <ol className="space-y-3 text-gray-700">
                      <li className="flex">
                        <span className="font-bold text-[#4a5d3f] mr-3">
                          1.
                        </span>
                        <span>
                          Contact us at mubarakadegbenga@gmail.com or +234 901
                          461 8785
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-[#4a5d3f] mr-3">
                          2.
                        </span>
                        <span>
                          Provide your order number and reason for return
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-[#4a5d3f] mr-3">
                          3.
                        </span>
                        <span>Receive a Return Authorization (RA) number</span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-[#4a5d3f] mr-3">
                          4.
                        </span>
                        <span>
                          Pack the item securely with the RA number visible
                        </span>
                      </li>
                      <li className="flex">
                        <span className="font-bold text-[#4a5d3f] mr-3">
                          5.
                        </span>
                        <span>
                          Ship to our address (we&apos;ll provide return
                          shipping label for eligible returns)
                        </span>
                      </li>
                    </ol>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Exchanges
                  </h3>
                  <p className="text-gray-700 mb-3">
                    Need a different size or color? We&apos;re happy to help!
                    Exchanges are subject to availability.
                  </p>
                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <p className="text-blue-900 text-sm">
                      <strong>Custom Items:</strong> One free alteration within
                      14 days if the fit isn&apos;t perfect.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Refund Process
                  </h3>
                  <div className="space-y-3 text-gray-700">
                    <p>
                      Once we receive and inspect your return, we&apos;ll
                      process your refund within
                      <strong> 5-7 business days</strong>.
                    </p>
                    <ul className="space-y-2 pl-4">
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Refunds will be credited to your original payment
                          method
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Shipping fees are non-refundable (except for our
                          errors)
                        </span>
                      </li>
                      <li className="flex items-start">
                        <span className="mr-2">•</span>
                        <span>
                          Bank processing may take additional 3-5 days
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    Damaged or Defective Items
                  </h3>
                  <p className="text-gray-700 mb-3">
                    If you receive a damaged or defective item, please contact
                    us immediately with photos. We&apos;ll arrange for a
                    replacement or full refund, including return shipping costs.
                  </p>
                  <div className="bg-red-50 border-l-4 border-red-500 p-4">
                    <p className="text-red-900 text-sm">
                      <strong>Important:</strong> Inspect your order upon
                      delivery and report any issues within 48 hours for fastest
                      resolution.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact CTA */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-gradient-to-br from-[#4a5d3f] to-[#3a4d2f] p-8 rounded-xl text-white text-center"
            >
              <h3 className="text-2xl font-bold mb-3">Have Questions?</h3>
              <p className="mb-6 text-white/90">
                Our customer service team is here to help with any shipping or
                return inquiries
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-block bg-white text-[#4a5d3f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </a>
                <a
                  href="/faq"
                  className="inline-block border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
                >
                  View FAQs
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
