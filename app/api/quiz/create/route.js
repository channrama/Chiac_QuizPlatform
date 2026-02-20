import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import { verifyToken } from "@/lib/auth";

export async function POST(req) {
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

    const body = await req.json();
    const { title, questions } = body;

    if (!title || !questions?.length) {
      return new Response(
        JSON.stringify({ error: "Invalid quiz data" }),
        { status: 400 }
      );
    }

    const quiz = await Quiz.create({
      title,
      questions,
      createdBy: userId,
    });

    return new Response(
      JSON.stringify(quiz),
      { status: 201 }
    );

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Failed to create quiz" }),
      { status: 500 }
    );
  }
}
