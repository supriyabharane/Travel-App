"use client";
import { Fragment, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { FiX } from "react-icons/fi";

const AddStaffDrawer = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: '',
    role: '',
    email: '',
    userId: '',
    password: '',
    access: {
      blogs: false,
      itinerary: false,
      leads: false
    }
  });

  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    // Handle the special case for userid/userId
    const fieldName = name === 'userid' ? 'userId' : name;
    setFormData(prev => ({
      ...prev,
      [fieldName]: value
    }));
    setError('');
  };

  const toggleAccess = (key) => {
    setFormData(prev => ({
      ...prev,
      access: {
        ...prev.access,
        [key.toLowerCase()]: !prev.access[key.toLowerCase()]
      }
    }));
  };

  const validateForm = () => {
    const requiredFields = ['name', 'role', 'email', 'userId', 'password'];
    for (const field of requiredFields) {
      if (!formData[field]?.trim()) {
        setError(`Please fill in the ${field === 'userId' ? 'User ID' : field} field`);
        return false;
      }
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError('Please enter a valid email address');
      return false;
    }

    return true;
  };

  const resetForm = () => {
    setFormData({
      name: '',
      role: '',
      email: '',
      userId: '',
      password: '',
      access: {
        blogs: false,
        itinerary: false,
        leads: false
      }
    });
    setError('');
  };

  const handleSubmit = async () => {
    try {
      if (!validateForm()) return;
      
      setIsSubmitting(true);
      setError('');

      const response = await fetch('/api/staff', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to add staff');
      }

      resetForm();
      onClose();
      window.location.reload();
    } catch (error) {
      console.error('Error adding staff:', error);
      setError(error.message || 'Failed to add staff. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const formFields = [
    { label: 'Name', type: 'text', name: 'name' },
    { label: 'Role', type: 'text', name: 'role' },
    { label: 'Email', type: 'email', name: 'email' },
    { label: 'User ID', type: 'text', name: 'userid' },
    { label: 'Password', type: 'password', name: 'password' }
  ];

  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
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

        <div className="fixed inset-y-0 right-0 flex max-w-lg w-full">
          <Transition.Child
            as={Fragment}
            enter="transform transition ease-in-out duration-300 sm:duration-500"
            enterFrom="translate-x-full"
            enterTo="translate-x-0"
            leave="transform transition ease-in-out duration-300 sm:duration-500"
            leaveFrom="translate-x-0"
            leaveTo="translate-x-full"
          >
            <Dialog.Panel className="w-full h-full bg-white shadow-lg p-6 space-y-6 overflow-y-auto">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="text-[20px] font-semibold text-[#1B1B1B]">
                    Add Staff
                  </h2>
                  <p className="text-[#6D6D6D] text-xs">
                    Add all details about the staff
                  </p>
                </div>
                <button 
                  onClick={onClose} 
                  className="text-[#0B0B0B] hover:bg-gray-100 p-2 rounded-full transition-colors"
                >
                  <FiX size={20} />
                </button>
              </div>

              {error && (
                <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg">
                  {error}
                </div>
              )}

              <div className="space-y-4">
                {formFields.map((field) => (
                  <div key={field.label} className="flex flex-col">
                    <label className="text-base font-normal text-black mb-1">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      placeholder="Type Here"
                      value={field.name === 'userid' ? formData.userId : formData[field.name]}
                      onChange={handleInputChange}
                      className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm outline-none focus:border-black focus:ring-1 focus:ring-black transition-colors"
                    />
                  </div>
                ))}
              </div>

              <div className="space-y-4">
                <h3 className="text-base font-normal text-black">Access</h3>
                <div className="border border-[#0321251A] p-4 rounded-xl space-y-3">
                  {['Blogs', 'Itinerary', 'Leads'].map((key) => (
                    <div key={key} className="flex justify-between items-center">
                      <span className="text-sm text-black">{key}</span>
                      <button
                        type="button"
                        onClick={() => toggleAccess(key)}
                        className={`relative inline-flex h-6 w-10 items-center rounded-full transition-colors ${
                          formData.access[key.toLowerCase()]
                            ? 'bg-red-500'
                            : 'bg-[#767474]'
                        }`}
                      >
                        <span
                          className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                            formData.access[key.toLowerCase()]
                              ? 'translate-x-5'
                              : 'translate-x-1'
                          }`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-end pt-4">
                <button
                  onClick={handleSubmit}
                  disabled={isSubmitting}
                  className={`px-5 py-3 rounded-[10px] bg-black text-white transition-opacity ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:opacity-90'
                  }`}
                >
                  {isSubmitting ? 'Adding...' : 'Continue →'}
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  );
};

export default AddStaffDrawer;