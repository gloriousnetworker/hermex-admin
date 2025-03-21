// src/middleware.js
import { NextResponse } from 'next/server';

export function middleware(request) {
  if (request.nextUrl.pathname.startsWith('/dashboard')) {
    const token = request.cookies.get('authToken') || null;
    if (!token) {
      return NextResponse.redirect(new URL('/signin/login', request.url));
    }
  }
  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
