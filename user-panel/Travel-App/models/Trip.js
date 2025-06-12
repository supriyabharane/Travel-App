import mongoose from "mongoose";

const TripSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true }, // e.g. "bali-ubud-kuta"
  description: String,
  price: Number,
  startDate: Date,
  endDate: Date,
  inclusions: [String],
  travellers: Number,
  days: [
    {
      day: Number,
      summary: String,
    }
  ],
}, { timestamps: true });

export default mongoose.models.Trip || mongoose.model("Trip", TripSchema);