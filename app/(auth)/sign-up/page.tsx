// app/sign-up/page.tsx
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, User, UserPlus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignUpPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate account creation (replace with real auth later)
    setTimeout(() => {
      console.log("Account created");
      setIsLoading(false);
      router.push("/sign-in"); // Redirect to sign in after signup
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4 bg-brand-cream-200">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-xl bg-white p-8 shadow-brown-xl border border-brand-brown-200"
      >
        <h1 className="text-3xl font-bold text-center text-primary mb-2">
          Create Account
        </h1>
        <p className="text-center text-brand-brown-600 mb-8">
          Join us and start shopping premium African attire
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name Input */}
          <div className="space-y-2">
            <label
              htmlFor="name"
              className="text-sm font-medium text-brand-brown-800"
            >
              Full Name
            </label>
            <div className="relative">
              <User className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-brown-400" />
              <input
                id="name"
                type="text"
                required
                placeholder="John Doe"
                className="w-full rounded-lg border border-brand-brown-300 bg-brand-cream-100 py-3 pl-10 pr-4 text-brand-brown-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition duration-150"
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-brand-brown-800"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-brown-400" />
              <input
                id="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-brand-brown-300 bg-brand-cream-100 py-3 pl-10 pr-4 text-brand-brown-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition duration-150"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-brand-brown-800"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-brown-400" />
              <input
                id="password"
                type="password"
                required
                minLength={8}
                placeholder="At least 8 characters"
                className="w-full rounded-lg border border-brand-brown-300 bg-brand-cream-100 py-3 pl-10 pr-4 text-brand-brown-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition duration-150"
              />
            </div>
            <p className="text-xs text-brand-brown-500">
              Must be at least 8 characters long
            </p>
          </div>

          {/* Confirm Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="confirm-password"
              className="text-sm font-medium text-brand-brown-800"
            >
              Confirm Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-brand-brown-400" />
              <input
                id="confirm-password"
                type="password"
                required
                placeholder="Confirm your password"
                className="w-full rounded-lg border border-brand-brown-300 bg-brand-cream-100 py-3 pl-10 pr-4 text-brand-brown-900 focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition duration-150"
              />
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center rounded-full bg-gradient-brown text-white px-4 py-3 text-lg font-semibold transition-opacity duration-300 hover:opacity-90 shadow-brown-lg disabled:opacity-50"
          >
            {isLoading ? (
              <span>Creating account...</span>
            ) : (
              <>
                <UserPlus className="mr-2 h-5 w-5" />
                Create Account
              </>
            )}
          </motion.button>
        </form>

        <p className="mt-8 text-center text-sm text-brand-brown-600">
          Already have an account?{" "}
          <Link
            href="/sign-in"
            className="font-semibold text-primary hover:underline"
          >
            Sign in
          </Link>
        </p>
      </motion.div>
    </div>
  );
}