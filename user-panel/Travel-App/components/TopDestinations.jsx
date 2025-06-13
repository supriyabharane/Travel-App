"use client";
import React from "react";
import { FaPlaneDeparture, FaPlane, FaPassport, FaHeart, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";

export default function TopDestinations({
  trips = [],
  title = "Top Packages",
  subtitle = "Handpicked Getaways for Every Traveler",
}) {
  return (
    <section className="relative max-w-7xl mx-auto py-20 px-4 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] rounded-3xl shadow-2xl border border-blue-100 overflow-visible" style={{gap: '64px'}}>
      {/* Decorative background blob */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-gradient-to-br from-[#FF507A] to-[#6C63FF] rounded-full blur-3xl opacity-60 z-0" />
      {/* Heading and subtitle */}
      <div className="flex justify-between items-center mb-12 relative z-10">
        <div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] drop-shadow-lg tracking-tight mb-2">
            {title}
          </h2>
          <p className="text-lg text-gray-700 font-medium mb-1 pl-1">
            {subtitle}
          </p>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FF507A] to-[#FF914D] rounded-full mt-2" />
        </div>
        <div className="flex items-center gap-x-3">
          <button
            className="bg-white text-black p-3 rounded-full shadow-md hover:bg-[#FF507A] hover:text-white transition-all border border-gray-200 hover:scale-110"
            type="button"
          >
            <FaChevronLeft />
          </button>
          <button
            className="bg-white text-black p-3 rounded-full shadow-md hover:bg-[#FF507A] hover:text-white transition-all border border-gray-200 hover:scale-110"
            type="button"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>

      {/* Packages grid */}
      {trips.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-xl text-gray-600">No packages found for your selection.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
          {trips.map((trip) => (
            <div
              key={trip._id}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col group hover:-translate-y-2 hover:scale-105 duration-300 relative"
            >
              <div className="relative">
                <img
                  src="/icons/sample-image.jpg"
                  alt={trip.title}
                  className="w-full h-52 object-cover rounded-xl shadow-md group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-3 right-3 bg-gradient-to-r from-[#FF507A] to-[#FF914D] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
                  Starts: INR {trip.pricing?.valuePack || "Contact"}
                </span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold flex-1 truncate text-gray-900 group-hover:text-[#FF507A] transition-colors">
                    {trip.title}
                  </h3>
                  <span className="ml-2 text-[#FF507A]">
                    <FaHeart />
                  </span>
                </div>
                <div className="flex items-center gap-4 text-base text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <FaPlaneDeparture className="text-[#FF507A]" />
                    {trip.destinationType}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdOutlineKingBed className="text-[#FF507A]" />
                    {trip.destinationCountry}
                  </span>
                </div>
                <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
                  <span className="flex items-center gap-1">
                    <FaPlane className="text-[#FF507A]" />
                    <img
                      src="/images/air-india-logo.png"
                      alt="Delhi airport"
                      className="w-5 h-5 object-contain ml-1"
                    />
                  </span>
                  <span className="h-5 border-l border-gray-300 mx-2"></span>
                  <span className="flex items-center gap-1">
                    <FaPassport className="text-[#FF507A]" />
                    <img
                      src="/images/india-flag.png"
                      alt="Visa"
                      className="w-5 h-5 object-contain ml-1"
                    />
                  </span>
                </div>
                <div className="w-full border-t border-gray-200 my-2"></div>
                <div className="text-xs text-gray-500 mb-4">
                  INCLUDES: Accommodation, Speed boat Transfer, Green Tax, 24x7 online support
                </div>
                <button className="mt-auto bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-base font-bold px-6 py-2 rounded-lg shadow-lg hover:from-[#FF507A] hover:to-[#FF914D] transition-colors">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Soft divider */}
      <div className="w-full h-1 mt-2 mb-2 bg-gradient-to-r from-[#FF507A]/10 via-[#6C63FF]/10 to-[#FF914D]/10 rounded-full blur-md" />

      {/* Extra content below Top Packages */}
      <div className="mt-2">
        <div className="space-y-8">
          <h2 className="sm:text-3xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] text-center mb-8 drop-shadow-lg tracking-tight">
            Why Choose Us?
          </h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 bg-white p-10 rounded-3xl shadow-2xl border border-blue-100">
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group border border-gray-100 hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF507A] to-[#FF914D] mb-5 group-hover:scale-125 transition-transform shadow-lg">
                <span className="text-3xl">🌏</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 text-center group-hover:text-[#FF507A] transition-colors tracking-wide">
                Expert Curated Itineraries
              </h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Our packages are handpicked for every traveler, ensuring the best experience, comfort, and value for money.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group border border-gray-100 hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF507A] to-[#FF914D] mb-5 group-hover:scale-125 transition-transform shadow-lg">
                <span className="text-3xl">⏰</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 text-center group-hover:text-[#FF507A] transition-colors tracking-wide">
                24x7 Support
              </h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Our team is available around the clock to assist you at every step of your journey.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group border border-gray-100 hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF507A] to-[#FF914D] mb-5 group-hover:scale-125 transition-transform shadow-lg">
                <span className="text-3xl">💰</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 text-center group-hover:text-[#FF507A] transition-colors tracking-wide">
                Best Price Guarantee
              </h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                We offer the best prices for our packages, ensuring great value for your money.
              </p>
            </div>
            <div className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group border border-gray-100 hover:-translate-y-2 hover:scale-105 duration-300">
              <div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF507A] to-[#FF914D] mb-5 group-hover:scale-125 transition-transform shadow-lg">
                <span className="text-3xl">🛫</span>
              </div>
              <h3 className="font-bold text-xl text-gray-900 mb-3 text-center group-hover:text-[#FF507A] transition-colors tracking-wide">
                Flexible Booking Options
              </h3>
              <p className="text-base text-gray-600 text-center leading-relaxed">
                Enjoy flexible booking and cancellation policies for a worry-free experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}