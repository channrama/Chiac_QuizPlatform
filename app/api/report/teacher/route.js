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
      const attempts = await Attempt.find({ quizId: q._id }).populate('studentId', 'name displayName email').lean();

      const students = attempts.map(a => ({
        studentId: a.studentId?._id,
        name: a.studentId?.name || a.studentId?.displayName || 'Unknown Student',
        email: a.studentId?.email || 'N/A',
        score: a.score || 0,
        totalQuestions: a.totalQuestions || q.questions.length,
        attemptedAt: a.attemptedAt || a.createdAt
      }));

      const totalHits = students.reduce((acc, s) => acc + s.score, 0);
      const avgScore = students.length > 0 ? (totalHits / students.length).toFixed(1) : 0;

      reports.push({
        id: q._id,
        quizId: q.quizId,
        joinCode: q.joinCode,
        title: q.title,
        totalQuestions: q.questions.length,
        avgScore,
        students
      });
    }
    return new Response(JSON.stringify({ reports }), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
