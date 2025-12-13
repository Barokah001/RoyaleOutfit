// app/(checkout)/checkout/page.tsx
"use client";
import { motion } from "framer-motion";
import { CreditCard, Truck, Lock, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CheckoutPage() {
  const [activeStep, setActiveStep] = useState(1);
  const totalAmount = 130000;

  const steps = [
    { id: 1, name: "Shipping", icon: Truck },
    { id: 2, name: "Payment", icon: CreditCard },
    { id: 3, name: "Review", icon: CheckCircle },
  ];

  const renderStepContent = (step: number) => {
    switch (step) {
      case 1:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Shipping Details</h3>
            <input
              placeholder="Full Name"
              className="w-full rounded-lg border p-3"
              required
            />
            <input
              placeholder="Address Line 1"
              className="w-full rounded-lg border p-3"
              required
            />
            <div className="flex space-x-4">
              <input
                placeholder="City"
                className="w-1/2 rounded-lg border p-3"
                required
              />
              <input
                placeholder="State"
                className="w-1/2 rounded-lg border p-3"
                required
              />
            </div>
            <input
              placeholder="Phone Number"
              type="tel"
              className="w-full rounded-lg border p-3"
              required
            />
            <button
              onClick={() => setActiveStep(2)}
              className="w-full rounded-full bg-nigerian-olive px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-opacity-90 mt-4"
            >
              Continue to Payment
            </button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4">
            <h3 className="text-xl font-semibold mb-4">Payment Information</h3>
            <input
              placeholder="Card Number"
              type="text"
              className="w-full rounded-lg border p-3"
              required
            />
            <input
              placeholder="Card Holder Name"
              type="text"
              className="w-full rounded-lg border p-3"
              required
            />
            <div className="flex space-x-4">
              <input
                placeholder="MM/YY"
                className="w-1/3 rounded-lg border p-3"
                required
              />
              <input
                placeholder="CVV"
                className="w-1/3 rounded-lg border p-3"
                required
              />
              <select
                className="w-1/3 rounded-lg border p-3 bg-white"
                defaultValue="Bank Transfer"
              >
                <option>Credit/Debit Card</option>
                <option>Bank Transfer</option>
                <option>USSD</option>
              </select>
            </div>
            <button
              onClick={() => setActiveStep(3)}
              className="w-full rounded-full bg-nigerian-olive px-6 py-3 text-lg font-semibold text-white transition-colors hover:bg-opacity-90 mt-4"
            >
              Review Order
            </button>
            <button
              onClick={() => setActiveStep(1)}
              className="w-full text-sm text-gray-500 hover:text-nigerian-olive mt-2"
            >
              &larr; Back to Shipping
            </button>
          </div>
        );
      case 3:
        return (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold mb-4">Final Review</h3>
            <div className="p-4 border border-nigerian-olive/50 rounded-lg bg-light-green-50/70">
              <p className="font-semibold text-lg">
                Shipping to: John Doe, 123 Main St, Lagos.
              </p>
              <p className="text-gray-600 mt-2">
                Payment Method: **** 1234 (Mastercard)
              </p>
            </div>
            <div className="flex justify-between text-xl font-bold border-t pt-4">
              <span>Grand Total:</span>
              <span className="text-nigerian-olive">
                ₦{totalAmount.toLocaleString()}
              </span>
            </div>
            <motion.button
              whileTap={{ scale: 0.95 }}
              className="w-full inline-flex items-center justify-center rounded-full bg-nigerian-olive px-6 py-4 text-xl font-extrabold text-white shadow-xl transition-colors duration-300 hover:bg-opacity-90"
              onClick={() => alert("Payment Processed!")} // Final Action
            >
              <Lock className="mr-3 h-5 w-5" />
              Pay Now ₦{totalAmount.toLocaleString()}
            </motion.button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex justify-center">
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-4xl bg-white p-8 rounded-xl shadow-2xl shadow-nigerian-olive/10"
      >
        <div className="flex justify-between mb-8">
          {steps.map((step) => (
            <div key={step.id} className="flex flex-col items-center">
              <div
                className={`flex h-12 w-12 items-center justify-center rounded-full border-2 
                  ${
                    step.id <= activeStep
                      ? "border-nigerian-olive bg-nigerian-olive text-white"
                      : "border-gray-300 bg-white text-gray-400"
                  }`}
              >
                <step.icon className="h-6 w-6" />
              </div>
              <p
                className={`mt-2 text-sm font-medium ${
                  step.id <= activeStep
                    ? "text-nigerian-olive"
                    : "text-gray-500"
                }`}
              >
                {step.name}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-8 p-6 border-t pt-6">
          {renderStepContent(activeStep)}
        </div>
      </motion.div>
    </div>
  );
}
