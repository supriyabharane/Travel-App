import React from "react";

const ItineraryCard = ({ dayNumber, overview, schedule }) => {
  return (
    <div className="w-full bg-white rounded-2xl border border-opacity-10 sm:p-6 p-4 relative">
      <div className="flex items-center gap-x-3 border-b pb-6 border-opacity-10 mb-6">
        <button className="px-6 py-3 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] sm:text-base text-sm">
          Day {dayNumber}
        </button>
        <h3 className="text-xl font-normal text-[#000929]">{overview}</h3>
      </div>

      <div className="relative">
        {schedule && (
          <div className="space-y-4">
            {['morning', 'afternoon', 'evening'].map((time, idx) => (
              schedule[time] && (
                <div key={idx} className="relative flex gap-x-4">
                  <div className="relative flex h-6 w-6 flex-none items-center justify-center bg-white">
                    <div className="h-5 w-5 bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-full flex items-center justify-center">
                      <div className="h-2 w-2 bg-white rounded-full" />
                    </div>
                  </div>
                  <div className="flex-auto">
                    <p className="text-[#4D525F] capitalize">{time}: {schedule[time]}</p>
                  </div>
                </div>
              )
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const DayWise = ({ itinerary = [] }) => {
  return (
    <div className="mx-auto max-w-7xl sm:space-y-8 space-y-6 sm:px-0 px-4 pb-8">
      <h2 className="sm:text-3xl text-2xl font-bold">Day wise Itinerary</h2>
      <div className="max-w-4xl space-y-4">
        {itinerary?.map((day) => (
          <ItineraryCard
            key={day.dayNumber}
            dayNumber={day.dayNumber}
            overview={day.overview}
            schedule={day.schedule}
          />
        ))}
      </div>
    </div>
  );
};

export default DayWise;