import connectDB from '../../../../lib/db';
import User from '../../../../models/User';
import bcrypt from 'bcryptjs';
import { signToken } from '../../../../lib/auth';

export async function POST(req) {
  const body = await req.json();
  const { email, password } = body || {};
  if (!email || !password) return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
  try {
    await connectDB();
    const user = await User.findOne({ email });
    if (!user) return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    const ok = await bcrypt.compare(password, user.password);
    if (!ok) return new Response(JSON.stringify({ error: 'Invalid credentials' }), { status: 401 });
    const token = signToken({ id: user._id, role: user.role });
    return new Response(JSON.stringify({ token, user: { id: user._id, name: user.name, email: user.email, role: user.role } }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
