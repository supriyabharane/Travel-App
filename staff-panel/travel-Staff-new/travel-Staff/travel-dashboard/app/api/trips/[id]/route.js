import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Trip from '@/models/Trip';

export async function GET(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const trip = await Trip.findById(id);
    
    if (!trip) {
      return NextResponse.json({ 
        success: false, 
        error: 'Trip not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      data: trip 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    
    const deletedTrip = await Trip.findByIdAndDelete(id);
    
    if (!deletedTrip) {
      return NextResponse.json({ 
        success: false, 
        error: 'Trip not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      data: deletedTrip 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  try {
    await connectDB();
    const { id } = params;
    const updateData = await req.json();
    
    const updatedTrip = await Trip.findByIdAndUpdate(
      id,
      updateData,
      { new: true, runValidators: true }
    );
    
    if (!updatedTrip) {
      return NextResponse.json({ 
        success: false, 
        error: 'Trip not found' 
      }, { status: 404 });
    }

    return NextResponse.json({ 
      success: true, 
      data: updatedTrip 
    });

  } catch (error) {
    return NextResponse.json({ 
      success: false, 
      error: error.message 
    }, { status: 500 });
  }
}