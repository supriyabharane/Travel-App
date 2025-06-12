"use client";
import React from "react";

const Form2 = () => {
  return (
    <div className="pt-6 space-y-3">
      <h3 className="text-lg font-semibold">Review Pricing</h3>
      <div className="bg-white border border-[#032125] border-opacity-10 rounded-lg space-y-2.5 divide-y divide-[#032125] divide-opacity-10">
        <div className="text-sm sm:text-[16px] px-4 py-3">
          <p className="font-medium">Base Price:</p>
          <p className="text-[#4D525F]">₹50,000</p>
        </div>
        <div className="text-sm sm:text-[16px] px-4 py-3">
          <p className="font-medium">Taxes:</p>
          <p className="text-[#4D525F]">₹5,000</p>
        </div>
        <div className="text-sm sm:text-[16px] px-4 py-3">
          <p className="font-medium">Discount:</p>
          <p className="text-[#4D525F]">₹2,000</p>
        </div>
        <div className="text-sm sm:text-[16px] px-4 py-3">
          <p className="font-medium">Total Price:</p>
          <p className="text-[#4D525F] font-bold">₹53,000</p>
        </div>
      </div>
    </div>
  );
};

export default Form2;