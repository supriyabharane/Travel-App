import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  FaHotel,
  FaCar,
  FaBinoculars,
  FaShieldAlt,
  FaFingerprint,
  FaLock,
  FaExclamationTriangle
} from 'react-icons/fa';

const Overview = ({ trip }) => {
  const router = useRouter();
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  const whyChooseUsItems = [
    {
      icon: <FaShieldAlt className="w-6 h-6 text-blue-500" />,
      title: "Two-factor authentication",
      description: "Two-factor authentication ensures added protection by using verification steps."
    },
    {
      icon: <FaExclamationTriangle className="w-6 h-6 text-red-500" />,
      title: "Fraud detection and alerts",
      description: "Fraud detection safeguards your money, sending instant alerts for any activity."
    },
    {
      icon: <FaFingerprint className="w-6 h-6 text-green-500" />,
      title: "Biometric access",
      description: "Easily and securely log in with biometric features, and facial recognition."
    },
    {
      icon: <FaLock className="w-6 h-6 text-blue-500" />,
      title: "End-to-end encryption",
      description: "By encryption, protecting your data from unauthorized access."
    }
  ];

  if (!trip) return null;

  return (
    <div className="mx-auto max-w-7xl flex sm:flex-row flex-col items-start gap-x-10 gap-y-10 sm:pt-20 pt-12 sm:px-0 px-4">
      <div className="space-y-12 flex-1">
        <div className="sm:space-y-6 space-y-4">
          <h2 className="sm:text-3xl text-2xl font-bold text-[#0A0A0A]">
            Trip Overview
          </h2>
          <div
            className="sm:p-6 p-4 rounded-[16px]"
            style={{
              background:
                "linear-gradient(90deg, #f4eefb 0%, #fdfaf6 40%, #f4eefb 100%)",
            }}
          >
            <div className="bg-[#FAFFDB] px-4 py-2.5 rounded-md sm:text-base text-sm font-medium inline-flex items-center gap-2 border border-[#000000] border-opacity-15">
              <img
                src={trip.images?.[0]?.url || "https://images.unsplash.com/photo-1469474968028-56623f02e42e"}
                alt="icon"
                className="w-5 h-5 rounded-full object-cover"
              />
              {trip.destinationType}
              <span className="w-4 h-4 bg-gradient-to-r from-[#FF3131] to-[#FF914D] rounded-full flex items-center justify-center"></span>
              {trip.duration?.days} Days
            </div>

            <p className="sm:text-[16px] text-sm text-[#4D525F] mt-4">
              {trip.description}
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <h2 className="sm:text-3xl text-2xl font-bold text-[#0A0A0A]">
            Why Choose Our Package?
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

      <div className="w-full sm:w-[400px] space-y-6">
        <div className="border rounded-b-lg">
          <div className="relative p-6 rounded-t-lg overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF3131] to-[#FF914D] opacity-25"></div>
            <div className="relative z-10 text-center text-[#222222] space-y-1.5">
              <h3 className="text-lg font-normal">Want to Go For An Amazing Holiday?</h3>
              <p className="text-xs text-[#323232] font-medium">
                Provide Your Details to Know Best Holiday Deals
              </p>
            </div>
          </div>

          <div className="sm:p-6 p-4 space-y-4">
            <div className="space-y-1.5">
              <label className="block text-sm font-medium">Package Name</label>
              <input
                type="text"
                className="w-full px-4 py-2.5 border border-[#DDDDDD] rounded-[4px] bg-[#EEEEEE] text-[#222222] font-medium"
                value={trip.title}
                disabled
              />
            </div>

            <div className="flex sm:flex-nowrap flex-wrap gap-4">
              {[
                { label: "Adult", value: adults, setValue: setAdults },
                { label: "Child", value: children, setValue: setChildren },
                { label: "Infant", value: infants, setValue: setInfants },
              ].map((item, index) => (
                <div key={index} className="flex flex-col space-y-1.5">
                  <span className="text-sm text-[#222222] font-medium">
                    {item.label}
                  </span>
                  <div className="flex items-center border rounded">
                    <button
                      className="w-8 h-10 bg-[#F2F2F2] text-lg rounded-l border-y border-l border-[#DDDDDD] flex items-center justify-center"
                      onClick={() => item.setValue(Math.max(item.value - 1, 0))}
                    >
                      -
                    </button>
                    <p className="w-12 h-10 flex items-center justify-center text-sm bg-white font-semibold border border-[#DDDDDD]">
                      {item.value}
                    </p>
                    <button
                      className="w-8 h-10 bg-[#F2F2F2] text-lg rounded-r border-y border-r border-[#DDDDDD] flex items-center justify-center"
                      onClick={() => item.setValue(item.value + 1)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex sm:flex-row flex-col gap-2.5">
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">Your Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border rounded border-[#DDDDDD] text-sm outline-none"
                />
              </div>
              <div className="space-y-1.5">
                <label className="block text-sm font-medium">Your Email</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-2 border rounded border-[#DDDDDD] text-sm outline-none"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-sm font-medium">Your Number</label>
              <div className="flex">
                <span className="px-4 py-2 border border-[#DDDDDD] rounded-l text-sm outline-none">
                  +91
                </span>
                <input
                  type="text"
                  placeholder="Your Number"
                  className="w-full p-2 rounded-r border border-[#DDDDDD] text-sm outline-none"
                />
              </div>
            </div>

            <button className="w-full bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white p-3 rounded-full text-base font-normal">
              SEND QUERY
            </button>
            
            <button 
              onClick={() => router.push('/payment')}
              className="w-full bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white p-3 rounded-full text-base font-normal"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>

        <div className="max-w-md mx-auto space-y-6">
          <div className="px-4 pt-6 rounded-lg border">
            <div className="flex justify-between items-center text-gray-700">
              <div className="flex items-center cursor-pointer gap-x-2">
                <FaBinoculars className="text-xl" />
                <span className="text-sm">Sightseeing</span>
              </div>
              <div className="flex items-center cursor-pointer gap-x-2">
                <FaHotel className="text-xl" />
                <span className="text-sm">Hotels</span>
              </div>
              <div className="flex items-center cursor-pointer gap-x-2">
                <FaCar className="text-xl" />
                <span className="text-sm">Transport</span>
              </div>
            </div>

            <div className="relative mt-8">
              <hr className="border-gray-300" />
              <div className="absolute left-1/2 transform -translate-x-1/2 -top-3 px-3 py-1 bg-gray-200 text-gray-700 text-xs rounded-lg">
                Duration & Details
              </div>
            </div>

            <div className="text-[#222222] text-sm p-6 space-y-2">
              <p>
                <span>Duration:</span> {trip.duration?.nights} Nights & {trip.duration?.days} Days
              </p>
              <p>
                <span>Destination:</span> {trip.destinationCountry}
              </p>
            </div>
          </div>

          <div className="bg-gray-200 p-4 rounded-lg flex items-start space-x-3">
            <img
              src="/icons/customer-care.png"
              alt="Customer Care"
              className="w-10 h-10"
            />
            <div>
              <h3 className="font-semibold text-gray-900">Need Help?</h3>
              <p className="text-gray-700 text-sm">
                Call Us: <span className="font-semibold">+91 1234567890</span>
                <br />
                Mail Us: <span className="font-semibold">support@travel.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Overview;