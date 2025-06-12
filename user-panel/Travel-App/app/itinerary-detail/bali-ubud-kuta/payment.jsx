"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { useState } from "react";

export default function Payment() {
  const [form, setForm] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Payment Successful!");
  };

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center py-8">
        <div className="w-full max-w-4xl bg-white rounded-2xl shadow-lg p-8 mt-8">
          {/* Stepper */}
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <span className="text-[#FF3131] font-semibold">1. Trip Overview</span>
              <span className="h-1 w-8 bg-gray-200 rounded"></span>
              <span className="text-[#FF3131] font-semibold">2. Review Pricing</span>
              <span className="h-1 w-8 bg-gray-200 rounded"></span>
              <span className="text-[#FF3131] font-semibold">3. Make Payment</span>
            </div>
          </div>
          {/* Payment Form */}
          <h2 className="text-2xl font-bold mb-4">Make Payment</h2>
          <form onSubmit={handleSubmit} className="space-y-4 max-w-md mx-auto">
            <div>
              <label className="block text-sm font-medium mb-1">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={form.cardNumber}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
                maxLength={16}
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Name on Card</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
                placeholder="Full Name"
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">Expiry</label>
                <input
                  type="text"
                  name="expiry"
                  value={form.expiry}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                  placeholder="MM/YY"
                  maxLength={5}
                />
              </div>
              <div className="flex-1">
                <label className="block text-sm font-medium mb-1">CVV</label>
                <input
                  type="password"
                  name="cvv"
                  value={form.cvv}
                  onChange={handleChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  required
                  maxLength={4}
                  placeholder="123"
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] hover:opacity-90 transition-opacity"
            >
              Pay ₹46,500
            </button>
          </form>
          {/* Navigation Buttons */}
          <div className="flex justify-between mt-6">
            <Link href="/itinerary-detail/bali-ubud-kuta/review">
              <button className="px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition">
                ← Go Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}