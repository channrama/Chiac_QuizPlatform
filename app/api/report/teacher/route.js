import connectDB from '../../../../lib/db';
import Quiz from '../../../../models/Quiz';
import Attempt from '../../../../models/Attempt';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';

export async function GET(req) {
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  try {
    await connectDB();
    const quizzes = await Quiz.find({ createdBy: user._id }).lean();
    const reports = [];
    for (const q of quizzes) {
      const attempts = await Attempt.find({ quizId: q._id }).populate('studentId', 'name email').lean();
      const students = attempts.map(a => ({
        studentId: a.studentId?._id,
        name: a.studentId?.name || a.studentId?.displayName || '',
        email: a.studentId?.email || '',
        score: a.score,
        totalQuestions: a.totalQuestions,
        attemptedAt: a.attemptedAt
      }));
      reports.push({
        id: q._id,
        quizId: q.quizId,
        joinCode: q.joinCode,
        title: q.title,
        totalQuestions: q.questions.length,
        students
      });
    }
    return new Response(JSON.stringify({ reports }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
