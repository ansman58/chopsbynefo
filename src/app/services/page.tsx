"use client";

import Image from "next/image";
import { Check, Phone } from "lucide-react";
import { useServices } from "@/lib/queries";
import { WhatsAppIcon } from "@/components/icons";

export default function ServicesPage() {
  const { data: services = [], isLoading: loading } = useServices();

  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-primary to-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            Professional catering services for all your special occasions
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {loading ? (
            <div className="flex justify-center items-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service) => (
              <div
                key={service.id}
                className="bg-accent rounded-2xl overflow-hidden shadow-lg"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-8">
                  <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <h3 className="font-semibold text-gray-800 mb-3">
                    What&apos;s Included:
                  </h3>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <Check className="w-5 h-5 text-secondary shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex items-center justify-between pt-6 border-t">
                    <div>
                      <span className="text-sm text-gray-500">Starting from</span>
                      <p className="text-2xl font-bold text-primary">
                        ₦{service.startingPrice.toLocaleString()}
                      </p>
                    </div>
                    <a
                      href="https://wa.me/2348168968952"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-secondary text-white px-6 py-3 rounded-full font-medium hover:bg-secondary-light transition-colors"
                    >
                      Get a Quote
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          )}
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-accent">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            How It Works
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: 1,
                title: "Contact Us",
                description: "Reach out via WhatsApp or phone to discuss your event.",
              },
              {
                step: 2,
                title: "Consultation",
                description: "We'll discuss your requirements, menu preferences, and budget.",
              },
              {
                step: 3,
                title: "Get a Quote",
                description: "Receive a detailed quote tailored to your specific needs.",
              },
              {
                step: 4,
                title: "Enjoy!",
                description: "Sit back and let us handle all the food arrangements.",
              },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Packages */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Popular Catering Packages
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Basic Package */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Basic Package</h3>
              <p className="text-3xl font-bold text-primary mb-4">
                ₦50,000<span className="text-sm text-gray-500 font-normal">/50 guests</span>
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Small chops (50 pieces per person)",
                  "Zobo drink (1 litre per 3 guests)",
                  "Basic table setup",
                  "Disposable plates & cups",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/2348168968952?text=Hi%2C%20I'm%20interested%20in%20the%20Basic%20Catering%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-100 text-primary py-3 rounded-full font-medium text-center hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Premium Package */}
            <div className="border-2 border-secondary rounded-2xl p-8 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-secondary text-white px-4 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-2">Premium Package</h3>
              <p className="text-3xl font-bold text-primary mb-4">
                ₦150,000<span className="text-sm text-gray-500 font-normal">/100 guests</span>
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Assorted small chops (100 pieces per person)",
                  "Zobo & Chapman drinks",
                  "Mini cakes or pastries",
                  "Professional table setup",
                  "Serving staff (2 persons)",
                  "Quality disposables included",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/2348168968952?text=Hi%2C%20I'm%20interested%20in%20the%20Premium%20Catering%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-secondary text-white py-3 rounded-full font-medium text-center hover:bg-secondary-light transition-colors"
              >
                Get Started
              </a>
            </div>

            {/* Deluxe Package */}
            <div className="border-2 border-gray-200 rounded-2xl p-8 hover:border-primary transition-colors">
              <h3 className="text-xl font-bold text-gray-800 mb-2">Deluxe Package</h3>
              <p className="text-3xl font-bold text-primary mb-4">
                ₦300,000<span className="text-sm text-gray-500 font-normal">/200 guests</span>
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Full small chops buffet",
                  "Multiple drink options",
                  "Custom celebration cake",
                  "Premium table & chair setup",
                  "Serving staff (4 persons)",
                  "Decoration support",
                  "Cleanup service included",
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                    <Check className="w-5 h-5 text-green-500" />
                    {item}
                  </li>
                ))}
              </ul>
              <a
                href="https://wa.me/2348168968952?text=Hi%2C%20I'm%20interested%20in%20the%20Deluxe%20Catering%20Package"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-gray-100 text-primary py-3 rounded-full font-medium text-center hover:bg-gray-200 transition-colors"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Book Your Event?
          </h2>
          <p className="text-gray-200 mb-8">
            Contact us today to discuss your catering needs. We&apos;d love to be part of your special day!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/2348168968952"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-secondary text-white px-8 py-4 rounded-full font-semibold hover:bg-secondary-light transition-colors"
            >
              <WhatsAppIcon className="w-6 h-6" />
              Chat on WhatsApp
            </a>
            <a
              href="tel:08168968952"
              className="inline-flex items-center justify-center gap-2 bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-colors"
            >
              <Phone className="w-6 h-6" />
              Call Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
