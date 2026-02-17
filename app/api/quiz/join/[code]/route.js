import connectDB from '../../../../../lib/db';
import Quiz from '../../../../../models/Quiz';

export async function GET(req, { params }) {
    const { code } = params;
    if (!code) return new Response(JSON.stringify({ error: 'Code required' }), { status: 400 });

    try {
        await connectDB();
        const quiz = await Quiz.findOne({ joinCode: code.toUpperCase() }).select('_id title joinCode');
        if (!quiz) return new Response(JSON.stringify({ error: 'Quiz not found' }), { status: 404 });

        return new Response(JSON.stringify({ id: quiz._id, joinCode: quiz.joinCode }), { status: 200 });
    } catch (err) {
        return new Response(JSON.stringify({ error: err.message }), { status: 500 });
    }
}
