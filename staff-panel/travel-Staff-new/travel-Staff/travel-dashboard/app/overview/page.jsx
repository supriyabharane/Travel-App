"use client";
import { useState } from "react";
import { FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { GoSortDesc } from "react-icons/go";
import Header from "@/components/Header";

import { FileText, Users, Layers } from "lucide-react";
import AdminBlogs from "./components/AdminBlogs";
import AdminLeads from "./components/AdminLeads";
import AdminItinerary from "./components/AdminItinerary";
import AdminStaff from "./components/AdminStaff";
import AddStaffDrawer from "./components/AddStaffDrawer";

const tabs = [
  {
    label: "All Staffs",
    icon: null,
    component: <AdminStaff />,
  },
  { label: "Blogs", icon: <FileText size={16} />, component: <AdminBlogs /> },
  { label: "Leads", icon: <Users size={16} />, component: <AdminLeads /> },
  {
    label: "Itinerary",
    icon: <Layers size={16} />,
    component: <AdminItinerary />,
  },
];
const stats = [
  // { label: "Active Blogs", value: 24 },
  // { label: "Active Itinerary", value: 132 },
  // { label: "Total Bookings", value: 240, filter: "last 30 days" },
  // { label: "Total Revenue", value: "₹12,00,000", filter: "last 30 days" },
];

const blogs = Array(8).fill({
  date: "12 Jan 2023",
  name: "Lorem Name",
  description: "Manage your blogs, monitor analytics...",
});

export default function BlogsDashboard() {
  const [activeTab, setActiveTab] = useState("Blogs");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <div>
        <Header
          title="Overview"
          actions={[
            {
              label: "Add Staff",
              onClick: () => setIsDrawerOpen(true),
            },
          ]}
        />
        <div className="sm:p-6 p-4 space-y-[32px]">
          <div className="flex items-center justify-between">
            <div className="space-y-1">
              <h2 className="text-[20px] font-semibold text-[#1B1B1B]">
                Welcome Back Ishan!
              </h2>
              <p className="text-xs text-[#00000080]">
                Manage your blogs, monitor analytics
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {stats.map((stat, idx) => (
              <div
                key={idx}
                className="border-[0.8px] border-[#00000026] rounded-[14px] p-[20px] h-[120px] bg-white flex flex-col justify-between"
              >
                <div className="flex items-center justify-between">
                  <span className="text-[#00000080] text-xs">{stat.label}</span>
                  {stat.filter && (
                    <div className="relative">
                      <select className="text-[10px] bg-[#0000000D] px-[10px] outline-none py-1.5 pr-6 rounded-md appearance-none w-full">
                        <option className="text-[#1B1B1B]">
                          {stat.filter}
                        </option>
                      </select>
                      <div className="absolute inset-y-0 right-2 flex items-center pointer-events-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-3 h-3 text-gray-500"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 011.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
                <span className="text-[24px] text-[#1B1B1B] font-semibold">
                  {stat.value}
                </span>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-5 border-b-[0.5px] border-[#0000001A]">
            {/* Tabs Section */}
            <div className="flex gap-3 bg-white border-[0.5px] border-[#00000026] rounded-lg p-1.5 overflow-x-auto sm:overflow-visible whitespace-nowrap">
              {tabs.map((tab) => (
                <button
                  key={tab.label}
                  onClick={() => setActiveTab(tab.label)}
                  className={`flex items-center gap-2 px-4 py-2 text-sm font-normal rounded-md transition-all ${
                    activeTab === tab.label
                      ? "bg-[#0000000D] text-[#1B1B1B] shadow"
                      : "text-[#1B1B1B]"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Filter & Search Buttons */}
            <div className="flex items-center gap-2">
              <button className="rounded-md p-2 text-[#1B1B1B] bg-[#0000000D]">
                <FunnelIcon className="h-4 w-4" />
              </button>
              <button className="rounded-md p-2 text-[#1B1B1B] bg-[#0000000D]">
                <GoSortDesc className="h-4 w-4" />
              </button>
              <button className="rounded-md p-2 text-[#1B1B1B] bg-[#0000000D]">
                <MagnifyingGlassIcon className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="">
            {tabs?.find((tab) => tab?.label === activeTab)?.component}
          </div>
        </div>
      </div>
      <AddStaffDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      />
    </>
  );
}
