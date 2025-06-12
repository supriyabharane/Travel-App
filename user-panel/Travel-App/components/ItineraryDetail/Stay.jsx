import { FaStar } from "react-icons/fa";

export default function Stay({ stays = [] }) {
  return (
    <div className="mx-auto max-w-7xl sm:py-20 py-10 sm:space-y-8 space-y-6 sm:px-0 px-4">
      <h1 className="sm:text-3xl text-2xl font-bold">Stays</h1>
      <div className="flex flex-wrap gap-6">
        {stays.map((stay, index) => (
          <div key={index} className="sm:max-w-[400px]">
            <div className="w-full bg-white rounded-2xl border border-[#032125] border-opacity-10 sm:p-[12px] p-2 space-y-2">
              <h2 className="text-[20px] font-medium text-[#000929]">{stay.name}</h2>
              <span className="inline-block bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white px-2.5 py-2 rounded-full text-xs">
                {stay.nights} Nights
              </span>
              <div className="px-2.5 pt-3 space-y-2.5 bg-[#F8F8F8] rounded-xl">
                <div className="w-full h-40 bg-black rounded-xl">
                  {stay.images?.[0] && (
                    <img
                      src={stay.images[0]}
                      alt={stay.name}
                      className="w-full h-full object-cover rounded-xl"
                      onError={(e) => {
                        e.target.src = "https://images.pexels.com/photos/1450354/pexels-photo-1450354.jpeg";
                      }}
                    />
                  )}
                </div>
                <div className="flex justify-between items-center">
                  <h3 className="sm:text-3xl text-xl text-[#080808] font-medium">{stay.hotelType}</h3>
                  <div className="flex items-center text-[#878787] gap-x-2 px-3 py-1.5 rounded-full bg-white">
                    <FaStar className="w-4 h-4 text-yellow-500" />
                    <span className="text-xs">Hotel</span>
                  </div>
                </div>
                {stay.amenities && (
                  <div className="flex flex-wrap gap-2 py-2">
                    {stay.amenities.map((amenity, i) => (
                      <span key={i} className="bg-[#31C48D] bg-opacity-40 sm:px-2.5 px-2 py-2 text-[10px] text-[#1E1E1E] rounded-full">
                        {amenity}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}