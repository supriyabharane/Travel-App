import React from "react";

const VerticalTimeline = () => {
  return (
    <div className="relative flex flex-col items-center">
      <div className="w-3 h-3 bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-full"></div>
      <div className="w-0.5 sm:h-60 h-12 border-l-2 border-dashed border-[#FF507A]"></div>
    </div>
  );
};

const Summary = ({ itinerary = [] }) => {
  // Group itinerary items by 2 days
  const groupedItinerary = itinerary.reduce((acc, curr, idx) => {
    const groupIdx = Math.floor(idx / 2);
    if (!acc[groupIdx]) {
      acc[groupIdx] = {
        day: `Day ${idx + 1}-${idx + 2}`,
        location: curr.location || "Location",
        stay: curr.stay || "Hotel Stay",
        travelGuide: `${curr.location || 'Travel'} Guide`,
        schedule: []
      };
    }
    acc[groupIdx].schedule.push({
      date: curr.date,
      date2: curr.date2,
      time: curr.schedule?.morning ? "Morning" : curr.schedule?.afternoon ? "Afternoon" : "Evening",
      activity: curr.overview,
      details: curr.schedule?.morning || curr.schedule?.afternoon || curr.schedule?.evening
    });
    return acc;
  }, []);

  return (
    <div className="py-10">
      <div className="max-w-7xl mx-auto sm:px-0 px-4">
        <h2 className="sm:text-3xl text-2xl font-bold text-left">
          Trip Summary
        </h2>

        <div className="relative sm:pt-16 pt-6">
          {groupedItinerary.map((trip, index) => (
            <div
              key={index}
              className="relative flex flex-col sm:flex-row items-start gap-y-2.5 gap-x-6 sm:py-0 py-2.5"
            >
              <div className="w-24 h-10 flex items-center justify-center text-white font-semibold text-sm rounded-full bg-gradient-to-r from-red-500 to-orange-400">
                {trip.day}
              </div>

              <VerticalTimeline />

              <div className="flex-1 rounded-xl border border-[#FF507A] border-opacity-25 max-w-3xl">
                <div className="relative rounded-t-xl overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#FF3131] to-[#FF914D] opacity-25"></div>
                  <div className="relative z-10 flex items-center justify-between px-4 sm:px-6">
                    <div className="flex items-center space-x-2">
                      <span className="py-6 px-6 sm:px-8 flex items-center justify-center bg-[#FFDCE4]">
                        <svg
                          width="20"
                          height="21"
                          viewBox="0 0 20 21"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 10.63C20 16.1529 15.5228 20.63 10 20.63H0.993697C0.110179 20.63 -0.332289 19.5529 0.292453 18.9229L2.2495 16.9495C0.843343 15.227 1.21409e-08 13.027 1.21409e-08 10.63C1.21409e-08 5.10716 4.47715 0.630005 10 0.630005C15.5228 0.630005 20 5.10716 20 10.63ZM13.2071 7.4229C13.5976 7.81342 13.5976 8.44659 13.2071 8.83711L11.4142 10.63L13.2071 12.4229C13.5976 12.8134 13.5976 13.4466 13.2071 13.8371C12.8166 14.2276 12.1834 14.2276 11.7929 13.8371L10 12.0442L8.20711 13.8371C7.81658 14.2276 7.18342 14.2276 6.79289 13.8371C6.40237 13.4466 6.40237 12.8134 6.79289 12.4229L8.58579 10.63L6.79289 8.83711C6.40237 8.44659 6.40237 7.81342 6.79289 7.4229C7.18342 7.03237 7.81658 7.03237 8.20711 7.4229L10 9.21579L11.7929 7.4229C12.1834 7.03237 12.8166 7.03237 13.2071 7.4229Z"
                            fill="#FF507A"
                          />
                        </svg>
                      </span>
                      <div className="space-y-1">
                        <h3 className="text-lg text-[#0A0A0A] font-normal">
                          {trip.location}
                        </h3>
                        <p className="text-xs text-[#0A0A0A]">{trip.stay}</p>
                      </div>
                    </div>
                    <button className="text-sm text-[#21242C] font-normal underline">
                      {trip.travelGuide}
                    </button>
                  </div>
                </div>

                <div className="px-4 sm:px-8 space-y-3">
                  {trip.schedule.map((scheduleItem, idx) => (
                    <div
                      key={idx}
                      className={`flex flex-col sm:flex-row sm:items-center items-start space-y-2 sm:space-y-0 sm:space-x-4 py-3 ${
                        idx % 2 === 0 ? "border-b" : ""
                      } border-dashed border-[#FF507A]`}
                    >
                      <div className="text-sm text-center sm:text-left">
                        {scheduleItem.date && (
                          <div className="space-y-1">
                            <p className="font-medium text-[#0A0A0A]">
                              {scheduleItem.date}
                            </p>
                            <p className="text-[#777777] font-medium">
                              {scheduleItem.date2}
                            </p>
                          </div>
                        )}
                      </div>

                      <div className="flex-1 flex items-center gap-x-2 sm:gap-x-4">
                        <img
                          src="/icons/morning.png"
                          alt="icon"
                          className="w-8 sm:w-10 h-8 sm:h-10 rounded-full object-cover"
                        />
                        <div className="space-y-1">
                          <p className="text-xs sm:text-sm text-[#0A0A0A] font-medium">
                            {scheduleItem.time}
                          </p>
                          <p className="text-[#001619] text-[10px] sm:text-xs">
                            {scheduleItem.activity}
                          </p>
                          {scheduleItem.details && (
                            <p className="text-[#001619] text-[10px] sm:text-xs">
                              {scheduleItem.details}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}

          <div className="flex flex-col sm:flex-row items-start gap-x-6">
            <div className="w-24 h-10 flex items-center justify-center text-white font-semibold text-sm rounded-full bg-gradient-to-r from-red-500 to-orange-400">
              Trip Ends
            </div>
            <div className="w-3 h-3 bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;