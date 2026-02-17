import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import Attempt from "@/models/Attempt";

export async function POST(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;
    const body = await req.json();
    const { answers } = body;

    // Validate answers
    if (!Array.isArray(answers)) {
      return new Response(
        JSON.stringify({ error: "Answers must be an array" }),
        { status: 400 }
      );
    }

    // Fetch quiz
    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return new Response(
        JSON.stringify({ error: "Quiz not found" }),
        { status: 404 }
      );
    }

    if (answers.some(a =>
      typeof a.questionIndex !== "number" ||
      typeof a.selectedOptionIndex !== "number"
    )) {
      return new Response(
        JSON.stringify({ error: "Invalid answer format" }),
        { status: 400 }
      );
    }

    if (answers.length > quiz.questions.length) {
      return new Response(
        JSON.stringify({ error: "Too many answers submitted" }),
        { status: 400 }
      );
    }

    // Calculate score
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

    // Store attempt in database
    const attempt = await Attempt.create({
      quizId: id,
      score,
      totalQuestions,
    });

    // Return response
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
    return new Response(
      JSON.stringify({ error: "Failed to evaluate quiz" }),
      { status: 500 }
    );
  }
}
