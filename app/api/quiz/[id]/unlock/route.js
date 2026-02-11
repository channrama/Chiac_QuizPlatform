import connectDB from '../../../../lib/db';
import Quiz from '../../../../models/Quiz';
import bcrypt from 'bcryptjs';

export async function POST(req, { params }) {
  const { id } = params;
  const body = await req.json();
  const { password } = body || {};
  try {
    await connectDB();
    const quiz = await Quiz.findById(id).lean();
    if (!quiz) return new Response(JSON.stringify({ error: 'Not found' }), { status: 404 });
    if (!quiz.accessPassword) {
      // not protected: return quiz
      const sanitized = { ...quiz, questions: quiz.questions.map(q => ({ question: q.question, options: q.options })) };
      return new Response(JSON.stringify(sanitized), { status: 200 });
    }
    if (!password) return new Response(JSON.stringify({ error: 'Password required' }), { status: 400 });
    const ok = await bcrypt.compare(String(password), quiz.accessPassword);
    if (!ok) return new Response(JSON.stringify({ error: 'Invalid password' }), { status: 401 });
    const sanitized = { ...quiz, questions: quiz.questions.map(q => ({ question: q.question, options: q.options })) };
    return new Response(JSON.stringify(sanitized), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
