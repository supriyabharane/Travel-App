"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Header from "@/components/Header";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/solid";
import { ImageIcon } from "lucide-react";

const AddBlog = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    heading: "",
    paragraph: "",
    image: "",
  });
  const [imagePreview, setImagePreview] = useState("");

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
        setFormData({ ...formData, image: reader.result });
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePublish = async () => {
    if (!formData.title || !formData.heading || !formData.paragraph || !formData.image) {
      alert('Please fill in all fields');
      return;
    }

    try {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          content: `<h2>${formData.heading}</h2><p>${formData.paragraph}</p>`,
        }),
      });

      if (!response.ok) throw new Error('Failed to publish blog');

      router.push('/overview');
    } catch (error) {
      console.error('Error publishing blog:', error);
      alert('Failed to publish blog. Please try again.');
    }
  };

  return (
    <div>
      <Header
        title="Overview"
        actions={[
          {
            label: "Publish Blog",
            onClick: handlePublish,
          },
        ]}
      />

      <div className="sm:p-6 p-4 space-y-[32px]">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
          <div className="space-y-1 w-full sm:w-auto">
            <button
              className="text-[16px] sm:text-[20px] font-semibold flex items-center gap-x-2"
              onClick={() => router.back()}
            >
              <ArrowLeftIcon className="w-5 h-5" /> Add Blog
            </button>
            <p className="text-xs text-[#00000080]">
              Create and publish your blog
            </p>
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            <button className="w-full sm:w-auto px-3 py-2 text-sm rounded-[10px] border border-[#000] header-button-shadow flex items-center justify-center sm:justify-start gap-x-1.5">
              Preview Blog <EyeIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="space-y-6">
          <input
            type="text"
            placeholder="Blog Title"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full text-2xl font-bold border-none outline-none"
          />

          <div className="space-y-4">
            <input
              type="text"
              placeholder="Blog Heading"
              value={formData.heading}
              onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
              className="w-full text-xl font-semibold border rounded-lg p-3"
            />

            <textarea
              placeholder="Blog Paragraph"
              value={formData.paragraph}
              onChange={(e) => setFormData({ ...formData, paragraph: e.target.value })}
              className="w-full h-32 border rounded-lg p-3 resize-none"
            />

            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
              <input
                type="file"
                id="image-upload"
                accept="image/*"
                className="hidden"
                onChange={handleImageUpload}
              />
              <div className="space-y-4">
                {imagePreview ? (
                  <div className="relative">
                    <img
                      src={imagePreview}
                      alt="Preview"
                      className="max-h-48 mx-auto rounded-lg"
                    />
                    <button
                      onClick={() => {
                        setImagePreview("");
                        setFormData({ ...formData, image: "" });
                      }}
                      className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full"
                    >
                      ×
                    </button>
                  </div>
                ) : (
                  <button
                    onClick={() => document.getElementById("image-upload").click()}
                    className="w-full py-4 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center gap-2 text-gray-600 hover:bg-gray-50"
                  >
                    <ImageIcon size={20} />
                    Upload Blog Image
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlog;