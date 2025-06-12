import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Trip from '@/models/Trip';

export async function GET() {
  try {
    await connectDB();
    
    const trips = await Trip.find({}).sort({ createdAt: -1 });
    
    return NextResponse.json({ 
      success: true, 
      data: trips 
    });

  } catch (error) {
    console.error('Error fetching trips:', error);
    return NextResponse.json({ 
      success: false, 
      error: error.message || 'Failed to fetch trips' 
    }, { status: 500 });
  }
}