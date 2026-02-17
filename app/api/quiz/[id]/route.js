import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";

export async function GET(req, context) {
  try {
    await connectDB();

    const { id } = await context.params; // 👈 FIX HERE

    const quiz = await Quiz.findById(id).lean();

    if (!quiz) {
      return new Response(
        JSON.stringify({ error: "Quiz not found" }),
        { status: 404 }
      );
    }

    // Remove isCorrect before sending to client
    quiz.questions.forEach(question => {
      question.options.forEach(option => {
        delete option.isCorrect;
      });
    });

    if (!quiz) {
      return new Response(
        JSON.stringify({ error: "Quiz not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(quiz), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Invalid quiz ID" }),
      { status: 400 }
    );
  }
}
