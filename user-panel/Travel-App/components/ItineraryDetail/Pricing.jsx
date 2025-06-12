import React, { useState } from "react";

const Pricing = ({ pricing }) => {
  const [selected, setSelected] = useState(0);

  const pricingPlans = [
    {
      id: 0,
      title: "Value Pack",
      price: `₹${pricing?.valuePack || 0}`,
    },
    {
      id: 1,
      title: "Elite Pack",
      price: `₹${pricing?.elitePack || 0}`,
    },
    {
      id: 2,
      title: "Business Pack",
      price: `₹${pricing?.businessPack || 0}`,
    },
  ];

  return (
    <div className="mx-auto max-w-7xl sm:py-20 py-10 sm:px-0 px-4">
      <h2 className="sm:text-3xl text-2xl font-bold">Choose Pricing</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-8 sm:pt-10 pt-6">
        {pricingPlans.map((plan, index) => (
          <div
            key={index}
            className="relative rounded-lg flex items-center cursor-pointer transition border-l border-r border-dashed border-[#FF3131] bg-white ticket-card"
            onClick={() => setSelected(index)}
          >
            <div className="relative flex flex-col items-center justify-center gap-1.5 border-y border-dashed border-[#FF3131] sm:h-[170px] h-[140px] py-8 sm:px-6 px-3">
              <div
                className={`sm:w-8 sm:h-8 h-5 w-5 rounded-full border flex items-center justify-center transition-all duration-300 ${
                  selected === index
                    ? "border-[#09B367] bg-[#09B367]"
                    : "border-gray-300"
                }`}
              >
                {selected === index && (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 text-white"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12l4 4L19 7" />
                  </svg>
                )}
              </div>
              <p className="font-medium text-[#21242C] sm:text-sm text-xs">{plan.title}</p>
            </div>

            <div className="relative flex-1 bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white flex flex-col justify-center items-center gap-y-1.5 sm:h-[170px] h-[140px] py-8 sm:px-6">
              <p className="sm:text-sm text-xs font-medium bg-white text-black sm:px-6 px-4 py-1.5 rounded-full inline-block">
                Starts From
              </p>
              <p className="font-bold text-[#000000] text-xl sm:text-3xl">
                {plan.price}
              </p>
            </div>
          </div>
        ))}
      </div>
      
      {pricing?.termsAndConditions && (
        <div className="mt-8 text-sm text-gray-600">
          <h3 className="font-semibold mb-2">Terms and Conditions:</h3>
          <p>{pricing.termsAndConditions}</p>
        </div>
      )}
      
      {pricing?.refundPolicy && (
        <div className="mt-4 text-sm text-gray-600">
          <h3 className="font-semibold mb-2">Refund Policy:</h3>
          <p>{pricing.refundPolicy}</p>
        </div>
      )}
    </div>
  );
};

export default Pricing;