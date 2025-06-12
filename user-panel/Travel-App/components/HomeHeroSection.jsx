"use client";

import { useState } from "react";
import { Tab } from "@headlessui/react";
import { FaCalendarAlt } from "react-icons/fa";
import DatePicker from "react-datepicker";

export default function HomeHeroSection() {
  const [selectedTab, setSelectedTab] = useState("Domestic");
  const [selectedDate, setSelectedDate] = useState(null);
  const [location, setLocation] = useState("Lonavala, Maharashtra");

  return (
    <div className="relative sm:h-[545px] h-[450px] flex flex-col justify-center items-center text-center ">
      
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero-bg1.jpg')" }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      
      <div className="relative z-10 sm:max-w-xl max-w-sm mx-auto text-white">
        <h1 className="text-4xl sm:text-5xl font-medium px-2">
          Explore the world like never before!
        </h1>
        <p className="sm:mt-6 mt-3 text-lg sm:max-w-xl max-w-xs mx-auto">
          A great platform to buy, sell, or even rent your properties without
          any commissions.
        </p>
      </div>

     
      <div className="absolute sm:-bottom-[92px] bottom-[-55%] w-full flex justify-center max-w-6xl mx-auto sm:px-0 px-4">
        <div className="relative z-10 flex flex-col space-y-0 sm:space-x-0 w-[100%] md:w-[80%] lg:w-[60%]">
          <div className="flex items-start">
            <Tab.Group>
              <Tab.List className="flex w-full sm:w-auto bg-white shadow-md rounded-t-lg">
                {["Domestic", "International"].map((tab) => (
                  <Tab
                    key={tab}
                    onClick={() => setSelectedTab(tab)}
                    className={({ selected }) =>
                      `px-6 py-4 text-sm font-medium focus:outline-none transition-all ${
                        selected
                          ? "text-red-600 border-b-2 border-red-600"
                          : "text-gray-500"
                      }`
                    }
                  >
                    {tab}
                  </Tab>
                ))}
              </Tab.List>
            </Tab.Group>
          </div>

          <div className="w-full grid sm:grid-cols-3 grid-cols-1 bg-white shadow-lg rounded-b-lg p-4 gap-4">
            <div className="flex flex-col items-start gap-y-1 ">
              <span className="text-xs text-gray-500">Location</span>
              <select
                className="font-semibold w-full text-black border border-gray-300 rounded-md px-3 py-3 cursor-pointer"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              >
                <option value="Lonavala, Maharashtra">
                  Lonavala, Maharashtra
                </option>
                <option value="Goa, India">Goa, India</option>
                <option value="Manali, Himachal">Manali, Himachal</option>
              </select>
            </div>

            {/* Date Picker */}
            <div className="flex flex-col items-start gap-y-1">
              <span className="text-xs text-gray-500">When</span>
              <div className="flex items-center border border-gray-300 rounded-md px-3 py-2.5 w-full">
                <FaCalendarAlt className="text-gray-500" />
                <DatePicker
                  selected={selectedDate}
                  onChange={(date) => setSelectedDate(date)}
                  placeholderText="Select Move-in Date"
                  className="ml-2 outline-none w-full"
                />
              </div>
            </div>

            {/* Browse Button */}
            <button className="px-6 py-3 text-white rounded-md bg-gradient-to-r from-[#FF3131] to-[#FF914D] transition-all hover:shadow-md">
              Browse Trip
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
