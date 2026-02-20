"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function AttemptsPage() {
  const [attempts, setAttempts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchAttempts() {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch("/api/attempts", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setAttempts(data);
      } catch (error) {
        console.error("Failed to fetch attempts");
      } finally {
        setLoading(false);
      }
    }

    fetchAttempts();
  }, []);

  if (loading) {
    return (
      <div className="text-slate-400 text-center py-20">
        Loading attempts...
      </div>
    );
  }

  return (
    <div className="space-y-10">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Past Attempts
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Review all quiz attempts and performance history.
        </p>
      </div>

      {/* Attempts Table */}
      <div className="rounded-2xl bg-white/5 border border-white/10 overflow-hidden">

        <div className="grid grid-cols-5 px-6 py-4 border-b border-white/10 text-xs uppercase tracking-wide text-slate-400">
          <div>Quiz</div>
          <div>Score</div>
          <div>Percentage</div>
          <div>Date</div>
          <div></div>
        </div>

        {attempts.length === 0 ? (
          <div className="p-10 text-center text-slate-500">
            No attempts found.
          </div>
        ) : (
          attempts.map((attempt) => {
            const percentage = Math.round(
              (attempt.score / attempt.totalQuestions) * 100
            );

            return (
              <div
                key={attempt._id}
                className="grid grid-cols-5 items-center px-6 py-4 border-b border-white/10 hover:bg-white/5 transition"
              >
                <div className="font-medium">
                  {attempt.quizId?.title || "Deleted Quiz"}
                </div>

                <div>
                  {attempt.score} / {attempt.totalQuestions}
                </div>

                <div
                  className={`font-medium ${
                    percentage >= 50
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {percentage}%
                </div>

                <div className="text-sm text-slate-400">
                  {new Date(attempt.createdAt).toLocaleString()}
                </div>

                <div className="text-right">
                  <Link
                    href={`/attempts/${attempt._id}`}
                    className="text-indigo-400 hover:text-indigo-300 text-sm"
                  >
                    View →
                  </Link>
                </div>
              </div>
            );
          })
        )}
      </div>

    </div>
  );
}
