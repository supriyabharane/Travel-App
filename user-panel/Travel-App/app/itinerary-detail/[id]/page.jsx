"use client";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useAuth } from '@/context/AuthContext'; // Import AuthContext

export default function ItineraryDetail() {
  const params = useParams();
  const id = params.id;
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState("Overview");
  const { user, login, loading: authLoading } = useAuth(); // Use AuthContext

  useEffect(() => {
    const fetchTripDetails = async () => {
      try {
        const response = await fetch(`/api/trips/${id}`);
        const data = await response.json();
        if (data.trip) setTrip(data.trip);
      } catch (error) {
        console.error('Error fetching trip details:', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchTripDetails();
  }, [id]);

  if (loading || authLoading) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }
  if (!trip) {
    return <div className="min-h-screen flex items-center justify-center">Trip not found</div>;
  }

  return (
    <>
      <Navbar />
      {/* Gradient Header */}
      <div className="bg-gradient-to-r from-[#FF3131] to-[#FF914D] px-8 py-8 rounded-b-2xl shadow mb-0">
        <div className="text-sm text-white mb-2">
          <span className="mr-2">&larr;</span>
          <span>Domestic Trip</span>
          <span className="mx-2">&gt;</span>
          <span>Bali - Ubud Kuta</span>
        </div>
        <h1 className="text-2xl font-bold text-white mb-2">{trip.title}</h1>
        <div className="text-white text-sm mb-2">Tour Code:</div>
        <div className="flex items-center gap-4 mb-2">
          <span className="bg-white text-[#FF914D] px-3 py-1 rounded text-sm font-semibold shadow">
            {trip.duration?.nights || "N"} Nights / {trip.duration?.days || "D"} Days
          </span>
        </div>
        <div className="text-white text-base mb-2">{trip.itinerary?.summary || "3 Night Ubud + 3 Night Kuta"}</div>
      </div>
      {/* Tabs */}
      <div className="bg-[#FFE6DE] px-8 py-3 flex gap-4">
        {["Overview", "Itinerary", "Inclusions", "Terms & Condition"].map(tab => (
          <button
            key={tab}
            className={`px-5 py-2 rounded transition font-medium ${
              activeTab === tab
                ? "bg-white text-[#FF3131] shadow font-bold"
                : "bg-transparent text-black"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      {/* Tab Content */}
      <div className="max-w-6xl mx-auto mt-8">
        {activeTab === "Overview" && (
          <>
            {!user ? (
              // Show only signup prompt if not signed in
              <div className="flex flex-col items-center mt-12 mb-8">
                <div className="text-xl font-bold text-[#232323] mb-2 text-center">To Know more about the itinerary</div>
                <div className="text-gray-500 mb-4 text-center">Please signup or login with your details</div>
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    login({ email: e.target.email.value, password: e.target.password.value }); // Pass user input to login
                  }}
                  className="flex flex-col gap-4"
                >
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="px-4 py-2 border rounded"
                    required
                  />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="px-4 py-2 border rounded"
                    required
                  />
                  <button
                    type="submit"
                    className="px-8 py-2 rounded bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold"
                  >
                    Sign up / Login
                  </button>
                </form>
              </div>
            ) : (
              // Show full overview content if signed in
              <>
                <div className="flex flex-col md:flex-row gap-8">
                  {/* Left Side */}
                  <div className="flex-1">
                    {/* Trip Overview Card */}
                    <div className="bg-[#F6F3FF] rounded-xl p-6 mb-6 shadow">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="bg-[#FFF7D6] text-[#FF914D] px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                          <span role="img" aria-label="honeymoon">💍</span> Honeymoon
                        </span>
                        <span className="bg-[#E6F9F0] text-[#1BC47D] px-3 py-1 rounded-full text-xs font-semibold">7 Days</span>
                      </div>
                      <p className="text-gray-700">
                        {trip.description ||
                          "Embark on an unforgettable journey with our carefully crafted itinerary. Begin with a seamless airport transfer to the enchanting town of Ubud, where you'll experience the breathtaking Tegenungan Waterfall, the lush Tegallalang Rice Fields, and the playful Ubud Monkey Forest. Delight in an exhilarating swing adventure at Aloha, offering stunning views, and explore the vibrant Ubud Village. On the third day, discover the majestic Handra Gate and the iconic Tanah Lot temple before settling into you..."}
                      </p>
                    </div>
                    {/* Why Choose Us */}
                    <div className="mb-8">
                      <h2 className="text-2xl font-bold mb-4 text-gray-700">Why Choose Us?</h2>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
                          <span className="text-[#FF914D] text-2xl">🔒</span>
                          <div className="font-semibold">Two-factor authentication</div>
                          <div className="text-gray-500 text-sm">Two-factor authentication ensures added protection by using verification steps.</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
                          <span className="text-[#FF914D] text-2xl">🛡️</span>
                          <div className="font-semibold">Fraud detection and alerts</div>
                          <div className="text-gray-500 text-sm">Fraud detection safeguards your money, sending instant alerts for any activity.</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
                          <span className="text-[#FF914D] text-2xl">🧬</span>
                          <div className="font-semibold">Biometric access</div>
                          <div className="text-gray-500 text-sm">Easy and secure! Login with biometrics.</div>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow flex flex-col gap-2">
                          <span className="text-[#FF914D] text-2xl">🔐</span>
                          <div className="font-semibold">End-to-end encryption</div>
                          <div className="text-gray-500 text-sm">No eavesdropping, protecting your data from start to finish.</div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Right Side */}
                  <div className="w-full md:w-[350px] flex flex-col gap-4">
                    <button className="w-full py-3 rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold shadow hover:opacity-90 transition">BOOK THIS TRIP</button>
                    <button className="w-full py-3 rounded-lg border border-[#FF914D] text-[#FF914D] font-semibold shadow hover:bg-[#FFF7F0] transition">CUSTOMIZE THIS TRIP</button>
                    {/* Query Form */}
                    <div className="bg-[#FFF6F2] rounded-xl p-4 shadow mt-2">
                      <div className="font-semibold mb-2 text-[#FF3131]">Want to Go For A Amazing Holiday?</div>
                      <div className="text-xs text-gray-500 mb-2">Provide Your Details to Know Best Holiday Deals</div>
                      <form className="flex flex-col gap-2">
                        <input type="text" className="w-full px-3 py-2 rounded border border-gray-200 bg-gray-100 text-sm" value="Norwegian Dreams: Winters Special" readOnly />
                        <div className="flex gap-2">
                          <div className="flex-1 flex flex-col">
                            <label className="text-xs mb-1">Adult</label>
                            <input type="number" min="0" className="w-full px-2 py-1 rounded border border-gray-200 text-sm" defaultValue={0} />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <label className="text-xs mb-1">Child</label>
                            <input type="number" min="0" className="w-full px-2 py-1 rounded border border-gray-200 text-sm" defaultValue={0} />
                          </div>
                          <div className="flex-1 flex flex-col">
                            <label className="text-xs mb-1">Infant</label>
                            <input type="number" min="0" className="w-full px-2 py-1 rounded border border-gray-200 text-sm" defaultValue={0} />
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <input type="text" className="flex-1 px-2 py-1 rounded border border-gray-200 text-sm" placeholder="Your Name" />
                          <input type="email" className="flex-1 px-2 py-1 rounded border border-gray-200 text-sm" placeholder="Your email" />
                        </div>
                        <input type="text" className="w-full px-2 py-1 rounded border border-gray-200 text-sm" placeholder="+91 Your Number" />
                        <button type="submit" className="w-full py-2 rounded bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold mt-2">SEND QUERY</button>
                      </form>
                    </div>
                  </div>
                </div>
              </>
            )}
          </>
        )}
        {/* Other tabs */}
        {activeTab === "Itinerary" && (
          <div className="p-8 bg-white rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Itinerary</h2>
            {trip.itinerary ? (
              <div>
                <p>{trip.itinerary.summary || "Itinerary summary not available."}</p>
                <ul className="mt-4 list-disc pl-5">
                  {trip.itinerary.details?.map((detail, index) => (
                    <li key={index} className="text-gray-700 mb-2">
                      {detail}
                    </li>
                  )) || <p>No detailed itinerary available.</p>}
                </ul>
              </div>
            ) : (
              <p>Itinerary details not available.</p>
            )}
          </div>
        )}
        {activeTab === "Inclusions" && (
          <div className="p-8 bg-white rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Inclusions</h2>
            <p>Inclusions content goes here...</p>
          </div>
        )}
        {activeTab === "Terms & Condition" && (
          <div className="p-8 bg-white rounded-xl shadow">
            <h2 className="text-xl font-bold mb-2">Terms & Condition</h2>
            <p>{trip.termsAndConditions || "Terms and conditions not available."}</p>
            <div className="mt-4">
              <h3 className="text-lg font-bold mb-2">Additional Information</h3>
              <p>
                Developers often believe they will be off to a flying start if they skip the designing process and jump directly to code.
              </p>
              <p>
                We have made it very easy for builders to use Locofy. We are a Figma plugin (Adobe XD & Sketch support coming soon) and completely browser-based tool. You can use your existing tech
                & design stacks to transform Figma to code.
              </p>
              <p>
                Locofy is built by creators for creators and therefore, we understand designers & creators need flexibility and choices. Hence, Locofy provides a plethora of tools and options, not
                present in vanilla Figma, to accelerate your design-to-code journey.
              </p>
              <p>
                Moreover, Locofy plugin offers a comprehensive collection of components such as buttons, inputs, and dropdowns from all the top UI libraries namely Material, Chakra UI, Bootstrap, and
                Ant Design, easing the process of designing while offering high flexibility & choices as you take your project from Figma to code.
              </p>
              <p>
                Locofy converts your design components into the apt code by the help of something called "Tags". Tags are essentially types that you can assign to components so Locofy can create
                proper code for them.
              </p>
              <p>
                Tagging allows you to turn static layers on your Figma design files into interactive functional buttons, input fields, videos, iFrames, and more.
                Locofy plugin uses AI to scan your design and recommends tags, so you can quickly tag all the components and go from Figma to code in astronomical speeds.
              </p>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}