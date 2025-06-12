import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export function middleware(request) {
  const token = request.cookies.get('token');
  const { pathname } = request.nextUrl;

  // Protected routes that require authentication
  const protectedPaths = ['/user-profile'];
  
  // Public routes that should not be accessible when logged in
  const authPaths = ['/login', '/signup'];

  // Check if the path is protected and user is not authenticated
  if (protectedPaths.includes(pathname) && !token) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Redirect authenticated users away from auth pages
  if (authPaths.includes(pathname) && token) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/user-profile/:path*',
    '/login',
    '/signup',
  ],
};