"use client";
import { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import BulletList from "@tiptap/extension-bullet-list";
import OrderedList from "@tiptap/extension-ordered-list";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import { ArrowLeftIcon } from "@heroicons/react/24/outline";
import { EyeIcon } from "@heroicons/react/24/solid";
import { useRouter, useParams } from "next/navigation";
import Header from "@/components/Header";
import {
  Undo,
  Redo,
  Bold as BoldIcon,
  Italic as ItalicIcon,
  Link2,
  List,
  ListOrdered,
  Image as ImageIcon,
} from "lucide-react";

const EditBlog = () => {
  const router = useRouter();
  const params = useParams();
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(true);

  const editor = useEditor({
    extensions: [
      StarterKit,
      Heading,
      Bold,
      Italic,
      BulletList,
      OrderedList,
      Image,
      Link,
    ],
    content: "",
  });

  useEffect(() => {
    const fetchBlog = async () => {
      try {
        const response = await fetch(`/api/blogs/${params.id}`);
        if (!response.ok) throw new Error('Blog not found');
        
        const data = await response.json();
        setTitle(data.blog.title);
        editor?.commands.setContent(data.blog.content);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching blog:', error);
        router.push('/overview');
      }
    };

    if (params.id && editor) {
      fetchBlog();
    }
  }, [params.id, editor]);

  const handleUpdate = async () => {
    if (!title || !editor?.getHTML()) {
      alert('Please provide both title and content');
      return;
    }

    try {
      const response = await fetch(`/api/blogs/${params.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          title,
          content: editor.getHTML(),
          updatedAt: new Date(),
        }),
      });

      if (!response.ok) throw new Error('Failed to update blog');

      router.push('/overview');
    } catch (error) {
      console.error('Error updating blog:', error);
      alert('Failed to update blog. Please try again.');
    }
  };

  if (loading) {
    return <div className="p-6">Loading...</div>;
  }

  return (
    <div>
      <Header
        title="Overview"
        actions={[
          {
            label: "Update Blog",
            onClick: handleUpdate,
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
              <ArrowLeftIcon className="w-5 h-5" /> Edit Blog
            </button>
            <p className="text-xs text-[#00000080]">
              Edit and update your blog
            </p>
          </div>

          <div className="w-full sm:w-auto mt-3 sm:mt-0">
            <button className="w-full sm:w-auto px-3 py-2 text-sm rounded-[10px] border border-[#000] header-button-shadow flex items-center justify-center sm:justify-start gap-x-1.5">
              Preview Blog <EyeIcon className="w-4 h-4" />
            </button>
          </div>
        </div>

        <input
          type="text"
          placeholder="Blog Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full text-2xl font-bold border-none outline-none mb-4"
        />

        <div className="border rounded-lg bg-[#0000000D] p-3 flex gap-2 items-center">
          <button
            onClick={() => editor?.chain().focus().undo().run()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <Undo size={16} />
          </button>
          <button
            onClick={() => editor?.chain().focus().redo().run()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <Redo size={16} />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleBold().run()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <BoldIcon size={16} />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleItalic().run()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <ItalicIcon size={16} />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleBulletList().run()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <List size={16} />
          </button>
          <button
            onClick={() => editor?.chain().focus().toggleOrderedList().run()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <ListOrdered size={16} />
          </button>
          <button
            onClick={() => editor?.chain().focus().setLink({ href: "#" }).run()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <Link2 size={16} />
          </button>
          <button
            onClick={() => document.getElementById("image-upload").click()}
            className="p-2 rounded-md hover:bg-gray-200"
          >
            <ImageIcon size={16} />
          </button>
          <input
            type="file"
            id="image-upload"
            accept="image/*"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files[0];
              if (file) {
                const reader = new FileReader();
                reader.onload = () => {
                  editor?.chain().focus().setImage({ src: reader.result }).run();
                };
                reader.readAsDataURL(file);
              }
            }}
          />
        </div>

        <div className="border border-dashed border-[#00000026] p-6 rounded-[24px]">
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
};

export default EditBlog;