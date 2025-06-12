"use client";
import { useState } from "react";
import { FiX } from "react-icons/fi";

const TripPricing = () => {
  const [prices, setPrices] = useState({
    valuePack: "",
    elitePack: "",
    businessPack: "",
  });

  const [reviews, setReviews] = useState([
    {
      id: 1,
      title: "Review-1",
      description: "Manage your blogs, monitor analytics...",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 2,
      title: "Review-1",
      description: "Manage your blogs, monitor analytics...",
      image: "https://via.placeholder.com/50",
    },
    {
      id: 3,
      title: "Review-1",
      description: "Manage your blogs, monitor analytics...",
      image: "https://via.placeholder.com/50",
    },
  ]);

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPrices((prev) => ({ ...prev, [name]: value }));
  };

  const handleDeleteReview = (id) => {
    setReviews((prev) => prev.filter((review) => review.id !== id));
  };

  return (
    <div className="bg-[#F2F2F2] border border-[#0000000D] sm:p-6 p-4 rounded-[12px] space-y-[24px]">
      <div className="pb-4 border-b border-[#E9EAEB]">
        <h3 className="text-xs font-normal text-[#00000080]">Pricings</h3>
      </div>
      <div className="space-y-[24px]">
        {["valuePack", "elitePack", "businessPack"].map((pack) => (
          <div key={pack}>
            <label className="text-base font-normal capitalize">
              {pack.replace(/([A-Z])/g, " $1")}
            </label>
            <input
              type="text"
              name={pack}
              value={prices[pack]}
              onChange={handlePriceChange}
              placeholder={`Enter price for the ${pack
                .replace(/([A-Z])/g, " $1")
                .toLowerCase()}`}
              className="w-full mt-2 p-3 text-[#00000080] rounded-md text-sm border border-[#0321251A] outline-none"
            />
          </div>
        ))}
      </div>

      {/* Reviews Section */}
      <div className="pt-6">
        <div className="flex items-center justify-between pr-3 border-b border-[#E9EAEB] pb-4">
          <h3 className="text-xs font-normal text-[#00000080]">Reviews</h3>
          <button className="border rounded-md px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100">
            Add Reviews
          </button>
        </div>
        <div className="flex gap-3 py-4 overflow-x-auto">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-lg p-3 flex items-center space-x-3"
            >
              {/* <img
                src={review.image}
                alt="Review"
                className="h-10 w-10 rounded-md"
              /> */}
              <div className="flex space-x-3">
                <span className="w-[100px] h-[60px] rounded-lg bg-black"></span>
                <div className="text-sm">
                  <h4 className="font-medium text-gray-800">{review.title}</h4>
                  <p className="text-gray-500 text-xs">{review.description}</p>
                </div>
              </div>
              <button
                onClick={() => handleDeleteReview(review.id)}
                className=" text-gray-400 hover:text-gray-700"
              >
                <FiX size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Add Reviews Button */}
      </div>
    </div>
  );
};

export default TripPricing;
