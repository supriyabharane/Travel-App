"use client";
import Navbar from "@/components/Navbar"; // <-- Import Navbar
import { useState } from "react";

export default function CustomizeTrip() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    description: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    alert("Trip customization submitted!");
  };

  return (
    <>
      <Navbar /> {/* <-- Add Navbar at the top */}
      <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
        <div className="w-full max-w-4xl bg-gradient-to-br from-[#FF6A3D] to-[#FFB86C] rounded-2xl p-8 flex flex-col items-center shadow-lg mt-8">
          <h2 className="text-3xl font-bold text-white mb-2 text-center">Customize Your Trip</h2>
          <p className="text-white mb-8 text-center">Handpicked Getaways for Every Traveler</p>
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white rounded-xl shadow p-6 space-y-4"
          >
            <h3 className="font-semibold mb-2">Customize Trip</h3>
            <div>
              <label className="block text-sm font-medium mb-1">Your Name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="m@example.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Email ID</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Contact Details</label>
              <input
                type="text"
                name="contact"
                value={form.contact}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Trip Description</label>
              <textarea
                name="description"
                value={form.description}
                onChange={handleChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                rows={4}
                required
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] hover:opacity-90 transition-opacity"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}