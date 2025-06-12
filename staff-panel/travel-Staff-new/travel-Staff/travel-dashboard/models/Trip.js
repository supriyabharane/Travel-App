// models/Trip.js
import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  // Basic Info
  title: { type: String, required: true },
  description: { type: String, required: true },
  destinationType: { type: String, required: true },
  destinationCountry: { type: String, required: true },
  destinationSeason: { type: String, required: true },
  duration: {
    days: { type: Number, required: true },
    nights: { type: Number, required: true }
  },
  
  // Media
  images: [{ type: String }], // Changed to simple string array for URLs

  // Itinerary Details
  itinerary: [{
    dayNumber: { type: String, required: true },
    highlight: { type: String, required: true },
    descriptions: [{
      text: { type: String, required: true },
      image: { type: String } // Optional image URL
    }]
  }],

  // Stays
  stays: [{
    location: { type: String, required: true },
    duration: { type: String, required: true },
    hotels: [{
      name: { type: String, required: true },
      type: { type: String, required: true },
      features: [String],
      images: [String] // Array of image URLs
    }]
  }],

  // Pricing
  pricing: [{
    title: { type: String, required: true },
    startingPrice: { type: Number, required: true },
    currency: { type: String, default: 'INR' },
    benefits: [String]
  }],

  // Features/Highlights
  features: [{
    title: { type: String, required: true },
    description: { type: String, required: true },
    color: { type: String },
    secondColor: { type: String }
  }],

  // Support Info
  support: {
    phone: { type: String },
    email: { type: String }
  },

  // Metadata
  status: {
    type: String,
    enum: ['draft', 'published', 'archived'],
    default: 'draft'
  }
}, {
  timestamps: true
});

const Trip = mongoose.models.Trip || mongoose.model('Trip', tripSchema);

export default Trip;
