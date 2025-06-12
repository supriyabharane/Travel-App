import Navbar from "@/components/Navbar";
import HomeHeroSection from "@/components/HomeHeroSection";
import TopDestinations from "@/components/TopDestinations";
import FixedDepartures from "@/components/FixedDepartures";
import ReviewsAndWall from "@/components/ReviewsAndWall";
import BlogSection from "@/components/Blog";
import Footer from "@/components/Footer";

export default function Home() {
  const trips = [
    {
      _id: 1,
      title: "The Ultimate 7-Day Vietnam Tour Package",
      images: [{ url: "/images/bali.jpg" }],
      destinationType: "6N/7D",
      destinationCountry: "12 km",
      pricing: { valuePack: 46000 },
    },
    {
      _id: 2,
      title: "Explore Bali Adventure",
      images: [{ url: "/images/bali.jpg" }],
      destinationType: "5N/6D",
      destinationCountry: "8 km",
      pricing: { valuePack: 38000 },
    },
    {
      _id: 3,
      title: "Thailand Beach Escape",
      images: [{ url: "/images/bali.jpg" }],
      destinationType: "4N/5D",
      destinationCountry: "15 km",
      pricing: { valuePack: 42000 },
    },
    {
      _id: 4,
      title: "Maldives Luxury Retreat",
      images: [{ url: "/images/bali.jpg" }],
      destinationType: "7N/8D",
      destinationCountry: "20 km",
      pricing: { valuePack: 90000 },
    },
  ];

  const whyChooseUsItems = [
    {
      title: "Expert Guides",
      description: "Our guides are locals with extensive knowledge of the area.",
      icon: <i className="fas fa-user-tie fa-2x text-blue-500"></i>,
    },
    {
      title: "Best Price Guarantee",
      description: "We offer the best prices, guaranteed.",
      icon: <i className="fas fa-tag fa-2x text-blue-500"></i>,
    },
    {
      title: "24/7 Customer Support",
      description: "We're here to help you any time of day.",
      icon: <i className="fas fa-headset fa-2x text-blue-500"></i>,
    },
    {
      title: "Sustainable Travel",
      description: "We promote eco-friendly travel practices.",
      icon: <i className="fas fa-leaf fa-2x text-blue-500"></i>,
    },
  ];

  return (
    <main>
      <Navbar />
      <HomeHeroSection />
      <TopDestinations trips={trips} />
      <FixedDepartures />
      <ReviewsAndWall />
      <BlogSection />
      <Footer />
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Discover Your Next Adventure</h2>
          <p className="text-lg mb-6">
            Explore handpicked destinations and exclusive packages tailored for you.
          </p>
          <a
            href="/your-trips"
            className="inline-block px-6 py-3 bg-orange-500 text-white rounded-lg hover:bg-orange-600 transition-colors"
          >
            View Your Trips
          </a>
        </div>
      </section>
      <section className="bg-gradient-to-r from-blue-500 to-purple-500 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-4">Why Choose Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChooseUsItems.map((item, index) => (
              <div key={index} className="flex flex-col items-center">
                {item.icon}
                <h3 className="text-xl font-semibold mt-4 mb-2">{item.title}</h3>
                <p className="text-center text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}