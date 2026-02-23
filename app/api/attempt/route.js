import connectDB from '../../../lib/db';
import Attempt from '../../../models/Attempt';
import Quiz from '../../../models/Quiz';
import { getUserFromRequest, requireRole } from '../../../lib/middleware';

export async function POST(req) {
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'student')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  const body = await req.json();
  const { quizId, answers } = body || {};
  if (!quizId || !Array.isArray(answers)) return new Response(JSON.stringify({ error: 'Invalid input' }), { status: 400 });
  try {
    await connectDB();
    const quiz = await Quiz.findById(quizId).lean();
    if (!quiz) return new Response(JSON.stringify({ error: 'Quiz not found' }), { status: 404 });
    const total = quiz.questions.length;
    let score = 0;
    for (let i = 0; i < total; i++) {
      const correct = Number(quiz.questions[i].correctAnswer);
      const provided = Number(answers[i]);
      if (!Number.isNaN(provided) && provided === correct) score++;
    }
    const attempt = await Attempt.create({ studentId: user._id, quizId, score, totalQuestions: total, answers });
    // return populated attempt for convenience
    const saved = await Attempt.findById(attempt._id).populate('quizId', 'title').lean();
    return new Response(JSON.stringify({ attempt: saved, score, total, attemptId: attempt._id }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
