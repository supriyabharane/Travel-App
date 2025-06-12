"use client";
import React from "react";
import { PencilIcon, TrashIcon, ShareIcon } from "@heroicons/react/24/outline";
import { Checkbox } from "@headlessui/react";

const AdminItinerary = () => {
  const blogs = [
    {
      id: 1,
      date: "12 Jan 2023",
      name: "Lorem Name 1",
      description: "Manage your blogs, monitor analytics.........",
    },
    {
      id: 2,
      date: "13 Jan 2023",
      name: "Lorem Name 2",
      description: "Manage your blogs, monitor analytics.........",
    },
    {
      id: 3,
      date: "14 Jan 2023",
      name: "Lorem Name 3",
      description: "Manage your blogs, monitor analytics.........",
    },
    {
      id: 4,
      date: "15 Jan 2023",
      name: "Lorem Name 4",
      description: "Manage your blogs, monitor analytics.........",
    },
    {
      id: 5,
      date: "16 Jan 2023",
      name: "Lorem Name 5",
      description: "Manage your blogs, monitor analytics.........",
    },
  ];
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
          {blogs?.map((blog) => (
            <tr key={blog.id} className="bg-white">
              <td className="px-6 py-4">
                <Checkbox />
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {blog.date}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {blog.name}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {blog.description}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button className="rounded-full p-2 text-[#1B1B1B] bg-[#F8F4D3]">
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button className="rounded-full p-2 text-[#1B1B1B] bg-[#F8D3D3]">
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
