import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Trip from '@/models/Trip';
import mongoose from 'mongoose';

export async function GET(request, context) {
  const params = await context.params; // Correct for Next.js 15+
  const { id } = params;

  try {
    await connectDB();
    let trip = null;

    // Try to find by ObjectId
    if (mongoose.Types.ObjectId.isValid(id)) {
      trip = await Trip.findById(id);
    }
    // If not found, try to find by slug
    if (!trip) {
      trip = await Trip.findOne({ slug: id });
    }

    if (!trip) {
      return NextResponse.json(
        { error: 'Trip not found' },
        { status: 404 }
      );
    }
    return NextResponse.json({ trip });
  } catch (error) {
    console.error('Error fetching trip details:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trip details' },
      { status: 500 }
    );
  }
}