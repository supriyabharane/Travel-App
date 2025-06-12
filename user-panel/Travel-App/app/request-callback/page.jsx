"use client";
import Navbar from "@/components/Navbar";
import { useState } from "react";

export default function RequestCallback() {
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
    alert("Callback request submitted!");
  };

  return (
    <div className="min-h-screen bg-[#232323] flex flex-col items-center justify-center">
      <Navbar />
      <div className="w-full max-w-md mt-12 bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-xl font-bold mb-4">Request Callback</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
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
            className="w-full py-2 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] hover:opacity-90 transition-opacity"
          >
            Submit &nbsp;✦
          </button>
        </form>
      </div>
    </div>
  );
}