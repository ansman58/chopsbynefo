"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import { useProducts, useCategories } from "@/lib/queries";
import { ChevronRight, Clock, MapPin, CreditCard } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export default function OrderPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const { data: products = [], isLoading: productsLoading } = useProducts();
  const { data: categories = ["All"], isLoading: categoriesLoading } = useCategories();

  const loading = productsLoading || categoriesLoading;

  const filteredProducts = products.filter(
    (product) => activeCategory === "All" || product.category === activeCategory
  );

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-primary to-primary-dark py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Place Your Order
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Select your favorite items and add them to your cart. We&apos;ll deliver fresh to your doorstep!
          </p>
        </div>
      </section>

      {/* Order Instructions */}
      <section className="py-8 bg-secondary/10 border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                1
              </div>
              <span className="text-gray-700">Browse & Add to Cart</span>
            </div>
            <ChevronRight className="hidden md:block w-8 h-8 text-gray-400" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-gray-700">Review Your Cart</span>
            </div>
            <ChevronRight className="hidden md:block w-8 h-8 text-gray-400" />
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                3
              </div>
              <span className="text-gray-700">Checkout & Pay</span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Filters */}
      <section className="py-4 md:py-6 bg-white border-b sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-linear-to-r from-white to-transparent z-10 pointer-events-none md:hidden" />
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-linear-to-l from-white to-transparent z-10 pointer-events-none md:hidden" />
            <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
              <div className="flex gap-2 min-w-max justify-start md:justify-center px-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors whitespace-nowrap ${
                      activeCategory === category
                        ? "bg-primary text-white"
                        : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="text-center py-16">
              <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
              <p className="text-gray-600">Loading products...</p>
            </div>
          ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Delivery Info */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-800 text-center mb-8">
            Delivery Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-accent rounded-xl p-6 text-center">
              <Clock className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Order Lead Time</h3>
              <p className="text-sm text-gray-600">
                Please place orders at least 24 hours in advance for best availability.
              </p>
            </div>
            <div className="bg-accent rounded-xl p-6 text-center">
              <MapPin className="w-12 h-12 text-secondary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Delivery Areas</h3>
              <p className="text-sm text-gray-600">
                We deliver within Lagos. Delivery fees vary by location.
              </p>
            </div>
            <div className="bg-accent rounded-xl p-6 text-center">
              <CreditCard className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="font-semibold text-gray-800 mb-2">Payment Options</h3>
              <p className="text-sm text-gray-600">
                Pay via bank transfer, card payment, or cash on delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Help Section */}
      <section className="py-12 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">
            Need Help with Your Order?
          </h2>
          <p className="text-gray-200 mb-6">
            For custom orders, bulk purchases, or any questions, contact us directly!
          </p>
          <a
            href="https://wa.me/2348093958707"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-secondary text-white px-8 py-3 rounded-full font-medium hover:bg-secondary-light transition-colors"
          >
            <WhatsAppIcon className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
