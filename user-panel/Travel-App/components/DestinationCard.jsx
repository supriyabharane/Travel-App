import { FaRegHeart } from "react-icons/fa";

export default function DestinationCard({ destination }) {
  return (
    <div className="bg-white border border-[#E6E6E6] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
      <div className="relative">
        {/* Image */}
        <img
          src={destination.image}
          alt={destination.title}
          className="w-full h-40 object-cover"
        />
        {/* Price Badge */}
        <span className="absolute top-3 right-3 bg-[#FFB672] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
          Starts INR 45,000
        </span>
      </div>
      <div className="p-4">
        {/* Title and Heart Icon in one row */}
        <div className="flex items-center justify-between mb-2">
  <h3 className="font-semibold text-[18px] leading-snug text-black">
    The Ultimate 7-Day Vietnam Tour Package
  </h3>
  <FaRegHeart className="text-[#FF6B6B] text-xl ml-2 cursor-pointer" />
</div>
        {/* Info Row */}
        <div className="flex items-center text-black text-sm mb-1 gap-4">
          <span className="flex items-center gap-1">
            <img src="/icons/bed.png" alt="Duration" className="w-4 h-4" />
            {destination.duration || "6N/7D"}
          </span>
          <span className="flex items-center gap-1">
            <img src="/icons/date.png" alt="Date" className="w-4 h-4" />
            {destination.date || "12 Jan"}
          </span>
        </div>
        <div className="flex items-center text-black text-sm mb-1 gap-4">
          <span className="flex items-center gap-1">
            <img src="/icons/airport.png" alt="Airport" className="w-4 h-4" />
            {destination.airport || "Delhi Airport"}
          </span>
          <span className="flex items-center gap-1">
            <img src="/icons/visa.png" alt="Visa" className="w-4 h-4" />
            {destination.visa || "Visa"}
          </span>
        </div>
        {/* Divider line above INCLUDES */}
        <hr className="my-2 border-gray-200" />
        {/* Includes */}
        <div>
          <div className="text-[11px] text-gray-400 font-semibold mb-1">INCLUDES:</div>
          <div className="text-[11px] text-gray-500 leading-tight">
            {destination.includes || "Accomodation, Speed boat Transfer, Green Tax, 24x7 online support"}
          </div>
        </div>
      </div>
    </div>
  );
}