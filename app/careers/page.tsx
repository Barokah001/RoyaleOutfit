// app/careers/page.tsx
"use client";
import { motion } from "framer-motion";
import {
  Briefcase,
  Heart,
  TrendingUp,
  Users,
  MapPin,
  Clock,
  HandCoins,
} from "lucide-react";
import { useState } from "react";

export default function CareersPage() {
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const benefits = [
    {
      icon: HandCoins,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages",
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Opportunities for advancement and skill development",
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance coverage",
    },
    {
      icon: Users,
      title: "Great Team",
      description: "Work with passionate, talented professionals",
    },
  ];

  const openPositions = [
    {
      title: "Master Tailor",
      department: "Production",
      location: "Abeokuta, Nigeria",
      type: "Full-time",
      salary: "₦80,000 - ₦150,000/month",
      description:
        "We're seeking an experienced master tailor with expertise in traditional Nigerian attire. The ideal candidate has 5+ years of experience in kaftan and agbada construction, attention to detail, and ability to work with premium fabrics.",
      requirements: [
        "Minimum 5 years of tailoring experience",
        "Expert knowledge of traditional Nigerian garment construction",
        "Proficiency with both hand-sewing and machine techniques",
        "Experience with premium fabrics and embroidery",
        "Strong attention to detail and quality standards",
        "Ability to interpret design specifications accurately",
      ],
      responsibilities: [
        "Create custom kaftans, agbadas, and traditional wear",
        "Ensure all garments meet quality standards",
        "Train and mentor junior tailors",
        "Collaborate with designers on new patterns",
        "Maintain equipment and workspace cleanliness",
      ],
    },
    {
      title: "Fashion Designer",
      department: "Design",
      location: "Abeokuta, Nigeria",
      type: "Full-time",
      salary: "₦100,000 - ₦200,000/month",
      description:
        "Creative fashion designer needed to develop innovative designs that blend traditional Nigerian aesthetics with modern fashion trends. Must have a portfolio demonstrating expertise in menswear and traditional attire.",
      requirements: [
        "Degree in Fashion Design or related field",
        "3+ years of design experience in traditional wear",
        "Strong portfolio showcasing menswear designs",
        "Proficiency with design software (Adobe Illustrator, Photoshop)",
        "Knowledge of Nigerian textile traditions",
        "Excellent sketching and pattern-making skills",
      ],
      responsibilities: [
        "Design new kaftan and agbada collections",
        "Create technical sketches and specifications",
        "Research fashion trends and cultural motifs",
        "Collaborate with tailors on pattern development",
        "Present design concepts to management",
      ],
    },
    {
      title: "Customer Service Representative",
      department: "Sales & Support",
      location: "Abeokuta, Nigeria",
      type: "Full-time",
      salary: "₦50,000 - ₦80,000/month",
      description:
        "Join our customer service team to provide exceptional support to our clients. Help customers with orders, measurements, customization requests, and general inquiries.",
      requirements: [
        "Excellent communication skills in English and Yoruba",
        "1-2 years of customer service experience",
        "Basic knowledge of traditional Nigerian attire",
        "Proficiency with computers and order management systems",
        "Patient, friendly, and professional demeanor",
        "Problem-solving skills and attention to detail",
      ],
      responsibilities: [
        "Respond to customer inquiries via phone, email, and chat",
        "Process orders and track shipments",
        "Assist customers with measurements and sizing",
        "Handle returns, exchanges, and complaints",
        "Maintain customer records and order history",
      ],
    },
    {
      title: "Social Media Manager",
      department: "Marketing",
      location: "Remote (Nigeria)",
      type: "Full-time / Contract",
      salary: "₦70,000 - ₦120,000/month",
      description:
        "Dynamic social media manager to grow our online presence and engage with our community. Create compelling content that showcases our craftsmanship and connects with fashion-conscious Nigerians.",
      requirements: [
        "2+ years of social media management experience",
        "Strong understanding of Instagram, Facebook, and TikTok",
        "Excellent photography and video editing skills",
        "Knowledge of fashion and traditional wear",
        "Experience with social media analytics tools",
        "Creative writing and storytelling abilities",
      ],
      responsibilities: [
        "Develop and execute social media content strategy",
        "Create engaging posts, stories, and reels",
        "Photograph products and create style guides",
        "Engage with followers and respond to comments",
        "Track analytics and report on performance",
      ],
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-brand-cream-200">
        {/* Hero Section */}
        <section className="relative h-[400px] overflow-hidden bg-gradient-to-br from-primary to-brand-brown-700">
          <div className="absolute inset-0 bg-[url('/images/kaftan-grid.jpg')] opacity-30"></div>
          <div className="relative container mx-auto px-4 h-full flex items-center justify-center text-center">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                Join Our Team
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">
                Build your career with Nigeria&apos;s premier traditional attire
                brand
              </p>
            </motion.div>
          </div>
        </section>

        {/* Why Work With Us */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-brown-800 mb-4">
                Why Work at Royale Outfits?
              </h2>
              <p className="text-lg text-brand-brown-600 max-w-2xl mx-auto">
                Join a team that values craftsmanship, creativity, and cultural
                heritage
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl text-center hover:shadow-brown-lg transition-shadow"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-brand-cream-100 mb-4">
                    <benefit.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-brand-brown-800 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-brand-brown-600 text-sm">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 bg-[#faf9f6]">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold text-brand-brown-800 mb-4">
                Open Positions
              </h2>
              <p className="text-lg text-brand-brown-600 max-w-2xl mx-auto">
                Find your perfect role and apply today
              </p>
            </motion.div>

            <div className="max-w-5xl mx-auto space-y-6">
              {openPositions.map((job, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <div
                    className="p-6 cursor-pointer"
                    onClick={() =>
                      setSelectedJob(selectedJob === index ? null : index)
                    }
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-2xl font-bold text-brand-brown-800 mb-2">
                          {job.title}
                        </h3>
                        <div className="flex flex-wrap gap-4 text-sm text-brand-brown-600">
                          <span className="flex items-center gap-1">
                            <Briefcase className="h-4 w-4" />
                            {job.department}
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {job.type}
                          </span>
                          <span className="flex items-center gap-1 font-medium text-brand-brown-600">
                            <HandCoins className="h-4 w-4" />
                            {job.salary}
                          </span>
                        </div>
                      </div>
                      <button className="px-6 py-3 bg-gradient-brown text-white rounded-full font-semibold hover:opacity-90 transition-opacity whitespace-nowrap shadow-brown-lg">
                        View Details
                      </button>
                    </div>
                  </div>

                  {selectedJob === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-gray-200 p-6 bg-[#faf9f6]"
                    >
                      <p className="text-gray-700 mb-6">{job.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-lg font-bold text-brand-brown-800 mb-3">
                            Requirements
                          </h4>
                          <ul className="space-y-2">
                            {job.requirements.map((req, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-gray-700"
                              >
                                <span className="text-[#4a5d3f] mr-2 mt-1">
                                  •
                                </span>
                                <span className="text-sm">{req}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-lg font-bold text-brand-brown-800 mb-3">
                            Responsibilities
                          </h4>
                          <ul className="space-y-2">
                            {job.responsibilities.map((resp, idx) => (
                              <li
                                key={idx}
                                className="flex items-start text-gray-700"
                              >
                                <span className="text-[#4a5d3f] mr-2 mt-1">
                                  •
                                </span>
                                <span className="text-sm">{resp}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 flex gap-4">
                        <a
                          href="mailto:mubarakadegbenga@gmail.com?subject=Application for Master Tailor Position"
                          className="px-6 py-3 bg-[#4a5d3f] text-white rounded-full font-semibold hover:opacity-90 transition-opacity"
                        >
                          Apply Now
                        </a>
                        <button
                          onClick={() => setSelectedJob(null)}
                          className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-full font-semibold hover:border-[#4a5d3f] transition-colors"
                        >
                          Close
                        </button>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact for Other Opportunities */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mx-auto text-center bg-gradient-to-br from-primary to-brand-brown-700 p-12 rounded-2xl text-white"
            >
              <h3 className="text-3xl font-bold mb-4">
                Don&apos;t See Your Role?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                We&apos;re always looking for talented individuals. Send us your
                CV and let&apos;s talk!
              </p>
              <a
                href="mailto:mubarakadegbenga@gmail.com?subject=General Job Inquiry"
                className="inline-block bg-white text-brand-brown-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  );
}
