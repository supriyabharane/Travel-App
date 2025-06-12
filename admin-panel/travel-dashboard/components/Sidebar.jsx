"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  MapIcon,
  UsersIcon,
  CogIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import { LayoutDashboard } from "lucide-react";

const Sidebar = () => {
  const [dashboardOpen, setDashboardOpen] = useState(true);
  const [toolsOpen, setToolsOpen] = useState(true);
  const pathname = usePathname(); // Get current route

  return (
    <div className="w-full border-r border-[#0000001A] bg-white h-screen px-[30px] py-[20px] space-y-[30px]">
      
      <div className="flex h-16 items-center gap-2">
        <img
          src="https://randomuser.me/api/portraits/men/3.jpg"
          alt="profile-img"
          className="h-[38px] w-[38px] rounded-full bg-gray-200"
        />
        <div>
          <p className="text-sm font-medium text-[#1B1B1B]">Rajdeep</p>
          <p className="text-xs text-[#00000080]">rajdeep@gmail.com</p>
        </div>
      </div>

      
      <nav className="space-y-[30px]">
       
        <div className="space-y-2.5">
          <button
            onClick={() => setDashboardOpen(!dashboardOpen)}
            className="flex items-center gap-x-2.5 w-full px-3 py-2 text-sm font-medium text-[#1B1B1B] rounded-[6px]"
          >
            <span className="flex items-center gap-3">Dashboard</span>
            {dashboardOpen ? (
              <ChevronDownIcon className="h-5 w-5 text-[#1B1B1B]" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-[#1B1B1B]" />
            )}
          </button>

          {dashboardOpen && (
            <div className="pl-4 space-y-1">
              <Link
                href="/overview"
                className={`flex items-center gap-3 rounded-lg p-[10px] text-sm font-medium ${
                  pathname === "/overview"
                    ? "bg-[#0000000D] text-[#1B1B1B]"
                    : "text-[#1B1B1B] hover:bg-[#0000000D]"
                }`}
              >
                <LayoutDashboard className="h-5 w-5" />
                Overview
              </Link>
              <Link
                href="/"
                className={`flex items-center gap-3 rounded-lg p-[10px] text-sm font-medium ${
                  pathname === "/" || pathname === "/create-blog"
                    ? "bg-[#0000000D] text-[#1B1B1B]"
                    : "text-[#1B1B1B] hover:bg-[#0000000D]"
                }`}
              >
                <DocumentTextIcon className="h-5 w-5" />
                Blogs
              </Link>

              <Link
                href="/itinerary"
                className={`flex items-center gap-3 rounded-lg p-[10px] text-sm font-medium ${
                  pathname === "/itinerary" ||
                  pathname === "/itinerary/add-itinerary"
                    ? "bg-[#0000000D] text-[#1B1B1B]"
                    : "text-[#1B1B1B] hover:bg-[#0000000D]"
                }`}
              >
                <MapIcon className="h-5 w-5" />
                Itinerary
              </Link>

              <Link
                href="/leads"
                className={`flex items-center gap-3 rounded-lg p-[10px] text-sm font-medium ${
                  pathname === "/leads"
                    ? "bg-[#0000000D] text-[#1B1B1B]"
                    : "text-[#1B1B1B] hover:bg-[#0000000D]"
                }`}
              >
                <UsersIcon className="h-5 w-5" />
                Leads
              </Link>
            </div>
          )}
        </div>

       
        <div className="space-y-2.5">
          <button
            onClick={() => setToolsOpen(!toolsOpen)}
            className="flex items-center gap-x-2.5 w-full px-3 py-2 text-sm font-medium text-[#1B1B1B] rounded-[6px]"
          >
            <span className="flex items-center gap-3">Tools</span>
            {toolsOpen ? (
              <ChevronDownIcon className="h-5 w-5 text-[#1B1B1B]" />
            ) : (
              <ChevronRightIcon className="h-5 w-5 text-[#1B1B1B]" />
            )}
          </button>

          {toolsOpen && (
            <div className="pl-4 space-y-1">
              <Link
                href="/report"
                className={`flex items-center gap-3 rounded-lg p-[10px] text-sm font-medium ${
                  pathname === "/report"
                    ? "bg-[#0000000D] text-[#1B1B1B]"
                    : "text-[#1B1B1B] hover:bg-[#0000000D]"
                }`}
              >
                <ChartPieIcon className="h-5 w-5" />
                Report
              </Link>
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
