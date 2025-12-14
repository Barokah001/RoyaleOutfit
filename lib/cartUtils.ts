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

  return cart;
};

export const getCartCount = (): number => {
  const existingCart = localStorage.getItem("cart");
  if (!existingCart) return 0;

  const cart: CartItem[] = JSON.parse(existingCart);
  return cart.reduce((total, item) => total + item.quantity, 0);
};

export const clearCart = () => {
  localStorage.removeItem("cart");
};
