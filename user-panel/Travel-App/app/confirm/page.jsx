import React from 'react';

const ConfirmPage = () => {
  return (
    <div className="confirm-page bg-gray-800 text-white flex items-center justify-center h-screen">
      <div className="bg-white text-black rounded-lg shadow-lg p-6 w-96">
        <div className="flex justify-center mb-4">
          <img src="/public/assets/images/success-icon.png" alt="Success" className="w-16 h-16" />
        </div>
        <h2 className="text-xl font-bold text-center">Your trip has been booked successfully</h2>
        <button className="mt-4 w-full py-2 bg-gradient-to-r from-orange-400 to-red-500 text-white rounded-md hover:opacity-90">
          Check Status
        </button>
      </div>
    </div>
  );
};

export default ConfirmPage;
