import { NextResponse } from 'next/server';

// Minimal middleware that simply forwards all requests.
// Server-only helpers live in `lib/middleware.js` to avoid Edge runtime restrictions.
export function middleware(request) {
	return NextResponse.next();
}

export const config = {
	matcher: '/api/:path*',
};
