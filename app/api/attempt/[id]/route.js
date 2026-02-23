import connectDB from '../../../../lib/db';
import Attempt from '../../../../models/Attempt';
import Quiz from '../../../../models/Quiz';
import { getUserFromRequest } from '../../../../lib/middleware';

export async function GET(req, { params }) {
    const user = await getUserFromRequest(req);
    if (!user) return new Response(JSON.stringify({ error: 'Unauthorized' }), { status: 401 });

    const { id } = params;

    try {
        await connectDB();
        const attempt = await Attempt.findById(id).populate('quizId').lean();

        if (!attempt) {
            return new Response(JSON.stringify({ error: 'Attempt not found' }), { status: 404 });
        }

        // Security check: only the student who made the attempt or a teacher can view it
        if (user.role === 'student' && attempt.studentId.toString() !== user._id.toString()) {
            return new Response(JSON.stringify({ error: 'Forbidden' }), { status: 403 });
        }

        return new Response(JSON.stringify(attempt), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
