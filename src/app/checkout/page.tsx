"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { createOrder, createOrUpdateCustomer, type Order } from "@/lib/supabase";

export default function CheckoutPage() {
  const { cart, getCartTotal, clearCart, updateQuantity, removeFromCart } = useCart();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    deliveryDate: "",
    deliveryTime: "",
    notes: "",
    paymentMethod: "transfer",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const deliveryFee = 2000;
  const subtotal = getCartTotal();
  const total = subtotal + deliveryFee;

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const orderItems = cart.map((item) => ({
        product_id: item.id,
        product_name: item.name,
        quantity: item.quantity,
        price: item.price,
        image: item.image,
      }));

      const orderData: Omit<Order, "id" | "created_at"> = {
        customer_name: formData.fullName,
        customer_email: formData.email,
        customer_phone: formData.phone,
        delivery_address: formData.address,
        delivery_city: formData.city,
        delivery_date: formData.deliveryDate,
        delivery_time: formData.deliveryTime,
        payment_method: formData.paymentMethod,
        notes: formData.notes,
        items: orderItems,
        subtotal: subtotal,
        delivery_fee: deliveryFee,
        total: total,
        status: "pending",
      };

      try {
        await createOrder(orderData);
        if (formData.email) {
          await createOrUpdateCustomer({
            name: formData.fullName,
            email: formData.email,
            phone: formData.phone,
            addresses: [formData.address + ", " + formData.city],
          });
        }
      } catch {
        console.log("Supabase not configured, continuing with WhatsApp order");
      }

      const whatsappItems = cart
        .map((item) => `• ${item.name} x${item.quantity} - ₦${(item.price * item.quantity).toLocaleString()}`)
        .join("\n");

      const message = `*NEW ORDER - Chops by Nefo*

*Customer Details:*
Name: ${formData.fullName}
Phone: ${formData.phone}
Email: ${formData.email}
Address: ${formData.address}, ${formData.city}

*Delivery:*
Date: ${formData.deliveryDate}
Time: ${formData.deliveryTime}

*Order Items:*
${whatsappItems}

*Order Summary:*
Subtotal: ₦${subtotal.toLocaleString()}
Delivery: ₦${deliveryFee.toLocaleString()}
*Total: ₦${total.toLocaleString()}*

*Payment Method:* ${formData.paymentMethod === "transfer" ? "Bank Transfer" : formData.paymentMethod === "card" ? "Card Payment" : "Cash on Delivery"}

${formData.notes ? `*Additional Notes:* ${formData.notes}` : ""}`;

      const whatsappUrl = `https://wa.me/2348093958707?text=${encodeURIComponent(message)}`;

      setIsSubmitting(false);
      setOrderPlaced(true);
      clearCart();
      // Open WhatsApp
      window.open(whatsappUrl, "_blank");
    } catch (error) {
      console.error("Error submitting order:", error);
      setIsSubmitting(false);
      alert("There was an error submitting your order. Please try again.");
    }
  };

  if (orderPlaced) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-accent">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Order Submitted!</h1>
            <p className="text-gray-600 mb-6">
              Your order has been sent to our WhatsApp. Please complete the conversation to confirm your order and payment details.
            </p>
            <div className="space-y-3">
              <a
                href="https://wa.me/2348093958707"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-primary text-white py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
              >
                Continue on WhatsApp
              </a>
              <Link
                href="/"
                className="block w-full bg-gray-100 text-gray-700 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen pt-20 flex items-center justify-center bg-accent">
        <div className="max-w-md mx-auto px-4 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <svg className="w-20 h-20 text-gray-300 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            <h1 className="text-2xl font-bold text-gray-800 mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-6">
              Add some delicious items to your cart before checking out.
            </p>
            <Link
              href="/order"
              className="inline-block bg-primary text-white px-8 py-3 rounded-full font-medium hover:bg-primary-dark transition-colors"
            >
              Browse Menu
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20 bg-accent">
      {/* Hero */}
      <section className="bg-linear-to-r from-primary to-primary-dark py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">
            Checkout
          </h1>
          <p className="text-gray-200">
            Complete your order details below
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Order Form */}
          <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800 mb-6">Delivery Details</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    placeholder="Enter your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
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
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="you@example.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Delivery Address *
                </label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="Street address, building, etc."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  City/Area *
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  placeholder="e.g., Ikeja, Lagos"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Delivery Date *
                  </label>
                  <input
                    type="date"
                    name="deliveryDate"
                    value={formData.deliveryDate}
                    onChange={handleInputChange}
                    required
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Preferred Time *
                  </label>
                  <select
                    name="deliveryTime"
                    value={formData.deliveryTime}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Select time</option>
                    <option value="9am-12pm">9:00 AM - 12:00 PM</option>
                    <option value="12pm-3pm">12:00 PM - 3:00 PM</option>
                    <option value="3pm-6pm">3:00 PM - 6:00 PM</option>
                    <option value="6pm-8pm">6:00 PM - 8:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Additional Notes
                </label>
                <textarea
                  name="notes"
                  value={formData.notes}
                  onChange={handleInputChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  placeholder="Any special instructions or requests..."
                />
              </div>

              {/* Payment Method */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Payment Method *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {[
                    { value: "transfer", label: "Bank Transfer", icon: "🏦" },
                    { value: "card", label: "Card Payment", icon: "💳" },
                    { value: "cash", label: "Cash on Delivery", icon: "💵" },
                  ].map((method) => (
                    <label
                      key={method.value}
                      className={`flex items-center gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                        formData.paymentMethod === method.value
                          ? "border-primary bg-primary/5"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      <input
                        type="radio"
                        name="paymentMethod"
                        value={method.value}
                        checked={formData.paymentMethod === method.value}
                        onChange={handleInputChange}
                        className="sr-only"
                      />
                      <span className="text-2xl">{method.icon}</span>
                      <span className="text-sm font-medium text-gray-700">
                        {method.label}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {formData.paymentMethod === "transfer" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h4 className="font-semibold text-blue-800 mb-2">Bank Details</h4>
                  <p className="text-sm text-blue-700">
                    Bank: First Bank<br />
                    Account Name: Chops by Nefo<br />
                    Account Number: 0123456789
                  </p>
                  <p className="text-xs text-blue-600 mt-2">
                    * Please send proof of payment via WhatsApp after transfer
                  </p>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white py-4 rounded-full font-semibold text-lg hover:bg-primary-dark transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Processing...
                  </>
                ) : (
                  <>
                    Place Order - ₦{total.toLocaleString()}
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Order Summary */}
          <div>
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg sticky top-28">
              <h2 className="text-xl font-bold text-gray-800 mb-6">Order Summary</h2>
              
              {/* Cart Items */}
              <div className="space-y-4 max-h-80 overflow-y-auto mb-6">
                {cart.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative w-20 h-20 rounded-lg overflow-hidden shrink-0 bg-gray-100">
                      <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800 text-sm">{item.name}</h3>
                      <p className="text-primary font-semibold">
                        ₦{item.price.toLocaleString()}
                      </p>
                      <div className="flex items-center gap-2 mt-1">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300"
                        >
                          -
                        </button>
                        <span className="text-sm w-6 text-center">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-xs hover:bg-gray-300"
                        >
                          +
                        </button>
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="ml-auto text-red-500 text-xs hover:text-red-700"
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Totals */}
              <div className="border-t pt-4 space-y-2">
                <div className="flex justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span>₦{subtotal.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery Fee</span>
                  <span>₦{deliveryFee.toLocaleString()}</span>
                </div>
                <div className="flex justify-between text-xl font-bold text-gray-800 pt-2 border-t">
                  <span>Total</span>
                  <span className="text-primary">₦{total.toLocaleString()}</span>
                </div>
              </div>

              <Link
                href="/order"
                className="block text-center text-primary text-sm mt-4 hover:underline"
              >
                ← Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
