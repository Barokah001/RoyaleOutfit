// ============================================================
// 7. app/contact/page.tsx - UPDATED
// ============================================================

"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactUsPage() {
  return (
    <div className="container mx-auto py-12 px-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-10"
      >
        <h1 className="text-4xl font-extrabold text-gray-900 mb-3">
          Get In Touch
        </h1>
        <p className="text-lg text-gray-600">
          We are here to assist you with inquiries, custom orders, and support.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-10">
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="md:w-3/5 bg-white p-8 rounded-xl shadow-lg border border-gray-100"
        >
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Send Us a Message
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#4a5d3f] focus:ring-[#4a5d3f] focus:outline-none transition"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#4a5d3f] focus:ring-[#4a5d3f] focus:outline-none transition"
              required
            />
            <textarea
              placeholder="Your Message"
              rows={5}
              className="w-full rounded-lg border border-gray-300 p-3 focus:border-[#4a5d3f] focus:ring-[#4a5d3f] focus:outline-none transition"
              required
            ></textarea>
            <button
              type="submit"
              className="w-full rounded-full bg-[#4a5d3f] px-6 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:opacity-90"
            >
              Submit Inquiry
            </button>
          </form>
        </motion.div>

        <motion.div
          initial={{ x: 20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="md:w-2/5 space-y-6"
        >
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
            <Mail className="h-6 w-6 text-[#4a5d3f] mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Email</h3>
              <p className="text-gray-600">support@africanattire.com</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
            <Phone className="h-6 w-6 text-[#4a5d3f] mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">Phone</h3>
              <p className="text-gray-600">+234 800 123 4567</p>
            </div>
          </div>
          <div className="flex items-start space-x-4 p-4 rounded-lg bg-white shadow-md border border-gray-100">
            <MapPin className="h-6 w-6 text-[#4a5d3f] mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Studio Location
              </h3>
              <p className="text-gray-600">
                Lagos, Nigeria (By Appointment Only)
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

