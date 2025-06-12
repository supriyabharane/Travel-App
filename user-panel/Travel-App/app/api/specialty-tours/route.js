import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Trip from '@/models/Trip';

export async function GET() {
  try {
    await connectDB();
    const specialtyTours = await Trip.find({ type: 'specialty' }).sort({ createdAt: -1 });
    return NextResponse.json({ trips: specialtyTours });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}