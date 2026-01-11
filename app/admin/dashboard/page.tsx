// app/admin/dashboard/page.tsx - Admin Dashboard
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  ShoppingBag,
  Briefcase,
  Image as ImageIcon,
  Users,
  Settings,
  LogOut,
  TrendingUp,
  Package,
  DollarSign,
  Eye,
  Menu,
  X,
} from "lucide-react";
import Link from "next/link";

export default function AdminDashboard() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState("overview");

  // Check authentication
  useEffect(() => {
    const isAuth = localStorage.getItem("adminAuth");
    if (!isAuth) {
      router.push("/admin/login");
    }
  }, [router]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuth");
    router.push("/admin/login");
  };

  const navItems = [
    {
      id: "overview",
      label: "Overview",
      icon: LayoutDashboard,
      href: "/admin/dashboard",
    },
    {
      id: "products",
      label: "Products",
      icon: ShoppingBag,
      href: "/admin/products",
    },
    { id: "jobs", label: "Job Postings", icon: Briefcase, href: "/admin/jobs" },
    {
      id: "slider",
      label: "Brand Slider",
      icon: ImageIcon,
      href: "/admin/slider",
    },
    { id: "orders", label: "Orders", icon: Package, href: "/admin/orders" },
    {
      id: "customers",
      label: "Customers",
      icon: Users,
      href: "/admin/customers",
    },
    {
      id: "settings",
      label: "Settings",
      icon: Settings,
      href: "/admin/settings",
    },
  ];

  const stats = [
    {
      label: "Total Products",
      value: "33",
      change: "+3 this month",
      icon: ShoppingBag,
      color: "bg-blue-500",
    },
    {
      label: "Total Orders",
      value: "127",
      change: "+12 this week",
      icon: Package,
      color: "bg-green-500",
    },
    {
      label: "Revenue",
      value: "₦4.2M",
      change: "+18% this month",
      icon: DollarSign,
      color: "bg-primary",
    },
    {
      label: "Active Jobs",
      value: "4",
      change: "2 new applications",
      icon: Briefcase,
      color: "bg-purple-500",
    },
  ];

  const recentOrders = [
    {
      id: "#ORD-001",
      customer: "John Doe",
      product: "Black Kaftan",
      amount: "₦75,000",
      status: "Completed",
    },
    {
      id: "#ORD-002",
      customer: "Jane Smith",
      product: "Navy Blue Kaftan",
      amount: "₦80,000",
      status: "Processing",
    },
    {
      id: "#ORD-003",
      customer: "Mike Johnson",
      product: "Agbada Set",
      amount: "₦150,000",
      status: "Pending",
    },
    {
      id: "#ORD-004",
      customer: "Sarah Williams",
      product: "Fila Cap",
      amount: "₦18,000",
      status: "Completed",
    },
  ];

  return (
    <div className="min-h-screen bg-brand-cream-200 flex">
      {/* Sidebar */}
      <aside
        className={`fixed lg:static inset-y-0 left-0 z-50 bg-gradient-brown text-white transition-all duration-300 ${
          sidebarOpen ? "w-64" : "w-0 lg:w-20"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo */}
          <div className="p-6 border-b border-white/10">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-white/20 flex items-center justify-center flex-shrink-0">
                <ShoppingBag className="h-6 w-6" />
              </div>
              {sidebarOpen && (
                <div>
                  <h1 className="font-bold text-lg">Royale Admin</h1>
                  <p className="text-xs text-white/70">Management Portal</p>
                </div>
              )}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 p-4 space-y-2 overflow-y-auto">
            {navItems.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors ${
                  activeTab === item.id
                    ? "bg-white/20 text-white"
                    : "text-white/70 hover:bg-white/10 hover:text-white"
                }`}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {sidebarOpen && (
                  <span className="font-medium">{item.label}</span>
                )}
              </Link>
            ))}
          </nav>

          {/* Logout */}
          <div className="p-4 border-t border-white/10">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 px-4 py-3 rounded-lg text-white/70 hover:bg-white/10 hover:text-white transition-colors w-full"
            >
              <LogOut className="h-5 w-5 flex-shrink-0" />
              {sidebarOpen && <span className="font-medium">Logout</span>}
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-h-screen">
        {/* Top Bar */}
        <header className="bg-white border-b border-brand-brown-200 sticky top-0 z-40">
          <div className="flex items-center justify-between p-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-brand-cream-100 text-brand-brown-600"
              >
                {sidebarOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
              <h2 className="text-2xl font-bold text-brand-brown-800 font-display">
                Dashboard Overview
              </h2>
            </div>

            <div className="flex items-center gap-4">
              <Link
                href="/"
                target="_blank"
                className="flex items-center gap-2 px-4 py-2 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-white transition-colors"
              >
                <Eye className="h-4 w-4" />
                <span className="hidden sm:inline">View Site</span>
              </Link>
              <div className="w-10 h-10 rounded-full bg-gradient-brown flex items-center justify-center text-white font-bold">
                A
              </div>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <main className="flex-1 p-6">
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-brown p-6"
              >
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-lg ${stat.color} flex items-center justify-center text-white`}
                  >
                    <stat.icon className="h-6 w-6" />
                  </div>
                  <span className="text-xs text-green-600 font-medium">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-brand-brown-800 mb-1">
                  {stat.value}
                </h3>
                <p className="text-sm text-brand-brown-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Quick Actions */}
          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            <Link
              href="/admin/products"
              className="bg-white rounded-xl shadow-brown p-6 hover:shadow-brown-lg transition-shadow"
            >
              <ShoppingBag className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-brand-brown-800 mb-2">
                Manage Products
              </h3>
              <p className="text-brand-brown-600 text-sm mb-4">
                Add, edit, or remove products from your catalog
              </p>
              <span className="text-primary font-semibold">
                Go to Products →
              </span>
            </Link>

            <Link
              href="/admin/jobs"
              className="bg-white rounded-xl shadow-brown p-6 hover:shadow-brown-lg transition-shadow"
            >
              <Briefcase className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-brand-brown-800 mb-2">
                Job Postings
              </h3>
              <p className="text-brand-brown-600 text-sm mb-4">
                Manage career opportunities and applications
              </p>
              <span className="text-primary font-semibold">Manage Jobs →</span>
            </Link>

            <Link
              href="/admin/slider"
              className="bg-white rounded-xl shadow-brown p-6 hover:shadow-brown-lg transition-shadow"
            >
              <ImageIcon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-xl font-bold text-brand-brown-800 mb-2">
                Brand Slider
              </h3>
              <p className="text-brand-brown-600 text-sm mb-4">
                Update homepage promotional slides
              </p>
              <span className="text-primary font-semibold">Edit Slider →</span>
            </Link>
          </div>

          {/* Recent Orders Table */}
          <div className="bg-white rounded-xl shadow-brown p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-brand-brown-800">
                Recent Orders
              </h3>
              <Link
                href="/admin/orders"
                className="text-primary font-semibold hover:underline"
              >
                View All
              </Link>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-brand-brown-200">
                    <th className="text-left py-3 px-4 text-sm font-semibold text-brand-brown-700">
                      Order ID
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-brand-brown-700">
                      Customer
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-brand-brown-700">
                      Product
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-brand-brown-700">
                      Amount
                    </th>
                    <th className="text-left py-3 px-4 text-sm font-semibold text-brand-brown-700">
                      Status
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order, index) => (
                    <tr
                      key={index}
                      className="border-b border-brand-brown-100 hover:bg-brand-cream-100 transition-colors"
                    >
                      <td className="py-3 px-4 text-sm text-brand-brown-800 font-medium">
                        {order.id}
                      </td>
                      <td className="py-3 px-4 text-sm text-brand-brown-700">
                        {order.customer}
                      </td>
                      <td className="py-3 px-4 text-sm text-brand-brown-700">
                        {order.product}
                      </td>
                      <td className="py-3 px-4 text-sm text-brand-brown-800 font-semibold">
                        {order.amount}
                      </td>
                      <td className="py-3 px-4">
                        <span
                          className={`inline-block px-3 py-1 rounded-full text-xs font-medium ${
                            order.status === "Completed"
                              ? "bg-green-100 text-green-700"
                              : order.status === "Processing"
                              ? "bg-blue-100 text-blue-700"
                              : "bg-yellow-100 text-yellow-700"
                          }`}
                        >
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>

      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  );
}
