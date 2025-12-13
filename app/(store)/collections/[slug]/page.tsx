// ============================================================
// 9. Collections Page - UPDATED
// ============================================================

import { ProductCard } from "@/components/store/ProductCard";
import { Product } from "@/types";
import { Filter, Grid, List } from "lucide-react";

const fetchProductsByCollection = (collectionSlug: string): Product[] => {
  if (!collectionSlug) {
    console.error("Collection slug is missing or invalid.");
    return [];
  }

  const allProducts: Product[] = [
    {
      id: "p1",
      name: "Emerald Kaftan with Gold Monogram",
      price: 75000,
      slug: "kaftan-emerald",
      imageUrl: "/images/kaftan-emerald.jpg",
      description:
        "A luxurious, custom-tailored kaftan made from premium silk-cotton blend.",
      category: "Kaftans",
      availableSizes: ["S", "M", "L", "XL"],
      isMonogrammed: true,
    },
    {
      id: "p2",
      name: "Aso Oke Fila Cap",
      price: 15000,
      slug: "aso-oke-cap",
      imageUrl: "/images/cap-aso-oke.jpg",
      description:
        "Traditional Nigerian cap made from authentic Aso Oke fabric.",
      category: "Caps",
      availableSizes: ["One Size"],
      isMonogrammed: false,
    },
    {
      id: "p3",
      name: "Linen Trousers - Olive Green",
      price: 35000,
      slug: "trousers-olive",
      imageUrl: "/images/trousers-olive.jpg",
      description: "Comfortable linen trousers perfect for any occasion.",
      category: "Trousers",
      availableSizes: ["32", "34", "36"],
      isMonogrammed: false,
    },
    {
      id: "p4",
      name: "Royal Blue Kaftan",
      price: 80000,
      slug: "kaftan-royal-blue",
      imageUrl: "/images/kaftan-blue.jpg",
      description: "Elegant royal blue kaftan with silver embroidery.",
      category: "Kaftans",
      availableSizes: ["S", "M", "L", "XL"],
      isMonogrammed: true,
    },
  ];

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

export default function CollectionDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const collectionSlug = params.slug;
  const products = fetchProductsByCollection(collectionSlug);

  const collectionName = collectionSlug
    ? collectionSlug.replace(/-/g, " ").toUpperCase()
    : "ALL COLLECTIONS";

  return (
    <div className="container mx-auto py-12 px-4">
      <header className="mb-10 p-6 bg-white rounded-xl shadow-lg border-t-4 border-[#4a5d3f]">
        <h1 className="text-5xl font-extrabold text-[#4a5d3f] mb-2">
          {collectionName}
        </h1>
        <p className="text-xl text-gray-600">
          We found {products.length} exclusive items in this collection.
        </p>
      </header>

      <div className="flex justify-between items-center mb-8 flex-wrap gap-4">
        <div className="text-sm font-medium text-gray-700">
          Showing 1 - {products.length} of {products.length} products
        </div>

        <div className="flex items-center space-x-4 flex-wrap gap-2">
          <button className="flex items-center space-x-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 hover:border-[#4a5d3f] transition-colors">
            <Filter className="h-4 w-4" />
            <span>Filter</span>
          </button>

          <select className="rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-700 focus:border-[#4a5d3f] focus:ring-[#4a5d3f] focus:outline-none transition">
            <option>Sort by Price: Low to High</option>
            <option>Sort by Price: High to Low</option>
            <option>Sort by Newest</option>
            <option>Sort by Name</option>
          </select>

          <div className="hidden sm:flex border border-gray-300 rounded-lg p-1">
            <button className="p-1 bg-[#4a5d3f] text-white rounded-md">
              <Grid className="h-5 w-5" />
            </button>
            <button className="p-1 text-gray-500 hover:bg-gray-100 rounded-md">
              <List className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-4 lg:gap-8">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-20 bg-white rounded-xl shadow-lg mt-10">
          <h2 className="text-2xl font-bold text-gray-700">
            No Products Found
          </h2>
          <p className="text-gray-500 mt-2">
            Check back soon or explore our other collections.
          </p>
        </div>
      )}
    </div>
  );
}
