import { usePayment } from "@/context/PaymentContex";
import React from "react";
import { FaCheckCircle } from "react-icons/fa";

const StepNavigation = () => {
  const { step } = usePayment();
  return (
    <div className="flex sm:flex-wrap sm:justify-end items-center w-full gap-x-4 sm:gap-x-6">
      {[
        { label: "Trip Overview", stepIndex: 1 },
        { label: "Review Pricing", stepIndex: 2 },
        { label: "Make Payment", stepIndex: 3 },
      ].map(({ label, stepIndex }) => (
        <div key={stepIndex} className="flex items-center gap-1 min-w-0">
          <div
            className={`p-0.5 rounded-full ${
              step >= stepIndex
                ? "bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
                : "bg-gray-400"
            }`}
          >
            <FaCheckCircle className="w-[15px] h-[15px] text-white" />
          </div>
          <span
            className={`sm:text-[16px] text-sm font-medium bg-clip-text min-w-0 truncate ${
              step >= stepIndex
                ? "text-transparent bg-gradient-to-r from-[#FF3131] to-[#FF914D]"
                : "text-gray-400"
            }`}
          >
            {label}
          </span>
        </div>
      ))}
    </div>
  );
};

export default StepNavigation;
