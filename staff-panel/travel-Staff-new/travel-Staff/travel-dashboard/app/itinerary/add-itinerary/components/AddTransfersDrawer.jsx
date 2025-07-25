"use client";

import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX, FiUploadCloud } from "react-icons/fi";

const AddTransfersDrawer = ({ isOpen, onClose }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedFeatures, setSelectedFeatures] = useState([]);

  const features = [
    "AC",
    "Non-AC",
    "Luxury",
    "Economy",
    "Self Drive",
    "With Driver",
  ];

  const toggleFeature = (feature) => {
    setSelectedFeatures((prev) =>
      prev.includes(feature)
        ? prev.filter((f) => f !== feature)
        : [...prev, feature]
    );
  };

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setSelectedFile(file);
  };

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay (Backdrop) */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        {/* Drawer Panel */}
        <div className="fixed inset-y-0 right-0 flex max-w-lg w-full">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300 sm:duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300 sm:duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="w-full h-full bg-white p-6 space-y-6">
              {/* Header */}
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[20px] text-[#1B1B1B] font-semibold">
                    Add Transfers
                  </h2>
                  <p className="text-[#6D6D6D] text-xs">
                    Add all details about the transfer
                  </p>
                </div>
                <button onClick={onClose} className="text-[#0B0B0B]">
                  <FiX size={20} />
                </button>
              </div>

              {/* File Upload Section */}
              <div className="border border-dashed border-red-300 p-6 text-center rounded-xl cursor-pointer space-y-3">
                <input
                  type="file"
                  className="hidden"
                  onChange={handleFileUpload}
                />
                <FiUploadCloud size={26} className="mx-auto text-red-400" />
                <p className="text-sm text-[#1B1B1B]">
                  Drag or upload image(s) of vehicle or{" "}
                  <span className="text-red-500 cursor-pointer">browse</span>
                </p>
                <p className="text-xs text-gray-600">
                  Max 10 MB files are allowed
                </p>
                {selectedFile && (
                  <p className="text-xs mt-2 text-gray-700">
                    {selectedFile.name}
                  </p>
                )}
              </div>

              {/* Input Fields */}
              <div className="space-y-4">
                <div className="flex flex-col">
                  <label className="text-base font-normal text-black mb-1">
                    Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter transfer name"
                    className="w-full border border-[#0321251A] rounded-xl px-4 py-2.5 text-sm outline-none"
                  />
                </div>

                <div className="flex flex-col">
                  <label className="text-base font-normal text-black mb-1">
                    Vehicle Type
                  </label>
                  <input
                    type="text"
                    placeholder="Enter vehicle type"
                    className="w-full border border-[#0321251A] rounded-xl px-4 py-2.5 text-sm outline-none"
                  />
                </div>
              </div>

              {/* Add Features Section */}
              <div className="space-y-2">
                <h3 className="text-base font-normal text-black">
                  Add Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {features.map((feature, index) => (
                    <button
                      key={index}
                      onClick={() => toggleFeature(feature)}
                      className={`inline-flex items-center justify-center px-4 py-2.5 text-sm rounded-lg border transition-all ${
                        selectedFeatures.includes(feature)
                          ? "bg-gradient-to-r from-red-500 to-orange-400 text-white border-transparent"
                          : "bg-white border-gray-300 text-black"
                      }`}
                    >
                      {feature}
                    </button>
                  ))}
                </div>
              </div>

              {/* Continue Button */}
              <div className="flex items-center justify-end pt-4">
                <button
                  onClick={onClose}
                  className="px-5 py-3 rounded-[10px] bg-black text-white hover:opacity-90"
                >
                  Continue →
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddTransfersDrawer;
