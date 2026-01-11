// app/contact/page.tsx - Brown Theme
"use client";

import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState} from "react";

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const subject = encodeURIComponent(`Contact from ${formData.name}`);
      const body = encodeURIComponent(
        `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
      );
      const mailtoLink = `mailto:mubarakadegbenga@gmail.com?subject=${subject}&body=${body}`;

      window.location.href = mailtoLink;

      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });

      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      console.error("Error sending message:", error);
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen bg-brand-cream-200 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-brown-800 mb-3 font-display">
            Get In Touch
          </h1>
          <p className="text-lg text-brand-brown-600 max-w-2xl mx-auto">
            We are here to assist you with inquiries, custom orders, and support.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 max-w-6xl mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="lg:w-3/5 bg-white p-8 rounded-xl shadow-brown-lg border border-brand-brown-100"
          >
            <h2 className="text-2xl font-bold text-brand-brown-800 mb-6">
              Send Us a Message
            </h2>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">
                  ✓ Message sent successfully! We&apos;ll get back to you soon.
                </p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">
                  ✗ Failed to send message. Please try again or email us directly.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full rounded-lg border border-brand-brown-300 p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full rounded-lg border border-brand-brown-300 p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Your Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us how we can help you..."
                  rows={6}
                  className="w-full rounded-lg border border-brand-brown-300 p-3 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full bg-gradient-brown px-6 py-3 text-lg font-semibold text-white transition-all duration-300 hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-brown"
              >
                {isSubmitting ? (
                  <>
                    <span className="animate-spin">⏳</span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Submit Inquiry
                  </>
                )}
              </button>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="lg:w-2/5 space-y-6"
          >
            <div className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-brown border border-brand-brown-100 hover:shadow-brown-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cream-100 flex items-center justify-center">
                <Mail className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-brown-800 mb-1">
                  Email
                </h3>
                <a
                  href="mailto:mubarakadegbenga@gmail.com"
                  className="text-brand-brown-600 hover:text-primary transition-colors"
                >
                  mubarakadegbenga@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-brown border border-brand-brown-100 hover:shadow-brown-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cream-100 flex items-center justify-center">
                <Phone className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-brown-800 mb-1">
                  Phone
                </h3>
                <a
                  href="tel:+2349014618785"
                  className="text-brand-brown-600 hover:text-primary transition-colors"
                >
                  +234 901 461 8785
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4 p-6 rounded-xl bg-white shadow-brown border border-brand-brown-100 hover:shadow-brown-lg transition-shadow">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-cream-100 flex items-center justify-center">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-brand-brown-800 mb-1">
                  Studio Location
                </h3>
                <p className="text-brand-brown-600">
                  Abeokuta, Nigeria
                  <br />
                  <span className="text-sm italic">(By Appointment Only)</span>
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="p-6 rounded-xl bg-gradient-to-br from-primary to-brand-brown-700 text-white shadow-brown">
              <h3 className="text-lg font-semibold mb-3">Business Hours</h3>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span>Monday - Friday:</span>
                  <span className="font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday:</span>
                  <span className="font-medium">10:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday:</span>
                  <span className="font-medium">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}