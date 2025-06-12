"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function ReviewPricing() {
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
              <span className="text-gray-400 font-semibold">3. Make Payment</span>
            </div>
          </div>
          {/* Pricing Details */}
          <h2 className="text-2xl font-bold mb-4">Review Pricing</h2>
          <div className="bg-[#FFF6F2] rounded-xl p-6 mb-6">
            <div className="flex justify-between mb-2">
              <span>Base Package Price</span>
              <span>₹ 45,000</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Taxes & Fees</span>
              <span>₹ 3,500</span>
            </div>
            <div className="flex justify-between mb-2">
              <span>Discount</span>
              <span className="text-green-600">- ₹ 2,000</span>
            </div>
            <hr className="my-2" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>₹ 46,500</span>
            </div>
          </div>
          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Link href="/itinerary-detail/bali-ubud-kuta">
              <button className="px-6 py-2 rounded-lg border border-gray-300 bg-white hover:bg-gray-100 transition">
                ← Go Back
              </button>
            </Link>
            <Link href="/itinerary-detail/bali-ubud-kuta/payment">
              <button className="px-6 py-2 rounded-lg text-white bg-gradient-to-r from-[#FF3131] to-[#FF914D] hover:opacity-90 transition">
                Continue →
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}