"use client";
import React from "react";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#14213D] text-white relative sm:mt-12 mt-24">
      
      <div className="absolute inset-x-0 sm:-top-12 -top-24 px-4 sm:px-0">
        <div className="bg-[#FCA311] rounded-[10px] px-6 sm:px-10 py-6 sm:py-8 mx-auto max-w-7xl flex flex-col sm:flex-row items-center sm:justify-between gap-4 sm:gap-0">
          <div className="text-center sm:text-left sm:space-y-0 space-y-2">
            <h2 className="text-xl sm:text-[24px] font-medium">
              Still Confused? Need help with anything? Contact us.
            </h2>
            <p className="text-xs">
              Our dedicated customer support team is available 24/7 to assist you with any inquiries, booking changes, or travel-related questions.
            </p>
          </div>
          <button className="bg-white text-[#FF3131] text-sm px-5 py-2.5 rounded-[3px] font-medium">
            Contact Us
          </button>
        </div>
      </div>

      
      <div className="max-w-7xl mx-auto sm:py-48 pt-40 pb-12 px-4 sm:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 sm:gap-20">
          <div className="space-y-2 text-center sm:text-left">
            <div className="flex justify-center sm:justify-start items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-2xl font-bold">
                👜 Logo
              </span>
            </div>
            <p className="text-sm">
              "Discover the World with Lorem - Your Passport to Unforgettable Journeys!"
            </p>
          </div>

          
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-medium">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              {["About Us", "FAQs", "Contact Us", "Terms & Conditions", "Blogs"].map((item) => (
                <li key={item} className="hover:text-gray-400 cursor-pointer">
                  {item}
                </li>
              ))}
            </ul>
          </div>

         
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-medium">Popular Destinations</h3>
            <ul className="space-y-3 text-sm">
              {["Himachal", "Uttarakhand", "Kashmir", "Kerala"].map((place) => (
                <li key={place} className="hover:text-gray-400 cursor-pointer">
                  {place}
                </li>
              ))}
            </ul>
          </div>

         
          <div className="space-y-4 text-center sm:text-left">
            <h3 className="text-lg font-medium">Contact Info</h3>
            <div className="space-y-1">
              <p className="text-sm">+91 95994 91709</p>
              <p className="text-sm">sales@tolearntotravel</p>
            </div>

           
            <div className="space-y-2">
              <h3 className="text-lg font-medium">Follow us</h3>
              <div className="flex justify-center sm:justify-start space-x-4">
                <a href="#" className="p-3 bg-white text-black rounded-full">
                  <FaFacebookF />
                </a>
                <a href="#" className="p-3 bg-white text-black rounded-full">
                  <FaTwitter />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
