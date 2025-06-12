"use client";
import { Checkbox } from "@headlessui/react";
import React, { useState, useEffect } from "react";

const AdminLeads = () => {
  const [leads, setLeads] = useState([]);
  const [staffWithLeadsAccess, setStaffWithLeadsAccess] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchStaffWithLeadsAccess();
  }, []);

  const fetchStaffWithLeadsAccess = async () => {
    try {
      const response = await fetch('/api/staff');
      const data = await response.json();
      
      // Filter staff members who have leads access
      const staffWithAccess = data.staff.filter(member => member.access.leads === true);
      setStaffWithLeadsAccess(staffWithAccess);
    } catch (err) {
      console.error('Error fetching staff:', err);
      setError('Failed to load staff data');
    } finally {
      setLoading(false);
    }
  };

  const pipelineStatusColors = {
    Closed: "bg-green-100 text-green-700",
    Negotiation: "bg-yellow-100 text-yellow-700",
    Prospecting: "bg-purple-100 text-purple-700",
    Qualification: "bg-blue-100 text-blue-700",
  };

  if (loading) {
    return <div className="p-4 text-center">Loading staff data...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  return (
    <div className="rounded-lg border border-[#0000000D] bg-white overflow-x-auto">
      <table className="min-w-full divide-y divide-[#0000000D]">
        <thead className="bg-[#0000000D]">
          <tr>
            <th className="w-12 px-6 py-3">
              <Checkbox />
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Name
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Role
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Email
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              User ID
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Access
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#0000000D] bg-white">
          {staffWithLeadsAccess.map((staff) => (
            <tr key={staff._id} className="bg-white">
              <td className="px-6 py-4">
                <Checkbox />
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {formatDate(staff.createdAt)}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {staff.name}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {staff.role}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {staff.email}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                {staff.userId}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {Object.entries(staff.access).map(([key, value]) => 
                    value && (
                      <span
                        key={key}
                        className={`px-3 py-1 text-xs font-medium rounded-full ${
                          key === 'blogs'
                            ? 'bg-[#D4F8D3] text-green-700'
                            : key === 'itinerary'
                            ? 'bg-[#F8E3A3] text-yellow-700'
                            : 'bg-[#E0E7FF] text-blue-700'
                        }`}
                      >
                        {key.charAt(0).toUpperCase() + key.slice(1)}
                      </span>
                    )
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminLeads;