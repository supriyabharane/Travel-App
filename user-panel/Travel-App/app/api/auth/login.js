import User from "../../../models/User.js";
import dbConnect from "../../../lib/db.js";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

  try {
    console.log("Login endpoint hit with email:", email); // Debug log
    console.log("Password received:", password); // Debug log

    await dbConnect();
    console.log("Database connected successfully"); // Debug log

    const user = await User.findOne({ email }).select("+password");
    console.log("User found:", user); // Debug log

    if (!user) {
      console.error("User not found for email:", email); // Debug log
      return res.status(401).json({ message: "Invalid email or password" });
    }

    console.log("Stored hashed password:", user.password); // Debug log
    console.log("Plain text password:", password); // Debug log

    const isPasswordValid = await user.comparePassword(password);
    console.log("Password validation result:", isPasswordValid); // Debug log

    if (!isPasswordValid) {
      console.error("Password validation failed for email:", email); // Debug log
      return res.status(401).json({ message: "Invalid email or password" });
    }

    return res.status(200).json({
      id: user._id,
      fullName: user.fullName,
      email: user.email,
    });
  } catch (error) {
    console.error("Login error:", error);
    return res.status(500).json({ message: "Internal server error" });
  }
}