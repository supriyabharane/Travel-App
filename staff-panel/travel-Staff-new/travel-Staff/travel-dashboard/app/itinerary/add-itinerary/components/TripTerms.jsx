"use client";
import { useState } from "react";

const TripTerms = () => {
  const [terms, setTerms] = useState("");
  const [refundPolicy, setRefundPolicy] = useState("");

  return (
    <div className="bg-[#F2F2F2] border border-[#0000000D] sm:p-6 p-4 rounded-[12px] space-y-[24px]">
      <div className="pb-4 border-b border-[#E9EAEB]">
        <h3 className="text-xs font-normal text-[#00000080]">T&C</h3>
      </div>
      <div className="space-y-[24px]">
        <div>
          <label className="text-[16px] font-normal">
            Terms & Condition
          </label>
          <textarea
            value={terms}
            onChange={(e) => setTerms(e.target.value)}
            placeholder="Type Here"
            className="w-full mt-2 p-3 text-[#00000080] rounded-xl text-sm border border-[#0321251A] outline-none h-60"
          />
        </div>

        <div>
          <label className="text-[16px] font-normal">
            Refund Policy
          </label>
          <textarea
            value={refundPolicy}
            onChange={(e) => setRefundPolicy(e.target.value)}
            placeholder="Type Here"
            className="w-full mt-2 p-3 text-[#00000080] rounded-xl text-sm border border-[#0321251A] outline-none h-60"
          />
        </div>
      </div>
    </div>
  );
};

export default TripTerms;
