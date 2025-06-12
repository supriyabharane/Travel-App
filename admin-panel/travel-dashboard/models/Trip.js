import mongoose from 'mongoose';

const tripSchema = new mongoose.Schema({
  // Basic Info
  title: { type: String, required: true },
  description: { type: String, required: true },
  destinationType: { 
    type: String, 
    required: true,
    enum: ['desert', 'mountain', 'beach', 'domestic', 'international'] 
  },
  destinationCountry: { type: String, required: true },
  destinationSeason: { type: String, required: true },
  duration: {
    days: { type: Number, required: true },
    nights: { type: Number, required: true }
  },
  
  // Media
  images: [{ 
    url: { type: String, required: true },
    alt: { type: String }
  }],

  // Itinerary Details
  itinerary: [{
    dayNumber: { type: Number, required: true },
    overview: { type: String, required: true },
    schedule: {
      morning: { type: String },
      afternoon: { type: String },
      evening: { type: String }
    }
  }],

  // Stays and Transfers
  stays: [{
    name: { type: String, required: true },
    hotelType: { type: String, required: true },
    nights: { type: Number, required: true },
    features: [String],
    images: [{ 
      url: { type: String, required: true },
      alt: { type: String }
    }]
  }],

  transfers: [{
    name: { type: String, required: true },
    vehicleType: { type: String, required: true },
    features: [String],
    images: [{ 
      url: { type: String, required: true },
      alt: { type: String }
    }]
  }],

  // Pricing Packages
  pricing: {
    valuePack: { type: Number, required: true },
    elitePack: { type: Number, required: true },
    businessPack: { type: Number, required: true }
  },

  // Terms and Policies
  termsAndConditions: { type: String, required: true },
  refundPolicy: { type: String, required: true },

  // Status
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