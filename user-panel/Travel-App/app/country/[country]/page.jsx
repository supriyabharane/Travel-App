"use client";
import { useParams } from "next/navigation";
import HorizontalPackageCard from "../../../components/HorizontalPackageCard";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import Link from "next/link";

// Demo data for multiple countries
const allTrips = {
  india: [
    {
      _id: "in1",
      title: "Golden Triangle Tour",
      images: [{ url: "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg" }],
      pricing: { valuePack: "30,000" },
      destinationType: "Asia",
      destinationCountry: "India",
    },
  ],
  vietnam: [
    {
      _id: "vn1",
      title: "The Ultimate 7-Day Vietnam Tour Package",
      images: [{ url: "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg" }],
      pricing: { valuePack: "45,000" },
      destinationType: "Asia",
      destinationCountry: "Vietnam",
    },
  ],
  // ...add more countries
};

const blogPosts = [
  {
    id: 1,
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    title: "Reflections on 5 Months of Travel: Time to Hang",
    snippet: "Discover the following about this city’s offerings, from culture to cuisine, and get ready to explore.",
    date: "June 2025",
  },
  {
    id: 2,
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    title: "Reflections on 5 Months of Travel: Time to Hang",
    snippet: "Discover the following about this city’s offerings, from culture to cuisine, and get ready to explore.",
    date: "June 2025",
  },
  {
    id: 3,
    image: "https://images.pexels.com/photos/753626/pexels-photo-753626.jpeg",
    title: "Reflections on 5 Months of Travel: Time to Hang",
    snippet: "Discover the following about this city’s offerings, from culture to cuisine, and get ready to explore.",
    date: "June 2025",
  },
];

const otherCountries = [
  {
    id: 1,
    name: "ICELAND.",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    offer: "Up to 50% off",
  },
  {
    id: 2,
    name: "SEOUL",
    image: "https://images.pexels.com/photos/237211/pexels-photo-237211.jpeg",
  },
  {
    id: 3,
    name: "CUBA",
    image: "https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg",
    offer: "Up to 50% off",
  },
];

const reviews = [
  {
    id: 1,
    user: "VIKASHMANI, 35",
    avatar: "/images/user-avatar.png",
    country: "Bali",
    review: "I finally felt free — like I could actually breathe again. The trip was perfectly organized and the support was amazing!",
  },
];

// Add this for Asia section links
const asiaCountries = [
  { name: "India", slug: "india" },
  { name: "Vietnam", slug: "vietnam" },
  // Add more countries as needed
];

const europeCountries = [
  { name: "France", slug: "france" },
  { name: "Germany", slug: "germany" },
  // Add more European countries as needed
];
const americaCountries = [
  { name: "USA", slug: "usa" },
  { name: "Brazil", slug: "brazil" },
  // Add more American countries as needed
];

const whyChooseUsItems = [
  {
    title: "Expert Guides",
    description: "Our guides are locals with extensive knowledge of the area.",
    icon: <i className="fas fa-user-tie fa-2x text-[#FF507A]"></i>,
  },
  {
    title: "Best Price Guarantee",
    description: "We offer the best prices, guaranteed.",
    icon: <i className="fas fa-tag fa-2x text-[#FF507A]"></i>,
  },
  {
    title: "24/7 Support",
    description: "We're here to help you anytime, anywhere.",
    icon: <i className="fas fa-headset fa-2x text-[#FF507A]"></i>,
  },
  {
    title: "Sustainable Travel",
    description: "We promote eco-friendly travel practices.",
    icon: <i className="fas fa-leaf fa-2x text-[#FF507A]"></i>,
  },
];

export default function CountryPage() {
  const params = useParams();
  const country = params.country; // e.g., "india" or "vietnam"
  const displayTrips = allTrips[country] || [];

  return (
    <section className="max-w-7xl mx-auto py-0 px-4">
      {/* 1. Header/Banner */}
      <div className="mb-8">
        <div className="w-full h-64 bg-gray-200 flex items-center justify-center text-3xl font-bold text-white" style={{
          backgroundImage: `url('https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}>
          Country Images
        </div>
      </div>

      {/* 2. Top Packages */}
      <div className="mb-12">
        <h2 className="text-2xl font-bold mb-2">Top Packages</h2>
        <p className="text-gray-700 mb-4">Handpicked Getaways for Every Traveler</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {displayTrips.map((trip) => (
            <div
              key={trip._id}
              className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow hover:shadow-lg transition flex flex-col"
            >
              <div className="relative">
                <img
                  src={trip.images[0]?.url || "https://images.pexels.com/photos/3601420/pexels-photo-3601420.jpeg"}
                  alt={trip.title}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-3 right-3 bg-white rounded-full p-2 shadow text-[#FF507A]">
                  <FaHeart />
                </span>
                <span className="absolute top-3 left-3 bg-[#FF914D] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  Starts: INR {trip.pricing?.valuePack || "Contact"}
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">{trip.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-2">
                  <span className="flex items-center gap-1">
                    <FaPlaneDeparture className="text-[#FF507A]" />
                    {trip.destinationType}
                  </span>
                  <span className="flex items-center gap-1">
                    <MdOutlineKingBed className="text-[#FF507A]" />
                    {trip.destinationCountry}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                  <span>Delhi Airport</span>
                  <span>•</span>
                  <span>Visa</span>
                </div>
                <div className="text-xs text-gray-500 mb-4">
                  INCLUDES: Accommodation, Speed boat Transfer, Green Tax, 24x7 online support
                </div>
                <button className="mt-auto bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-sm font-semibold px-4 py-2 rounded-lg">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. All Packages (horizontal cards + filters) */}
      <div className="mb-16 flex gap-8">
        {/* Filters Sidebar */}
        <aside className="w-64 bg-white rounded-xl p-6 border border-gray-200 h-fit">
          <h3 className="text-xl font-bold mb-6">All Packages</h3>
          <div className="mb-8">
            <h4 className="font-semibold mb-2">Price</h4>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF507A]" />
                  <span>Below ₹ 100k</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF507A]" />
                  <span>Below ₹ 150k</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF507A]" />
                  <span>Below ₹ 200k</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF507A]" />
                  <span>Above ₹ 200k</span>
                </label>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Star Rating</h4>
            <ul className="space-y-2">
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF507A]" />
                  <span>3 Star</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF507A]" />
                  <span>4 Star</span>
                </label>
              </li>
              <li>
                <label className="flex items-center gap-2">
                  <input type="checkbox" className="accent-[#FF507A]" />
                  <span>5 Star</span>
                </label>
              </li>
            </ul>
          </div>
        </aside>
        {/* Horizontal Cards */}
        <div className="flex-1 space-y-6">
          {displayTrips.map((trip, idx) => (
            <HorizontalPackageCard key={trip._id + idx} trip={trip} />
          ))}
        </div>
      </div>

      {/* 4. Why Choose Us */}
      <div className="space-y-6">
        <h2 className="sm:text-3xl text-2xl font-bold text-[#0A0A0A]">
          Why Choose Us?
        </h2>
        <div className="grid sm:grid-cols-2 gap-6 bg-[#F8F8F8] p-6 rounded-xl">
          {whyChooseUsItems.map((item, index) => (
            <div key={index} className="flex items-start gap-4 p-4 bg-white rounded-lg">
              <div className="flex-shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Blogs about country */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Blogs about country</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {blogPosts.map((blog) => (
            <div key={blog.id} className="bg-white rounded-xl shadow p-4">
              <img src={blog.image} alt={blog.title} className="w-full h-40 object-cover rounded-lg mb-4" />
              <h3 className="font-semibold text-lg mb-2">{blog.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{blog.snippet}</p>
              <span className="text-xs text-gray-400">{blog.date}</span>
            </div>
          ))}
        </div>
      </div>

      {/* 6. Other Countries */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Other Countries</h2>
        <p className="text-gray-700 mb-6">Handpicked Getaways for Every Traveler</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {otherCountries.map((country) => (
            <div key={country.id} className="relative rounded-xl overflow-hidden shadow-lg">
              <img src={country.image} alt={country.name} className="w-full h-48 object-cover" />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                <h3 className="text-white text-xl font-bold">{country.name}</h3>
                <button className="mt-2 bg-white text-black px-4 py-1 rounded">Explore</button>
              </div>
              {country.offer && (
                <span className="absolute top-3 left-3 bg-[#FF914D] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
                  {country.offer}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 7. Our Reviews */}
      <div className="mt-16 mb-16">
        <h2 className="text-2xl font-bold mb-4">Our Reviews</h2>
        <p className="text-gray-700 mb-6">Handpicked Getaways for Every Traveler</p>
        <div className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-xl p-8 flex flex-col md:flex-row items-center gap-8 shadow-lg">
          <div className="flex-shrink-0">
            <img
              src={reviews[0].avatar}
              alt={reviews[0].user}
              className="w-20 h-20 rounded-full border-4 border-white shadow"
            />
            <div className="mt-2 text-white font-semibold text-center">{reviews[0].user}</div>
            <div className="text-xs text-orange-100 text-center">Travelled to {reviews[0].country}</div>
          </div>
          <div className="flex-1">
            <p className="text-white text-lg font-semibold mb-2">
              “{reviews[0].review}”
            </p>
            <div className="flex gap-2 mt-4">
              <button className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center hover:bg-white/50 transition">&lt;</button>
              <button className="w-8 h-8 rounded-full bg-white/30 text-white flex items-center justify-center hover:bg-white/50 transition">&gt;</button>
            </div>
          </div>
        </div>
      </div>

      {/* Asia Section - Example */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Asia Trips</h2>
        <ul className="list-disc pl-6 space-y-2">
          {asiaCountries.map((country) => (
            <li key={country.slug} className="text-blue-600 hover:underline">
              <Link href={`/country/${country.slug}`}>
                {country.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Europe Section */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Europe Trips</h2>
        <ul className="list-disc pl-6 space-y-2">
          {europeCountries.map((country) => (
            <li key={country.slug} className="text-blue-600 hover:underline">
              <Link href={`/country/${country.slug}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      </div>

      {/* America Section */}
      <div className="mt-16 mb-16">
        <h2 className="text-2xl font-bold mb-4">America Trips</h2>
        <ul className="list-disc pl-6 space-y-2">
          {americaCountries.map((country) => (
            <li key={country.slug} className="text-blue-600 hover:underline">
              <Link href={`/country/${country.slug}`}>{country.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}