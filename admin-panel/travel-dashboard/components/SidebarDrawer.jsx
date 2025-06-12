"use client";

import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  ChevronDownIcon,
  ChevronRightIcon,
  DocumentTextIcon,
  MapIcon,
  UsersIcon,
  ChartPieIcon,
} from "@heroicons/react/24/outline";
import { LayoutDashboard, Menu } from "lucide-react";

const SidebarDrawer = ({ isOpen, onClose }) => {
  const pathname = usePathname();

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Overlay */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/50" />
        </Transition.Child>

        {/* Drawer Panel */}
        <div className="fixed inset-y-0 left-0 w-72 max-w-full bg-white shadow-lg">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <Dialog.Panel className="h-full flex flex-col">
              <div className="flex justify-between items-center p-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold">Menu</h2>
                <button onClick={onClose} className="p-2 rounded-full text-gray-600 hover:bg-gray-100">
                  <FiX size={20} />
                </button>
              </div>

              {/* Navigation */}
              <nav className="p-4 space-y-3">
                <Link
                  href="/overview"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    pathname === "/overview" ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <LayoutDashboard className="h-5 w-5" />
                  Overview
                </Link>
                <Link
                  href="/"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    pathname === "/" || pathname === "/create-blog" ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <DocumentTextIcon className="h-5 w-5" />
                  Blogs
                </Link>
                <Link
                  href="/itinerary"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    pathname === "/itinerary" || pathname === "/itinerary/add-itinerary" ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <MapIcon className="h-5 w-5" />
                  Itinerary
                </Link>
                <Link
                  href="/leads"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    pathname === "/leads" ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <UsersIcon className="h-5 w-5" />
                  Leads
                </Link>
                <Link
                  href="/report"
                  className={`flex items-center gap-3 px-3 py-2 rounded-lg ${
                    pathname === "/report" ? "bg-gray-200 text-gray-900" : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  <ChartPieIcon className="h-5 w-5" />
                  Report
                </Link>
              </nav>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default SidebarDrawer;
