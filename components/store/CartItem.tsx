// components/store/CartItem.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, X } from "lucide-react";

interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  slug: string;
  selectedSize: string;
  quantity: number;
}

export const CartItemComponent: React.FC<{ item: CartItem }> = ({ item }) => {
  // --- Placeholder Functions for State Management ---
  const handleRemove = () => {
    console.log(`Removing item: ${item.name}`);
  };

  const handleUpdateQuantity = (newQuantity: number) => {
    console.log(`Updating ${item.name} quantity to: ${newQuantity}`);
  };

  const totalPrice = item.price * item.quantity;

  return (
    <div className="flex items-center border-b border-brand-brown-200 py-4 last:border-b-0 bg-white p-4 rounded-lg shadow-brown hover:shadow-brown-md transition-shadow">
      {/* 1. Image and Product Info */}
      <div className="flex flex-1 items-center space-x-4">
        <Link href={`/product/${item.slug}`} className="flex-shrink-0">
          <div className="relative h-20 w-20 overflow-hidden rounded-lg border border-brand-brown-300">
            <Image
              src={item.imageUrl}
              alt={item.name}
              fill
              sizes="80px"
              className="object-cover"
              unoptimized
            />
          </div>
        </Link>

        <div>
          <Link
            href={`/product/${item.slug}`}
            className="text-lg font-semibold text-brand-brown-800 hover:text-primary transition-colors"
          >
            {item.name}
          </Link>
          <p className="text-sm text-brand-brown-500 mt-1">
            Size: {item.selectedSize}
          </p>
          <p className="text-sm font-medium text-primary mt-1">
            ₦{item.price.toLocaleString()} each
          </p>
        </div>
      </div>

      {/* 2. Quantity Controls */}
      <div className="hidden md:block w-32 flex-shrink-0">
        <div className="flex items-center border border-brand-brown-300 rounded-full p-1 max-w-[120px] mx-auto">
          <button
            onClick={() => handleUpdateQuantity(item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="p-1 text-brand-brown-600 hover:text-primary disabled:opacity-50 transition-colors"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-8 text-center text-base font-medium text-brand-brown-800">
            {item.quantity}
          </span>
          <button
            onClick={() => handleUpdateQuantity(item.quantity + 1)}
            className="p-1 text-brand-brown-600 hover:text-primary transition-colors"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* 3. Total Price and Remove Button */}
      <div className="flex w-32 flex-shrink-0 flex-col items-end justify-center space-y-2">
        <p className="text-lg font-bold text-brand-brown-800">
          ₦{totalPrice.toLocaleString()}
        </p>
        <button
          onClick={handleRemove}
          className="p-1 text-red-500 hover:text-red-700 transition-colors"
          title="Remove item"
        >
          <X className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
};