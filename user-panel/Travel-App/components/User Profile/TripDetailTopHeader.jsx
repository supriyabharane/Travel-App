"use client";
import React, { useState } from "react";
import TripSummary from "./TripSummary";
import PricingDetails from "./PricingDetails";

const TripDetailTopHeader = () => {
  const [activeTab, setActiveTab] = useState("Trip Summary");

  return (
    <div className="">
      <div className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] sm:py-[40px] py-[30px]">
        <div className="max-w-7xl mx-auto text-white space-y-3 sm:px-0 px-4">
          <div className="text-2xl font-medium">
            <h1>Romantic Bali Getaway:</h1>
            <h1>Ubud, Kuta & Timeless Adventures</h1>
          </div>
          <p className="mt-2">Tour Code:</p>
          <div className="bg-white text-[#FCA311] text-[16px] font-medium px-6 py-2 inline-block rounded">
            5 Nights / 6 Days
          </div>
          <p className="text-sm sm:text-[16px]">3 Night Ubud + 3 Night Kuta</p>
        </div>
      </div>

      <div
        className="sm:py-4 py-3"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 49, 49, 0.25), rgba(255, 145, 77, 0.25))",
        }}
      >
        <div className="mx-auto max-w-7xl flex items-center gap-x-3 sm:px-0 px-2">
          {[
            "Trip Summary",
            "Pricing Details",
            "Trip Invoice",
          ].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`sm:px-4 px-3 py-2 rounded transition-all duration-300 sm:text-base text-[14px] ${
                activeTab === tab
                  ? "bg-white text-[#FF3131] font-semibold shadow"
                  : "text-[#000] hover:text-[#FF3131]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-auto sm:max-w-6xl max-w-7xl sm:py-12 py-8 sm:px-0 px-4">
        {activeTab === "Trip Summary" && <TripSummary/>}
        {activeTab === "Pricing Details" && <PricingDetails/>}
        {/* {activeTab === "Trip Invoice" && <p>✅ Inclusions Content: What’s included in the package...</p>}
        {activeTab === "Reviews" && <p>⭐ Reviews Content: See what travelers say...</p>}
        {activeTab === "Terms & Condition" && <p>📜 Terms & Condition Content: Important details...</p>} */}
      </div>
    </div>
  );
};

export default TripDetailTopHeader;
