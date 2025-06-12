"use client";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SpecialityTourCard from "./SpecialityTourCard";

// Add categories and price to each trip
const tripCategories = [
	"Beaches",
	"Mountains",
	"Adventure",
	"Wildlife",
	"Cultural",
	"City",
	"Cruise",
	"Desert",
	"Polar",
];

// Add mock ratings and reviews to each trip (SSR-safe)
const fixedRatings = [4.8, 4.5, 4.7, 4.6, 4.9, 4.4, 4.3, 4.2, 4.8];
const fixedReviews = [32, 45, 28, 51, 39, 22, 18, 27, 34];

const fixedDepartures = [
	{
		id: 1,
		title: "ICELAND.",
		image: "/images/iceland.jpg",
		discount: "Up to 50% off",
		details: "Flight + 4 nights",
		category: "Polar",
		price: 120000,
	},
	{
		id: 2,
		title: "Explore our Seoul.",
		image: "/images/seoul.jpg",
		details: "200 hotels, 345 local flights and 234 bus providers",
		category: "City",
		price: 90000,
	},
	{
		id: 3,
		title: "CUBA.",
		image: "/images/cuba.jpg",
		discount: "Up to 50% off",
		details: "Flight + 4 nights",
		category: "Beaches",
		price: 85000,
	},
	{
		id: 4,
		title: "BALI.",
		image: "/images/bali.jpg",
		discount: "Up to 40% off",
		details: "Flight + 5 nights",
		category: "Beaches",
		price: 95000,
	},
	{
		id: 5,
		title: "JAPAN SPRING.",
		image: "/images/japan.jpg",
		discount: "Up to 30% off",
		details: "Flight + 8 nights",
		category: "Cultural",
		price: 110000,
	},
	{
		id: 6,
		title: "EGYPT MYSTERY.",
		image: "/images/egypt.jpg",
		discount: "Up to 35% off",
		details: "Flight + 6 nights",
		category: "Desert",
		price: 105000,
	},
	{
		id: 7,
		title: "PATAGONIA ADVENTURE.",
		image: "/images/patagonia.jpg",
		discount: "Up to 25% off",
		details: "Flight + 9 nights",
		category: "Mountains",
		price: 130000,
	},
	{
		id: 8,
		title: "SOUTH AFRICA SAFARI.",
		image: "/images/southafrica.jpg",
		discount: "Up to 20% off",
		details: "Flight + 7 nights",
		category: "Wildlife",
		price: 115000,
	},
	{
		id: 9,
		title: "ANTARCTICA EXPEDITION.",
		image: "/images/antarctica.jpg",
		discount: "Up to 15% off",
		details: "Flight + 12 nights",
		category: "Polar",
		price: 200000,
	},
];

// Attach static ratings and reviews
fixedDepartures.forEach((trip, idx) => {
	trip.rating = fixedRatings[idx] || 4.5;
	trip.reviews = fixedReviews[idx] || 20;
});

const specialityTours = [
	{
		id: 1,
		title: "ICELAND.",
		image: "/images/iceland.jpg",
		discount: "Up to 50% off",
		details: "Flight + 4 nights",
	},
	{
		id: 2,
		title: "Explore our Seoul.",
		image: "/images/seoul.jpg",
		details: "200 hotels, 345 local flights and 234 bus providers",
	},
	{
		id: 3,
		title: "CUBA.",
		image: "/images/cuba.jpg",
		discount: "Up to 50% off",
		details: "Flight + 4 nights",
	},
	{
		id: 4,
		title: "BALI.",
		image: "/images/bali.jpg",
		discount: "Up to 40% off",
		details: "Flight + 5 nights",
	},
	{
		id: 5,
		title: "JAPAN SPRING.",
		image: "/images/japan.jpg",
		discount: "Up to 30% off",
		details: "Flight + 8 nights",
	},
	{
		id: 6,
		title: "EGYPT MYSTERY.",
		image: "/images/egypt.jpg",
		discount: "Up to 35% off",
		details: "Flight + 6 nights",
	},
	{
		id: 7,
		title: "PATAGONIA ADVENTURE.",
		image: "/images/patagonia.jpg",
		discount: "Up to 25% off",
		details: "Flight + 9 nights",
	},
	{
		id: 8,
		title: "SOUTH AFRICA SAFARI.",
		image: "/images/southafrica.jpg",
		discount: "Up to 20% off",
		details: "Flight + 7 nights",
	},
	{
		id: 9,
		title: "ANTARCTICA EXPEDITION.",
		image: "/images/antarctica.jpg",
		discount: "Up to 15% off",
		details: "Flight + 12 nights",
	},
];

export default function FixedDepartures() {
	const swiperRef1 = useRef(null);
	const swiperRef2 = useRef(null);
	const [selectedCategory, setSelectedCategory] = useState("");
	const [sortOrder, setSortOrder] = useState("");

	// Filtering and sorting logic
	const filteredTrips = fixedDepartures
		.filter((trip) => !selectedCategory || trip.category === selectedCategory)
		.sort((a, b) => {
			if (sortOrder === "asc") return a.price - b.price;
			if (sortOrder === "desc") return b.price - a.price;
			return 0;
		});

	return (
		<section className="max-w-7xl mx-auto py-16 px-4 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] rounded-3xl shadow-2xl border border-blue-100 overflow-visible">
			{/* Decorative background blob */}
			<div className="absolute -top-20 -right-20 w-96 h-96 bg-gradient-to-br from-[#FF507A]/30 to-[#6C63FF]/20 rounded-full blur-3xl opacity-60 z-0" />
			{/* Filters */}
			<div className="flex flex-wrap gap-4 mb-8 items-center justify-between z-20 relative">
				<div className="flex gap-2 flex-wrap">
					<select
						className="px-4 py-2 rounded-lg border border-blue-200 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF507A]"
						value={selectedCategory}
						onChange={(e) => setSelectedCategory(e.target.value)}
					>
						<option value="">All Categories</option>
						{tripCategories.map((cat) => (
							<option key={cat} value={cat}>
								{cat}
							</option>
						))}
					</select>
				</div>
				<div>
					<select
						className="px-4 py-2 rounded-lg border border-blue-200 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FF507A]"
						value={sortOrder}
						onChange={(e) => setSortOrder(e.target.value)}
					>
						<option value="">Sort by Price</option>
						<option value="asc">Price: Low to High</option>
						<option value="desc">Price: High to Low</option>
					</select>
				</div>
			</div>
			{/* Fixed Departures Section */}
			<div className="sm:py-20 pt-40 pb-8 relative z-10">
				<div className="flex justify-between items-center sm:px-0 px-4 mb-12">
					<div className="text-start">
						<h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] drop-shadow-lg tracking-tight mb-2">
							Fixed Departures
						</h2>
						<p className="text-lg text-gray-700 font-medium mb-1 pl-1">
							Handpicked Getaways for Every Traveler
						</p>
						<div className="h-1 w-24 bg-gradient-to-r from-[#FF507A] to-[#FF914D] rounded-full mt-2" />
					</div>
					<div className="flex items-center gap-x-2">
						<button
							className="bg-white text-black p-3 rounded-full shadow-md hover:bg-[#FF507A] hover:text-white transition-all border border-gray-200 hover:scale-110"
							onClick={() => swiperRef1.current?.slidePrev()}
						>
							<FaChevronLeft />
						</button>
						<button
							className="bg-white text-black p-3 rounded-full shadow-md hover:bg-[#FF507A] hover:text-white transition-all border border-gray-200 hover:scale-110"
							onClick={() => swiperRef1.current?.slideNext()}
						>
							<FaChevronRight />
						</button>
					</div>
				</div>
				<div className="relative sm:pt-32 pt-16">
					{filteredTrips.length > 0 ? (
						<Swiper
							slidesPerView={1}
							spaceBetween={24}
							breakpoints={{
								640: { slidesPerView: 2 },
								1024: { slidesPerView: 3 },
								1280: { slidesPerView: 4 },
							}}
							modules={[Navigation]}
							onSwiper={(swiper) => (swiperRef1.current = swiper)}
							className="mt-8"
						>
							{filteredTrips.map((tour) => (
								<SwiperSlide key={tour.id}>
									<div className="relative rounded-3xl overflow-hidden shadow-2xl group transition hover:shadow-3xl bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] border border-blue-100 hover:-translate-y-2 hover:scale-105 duration-300">
										{/* Trip Images Carousel */}
										<Swiper
											slidesPerView={1}
											navigation={true}
											className="w-full h-64 rounded-3xl shadow-xl"
										>
											{[tour.image, ...(tour.images || [])].map((img, idx) => (
												<SwiperSlide key={idx}>
													<img
														src={img}
														alt={tour.title}
														className="w-full h-64 object-cover rounded-3xl"
													/>
												</SwiperSlide>
											))}
										</Swiper>
										{tour.discount && (
											<span className="absolute top-3 right-3 bg-gradient-to-r from-[#FF507A] to-[#FF914D] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border border-white/30 group-hover:scale-110 transition-transform z-10">
												{tour.discount}
											</span>
										)}
										<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
											<h3 className="font-bold text-3xl mb-2 text-white drop-shadow-lg">
												{tour.title}
											</h3>
											<div className="flex items-center gap-2 mb-4">
												<img
													src="/icons/flight.png"
													alt="flight"
													className="w-5 h-5"
												/>
												<span className="text-white text-lg font-bold">
													+
												</span>
												<img
													src="/icons/hotel.png"
													alt="Hotel"
													className="w-5 h-5"
												/>
											</div>
											<div className="flex items-center gap-3 mb-2">
												<span className="flex items-center text-yellow-400 font-bold text-lg">
													<svg
														xmlns="http://www.w3.org/2000/svg"
														fill="currentColor"
														viewBox="0 0 20 20"
														className="w-5 h-5 mr-1"
													>
														<path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.454a1 1 0 00-1.175 0l-3.38 2.454c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
													</svg>
													{tour.rating}
												</span>
												<span className="text-white text-sm">
													({tour.reviews} reviews)
												</span>
											</div>
											{/* Removed social sharing buttons as requested */}
											<span className="text-white text-sm mb-2">
												{tour.details}
											</span>
											<button className="border border-white text-white rounded px-5 py-1 font-semibold bg-black/30 hover:bg-white hover:text-black transition w-fit shadow-lg mt-2">
												Write a Review
											</button>
											<button className="border border-white text-white rounded px-5 py-1 font-semibold bg-black/30 hover:bg-white hover:text-black transition w-fit shadow-lg">
												Explore
											</button>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<div className="text-center py-10">No departures available</div>
					)}
				</div>
			</div>

			{/* Soft divider */}
			<div className="w-full h-1 mt-2 mb-2 bg-gradient-to-r from-[#FF507A]/10 via-[#6C63FF]/10 to-[#FF914D]/10 rounded-full blur-md" />

			{/* Speciality Tours Section */}
			<div className="sm:py-20 pt-40 pb-8 relative z-10">
				<div className="flex justify-between items-center sm:px-0 px-4 mb-12">
					<div className="text-start">
						<h2 className="text-4xl sm:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] drop-shadow-lg tracking-tight mb-2">
							Speciality Tours
						</h2>
						<p className="text-lg text-gray-700 font-medium mb-1 pl-1">
							Handpicked Getaways for Every Traveler
						</p>
						<div className="h-1 w-24 bg-gradient-to-r from-[#FF507A] to-[#FF914D] rounded-full mt-2" />
					</div>
					<div className="flex items-center gap-x-2">
						<button
							className="bg-white text-black p-3 rounded-full shadow-md hover:bg-[#FF507A] hover:text-white transition-all border border-gray-200 hover:scale-110"
							onClick={() => swiperRef2.current?.slidePrev()}
						>
							<FaChevronLeft />
						</button>
						<button
							className="bg-white text-black p-3 rounded-full shadow-md hover:bg-[#FF507A] hover:text-white transition-all border border-gray-200 hover:scale-110"
							onClick={() => swiperRef2.current?.slideNext()}
						>
							<FaChevronRight />
						</button>
					</div>
				</div>
				<div className="relative sm:pt-32 pt-16">
					{specialityTours.length > 0 ? (
						<Swiper
							modules={[Navigation]}
							spaceBetween={20}
							slidesPerView={1}
							breakpoints={{
								640: { slidesPerView: 2 },
								768: { slidesPerView: 3 },
								1024: { slidesPerView: 3.2 },
								1280: { slidesPerView: 3.5 },
								1536: { slidesPerView: 4 },
							}}
							onSwiper={(swiper) => (swiperRef2.current = swiper)}
							navigation={false}
						>
							{specialityTours.map((tour) => (
								<SwiperSlide key={tour.id}>
									<div className="relative rounded-3xl overflow-hidden shadow-xl group transition hover:shadow-2xl bg-white/80 backdrop-blur-md border border-blue-100 hover:-translate-y-2 hover:scale-105 duration-300">
										{tour.discount && (
											<span className="absolute top-3 right-3 bg-gradient-to-r from-[#FF507A] to-[#FF914D] text-white text-xs font-bold px-4 py-1 rounded-full shadow-lg border border-white/30 group-hover:scale-110 transition-transform">
												{tour.discount}
											</span>
										)}
										<img
											src={tour.image}
											alt={tour.title}
											className="w-full h-64 object-cover rounded-3xl group-hover:scale-105 transition-transform duration-300"
										/>
										<div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/70 via-black/10 to-transparent">
											<h3 className="font-bold text-3xl mb-2 text-white drop-shadow-lg">
												{tour.title}
											</h3>
											<div className="flex items-center gap-2 mb-4">
												<img
													src="/icons/flight.png"
													alt="flight"
													className="w-5 h-5"
												/>
												<span className="text-white text-lg font-bold">
													+
												</span>
												<img
													src="/icons/hotel.png"
													alt="Hotel"
													className="w-5 h-5"
												/>
											</div>
											<span className="text-white text-sm mb-2">
												{tour.details}
											</span>
											<button className="border border-white text-white rounded px-5 py-1 font-semibold bg-black/30 hover:bg-white hover:text-black transition w-fit shadow-lg">
												Explore
											</button>
										</div>
									</div>
								</SwiperSlide>
							))}
						</Swiper>
					) : (
						<div className="text-center py-10">No tours available</div>
					)}
				</div>
			</div>
		</section>
	);
}