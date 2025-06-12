
import { usePayment } from "@/context/PaymentContex";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const StepButtons = () => {
  const { step, setStep } = usePayment();

  return (
    <div className="flex justify-end gap-x-3 items-center pt-6">
      <button
        disabled={step === 1}
        onClick={() => setStep((prev) => Math.max(prev - 1, 1))}
        className="flex items-center gap-2 px-6 py-3 border border-gray-300 text-[#000929] rounded-lg hover:bg-gray-100 transition disabled:opacity-50"
      >
        <FaArrowLeft />
        Go Back
      </button>

      <button
        onClick={() => setStep((prev) => Math.min(prev + 1, 3))}
        className="flex items-center gap-2 px-6 py-3 text-white rounded-lg bg-gradient-to-r from-[#FF3131] to-[#FF914D] hover:opacity-90 transition"
      >
        Continue
        <FaArrowRight />
      </button>
    </div>
  );
};

export default StepButtons;
