import connectDB from '../../../../lib/db';
import User from '../../../../models/User';
import { verifyToken } from '../../../../lib/auth';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const cookieStore = cookies();
        const token = cookieStore.get('token')?.value;

        if (!token) {
            return NextResponse.json({ user: null });
        }

        try {
            const payload = verifyToken(token);
            if (!payload) throw new Error('Invalid token');

            await connectDB();
            const user = await User.findById(payload.id).select('-password');
            if (!user) throw new Error('User not found');

            return NextResponse.json({ user });
        } catch (innerErr) {
            console.log('Token validation failed, clearing cookie...');
            const response = NextResponse.json({ user: null });
            response.cookies.set('token', '', { maxAge: 0, path: '/' });
            return response;
        }
    } catch (err) {
        console.error('Me API Error:', err);
        return NextResponse.json({ user: null });
    }
}
