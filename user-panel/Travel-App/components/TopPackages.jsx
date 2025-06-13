"use client";
import React from "react";
import { FaPlaneDeparture } from "react-icons/fa";
import { MdOutlineKingBed } from "react-icons/md";
import { FaHeart } from "react-icons/fa";
import HorizontalPackageCard from "./HorizontalPackageCard";

// Demo data for fallback
const demoTrips = [
	{
		_id: "demo1",
		title: "The Ultimate 7-Day Vietnam Tour Package",
		images: [{ url: "public/icons/sample-image.jpg" }],
		pricing: { valuePack: "45,000" },
		destinationType: "Asia",
		destinationCountry: "Vietnam",
	},
	{
		_id: "demo2",
		title: "The Ultimate 7-Day Vietnam Tour Package",
		images: [{ url: "public/icons/sample-image.jpg" }],
		pricing: { valuePack: "45,000" },
		destinationType: "Asia",
		destinationCountry: "Vietnam",
	},
	{
		_id: "demo3",
		title: "The Ultimate 7-Day Vietnam Tour Package",
		images: [{ url: "public/icons/sample-image.jpg" }],
		pricing: { valuePack: "45,000" },
		destinationType: "Asia",
		destinationCountry: "Vietnam",
	},
	{
		_id: "demo4",
		title: "The Ultimate 7-Day Vietnam Tour Package",
		images: [{ url: "public/icons/sample-image.jpg" }],
		pricing: { valuePack: "45,000" },
		destinationType: "Asia",
		destinationCountry: "Vietnam",
	},
];

const whyChooseUsItems = [
	{
		icon: <FaHeart className="text-[#FF507A] h-6 w-6" />,
		title: "Personalized Experiences",
		description: "Tailor-made itineraries to match your interests and preferences.",
	},
	{
		icon: <FaPlaneDeparture className="text-[#FF507A] h-6 w-6" />,
		title: "Seamless Bookings",
		description: "Hassle-free booking process with instant confirmations.",
	},
	{
		icon: <MdOutlineKingBed className="text-[#FF507A] h-6 w-6" />,
		title: "Luxury Accommodations",
		description: "Stay in handpicked hotels that offer the best in comfort and service.",
	},
	{
		icon: <FaHeart className="text-[#FF507A] h-6 w-6" />,
		title: "24/7 Customer Support",
		description: "We're here to assist you anytime, anywhere.",
	},
];

export default function TopPackages({
	trips = [],
	title = "Top Packages",
	subtitle = "Handpicked Getaways for Every Traveler",
}) {
	// Use demoTrips if trips is empty
	const displayTrips = trips.length === 0 ? demoTrips : trips;

	return (
		<section className="max-w-7xl mx-auto py-16 px-4">
			<div className="mb-2">
				<h2 className="text-3xl font-bold">{title}</h2>
				<p className="text-gray-700">{subtitle}</p>
			</div>
			{/* Always show vertical grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
				{displayTrips.map((trip) => (
					<div
						key={trip._id}
						className="bg-white border border-gray-200 rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition transform hover:-translate-y-2 flex flex-col group"
					>
						<div className="relative">
							<img
								src="/icons/sample-image.jpg"
								alt={trip.title}
								className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105 rounded-t-2xl"
							/>
							<span className="absolute top-3 right-3 bg-white rounded-full p-2 shadow text-[#FF507A] cursor-pointer hover:bg-[#FF507A] hover:text-white transition-colors">
								<FaHeart />
							</span>
							<span className="absolute top-3 left-3 bg-[#FF914D] text-white text-xs font-semibold px-3 py-1 rounded-full shadow">
								Starts: INR {trip.pricing?.valuePack || "Contact"}
							</span>
							{/* Enhanced Pay Section */}
							{trip.pricing?.payNow && (
								<button className="absolute bottom-3 right-3 bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:from-[#FF507A] hover:to-[#FF914D] transition-colors z-10">
									Pay ₹{trip.pricing.payNow}
								</button>
							)}
						</div>
						<div className="p-5 flex-1 flex flex-col">
							<h3 className="text-lg font-bold mb-2 text-gray-900 group-hover:text-[#FF507A] transition-colors min-h-[56px]">{trip.title}</h3>
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
							<div className="text-xs text-gray-500 mb-4 min-h-[40px]">
								INCLUDES: Accommodation, Speed boat Transfer, Green Tax, 24x7 online support
							</div>
							<button className="mt-auto bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-sm font-semibold px-4 py-2 rounded-lg shadow hover:from-[#FF507A] hover:to-[#FF914D] transition-colors">
								View Details
							</button>
						</div>
					</div>
				))}
			</div>

			{/* --- All Packages & Rating Section --- */}
			<div className="mt-16 flex gap-8">
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
				{/* Cards Grid */}
				<div className="flex-1 space-y-6">
					{displayTrips.map((trip, idx) => (
						<HorizontalPackageCard
							key={trip._id}
							trip={trip} // Pass the entire trip object as 'trip' prop
						/>
					))}
				</div>
			</div>
			{/* --- End All Packages & Rating Section --- */}

			{/* --- Extra Content Below Top Packages --- */}
			<div className="mt-16">
				<div className="space-y-8">
					<h2 className="sm:text-4xl text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] text-center mb-8 drop-shadow-lg tracking-tight">
						Why Choose Us?
					</h2>
					<div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 bg-white p-10 rounded-3xl shadow-2xl border border-blue-100">
						{whyChooseUsItems.map((item, index) => (
							<div key={index} className="flex flex-col items-center bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition group border border-gray-100 hover:-translate-y-2 hover:scale-105 duration-300">
								<div className="flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-[#FF507A] to-[#FF914D] mb-5 group-hover:scale-125 transition-transform shadow-lg">
									{item.icon}
								</div>
								<h3 className="font-bold text-xl text-gray-900 mb-3 text-center group-hover:text-[#FF507A] transition-colors tracking-wide">
									{item.title}
								</h3>
								<p className="text-base text-gray-600 text-center leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</div>
			{/* --- End Extra Content --- */}
		</section>
	);
}