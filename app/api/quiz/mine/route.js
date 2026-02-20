import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import { verifyToken } from "@/lib/auth";

export async function GET(req) {
  try {
    await connectDB();

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

    const quizzes = await Quiz.find({ createdBy: userId })
      .sort({ createdAt: -1 });

    return new Response(
      JSON.stringify(quizzes),
      { status: 200 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to fetch quizzes" }),
      { status: 500 }
    );
  }
}
