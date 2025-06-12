'use client';
import React, { useEffect, useState } from "react";
import {
  PencilIcon,
  TrashIcon,
  ShareIcon,
} from "@heroicons/react/24/outline";
import { Checkbox } from "@headlessui/react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const AdminBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const router = useRouter();

  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('/api/blogs');
      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }
      const data = await response.json();
      setBlogs(data.blogs || []);
    } catch (error) {
      console.error('Error fetching blogs:', error);
      setError('Failed to load blogs. Please try again later.');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this blog?')) return;
    
    try {
      const response = await fetch(`/api/blogs/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) throw new Error('Failed to delete blog');
      await fetchBlogs();
    } catch (error) {
      console.error('Error deleting blog:', error);
      alert('Failed to delete blog. Please try again.');
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      day: '2-digit',
      month: 'short',
      year: 'numeric'
    });
  };

  if (loading) {
    return <div className="p-4 text-center">Loading blogs...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">{error}</div>;
  }

  if (blogs.length === 0) {
    return (
      <div className="p-8 text-center">
        <p className="text-gray-500">No blogs found. Create your first blog!</p>
        <button
          onClick={() => router.push('/create-blog')}
          className="mt-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-800"
        >
          Create Blog
        </button>
      </div>
    );
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
              Image
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Date
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Title
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Heading
            </th>
            <th className="px-6 py-3 text-left text-sm font-normal text-[#1B1B1B]">
              Content
            </th>
            <th className="px-6 py-3 text-center text-sm font-normal text-[#1B1B1B]">
              Action
            </th>
          </tr>
        </thead>
        <tbody className="divide-y divide-[#0000000D] bg-white">
          {blogs.map((blog) => (
            <tr key={blog._id} className="bg-white">
              <td className="px-6 py-4">
                <Checkbox />
              </td>
              <td className="px-6 py-4">
                {blog.image && (
                  <div className="w-16 h-16 relative rounded-lg overflow-hidden">
                    <Image
                      src={blog.image}
                      alt={blog.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {formatDate(blog.createdAt)}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {blog.title}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-sm text-[#1B1B1B]">
                {blog.heading}
              </td>
              <td className="px-6 py-4 text-sm text-gray-500">
                {blog.paragraph && blog.paragraph.length > 100 
                  ? `${blog.paragraph.substring(0, 100)}...` 
                  : blog.paragraph}
              </td>
              <td className="whitespace-nowrap px-6 py-4 text-right">
                <div className="flex justify-end gap-2">
                  <button 
                    className="rounded-full p-2 text-[#1B1B1B] bg-[#F8F4D3]"
                    onClick={() => router.push(`/edit-blog/${blog._id}`)}
                  >
                    <PencilIcon className="h-4 w-4" />
                  </button>
                  <button 
                    className="rounded-full p-2 text-[#1B1B1B] bg-[#F8D3D3]"
                    onClick={() => handleDelete(blog._id)}
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

export default AdminBlogs;