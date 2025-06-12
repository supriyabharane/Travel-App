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
  const [completedSteps, setCompletedSteps] = useState([
    true,
    false,
    false,
    false,
    false,
  ]);
  // Update the formData state in add-itinerary/page.jsx
const [formData, setFormData] = useState({
  overview: {
    title: '',
    description: '',
    destinationCountry: '',
    destinationType: '',
    destinationSeason: '',
    duration: {
      days: 0,
      nights: 0
    },
    images: []
  },
  itinerary: [{
    dayNumber: '',
    highlight: '',
    descriptions: [{
      text: '',
      image: {
        url: '',
        alt: ''
      }
    }]
  }],
  stays: [{
    location: '',
    duration: '',
    hotels: [{
      name: '',
      type: '',
      features: [],
      images: []
    }]
  }],
  pricing: [{
    title: '',
    startingPrice: 0,
    currency: 'INR',
    benefits: []
  }],
  features: [{
    title: '',
    description: '',
    color: '',
    secondColor: ''
  }],
  support: {
    phone: '',
    email: ''
  }
});


  const StepComponent = steps[currentStep].component;

  const handleNext = async () => {
    if (currentStep === steps.length - 1) {
      try {
        // Ensure all required fields are present
        const tripData = {
          title: formData.overview.title,
          description: formData.overview.description,
          destinationCountry: formData.overview.destinationCountry,
          destinationType: formData.overview.destinationType,
          destinationSeason: formData.overview.destinationSeason,
          duration: {
            days: parseInt(formData.overview.duration?.days || 0),
            nights: parseInt(formData.overview.duration?.days - 1 || 0)
          },
          images: formData.overview.images || [],
          itinerary: [{
            dayNumber: "Day 1",
            highlight: "First Day Highlights",
            descriptions: [{
              text: "Day 1 description"
            }]
          }],
          stays: [{
            location: "Default Location",
            duration: `${formData.overview.duration?.nights || 0}N`,
            hotels: [{
              name: "Default Hotel",
              type: "Standard",
              features: [],
              images: []
            }]
          }],
          pricing: [{
            title: "Standard Package",
            startingPrice: 0,
            currency: "INR",
            benefits: []
          }],
          features: [{
            title: "Feature 1",
            description: "Feature description",
            color: "#ECF0FB",
            secondColor: "#2E68FD"
          }]
        };
  
        const response = await fetch('/api/trips/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(tripData),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.error || 'Failed to create trip');
        }
  
        const data = await response.json();
        if (data.success) {
          router.push('/itinerary');
        } else {
          throw new Error(data.error || 'Failed to create trip');
        }
      } catch (error) {
        console.error('Error creating trip:', error);
        alert('Failed to create trip. Please try again.');
      }
    } else {
      setCompletedSteps((prev) => {
        const updatedSteps = [...prev];
        updatedSteps[currentStep] = true;
        return updatedSteps;
      });
      setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
    }
  };
  

  const handleBack = () => {
    setCompletedSteps((prev) => {
      const updatedSteps = [...prev];
      updatedSteps[currentStep] = false;
      return updatedSteps;
    });
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  return (
    <div>
      <Header title="Overview" actions={[{ label: "Publish Itinerary" }]} />

      <div className="sm:p-6 p-4 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="space-y-1 w-full sm:w-auto">
            <button
              className="text-[16px] sm:text-lg font-semibold flex items-center gap-x-2"
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="w-5 h-5" /> Add Itinerary
            </button>
            <p className="text-xs text-gray-500">
              Manage your itinerary, monitor analytics
            </p>
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            <button className="w-full sm:w-auto px-3 py-2 text-sm rounded-[10px] border border-[#000] header-button-shadow flex items-center justify-center sm:justify-start gap-x-1.5">
              Preview Itinerary <EyeIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="sm:flex hidden items-center bg-gray-100 px-4 py-3 rounded-md">
          {steps.map((step, index) => (
            <div key={index} className="flex items-center">
              <div
                className={`w-5 h-5 flex items-center justify-center rounded-full border p-1 transition-all duration-300
                  ${
                    completedSteps[index] || index === currentStep
                      ? "bg-black text-white border-black"
                      : "bg-gray-600 text-white border-gray-600"
                  }
                `}
              >
                <Check size={14} />
              </div>

              <span
                className={`ml-2 text-sm font-medium ${
                  completedSteps[index] || index === currentStep
                    ? "text-black"
                    : "text-gray-500"
                }`}
              >
                {step.label}
              </span>

              {index < steps.length - 1 && (
                <div className="flex-1 mx-2 border-t border-dashed w-20 border-gray-300"></div>
              )}
            </div>
          ))}
        </div>

        <StepComponent formData={formData} setFormData={setFormData} />

        <div className="flex justify-end items-center gap-x-3 mt-6">
          <button
            className={`flex items-center gap-2 px-6 py-3 border rounded-xl transition-all duration-300 ${
              currentStep === 0
                ? "opacity-50 cursor-not-allowed"
                : "hover:bg-gray-100"
            }`}
            onClick={handleBack}
            disabled={currentStep === 0}
          >
            <ArrowLeftIcon size={16} /> Go Back
          </button>

          <button
            className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-red-500 to-orange-400 text-white rounded-xl hover:opacity-90 transition"
            onClick={handleNext}
          >
            {currentStep === steps.length - 1 ? 'Publish Trip' : 'Continue →'}
          </button>
        </div>
      </div>
    </div>
  );
}