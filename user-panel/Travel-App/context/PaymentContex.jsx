"use client";
import { createContext, useContext, useState } from "react";

// Create Context
const PaymentContext = createContext();

// Create Provider Component
export const PaymentProvider = ({ children }) => {
  const [step, setStep] = useState(1);

  return (
    <PaymentContext.Provider value={{ step, setStep }}>
      {children}
    </PaymentContext.Provider>
  );
};

// Custom Hook to use the Payment Context
export const usePayment = () => {
  return useContext(PaymentContext);
};
