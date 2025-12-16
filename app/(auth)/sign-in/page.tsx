// app/(auth)/sign-in/page.tsx - Create this file separately
"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SignInPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate authentication (replace with real auth later)
    setTimeout(() => {
      console.log("User signed in");
      setIsLoading(false);
      router.push("/"); // Redirect to homepage after sign in
    }, 1000);
  };

  return (
    <div className="flex min-h-screen items-center justify-center p-4">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl"
      >
        <h1 className="text-3xl font-bold text-center text-[#4a5d3f] mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to access your account and saved items.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-900"
            >
              Email
            </label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="email"
                type="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-gray-900 focus:border-[#4a5d3f] focus:ring-2 focus:ring-[#4a5d3f] focus:outline-none transition duration-150"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-gray-900"
            >
              Password
            </label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
              <input
                id="password"
                type="password"
                required
                placeholder="Enter your password"
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-gray-900 focus:border-[#4a5d3f] focus:ring-2 focus:ring-[#4a5d3f] focus:outline-none transition duration-150"
              />
            </div>
            <div className="text-right">
              <Link
                href="/auth/forgot-password"
                className="text-xs font-medium text-[#4a5d3f] hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            disabled={isLoading}
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center rounded-full bg-[#4a5d3f] px-4 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:opacity-90 shadow-md disabled:opacity-50"
          >
            {isLoading ? (
              <span>Signing in...</span>
            ) : (
              <>
                <LogIn className="mr-2 h-5 w-5" />
                Sign In
              </>
            )}
          </motion.button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          Don`&apos;`t have an account?{" "}
          <Link
            href="/sign-up"
            className="font-semibold text-[#4a5d3f] hover:underline"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
