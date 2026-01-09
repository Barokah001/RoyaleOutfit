// app/policy/terms/page.tsx
"use client";

import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing and using the Royale Outfits website and services, you accept and agree to be bound by the terms and provisions of this agreement. If you do not agree to these Terms of Service, please do not use our services.",
    },
    {
      title: "2. Use of Services",
      content:
        "You agree to use our website and services only for lawful purposes and in accordance with these Terms. You agree not to use our services in any way that violates any applicable federal, state, local, or international law or regulation.",
    },
    {
      title: "3. Custom Orders and Product Information",
      subsections: [
        {
          subtitle: "3.1 Product Descriptions",
          text: "We strive to provide accurate product descriptions, colors, and specifications. However, we do not warrant that product descriptions or other content is accurate, complete, reliable, current, or error-free.",
        },
        {
          subtitle: "3.2 Custom Tailoring",
          text: "Custom-tailored items are made specifically to your provided measurements and specifications. Please ensure all measurements are accurate as custom items cannot be returned or exchanged unless there is a manufacturing defect.",
        },
        {
          subtitle: "3.3 Production Time",
          text: "Custom orders typically take 7-21 business days depending on complexity. We will provide an estimated completion date, but this is an estimate only and not a guarantee.",
        },
      ],
    },
    {
      title: "4. Pricing and Payment",
      subsections: [
        {
          subtitle: "4.1 Pricing",
          text: "All prices are listed in Nigerian Naira (₦) and are subject to change without notice. The price charged will be the price displayed at the time of order placement.",
        },
        {
          subtitle: "4.2 Payment",
          text: "Payment must be completed before production begins. We accept credit/debit cards, bank transfers, and approved mobile payment methods. All transactions are processed securely.",
        },
        {
          subtitle: "4.3 Failed Payments",
          text: "If payment fails or is declined, your order may be canceled or delayed until payment is successfully processed.",
        },
      ],
    },
    {
      title: "5. Shipping and Delivery",
      subsections: [
        {
          subtitle: "5.1 Shipping Fees",
          text: "Free shipping is provided on orders over ₦50,000 within Nigeria. A flat rate of ₦5,000 applies to orders below this threshold.",
        },
        {
          subtitle: "5.2 Delivery Times",
          text: "Delivery typically takes 3-7 business days within Nigeria after order completion. International shipping times vary by destination.",
        },
        {
          subtitle: "5.3 Shipping Address",
          text: "You are responsible for providing accurate shipping information. Royale Outfits is not responsible for delays or non-delivery due to incorrect addresses.",
        },
      ],
    },
    {
      title: "6. Returns, Exchanges, and Refunds",
      subsections: [
        {
          subtitle: "6.1 Return Policy",
          text: "Non-custom items may be returned within 14 days of delivery if unworn, unaltered, and with original tags attached. Custom-made items are non-returnable unless there is a manufacturing defect.",
        },
        {
          subtitle: "6.2 Exchanges",
          text: "We accept exchanges for different sizes or colors subject to availability. Custom items can be altered once free of charge within 14 days of delivery.",
        },
        {
          subtitle: "6.3 Refunds",
          text: "Approved refunds will be processed within 5-7 business days and credited to your original payment method. Shipping fees are non-refundable except in cases of our error.",
        },
      ],
    },
    {
      title: "7. Intellectual Property",
      content:
        "All content on the Royale Outfits website, including designs, logos, images, text, and graphics, is the property of Royale Outfits and protected by intellectual property laws. You may not use, reproduce, or distribute any content without our explicit written permission.",
    },
    {
      title: "8. User Accounts",
      content:
        "If you create an account on our website, you are responsible for maintaining the confidentiality of your account credentials. You agree to notify us immediately of any unauthorized use of your account. Royale Outfits will not be liable for any loss or damage arising from your failure to protect your account information.",
    },
    {
      title: "9. Privacy and Data Protection",
      content:
        "Your use of our services is also governed by our Privacy Policy. By using our services, you consent to the collection and use of your information as described in the Privacy Policy.",
    },
    {
      title: "10. Limitation of Liability",
      content:
        "Royale Outfits shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services. Our total liability shall not exceed the amount you paid for the specific product or service in question.",
    },
    {
      title: "11. Dispute Resolution",
      content:
        "Any disputes arising from these Terms or your use of our services shall be resolved through good faith negotiations. If negotiations fail, disputes shall be subject to the exclusive jurisdiction of the courts of Nigeria.",
    },
    {
      title: "12. Changes to Terms",
      content:
        "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to the website. Your continued use of our services after changes are posted constitutes acceptance of the modified terms.",
    },
    {
      title: "13. Contact Information",
      content:
        "If you have any questions about these Terms of Service, please contact us at mubarakadegbenga@gmail.com or call +234 901 461 8785.",
    },
  ];

  return (
    <>
      <Header />
      <div className="min-h-screen bg-[#faf9f6] py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            {/* Header */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#e8efe6] mb-4">
                <Shield className="h-8 w-8 text-[#4a5d3f]" />
              </div>
              <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
                Terms of Service
              </h1>
              <p className="text-lg text-gray-600">
                Last Updated: January 9, 2026
              </p>
            </div>

            {/* Introduction */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-8">
              <p className="text-gray-700 leading-relaxed">
                Welcome to Royale Outfits. These Terms of Service
                (&quot;Terms&quot;) govern your access to and use of our
                website, products, and services. Please read these terms
                carefully before placing an order or using our services.
              </p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-6">
              {sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.05 }}
                  className="bg-white p-6 md:p-8 rounded-xl shadow-md"
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-4">
                    {section.title}
                  </h2>

                  {section.content && (
                    <p className="text-gray-700 leading-relaxed">
                      {section.content}
                    </p>
                  )}

                  {section.subsections && (
                    <div className="space-y-4">
                      {section.subsections.map((subsection, subIndex) => (
                        <div key={subIndex}>
                          <h3 className="text-lg font-semibold text-gray-900 mb-2">
                            {subsection.subtitle}
                          </h3>
                          <p className="text-gray-700 leading-relaxed pl-4">
                            {subsection.text}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Agreement Footer */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-gradient-to-br from-[#4a5d3f] to-[#3a4d2f] p-8 rounded-xl text-white text-center"
            >
              <p className="text-lg mb-4">
                By using Royale Outfits services, you acknowledge that you have
                read, understood, and agree to be bound by these Terms of
                Service.
              </p>
              <a
                href="/contact"
                className="inline-block bg-white text-[#4a5d3f] px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Contact Us
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
      <Footer />
    </>
  );
}
