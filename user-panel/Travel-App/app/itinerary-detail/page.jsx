'use client';

import { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Carousel from "@/components/ItineraryDetail/Carousel";
import DayWise from "@/components/ItineraryDetail/DayWise";
import Overview from "@/components/ItineraryDetail/Overview";
import Pricing from "@/components/ItineraryDetail/Pricing";
import Stay from "@/components/ItineraryDetail/Stay";
import Summary from "@/components/ItineraryDetail/Summary";
import TopHeader from "@/components/ItineraryDetail/TopHeader";
import Transfers from "@/components/ItineraryDetail/Transfers";
import Navbar from "@/components/Navbar";

const ItineraryDetail = ({ params }) => {
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await fetch(`/api/trips/${params.id}`);
        if (!response.ok) {
          throw new Error('Trip not found');
        }
        const data = await response.json();
        setTrip(data.trip);
      } catch (error) {
        console.error('Error fetching trip details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchTripDetails();
    }
  }, [params.id]);

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  if (!trip) {
    return <div className="min-h-screen flex items-center justify-center">Trip not found</div>;
  }

  const whyChooseUsItems = [
    {
      icon: <svg>/* Your SVG Icon */</svg>,
      title: "Expert Guides",
      description: "Our guides are experts in their field, providing you with insider knowledge and unique experiences.",
    },
    {
      icon: <svg>/* Your SVG Icon */</svg>,
      title: "Best Price Guarantee",
      description: "We offer the best prices for our trips, ensuring you get the best value for your money.",
    },
    {
      icon: <svg>/* Your SVG Icon */</svg>,
      title: "24/7 Support",
      description: "Our support team is available 24/7 to assist you with any queries or issues.",
    },
    {
      icon: <svg>/* Your SVG Icon */</svg>,
      title: "Sustainable Travel",
      description: "We are committed to sustainable travel practices that protect the environment and benefit local communities.",
    },
  ];

  return (
    <>
      <Navbar />
      <div className="min-h-screen">
        <TopHeader title={trip.title} type={trip.destinationType} />
        <Carousel images={trip.images} />
        <Overview trip={trip} />
        <Summary itinerary={trip.itinerary} />
        <Pricing pricing={trip.pricing} />
        <Stay stays={trip.stays} />
        <Transfers />
        <DayWise itinerary={trip.itinerary} />
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
      </div>
      <Footer />
    </>
  );
};

export default ItineraryDetail;