import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true, 'Please provide your full name'],
  },
  email: {
    type: String,
    required: [true, 'Please provide your email'],
    unique: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: [true, 'Please provide a password'],
    minlength: 6,
    select: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Hash password before saving
userSchema.pre('save', async function(next) {
  // No hashing, store password as plain text for testing
  next();
});

// Compare password method
userSchema.methods.comparePassword = async function(candidatePassword) {
  return candidatePassword === this.password;
};

export default mongoose.models.User || mongoose.model('User', userSchema);