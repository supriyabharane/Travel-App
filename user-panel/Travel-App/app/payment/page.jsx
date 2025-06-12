'use client'
import Form1 from "@/components/Payment/Form1";
import Form2 from "@/components/Payment/Form2";
import Form3 from "@/components/Payment/Form3";
import { usePayment } from "@/context/PaymentContex";

const Payment = () => {
  const { step } = usePayment();
  return (
    <>
      {step === 1 && <Form1 />}
      {step === 2 && <Form2 />}
      {step === 3 && <Form3 />}
    </>
  );
};

export default Payment;
