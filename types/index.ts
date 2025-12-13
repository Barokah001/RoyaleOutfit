// types/index.ts
export interface Product {
  id: string;
  name: string;
  price: number;
  slug: string;
  imageUrl: string;
  description: string;
  category: string;
  isMonogrammed: boolean;
  availableSizes: string[];
}

export interface CartItem extends Product {
  quantity: number;
  selectedSize: string;
}
/**
 * Defines the structure for a collection (category page) banner information.
 */
export interface Collection {
  slug: string;
  name: string;
  description: string;
  heroImage: string;
}


export interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  totalOrders: number;
  lastActive: string;
}


export interface Order {
  id: number;
  customer: string;
  total: number;
  date: string;
  status: "Processing" | "Shipped" | "Delivered" | "Cancelled";
}
