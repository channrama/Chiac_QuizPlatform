import { connectDB } from "@/lib/mongodb";
import Attempt from "@/models/Attempt";

export async function GET(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const attempts = await Attempt.find({ quizId: id });

    if (!attempts.length) {
      return new Response(
        JSON.stringify({
          averagePercentage: 0,
          highestScore: 0,
        }),
        { status: 200 }
      );
    }

    let totalScore = 0;
    let totalQuestions = 0;
    let highestScore = 0;

    attempts.forEach((a) => {
      totalScore += a.score;
      totalQuestions += a.totalQuestions;

      if (a.score > highestScore) {
        highestScore = a.score;
      }
    });

    const averagePercentage =
      totalQuestions > 0
        ? Math.round((totalScore / totalQuestions) * 100)
        : 0;

    return new Response(
      JSON.stringify({
        averagePercentage,
        highestScore,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch quiz stats" }),
      { status: 500 }
    );
  }
}
