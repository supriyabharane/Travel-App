import React from "react";

const EditProfile = () => {
  return (
    <div className="edit-profile-page flex justify-center items-center h-screen bg-gray-100">
      <div className="edit-profile-card bg-white shadow-md rounded-md p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Edit Profile</h2>
        <form>
          <label className="block mb-2 text-sm font-medium text-gray-700">Your Name</label>
          <input
            type="text"
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">Email ID</label>
          <input
            type="email"
            placeholder="Email ID"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Continue
          </button>
        </form>
        <p className="text-xs text-gray-500 mt-4">Disclaimer*</p>
      </div>
    </div>
  );
};

export default EditProfile;
