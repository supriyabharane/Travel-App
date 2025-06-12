"use client";

import { useState } from "react";
import { FiArrowLeft, FiX } from "react-icons/fi";
import AddStaysDrawer from "./AddStaysDrawer";
import AddTransfersDrawer from "./AddTransfersDrawer";
import { MoveRight } from "lucide-react";

const TripInclusions = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isDrawerOpen2, setIsDrawerOpen2] = useState(false);

  const [stays, setStays] = useState([
    {
      id: 1,
      title: "2N in Pattaya @ Glow Pattaya",
      startDate: "Fri, 17 Jan",
      endDate: "Sun, 21 Jan",
    },
    {
      id: 2,
      title: "2N in Pattaya @ Glow Pattaya",
      startDate: "Fri, 17 Jan",
      endDate: "Sun, 21 Jan",
    },
    {
      id: 3,
      title: "2N in Pattaya @ Glow Pattaya",
      startDate: "Fri, 17 Jan",
      endDate: "Sun, 21 Jan",
    },
  ]);

  const [transfers, setTransfers] = useState([
    {
      id: 1,
      title: "2N in Pattaya @ Glow Pattaya",
      startDate: "Fri, 17 Jan",
      endDate: "Sun, 21 Jan",
    },
  ]);

  const removeStay = (id) => {
    setStays(stays.filter((stay) => stay.id !== id));
  };

  const removeTransfer = (id) => {
    setTransfers(transfers.filter((transfer) => transfer.id !== id));
  };

  return (
    <>
      <div className="bg-[#F2F2F2] border border-[#0000000D] sm:p-6 p-4 rounded-[12px] space-y-[24px]">
        <div className="space-y-[24px]">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-normal">Stays</h2>
            <button
              onClick={() => setIsDrawerOpen(true)}
              className="border border-black px-5 py-2 rounded-lg bg-white text-sm text-black"
            >
              Add Stays
            </button>
          </div>

          <div className="space-y-3">
            {stays.map((stay, index) => (
              <div
                key={index}
                className="bg-white px-[12px] py-[18px] rounded-xl flex items-center justify-between"
              >
                <div className="flex items-center gap-4">
                  <div className="w-[100px] h-[60px] bg-black rounded-md"></div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-normal">{stay.title}</h3>
                    <div className="flex gap-2 text-[10px]">
                      <span className="bg-gradient-to-r from-[#FF3131] to-[#FF914D]  text-white px-2 py-1 rounded-full flex items-center gap-x-1.5">
                        {stay.startDate} <MoveRight className="w-3 h-3" /> {stay.endDate}
                      </span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => removeStay(stay.id)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <FiX size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

       
        <div className="space-y-[24px]">
          <div className="flex justify-between items-center">
            <h2 className="text-base font-normal">Transfers</h2>
            <button
              onClick={() => setIsDrawerOpen2(true)}
              className="border border-black px-5 py-2 rounded-lg bg-white text-sm text-black"
            >
              Add Transfers
            </button>
          </div>

          <div className="space-y-3">
            {transfers.map((transfer, index) => (
             <div
             key={index}
             className="bg-white px-[12px] py-[18px] rounded-xl flex items-center justify-between"
           >
             <div className="flex items-center gap-4">
               <div className="w-[100px] h-[60px] bg-black rounded-md"></div>
               <div className="space-y-1">
                 <h3 className="text-sm font-normal">{transfer.title}</h3>
                 <div className="flex gap-2 text-[10px]">
                   <span className="bg-gradient-to-r from-[#FF3131] to-[#FF914D]  text-white px-2 py-1 rounded-full flex items-center gap-x-1.5">
                     {transfer.startDate} <MoveRight className="w-3 h-3" /> {transfer.endDate}
                   </span>
                 </div>
               </div>
             </div>
             <button
               onClick={() => removeTransfer(transfer.id)}
               className="text-gray-500 hover:text-gray-700"
             >
               <FiX size={18} />
             </button>
           </div>
            ))}
          </div>
        </div>
      </div>
      <AddStaysDrawer isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
      <AddTransfersDrawer isOpen={isDrawerOpen2} onClose={() => setIsDrawerOpen2(false)} />
    </>
  );
};

export default TripInclusions;
