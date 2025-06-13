import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
	{
		id: 1,
		name: "Amit Sharma",
		avatar: "/images/reviewer.jpg",
		rating: 5,
		review:
			"Absolutely loved the experience! The itinerary was perfectly curated and the support team was always available. Highly recommended!",
		location: "Delhi, India",
	},
	{
		id: 2,
		name: "Priya Singh",
		avatar: "/images/reviewer.jpg",
		rating: 4,
		review:
			"Great value for money. The hotels and transfers were seamless. Will book again for my next trip!",
		location: "Mumbai, India",
	},
	{
		id: 3,
		name: "Rahul Verma",
		avatar: "/images/reviewer.jpg",
		rating: 5,
		review:
			"The best travel company I have booked with. Flexible options and amazing destinations!",
		location: "Bangalore, India",
	},
	{
		id: 4,
		name: "Sneha Patel",
		avatar: "/images/reviewer.jpg",
		rating: 5,
		review:
			"Loved every bit of our holiday. The team made sure everything was perfect. Thank you!",
		location: "Ahmedabad, India",
	},
];

export default function ReviewsAndWall() {
	return (
		<section className="relative max-w-7xl mx-auto py-20 px-4 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] rounded-3xl shadow-2xl border border-blue-100 overflow-visible mt-20">
			{/* Decorative background blob */}
			<div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-[#FF507A]/30 to-[#6C63FF]/20 rounded-full blur-3xl opacity-60 z-0" />
			{/* Section Heading */}
			<h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] drop-shadow-lg tracking-tight text-center mb-4 relative z-10">
				Reviews & Wall of Love
			</h2>
			<p className="text-lg text-gray-700 font-medium text-center mb-10 relative z-10">
				Hear from our happy travelers!
			</p>
			{/* Reviews Grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative z-10">
				{reviews.map((review) => (
					<div
						key={review.id}
						className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all flex flex-col group hover:-translate-y-2 hover:scale-105 duration-300 p-6"
					>
						<div className="flex items-center gap-4 mb-4">
							<img
								src={review.avatar}
								alt={review.name}
								className="w-14 h-14 rounded-full object-cover border-4 border-gradient-to-br from-[#FF507A] to-[#6C63FF] shadow-md"
							/>
							<div>
								<h3 className="text-lg font-bold text-gray-900 group-hover:text-[#FF507A] transition-colors">
									{review.name}
								</h3>
								<span className="text-xs text-gray-500">
									{review.location}
								</span>
							</div>
						</div>
						<div className="flex items-center mb-3">
							{[...Array(review.rating)].map((_, i) => (
								<FaStar key={i} className="text-yellow-400 mr-1" />
							))}
							{review.rating < 5 &&
								[...Array(5 - review.rating)].map((_, i) => (
									<FaStar key={i} className="text-gray-300 mr-1" />
								))}
							<span className="ml-2 bg-gradient-to-r from-[#FF507A] to-[#FF914D] text-white text-xs font-bold px-3 py-1 rounded-full shadow border border-white/30">
								{review.rating}.0
							</span>
						</div>
						<p className="text-base text-gray-700 mb-4 flex-1 leading-relaxed">
							"{review.review}"
						</p>
					</div>
				))}
			</div>
			{/* Soft divider */}
			<div className="w-full h-12 mt-20 mb-10 bg-gradient-to-r from-[#FF507A]/10 via-[#6C63FF]/10 to-[#FF914D]/10 rounded-full blur-md" />
			{/* Wall of Love - Call to Action */}
			<div className="flex flex-col items-center mt-10 relative z-10">
				<h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] mb-2">
					Want to share your experience?
				</h3>
				<button className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-base font-bold px-8 py-3 rounded-lg shadow-lg hover:from-[#FF507A] hover:to-[#FF914D] transition-colors">
					Leave a Review
				</button>
			</div>
		</section>
	);
}