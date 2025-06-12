import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Trip from '@/models/Trip';

export async function GET() {
  try {
    await connectDB();
    
    // Fetch only draft trips with selected fields
    const trips = await Trip.find({ status: 'draft' })
      .select('_id title duration images pricing destinationType destinationCountry')
      .sort({ createdAt: -1 });

    return NextResponse.json({ trips }, { status: 200 });
  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json(
      { error: 'Failed to fetch trips' },
      { status: 500 }
    );
  }
}