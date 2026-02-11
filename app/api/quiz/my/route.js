import connectDB from '../../../../lib/db';
import Quiz from '../../../../models/Quiz';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';

export async function GET(req) {
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  try {
    await connectDB();
    const quizzes = await Quiz.find({ createdBy: user._id }).lean();
    return new Response(JSON.stringify(quizzes), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
