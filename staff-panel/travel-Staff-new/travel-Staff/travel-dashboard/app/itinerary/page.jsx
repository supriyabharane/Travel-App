"use client";
import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Checkbox from "@/components/ui/Checkbox";
import {
  PencilIcon,
  TrashIcon,
  ShareIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
} from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { GoSortDesc } from "react-icons/go";

export default function Itinerary() {
  const router = useRouter();
  const [trips, setTrips] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTrips();
  }, []);

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this itinerary?')) return;

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
      alert('Error deleting trip: ' + err.message);
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
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }

  if (error) {
    return <div className="text-red-500 text-center p-4">Error: {error}</div>;
  }

  return (
    <>
      <Header
        title="Itinerary"
        actions={[
          {
            label: "Add Itinerary",
            onClick: () => router.push("/itinerary/add-itinerary"),
          },
        ]}
      />
      <div className="space-y-[32px] sm:p-6 p-4">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-[20px] font-semibold text-[#1B1B1B]">
              Welcome Back Ishan!
            </h2>
            <p className="text-[#00000080] text-xs text-normal">
              Manage your itineraries, monitor analytics
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button className="rounded-md p-2 text-[#1B1B1B] bg-gray-100">
              <FunnelIcon className="h-4 w-4" />
            </button>
            <button className="rounded-md p-2 text-[#1B1B1B] bg-gray-100">
              <GoSortDesc className="h-4 w-4" />
            </button>
            <button className="rounded-md p-2 text-[#1B1B1B] bg-gray-100">
              <MagnifyingGlassIcon className="h-4 w-4" />
            </button>
          </div>
        </div>

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
                  Title
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
      </div>
    </>
  );
}