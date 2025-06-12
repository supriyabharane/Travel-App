"use client";

import React from 'react';

const TripOverview = ({ formData, setFormData }) => {
  const handleDurationChange = (e) => {
    const days = parseInt(e.target.value, 10);
    setFormData(prev => ({
      ...prev,
      overview: {
        ...prev.overview,
        duration: {
          days: days,
          nights: days - 1
        }
      }
    }));
  };

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      overview: {
        ...prev.overview,
        [field]: value
      }
    }));
  };

  const handleImagesChange = (e) => {
    const files = Array.from(e.target.files);
    const imagePromises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onload = (e) => {
          resolve({
            url: e.target.result,
            alt: file.name
          });
        };
        reader.readAsDataURL(file);
      });
    });

    Promise.all(imagePromises).then(images => {
      handleInputChange('images', [...(formData.overview.images || []), ...images]);
    });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trip Title
          </label>
          <input
            type="text"
            value={formData.overview.title || ''}
            onChange={(e) => handleInputChange('title', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter trip title"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Duration (Days)
          </label>
          <input
            type="number"
            value={formData.overview.duration?.days || ''}
            onChange={handleDurationChange}
            min="1"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter number of days"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Destination Country
          </label>
          <input
            type="text"
            value={formData.overview.destinationCountry || ''}
            onChange={(e) => handleInputChange('destinationCountry', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
            placeholder="Enter destination country"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Trip Type
          </label>
          <select
            value={formData.overview.destinationType || ''}
            onChange={(e) => handleInputChange('destinationType', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select trip type</option>
            <option value="desert">Desert</option>
            <option value="mountain">Mountain</option>
            <option value="beach">Beach</option>
            <option value="domestic">Domestic</option>
            <option value="international">International</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Season
          </label>
          <select
            value={formData.overview.destinationSeason || ''}
            onChange={(e) => handleInputChange('destinationSeason', e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select season</option>
            <option value="Summer">Summer</option>
            <option value="Winter">Winter</option>
            <option value="Spring">Spring</option>
            <option value="Fall">Fall</option>
            <option value="All Year">All Year</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Trip Overview
        </label>
        <textarea
          value={formData.overview.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter trip overview"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Images
        </label>
        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
          <input
            type="file"
            multiple
            accept="image/*"
            onChange={handleImagesChange}
            className="w-full"
          />
          <p className="text-sm text-gray-500 mt-2">
            You can upload multiple images. Max size per image: 5MB
          </p>
        </div>
        {formData.overview.images && formData.overview.images.length > 0 && (
          <div className="mt-4 grid grid-cols-3 gap-4">
            {formData.overview.images.map((image, index) => (
              <div key={index} className="relative">
                <img
                  src={image.url}
                  alt={image.alt}
                  className="w-full h-24 object-cover rounded-lg"
                />
                <button
                  onClick={() => {
                    const newImages = formData.overview.images.filter((_, i) => i !== index);
                    handleInputChange('images', newImages);
                  }}
                  className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1"
                >
                  ×
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default TripOverview;