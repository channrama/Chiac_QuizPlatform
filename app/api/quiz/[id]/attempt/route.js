import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import Attempt from "@/models/Attempt";
import { verifyToken } from "@/lib/auth";

export async function POST(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const authHeader = req.headers.get("authorization");

    if (!authHeader) {
      return new Response(
        JSON.stringify({ error: "Unauthorized" }),
        { status: 401 }
      );
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return new Response(
        JSON.stringify({ error: "Invalid token" }),
        { status: 401 }
      );
    }

    const userId = decoded.id;

    const body = await req.json();
    const { answers } = body;

    if (!Array.isArray(answers)) {
      return new Response(
        JSON.stringify({ error: "Answers must be an array" }),
        { status: 400 }
      );
    }

    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return new Response(
        JSON.stringify({ error: "Quiz not found" }),
        { status: 404 }
      );
    }

    let score = 0;

    quiz.questions.forEach((question, qIndex) => {
      const userAnswer = answers.find(
        (a) => a.questionIndex === qIndex
      );

      if (!userAnswer) return;

      const selectedOption =
        question.options[userAnswer.selectedOptionIndex];

      if (selectedOption?.isCorrect) {
        score++;
      }
    });

    const totalQuestions = quiz.questions.length;
    const percentage = Math.round((score / totalQuestions) * 100);

    const attempt = await Attempt.create({
      quizId: id,
      userId,
      score,
      totalQuestions,
      answers,
    });

    return new Response(
      JSON.stringify({
        message: "Attempt recorded successfully",
        score,
        totalQuestions,
        percentage,
        attemptId: attempt._id,
      }),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to evaluate quiz" }),
      { status: 500 }
    );
  }
}
