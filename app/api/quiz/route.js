import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";

export async function GET() {
  try {
    await connectDB();

    const quizzes = await Quiz.find({}, "_id title");

    return new Response(JSON.stringify(quizzes), { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Failed to fetch quizzes" }),
      { status: 500 }
    );
  }
}
