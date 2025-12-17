// lib/productData.ts - Create this file for reusable product data

export interface Product {
  id: string;
  name: string;
  price: number;
  slug: string;
  imageUrl: string;
  images: string[];
  description: string;
  category: string;
  availableSizes: string[];
  isMonogrammed: boolean;
  details?: string[];
}

// Complete product database with placeholder images
export const allProducts: Product[] = [
  // KAFTANS
  {
    id: "p1",
    name: "Black Kaftan with Gold Embroidery",
    price: 75000,
    slug: "kaftan-black",
    imageUrl: "/images/black-l-kaftan.png",
    images: [
      "/images/black-l-kaftan.png",
      "/images/black-l-kaftan-2.png",
      "/images/black-l-kaftan-3.png",
    ],
    description:
      "A luxurious, custom-tailored kaftan made from premium silk-cotton blend. Features intricate gold thread embroidery and a personalized chest monogram.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Premium silk-cotton blend fabric",
      "Hand-embroidered gold thread detailing",
      "Personalized chest monogram included",
      "Perfect for weddings and traditional events",
      "Professional tailoring and fitting",
    ],
  },
  {
    id: "p2",
    name: "Navy Blue Kaftan",
    price: 80000,
    slug: "kaftan-navy-blue",
    imageUrl: "/images/blue-l-kaftan.png",
    images: [
      "/images/blue-l-kaftan.png",
      "/images/blue-l-kaftan-2.png",
      "/images/blue-l-kaftan-3.png",
    ],
    description:
      "Elegant navy blue kaftan with silver embroidery and premium fabric finish.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Royal blue premium fabric",
      "Silver thread embroidery",
      "Custom monogram available",
      "Elegant and sophisticated design",
      "Made to measure",
    ],
  },
  {
    id: "p3",
    name: "Classic Off-White Kaftan",
    price: 70000,
    slug: "kaftan-off-white-classic",
    imageUrl: "/images/off-white-kaftan.png",
    images: [
      "/images/off-white-kaftan.png",
      "/images/off-white-kaftan-2.png",
      "/images/off-white-kaftan-3.png",
    ],
    description:
      "Pure white kaftan with subtle gray accents, perfect for special occasions.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    isMonogrammed: true,
    details: [
      "Off white premium fabric",
      "Gray accent detailing",
      "Custom monogram service",
      "Ideal for ceremonies",
      "Breathable material",
    ],
  },
  {
    id: "p4",
    name: "Brown Luxury Kaftan",
    price: 85000,
    slug: "kaftan-brown",
    imageUrl: "/images/brown-kaftan.png",
    images: [
      "/images/brown-kaftan.png",
      "/images/brown-kaftan-2.png",
      "/images/brown-kaftan-3.png",
    ],
    description:
      "Rich brown kaftan with intricate beadwork and premium silk material.",
    category: "Kaftans",
    availableSizes: ["M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Rich brown color",
      "Intricate beadwork",
      "Premium silk material",
      "Luxury finish",
      "Custom tailored",
    ],
  },
  {
    id: "p5",
    name: "Navy Ceremonial Kaftan",
    price: 78000,
    slug: "kaftan-navy-ceremonial",
    imageUrl: "/images/blue-s-kaftan.png",
    images: [
      "/images/blue-s-kaftan.png",
      "/images/blue-s-kaftan.png",
      "/images/blue-s-kaftan.png",
    ],
    description: "Navy blue ceremonial kaftan with gold threading.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Navy blue premium fabric",
      "Gold thread detailing",
      "Ceremonial design",
      "Perfect for formal events",
      "Custom monogram option",
    ],
  },
  {
    id: "p6",
    name: "Black Premium Kaftan",
    price: 82000,
    slug: "kaftan-black-premium",
    imageUrl: "/images/black-s-kaftan.png",
    images: [
      "/images/black-s-kaftan.png",
      "/images/black-s-kaftan-2.png",
      "/images/black-s-kaftan-3.png",
    ],
    description: "Sophisticated black kaftan with silver accents.",
    category: "Kaftans",
    availableSizes: ["M", "L", "XL", "XXL"],
    isMonogrammed: true,
    details: [
      "Premium black fabric",
      "Silver accent details",
      "Sophisticated design",
      "Versatile styling",
      "Custom fit available",
    ],
  },

  {
    id: "p7",
    name: "Blue Ceremonial Kaftan",
    price: 78000,
    slug: "kaftan-blue-ceremonial",
    imageUrl: "/images/sky-blue-kaftan.png",
    images: [
      "/images/sky-blue-kaftan.png",
      "/images/sky-blue-kaftan-2.png",
      "/images/sky-blue-kaftan-3.png",
    ],
    description: "Blue ceremonial kaftan with gold threading.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Navy blue premium fabric",
      "Gold thread detailing",
      "Ceremonial design",
      "Perfect for formal events",
      "Custom monogram option",
    ],
  },
  {
    id: "p8",
    name: "Elegant Cream Kaftan",
    price: 78000,
    slug: "kaftan-cream-elegant",
    imageUrl: "/images/cream-kaftan.png",
    images: [
      "/images/cream-kaftan.png",
      "/images/cream-kaftan-2.png",
      "/images/cream-kaftan-3.png",
    ],
    description: "Elegant cream kaftan with gold threading.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Cream premium fabric",
      "Gold thread detailing",
      "Elegant design",
      "Perfect for formal events",
      "Custom monogram option",
    ],
  },

  // CAPS
  {
    id: "p9",
    name: "AsNo Oke Fila",
    price: 15000,
    slug: "cap-aso-oke-red",
    imageUrl: "/images/cap-1.jpeg",
    images: [
      "/images/cap-1.jpeg",
      "/images/cap-1.jpeg",
      "/images/cap-1.jpeg",
    ],
    description:
      "Traditional Nigerian cap made from authentic Aso Oke fabric in vibrant red.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Authentic Aso Oke fabric",
      "Handwoven traditional design",
      "Vibrant red color",
      "One size fits all",
      "Cultural heritage piece",
    ],
  },
  {
    id: "10",
    name: "Aso Oke Fila Cap - Gold",
    price: 18000,
    slug: "cap-aso-oke-gold",
    imageUrl: "/images/cap-2.jpeg",
    images: [
      "/images/cap-2.jpeg",
      "/images/cap-2.jpeg",
      "/images/cap-2.jpeg",
    ],
    description:
      "Premium gold Aso Oke cap with intricate threading and traditional design.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Premium gold fabric",
      "Intricate threading",
      "Traditional craftsmanship",
      "Adjustable fit",
      "Luxury finish",
    ],
  },
  {
    id: "p11",
    name: "Traditional Fila Cap - Blue",
    price: 16000,
    slug: "cap-traditional-blue",
    imageUrl: "/images/cap-3.jpeg",
    images: [
      "/images/cap-3.jpeg",
      "/images/cap-3.jpeg",
      "/images/cap-3.jpeg",
    ],
    description:
      "Handwoven traditional cap in royal blue with fine craftsmanship.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Royal blue color",
      "Handwoven design",
      "Traditional style",
      "Comfortable fit",
      "Quality craftsmanship",
    ],
  },
  {
    id: "p12",
    name: "Embroidered Fila Cap - White",
    price: 17000,
    slug: "cap-embroidered-white",
    imageUrl: "/images/cap-4.jpeg",
    images: [
      "/images/cap-4.jpeg",
      "/images/cap-4.jpeg",
      "/images/cap-4.jpeg",
    ],
    description: "White Fila cap with gold embroidery detailing.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Pure white fabric",
      "Gold embroidery",
      "Elegant design",
      "Traditional style",
      "Perfect for ceremonies",
    ],
  },
  {
    id: "p13",
    name: "Luxury Fila Cap - Burgundy",
    price: 19000,
    slug: "cap-luxury-burgundy",
    imageUrl: "/images/cap-5.jpeg",
    images: [
      "/images/cap-5.jpeg",
      "/images/cap-5.jpeg",
      "/images/cap-5.jpeg",
    ],
    description: "Burgundy Fila cap with premium finish and luxurious feel.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Burgundy premium fabric",
      "Luxury finish",
      "High-quality material",
      "Comfortable fit",
      "Statement piece",
    ],
  },
  {
    id: "p14",
    name: "Luxury Fila Cap - Burgundy",
    price: 19000,
    slug: "cap-luxury-burgundy",
    imageUrl: "/images/cap-6.jpeg",
    images: [
      "/images/cap-6.jpeg",
      "/images/cap-6.jpeg",
      "/images/cap-6.jpeg",
    ],
    description: "Burgundy Fila cap with premium finish and luxurious feel.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Burgundy premium fabric",
      "Luxury finish",
      "High-quality material",
      "Comfortable fit",
      "Statement piece",
    ],
  },

  // TROUSERS
  {
    id: "p15",
    name: "Linen Trousers - Olive Green",
    price: 35000,
    slug: "trousers-olive",
    imageUrl: "https://placehold.co/600x800/4a5d3f/white?text=Olive+Trousers",
    images: [
      "https://placehold.co/600x800/4a5d3f/white?text=Olive+Front",
      "https://placehold.co/600x800/4a5d3f/white?text=Olive+Side",
      "https://placehold.co/600x800/4a5d3f/white?text=Olive+Back",
    ],
    description:
      "Comfortable linen trousers in olive green, perfect for any occasion.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38"],
    isMonogrammed: false,
    details: [
      "100% linen fabric",
      "Olive green color",
      "Comfortable fit",
      "Versatile styling",
      "Perfect for casual and formal wear",
    ],
  },
  {
    id: "p16",
    name: "Premium Black Trousers",
    price: 40000,
    slug: "trousers-black-premium",
    imageUrl: "https://placehold.co/600x800/000000/white?text=Black+Trousers",
    images: [
      "https://placehold.co/600x800/000000/white?text=Black+Front",
      "https://placehold.co/600x800/000000/white?text=Black+Side",
      "https://placehold.co/600x800/000000/white?text=Black+Back",
    ],
    description: "Classic black trousers with modern fit and premium fabric.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38", "40"],
    isMonogrammed: false,
    details: [
      "Premium black fabric",
      "Modern slim fit",
      "Versatile styling",
      "Perfect tailoring",
      "All-occasion wear",
    ],
  },
  {
    id: "p17",
    name: "Beige Casual Trousers",
    price: 38000,
    slug: "trousers-beige-casual",
    imageUrl: "https://placehold.co/600x800/d4a574/white?text=Beige+Trousers",
    images: [
      "https://placehold.co/600x800/d4a574/white?text=Beige+Front",
      "https://placehold.co/600x800/d4a574/white?text=Beige+Side",
      "https://placehold.co/600x800/d4a574/white?text=Beige+Back",
    ],
    description:
      "Lightweight beige trousers perfect for casual and formal wear.",
    category: "Trousers",
    availableSizes: ["32", "34", "36", "38"],
    isMonogrammed: false,
    details: [
      "Lightweight fabric",
      "Beige neutral color",
      "Casual comfort",
      "Easy to style",
      "Breathable material",
    ],
  },
  {
    id: "p18",
    name: "Navy Formal Trousers",
    price: 42000,
    slug: "trousers-navy-formal",
    imageUrl: "https://placehold.co/600x800/1e3a5f/white?text=Navy+Trousers",
    images: [
      "https://placehold.co/600x800/1e3a5f/white?text=Navy+Front",
      "https://placehold.co/600x800/1e3a5f/white?text=Navy+Side",
      "https://placehold.co/600x800/1e3a5f/white?text=Navy+Back",
    ],
    description:
      "Navy formal trousers with perfect tailoring and premium finish.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36", "38"],
    isMonogrammed: false,
    details: [
      "Navy blue formal fabric",
      "Perfect tailoring",
      "Professional look",
      "Premium finish",
      "Office appropriate",
    ],
  },
  {
    id: "p19",
    name: "Grey Slim Fit Trousers",
    price: 39000,
    slug: "trousers-grey-slim",
    imageUrl: "https://placehold.co/600x800/6b7280/white?text=Grey+Trousers",
    images: [
      "https://placehold.co/600x800/6b7280/white?text=Grey+Front",
      "https://placehold.co/600x800/6b7280/white?text=Grey+Side",
      "https://placehold.co/600x800/6b7280/white?text=Grey+Back",
    ],
    description: "Modern slim fit trousers in charcoal grey.",
    category: "Trousers",
    availableSizes: ["30", "32", "34", "36"],
    isMonogrammed: false,
    details: [
      "Charcoal grey color",
      "Slim fit design",
      "Modern style",
      "Premium fabric",
      "Versatile wear",
    ],
  },

  // READY-MADE WEARS
  {
    id: "p20",
    name: "Navy Blue Senator Wear",
    price: 55000,
    slug: "readymade-senator-navy",
    imageUrl: "https://placehold.co/600x800/1e3a5f/white?text=Navy+Senator",
    images: [
      "https://placehold.co/600x800/1e3a5f/white?text=Senator+Front",
      "https://placehold.co/600x800/1e3a5f/white?text=Senator+Side",
      "https://placehold.co/600x800/1e3a5f/white?text=Senator+Back",
    ],
    description: "Complete navy blue senator outfit with matching trousers.",
    category: "Ready-Made Wears",
    availableSizes: ["M", "L", "XL", "XXL"],
    isMonogrammed: false,
    details: [
      "Complete senator outfit",
      "Navy blue color",
      "Matching trousers included",
      "Traditional style",
      "Ready to wear",
    ],
  },
  {
    id: "p21",
    name: "White Agbada Set",
    price: 95000,
    slug: "readymade-agbada-white",
    imageUrl: "https://placehold.co/600x800/ffffff/4a5d3f?text=White+Agbada",
    images: [
      "https://placehold.co/600x800/ffffff/4a5d3f?text=Agbada+Front",
      "https://placehold.co/600x800/ffffff/4a5d3f?text=Agbada+Side",
      "https://placehold.co/600x800/ffffff/4a5d3f?text=Agbada+Back",
    ],
    description:
      "Complete white Agbada set with intricate embroidery and cap included.",
    category: "Ready-Made Wears",
    availableSizes: ["L", "XL", "XXL"],
    isMonogrammed: true,
    details: [
      "Complete Agbada set",
      "Pure white fabric",
      "Intricate embroidery",
      "Cap included",
      "Premium quality",
    ],
  },
  {
    id: "p22",
    name: "Royal Blue Senator Set",
    price: 58000,
    slug: "readymade-senator-royal",
    imageUrl: "https://placehold.co/600x800/1e3a8a/white?text=Royal+Senator",
    images: [
      "https://placehold.co/600x800/1e3a8a/white?text=Royal+Front",
      "https://placehold.co/600x800/1e3a8a/white?text=Royal+Side",
      "https://placehold.co/600x800/1e3a8a/white?text=Royal+Back",
    ],
    description: "Royal blue senator wear with matching cap.",
    category: "Ready-Made Wears",
    availableSizes: ["M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Royal blue color",
      "Complete senator set",
      "Matching cap",
      "Traditional design",
      "Premium fabric",
    ],
  },
  {
    id: "p23",
    name: "Burgundy Agbada Complete",
    price: 98000,
    slug: "readymade-agbada-burgundy",
    imageUrl: "https://placehold.co/600x800/7f1d1d/white?text=Burgundy+Agbada",
    images: [
      "https://placehold.co/600x800/7f1d1d/white?text=Burgundy+Front",
      "https://placehold.co/600x800/7f1d1d/white?text=Burgundy+Side",
      "https://placehold.co/600x800/7f1d1d/white?text=Burgundy+Back",
    ],
    description: "Luxury burgundy Agbada with full accessories.",
    category: "Ready-Made Wears",
    availableSizes: ["L", "XL", "XXL"],
    isMonogrammed: true,
    details: [
      "Luxury burgundy fabric",
      "Complete Agbada set",
      "Full accessories",
      "Premium embroidery",
      "Statement piece",
    ],
  },
];

// Helper function to get products by category
export const fetchProductsByCollection = (collectionSlug: string): Product[] => {
  const categoryMap: { [key: string]: string } = {
    kaftans: "Kaftans",
    caps: "Caps",
    trousers: "Trousers",
    readymade: "Ready-Made Wears",
    all: "",
  };

  const targetCategory = categoryMap[collectionSlug.toLowerCase()];

  if (!targetCategory) return allProducts;

  return allProducts.filter((p) => p.category === targetCategory);
};

// Helper function to get product by slug
export const getProductBySlug = (slug: string): Product => {
  const product = allProducts.find((p) => p.slug === slug);
  return product || allProducts[0]; // Return first product as fallback
};