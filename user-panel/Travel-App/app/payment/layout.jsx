"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaCheckCircle } from "react-icons/fa";
import { usePayment } from "@/context/PaymentContex";
import StepButtons from "@/components/Payment/StepButtons";
import StepNavigation from "@/components/Payment/StepNavigation";

const PaymentLayout = ({ children }) => {
 const {step} = usePayment()
  return (
    
    <div>
      <Navbar />
      <div className="mx-auto sm:max-w-6xl max-w-7xl sm:py-14 py-0">
        <div className="sm:p-5 p-4 sm:border border-[#000000] border-opacity-10 rounded-2xl sm:shadow-md bg-white space-y-6">
          <div className="max-w-md space-y-2.5">
            <h1 className="text-2xl font-bold text-start text-[#000929]">
              Complete the following steps to confirm your booking.
            </h1>
            <p className="text-[#4D525F] text-sm">
              Answer a few questions to help us connect you with the top clinics
              tailored to your needs. It only takes 3 minutes!
            </p>
          </div>
          <StepNavigation/>

          <div
            className="sm:p-6 p-3 rounded-xl shadow-sm"
            style={{
              background:
                "linear-gradient(to right, rgba(255, 49, 49, 0.1), rgba(255, 145, 77, 0.1))",
            }}
          >
            <div className="pb-4 border-b border-[#E9EAEB]">
              <h2 className="text-[16px] font-medium text-[#4D525F] uppercase">
                {step === 3 ? "Make Payment" : "Trip Summary"}
              </h2>
            </div>
            {children}
            <StepButtons />
          </div>
        </div>
      </div>
      <Footer />
    </div>
   
  );
};

export default PaymentLayout;
