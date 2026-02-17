import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";

export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();

    const { title, questions } = body;

  // Basic validation
  if (!title || typeof title !== "string") {
    return new Response(
      JSON.stringify({ error: "Valid title is required" }),
      { status: 400 }
    );
  }

  if (!Array.isArray(questions) || questions.length === 0) {
    return new Response(
      JSON.stringify({ error: "At least one question is required" }),
      { status: 400 }
    );
  }

  for (const question of questions) {
    if (!question.questionText || !Array.isArray(question.options)) {
      return new Response(
        JSON.stringify({ error: "Invalid question format" }),
        { status: 400 }
      );
    }

    if (question.options.length < 2) {
      return new Response(
        JSON.stringify({ error: "Each question must have at least 2 options" }),
        { status: 400 }
      );
    }

    const correctOptions = question.options.filter(opt => opt.isCorrect);

    if (correctOptions.length !== 1) {
      return new Response(
        JSON.stringify({ error: "Each question must have exactly one correct option" }),
        { status: 400 }
      );
    }
  }

    const quiz = await Quiz.create({ title, questions });

    return new Response(
      JSON.stringify({
        message: "Quiz created successfully",
        quizId: quiz._id,
      }),
      { status: 201 }
    );
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Internal server error" }),
      { status: 500 }
    );
  }
}
