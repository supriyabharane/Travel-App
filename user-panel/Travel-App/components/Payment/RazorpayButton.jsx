"use client";

import React, { useEffect } from "react";
import RazorpayButton from "@/components/Payment/RazorpayButton";

const PaymentPage = () => {
  return (
    <div>
      <h1>Book Your Trip</h1>
      <RazorpayButton amount={5000} />
    </div>
  );
};

const RazorpayButton = ({ amount, onSuccess, onFailure }) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  // 1. Add a function to verify payment on the backend
  const verifyPayment = async (paymentId, orderId, signature) => {
    try {
      const res = await fetch("/api/payment/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ paymentId, orderId, signature }),
      });
      const data = await res.json();
      return data.success;
    } catch (err) {
      return false;
    }
  };

  const handlePayment = async () => {
    try {
      const response = await fetch("/api/payment/razorpay", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ amount, currency: "INR" }),
      });

      const order = await response.json();

      const options = {
        key: process.env.NEXT_PUBLIC_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name: "Travel App",
        description: "Payment for your trip",
        order_id: order.id,
        handler: async function (response) {
          // Backend verification
          const verified = await verifyPayment(
            response.razorpay_payment_id,
            response.razorpay_order_id,
            response.razorpay_signature
          );
          if (verified) {
            if (onSuccess) onSuccess(response);
            alert("Payment successful and verified! Payment ID: " + response.razorpay_payment_id);
          } else {
            if (onFailure) onFailure();
            alert("Payment failed verification. Please contact support.");
          }
        },
        prefill: {
          name: "Supriya Bharane",
          email: "bharanesupriya6@gmail.com",
          contact: "9999999999",
        },
        theme: {
          color: "#3399cc",
        },
        modal: {
          ondismiss: function () {
            // Call onFailure callback and show a custom message
            if (onFailure) onFailure();
            alert("Payment cancelled or failed. Please try again.");
          },
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (error) {
      console.error("Error initiating payment:", error);
      if (onFailure) onFailure(error);
      alert("Payment could not be initiated. Please try again later.");
    }
  };

  return (
    <button onClick={handlePayment} className="btn btn-primary">
      Pay ₹{amount}
    </button>
  );
};

export default PaymentPage;
