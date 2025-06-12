import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Trip from '@/models/Trip';

export async function GET() {
  try {
    await connectDB();
    const fixedDepartures = await Trip.find({ type: 'fixed-departure' }).sort({ createdAt: -1 });
    return NextResponse.json({ trips: fixedDepartures });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
