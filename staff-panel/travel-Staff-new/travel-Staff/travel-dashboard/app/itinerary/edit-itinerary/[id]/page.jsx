"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ArrowLeftIcon, Check, EyeIcon } from "lucide-react";
import Header from "@/components/Header";
import TripOverview from "../../add-itinerary/components/TripOverview";
import TripItinerary from "../../add-itinerary/components/TripItinerary";
import TripInclusions from "../../add-itinerary/components/TripInclusions";
import TripPricing from "../../add-itinerary/components/TripPricing";
import TripTerms from "../../add-itinerary/components/TripTerms";

const steps = [
  { label: "Overview", component: TripOverview },
  { label: "Itinerary", component: TripItinerary },
  { label: "Inclusions", component: TripInclusions },
  { label: "Pricings & Reviews", component: TripPricing },
  { label: "Terms & Condition", component: TripTerms },
];

export default function EditItinerary({ params }) {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState([true, false, false, false, false]);
  const [loading, setLoading] = useState(true);
  const [formData, setFormData] = useState({
    overview: {
      title: '',
      description: '',
      destinationCountry: '',
      destinationType: '',
      destinationSeason: '',
      duration: '',
      images: []
    },
    itinerary: [],
    inclusions: [],
    pricing: {
      adult: 0,
      child: 0,
      currency: 'USD'
    },
    terms: ''
  });

  useEffect(() => {
    const fetchTrip = async () => {
      try {
        const response = await fetch(`/api/trips/${params.id}`);
        if (!response.ok) {
          throw new Error('Failed to fetch trip');
        }
        const data = await response.json();
        
        if (data.success) {
          const trip = data.data;
          setFormData({
            overview: {
              title: trip.title,
              description: trip.description,
              destinationCountry: trip.destinationCountry,
              destinationType: trip.destinationType,
              destinationSeason: trip.destinationSeason,
              duration: trip.duration,
              images: trip.images || []
            },
            itinerary: trip.itinerary || [],
            inclusions: trip.inclusions || [],
            pricing: trip.price || {
              adult: 0,
              child: 0,
              currency: 'USD'
            },
            terms: trip.terms || ''
          });
        } else {
          throw new Error(data.error || 'Failed to fetch trip');
        }
      } catch (error) {
        console.error('Error fetching trip:', error);
        alert('Failed to fetch trip details. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    if (params.id) {
      fetchTrip();
    }
  }, [params.id]);

  const StepComponent = steps[currentStep].component;

  const handleUpdate = async () => {
    try {
      const tripData = {
        title: formData.overview.title,
        description: formData.overview.description,
        destinationCountry: formData.overview.destinationCountry,
        destinationType: formData.overview.destinationType,
        destinationSeason: formData.overview.destinationSeason,
        duration: parseInt(formData.overview.duration),
        itinerary: formData.itinerary,
        inclusions: formData.inclusions,
        price: formData.pricing,
        terms: formData.terms,
        images: formData.overview.images
      };

      const response = await fetch(`/api/trips/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(tripData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to update trip');
      }

      router.push('/itinerary');
    } catch (error) {
      console.error('Error updating trip:', error);
      alert('Failed to update trip. Please try again.');
    }
  };

  const handleNext = () => {
    if (currentStep === steps.length - 1) {
      handleUpdate();
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

  if (loading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  return (
    <div>
      <Header title="Edit Itinerary" actions={[{ label: "Update Itinerary" }]} />

      <div className="sm:p-6 p-4 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="space-y-1 w-full sm:w-auto">
            <button
              className="text-[16px] sm:text-lg font-semibold flex items-center gap-x-2"
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="w-5 h-5" /> Edit Itinerary
            </button>
            <p className="text-xs text-gray-500">
              Update your itinerary details
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
            {currentStep === steps.length - 1 ? 'Update Trip' : 'Continue →'}
          </button>
        </div>
      </div>
    </div>
  );
}