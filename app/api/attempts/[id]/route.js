import { connectDB } from "@/lib/mongodb";
import Attempt from "@/models/Attempt";

export async function GET(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const attempt = await Attempt.findById(id).populate("quizId");

    if (!attempt) {
      return new Response(
        JSON.stringify({ error: "Attempt not found" }),
        { status: 404 }
      );
    }

    return new Response(JSON.stringify(attempt), {
      status: 200,
    });
  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch attempt" }),
      { status: 500 }
    );
  }
}
