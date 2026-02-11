import connectDB from '../../../../lib/db';
import Quiz from '../../../../models/Quiz';
import Attempt from '../../../../models/Attempt';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';
import bcrypt from 'bcryptjs';

export async function GET(req, { params }) {
  const { id } = params;
  try {
    await connectDB();
    const quiz = await Quiz.findById(id).lean();
    if (!quiz) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    // if password protected, require unlock
    if (quiz.accessPassword) return new Response(JSON.stringify({ error: 'locked' }), { status: 403 });
    // hide correct answers
    const sanitized = { ...quiz, questions: quiz.questions.map(q => ({ question: q.question, options: q.options })) };
    return new Response(JSON.stringify(sanitized), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  try {
    await connectDB();
    const quiz = await Quiz.findById(id);
    if (!quiz) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    if (String(quiz.createdBy) !== String(user._id)) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
    // remove attempts
    await Attempt.deleteMany({ quizId: id });
    await Quiz.deleteOne({ _id: id });
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
