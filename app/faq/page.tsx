// app/faq/page.tsx - Brown Theme
"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      category: "Orders & Customization",
      questions: [
        {
          q: "How do I place a custom order?",
          a: "You can place a custom order by browsing our products, selecting your preferred style, and providing your measurements during checkout. For detailed customization (monograms, special embroidery), please contact us directly via phone or email.",
        },
        {
          q: "How long does it take to complete a custom order?",
          a: "Standard custom orders typically take 7-14 business days. Complex designs with extensive embroidery may take 14-21 days. Rush orders can be accommodated for an additional fee - please contact us to discuss your timeline.",
        },
        {
          q: "Can I request specific fabrics or colors?",
          a: "Absolutely! We have a wide range of premium fabrics in various colors. If you have a specific fabric or color in mind, please mention it when placing your order. We can also source special fabrics upon request.",
        },
        {
          q: "Do you offer monogramming services?",
          a: "Yes! Most of our kaftans and agbada sets can be monogrammed with your initials or custom text. This service is included for premium pieces and available at a small additional cost for standard items.",
        },
      ],
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          q: "Do you offer free shipping?",
          a: "Yes! We offer free shipping on all orders over ₦50,000 within Nigeria. For orders below this amount, a flat shipping fee of ₦5,000 applies.",
        },
        {
          q: "What areas do you deliver to?",
          a: "We deliver nationwide across Nigeria. International shipping is available to select countries - please contact us for international shipping rates and delivery times.",
        },
        {
          q: "How can I track my order?",
          a: "Once your order ships, you'll receive a tracking number via email and SMS. You can use this number to track your package on our courier partner's website.",
        },
        {
          q: "What if I'm not home for delivery?",
          a: "Our courier will attempt delivery up to three times. If you're unavailable, you can arrange an alternative delivery time or pick up your order from the nearest courier office.",
        },
      ],
    },
    {
      category: "Sizing & Measurements",
      questions: [
        {
          q: "How do I take my measurements?",
          a: "We provide a detailed measurement guide during checkout. For the most accurate fit, we recommend visiting a professional tailor to take your measurements. You can also schedule an in-person fitting at our Abeokuta studio.",
        },
        {
          q: "What if my measurements don't match standard sizes?",
          a: "All our pieces are custom-made! Simply provide your exact measurements during checkout, and we'll tailor the garment specifically for you. There's no need to fit into standard sizes.",
        },
        {
          q: "Can I request alterations after receiving my order?",
          a: "Yes! If adjustments are needed, we offer one free alteration within 14 days of delivery. Simply contact us to arrange return shipping, and we'll make the necessary modifications.",
        },
      ],
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          q: "What is your return policy?",
          a: "We accept returns within 14 days of delivery for unworn, unaltered items with original tags attached. Custom-made pieces are non-returnable unless there's a manufacturing defect.",
        },
        {
          q: "How do I initiate a return?",
          a: "Contact our customer service team via email or phone with your order number. We'll provide you with return instructions and a return authorization number.",
        },
        {
          q: "Do you offer exchanges?",
          a: "Yes! If you need a different size or color, we can process an exchange. Custom pieces can be modified free of charge within 14 days if the fit isn't perfect.",
        },
        {
          q: "How long do refunds take?",
          a: "Once we receive and inspect your return, refunds are processed within 5-7 business days. The amount will be credited back to your original payment method.",
        },
      ],
    },
    {
      category: "Payment & Security",
      questions: [
        {
          q: "What payment methods do you accept?",
          a: "We accept credit/debit cards, bank transfers, and mobile payments (USSD, mobile wallets). All transactions are processed through secure, encrypted channels.",
        },
        {
          q: "Is it safe to enter my card details on your website?",
          a: "Absolutely! Our website uses industry-standard SSL encryption to protect your payment information. We never store your full card details on our servers.",
        },
        {
          q: "Can I pay on delivery?",
          a: "Cash on delivery is available for select locations within Lagos and Abeokuta. This option will appear at checkout if available for your address.",
        },
      ],
    },
    {
      category: "Care & Maintenance",
      questions: [
        {
          q: "How should I care for my kaftan or agbada?",
          a: "We recommend dry cleaning for all embroidered and premium pieces. For simple designs, hand wash in cold water with mild detergent and hang to dry. Avoid wringing or twisting the fabric.",
        },
        {
          q: "How do I store traditional attire?",
          a: "Store in a cool, dry place away from direct sunlight. Use padded hangers for kaftans and agbadas to maintain their shape. Keep caps in a protective box or bag to preserve their form.",
        },
        {
          q: "Can embroidery be repaired if damaged?",
          a: "Yes! If embroidery becomes damaged, contact us. We can repair or restore embroidered details. This service is complimentary within the first 6 months of purchase.",
        },
      ],
    },
  ];

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  let questionCounter = 0;

  return (
    <div className="min-h-screen bg-brand-cream-200 py-12">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-extrabold text-brand-brown-800 mb-4 font-display">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-brand-brown-600 max-w-2xl mx-auto">
            Find answers to common questions about our products, orders, and
            services
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-12">
          {faqs.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
            >
              <h2 className="text-2xl font-bold text-primary mb-6 pb-2 border-b-2 border-primary">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((faq) => {
                  const currentIndex = questionCounter++;
                  return (
                    <div
                      key={currentIndex}
                      className="bg-white rounded-lg shadow-brown overflow-hidden hover:shadow-brown-lg transition-shadow"
                    >
                      <button
                        onClick={() => toggleQuestion(currentIndex)}
                        className="w-full flex items-center justify-between p-6 text-left hover:bg-brand-cream-50 transition-colors"
                      >
                        <span className="text-lg font-semibold text-brand-brown-800 pr-4">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`flex-shrink-0 h-5 w-5 text-primary transition-transform duration-300 ${
                            openIndex === currentIndex ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{
                          height: openIndex === currentIndex ? "auto" : 0,
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 text-brand-brown-700 leading-relaxed">
                          {faq.a}
                        </div>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact CTA */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center bg-white p-8 rounded-xl shadow-brown-lg max-w-2xl mx-auto"
        >
          <h3 className="text-2xl font-bold text-brand-brown-800 mb-4">
            Still Have Questions?
          </h3>
          <p className="text-brand-brown-600 mb-6">
            Our customer service team is here to help you
          </p>
          <a
            href="/contact"
            className="inline-block bg-gradient-brown text-white px-8 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity shadow-brown"
          >
            Contact Us
          </a>
        </motion.div>
      </div>
    </div>
  );
}
