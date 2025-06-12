"use client";

import { BellIcon } from "@heroicons/react/24/outline";
import { LuSettings } from "react-icons/lu";
import { GoPlus } from "react-icons/go";
import { Menu } from "lucide-react";
import { useState } from "react";
import SidebarDrawer from "./SidebarDrawer";

const Header = ({ title, actions }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  return (
    <>
    <header className="flex py-[20px] sm:px-[30px] px-4 items-center justify-between border-b border-[#0000001A] bg-white">
      <div className="flex items-center gap-2">
        <button
          className="p-2 bg-[#0000000D] rounded-full sm:hidden"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>
        <h1 className="text-[16px] font-normal text-[#1B1B1B]">{title}</h1>
      </div>

      <div className="flex items-center gap-2.5">
        <button className="p-2 bg-[#0000000D] rounded-full">
          <LuSettings className="h-5 w-5" />
        </button>
        <button className="p-2 bg-[#0000000D] rounded-full">
          <BellIcon className="h-5 w-5" />
        </button>

        {actions?.map((action, index) => (
          <button
            key={index}
            className="rounded-[10px] bg-gradient-to-r from-[#FF3131] to-[#FF914D] px-3 py-2 text-sm font-normal text-white flex items-center gap-x-1 header-button-shadow"
            onClick={action.onClick}
          >
            {action.icon || <GoPlus />}
            {action.label}
          </button>
        ))}
      </div>
    </header>
    <SidebarDrawer isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};

export default Header;
