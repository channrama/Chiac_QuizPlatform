import { connectDB } from "@/lib/mongodb";
import Attempt from "@/models/Attempt";
import Quiz from "@/models/Quiz"; 

export async function GET() {
  try {
    await connectDB();

    const attempts = await Attempt.find().populate("quizId", "title").sort({ createdAt: -1 });

    return new Response(JSON.stringify(attempts), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch attempts" }),
      { status: 500 }
    );
  }
}
