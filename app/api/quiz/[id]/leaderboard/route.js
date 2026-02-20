import { connectDB } from "@/lib/mongodb";
import Attempt from "@/models/Attempt";
import User from "@/models/User";

export async function GET(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const attempts = await Attempt.find({ quizId: id })
      .populate("userId", "name")
      .sort({ score: -1, createdAt: 1 })
      .limit(10);

    return new Response(JSON.stringify(attempts), {
      status: 200,
    });

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed" }),
      { status: 500 }
    );
  }
}
