import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import Staff from '@/models/Staff';

export async function PUT(request, { params }) {
  try {
    const { id } = params;
    const body = await request.json();
    await connectDB();
    const staff = await Staff.findByIdAndUpdate(id, body, { new: true });
    return NextResponse.json({ staff });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request, { params }) {
  try {
    const { id } = params;
    await connectDB();
    await Staff.findByIdAndDelete(id);
    return NextResponse.json({ message: 'Staff deleted successfully' });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}