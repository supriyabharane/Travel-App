import mongoose from "mongoose";
import Trip from "../models/Trip.js";

const MONGODB_URI = process.env.MONGODB_URI || "mongodb+srv://bharanesupriya:4XPI7ZQFz0mjRfiT@cluster0.rl7dw3s.mongodb.net/holiday-booking?retryWrites=true&w=majority&appName=Cluster0";

async function seed() {
  await mongoose.connect(MONGODB_URI);

  const trip = new Trip({
    title: "Bali - Ubud Kuta",
    slug: "bali-ubud-kuta",
    description: "A perfect blend of adventure and relaxation in Bali.",
    price: 46500,
    startDate: new Date("2025-01-15"),
    endDate: new Date("2025-01-22"),
    inclusions: [
      "2 Hotels", "2 Transfers", "4 Activities", "1 Visa", "1 Insurance"
    ],
    travellers: 2,
    days: [
      { day: 1, summary: "Arrive into Denpasar Bali and get transferred to your hotel. Rest of the day at leisure." },
      { day: 2, summary: "Ubud Wonders: Volcano, Waterfalls, Rice Fields, Monkeys & Exhilarating Swing Thrills." },
      { day: 3, summary: "Scenic Day Tour: Ulun Danu Beratan Temple & Handara Gate." },
      { day: 4, summary: "Thrilling White Water Rafting Adventure at Ayung River, Ubud at Alaska Rafting." },
      { day: 5, summary: "West Nusa Penida (Angel Billabong, Crystal Bay, Broken Beach, Kelingking Beach)." },
      { day: 6, summary: "At Leisure." },
      { day: 7, summary: "At Leisure, checkout and fly back home." },
    ]
  });

  await trip.save();
  console.log("Trip seeded!");
  await mongoose.disconnect();
}

seed();