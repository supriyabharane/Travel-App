import React from "react";

const wallOfLoveTrips = [
  {
    id: 1,
    image: "/images/bali-trip.jpg",
    userTripPhoto: "/images/bali-trip.jpg",
    title: "Bali Trip",
    user: {
      name: "Amit Sharma",
      avatar: "/images/reviewer.jpg",
    },
  },
  {
    id: 2,
    image: "/images/bali-trip.jpg",
    userTripPhoto: "/images/bali-trip.jpg",
    title: "Bali Trip",
    user: {
      name: "Priya Singh",
      avatar: "/images/reviewer.jpg",
    },
  },
  {
    id: 3,
    image: "/images/bali-trip.jpg",
    userTripPhoto: "/images/bali-trip.jpg",
    title: "Bali Trip",
    user: {
      name: "Rahul Verma",
      avatar: "/images/reviewer.jpg",
    },
  },
  {
    id: 4,
    image: "/images/bali-trip.jpg",
    userTripPhoto: "/images/bali-trip.jpg",
    title: "Bali Trip",
    user: {
      name: "Sneha Patel",
      avatar: "/images/reviewer.jpg",
    },
  },
  {
    id: 5,
    image: "/images/bali-trip.jpg",
    userTripPhoto: "/images/bali-trip.jpg",
    title: "Bali Trip",
    user: {
      name: "Vikram Joshi",
      avatar: "/images/reviewer.jpg",
    },
  },
  {
    id: 6,
    image: "/images/bali-trip.jpg",
    userTripPhoto: "/images/bali-trip.jpg",
    title: "Bali Trip",
    user: {
      name: "Anjali Rao",
      avatar: "/images/reviewer.jpg",
    },
  },
];

export default function WallOfLoveSection() {
  return (
    <section className="bg-gradient-to-b from-[#ff9966] to-white py-12 px-4 rounded-3xl max-w-7xl mx-auto mt-0 mb-20">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Wall of love</h2>
      <p className="text-white text-center mb-8 opacity-80">Handpicked Getaways for Every Traveller</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {wallOfLoveTrips.map((trip) => (
          <div key={trip.id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center border-2 border-orange-200">
            <img src={trip.image} alt={trip.title} className="w-full h-56 object-cover rounded-t-xl" />
            <div className="p-4 w-full text-center">
              <div className="font-bold text-gray-800"># {trip.title}</div>
              <div className="text-sm text-gray-500 mt-1">{trip.user.name}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
