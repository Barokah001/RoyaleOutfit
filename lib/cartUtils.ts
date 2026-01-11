// lib/cartUtils.ts - Helper functions for cart management

export interface CartItem {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size: string;
  quantity: number;
  slug: string;
}

export const addToCart = (
  product: {
    id: string;
    name: string;
    price: number;
    imageUrl: string;
    slug: string;
  },
  size: string,
  quantity: number = 1
) => {
  // Get existing cart from localStorage
  const existingCart = localStorage.getItem("cart");
  const cart: CartItem[] = existingCart ? JSON.parse(existingCart) : [];

  // Create unique ID for this specific product + size combination
  const itemId = `${product.id}-${size}`;

  // Check if item already exists in cart
  const existingItemIndex = cart.findIndex((item) => item.id === itemId);

  if (existingItemIndex > -1) {
    // Item exists, update quantity
    cart[existingItemIndex].quantity += quantity;
  } else {
    // New item, add to cart
    cart.push({
      id: itemId,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      size: size,
      quantity: quantity,
      slug: product.slug,
    });
  }

  // Save updated cart to localStorage
  localStorage.setItem("cart", JSON.stringify(cart));
  
  // Trigger cart update event
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cartUpdated"));
  }

  return cart;
};

export const getCartCount = (): number => {
  if (typeof window === "undefined") return 0;
  
  const existingCart = localStorage.getItem("cart");
  if (!existingCart) return 0;

  const cart: CartItem[] = JSON.parse(existingCart);
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const clearCart = () => {
  if (typeof window === "undefined") return;
  
  localStorage.removeItem("cart");
  
  // Trigger cart update event
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("cartUpdated"));
  }
};

export const getCart = (): CartItem[] => {
  if (typeof window === "undefined") return [];
  
  const existingCart = localStorage.getItem("cart");
  return existingCart ? JSON.parse(existingCart) : [];
};

export const removeFromCart = (itemId: string) => {
  if (typeof window === "undefined") return;
  
  const cart = getCart();
  const updatedCart = cart.filter((item) => item.id !== itemId);
  localStorage.setItem("cart", JSON.stringify(updatedCart));
  
  // Trigger cart update event
  window.dispatchEvent(new Event("cartUpdated"));
};

export const updateQuantity = (itemId: string, newQuantity: number) => {
  if (typeof window === "undefined") return;
  
  const cart = getCart();
  const itemIndex = cart.findIndex((item) => item.id === itemId);
  
  if (itemIndex > -1) {
    if (newQuantity <= 0) {
      // Remove item if quantity is 0 or less
      cart.splice(itemIndex, 1);
    } else {
      cart[itemIndex].quantity = newQuantity;
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    
    // Trigger cart update event
    window.dispatchEvent(new Event("cartUpdated"));
  }
};