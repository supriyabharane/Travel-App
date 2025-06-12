import { NextResponse } from 'next/server';
import connectDB from '@/lib/db';
import Trip from '@/models/Trip';

export async function GET(request) {
  try {
    await connectDB();

    const { searchParams } = new URL(request.url);
    const type = searchParams.get('type');
    const country = searchParams.get('country');
    const season = searchParams.get('season');

    let query = { status: 'draft' };

    if (type) {
      query.destinationType = type;
    }
    if (country) {
      query.destinationCountry = country;
    }
    if (season) {
      query.destinationSeason = season;
    }

    const trips = await Trip.find(query)
      .select('_id title duration images pricing destinationType destinationCountry destinationSeason')
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