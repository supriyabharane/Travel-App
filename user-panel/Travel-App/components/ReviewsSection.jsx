import React from "react";

const reviews = [
  {
    id: 1,
    name: "Amit Sharma",
    avatar: "/images/reviewer.jpg",
    review:
      "Absolutely loved the experience! The itinerary was perfectly curated and the support team was always available. Highly recommended!",
    location: "Delhi, India",
  },
  {
    id: 2,
    name: "Priya Singh",
    avatar: "/images/reviewer.jpg",
    review:
      "Great value for money. The hotels and transfers were seamless. Will book again for my next trip!",
    location: "Mumbai, India",
  },
  {
    id: 3,
    name: "Rahul Verma",
    avatar: "/images/reviewer.jpg",
    review:
      "The best travel company I have booked with. Flexible options and amazing destinations!",
    location: "Bangalore, India",
  },
  {
    id: 4,
    name: "Sneha Patel",
    avatar: "/images/reviewer.jpg",
    review:
      "Loved every bit of our holiday. The team made sure everything was perfect. Thank you!",
    location: "Ahmedabad, India",
  },
];

export default function ReviewsSection() {
  // For demo, just show the first review. Carousel logic can be added later.
  const review = reviews[0];
  return (
    <section className="bg-gradient-to-br from-[#ff5e62] to-[#ff9966] py-16 px-4 rounded-3xl max-w-7xl mx-auto mt-20 mb-0">
      <h2 className="text-3xl font-bold text-white text-center mb-2">Our Reviews</h2>
      <p className="text-white text-center mb-8 opacity-80">Handpicked Getaways for Every Traveller</p>
      <div className="flex flex-col md:flex-row items-center justify-center gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <div className="text-white text-lg italic mb-4 max-w-lg text-center md:text-left">
            “I finally felt free — like I could actually breathe again.”
          </div>
          <div className="flex items-center gap-4">
            <img src={review.avatar} alt={review.name} className="w-14 h-14 rounded-full border-4 border-white" />
            <div>
              <div className="font-bold text-white">WANDERWOMAN_36</div>
              <div className="text-xs text-white/70">Bali Trip</div>
            </div>
          </div>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <div className="bg-white rounded-xl shadow-lg w-80 h-48 flex items-center justify-center text-gray-400 text-2xl">
            {/* Carousel placeholder */}
            &lt;Review Carousel Here&gt;
          </div>
        </div>
      </div>
    </section>
  );
}
