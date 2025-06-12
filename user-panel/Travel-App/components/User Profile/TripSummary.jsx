"use client";
import React from "react";

const TripSummary = () => {
  return (
    <>
      <div
        className="sm:p-6 p-4 rounded-xl shadow-sm"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 49, 49, 0.1), rgba(255, 145, 77, 0.1))",
        }}
      >
        <div className="pb-4 border-b border-[#E9EAEB]">
          <h2 className="text-[16px] font-medium text-[#4D525F] uppercase">
            Trip Summary
          </h2>
        </div>

        <div className="pt-6 space-y-3">
          <h3 className="text-lg font-semibold">Overview</h3>
          <div className="bg-white border border-[#032125] border-opacity-10 rounded-lg space-y-2.5 divide-y divide-[#032125] divide-opacity-10">
            <div className="sm:text-[16px] text-sm px-4 py-3">
              <p className="font-medium">Visiting:</p>
              <p className="text-[#4D525F]">
                Bali Thrills & Serenity: A Perfect Blend of Adventure and
                Relaxation
              </p>
            </div>
            <div className="sm:text-[16px] text-sm px-4 py-3">
              <p className="font-medium">Departing:</p>
              <p className="text-[#4D525F]">January 15, 2025 from Bengaluru</p>
            </div>
            <div className="sm:text-[16px] text-sm px-4 py-3">
              <p className="font-medium">Inclusions:</p>
              <p className="text-[#4D525F]">
                2 Hotels, 2 Transfers, 4 Activities, 1 Visa, 1 Insurance
              </p>
            </div>
            <div className="sm:text-[16px] text-sm px-4 py-3">
              <p className="font-medium">Travellers:</p>
              <p className="text-[#4D525F]">2 adults</p>
            </div>
          </div>
        </div>

        <div className="pt-6 space-y-3">
          <h3 className="text-lg font-semibold">Day-wise Summary</h3>
          <div className="bg-white border border-[#032125] border-opacity-10 rounded-lg space-y-2.5 ">
            {[1, 2, 3, 4, 5, 6, 7].map((day) => (
              <div key={day} className="flex items-center gap-x-4 px-4 py-3">
                <div className="h-6 w-6 bg-[#FEEDED] rounded-full flex items-center justify-center">
                  <div className="h-2.5 w-2.5 bg-[#FC4343] rounded-full" />
                </div>
                <div className="sm:text-[16px] text-sm">
                  <p className="font-medium">Day {day}</p>
                  <p className="text-[#4D525F]">
                    {day === 1
                      ? "Morning -> Arrive into Denpasar Bali and get transferred to your hotel. Rest of the day at leisure."
                      : day === 2
                      ? "Full day -> Ubud Wonders: Volcano, Waterfalls, Rice Fields, Monkeys & Exhilarating Swing Thrills."
                      : day === 3
                      ? "Full day -> Scenic Day Tour: Ulun Danu Beratan Temple & Handara Gate."
                      : day === 4
                      ? "Morning to noon -> Thrilling White Water Rafting Adventure at Ayung River, Ubud at Alaska Rafting."
                      : day === 5
                      ? "Full day -> West Nusa Penida (Angle Billabong, Crystal Bay, Broken Beach, Kelingking Beach)."
                      : day === 6
                      ? "Full day -> At Leisure."
                      : "Morning -> At Leisure , Noon to evening -> Checkout of hotel and take your flight back home."}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default TripSummary;
