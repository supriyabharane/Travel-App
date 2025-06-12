"use client";
import { useAuth } from '@/context/AuthContext';
import Link from "next/link";
import DropdownMenu from "./DropdownMenu";
import { Menu, X, ChevronDown, ChevronUp, User, LogOut, Heart, Search } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const router = useRouter();
  const { user, logout } = useAuth();

  const toggleDropdown = (title) => {
    setOpenDropdown(openDropdown === title ? null : title);
  };

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const domesticItems = [
    { label: "Mountains", href: "/packages?type=mountain" },
    { label: "Beaches", href: "/packages?type=beach" },
    { label: "Desert Safari", href: "/packages?type=desert" },
    { label: "Bali Ubud Kuta", href: "/itinerary-detail/bali-ubud-kuta" },
  ];

  const internationalItems = [
    { label: "Europe Tour", href: "/packages?country=Europe" },
    { label: "Asia Tour", href: "/packages?country=Asia" },
    { label: "America Tour", href: "/packages?country=America" },
  ];

  const seasonalItems = [
    { label: "Winter Specials", href: "/packages?season=Winter" },
    { label: "Summer Break", href: "/packages?season=Summer" },
  ];

  const userProfileItems = [
    { label: "Your Trips", href: "/your-trips" },
    { label: "Edit Profile", href: "/user-profile/edit-profile" },
    { label: "Change Password", href: "/user-profile/change-password" },
  ];

  return (
    <>
      {/* Offer Bar */}
      <div className="w-full bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white text-center py-2 text-sm font-medium">
        Offer Name Lorem Ipsum&nbsp;
        <Link href="#" className="underline font-semibold">Explore Now</Link>
      </div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-0 lg:px-0 md:px-2">
          {/* Top Row: Wishlist, Contact, Callback, WhatsApp, Search, Sign up */}
          <div className="hidden md:flex justify-end items-center py-2 gap-3">
            <button className="flex items-center gap-1 text-[#FF3131] font-semibold hover:underline">
              <Heart size={18} className="text-[#FF3131]" />
              Your Wishlists
              <span className="ml-1 bg-[#FF3131] text-white rounded-full px-2 text-xs">3</span>
            </button>
            <button className="font-semibold hover:underline">Contact Us</button>
            <button
              onClick={() => router.push('/request-callback')}
              className="bg-black text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#FF3131] transition"
            >
              Request Callback
            </button>
            <span className="flex items-center gap-1 text-green-500 font-semibold">
              <svg width="18" height="18" viewBox="0 0 32 32" fill="none"><circle cx="16" cy="16" r="16" fill="#25D366"/><path d="M23.6 19.6c-.4-.2-2.3-1.1-2.7-1.2-.4-.2-.7-.2-1 .2-.3.4-1.1 1.2-1.3 1.4-.2.2-.5.3-.9.1-.4-.2-1.7-.6-3.2-2-1.2-1.1-2-2.5-2.2-2.9-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.2-.4.3-.7.1-.2 0-.5-.1-.7-.1-.2-1-2.4-1.4-3.3-.4-.9-.7-.8-1-.8h-.8c-.2 0-.5.1-.7.3-.2.2-1 1-1 2.5 0 1.5 1.1 3 1.3 3.2.2.2 2.1 3.2 5.1 4.4 1.8.7 2.5.8 3 .7.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.1-1.2z" fill="#fff"/></svg>
              +91-95994 91709
            </span>
            <div className="relative">
              <input
                type="text"
                placeholder="Search"
                className="border border-gray-200 rounded-lg px-3 py-2 pl-8 focus:outline-none focus:ring-2 focus:ring-[#FF914D] w-40"
              />
              <Search size={16} className="absolute left-2 top-2.5 text-gray-400" />
            </div>
            <button 
              onClick={() => router.push('/signup')}
              className="bg-[#FF3131] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#FF914D] transition"
            >
              Sign up
            </button>
          </div>
          {/* Main Navbar Row */}
          <div className="flex justify-between items-center h-20">
            <Link href="/" className="flex items-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-2xl font-bold">
                👜 Logo
              </span>
            </Link>
            <div className="hidden sm:flex space-x-8">
              <DropdownMenu
                title="Domestic Trips"
                items={domesticItems}
                className="text-[#000929] text-[14px] hover:text-orange-500 font-playfair"
              />
              <DropdownMenu
                title="International Trips"
                items={internationalItems}
                className="text-[#000929] text-[14px] hover:text-orange-500 font-playfair"
              />
              <DropdownMenu
                title="Fixed Departures"
                items={seasonalItems}
                className="text-[#000929] text-[14px] hover:text-orange-500 font-playfair"
              />
              <Link
                href="#"
                className="text-gray-700 text-[14px] hover:text-orange-500 font-playfair"
              >
                Speciality Tours
              </Link>
              <Link
                href="/customize-trip"
                className="text-gray-700 text-[14px] hover:text-orange-500 font-playfair"
              >
                Customize Trip
              </Link>
              <Link
                href="/your-trips"
                className="text-gray-700 text-[14px] hover:text-orange-500 font-playfair"
              >
                Your Trips
              </Link>
            </div>
            {/* Desktop Navigation Buttons */}
            <div className="sm:flex hidden space-x-4">
              {user ? (
                <>
                  <button 
                    onClick={() => router.push('/user-profile')}
                    className="px-[24px] py-[12px] border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100 flex items-center gap-2"
                  >
                    <User size={18} />
                    Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="px-[24px] py-[12px] text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] flex items-center gap-2"
                  >
                    <LogOut size={18} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => router.push('/login')}
                    className="px-[24px] py-[12px] border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => router.push('/signup')}
                    className="px-[24px] py-[12px] text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
                  >
                    Sign up
                  </button>
                </>
              )}
            </div>
            {/* Mobile Navigation */}
            <div className="flex sm:hidden items-center gap-2">
              {user ? (
                <>
                  <button 
                    onClick={() => router.push('/user-profile')}
                    className="px-4 py-2 border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100 text-sm flex items-center gap-1"
                  >
                    <User size={16} />
                    Profile
                  </button>
                  <button 
                    onClick={handleLogout}
                    className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-sm flex items-center gap-1"
                  >
                    <LogOut size={16} />
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <button 
                    onClick={() => router.push('/login')}
                    className="px-4 py-2 border-2 border-[#E0DEF7] rounded-lg text-[#000929] hover:bg-gray-100 text-sm"
                  >
                    Login
                  </button>
                  <button 
                    onClick={() => router.push('/signup')}
                    className="px-4 py-2 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-sm"
                  >
                    Sign up
                  </button>
                </>
              )}
              <button
                className="p-2 rounded-md text-gray-700 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden flex flex-col items-start p-2">
              <div className="w-full">
                <button
                  onClick={() => toggleDropdown("Domestic")}
                  className="w-full text-left flex justify-between items-center px-4 py-2 text-gray-700 hover:text-orange-500"
                >
                  Domestic Trips
                  {openDropdown === "Domestic" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openDropdown === "Domestic" && (
                  <div className="pl-6 py-2 space-y-2">
                    {domesticItems.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href}
                        className="block text-gray-600 hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-full">
                <button
                  onClick={() => toggleDropdown("International")}
                  className="w-full text-left flex justify-between items-center px-4 py-2 text-gray-700 hover:text-orange-500"
                >
                  International Trips
                  {openDropdown === "International" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openDropdown === "International" && (
                  <div className="pl-6 py-2 space-y-2">
                    {internationalItems.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href}
                        className="block text-gray-600 hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="w-full">
                <button
                  onClick={() => toggleDropdown("Seasonal")}
                  className="w-full text-left flex justify-between items-center px-4 py-2 text-gray-700 hover:text-orange-500"
                >
                  Fixed Departures
                  {openDropdown === "Seasonal" ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                </button>
                {openDropdown === "Seasonal" && (
                  <div className="pl-6 py-2 space-y-2">
                    {seasonalItems.map((item) => (
                      <Link 
                        key={item.label}
                        href={item.href}
                        className="block text-gray-600 hover:text-orange-500"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="#"
                className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 text-left"
              >
                Speciality Tours
              </Link>
              <Link
                href="/customize-trip"
                className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 text-left"
              >
                Customize Trip
              </Link>
              <Link
                href="/your-trips"
                className="w-full px-4 py-2 text-gray-700 hover:text-orange-500 text-left"
              >
                Your Trips
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
}