import mongoose from 'mongoose';

const StaffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please provide a name']
  },
  role: {
    type: String,
    required: [true, 'Please provide a role']
  },
  email: {
    type: String,
    required: [true, 'Please provide an email'],
    unique: true
  },
  userId: {
    type: String,
    required: [true, 'Please provide a user ID'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password']
  },
  access: {
    blogs: {
      type: Boolean,
      default: false
    },
    itinerary: {
      type: Boolean,
      default: false
    },
    leads: {
      type: Boolean,
      default: false
    }
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

export default mongoose.models.Staff || mongoose.model('Staff', StaffSchema);