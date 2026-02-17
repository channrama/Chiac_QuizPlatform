import connectDB from '../../../../lib/db';
import Quiz from '../../../../models/Quiz';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';
import crypto from 'crypto';

export async function GET(req) {
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'teacher')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  try {
    await connectDB();
    let quizzes = await Quiz.find({ createdBy: user._id });

    let repairPerformed = false;
    for (const q of quizzes) {
      let needsSave = false;

      // Ensure Formal Quiz ID (QZ-XXXXXX)
      if (!q.quizId || q.quizId === 'undefined') {
        q.quizId = `QZ-${Math.floor(100000 + Math.random() * 900000)}`;
        needsSave = true;
      }

      // Ensure 6-DIGIT Numeric Access Key (as requested)
      if (!q.joinCode || q.joinCode.length !== 6 || isNaN(q.joinCode) || q.joinCode === 'undefined') {
        q.joinCode = Math.floor(100000 + Math.random() * 900000).toString();
        needsSave = true;
      }

      if (needsSave) {
        await q.save();
        repairPerformed = true;
      }
    }

    // Return as plain objects to ensure all updated fields are visible
    const finalQuizzes = quizzes.map(q => q.toObject());
    return new Response(JSON.stringify(finalQuizzes), { status: 200 });
  } catch (err) {
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
