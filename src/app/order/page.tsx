"use client";

import { useState } from "react";
import { products, categories } from "@/data/products";
import ProductCard from "@/components/ProductCard";

export default function OrderPage() {
  const [activeCategory, setActiveCategory] = useState("All");

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
            <svg className="hidden md:block w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary text-white rounded-full flex items-center justify-center font-bold">
                2
              </div>
              <span className="text-gray-700">Review Your Cart</span>
            </div>
            <svg className="hidden md:block w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
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
      <section className="py-6 bg-white border-b sticky top-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
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
      </section>

      {/* Products */}
      <section className="py-12 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>
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
              <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-semibold text-gray-800 mb-2">Order Lead Time</h3>
              <p className="text-sm text-gray-600">
                Please place orders at least 24 hours in advance for best availability.
              </p>
            </div>
            <div className="bg-accent rounded-xl p-6 text-center">
              <svg className="w-12 h-12 text-secondary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <h3 className="font-semibold text-gray-800 mb-2">Delivery Areas</h3>
              <p className="text-sm text-gray-600">
                We deliver within Lagos. Delivery fees vary by location.
              </p>
            </div>
            <div className="bg-accent rounded-xl p-6 text-center">
              <svg className="w-12 h-12 text-primary mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
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
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}
