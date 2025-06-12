import { FaHeart } from "react-icons/fa";

export default function HorizontalPackageCard({ trip }) {
  return (
    <div className="flex bg-white border border-[#FF914D]/30 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition">
      <img
        src={trip.images[0]?.url || "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg"}
        alt={trip.title}
        className="w-72 h-48 object-cover"
      />
      <div className="flex-1 p-6 flex flex-col">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-xl font-bold">{trip.title}</h3>
          <span className="text-[#FF507A] text-lg cursor-pointer">
            <FaHeart />
          </span>
        </div>
        {/* Price badges */}
        <div className="flex gap-3 mb-2">
          <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold">₹ 100,000 (3N)</span>
          <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-xs font-semibold">₹ 150,000 (4N)</span>
          <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold">₹ 200,000 (5N)</span>
        </div>
        <div className="text-xs text-gray-500 mb-2">
          INCLUDES: Accommodation, Speed boat Transfer, Green Tax, 24x7 online support
        </div>
        <div className="flex items-end justify-between mt-auto">
          <span className="text-lg font-bold text-gray-800">
            ₹{trip.pricing?.valuePack || "Contact"} <span className="text-xs font-normal text-gray-500">/ couple</span>
          </span>
          <button className="border border-[#FF914D] text-[#FF914D] font-semibold px-6 py-2 rounded-lg hover:bg-[#FF914D] hover:text-white transition">
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}