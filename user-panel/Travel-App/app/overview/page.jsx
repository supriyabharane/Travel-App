"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

const whyChooseUsItems = [
  {
    icon: <svg>/* Your SVG Icon */</svg>,
    title: "Expert Guides",
    description: "Our guides are experts in their field, ensuring you have the best experience.",
  },
  {
    icon: <svg>/* Your SVG Icon */</svg>,
    title: "Best Price Guarantee",
    description: "We offer the best prices, guaranteed. Find a lower price, and we'll match it.",
  },
  {
    icon: <svg>/* Your SVG Icon */</svg>,
    title: "24/7 Customer Support",
    description: "Our support team is available 24/7 to assist you with any inquiries.",
  },
  {
    icon: <svg>/* Your SVG Icon */</svg>,
    title: "Flexible Itineraries",
    description: "We offer flexible itineraries to suit your preferences and schedule.",
  },
];

export default function OverviewPage() {
  const router = useRouter();
  const { user } = useAuth();

  React.useEffect(() => {
    if (!user) {
      router.push("/login");
    }
  }, [user, router]);

  return (
    <div className="max-w-6xl mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Trip Overview</h1>
      <p className="text-gray-500 mb-6">Domestic Trip &gt; Bali - Ubud Kuta</p>
      <div className="bg-white border border-gray-200 rounded-lg shadow p-4">
        <h2 className="text-lg font-semibold">Your Trip Details</h2>
        <p className="text-sm text-gray-500 mt-2">Explore the beauty of Bali - Ubud Kuta.</p>
      </div>
      <div className="space-y-6 mt-8">
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
  );
}
