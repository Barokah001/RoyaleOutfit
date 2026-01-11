// app/admin/login/page.tsx - Admin Login (Fixed)
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Lock, Mail, Eye, EyeOff, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      // TODO: Replace with actual authentication
      // For now, using simple check (REPLACE IN PRODUCTION!)
      if (
        credentials.email === "admin@royaleoutfits.com" &&
        credentials.password === "admin123"
      ) {
        // Store auth token (use secure method in production)
        localStorage.setItem("adminAuth", "true");
        router.push("/admin/dashboard");
      } else {
        setError("Invalid email or password");
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-brand-brown-50 to-brand-cream-200 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md"
      >
        {/* Logo/Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-brown mb-4 shadow-brown-lg">
            <ShieldCheck className="h-10 w-10 text-white" />
          </div>
          <h1 className="text-3xl font-bold text-brand-brown-800 mb-2 font-display">
            Admin Portal
          </h1>
          <p className="text-brand-brown-600">
            Sign in to manage Royale Outfits
          </p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-brown-xl p-8 border border-brand-brown-200">
          <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded">
                <p className="text-red-800 text-sm">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-brown-400" />
                <input
                  type="email"
                  value={credentials.email}
                  onChange={(e) =>
                    setCredentials({ ...credentials, email: e.target.value })
                  }
                  placeholder="admin@royaleoutfits.com"
                  className="w-full pl-10 pr-4 py-3 border-2 border-brand-brown-200 bg-brand-cream-50 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition text-brand-brown-900"
                  required
                />
              </div>
            </div>

            {/* Password Field */}
            <div>
              <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-brown-400" />
                <input
                  type={showPassword ? "text" : "password"}
                  value={credentials.password}
                  onChange={(e) =>
                    setCredentials({ ...credentials, password: e.target.value })
                  }
                  placeholder="Enter your password"
                  className="w-full pl-10 pr-12 py-3 border-2 border-brand-brown-200 bg-brand-cream-50 rounded-lg focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition text-brand-brown-900"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-brand-brown-400 hover:text-brand-brown-600 transition"
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 h-4 text-primary border-brand-brown-300 rounded focus:ring-primary"
                />
                <span className="ml-2 text-sm text-brand-brown-600">
                  Remember me
                </span>
              </label>
              <button
                type="button"
                className="text-sm text-primary hover:text-brand-brown-700 transition"
              >
                Forgot password?
              </button>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-brown text-white py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 shadow-brown-lg flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </>
              ) : (
                <>
                  <Lock className="h-5 w-5" />
                  Sign In
                </>
              )}
            </button>
          </form>

          {/* Demo Credentials (REMOVE IN PRODUCTION) */}
          <div className="mt-6 p-4 bg-amber-50 border border-amber-200 rounded-lg">
            <p className="text-xs text-amber-800 font-semibold mb-1">
              🔑 Demo Credentials:
            </p>
            <p className="text-xs text-amber-700 font-mono">
              Email: admin@royaleoutfits.com
              <br />
              Password: admin123
            </p>
          </div>
        </div>

        {/* Back to Site - Fixed with Link */}
        <div className="text-center mt-6">
          <Link
            href="/"
            className="text-sm text-brand-brown-600 hover:text-primary transition inline-flex items-center gap-1"
          >
            ← Back to Royale Outfits
          </Link>
        </div>
      </motion.div>
    </div>
  );
}