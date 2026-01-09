// components/layout/Footer.tsx - With Working Social Links
import Link from "next/link";
import { Facebook, Instagram, Twitter, Mail } from "lucide-react";

export function Footer() {
  const footerLinks = [
    {
      title: "Shop",
      links: [
        { name: "All Products", href: "/products" },
        { name: "Kaftans", href: "/collections/kaftans" },
        { name: "Caps", href: "/collections/caps" },
        { name: "Agbada Sets", href: "/collections/agbada" },
        { name: "Fabrics", href: "/collections/fabrics" },
      ],
    },
    {
      title: "Customer Care",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "Shipping & Returns", href: "/policy/shipping" },
        { name: "FAQs", href: "/faq" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Us", href: "/about" },
        { name: "Careers", href: "/careers" },
        { name: "Terms of Service", href: "/policy/terms" },
      ],
    },
  ];

  // Social media links - Replace these with actual social media URLs
  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/royaleoutfits", // Replace with actual Facebook page
      color: "hover:text-[#1877f2]",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/royaleoutfits", // Replace with actual Instagram handle
      color: "hover:text-[#e4405f]",
    },
    {
      name: "Twitter",
      icon: Twitter,
      href: "https://twitter.com/royaleoutfits", // Replace with actual Twitter handle
      color: "hover:text-[#1da1f2]",
    },
    {
      name: "Email",
      icon: Mail,
      href: "mailto:mubarakadegbenga@gmail.com",
      color: "hover:text-[#ea4335]",
    },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#4a5d3f] to-[#3a4d2f] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="text-2xl font-bold mb-4 block hover:opacity-80 transition-opacity"
            >
              ROYALE OUTFITS
            </Link>
            <p className="text-white/80 text-sm mb-4 leading-relaxed">
              Premium Nigerian Kaftans, Caps, and Ready-Made Wears. Crafted with
              elegance and tradition.
            </p>
            {/* Social Media Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center transition-all duration-300 ${social.color} hover:bg-white/20 hover:scale-110`}
                  aria-label={social.name}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link Sections */}
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-bold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-white/70 hover:text-white text-sm transition-colors duration-200 hover:underline"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © {new Date().getFullYear()} ROYALE OUTFITS. All rights reserved.
            </p>

            {/* Additional Links */}
            <div className="flex gap-6 text-sm">
              <Link
                href="/policy/terms"
                className="text-white/60 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/policy/terms"
                className="text-white/60 hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
