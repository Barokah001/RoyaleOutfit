// ============================================================
// 2. components/layout/Footer.tsx - UPDATED WITH NEW COLORS
// ============================================================

import Link from 'next/link';
import { Facebook, Instagram, Twitter, Mail } from 'lucide-react';

export function Footer() {
  const footerLinks = [
    { title: 'Shop', links: [
      { name: 'Kaftans', href: '/collections/kaftans' },
      { name: 'Caps', href: '/collections/caps' },
      { name: 'Trousers', href: '/collections/trousers' },
    ]},
    { title: 'Customer Care', links: [
      { name: 'Contact Us', href: '/contact' },
      { name: 'Shipping & Returns', href: '/policy/shipping' },
      { name: 'FAQs', href: '/policy/faq' },
    ]},
    { title: 'Company', links: [
      { name: 'About Us', href: '/about' },
      { name: 'Careers', href: '/careers' },
      { name: 'Terms of Service', href: '/policy/terms' },
    ]},
  ];

  return (
    <footer className="mt-20 border-t border-gray-200 bg-[#2d3b2a] py-12 text-white">
      <div className="container mx-auto grid grid-cols-2 gap-8 md:grid-cols-5 md:gap-4 px-4 md:px-8">
        {/* Brand Section */}
        <div className="col-span-2 md:col-span-2">
          <Link
            href="/"
            className="text-3xl font-bold tracking-tight text-[#d4af37] transition-colors hover:text-[#e5c158]"
          >
            AFRICAN ATTIRE
          </Link>
          <p className="mt-4 text-sm text-gray-300">
            Premium Nigerian Kaftans, Caps, and Ready-Made Wears. Crafted with
            elegance.
          </p>
          <div className="mt-4 flex space-x-4">
            <Facebook className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white transition-colors" />
            <Instagram className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white transition-colors" />
            <Twitter className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white transition-colors" />
            <Mail className="h-5 w-5 cursor-pointer text-gray-300 hover:text-white transition-colors" />
          </div>
        </div>

        {/* Link Sections */}
        {footerLinks.map((section) => (
          <div key={section.title} className="col-span-1">
            <h4 className="mb-4 text-lg font-semibold text-white">
              {section.title}
            </h4>
            <ul className="space-y-2">
              {section.links.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t border-gray-700 pt-6 text-center text-sm text-gray-400">
        &copy; {new Date().getFullYear()} AFRICAN ATTIRE. All rights reserved.
      </div>
    </footer>
  );
}
