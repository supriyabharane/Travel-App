import SpecialityTourCard from './SpecialityTourCard';

const specialityTours = [
	{
		id: 1,
		image: '/images/special1.jpg',
		title: 'ICELAND.',
		duration: '6N/7D',
		date: '12 Jan',
		airport: 'Delhi Airport',
		visa: 'Visa',
		includes:
			'Accommodation, Speed boat Transfer, Green Tax, 24x7 online support',
	},
	{
		id: 2,
		image: '/images/special2.jpg',
		title: 'Explore our Seoul.',
		duration: '5N/6D',
		date: '18 Feb',
		airport: 'Mumbai Airport',
		visa: 'Visa',
		includes: 'Accommodation, Transfers, City Tour, 24x7 support',
	},
	{
		id: 3,
		image: '/images/special3.jpg',
		title: 'CUBA.',
		duration: '7N/8D',
		date: '25 Mar',
		airport: 'Chennai Airport',
		visa: 'Visa',
		includes: 'Accommodation, Local Guide, Green Tax, 24x7 support',
	},
	{
		id: 4,
		image: '/images/special4.jpg',
		title: 'BALI.',
		duration: '5N/6D',
		date: '10 Apr',
		airport: 'Delhi Airport',
		visa: 'Visa',
		includes: 'Accommodation, Transfers, Green Tax, 24x7 support',
	},
	{
		id: 5,
		image: '/images/special5.jpg',
		title: 'JAPAN SPRING.',
		duration: '8N/9D',
		date: '15 May',
		airport: 'Bangalore Airport',
		visa: 'Visa',
		includes: 'Accommodation, Bullet Train, City Tour, 24x7 support',
	},
	{
		id: 6,
		image: '/images/special6.jpg',
		title: 'EGYPT MYSTERY.',
		duration: '6N/7D',
		date: '22 Jun',
		airport: 'Kolkata Airport',
		visa: 'Visa',
		includes: 'Accommodation, Nile Cruise, Green Tax, 24x7 support',
	},
	{
		id: 7,
		image: '/images/special7.jpg',
		title: 'PATAGONIA ADVENTURE.',
		duration: '9N/10D',
		date: '5 Jul',
		airport: 'Hyderabad Airport',
		visa: 'Visa',
		includes: 'Accommodation, Trekking, Local Guide, 24x7 support',
	},
	{
		id: 8,
		image: '/images/special8.jpg',
		title: 'SOUTH AFRICA SAFARI.',
		duration: '7N/8D',
		date: '20 Aug',
		airport: 'Pune Airport',
		visa: 'Visa',
		includes: 'Accommodation, Safari, Transfers, 24x7 support',
	},
	{
		id: 9,
		image: '/images/special9.jpg',
		title: 'ANTARCTICA EXPEDITION.',
		duration: '12N/13D',
		date: '10 Sep',
		airport: 'Delhi Airport',
		visa: 'Visa',
		includes: 'Accommodation, Cruise, Expedition Guide, 24x7 support',
	},
];

export default function SpecialityTours() {
	return (
		<section className="max-w-7xl mx-auto py-16 px-4 bg-gradient-to-br from-[#f8fafc] via-[#f3e8ff] to-[#e0e7ff] rounded-3xl shadow-2xl border border-blue-100 overflow-visible">
			<h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-[#FF507A] to-[#6C63FF] drop-shadow-lg tracking-tight">
				Speciality Tours
			</h2>
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
				{specialityTours.map((tour) => (
					<div className="transition-transform duration-300 hover:scale-105 hover:shadow-2xl rounded-2xl overflow-hidden bg-white/80 backdrop-blur-md border border-blue-100 relative group">
						<SpecialityTourCard key={tour.id} tour={tour} />
						<span className="absolute top-4 left-4 bg-gradient-to-r from-[#FF507A] to-[#6C63FF] text-white text-xs font-semibold px-3 py-1 rounded-full shadow-lg z-10 group-hover:scale-110 transition-transform">
							{tour.duration}
						</span>
						<span className="absolute bottom-4 right-4 bg-white/90 text-[#6C63FF] text-xs font-semibold px-3 py-1 rounded-full shadow-md z-10 border border-[#6C63FF] group-hover:bg-[#6C63FF] group-hover:text-white transition-colors">
							{tour.date}
						</span>
					</div>
				))}
			</div>
		</section>
	);
}
