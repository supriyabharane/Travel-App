"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function UserProfile() {
  // Example user data (replace with real data from context or API)
  const [user, setUser] = useState({
    name: "Supriya Bharane",
    email: "supriya@example.com",
    phone: "+91-9876543210",
  });

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-[#F8F8F8] flex flex-col items-center py-8">
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-8 mt-8">
          <h2 className="text-2xl font-bold mb-6">Your Profile</h2>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Name</label>
              <input
                type="text"
                value={user.name}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email</label>
              <input
                type="email"
                value={user.email}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Phone</label>
              <input
                type="text"
                value={user.phone}
                readOnly
                className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-100"
              />
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Your Bookings</h3>
            <div className="bg-[#FFF6F2] rounded-xl p-4">
              <div className="mb-2 font-medium">Bali - Ubud Kuta</div>
              <div className="text-sm text-gray-600">Jan 15, 2025 &bull; 2 Adults &bull; ₹46,500</div>
              <button className="mt-2 px-4 py-1 rounded bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-sm">
                View Details
              </button>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <div className="space-y-2">
              <a
                href="/your-trips"
                className="block px-4 py-2 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
              >
                View Your Trips
              </a>
              <a
                href="/user-profile/edit-profile"
                className="block px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              >
                Edit Profile
              </a>
              <a
                href="/user-profile/change-password"
                className="block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                Change Password
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}