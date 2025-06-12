import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Staff from '@/models/Staff';

export async function GET() {
  try {
    await connectDB();
    const staff = await Staff.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ staff });
  } catch (error) {
    console.error('GET Staff Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request) {
  try {
    const body = await request.json();
    await connectDB();

    // Validate required fields
    if (!body.name || !body.role || !body.email || !body.userId || !body.password) {
      return NextResponse.json(
        { error: 'Please provide all required fields' },
        { status: 400 }
      );
    }

    // Create new staff member
    const staff = await Staff.create({
      name: body.name,
      role: body.role,
      email: body.email,
      userId: body.userId,
      password: body.password,
      access: {
        blogs: body.access?.blogs || false,
        itinerary: body.access?.itinerary || false,
        leads: body.access?.leads || false
      }
    });

    return NextResponse.json({ staff });
  } catch (error) {
    console.error('POST Staff Error:', error);
    if (error.code === 11000) {
      return NextResponse.json(
        { error: 'Email or User ID already exists' },
        { status: 400 }
      );
    }
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}