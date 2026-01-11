// components/layout/AdminAccessButton.tsx

"use client";

import Link from "next/link";
import { ShieldCheck } from "lucide-react";
import { useState } from "react";

export function AdminAccessButton() {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative">
      <Link
        href="/admin/login"
        className="relative inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-100 border border-amber-300 text-amber-800 hover:bg-amber-200 transition-colors text-sm font-medium"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <ShieldCheck className="h-4 w-4" />
        <span className="hidden sm:inline">Admin Portal</span>
      </Link>

      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute top-full mt-2 right-0 w-64 bg-white rounded-lg shadow-brown-lg border border-brand-brown-200 p-4 z-50">
          <p className="text-xs font-semibold text-brand-brown-800 mb-2">
            Admin Login Credentials:
          </p>
          <div className="text-xs text-brand-brown-600 font-mono bg-brand-cream-100 p-2 rounded">
            <p>Email: admin@royaleoutfits.com</p>
            <p>Password: admin123</p>
          </div>
        </div>
      )}
    </div>
  );
}