import React from "react";

const ChangePassword = () => {
  return (
    <div className="change-password-page flex justify-center items-center h-screen bg-gray-100">
      <div className="change-password-card bg-white shadow-md rounded-md p-6 w-96">
        <h2 className="text-xl font-bold mb-4">Change Password</h2>
        <form>
          <label className="block mb-2 text-sm font-medium text-gray-700">Old Password</label>
          <input
            type="password"
            placeholder="Old Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <label className="block mt-4 mb-2 text-sm font-medium text-gray-700">New Password</label>
          <input
            type="password"
            placeholder="New Password"
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />

          <button
            type="submit"
            className="w-full mt-6 px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600"
          >
            Change Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;
