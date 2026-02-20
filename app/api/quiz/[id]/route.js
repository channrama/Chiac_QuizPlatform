import { connectDB } from "@/lib/mongodb";
import Quiz from "@/models/Quiz";
import { verifyToken } from "@/lib/auth";

/* GET SINGLE QUIZ */
export async function GET(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return new Response(
        JSON.stringify({ error: "Quiz not found" }),
        { status: 404 }
      );
    }

    const authHeader = req.headers.get("authorization");
    let decoded = null;

    if (authHeader) {
      const token = authHeader.split(" ")[1];
      decoded = verifyToken(token);
    }

    // Private protection
    if (!quiz.isPublic && quiz.createdBy.toString() !== decoded?.id) {
      return new Response(
        JSON.stringify({ error: "Private quiz" }),
        { status: 403 }
      );
    }

    return new Response(JSON.stringify(quiz), {
      status: 200,
    });

  } catch (error) {
    console.error(error);
    return new Response(
      JSON.stringify({ error: "Fetch failed" }),
      { status: 500 }
    );
  }
}

/* EDIT QUIZ */
export async function PATCH(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
    }

    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return new Response(JSON.stringify({ error: "Quiz not found" }), { status: 404 });
    }

    if (quiz.createdBy.toString() !== decoded.id) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
    }

    const { title, questions, isPublic } = await req.json();

    if (title) quiz.title = title;
    if (questions) quiz.questions = questions;
    if (typeof isPublic === "boolean") quiz.isPublic = isPublic;

    await quiz.save();

    return new Response(JSON.stringify(quiz), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Update failed" }), { status: 500 });
  }
}

/* DELETE QUIZ */
export async function DELETE(req, context) {
  try {
    await connectDB();

    const { id } = await context.params;

    const authHeader = req.headers.get("authorization");
    if (!authHeader) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), { status: 401 });
    }

    const token = authHeader.split(" ")[1];
    const decoded = verifyToken(token);

    if (!decoded) {
      return new Response(JSON.stringify({ error: "Invalid token" }), { status: 401 });
    }

    const quiz = await Quiz.findById(id);

    if (!quiz) {
      return new Response(JSON.stringify({ error: "Quiz not found" }), { status: 404 });
    }

    if (quiz.createdBy.toString() !== decoded.id) {
      return new Response(JSON.stringify({ error: "Forbidden" }), { status: 403 });
    }

    await quiz.deleteOne();

    return new Response(JSON.stringify({ message: "Deleted" }), { status: 200 });

  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: "Delete failed" }), { status: 500 });
  }
}
