import { FaCarSide, FaCheck } from "react-icons/fa";
import { IoArrowForwardSharp } from "react-icons/io5";

export default function Transfers({ transfers = [] }) {
  if (!transfers || transfers.length === 0) {
    transfers = [
      {
        title: "Airport Transfer",
        date: "Fri, 17 Jan → Sun, 21 Jan",
        vehicleType: "Sedan",
        image: "/images/transfer-car.jpg",
        amenities: [
          "Air Conditioned",
          "Professional Driver",
          "Meet & Greet",
          "Flight Tracking"
        ],
        features: [
          "24/7 Support",
          "Free Cancellation",
          "Clean Vehicles",
          "Sanitized"
        ]
      }
    ];
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8 text-left">
        Transfers
      </h1>

      <div className="flex flex-col gap-6 max-w-4xl">
        {transfers.map((transfer, index) => (
          <div
            key={index}
            className="w-full bg-white rounded-2xl border border-[#032125] border-opacity-10 p-4 sm:p-[12px] space-y-4"
          >
            <div className="flex flex-col sm:flex-row justify-between gap-4">
              <div className="space-y-2">
                <h2 className="text-lg font-semibold text-gray-900">
                  {transfer.title}
                </h2>
                <div className="inline-flex items-center bg-gradient-to-r from-[#FF3131] to-[#FF914D] px-3 py-1 rounded-full text-white text-sm">
                  <span>{transfer.date}</span>
                </div>
              </div>
              <button
                className="flex items-center gap-2 self-start border border-gray-200 px-6 sm:px-10 py-2 rounded-lg hover:bg-gray-50 transition-colors text-sm"
              >
                <span className="text-gray-700">{transfer.vehicleType}</span>
                <IoArrowForwardSharp className="w-5 h-5 text-gray-600" />
              </button>
            </div>

            <div className="flex flex-col md:flex-row gap-4 p-4 bg-[#F8F8F8] rounded-xl">
              <div className="w-full md:w-[240px] flex-shrink-0">
                <img 
                  src={transfer.image} 
                  alt={transfer.title}
                  className="w-full h-[95px] object-cover rounded-xl"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?w=800&auto=format&fit=crop";
                  }}
                />
              </div>

              <div className="flex-1 px-2 sm:px-4">
                <div className="flex flex-wrap gap-3 sm:gap-6 mb-4">
                  {transfer.amenities.map((amenity, i) => (
                    <span
                      key={i}
                      className={`bg-[${[
                        "#31C48D40",
                        "#F5E9FE",
                        "#FFD4B9",
                        "#E3EEFF"
                      ][i % 4]}] px-2.5 py-1 sm:py-2 text-[10px] sm:text-xs text-[#1E1E1E] rounded-full flex items-center gap-x-1`}
                    >
                      <FaCarSide className="w-3 h-3 sm:w-4 sm:h-4" />
                      {amenity}
                    </span>
                  ))}
                </div>

                <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-x-6 text-xs text-[#0D0D0D]">
                  {transfer.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <FaCheck className="w-3 h-3 text-green-500" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}