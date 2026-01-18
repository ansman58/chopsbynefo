import Image from "next/image";
import { Phone, Clock } from "lucide-react";
import { WhatsAppIcon, InstagramIcon } from "@/components/icons";

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-20">
      {/* Hero */}
      <section className="bg-linear-to-r from-primary to-primary-dark py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            We&apos;d love to hear from you. Reach out for orders, inquiries, or just to say hello!
          </p>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <Image
                  src="/logo.jpg"
                  alt="Chops by Nefo"
                  width={80}
                  height={80}
                  className="rounded-full"
                />
                <div>
                  <h2 className="text-2xl font-bold text-gray-800">CHOPS by NEFO</h2>
                  <p className="text-secondary italic">The Delight is in the Taste</p>
                </div>
              </div>

              <p className="text-gray-600 mb-8">
                We&apos;re here to make your events special with our delicious pastries, cakes, 
                and catering services. Contact us through any of the channels below.
              </p>

              <div className="space-y-6">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/2348093958707"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                    <WhatsAppIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">WhatsApp</p>
                    <p className="text-green-600">08093958707</p>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href="tel:08168968952"
                  className="flex items-center gap-4 p-4 bg-blue-50 rounded-xl hover:bg-blue-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Phone</p>
                    <p className="text-blue-600">08168968952</p>
                  </div>
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com/chops_by_nefo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-pink-50 rounded-xl hover:bg-pink-100 transition-colors"
                >
                  <div className="w-12 h-12 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 rounded-full flex items-center justify-center">
                    <InstagramIcon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800">Instagram</p>
                    <p className="text-pink-600">@chops_by_nefo</p>
                  </div>
                </a>
              </div>

              {/* Business Hours */}
              <div className="mt-8 p-6 bg-accent rounded-xl">
                <h3 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Business Hours
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="text-gray-800 font-medium">8:00 AM - 8:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Saturday</span>
                    <span className="text-gray-800 font-medium">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Sunday</span>
                    <span className="text-gray-800 font-medium">By Appointment</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-accent rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                      placeholder="08012345678"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white"
                    placeholder="you@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent bg-white">
                    <option value="">Select a subject</option>
                    <option value="order">Place an Order</option>
                    <option value="catering">Catering Inquiry</option>
                    <option value="custom">Custom Order</option>
                    <option value="feedback">Feedback</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none bg-white"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-primary text-white py-4 rounded-full font-semibold hover:bg-primary-dark transition-colors"
                >
                  Send Message
                </button>

                <p className="text-center text-sm text-gray-500">
                  Or reach us directly on{" "}
                  <a
                    href="https://wa.me/2348093958707"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 hover:underline font-medium"
                  >
                    WhatsApp
                  </a>
                  {" "}for faster response
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-800 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {[
              {
                question: "How far in advance should I place my order?",
                answer: "We recommend placing orders at least 24-48 hours in advance for regular items. For custom cakes and catering services, please contact us at least 1 week before your event.",
              },
              {
                question: "Do you deliver? What areas do you cover?",
                answer: "Yes! We deliver within Lagos. Delivery fees vary based on your location. Contact us for specific delivery charges to your area.",
              },
              {
                question: "Can I customize my order?",
                answer: "Absolutely! We love creating custom orders. Whether it's a special design for a cake or specific requirements for catering, reach out to us and we'll make it happen.",
              },
              {
                question: "What payment methods do you accept?",
                answer: "We accept bank transfers, card payments, and cash on delivery. For bank transfers, payment should be made before or upon delivery.",
              },
              {
                question: "Do you offer catering for large events?",
                answer: "Yes, we provide full catering services for events of all sizes, from intimate gatherings to large celebrations. Contact us for a customized quote.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white rounded-xl p-6">
                <h3 className="font-semibold text-gray-800 mb-2">{faq.question}</h3>
                <p className="text-gray-600 text-sm">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
