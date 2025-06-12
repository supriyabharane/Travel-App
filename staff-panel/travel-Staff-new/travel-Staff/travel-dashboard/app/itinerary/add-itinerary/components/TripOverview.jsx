// components/ItineraryDetail/TripOverview.jsx
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
            <option value="Honeymoon">Honeymoon</option>
            <option value="Family">Family</option>
            <option value="Adventure">Adventure</option>
            <option value="Cultural">Cultural</option>
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
          Description
        </label>
        <textarea
          value={formData.overview.description || ''}
          onChange={(e) => handleInputChange('description', e.target.value)}
          rows={4}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
          placeholder="Enter trip description"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Upload Images
        </label>
        <input
          type="file"
          multiple
          accept="image/*"
          onChange={(e) => {
            const files = Array.from(e.target.files);
            const imageUrls = files.map(file => URL.createObjectURL(file));
            handleInputChange('images', imageUrls);
          }}
          className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </div>
  );
};

export default TripOverview;
