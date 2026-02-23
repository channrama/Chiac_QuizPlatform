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
    // Secure check: if student, require joinCode in query
    const user = await getUserFromRequest(req);
    const { searchParams } = new URL(req.url);
    const providedKey = searchParams.get('key');

    if (user?.role === 'student') {
      if (!providedKey || providedKey !== quiz.joinCode) {
        return new Response(JSON.stringify({ error: 'Access Denied: Valid Join Code Required' }), { status: 403 });
      }
      // hide correct answers for students
      const sanitized = {
        ...quiz,
        questions: quiz.questions.map(q => ({ question: q.question, options: q.options }))
      };
      return new Response(JSON.stringify(sanitized), { status: 200 });
    }

    // For teachers or others (admin), return full data
    return new Response(JSON.stringify(quiz), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

  const body = await req.json();
  const { title, description, duration, questions } = body || {};

  try {
    await connectDB();
    const quiz = await Quiz.findById(id);
    if (!quiz) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    if (String(quiz.createdBy) !== String(user._id)) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

    quiz.title = title || quiz.title;
    quiz.description = description || quiz.description;
    quiz.duration = duration || quiz.duration;
    quiz.questions = questions || quiz.questions;

    if (body.accessPassword) {
      quiz.accessPassword = await bcrypt.hash(String(body.accessPassword), 10);
    }

    await quiz.save();
    return new Response(JSON.stringify(quiz), { status: 200 });
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
