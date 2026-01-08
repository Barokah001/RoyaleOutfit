// lib/productData.ts - Reorganized and Clean

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

// ====================================================================
// KAFTANS - Traditional Single-Piece Garments
// ====================================================================
const kaftans: Product[] = [
  {
    id: "k1",
    name: "Black Kaftan with Gold Embroidery",
    price: 75000,
    slug: "kaftan-black",
    imageUrl: "/images/black-l-kaftan.png",
    images: ["/images/black-l-kaftan.png", "/images/black-l-kaftan-2.png", "/images/black-l-kaftan-3.png"],
    description: "A luxurious, custom-tailored kaftan made from premium silk-cotton blend. Features intricate gold thread embroidery and a personalized chest monogram.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Premium silk-cotton blend fabric",
      "Hand-embroidered gold thread detailing",
      "Personalized chest monogram included",
      "Perfect for weddings and traditional events",
      "Professional tailoring and fitting"
    ]
  },
  {
    id: "k2",
    name: "Navy Blue Kaftan",
    price: 80000,
    slug: "kaftan-navy-blue",
    imageUrl: "/images/blue-l-kaftan.png",
    images: ["/images/blue-l-kaftan.png", "/images/blue-l-kaftan-2.png", "/images/blue-l-kaftan-3.png"],
    description: "Elegant navy blue kaftan with silver embroidery and premium fabric finish.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Royal blue premium fabric",
      "Silver thread embroidery",
      "Custom monogram available",
      "Elegant and sophisticated design",
      "Made to measure"
    ]
  },
  {
    id: "k3",
    name: "Classic Off-White Kaftan",
    price: 70000,
    slug: "kaftan-off-white-classic",
    imageUrl: "/images/off-white-kaftan.png",
    images: ["/images/off-white-kaftan.png", "/images/off-white-kaftan-2.png", "/images/off-white-kaftan-3.png"],
    description: "Pure white kaftan with subtle gray accents, perfect for special occasions.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL", "XXL"],
    isMonogrammed: true,
    details: [
      "Off white premium fabric",
      "Gray accent detailing",
      "Custom monogram service",
      "Ideal for ceremonies",
      "Breathable material"
    ]
  },
  {
    id: "k4",
    name: "Brown Luxury Kaftan",
    price: 85000,
    slug: "kaftan-brown",
    imageUrl: "/images/brown-kaftan.png",
    images: ["/images/brown-kaftan.png", "/images/brown-kaftan-2.png", "/images/brown-kaftan-3.png"],
    description: "Rich brown kaftan with intricate beadwork and premium silk material.",
    category: "Kaftans",
    availableSizes: ["M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Rich brown color",
      "Intricate beadwork",
      "Premium silk material",
      "Luxury finish",
      "Custom tailored"
    ]
  },
  {
    id: "k5",
    name: "Navy Ceremonial Kaftan",
    price: 78000,
    slug: "kaftan-navy-ceremonial",
    imageUrl: "/images/blue-s-kaftan.png",
    images: ["/images/blue-s-kaftan.png", "/images/blue-s-kaftan.png", "/images/blue-s-kaftan.png"],
    description: "Navy blue ceremonial kaftan with gold threading.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Navy blue premium fabric",
      "Gold thread detailing",
      "Ceremonial design",
      "Perfect for formal events",
      "Custom monogram option"
    ]
  },
  {
    id: "k6",
    name: "Black Premium Kaftan",
    price: 82000,
    slug: "kaftan-black-premium",
    imageUrl: "/images/black-s-kaftan.png",
    images: ["/images/black-s-kaftan.png", "/images/black-s-kaftan-2.png", "/images/black-s-kaftan-3.png"],
    description: "Sophisticated black kaftan with silver accents.",
    category: "Kaftans",
    availableSizes: ["M", "L", "XL", "XXL"],
    isMonogrammed: true,
    details: [
      "Premium black fabric",
      "Silver accent details",
      "Sophisticated design",
      "Versatile styling",
      "Custom fit available"
    ]
  },
  {
    id: "k7",
    name: "Sky Blue Ceremonial Kaftan",
    price: 78000,
    slug: "kaftan-sky-blue-ceremonial",
    imageUrl: "/images/sky-blue-kaftan.png",
    images: ["/images/sky-blue-kaftan.png", "/images/sky-blue-kaftan-2.png", "/images/sky-blue-kaftan-3.png"],
    description: "Sky blue ceremonial kaftan with gold threading.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Sky blue premium fabric",
      "Gold thread detailing",
      "Ceremonial design",
      "Perfect for formal events",
      "Custom monogram option"
    ]
  },
  {
    id: "k8",
    name: "Elegant Cream Kaftan",
    price: 78000,
    slug: "kaftan-cream-elegant",
    imageUrl: "/images/cream-kaftan.png",
    images: ["/images/cream-kaftan.png", "/images/cream-kaftan-2.png", "/images/cream-kaftan-3.png"],
    description: "Elegant cream kaftan with gold threading.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Cream premium fabric",
      "Gold thread detailing",
      "Elegant design",
      "Perfect for formal events",
      "Custom monogram option"
    ]
  },
  {
    id: "k9",
    name: "Classic Arctic White Kaftan",
    price: 75000,
    slug: "kaftan-arctic-white",
    imageUrl: "/images/white-plain-f.jpg",
    images: ["/images/white-plain-f.jpg", "/images/white-plain-s.png", "/images/white-plain-b.png"],
    description: "A clean, minimalist white kaftan featuring a hidden placket and a sleek horizontal pocket accent.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "High-quality polished cotton",
      "Hidden button placket for a seamless finish",
      "Slim-fit silhouette",
      "Ideal for Friday prayers or formal gatherings"
    ]
  },
  {
    id: "k10",
    name: "Stone Grey Minimalist Kaftan",
    price: 75000,
    slug: "kaftan-stone-grey",
    imageUrl: "/images/rose-gold-f.jpg",
    images: ["/images/rose-gold-f.jpg", "/images/rose-gold-s.png", "/images/rose-gold-b.png"],
    description: "A sophisticated stone grey kaftan with unique piping detail on the pocket and collar.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Premium soft-touch fabric",
      "Contrast piping on pocket and collar",
      "Mid-length sleeves",
      "Versatile neutral color"
    ]
  },
  {
    id: "k11",
    name: "Navy Blue Peacock Feather Kaftan",
    price: 75000,
    slug: "kaftan-navy-peacock",
    imageUrl: "/images/navy-bird-f.jpg",
    images: ["/images/navy-bird-f.jpg", "/images/navy-bird-s.png", "/images/navy-bird-b.png"],
    description: "Elegant navy blue kaftan distinguished by a colorful embroidered peacock feather on the chest pocket.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Fine navy wool-blend fabric",
      "Artistic feather embroidery",
      "Hidden button closure",
      "Statement piece for events"
    ]
  },
  {
    id: "k12",
    name: "Burgundy Geometric Pattern Kaftan",
    price: 85000,
    slug: "kaftan-burgundy-geometric",
    imageUrl: "/images/dark-burgundy-f.jpg",
    images: ["/images/dark-burgundy-f.jpg", "/images/dark-burgundy-s.png", "/images/dark-burgundy-b.png"],
    description: "A rich burgundy kaftan featuring intricate geometric embroidery along the placket and chest pocket.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Lustrous burgundy fabric",
      "Detailed geometric stitch work",
      "Custom pocket embroidery",
      "Perfect for traditional weddings"
    ]
  },
  {
    id: "k13",
    name: "White Zenith Geometric Kaftan",
    price: 85000,
    slug: "kaftan-white-zenith",
    imageUrl: "/images/white-embroidery-f.png",
    images: ["/images/white-embroidery-f.png", "/images/white-embroidery-s.png", "/images/white-embroidery-b.png"],
    description: "White kaftan showcasing a sophisticated black and gold geometric border around the pocket and down the center.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Pure cotton base",
      "Contrast geometric embroidery",
      "Modern minimalist aesthetic",
      "Includes matching pocket square detail"
    ]
  },
  {
    id: "k14",
    name: "Sky Blue Motif Kaftan",
    price: 80000,
    slug: "kaftan-sky-blue-motif",
    imageUrl: "/images/light-blue-embroidered-f.jpg",
    images: ["/images/light-blue-embroidered-f.jpg", "/images/light-blue-embroidered-s.png", "/images/light-blue-embroidered-b.png"],
    description: "A vibrant sky blue kaftan with traditional motifs embroidered on the sleeves and hemline.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Lightweight summer fabric",
      "Sleeve and hem embroidery",
      "Mandarin collar with embroidery",
      "Festive and bright design"
    ]
  },
  {
    id: "k15",
    name: "Crimson Red Signature Kaftan",
    price: 80000,
    slug: "kaftan-crimson-red",
    imageUrl: "/images/burgundy-f.jpg",
    images: ["/images/burgundy-f.jpg", "/images/burgundy-s.png", "/images/burgundy-b.png"],
    description: "Bold crimson kaftan with gold-threaded geometric embroidery along the placket and pocket.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Vibrant crimson dye",
      "Precision gold stitching",
      "Classic chest pocket",
      "High-impact evening wear"
    ]
  },
  {
    id: "k16",
    name: "Midnight Blue Linear Kaftan",
    price: 75000,
    slug: "kaftan-midnight-linear",
    imageUrl: "/images/navy-blue-f.jpg",
    images: ["/images/navy-blue-f.jpg", "/images/navy-blue-s.png", "/images/navy-blue-b.png"],
    description: "Deep navy kaftan featuring modern linear embroidery in a light blue thread across the chest.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Matte navy finish",
      "Linear embroidery accents",
      "Contemporary square pocket",
      "Subtle yet stylish"
    ]
  },
  {
    id: "k17",
    name: "Off-White Button-Down Kaftan",
    price: 70000,
    slug: "kaftan-off-white-button",
    imageUrl: "/images/white-button-f.jpg",
    images: ["/images/white-button-f.jpg", "/images/white-button-s.png", "/images/white-button-b.png"],
    description: "Classic off-white kaftan with visible gold-toned buttons and a crisp collar design.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Breathable cotton blend",
      "Gold-tone button accents",
      "Sharp tailored collar",
      "Timeless everyday elegance"
    ]
  },
  {
    id: "k18",
    name: "Charcoal Pinstripe Kaftan",
    price: 75000,
    slug: "kaftan-charcoal-pinstripe",
    imageUrl: "/images/gray-stripe-f.jpg",
    images: ["/images/gray-stripe-f.jpg", "/images/gray-stripe-s.png", "/images/gray-stripe-b.png"],
    description: "Sophisticated charcoal grey kaftan featuring subtle vertical pinstripes and a textured pocket.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Executive pinstripe fabric",
      "Long sleeve design",
      "Angular pocket stitching",
      "Professional corporate look"
    ]
  },
  {
    id: "k19",
    name: "Teal Modern Patch Kaftan",
    price: 75000,
    slug: "kaftan-teal-patch",
    imageUrl: "/images/torqoise-blue-f.jpg",
    images: ["/images/torqoise-blue-f.jpg", "/images/torqoise-blue-s.png", "/images/torqoise-blue-b.png"],
    description: "A unique teal kaftan featuring a contrasting pocket flap with tan and white geometric detailing.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Rich teal colorway",
      "Multi-color pocket accent",
      "Smooth tailored finish",
      "Modern artistic twist"
    ]
  },
  {
    id: "k20",
    name: "Onyx Gold Floral Kaftan",
    price: 85000,
    slug: "kaftan-onyx-gold",
    imageUrl: "/images/black-embroidered-f.jpg",
    images: ["/images/black-embroidered-f.jpg", "/images/black-embroidered-s.png", "/images/black-embroidered-b.png"],
    description: "Black kaftan featuring a luxurious gold floral embroidery on the pocket and down the center line.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Deep black wool fabric",
      "Intricate floral gold embroidery",
      "Matching gold button accents",
      "Premium luxury occasion wear"
    ]
  },
  {
    id: "k21",
    name: "White Grommet Detail Kaftan",
    price: 75000,
    slug: "kaftan-white-grommet",
    imageUrl: "/images/white-stoned-f.jpg",
    images: ["/images/white-stoned-f.jpg", "/images/white-stoned-s.png", "/images/white-stoned-b.png"],
    description: "A contemporary white kaftan featuring silver grommet (eyelet) detailing along the sleeve cuffs.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Stiff white cotton fabric",
      "Metallic eyelet sleeve finish",
      "Seamless chest design",
      "Unique modern hardware"
    ]
  },
  {
    id: "k22",
    name: "Azure Blue Block-Fold Kaftan",
    price: 75000,
    slug: "kaftan-azure-block",
    imageUrl: "/images/light-blue-f.jpg",
    images: ["/images/light-blue-f.jpg", "/images/light-blue-s.png", "/images/light-blue-b.png"],
    description: "Azure blue kaftan with a creative navy and black overlapping block design on the pocket.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: false,
    details: [
      "Bright azure blue hue",
      "3D block-style pocket detail",
      "Relaxed sleeve fit",
      "Youthful and trendy design"
    ]
  },
  {
    id: "k23",
    name: "Black Abstract Swirl Kaftan",
    price: 80000,
    slug: "kaftan-black-swirl",
    imageUrl: "/images/black-draw-f.jpg",
    images: ["/images/black-draw-f.jpg", "/images/black-draw-s.png", "/images/black-draw-b.png"],
    description: "A striking black kaftan featuring a bold white abstract swirl design on the center chest.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Jet black premium cotton",
      "High-contrast white applique",
      "Art-gallery inspired aesthetic",
      "Slim-cut design"
    ]
  },
  {
    id: "k24",
    name: "Tan Diamond-Stitch Kaftan",
    price: 75000,
    slug: "kaftan-tan-diamond",
    imageUrl: "/images/brown-f.jpg",
    images: ["/images/brown-f.jpg", "/images/brown-s.png", "/images/brown-b.png"],
    description: "Earth-toned tan kaftan with intricate diamond-shaped embroidery along the placket and pocket.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Earth-tone tan fabric",
      "Diamond pattern embroidery",
      "Traditional button closure",
      "Subtle and masculine"
    ]
  },
  {
    id: "k25",
    name: "Royal Purple Wave Kaftan",
    price: 85000,
    slug: "kaftan-purple-wave",
    imageUrl: "/images/purple-f.jpg",
    images: ["/images/purple-f.jpg", "/images/purple-s.png", "/images/purple-b.png"],
    description: "A regal purple kaftan with a white and purple wavy pattern on the pocket and center placket.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Rich royal purple fabric",
      "Graphic wave pattern accents",
      "Vibrant contrast detailing",
      "Celebratory and standout look"
    ]
  },
  {
    id: "k26",
    name: "Burgundy Maze Embroidery Kaftan",
    price: 85000,
    slug: "kaftan-burgundy-maze",
    imageUrl: "/images/dark-burgundy-f.png",
    images: ["/images/dark-burgundy-f.png", "/images/dark-burgundy-s.png", "/images/dark-burgundy-b.png"],
    description: "This rich burgundy kaftan showcases exceptional craftsmanship with a 'maze' style geometric pattern.",
    category: "Kaftans",
    availableSizes: ["S", "M", "L", "XL"],
    isMonogrammed: true,
    details: [
      "Deep burgundy premium wool-blend fabric",
      "Intricate multi-colored geometric pocket embroidery",
      "Reinforced 'V' neck finish for durability",
      "Bespoke tailoring for a sharp, executive fit"
    ]
  }
];

// ====================================================================
// AGBADA SETS - Complete 3-Piece Traditional Outfits
// ====================================================================
const agbadaSets: Product[] = [
  {
    id: "a1",
    name: "Sky Blue Heritage Agbada Set",
    price: 150000,
    slug: "agbada-sky-blue-heritage",
    imageUrl: "/images/agbada-set-f.jpg",
    images: ["/images/agbada-f.png", "/images/agbada-b.png", "/images/agbada-top.png"],
    description: "A majestic three-piece Agbada ensemble in a serene sky blue. Features grand outer robe with geometric star embroidery, matching long-sleeve inner kaftan, and traditional multi-tonal striped Fila.",
    category: "Agbada Sets",
    availableSizes: ["M", "L", "XL", "XXL"],
    isMonogrammed: true,
    details: [
      "Complete 3-piece set: Outer Agbada, Inner Kaftan, and Fila",
      "High-density navy blue geometric embroidery",
      "Premium polished cotton with a soft sheen",
      "Coordinating striped Aso-Oke style cap included",
      "Designed for high-profile traditional ceremonies"
    ]
  }
];

// ====================================================================
// CAPS - Traditional Headwear
// ====================================================================
const caps: Product[] = [
  {
    id: "c1",
    name: "Aso Oke Fila Cap - Red",
    price: 15000,
    slug: "cap-aso-oke-red",
    imageUrl: "/images/cap-1.jpeg",
    images: ["/images/cap-1.jpeg", "/images/cap-1.jpeg", "/images/cap-1.jpeg"],
    description: "Traditional Nigerian cap made from authentic Aso Oke fabric in vibrant red.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Authentic Aso Oke fabric",
      "Handwoven traditional design",
      "Vibrant red color",
      "One size fits all",
      "Cultural heritage piece"
    ]
  },
  {
    id: "c2",
    name: "Aso Oke Fila Cap - Gold",
    price: 18000,
    slug: "cap-aso-oke-gold",
    imageUrl: "/images/cap-2.jpeg",
    images: ["/images/cap-2.jpeg", "/images/cap-2.jpeg", "/images/cap-2.jpeg"],
    description: "Premium gold Aso Oke cap with intricate threading and traditional design.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Premium gold fabric",
      "Intricate threading",
      "Traditional craftsmanship",
      "Adjustable fit",
      "Luxury finish"
    ]
  },
  {
    id: "c3",
    name: "Traditional Fila Cap - Blue",
    price: 16000,
    slug: "cap-traditional-blue",
    imageUrl: "/images/cap-3.jpeg",
    images: ["/images/cap-3.jpeg", "/images/cap-3.jpeg", "/images/cap-3.jpeg"],
    description: "Handwoven traditional cap in royal blue with fine craftsmanship.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Royal blue color",
      "Handwoven design",
      "Traditional style",
      "Comfortable fit",
      "Quality craftsmanship"
    ]
  },
  {
    id: "c4",
    name: "Embroidered Fila Cap - White",
    price: 17000,
    slug: "cap-embroidered-white",
    imageUrl: "/images/cap-4.jpeg",
    images: ["/images/cap-4.jpeg", "/images/cap-4.jpeg", "/images/cap-4.jpeg"],
    description: "White Fila cap with gold embroidery detailing.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Pure white fabric",
      "Gold embroidery",
      "Elegant design",
      "Traditional style",
      "Perfect for ceremonies"
    ]
  },
  {
    id: "c5",
    name: "Luxury Fila Cap - Burgundy",
    price: 19000,
    slug: "cap-luxury-burgundy",
    imageUrl: "/images/cap-5.jpeg",
    images: ["/images/cap-5.jpeg", "/images/cap-5.jpeg", "/images/cap-5.jpeg"],
    description: "Burgundy Fila cap with premium finish and luxurious feel.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Burgundy premium fabric",
      "Luxury finish",
      "High-quality material",
      "Comfortable fit",
      "Statement piece"
    ]
  },
  {
    id: "c6",
    name: "Premium Fila Cap - Navy",
    price: 19000,
    slug: "cap-premium-navy",
    imageUrl: "/images/cap-6.jpeg",
    images: ["/images/cap-6.jpeg", "/images/cap-6.jpeg", "/images/cap-6.jpeg"],
    description: "Navy Fila cap with premium finish and elegant design.",
    category: "Caps",
    availableSizes: ["One Size"],
    isMonogrammed: false,
    details: [
      "Navy premium fabric",
      "Luxury finish",
      "High-quality material",
      "Comfortable fit",
      "Versatile style"
    ]
  }
];

// ====================================================================
// FABRICS - Premium Materials (Sold by Yards)
// ====================================================================
const fabrics: Product[] = [
  {
    id: "f1",
    name: "Kando Italian Forest Green",
    price: 18000,
    slug: "fabric-kando-forest-green",
    imageUrl: "/images/forest-green-fabric.jpg",
    images: ["/images/forest-green-fabric.jpg", "/images/forest-green-fabric.jpg", "/images/forest-green-fabric.jpg"],
    description: "An exclusive Italian fabric from the Kando 'Collection for Gentleman'. This deep forest green offers a sophisticated, matte finish for luxury traditional wear.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Authentic Italian textile craftsmanship",
      "Rich Forest Green pigment",
      "Part of the Kando Gentleman series",
      "Ideal for structured Agbada or Kaftans"
    ]
  },
  {
    id: "f2",
    name: "Kando Italian Midnight Navy",
    price: 18000,
    slug: "fabric-kando-midnight-navy",
    imageUrl: "/images/midnight-navy-fabric.jpg",
    images: ["/images/midnight-navy-fabric.jpg", "/images/midnight-navy-fabric.jpg", "/images/midnight-navy-fabric.jpg"],
    description: "A dark, professional midnight navy from the exclusive Kando Italian range.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Deep Midnight Navy hue",
      "Exclusive Italian import quality",
      "Smooth texture with a premium drape",
      "Non-fading executive grade material"
    ]
  },
  {
    id: "f3",
    name: "Verona Espresso Brown",
    price: 15000,
    slug: "fabric-verona-espresso",
    imageUrl: "/images/espresso-brown-fabric.jpg",
    images: [
      "/images/espresso-brown-fabric.jpg",
      "/images/espresso-brown-fabric.jpg",
      "/images/espresso-brown-fabric.jpg",
    ],
    description:
      "A 160cm wide non-fading fabric from the Verona collection. This espresso brown provides a warm, masculine tone for everyday elegance.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "160cm non-fading textile technology",
      "Rich Espresso Brown shade",
      "Durable AMZ brand quality",
      "Excellent for custom embroidery application",
    ],
  },
  {
    id: "f4",
    name: "Verona Dove Grey",
    price: 15000,
    slug: "fabric-verona-dove-grey",
    imageUrl: "/images/dove-grey-fabric.jpg",
    images: [
      "/images/dove-grey-fabric.jpg",
      "/images/dove-grey-fabric.jpg",
      "/images/dove-grey-fabric.jpg",
    ],
    description:
      "A clean and modern Dove Grey fabric from the Verona line. Perfect for minimalist designs and daytime ceremonies.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Subtle Dove Grey matte finish",
      "160cm wide for full Agbada cuts",
      "Non-fading AMZ certified material",
      "Soft skin-feel for all-day comfort",
    ],
  },
  {
    id: "f5",
    name: "Kando Italian Dark Cocoa",
    price: 18000,
    slug: "fabric-kando-dark-cocoa",
    imageUrl: "https://example.com/f5.jpg",
    images: [
      "https://example.com/f5-texture.jpg",
      "https://example.com/f5-roll.jpg",
    ],
    description:
      "A high-end dark cocoa brown from the Italian Kando collection. This fabric is favored for its executive presence and subtle sheen.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Premium Italian import",
      "Deep Dark Cocoa pigment",
      "Part of the exclusive Gentleman series",
      "Superior wrinkle resistance",
    ],
  },
  {
    id: "f6",
    name: "Kando Italian Steel Blue",
    price: 18000,
    slug: "fabric-kando-steel-blue",
    imageUrl: "/images/steel-blue-fabric.jpg",
    images: [
      "/images/steel-blue-fabric.jpg",
      "/images/steel-blue-fabric.jpg",
      "/images/steel-blue-fabric.jpg",
    ],
    description:
      "A unique steel blue shade from the Kando collection, offering a cooler, professional alternative to standard navy.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Distinctive Steel Blue colorway",
      "Exclusive Italian Gentleman range",
      "Lustrous finish for evening wear",
      "Premium drape and weight",
    ],
  },
  {
    id: "f7",
    name: "Verona Pure White",
    price: 15000,
    slug: "fabric-verona-pure-white",
    imageUrl: "/images/pure-white-fabric.jpg",
    images: [
      "/images/pure-white-fabric.jpg",
      "/images/pure-white-fabric.jpg",
      "/images/pure-white-fabric.jpg",
    ],
    description:
      "The quintessential white fabric for traditional wear. This Verona 160cm material is guaranteed to stay crisp and bright.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Pure White high-definition color",
      "Non-fading and resistant to yellowing",
      "160cm width for versatile styling",
      "The perfect base for colorful embroidery",
    ],
  },
  {
    id: "f8",
    name: "Verona Sand Beige",
    price: 15000,
    slug: "fabric-verona-sand-beige",
    imageUrl: "/images/sand-beige-fabric.jpg",
    images: [
      "/images/sand-beige-fabric.jpg",
      "/images/sand-beige-fabric.jpg",
      "/images/sand-beige-fabric.jpg",
    ],
    description:
      "A warm, earthy sand beige from the Verona AMZ collection. A versatile choice for both casual and formal traditional attire.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Natural Sand Beige tone",
      "Guaranteed non-fading quality",
      "160cm wide professional cut",
      "High durability for frequent wear",
    ],
  },
  {
    id: "f9",
    name: "Kando Italian Camel Tan",
    price: 18000,
    slug: "fabric-kando-camel-tan",
    imageUrl: "/images/camel-tan-fabric.jpg",
    images: [
      "/images/camel-tan-fabric.jpg",
      "/images/camel-tan-fabric.jpg",
      "/images/camel-tan-fabric.jpg",
    ],
    description:
      "A regal camel tan fabric from Kando's Italian Gentleman collection. This color exudes luxury and pairs perfectly with gold accents.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Rich Camel Tan pigment",
      "Italian Gentleman collection exclusive",
      "Refined, smooth surface texture",
      "Ideal for bespoke occasion wear",
    ],
  },
  {
    id: "f10",
    name: "Verona Sky Blue",
    price: 15000,
    slug: "fabric-verona-sky-blue",
    imageUrl: "/images/sky-blue-fabric.jpg",
    images: [
      "/images/camel-tan-fabric.jpg",
      "/images/camel-tan-fabric.jpg",
      "/images/camel-tan-fabric.jpg",
    ],
    description:
      "A bright and serene sky blue from the Verona 160cm non-fading line. Excellent for festive celebrations and youthful designs.",
    category: "Fabrics",
    availableSizes: ["4 Yards", "7 Yards"],
    isMonogrammed: false,
    details: [
      "Vibrant Sky Blue hue",
      "AMZ certified non-fading material",
      "Lightweight and breathable",
      "160cm width for seamless tailoring",
    ],
  },
];

export const allProducts: Product[] = [
  ...kaftans,
  ...agbadaSets,
  ...caps,
  ...fabrics,
];

// Helper function to get products by category
export const fetchProductsByCollection = (collectionSlug: string): Product[] => {
  const categoryMap: { [key: string]: string } = {
    kaftans: "Kaftans",
    caps: "Caps",
    agbada: "Agbada Sets", 
    fabrics: "Fabrics",
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