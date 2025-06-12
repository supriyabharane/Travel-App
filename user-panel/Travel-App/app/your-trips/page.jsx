import React from "react";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import RazorpayButton from "../../components/Payment/RazorpayButton";

const YourTrips = () => {
  return (
    <div className="your-trips-page">
      {/* Navbar Section */}
      <Navbar />

      {/* Header Section */}
      <header className="header-section bg-gradient-to-r from-orange-400 to-red-500 text-white p-6">
        <h1 className="text-3xl font-bold">Your Trips</h1>
        <p className="text-lg">Handpicked Getaways for Every Traveler</p>
      </header>

      {/* Trip List Section */}
      <section className="trip-list-section bg-gray-100 py-6">
        <div className="trip-list grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
          <div className="trip-item bg-white shadow-md p-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="../../assets/images/trip-image.jpg"
              alt="Trip Image"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-4">Cocogiri Island Resort Maldives</h2>
            <p className="text-sm text-gray-500">Includes: Accommodation, Speed boat Transfer, Green Tax, 24/7 online support</p>
            <p className="text-lg font-bold mt-2">₹173,363 / couple</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">View Details</button>
            <RazorpayButton amount={173363} />
          </div>
          <div className="trip-item bg-white shadow-md p-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="../../assets/images/trip-image.jpg"
              alt="Trip Image"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-4">Cocogiri Island Resort Maldives</h2>
            <p className="text-sm text-gray-500">Includes: Accommodation, Speed boat Transfer, Green Tax, 24/7 online support</p>
            <p className="text-lg font-bold mt-2">₹173,363 / couple</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">View Details</button>
            <RazorpayButton amount={173363} />
          </div>
          <div className="trip-item bg-white shadow-md p-4 rounded-md transition-transform transform hover:scale-105 hover:shadow-lg">
            <img
              src="../../assets/images/trip-image.jpg"
              alt="Trip Image"
              className="w-full h-40 object-cover rounded-md"
            />
            <h2 className="text-xl font-bold mt-4">Cocogiri Island Resort Maldives</h2>
            <p className="text-sm text-gray-500">Includes: Accommodation, Speed boat Transfer, Green Tax, 24/7 online support</p>
            <p className="text-lg font-bold mt-2">₹173,363 / couple</p>
            <button className="mt-4 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors">View Details</button>
            <RazorpayButton amount={173363} />
          </div>
        </div>
      </section>

      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default YourTrips;
