import mongoose from "mongoose";
import User from "../models/User.js";
//import bcrypt from "bcryptjs";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://bharanesupriya:4XPI7ZQFz0mjRfiT@cluster0.rl7dw3s.mongodb.net/holiday-booking?retryWrites=true&w=majority&appName=Cluster0";

async function seed() {
  await mongoose.connect(MONGODB_URI);

  await User.deleteOne({ email: "bharanesupriya6@gmail.com" });
  console.log("Deleted existing user with email: bharanesupriya6@gmail.com");

 const user = new User({
  fullName: "Supriya Bharane",
  email: "bharanesupriya6@gmail.com",
  password: "login@123", // Plain text password for testing
});

  await user.save();
  console.log("User recreated with plain text password!");
  console.log("Saved user:", user);
  await mongoose.disconnect();
}

seed();
