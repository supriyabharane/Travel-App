"use client";

import { useState, useEffect } from "react";
import { FiCheckCircle } from "react-icons/fi";
import { BsCalendar2WeekFill } from "react-icons/bs";

const TripItinerary = ({ formData, setFormData }) => {
  const [selectedDay, setSelectedDay] = useState(1);
  const [days, setDays] = useState([]);

  useEffect(() => {
    if (formData.overview.duration?.days) {
      const newDays = Array.from({ length: formData.overview.duration.days }, (_, i) => ({
        id: i + 1,
        label: `Day ${i + 1}`,
        completed: false
      }));
      setDays(newDays);
      
      // Initialize itinerary data for all days
      const newItineraryData = {};
      newDays.forEach(day => {
        newItineraryData[day.id] = {
          overview: "",
          morning: "",
          afternoon: "",
          evening: ""
        };
      });
      
      setFormData(prev => ({
        ...prev,
        itinerary: newItineraryData
      }));
    }
  }, [formData.overview.duration?.days]);

  const handleChange = (dayId, field, value) => {
    setFormData(prev => ({
      ...prev,
      itinerary: {
        ...prev.itinerary,
        [dayId]: {
          ...prev.itinerary[dayId],
          [field]: value
        }
      }
    }));

    // Mark day as completed if all fields are filled
    const dayData = formData.itinerary[dayId];
    const isCompleted = dayData && Object.values(dayData).every(value => value.trim() !== "");
    setDays(prev => prev.map(day => 
      day.id === dayId ? { ...day, completed: isCompleted } : day
    ));
  };

  return (
    <div className="bg-[#F7F7F7] border border-[#0000000D] sm:p-6 p-4 rounded-xl flex flex-col lg:flex-row gap-6">
      {/* Sidebar (Days List) */}
      <div className="w-full lg:w-1/4 bg-white p-[15px] rounded-xl space-y-[24px]">
        <div className="pb-4 border-b border-[#E9EAEB]">
          <h2 className="text-xs font-normal text-[#00000080] uppercase">
            Trip Overview
          </h2>
        </div>
        <div className="space-y-3">
          {days.map((day) => (
            <button
              key={day.id}
              className={`flex items-center justify-between w-full p-[10px] rounded-md transition-all text-[#1B1B1B] ${
                selectedDay === day.id
                  ? "bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white"
                  : "hover:bg-[#0000000D]"
              }`}
              onClick={() => setSelectedDay(day.id)}
            >
              <span className="flex items-center gap-2">
                <BsCalendar2WeekFill className="text-sm" />
                {day.label}
              </span>
              {day.completed && <FiCheckCircle className="text-white text-sm" />}
            </button>
          ))}
        </div>
      </div>

      {/* Itinerary Details Section */}
      <div className="w-full lg:w-3/4">
        <h2 className="text-[16px] font-normal">
          {`Day-${selectedDay} Overview`}
        </h2>

        <div className="space-y-[24px]">
          <textarea
            className="w-full p-3 mt-2 border border-[#0321251A] rounded-xl outline-none text-sm text-[#00000080] h-40 md:h-60 resize-none"
            placeholder="Type Here..."
            value={formData.itinerary[selectedDay]?.overview || ""}
            onChange={(e) => handleChange(selectedDay, "overview", e.target.value)}
          ></textarea>

          {/* Morning, Afternoon, Evening Inputs */}
          <div className="space-y-[24px]">
            {["Morning", "Afternoon", "Evening"].map((time) => (
              <div key={time} className="">
                <label className="block text-[16px] font-normal">{time}</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 mt-2 border border-[#0321251A] rounded-lg outline-none text-sm text-[#00000080]"
                  placeholder="Type here..."
                  value={formData.itinerary[selectedDay]?.[time.toLowerCase()] || ""}
                  onChange={(e) =>
                    handleChange(selectedDay, time.toLowerCase(), e.target.value)
                  }
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TripItinerary;