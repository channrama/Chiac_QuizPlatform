import connectDB from '../../../../lib/db';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../../lib/auth';
import { cookies } from 'next/headers';
import { validateRegisterPayload } from '../../../../lib/validate';

export async function POST(req) {
  const body = await req.json();
  const { valid, errors } = validateRegisterPayload(body);
  if (!valid) return new Response(JSON.stringify({ error: 'Invalid input', details: errors }), { status: 400 });
  const { name, email, password, role } = body;
  try {
    await connectDB();
    const exists = await User.findOne({ email });
    if (exists) return new Response(JSON.stringify({ error: 'Email already registered' }), { status: 400 });
    const hashed = await bcrypt.hash(password, 10);
    const user = await User.create({ name, email, password: hashed, role });
    const token = signToken({ id: user._id, role: user.role });

    // Set cookie
    cookies().set('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'lax',
      maxAge: 7 * 24 * 60 * 60, // 7 days
      path: '/',
    });

    return new Response(JSON.stringify({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
