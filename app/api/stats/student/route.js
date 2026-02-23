import mongoose from 'mongoose';
import connectDB from '../../../../lib/db';
import Attempt from '../../../../models/Attempt';
import { getUserFromRequest, requireRole } from '../../../../lib/middleware';

export async function GET(req) {
    const user = await getUserFromRequest(req);
    if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });
    if (!requireRole(user, 'student')) return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });

    const { searchParams } = new URL(req.url);
    const quizId = searchParams.get('quizId');

    try {
        await connectDB();

        // 0. Filter by quizId if provided
        const matchStage = quizId && mongoose.Types.ObjectId.isValid(quizId)
            ? { $match: { quizId: new mongoose.Types.ObjectId(quizId) } }
            : { $match: {} };

        // 1. Get all stats and join with User model for names
        const allStats = await Attempt.aggregate([
            matchStage,
            {
                $group: {
                    _id: "$studentId",
                    totalScore: { $sum: "$score" },
                    totalAttempts: { $count: {} }
                }
            },
            { $sort: { totalScore: -1, totalAttempts: 1 } },
            {
                $lookup: {
                    from: "users",
                    localField: "_id",
                    foreignField: "_id",
                    as: "studentInfo"
                }
            },
            { $unwind: "$studentInfo" },
            {
                $project: {
                    _id: 1,
                    totalScore: 1,
                    totalAttempts: 1,
                    name: "$studentInfo.name",
                    email: "$studentInfo.email"
                }
            }
        ]);

        const myIndex = allStats.findIndex(s => s._id.toString() === user._id.toString());
        const myStats = myIndex !== -1 ? allStats[myIndex] : { totalScore: 0, totalAttempts: 0 };
        const rank = myIndex !== -1 ? myIndex + 1 : allStats.length + 1;

        // 2. Get Top 5 for Leaderboard
        const leaderboard = allStats.slice(0, 5).map((s, idx) => ({
            rank: idx + 1,
            name: s.name,
            totalScore: s.totalScore,
            isMe: s._id.toString() === user._id.toString()
        }));

        return new Response(JSON.stringify({
            totalScore: myStats.totalScore,
            totalAttempts: myStats.totalAttempts,
            rank,
            totalStudents: allStats.length,
            leaderboard
        }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
