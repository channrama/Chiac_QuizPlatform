import { connectDB } from "@/lib/mongodb";

export async function GET() {
  await connectDB();

  return new Response(
    JSON.stringify({ message: "Database connected successfully" }),
    { headers: { "Content-Type": "application/json" } }
  );
}
