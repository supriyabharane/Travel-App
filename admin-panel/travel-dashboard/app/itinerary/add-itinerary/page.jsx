"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, Check, EyeIcon } from "lucide-react";
import Header from "@/components/Header";
import TripOverview from "./components/TripOverview";
import TripItinerary from "./components/TripItinerary";
import TripInclusions from "./components/TripInclusions";
import TripPricing from "./components/TripPricing";
import TripTerms from "./components/TripTerms";

const steps = [
  { label: "Overview", component: TripOverview },
  { label: "Itinerary", component: TripItinerary },
  { label: "Inclusions", component: TripInclusions },
  { label: "Pricings & Reviews", component: TripPricing },
  { label: "Terms & Condition", component: TripTerms },
];

export default function AddItinerary() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([true, false, false, false, false]);
  const [formData, setFormData] = useState({
    overview: {
      title: "",
      description: "",
      destinationCountry: "",
      destinationType: "",
      destinationSeason: "",
      duration: { days: 0, nights: 0 },
      images: [],
    },
    itinerary: {},
    stays: [],
    transfers: [],
    pricing: { valuePack: 0, elitePack: 0, businessPack: 0 },
    termsAndConditions: "",
    refundPolicy: "",
  });

  const StepComponent = steps[currentStep].component; // ✅ Fix: Dynamically render the correct step component

  const handleNext = async () => {
    if (currentStep === steps.length - 1) {
      try {
        // Convert itinerary object to array format
        const itineraryArray = Object.entries(formData.itinerary).map(([day, data]) => ({
          dayNumber: parseInt(day, 10), // ✅ Ensure dayNumber is a number
          overview: data.overview || "",
          schedule: {
            morning: data.morning || "",
            afternoon: data.afternoon || "",
            evening: data.evening || "",
          },
        }));

        // Ensure stays have at least one entry
        const stays = formData.stays.length
          ? formData.stays
          : [{ name: "Default Stay", hotelType: "Standard", nights: formData.overview.duration.nights, features: [], images: [] }];

        const tripData = {
          title: formData.overview.title,
          description: formData.overview.description,
          destinationCountry: formData.overview.destinationCountry,
          destinationType: formData.overview.destinationType,
          destinationSeason: formData.overview.destinationSeason,
          duration: {
            days: parseInt(formData.overview.duration.days, 10),
            nights: parseInt(formData.overview.duration.days, 10) - 1,
          },
          images: formData.overview.images.map(img => ({
            url: img.url,
            alt: img.alt || img.url.split("/").pop(),
          })),
          itinerary: itineraryArray,
          stays,
          transfers: formData.transfers,
          pricing: {
            valuePack: parseFloat(formData.pricing.valuePack) || 0,
            elitePack: parseFloat(formData.pricing.elitePack) || 0,
            businessPack: parseFloat(formData.pricing.businessPack) || 0,
          },
          termsAndConditions: formData.termsAndConditions || "Standard Terms and Conditions Apply",
          refundPolicy: formData.refundPolicy || "Standard Refund Policy Applies",
          status: "draft",
        };

        const response = await fetch("/api/trips/create", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(tripData),
        });

        const data = await response.json();
        if (!response.ok) throw new Error(data.error || "Failed to create trip");

        router.push("/itinerary");
      } catch (error) {
        console.error("🚨 Error creating trip:", error);
        alert("Failed to create trip. Please try again.");
      }
    } else {
      setCompletedSteps(prev => {
        const updated = [...prev];
        updated[currentStep] = true;
        return updated;
      });
      setCurrentStep(prev => Math.min(prev + 1, steps.length - 1));
    }
  };

  const handleBack = () => {
    setCompletedSteps(prev => {
      const updated = [...prev];
      updated[currentStep] = false;
      return updated;
    });
    setCurrentStep(prev => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <Header title="Overview" actions={[{ label: "Publish Itinerary" }]} />

      <div className="sm:p-6 p-4 space-y-6">
        {/* Header Section */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="space-y-1 w-full sm:w-auto">
            <button className="text-[16px] sm:text-lg font-semibold flex items-center gap-x-2" onClick={() => router.back()}>
              <ArrowLeftIcon className="w-5 h-5" /> Add Itinerary
            </button>
            <p className="text-xs text-gray-500">Manage your itinerary, monitor analytics</p>
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            <button className="w-full sm:w-auto px-3 py-2 text-sm rounded-[10px] border border-[#000] header-button-shadow flex items-center justify-center sm:justify-start gap-x-1.5">
              Preview Itinerary <EyeIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="sm:flex hidden items-center bg-gray-100 px-4 py-3 rounded-md">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div className={`w-5 h-5 flex items-center justify-center rounded-full border p-1 transition-all duration-300 ${
                  completedSteps[index] || index === currentStep ? "bg-black text-white border-black" : "bg-gray-600 text-white border-gray-600"
                }`}
              >
                <Check size={14} />
              </div>
              <span className={`ml-2 text-sm font-medium ${completedSteps[index] || index === currentStep ? "text-black" : "text-gray-500"}`}>
                {step.label}
              </span>
              {index < steps.length - 1 && <div className="flex-1 mx-2 border-t border-dashed w-20 border-gray-300"></div>}
            </div>
          ))}
        </div>

        {/* Step Content */}
        <StepComponent formData={formData} setFormData={setFormData} />

        {/* Navigation Buttons */}
        <div className="flex justify-end items-center gap-x-3 mt-6">
          <button className={`px-6 py-3 border rounded-xl ${currentStep === 0 ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-100"}`} onClick={handleBack} disabled={currentStep === 0}>
            <ArrowLeftIcon size={16} /> Go Back
          </button>
          <button className="px-6 py-3 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-xl hover:opacity-90 transition" onClick={handleNext}>
            {currentStep === steps.length - 1 ? "Publish Trip" : "Continue →"}
          </button>
        </div>
      </div>
    </div>
  );
}
