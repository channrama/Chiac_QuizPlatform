import connectDB from '../../../lib/db';
import Quiz from '../../../models/Quiz';
import { getUserFromRequest, requireRole } from '../../../lib/middleware';
import { validateQuizPayload } from '../../../lib/validate';
import bcrypt from 'bcryptjs';
import crypto from 'crypto';

export async function GET(req) {
  // Return all quizzes (hide correct answers)
  try {
    await connectDB();
    const quizzes = await Quiz.find().select('-__v').lean();
    const sanitized = quizzes.map(q => ({
      ...q,
      questions: q.questions.map(x => ({ question: x.question, options: x.options }))
    }));
    return new Response(JSON.stringify(sanitized), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}

export async function POST(req) {
  // Create quiz (teacher only)
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  const body = await req.json();
  const { title, description, duration, questions } = body || {};
  const { valid, errors } = validateQuizPayload({ title, questions, duration });
  if (!valid) return new Response(JSON.stringify({ error: 'Invalid input', details: errors }), { status: 400 });
  try {
    await connectDB();

    // Generate unique 6-digit numeric join code and formal Quiz ID
    let joinCode, quizId;
    let isUnique = false;
    while (!isUnique) {
      joinCode = Math.floor(100000 + Math.random() * 900000).toString();
      quizId = `QZ-${Math.floor(100000 + Math.random() * 900000)}`;
      const existing = await Quiz.findOne({ $or: [{ joinCode }, { quizId }] });
      if (!existing) isUnique = true;
    }

    const publicUrl = `quiz-${Math.floor(Math.random() * 10000000)}`;
    const toSave = { title, description, duration, questions, publicUrl, joinCode, quizId, createdBy: user._id };
    if (body.accessPassword) {
      const hashed = await bcrypt.hash(String(body.accessPassword), 10);
      toSave.accessPassword = hashed;
    }
    const quiz = await Quiz.create(toSave);
    return new Response(JSON.stringify(quiz), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
