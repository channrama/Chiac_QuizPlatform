"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function QuizzesPage() {
  const [quizzes, setQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuizzes() {
      const res = await fetch("/api/quiz");
      const data = await res.json();
      setQuizzes(data);
      setLoading(false);
    }

    fetchQuizzes();
  }, []);

  if (loading) {
    return (
      <div className="text-slate-400 text-center py-20">
        Loading quizzes...
      </div>
    );
  }

  return (
    <div className="space-y-10">

      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            All Quizzes
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage and attempt quizzes.
          </p>
        </div>

        <Link
          href="/create-quiz"
          className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 font-medium hover:opacity-90 transition"
        >
          + Create Quiz
        </Link>
      </div>

      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">

        {quizzes.length === 0 ? (
          <div className="p-10 text-center text-slate-500">
            No quizzes available.
          </div>
        ) : (
          quizzes.map((quiz) => (
            <div
              key={quiz._id}
              className="flex justify-between items-center px-6 py-4 border-b border-white/10 hover:bg-white/5 transition"
            >
              <div>
                <p className="font-medium">{quiz.title}</p>
                <p className="text-xs text-slate-500">
                  ID: {quiz._id}
                </p>
              </div>

              <Link
                href={`/quiz/${quiz._id}`}
                className="text-indigo-400 hover:text-indigo-300"
              >
                Attempt →
              </Link>
            </div>
          ))
        )}

      </div>
    </div>
  );
}
