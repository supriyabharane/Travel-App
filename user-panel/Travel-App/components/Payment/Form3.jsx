"use client";
import React from "react";

const Form3 = () => {
  const handlePayment = () => {
    alert("Payment Successful!");
  };

  return (
    <div className="pt-6 space-y-3">
      <h3 className="text-lg font-semibold">Make Payment</h3>
      <div className="bg-white border border-[#032125] border-opacity-10 rounded-lg space-y-2.5 p-4">
        <p className="text-sm sm:text-[16px] text-[#4D525F]">
          Please proceed to make the payment for your trip.
        </p>
        <button
          className="px-6 py-2 rounded bg-gradient-to-r from-[#FF3131] to-[#FF914D] text-white font-semibold"
          onClick={handlePayment}
        >
          Pay ₹53,000
        </button>
      </div>
    </div>
  );
};

export default Form3;