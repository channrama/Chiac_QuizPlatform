import connectDB from '../../../../lib/db';
import Attempt from '../../../../models/Attempt';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';

export async function GET(req) {
    const user = await getUserFromRequest(req);
    if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    if (!requireRole(user, 'student')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

    try {
        await connectDB();

        // Aggregate stats for all students to determine rank
        const allStats = await Attempt.aggregate([
            {
                $group: {
                    _id: "$studentId",
                    totalScore: { $sum: "$score" },
                    totalAttempts: { $count: {} }
                }
            },
            { $sort: { totalScore: -1, totalAttempts: 1 } }
        ]);

        const myIndex = allStats.findIndex(s => s._id.toString() === user._id.toString());
        const myStats = myIndex !== -1 ? allStats[myIndex] : { totalScore: 0, totalAttempts: 0 };
        const rank = myIndex !== -1 ? myIndex + 1 : allStats.length + 1;

        return new Response(JSON.stringify({
            totalScore: myStats.totalScore,
            totalAttempts: myStats.totalAttempts,
            rank,
            totalStudents: allStats.length
        }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
