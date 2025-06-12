import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Trip from '@/models/Trip';

export async function POST(req) {
  try {
    await connectDB();
    
    const tripData = await req.json();
    
    const trip = await Trip.create(tripData);
    
    return NextResponse.json({ 
      success: true, 
      data: trip 
    }, { status: 201 });

  } catch (error) {
    console.error('Error creating trip:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to create trip' 
    }, { status: 500 });
  }
}