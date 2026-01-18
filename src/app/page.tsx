"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import { useFeaturedProducts, useTestimonials } from "@/lib/queries";
import { ArrowDown, Cake, Beaker, Users, Sparkles, Clock, MapPin, Heart, Quote } from "lucide-react";
import { WhatsAppIcon } from "@/components/icons";

export default function Home() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const { data: featuredProducts = [] } = useFeaturedProducts();
  const { data: testimonials = [] } = useTestimonials();

  // Auto-rotate testimonials
  useEffect(() => {
    if (testimonials.length === 0) return;
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-linear-to-br from-primary to-primary-dark overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-40 h-40 bg-secondary rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-60 h-60 bg-secondary rounded-full blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center relative z-10">
          <div className="mb-8">
            <Image
              src="/logo.jpg"
              alt="Chops by Nefo"
              width={150}
              height={150}
              className="mx-auto rounded-full shadow-2xl"
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            CHOPS <span className="text-secondary">by</span> NEFO
          </h1>
          <p className="text-2xl md:text-3xl text-secondary italic mb-6">
            The Delight is in the Taste
          </p>
          <p className="text-lg text-gray-200 max-w-2xl mx-auto mb-10">
            Premium pastries, cakes, zobo drinks, and professional catering services 
            for all your special occasions. Made with love, delivered with excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/menu"
              className="bg-secondary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-secondary-light transition-colors"
            >
              View Our Menu
            </Link>
            <Link
              href="/order"
              className="bg-white text-primary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-8 h-8 text-white" />
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              From delicious pastries to full-scale catering, we&apos;ve got everything 
              you need to make your events memorable.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-accent rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Cake className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Pastries & Cakes</h3>
              <p className="text-gray-600">
                Freshly baked pastries, custom cakes, small chops, and more for any occasion.
              </p>
            </div>

            <div className="bg-accent rounded-2xl p-8 text-center hover:shadow-lg transition-shadow">
              <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-6">
                <Beaker className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Zobo & Drinks</h3>
              <p className="text-gray-600">
                Refreshing homemade zobo drink with natural spices. Perfect for parties!
              </p>
            </div>

            <div className="bg-accent rounded-2xl p-8 text-center hover:shadow-lg transition-shadow md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Catering Services</h3>
              <p className="text-gray-600">
                Professional indoor and outdoor catering for weddings, parties, and corporate events.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-20 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Popular Products
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Discover our most loved items. Fresh, delicious, and always made with the finest ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} {...product} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/menu"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Why Choose Chops by Nefo?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Quality Ingredients</h3>
              <p className="text-gray-600 text-sm">Only the freshest, finest ingredients go into our products.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Always Fresh</h3>
              <p className="text-gray-600 text-sm">Made fresh for every order. No stale products, ever.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-10 h-10 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Fast Delivery</h3>
              <p className="text-gray-600 text-sm">Quick and reliable delivery to your doorstep.</p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-10 h-10 text-secondary" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Made with Love</h3>
              <p className="text-gray-600 text-sm">Every item is crafted with passion and care.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-12">
            What Our Customers Say
          </h2>

          <div className="bg-white rounded-2xl p-8 md:p-12 shadow-xl">
            <Quote className="w-12 h-12 text-secondary mx-auto mb-6" />
            <p className="text-xl text-gray-700 mb-6 italic">
              &quot;{testimonials[activeTestimonial]?.text}&quot;
            </p>
            <p className="font-semibold text-primary">
              {testimonials[activeTestimonial]?.name}
            </p>
            <p className="text-sm text-gray-500">
              {testimonials[activeTestimonial]?.event}
            </p>

            <div className="flex justify-center gap-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeTestimonial ? "bg-primary" : "bg-gray-300"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Order?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Get your favorite pastries delivered fresh to your doorstep.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/order"
              className="bg-white text-secondary px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors"
            >
              Place Your Order
            </Link>
            <a
              href="https://wa.me/2348168968952"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-primary-dark transition-colors flex items-center justify-center gap-2"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
