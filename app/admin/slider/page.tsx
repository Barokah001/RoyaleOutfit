// app/admin/slider/page.tsx - Brand Slider Management
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Edit,
  Trash2,
  Upload,
  X,
  Save,
  Eye,
  Image as ImageIcon,
  ArrowUp,
  ArrowDown,
} from "lucide-react";
import Image from "next/image";

interface Slide {
  id: string;
  image: string;
  title: string;
  description: string;
  order: number;
  active: boolean;
}

export default function AdminSliderPage() {
  const [showAddModal, setShowAddModal] = useState(false);
  const [editingSlide, setEditingSlide] = useState<Slide | null>(null);

  // Sample slider data
  const [slides, setSlides] = useState<Slide[]>([
    {
      id: "s1",
      image: "/images/content-3.jpg",
      title: "Aso-Oke Cap Sale",
      description: "Premium caps starting from ₦7,000",
      order: 1,
      active: true,
    },
    {
      id: "s2",
      image: "/images/content-4.PNG",
      title: "We're Hiring",
      description: "Join our skilled team of tailors",
      order: 2,
      active: true,
    },
    {
      id: "s3",
      image: "/images/content-4.PNG",
      title: "Happy New Year 2026",
      description: "Celebrating a year of excellence",
      order: 3,
      active: true,
    },
    {
      id: "s4",
      image: "/images/content-3.PNG",
      title: "Welcome to 2026",
      description: "Thank you for choosing Royale Outfits",
      order: 4,
      active: true,
    },
  ]);

  const [newSlide, setNewSlide] = useState({
    image: "",
    title: "",
    description: "",
  });

  const handleDeleteSlide = (id: string) => {
    if (confirm("Are you sure you want to delete this slide?")) {
      setSlides(slides.filter((s) => s.id !== id));
    }
  };

  const handleAddSlide = () => {
    const slide: Slide = {
      id: `slide-${Date.now()}`,
      image: newSlide.image || "/images/placeholder.jpg",
      title: newSlide.title,
      description: newSlide.description,
      order: slides.length + 1,
      active: true,
    };

    setSlides([...slides, slide]);
    setShowAddModal(false);
    setNewSlide({ image: "", title: "", description: "" });
  };

  const handleToggleActive = (id: string) => {
    setSlides(
      slides.map((slide) =>
        slide.id === id ? { ...slide, active: !slide.active } : slide
      )
    );
  };

  const handleMoveUp = (id: string) => {
    const index = slides.findIndex((s) => s.id === id);
    if (index > 0) {
      const newSlides = [...slides];
      [newSlides[index - 1], newSlides[index]] = [
        newSlides[index],
        newSlides[index - 1],
      ];
      setSlides(newSlides.map((slide, idx) => ({ ...slide, order: idx + 1 })));
    }
  };

  const handleMoveDown = (id: string) => {
    const index = slides.findIndex((s) => s.id === id);
    if (index < slides.length - 1) {
      const newSlides = [...slides];
      [newSlides[index], newSlides[index + 1]] = [
        newSlides[index + 1],
        newSlides[index],
      ];
      setSlides(newSlides.map((slide, idx) => ({ ...slide, order: idx + 1 })));
    }
  };

  return (
    <div className="min-h-screen bg-brand-cream-200 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-brand-brown-800 mb-2 font-display">
              Brand Slider Management
            </h1>
            <p className="text-brand-brown-600">
              Manage homepage promotional slides
            </p>
          </div>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center gap-2 bg-gradient-brown text-white px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-brown"
          >
            <Plus className="h-5 w-5" />
            Add Slide
          </button>
        </div>

        {/* Info Box */}
        <div className="bg-blue-50 border-l-4 border-blue-500 p-4 mb-6 rounded-lg">
          <p className="text-blue-800 text-sm">
            <strong>Tip:</strong> Slides are displayed in order on the homepage.
            Use the arrows to reorder them. Inactive slides won't be shown to
            visitors.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-lg shadow-brown p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center">
                <ImageIcon className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm text-brand-brown-600">Total Slides</p>
                <p className="text-2xl font-bold text-brand-brown-800">
                  {slides.length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-brown p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center">
                <Eye className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <p className="text-sm text-brand-brown-600">Active</p>
                <p className="text-2xl font-bold text-brand-brown-800">
                  {slides.filter((s) => s.active).length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-brown p-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                <X className="h-5 w-5 text-red-600" />
              </div>
              <div>
                <p className="text-sm text-brand-brown-600">Inactive</p>
                <p className="text-2xl font-bold text-brand-brown-800">
                  {slides.filter((s) => !s.active).length}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Slides List */}
        <div className="space-y-4">
          {slides
            .sort((a, b) => a.order - b.order)
            .map((slide, index) => (
              <motion.div
                key={slide.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`bg-white rounded-xl shadow-brown overflow-hidden hover:shadow-brown-lg transition-shadow ${
                  !slide.active ? "opacity-60" : ""
                }`}
              >
                <div className="flex flex-col md:flex-row gap-4 p-6">
                  {/* Order Number */}
                  <div className="flex md:flex-col items-center md:items-start gap-2">
                    <div className="w-12 h-12 rounded-lg bg-gradient-brown flex items-center justify-center text-white font-bold text-xl">
                      {slide.order}
                    </div>
                    <div className="flex md:flex-col gap-1">
                      <button
                        onClick={() => handleMoveUp(slide.id)}
                        disabled={index === 0}
                        className="p-1 hover:bg-brand-cream-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move up"
                      >
                        <ArrowUp className="h-4 w-4 text-brand-brown-600" />
                      </button>
                      <button
                        onClick={() => handleMoveDown(slide.id)}
                        disabled={index === slides.length - 1}
                        className="p-1 hover:bg-brand-cream-100 rounded disabled:opacity-30 disabled:cursor-not-allowed"
                        title="Move down"
                      >
                        <ArrowDown className="h-4 w-4 text-brand-brown-600" />
                      </button>
                    </div>
                  </div>

                  {/* Image Preview */}
                  <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden bg-brand-cream-100 flex-shrink-0">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      unoptimized
                    />
                  </div>

                  {/* Slide Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-bold text-brand-brown-800 mb-1">
                          {slide.title}
                        </h3>
                        <p className="text-brand-brown-600">
                          {slide.description}
                        </p>
                      </div>
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap ml-2 ${
                          slide.active
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                      >
                        {slide.active ? "Active" : "Inactive"}
                      </span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex md:flex-col gap-2">
                    <button
                      onClick={() => handleToggleActive(slide.id)}
                      className={`flex-1 md:flex-none px-4 py-2 rounded-lg font-medium transition-colors text-sm ${
                        slide.active
                          ? "bg-red-100 text-red-700 hover:bg-red-200"
                          : "bg-green-100 text-green-700 hover:bg-green-200"
                      }`}
                    >
                      {slide.active ? "Deactivate" : "Activate"}
                    </button>
                    <button className="flex-1 md:flex-none flex items-center justify-center gap-2 px-4 py-2 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors text-sm">
                      <Edit className="h-4 w-4" />
                      Edit
                    </button>
                    <button
                      onClick={() => handleDeleteSlide(slide.id)}
                      className="px-4 py-2 border-2 border-red-500 text-red-500 rounded-lg hover:bg-red-500 hover:text-white transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>

        {/* Empty State */}
        {slides.length === 0 && (
          <div className="bg-white rounded-xl shadow-brown p-12 text-center">
            <ImageIcon className="h-16 w-16 text-brand-brown-300 mx-auto mb-4" />
            <p className="text-brand-brown-600 mb-4">No slides yet</p>
            <button
              onClick={() => setShowAddModal(true)}
              className="text-primary font-semibold hover:underline"
            >
              Add your first slide
            </button>
          </div>
        )}
      </div>

      {/* Add Slide Modal */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl shadow-brown-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          >
            <div className="p-6 border-b border-brand-brown-200 flex items-center justify-between sticky top-0 bg-white">
              <h2 className="text-2xl font-bold text-brand-brown-800">
                Add New Slide
              </h2>
              <button
                onClick={() => setShowAddModal(false)}
                className="p-2 hover:bg-brand-cream-100 rounded-lg transition-colors"
              >
                <X className="h-6 w-6 text-brand-brown-600" />
              </button>
            </div>

            <div className="p-6 space-y-4">
              {/* Image Upload */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Slide Image *
                </label>
                <div className="border-2 border-dashed border-brand-brown-300 rounded-lg p-8 text-center hover:border-primary transition-colors cursor-pointer">
                  <Upload className="h-12 w-12 text-brand-brown-400 mx-auto mb-3" />
                  <p className="text-brand-brown-600 mb-2">
                    Click to upload or drag and drop
                  </p>
                  <p className="text-xs text-brand-brown-500">
                    PNG, JPG up to 10MB (Recommended: 1920x1080px)
                  </p>
                  <input
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => {
                      // Handle file upload
                      const file = e.target.files?.[0];
                      if (file) {
                        // TODO: Implement actual file upload
                        console.log("File selected:", file.name);
                      }
                    }}
                  />
                </div>
              </div>

              {/* Slide Title */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Slide Title *
                </label>
                <input
                  type="text"
                  value={newSlide.title}
                  onChange={(e) =>
                    setNewSlide({ ...newSlide, title: e.target.value })
                  }
                  placeholder="e.g., Summer Sale 2026"
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none"
                />
              </div>

              {/* Slide Description */}
              <div>
                <label className="block text-sm font-medium text-brand-brown-800 mb-2">
                  Description *
                </label>
                <textarea
                  value={newSlide.description}
                  onChange={(e) =>
                    setNewSlide({ ...newSlide, description: e.target.value })
                  }
                  rows={3}
                  placeholder="Brief description or call-to-action"
                  className="w-full px-4 py-2 border-2 border-brand-brown-200 rounded-lg focus:border-primary focus:outline-none resize-none"
                />
              </div>

              {/* Preview */}
              <div className="bg-brand-cream-100 rounded-lg p-4">
                <p className="text-xs font-semibold text-brand-brown-700 mb-2 uppercase">
                  Preview
                </p>
                <div className="bg-gradient-to-t from-brand-brown-900/80 to-transparent p-4 rounded-lg">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {newSlide.title || "Slide Title"}
                  </h3>
                  <p className="text-white/90 text-sm">
                    {newSlide.description || "Slide description"}
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
                  onClick={handleAddSlide}
                  className="flex-1 flex items-center justify-center gap-2 px-6 py-3 bg-gradient-brown text-white rounded-lg hover:opacity-90 transition-opacity"
                >
                  <Save className="h-5 w-5" />
                  Add Slide
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
