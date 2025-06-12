import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Staff from '@/models/Staff';

export async function GET() {
  try {
    await connectDB();
    const staff = await Staff.find({}).sort({ createdAt: -1 });
    return NextResponse.json({ staff });
  } catch (error) {
    console.error('Error fetching staff:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}