"use client";

import { Suspense, useEffect, useState } from 'react';
import { useSearchParams } from 'next/navigation';
import BlogSection from "@/components/Blog";
import FixedDepartures from "@/components/FixedDepartures";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import Navbar from "@/components/Navbar";
import PackagesHeroSection from "@/components/PackagesHeroSection";
import TopPackages from "@/components/TopPackages";
import HorizontalPackageCard from "../../components/HorizontalPackageCard";

const Packages = () => {
  const searchParams = useSearchParams();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const type = searchParams.get('type');
  const country = searchParams.get('country');
  const season = searchParams.get('season');

  useEffect(() => {
    const fetchTrips = async () => {
      try {
        setLoading(true);
        const queryParams = new URLSearchParams();
        if (type) queryParams.append('type', type);
        if (country) queryParams.append('country', country);
        if (season) queryParams.append('season', season);

        const response = await fetch(`/api/tour-packages?${queryParams.toString()}`);
        if (!response.ok) {
          throw new Error('Failed to fetch trips');
        }
        const data = await response.json();
        setTrips(data.trips);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTrips();
  }, [type, country, season]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading packages...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl text-red-500">Error: {error}</div>
      </div>
    );
  }

  return (
    <div>
      <Navbar />
      <PackagesHeroSection />
      <TopPackages trips={trips} />
      <Gallery />
      <BlogSection />
      <FixedDepartures
        title={type ? `${type} Packages` : country ? `${country} Tours` : season ? `${season} Specials` : "Fixed Departures"}
        description="Handpicked Getaways for Every Traveler"
        destinations={trips.map(trip => ({
          id: trip._id,
          title: trip.title,
          image: trip.images[0]?.url || "https://images.pexels.com/photos/163037/london-street-phone-cabin-163037.jpeg",
          description: trip.duration ? `${trip.duration.days} days, ${trip.duration.nights} nights` : "",
          discount: trip.pricing?.valuePack ? `Starting from ₹${trip.pricing.valuePack}` : "",
        }))}
      />
      <section className="max-w-7xl mx-auto py-0 px-4">
        <h2 className="text-2xl font-bold mb-4">
          Packages {country ? `for ${country}` : ""}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {trips.length > 0 ? (
            trips.map((trip) => (
              <HorizontalPackageCard key={trip._id} trip={trip} />
            ))
          ) : (
            <div>No packages found.</div>
          )}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default function PackagesPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Packages />
    </Suspense>
  );
}