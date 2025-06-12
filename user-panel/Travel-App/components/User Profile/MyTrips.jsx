"use client";
import React from "react";
import {
  FaHotel,
  FaStar,
  FaArrowLeft,
  FaArrowRight,
  FaGoogle,
} from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { AiOutlineCheckCircle } from "react-icons/ai";

export default function MyTrips() {
  const packages = []; // Empty array to show no trips

  return (
    <section className="max-w-7xl mx-auto sm:py-32 py-16 sm:px-0 px-4">
      <div className="text-[#0A0A0A] space-y-1 sm:space-y-2.5">
        <h2 className="text-3xl font-bold text-[32px]">Your Trips</h2>
        <p className="text-[#0A0A0A] text-sm sm:text-[16px]">
          Handpicked Getaways for Every Traveler
        </p>
      </div>

      <div className="grid grid-cols-12 gap-6 pt-16">
        <div className="sm:col-span-3 col-span-12 space-y-6">
          <div className="space-y-4">
            <h3 className="text-2xl font-medium">Trip Status</h3>
            <div className="space-y-2.5">
              {["Upcoming", "Completed", "Ongoing"].map((price, index) => (
                <label key={index} className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-5 h-5 appearance-none border border-[#ff3132] rounded-sm checked:bg-[#ff3132] checked:border-[#ff3132] focus:ring-1 focus:ring-[#ff3132]"
                  />
                  <span className="text-[#4D525F] text-[16px]">{price}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        <div className="sm:col-span-9 col-span-12">
          {packages.length === 0 ? (
            <div className="bg-white border border-gray-200 rounded-lg p-8 text-center">
              <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-12 w-12 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No trips found
              </h3>
              <p className="text-gray-500 mb-6">
                You don't have any trips booked yet. Start planning your next adventure!
              </p>
              <button className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold px-6 py-2 rounded-lg hover:opacity-90 transition-opacity">
                Explore Destinations
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  className="bg-white border border-[#FF507A] p-[10px] rounded-lg border-opacity-25 flex flex-col sm:flex-row"
                >
                  {/* Package Image */}
                  <div className="w-full sm:w-[388px] h-[200px] sm:h-auto">
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
  
                  {/* Package Info */}
                  <div className="sm:px-4 px-1 flex-1 sm:space-y-2 space-y-3 pt-3 sm:pt-0">
                    <h3 className="text-2xl font-medium">{pkg.name}</h3>
                    <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 text-gray-600 text-sm">
                      <span className="flex items-center gap-x-2.5 font-medium">
                        {pkg.rating}
                        <FaStar className="text-[#4D525F]" />
                        {pkg.hotelType}
                      </span>
                      <span className="flex items-center gap-x-2.5 font-medium">
                        <FaGoogle className="text-[#4D525F]" />
                        {pkg.reviews}
                      </span>
                      <span className="flex items-center gap-x-1 font-medium">
                        <MdOutlineKingBed className="text-[#4D525F]" />
                        {pkg.amenities}
                      </span>
                    </div>
  
                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2">
                      {["#31C48D", "#F5E9FE", "#FFD4B9", "#E3EEFF"].map(
                        (bg, i) => (
                          <span
                            key={i}
                            className={`text-xs text-[#1E1E1E] px-5 py-2 rounded-full bg-[${bg}] flex items-center gap-x-1.5`}
                          >
                            <img
                              src="/icons/Square Meters.png"
                              alt="icon"
                              className="w-5 h-5"
                            />{" "}
                            15,000 Sq Ft
                          </span>
                        )
                      )}
                    </div>
  
                    {/* Included Features */}
                    <div className="space-y-1.5 pt-1">
                      <h5 className="text-xs text-[#4D525F]">INCLUDES:</h5>
                      <p className="text-[14px] text-[#4D525F] font-medium">
                        {pkg.includes.join(", ")}
                      </p>
                    </div>
  
                    {/* Price & CTA */}
                    <div className="flex flex-row justify-end gap-2.5 items-center pt-2 border-t border-[#E8EAF8]">
                      <p className="text-[18px] font-bold text-[#21242C]">
                        {pkg.price}
                      </p>
                      <span>/ couple</span>
                      <button className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white sm:text-base text-sm font-semibold sm:px-6 px-4 py-2  rounded-lg">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}