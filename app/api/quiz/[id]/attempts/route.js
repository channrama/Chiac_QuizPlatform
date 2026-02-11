import connectDB from '../../../../../lib/db';
import Attempt from '../../../../../models/Attempt';
import Quiz from '../../../../../models/Quiz';
import { getUserFromRequest, requireRole } from '../../../../../lib/middleware';

export async function GET(req, { params }) {
  const { id } = params;
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  try {
    await connectDB();
    const quiz = await Quiz.findById(id);
    if (!quiz) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    if (String(quiz.createdBy) !== String(user._id)) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
    const attempts = await Attempt.find({ quizId: id }).populate('studentId', 'name email').lean();
    return new Response(JSON.stringify(attempts), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
