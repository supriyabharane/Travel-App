import mongoose from "mongoose";
import User from "../models/User.js";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://bharanesupriya:4XPI7ZQFz0mjRfiT@cluster0.rl7dw3s.mongodb.net/holiday-booking?retryWrites=true&w=majority&appName=Cluster0";

async function deleteUser() {
  try {
    await mongoose.connect(MONGODB_URI);
    const result = await User.deleteOne({ email: "bharanesupriya6@gmail.com" });
    console.log("Deleted user:", result);
  } catch (error) {
    console.error("Error deleting user:", error);
  } finally {
    await mongoose.disconnect();
  }
}

deleteUser();
