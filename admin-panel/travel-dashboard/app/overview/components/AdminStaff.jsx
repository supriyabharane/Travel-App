'use client';
import React, { useEffect, useState } from 'react';
import { PencilIcon, TrashIcon, ShareIcon } from '@heroicons/react/24/outline';
import { Checkbox } from '@headlessui/react';

const AdminStaff = () => {
  const [staff, setStaff] = useState([]);

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const response = await fetch('/api/staff');
      const data = await response.json();
      setStaff(data.staff);
    } catch (error) {
      console.error('Error fetching staff:', error);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this staff member?')) return;
    
    try {
      await fetch(`/api/staff/${id}`, {
        method: 'DELETE',
      });
      fetchStaff();
    } catch (error) {
      console.error('Error deleting staff:', error);
    }
  };

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
              Staff Role
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Access
            </th>
            <th className="px-6 py-3 text-center text-sm font-normal text-[#1B1B1B]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#0000000D] bg-white">
          {staff.map((person) => (
            <tr key={person._id} className="bg-white">
              <td className="px-6 py-4">
                <Checkbox />
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {formatDate(person.createdAt)}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {person.name}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {person.role}
              </td>
              <td className="px-6 py-4">
                <div className="flex flex-wrap gap-2">
                  {Object.entries(person.access).map(([key, value]) => 
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
              <td className="whitespace-nowrap px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button className="rounded-full p-2 text-[#1B1B1B] bg-[#F8F4D3]">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button 
                    className="rounded-full p-2 text-[#1B1B1B] bg-[#F8D3D3]"
                    onClick={() => handleDelete(person._id)}
                  >
                    <TrashIcon className="h-4 w-4" />
                  </button>
                  <button className="rounded-full p-2 text-[#1B1B1B] bg-[#D4F8D3]">
                    <ShareIcon className="h-4 w-4" />
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminStaff;