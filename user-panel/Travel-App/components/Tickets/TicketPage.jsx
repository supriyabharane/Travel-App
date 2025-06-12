"use client";
import React, { useState } from "react";
import Footer from "../Footer";
import Navbar from "../Navbar";

// Toast notification utility
function Toast({ message, onClose, type = "success" }) {
  return (
    <div className={`fixed top-6 right-6 z-50 px-6 py-3 rounded-lg shadow-lg text-white font-semibold transition bg-${type === "success" ? "green" : "red"}-600`}>
      {message}
      <button className="ml-4 text-white font-bold" onClick={onClose} aria-label="Close notification">×</button>
    </div>
  );
}

const TicketPage = () => {
  // Personalization: mock user and recently viewed trips
  const user = { name: "Rajdeep" };
  const [showReviewModal, setShowReviewModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [toast, setToast] = useState(null);
  const [recentTrips] = useState([
    {
      id: 1,
      title: "Romantic Bali Getaway",
      date: "20/01/2025",
      nights: "5 Nights / 6 Days",
    },
    {
      id: 2,
      title: "Maldives Escape",
      date: "10/12/2024",
      nights: "4 Nights / 5 Days",
    },
  ]);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [paymentLoading, setPaymentLoading] = useState(false);
  const [paymentForm, setPaymentForm] = useState({ card: '', expiry: '', cvv: '', name: '' });

  // Simulate loading state for tickets
  const handleDownload = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setToast({ message: "Download started!", type: "success" });
    }, 1200);
  };

  const handleReviewSubmit = () => {
    setShowReviewModal(false);
    setToast({ message: "Review submitted!", type: "success" });
  };

  const handlePaymentSubmit = (e) => {
    e.preventDefault();
    setPaymentLoading(true);
    setTimeout(() => {
      setPaymentLoading(false);
      setShowPaymentModal(false);
      setToast({ message: "Payment successful!", type: "success" });
      setPaymentForm({ card: '', expiry: '', cvv: '', name: '' });
    }, 1500);
  };

  return (
    <div className="ticket-page">
      {/* Toast Notification */}
      {toast && <Toast message={toast.message} type={toast.type} onClose={() => setToast(null)} />}
      {/* Navbar Section */}
      <Navbar />

      {/* Header Section */}
      <header className="header-section bg-gradient-to-r from-orange-400 to-red-500 text-white p-6">
        <h1 className="text-3xl font-bold">
          Romantic Bali Getaway: Ubud, Kuta & Timeless Adventures
        </h1>
        <p className="text-lg">Tour Code: 5 Nights / 6 Days</p>
        <p className="text-lg">3 Night Ubud + 3 Night Kuta</p>
      </header>

      {/* Personalization: Welcome and Recently Viewed */}
      <div className="bg-white py-4 px-6 flex flex-col md:flex-row md:items-center md:justify-between border-b">
        <span className="font-semibold text-lg text-gray-700">
          Welcome, {user.name}!
        </span>
        <div className="flex flex-col md:flex-row md:items-center gap-2 mt-2 md:mt-0">
          <span className="text-gray-500 text-sm">
            Recently Viewed Trips:
          </span>
          <div className="flex gap-2">
            {recentTrips.map((trip) => (
              <span
                key={trip.id}
                className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full text-xs font-semibold"
              >
                {trip.title} ({trip.nights})
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <nav className="tabs-section flex justify-center space-x-4 bg-white py-4">
        <button className="px-4 py-2 border-b-2 border-orange-500 font-semibold">
          Trip Summary
        </button>
        <button className="px-4 py-2 font-semibold">Pricing Details</button>
        <button className="px-4 py-2 font-semibold">
          Tickets/Other Details
        </button>
      </nav>

      {/* Tickets Section */}
      <section className="tickets-section bg-gray-100 py-6">
        <h2 className="text-2xl font-bold text-center mb-4">TICKETS</h2>
        <div className="ticket-list grid grid-cols-1 md:grid-cols-3 gap-4 px-6">
          {[1, 2, 3].map((i) => (
            <div key={i} className="ticket-item bg-white shadow-md p-4 rounded-md">
              <p className="font-semibold">Rajdeep-ticket</p>
              <p className="text-sm text-gray-700">
                12MB PDF - Uploaded on 20/01/2025
              </p>
              <button
                className="mt-2 px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                onClick={handleDownload}
                disabled={loading}
                aria-label="Download ticket"
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg
                      className="animate-spin h-5 w-5 text-white"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                        fill="none"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8z"
                      />
                    </svg>
                    Downloading...
                  </span>
                ) : (
                  "Download"
                )}
              </button>
              {/* Review Submission Button */}
              <button
                className="mt-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                onClick={() => setShowReviewModal(true)}
                aria-label="Write a review"
              >
                Write a Review
              </button>
              {/* Trip Details Modal Trigger */}
              <button
                className="mt-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-green-400"
                onClick={() => alert("Show trip details modal here!")}
                aria-label="Explore trip details"
              >
                Explore
              </button>
              {/* Payment Button */}
              <button
                className="mt-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-md ml-2 focus:outline-none focus:ring-2 focus:ring-purple-400"
                onClick={() => setShowPaymentModal(true)}
                aria-label="Pay now"
              >
                Pay Now
              </button>
            </div>
          ))}
        </div>
      </section>
      {/* Review Modal */}
      {showReviewModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
            <h3 className="text-xl font-bold mb-4">Write a Review</h3>
            <textarea
              className="w-full border rounded p-2 mb-4"
              rows={4}
              placeholder="Share your experience..."
              aria-label="Review text area"
            />
            <div className="flex justify-end gap-2">
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setShowReviewModal(false)}
                aria-label="Cancel review"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 bg-orange-600 hover:bg-orange-700 text-white rounded"
                onClick={handleReviewSubmit}
                aria-label="Submit review"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
      {/* Payment Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
          <form
            className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md"
            onSubmit={handlePaymentSubmit}
            aria-label="Payment form"
          >
            <h3 className="text-xl font-bold mb-4">Pay for Your Trip</h3>
            <div className="mb-3">
              <label className="block text-gray-700 mb-1" htmlFor="card">Card Number</label>
              <input
                id="card"
                type="text"
                className="w-full border rounded p-2"
                maxLength={19}
                required
                value={paymentForm.card}
                onChange={e => setPaymentForm(f => ({ ...f, card: e.target.value }))}
                placeholder="1234 5678 9012 3456"
              />
            </div>
            <div className="flex gap-2 mb-3">
              <div className="flex-1">
                <label className="block text-gray-700 mb-1" htmlFor="expiry">Expiry</label>
                <input
                  id="expiry"
                  type="text"
                  className="w-full border rounded p-2"
                  maxLength={5}
                  required
                  value={paymentForm.expiry}
                  onChange={e => setPaymentForm(f => ({ ...f, expiry: e.target.value }))}
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-1">
                <label className="block text-gray-700 mb-1" htmlFor="cvv">CVV</label>
                <input
                  id="cvv"
                  type="password"
                  className="w-full border rounded p-2"
                  maxLength={4}
                  required
                  value={paymentForm.cvv}
                  onChange={e => setPaymentForm(f => ({ ...f, cvv: e.target.value }))}
                  placeholder="123"
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-1" htmlFor="name">Name on Card</label>
              <input
                id="name"
                type="text"
                className="w-full border rounded p-2"
                required
                value={paymentForm.name}
                onChange={e => setPaymentForm(f => ({ ...f, name: e.target.value }))}
                placeholder="Full Name"
              />
            </div>
            <div className="flex justify-end gap-2">
              <button
                type="button"
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setShowPaymentModal(false)}
                aria-label="Cancel payment"
                disabled={paymentLoading}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded"
                disabled={paymentLoading}
                aria-label="Submit payment"
              >
                {paymentLoading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" aria-hidden="true">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Processing...
                  </span>
                ) : (
                  "Pay Now"
                )}
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Social Proof: Testimonials/Trusted By */}
      <section className="bg-white py-8 px-4 mt-8 rounded-xl shadow-lg max-w-4xl mx-auto">
        <h3 className="text-2xl font-bold text-center mb-6 text-gray-800">Trusted by Happy Travelers</h3>
        <div className="flex flex-wrap justify-center items-center gap-8 mb-6">
          <img src="/assets/images/partner1.png" alt="Partner 1 logo" className="h-10 w-auto" />
          <img src="/assets/images/partner2.png" alt="Partner 2 logo" className="h-10 w-auto" />
          <img src="/assets/images/partner3.png" alt="Partner 3 logo" className="h-10 w-auto" />
          <img src="/assets/images/partner4.png" alt="Partner 4 logo" className="h-10 w-auto" />
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <div className="bg-gray-50 p-4 rounded-lg shadow text-gray-800 max-w-xs mx-auto">
            <p className="mb-2">“Amazing service and unforgettable experience! Highly recommend.”</p>
            <span className="font-semibold">- Priya S.</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow text-gray-800 max-w-xs mx-auto">
            <p className="mb-2">“The booking process was seamless and support was always available.”</p>
            <span className="font-semibold">- Arjun M.</span>
          </div>
          <div className="bg-gray-50 p-4 rounded-lg shadow text-gray-800 max-w-xs mx-auto">
            <p className="mb-2">“Loved the personalized recommendations. Will book again!”</p>
            <span className="font-semibold">- Sneha R.</span>
          </div>
        </div>
      </section>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default TicketPage;
