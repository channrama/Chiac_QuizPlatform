import { NextResponse } from 'next/server';

export function middleware(request) {
	const token = request.cookies.get('token')?.value;
	const { pathname } = request.nextUrl;

	// Protected routes
	const protectedRoutes = ['/dashboard', '/create-quiz', '/generate-quiz', '/quiz', '/reports', '/results'];
	const isProtected = protectedRoutes.some(route => pathname.startsWith(route));

	// Auth routes (shouldn't be accessible when logged in)
	const authRoutes = ['/login', '/register'];
	const isAuthPage = authRoutes.some(route => pathname.startsWith(route));

	if (isProtected && !token) {
		return NextResponse.redirect(new URL('/login', request.url));
	}

	if (isAuthPage && token) {
		return NextResponse.redirect(new URL('/dashboard', request.url));
	}

	return NextResponse.next();
}

export const config = {
	matcher: [
		'/dashboard/:path*',
		'/create-quiz/:path*',
		'/generate-quiz/:path*',
		'/quiz/:path*',
		'/reports/:path*',
		'/results/:path*',
		'/login',
		'/register'
	],
};
