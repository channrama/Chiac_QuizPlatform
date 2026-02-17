import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import Attempt from "@/models/Attempt";

export async function GET() {
  try {
    await connectDB();

    const totalQuizzes = await Quiz.countDocuments();
    const totalAttempts = await Attempt.countDocuments();

    return new Response(
      JSON.stringify({
        totalQuizzes,
        totalAttempts,
      }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch stats" }),
      { status: 500 }
    );
  }
}
