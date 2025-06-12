"use client";
import React, { useEffect, useState } from "react";
import { PencilIcon, TrashIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "@headlessui/react";
import { useRouter } from "next/navigation";

const AdminItinerary = () => {
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchTrips();
  }, []);

  const fetchTrips = async () => {
    try {
      const response = await fetch('/api/trips');
      const data = await response.json();
      
      if (data.success) {
        setTrips(data.data);
      } else {
        throw new Error(data.error || 'Failed to fetch trips');
      }
    } catch (err) {
      setError(err.message);
      console.error('Error fetching trips:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this trip?')) return;

    try {
      const response = await fetch(`/api/trips/${id}`, {
        method: 'DELETE',
      });
      const data = await response.json();

      if (data.success) {
        setTrips(trips.filter(trip => trip._id !== id));
      } else {
        throw new Error(data.error || 'Failed to delete trip');
      }
    } catch (err) {
      console.error('Error deleting trip:', err);
      alert('Failed to delete trip. Please try again.');
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return <div className="p-4 text-center">Loading trips...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

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
              Trip Overview
            </th>
            <th className="px-6 py-3 text-center text-sm font-normal text-[#1B1B1B]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#0000000D] bg-white">
          {trips.map((trip) => (
            <tr key={trip._id} className="bg-white">
              <td className="px-6 py-4">
                <Checkbox />
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {formatDate(trip.createdAt)}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {trip.title}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {trip.description}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button 
                    className="rounded-full p-2 text-[#1B1B1B] bg-[#F8F4D3]"
                    onClick={() => router.push(`/itinerary/edit-itinerary/${trip._id}`)}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button 
                    className="rounded-full p-2 text-[#1B1B1B] bg-[#F8D3D3]"
                    onClick={() => handleDelete(trip._id)}
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

export default AdminItinerary;