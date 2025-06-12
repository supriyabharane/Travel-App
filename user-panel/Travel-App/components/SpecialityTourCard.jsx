const specialityTours = [
  {
    id: 1,
    image: "/images/special1.jpg",
    title: "ICELAND.",
    duration: "6N/7D",
    date: "12 Jan",
    airport: "Delhi Airport",
    visa: "Visa",
    includes: "Accommodation, Speed boat Transfer, Green Tax, 24x7 online support",
  },
  {
    id: 2,
    image: "/images/special2.jpg",
    title: "Explore our Seoul.",
    duration: "5N/6D",
    date: "18 Feb",
    airport: "Mumbai Airport",
    visa: "Visa",
    includes: "Accommodation, Transfers, City Tour, 24x7 support",
  },
  {
    id: 3,
    image: "/images/special3.jpg",
    title: "CUBA.",
    duration: "7N/8D",
    date: "25 Mar",
    airport: "Chennai Airport",
    visa: "Visa",
    includes: "Accommodation, Local Guide, Green Tax, 24x7 support",
  },
  // Added 3 more cards
  {
    id: 4,
    image: "/images/special4.jpg",
    title: "BALI.",
    duration: "5N/6D",
    date: "10 Apr",
    airport: "Delhi Airport",
    visa: "Visa",
    includes: "Accommodation, Transfers, Green Tax, 24x7 support",
  },
  {
    id: 5,
    image: "/images/special5.jpg",
    title: "JAPAN SPRING.",
    duration: "8N/9D",
    date: "15 May",
    airport: "Bangalore Airport",
    visa: "Visa",
    includes: "Accommodation, Bullet Train, City Tour, 24x7 support",
  },
  {
    id: 6,
    image: "/images/special6.jpg",
    title: "EGYPT MYSTERY.",
    duration: "6N/7D",
    date: "22 Jun",
    airport: "Kolkata Airport",
    visa: "Visa",
    includes: "Accommodation, Nile Cruise, Green Tax, 24x7 support",
  },
];

function SpecialityTourCard({ tour }) {
  return (
    <div className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col group hover:-translate-y-2 hover:scale-105 duration-300 relative">
      <div className="relative">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-48 object-cover rounded-t-2xl shadow-md group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-gradient-to-r from-[#FF507A] to-[#FF914D] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
          {tour.date}
        </span>
      </div>
      <div className="p-5 flex-1 flex flex-col">
        <h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#FF507A] transition-colors min-h-[56px]">{tour.title}</h3>
        <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
          <span className="flex items-center gap-1">
            <img src="/icons/bed.png" alt="Duration" className="w-4 h-4" />
            {tour.duration}
          </span>
          <span className="flex items-center gap-1">
            <img src="/icons/airport.png" alt="Airport" className="w-4 h-4" />
            {tour.airport}
          </span>
        </div>
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-2">
          <span className="flex items-center gap-1">
            <img src="/icons/visa.png" alt="Visa" className="w-4 h-4" />
            {tour.visa}
          </span>
        </div>
        <div className="w-full border-t border-gray-200 my-2"></div>
        <div className="text-xs text-gray-500 mb-4 min-h-[40px]">
          INCLUDES: {tour.includes}
        </div>
        <button className="mt-auto bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:from-[#FF507A] hover:to-[#FF914D] transition-colors">
          View Details
        </button>
      </div>
    </div>
  );
}

export default SpecialityTourCard;