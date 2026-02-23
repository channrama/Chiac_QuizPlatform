import connectDB from '../../../../lib/db';
import Attempt from '../../../../models/Attempt';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';



export async function GET(req) {
  const user = await getUserFromRequest(req);
  if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
  if (!requireRole(user, 'student')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
  try {
    await connectDB();
    // Must require Quiz model here to ensure schema is registered for populate
    require('../../../../models/Quiz');
    const attempts = await Attempt.find({ studentId: user._id })
      .populate('quizId', 'title _id')
      .sort({ attemptedAt: -1 })
      .lean();
    return new Response(JSON.stringify(attempts), { status: 200 });
  } catch (err) {
    console.error('[attempt/my] Error:', err);
    return new Response(JSON.stringify({ error: err.message }), { status: 500 });
  }
}
