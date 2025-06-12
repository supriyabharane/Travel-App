"use client";
import Header from "@/components/Header";
import Checkbox from "@/components/ui/Checkbox";
import { PencilIcon, TrashIcon, ShareIcon, FunnelIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useRouter } from "next/navigation";
import { GoSortDesc } from "react-icons/go";
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
  {
    id: 6,
    date: "17 Jan 2023",
    name: "Lorem Name 6",
    description: "Manage your blogs, monitor analytics.........",
  },
  {
    id: 7,
    date: "18 Jan 2023",
    name: "Lorem Name 7",
    description: "Manage your blogs, monitor analytics.........",
  },
  {
    id: 8,
    date: "19 Jan 2023",
    name: "Lorem Name 8",
    description: "Manage your blogs, monitor analytics.........",
  },
  {
    id: 9,
    date: "20 Jan 2023",
    name: "Lorem Name 9",
    description: "Manage your blogs, monitor analytics.........",
  },
  {
    id: 10,
    date: "21 Jan 2023",
    name: "Lorem Name 10",
    description: "Manage your blogs, monitor analytics.........",
  },
];

export default function BlogsPage() {
  const router = useRouter()
  return (
    <>
      <Header
        title="Blogs"
        actions={[
          {
            label: "Create Blog",
            onClick: () => router.push("/create-blog"),
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
              Manage your blogs, monitor analytics
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
                  Name
                </th>
                <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
                  Description
                </th>
                <th className="px-6 py-3 text-center text-sm font-normal text-[#1B1B1B]">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#0000000D] bg-white">
              {blogs.map((blog) => (
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
      </div>
    </>
  );
}
