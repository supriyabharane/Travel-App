"use client";
import React from "react";
import Navbar from "./Navbar"; // Correct import path for Navbar

const WishlistPage = () => {
  const trips = [
    {
      id: 1,
      title: "Cocogiri Island Resort Maldives",
      price: "₹173,363 / couple",
      includes: "Accommodation, Speed boat Transfer, Green Tax, 24x7 online support",
      image: "/assets/images/maldives.jpg", // Path to Maldives image
    },
    {
      id: 2,
      title: "Cocogiri Island Resort Maldives",
      price: "₹173,363 / couple",
      includes: "Accommodation, Speed boat Transfer, Green Tax, 24x7 online support",
      image: "/assets/images/maldives.jpg", // Path to Maldives image
    },
    {
      id: 3,
      title: "Cocogiri Island Resort Maldives",
      price: "₹173,363 / couple",
      includes: "Accommodation, Speed boat Transfer, Green Tax, 24x7 online support",
      image: "/assets/images/maldives.jpg", // Path to Maldives image
    },
  ];

  return (
    <>
      {/* Navbar */}
      <Navbar />

      {/* Wishlist Content */}
      <div className="max-w-6xl mx-auto py-8">
        {/* Header */}
        <h1 className="text-2xl font-bold mb-4">Your trips</h1>
        <p className="text-gray-500 mb-6">Handpicked Getaways for Every Traveler</p>

        {/* Trip Status Filters */}
        <div className="flex gap-4 mb-6">
          <div>
            <input type="checkbox" id="upcoming" className="mr-2" />
            <label htmlFor="upcoming" className="text-sm text-gray-600">Upcoming</label>
          </div>
          <div>
            <input type="checkbox" id="completed" className="mr-2" />
            <label htmlFor="completed" className="text-sm text-gray-600">Completed</label>
          </div>
          <div>
            <input type="checkbox" id="ongoing" className="mr-2" />
            <label htmlFor="ongoing" className="text-sm text-gray-600">Ongoing</label>
          </div>
        </div>

        {/* Trip Cards */}
        <div className="grid grid-cols-1 gap-6">
          {trips.map((trip) => (
            <div key={trip.id} className="bg-white border border-gray-200 rounded-lg shadow p-4 flex gap-4">
              <img
                src={trip.image}
                alt={trip.title}
                className="w-32 h-32 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h2 className="text-lg font-semibold">{trip.title}</h2>
                <p className="text-sm text-gray-500 mt-2">{trip.includes}</p>
                <p className="text-lg font-bold text-[#FC4343] mt-4">{trip.price}</p>
              </div>
              <div className="flex flex-col justify-between">
                <button className="px-4 py-2 rounded bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold">
                  View Details
                </button>
                <button className="px-4 py-2 rounded border border-gray-300 text-gray-600 hover:bg-gray-100">
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="bg-[#FFF6F2] rounded-lg p-6 mt-8 text-center">
          <p className="text-sm text-gray-500 mb-4">
            Still Confused? Need help with anything? Contact us.
          </p>
          <button className="px-6 py-2 rounded bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold">
            Contact Us
          </button>
        </div>

        {/* Footer Links */}
        <footer className="bg-[#032125] text-white mt-8 py-6">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <h4 className="text-lg font-semibold mb-4">Logo</h4>
              <p className="text-sm">
                "Discover the World with Learn - Your Passport to Unforgettable Journeys!"
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li>About Us</li>
                <li>FAQs</li>
                <li>Contact Us</li>
                <li>Terms & Conditions</li>
                <li>Blogs</li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <p className="text-sm">+91 99994 97009</p>
              <p className="text-sm">sales@exploreandtravel.com</p>
              <div className="flex gap-4 mt-4">
                <a href="#" className="text-white">LinkedIn</a>
                <a href="#" className="text-white">Instagram</a>
                <a href="#" className="text-white">Twitter</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default WishlistPage;