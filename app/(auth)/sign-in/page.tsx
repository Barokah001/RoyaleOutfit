// app/(auth)/sign-in/page.tsx
import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Lock, LogIn } from "lucide-react";

export default function SignInPage() {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Authentication logic here (e.g., using Server Actions or next-auth)
    console.log("Attempting sign in...");
  };

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-4 bg-light-green-50">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md rounded-lg bg-white p-8 shadow-2xl shadow-nigerian-olive/10"
      >
        <h1 className="text-3xl font-bold text-center text-nigerian-olive mb-2">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500 mb-8">
          Sign in to access your dashboard and saved items.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Email Input */}
          <div className="space-y-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-foreground"
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
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-foreground focus:border-nigerian-olive focus:ring-1 focus:ring-nigerian-olive transition duration-150"
              />
            </div>
          </div>

          {/* Password Input */}
          <div className="space-y-2">
            <label
              htmlFor="password"
              className="text-sm font-medium text-foreground"
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
                className="w-full rounded-lg border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-foreground focus:border-nigerian-olive focus:ring-1 focus:ring-nigerian-olive transition duration-150"
              />
            </div>
            <div className="text-right">
              <Link
                href="/auth/forgot-password"
                className="text-xs font-medium text-nigerian-olive hover:underline"
              >
                Forgot Password?
              </Link>
            </div>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileTap={{ scale: 0.98 }}
            className="w-full inline-flex items-center justify-center rounded-full bg-nigerian-olive px-4 py-3 text-lg font-semibold text-white transition-colors duration-300 hover:bg-opacity-90 shadow-md"
          >
            <LogIn className="mr-2 h-5 w-5" />
            Sign In
          </motion.button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600">
          `Don&apost have an account?`{" "}
          <Link
            href="/auth/sign-up"
            className="font-semibold text-nigerian-olive hover:underline"
          >
            Create an account
          </Link>
        </p>
      </motion.div>
    </div>
  );
}
