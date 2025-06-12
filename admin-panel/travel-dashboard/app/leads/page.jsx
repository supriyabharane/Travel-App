"use client";
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

const leads = [
  {
    id: 1,
    date: "12 Jan 2023",
    name: "Annette Black",
    tripQuery: "Bali Trip",
    persons: "2 Adults, 2 Childs",
    phone: "+91 60035-68105",
    email: "annette.black@email.com",
    status: "Closed",
  },
];

const pipelineStatusColors = {
  Closed: "bg-green-100 text-green-700",
  Negotiation: "bg-yellow-100 text-yellow-700",
  Prospecting: "bg-purple-100 text-purple-700",
  Qualification: "bg-blue-100 text-blue-700",
};

export default function Leads() {
  const router = useRouter();
  return (
    <>
      <Header
        title="Leads"
        actions={[
          {
            label: "Add Bookings",
            // onClick: () => router.push("/create-blog"),
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
              Manage your leads, monitor analytics
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

        <div className="rounded-lg border border-[#0000000D] bg-white overflow-x-auto ">
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
                <th className="whitespace-nowrap px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
                  Trip Query
                </th>
                <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
                  Persons
                </th>
                <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
                  Phone Number
                </th>
                <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
                  Email
                </th>
                <th className="whitespace-nowrap px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
                  Pipeline Status
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0000000D] bg-white">
              {leads.map((blog) => (
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
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {blog.tripQuery}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {blog.persons}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {blog.phone}
                  </td>
                  <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-500">
                    {blog.email}
                  </td>
                  <td className="px-6 py-4 text-sm">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        pipelineStatusColors[blog?.status]
                      }`}
                    >
                      {blog?.status}
                    </span>
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
