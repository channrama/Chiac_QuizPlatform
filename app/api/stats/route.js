import { connectDB } from "@/lib/mongodb";
import Attempt from "@/models/Attempt";
import Quiz from "@/models/Quiz";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  try {
    await connectDB();

    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
    }

    const userId = decoded.id;

    /* ================= MY STATS ================= */

    const myAttempts = await Attempt.find({ userId });
    const myQuizzes = await Quiz.find({ createdBy: userId });

    let myTotalScore = 0;
    let myTotalQuestions = 0;
    let myHighestScore = 0;

    myAttempts.forEach((a) => {
      myTotalScore += a.score;
      myTotalQuestions += a.totalQuestions;
      if (a.score > myHighestScore) {
        myHighestScore = a.score;
      }
    });

    const myAveragePercentage =
      myTotalQuestions > 0
        ? Math.round((myTotalScore / myTotalQuestions) * 100)
        : 0;

    /* ================= PLATFORM STATS ================= */

    const allAttempts = await Attempt.find();

    let totalScore = 0;
    let totalQuestions = 0;
    let highestScore = 0;

    allAttempts.forEach((a) => {
      totalScore += a.score;
      totalQuestions += a.totalQuestions;
      if (a.score > highestScore) {
        highestScore = a.score;
      }
    });

    const platformAverage =
      totalQuestions > 0
        ? Math.round((totalScore / totalQuestions) * 100)
        : 0;

    return new Response(
      JSON.stringify({
        myStats: {
          totalQuizzes: myQuizzes.length,
          totalAttempts: myAttempts.length,
          highestScore: myHighestScore,
          averagePercentage: myAveragePercentage,
        },
        platformStats: {
          totalAttempts: allAttempts.length,
          highestScore,
          averagePercentage: platformAverage,
        },
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Failed to fetch stats" }), { status: 500 });
  }
}
