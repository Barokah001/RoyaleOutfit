// app/admin/products/page.tsx - Product Management
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Filter,
  Edit,
  Trash2,
  Eye,
  Upload,
  X,
  Save,
} from "lucide-react";
import Image from "next/image";

interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  stock: string;
  imageUrl: string;
  status: "active" | "draft" | "outofstock";
}

export default function AdminProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  // Sample products data (replace with real data from database)
  const [products, setProducts] = useState<Product[]>([
    {
      id: "k1",
      name: "Black Kaftan with Gold Embroidery",
      category: "Kaftans",
      price: 75000,
      stock: "In Stock",
      imageUrl: "/images/black-l-kaftan.png",
      status: "active",
    },
    {
      id: "k2",
      name: "Navy Blue Kaftan",
      category: "Kaftans",
      price: 80000,
      stock: "In Stock",
      imageUrl: "/images/blue-l-kaftan.png",
      status: "active",
    },
    {
      id: "c1",
      name: "Aso Oke Fila Cap - Red",
      category: "Caps",
      price: 15000,
      stock: "Low Stock",
      imageUrl: "/images/cap-1.jpeg",
      status: "active",
    },
    {
      id: "f1",
      name: "Kando Italian Collection",
      category: "Fabrics",
      price: 18000,
      stock: "In Stock",
      imageUrl: "/images/forest-green-fabric.jpg",
      status: "active",
    },
  ]);

  const [newProduct, setNewProduct] = useState({
    name: "",
    category: "Kaftans",
    price: 0,
    stock: "In Stock",
    description: "",
    sizes: [] as string[],
    imageUrl: "",
  });

  const categories = ["All", "Kaftans", "Caps", "Agbada Sets", "Fabrics"];
  const stockStatuses = ["In Stock", "Low Stock", "Out of Stock"];
  const sizeOptions = ["S", "M", "L", "XL", "XXL"];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === "All" || product.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const handleDeleteProduct = (id: string) => {
    if (confirm("Are you sure you want to delete this product?")) {
      setProducts(products.filter((p) => p.id !== id));
    }
  };

  const handleAddProduct = () => {
    const product: Product = {
      id: `new-${Date.now()}`,
      name: newProduct.name,
      category: newProduct.category,
      price: newProduct.price,
      stock: newProduct.stock,
      imageUrl: newProduct.imageUrl || "/images/placeholder.jpg",
      status: "active",
    };

    setProducts([...products, product]);
    setShowAddModal(false);
    setNewProduct({
      name: "",
      category: "Kaftans",
      price: 0,
      stock: "In Stock",
      description: "",
      sizes: [],
      imageUrl: "",
    });
  };

  return (
    <div className="min-h-screen bg-brand-cream-200 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-brown-800 mb-2 font-display">
              Product Management
            </h1>
            <p className="text-brand-brown-600">
              Manage your entire product catalog
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-gradient-brown text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-brown"
          >
            <Plus className="h-5 w-5" />
            Add Product
          </button>
        </div>

        {/* Filters */}
        <div className="bg-white rounded-xl shadow-brown p-6 mb-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-brand-brown-400" />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-brown p-4">
            <p className="text-sm text-brand-brown-600 mb-1">Total Products</p>
            <p className="text-2xl font-bold text-brand-brown-800">
              {products.length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-brown p-4">
            <p className="text-sm text-brand-brown-600 mb-1">Kaftans</p>
            <p className="text-2xl font-bold text-brand-brown-800">
              {products.filter((p) => p.category === "Kaftans").length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-brown p-4">
            <p className="text-sm text-brand-brown-600 mb-1">Caps</p>
            <p className="text-2xl font-bold text-brand-brown-800">
              {products.filter((p) => p.category === "Caps").length}
            </p>
          </div>
          <div className="bg-white rounded-lg shadow-brown p-4">
            <p className="text-sm text-brand-brown-600 mb-1">Fabrics</p>
            <p className="text-2xl font-bold text-brand-brown-800">
              {products.filter((p) => p.category === "Fabrics").length}
            </p>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white rounded-xl shadow-brown overflow-hidden hover:shadow-brown-lg transition-shadow"
            >
              <div className="relative h-48 bg-brand-cream-100">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  className="object-cover"
                  unoptimized
                />
                <span
                  className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${
                    product.status === "active"
                      ? "bg-green-100 text-green-700"
                      : "bg-yellow-100 text-yellow-700"
                  }`}
                >
                  {product.status}
                </span>
              </div>

              <div className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <div>
                    <p className="text-xs text-brand-brown-500 mb-1">
                      {product.category}
                    </p>
                    <h3 className="font-bold text-brand-brown-800 line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <p className="text-xl font-bold text-primary">
                    ₦{product.price.toLocaleString()}
                  </p>
                  <span
                    className={`text-xs px-2 py-1 rounded ${
                      product.stock === "In Stock"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {product.stock}
                  </span>
                </div>

                <div className="flex gap-2">
                  <button className="flex-1 flex items-center justify-center gap-2 px-3 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-sm">
                    <Edit className="h-4 w-4" />
                    Edit
                  </button>
                  <button
                    onClick={() => handleDeleteProduct(product.id)}
                    className="px-3 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                  >
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <div className="bg-white rounded-xl shadow-brown p-12 text-center">
            <p className="text-brand-brown-600 mb-4">No products found</p>
            <button
              onClick={() => setSearchQuery("")}
              className="text-primary font-semibold hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}
      </div>

      {/* Add Product Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-brown-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-brand-brown-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-bold text-brand-brown-800">
                Add New Product
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-brand-cream-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-brand-brown-600" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Product Name */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Product Name *
                </label>
                <input
                  type="text"
                  value={newProduct.name}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, name: e.target.value })
                  }
                  placeholder="e.g., Black Kaftan with Gold Embroidery"
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Category *
                </label>
                <select
                  value={newProduct.category}
                  onChange={(e) =>
                    setNewProduct({ ...newProduct, category: e.target.value })
                  }
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                >
                  <option value="Kaftans">Kaftans</option>
                  <option value="Caps">Caps</option>
                  <option value="Agbada Sets">Agbada Sets</option>
                  <option value="Fabrics">Fabrics</option>
                </select>
              </div>

              {/* Price */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Price (₦) *
                </label>
                <input
                  type="number"
                  value={newProduct.price}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      price: parseInt(e.target.value) || 0,
                    })
                  }
                  placeholder="75000"
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Description
                </label>
                <textarea
                  value={newProduct.description}
                  onChange={(e) =>
                    setNewProduct({
                      ...newProduct,
                      description: e.target.value,
                    })
                  }
                  rows={4}
                  placeholder="Describe the product..."
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Product Image
                </label>
                <div className="border-2 border-dashed border-brand-brown-300 rounded-lg p-8 text-center">
                  <Upload className="h-12 w-12 text-brand-brown-400 mx-auto mb-3" />
                  <p className="text-brand-brown-600 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-brand-brown-500">
                    PNG, JPG up to 5MB
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex gap-3 pt-4">
                <button
                  onClick={() => setShowAddModal(false)}
                  className="flex-1 px-6 py-3 border-2 border-brand-brown-300 text-brand-brown-700 rounded-lg hover:bg-brand-cream-100 transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddProduct}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brown text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Save className="h-5 w-5" />
                  Save Product
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
