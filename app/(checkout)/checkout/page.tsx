// app/checkout/page.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { CreditCard, Building2, Smartphone, CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  size: string;
}

export default function CheckoutPage() {
  const router = useRouter();

  // Initialize cart from localStorage using lazy initialization
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cart");
      return savedCart ? JSON.parse(savedCart) : [];
    }
    return [];
  });

  const [selectedPayment, setSelectedPayment] = useState<string>("card");
  const [isProcessing, setIsProcessing] = useState(false);
  const [orderComplete, setOrderComplete] = useState(false);

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const shipping = subtotal > 50000 ? 0 : 5000;
  const total = subtotal + shipping;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      setOrderComplete(true);

      // Clear cart after successful order
      if (typeof window !== "undefined") {
        localStorage.removeItem("cart");
      }

      // Redirect to success page after 3 seconds
      setTimeout(() => {
        router.push("/");
      }, 3000);
    }, 2000);
  };

  if (orderComplete) {
    return (
      <div className="container mx-auto py-12 px-4 min-h-screen flex items-center justify-center bg-brand-cream-200">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="max-w-md text-center bg-white p-8 rounded-xl shadow-brown-xl border border-brand-brown-200"
        >
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-600" />
          </div>
          <h1 className="text-3xl font-bold text-brand-brown-900 mb-4">
            Order Successful!
          </h1>
          <p className="text-brand-brown-600 mb-6">
            Thank you for your purchase. Your order has been confirmed and will
            be shipped soon.
          </p>
          <p className="text-sm text-brand-brown-500">Redirecting to homepage...</p>
        </motion.div>
      </div>
    );
  }

  if (cartItems.length === 0) {
    return (
      <div className="container mx-auto py-12 px-4 min-h-screen flex items-center justify-center bg-brand-cream-200">
        <div className="text-center bg-white p-8 rounded-xl shadow-brown-lg border border-brand-brown-200">
          <h1 className="text-3xl font-bold text-brand-brown-900 mb-4">
            No Items to Checkout
          </h1>
          <p className="text-brand-brown-600 mb-6">Your cart is empty.</p>
          <a
            href="/products"
            className="inline-flex items-center justify-center rounded-full bg-gradient-brown px-8 py-3 text-lg font-semibold text-white shadow-brown-lg transition-opacity duration-300 hover:opacity-90"
          >
            Continue Shopping
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-12 px-4 min-h-screen bg-brand-cream-200">
      <h1 className="text-4xl font-extrabold text-brand-brown-900 mb-8">Checkout</h1>

      <div className="flex flex-col lg:flex-row gap-10">
        {/* Checkout Form */}
        <div className="lg:w-3/5">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Shipping Information */}
            <div className="bg-white p-6 rounded-xl shadow-brown-lg border border-brand-brown-200">
              <h2 className="text-2xl font-bold text-brand-brown-900 mb-6">
                Shipping Information
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+234 800 000 0000"
                  className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                  Address *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Street address"
                  className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                <div>
                  <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                    State *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                  />
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-white p-6 rounded-xl shadow-brown-lg border border-brand-brown-200">
              <h2 className="text-2xl font-bold text-brand-brown-900 mb-6">
                Payment Method
              </h2>

              <div className="space-y-3">
                {/* Card Payment */}
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedPayment === "card"
                      ? "border-primary bg-brand-cream-100"
                      : "border-brand-brown-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={selectedPayment === "card"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="mr-3"
                  />
                  <CreditCard className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium text-brand-brown-800">Credit/Debit Card</span>
                </label>

                {/* Bank Transfer */}
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedPayment === "transfer"
                      ? "border-primary bg-brand-cream-100"
                      : "border-brand-brown-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="transfer"
                    checked={selectedPayment === "transfer"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="mr-3"
                  />
                  <Building2 className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium text-brand-brown-800">Bank Transfer</span>
                </label>

                {/* Mobile Money */}
                <label
                  className={`flex items-center p-4 border-2 rounded-lg cursor-pointer transition-all ${
                    selectedPayment === "mobile"
                      ? "border-primary bg-brand-cream-100"
                      : "border-brand-brown-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="payment"
                    value="mobile"
                    checked={selectedPayment === "mobile"}
                    onChange={(e) => setSelectedPayment(e.target.value)}
                    className="mr-3"
                  />
                  <Smartphone className="h-5 w-5 mr-3 text-primary" />
                  <span className="font-medium text-brand-brown-800">Mobile Payment</span>
                </label>
              </div>

              {/* Payment Details (shown only for card) */}
              {selectedPayment === "card" && (
                <div className="mt-6 space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                      Card Number *
                    </label>
                    <input
                      type="text"
                      placeholder="1234 5678 9012 3456"
                      required
                      className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                        Expiry Date *
                      </label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        required
                        className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-brand-brown-700 mb-2">
                        CVV *
                      </label>
                      <input
                        type="text"
                        placeholder="123"
                        required
                        className="w-full px-4 py-3 border border-brand-brown-300 bg-brand-cream-100 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-brand-brown-900"
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button
              type="submit"
              disabled={isProcessing}
              className="w-full bg-gradient-brown text-white py-4 rounded-full text-lg font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 shadow-brown-lg"
            >
              {isProcessing
                ? "Processing Payment..."
                : `Pay ₦${total.toLocaleString()}`}
            </button>
          </form>
        </div>

        {/* Order Summary */}
        <div className="lg:w-2/5">
          <div className="bg-white p-6 rounded-xl shadow-brown-lg border border-brand-brown-200 sticky top-24">
            <h2 className="text-2xl font-bold text-brand-brown-900 mb-6">
              Order Summary
            </h2>

            <div className="space-y-4 mb-6">
              {cartItems.map((item) => (
                <div key={item.id} className="flex justify-between text-sm">
                  <div>
                    <p className="font-medium text-brand-brown-900">{item.name}</p>
                    <p className="text-brand-brown-500">
                      Size: {item.size} × {item.quantity}
                    </p>
                  </div>
                  <p className="font-medium text-brand-brown-900">
                    ₦{(item.price * item.quantity).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-brand-brown-200 pt-4 space-y-2">
              <div className="flex justify-between text-brand-brown-600">
                <span>Subtotal</span>
                <span>₦{subtotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between text-brand-brown-600">
                <span>Shipping</span>
                <span>
                  {shipping === 0 ? "FREE" : `₦${shipping.toLocaleString()}`}
                </span>
              </div>
              <div className="flex justify-between text-xl font-bold text-brand-brown-900 pt-2 border-t border-brand-brown-200">
                <span>Total</span>
                <span>₦{total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}