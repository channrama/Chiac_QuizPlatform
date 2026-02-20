"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Dashboard() {
  const router = useRouter();

  const [stats, setStats] = useState<any>(null);
  const [recentAttempts, setRecentAttempts] = useState<any[]>([]);
  const [myQuizzes, setMyQuizzes] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const token = localStorage.getItem("token");

      if (!token) {
        router.push("/login");
        return;
      }

      try {
        const headers = {
          Authorization: `Bearer ${token}`,
        };

        const [statsRes, quizzesRes, attemptsRes] = await Promise.all([
          fetch("/api/stats", { headers }),
          fetch("/api/quiz/mine", { headers }),
          fetch("/api/attempts", { headers }),
        ]);

        if (statsRes.ok) setStats(await statsRes.json());
        if (quizzesRes.ok) setMyQuizzes(await quizzesRes.json());
        if (attemptsRes.ok) {
          const attemptsData = await attemptsRes.json();
          if (Array.isArray(attemptsData))
            setRecentAttempts(attemptsData.slice(0, 5));
        }
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [router]);

  async function toggleVisibility(id: string, current: boolean) {
    const token = localStorage.getItem("token");

    await fetch(`/api/quiz/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ isPublic: !current }),
    });

    setMyQuizzes((prev) =>
      prev.map((q) =>
        q._id === id ? { ...q, isPublic: !current } : q
      )
    );
  }

  async function deleteQuiz(id: string) {
    const token = localStorage.getItem("token");

    await fetch(`/api/quiz/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    setMyQuizzes((prev) => prev.filter((q) => q._id !== id));
  }

  function copyLink(id: string) {
    navigator.clipboard.writeText(
      `${window.location.origin}/quiz/${id}`
    );
    alert("Link copied!");
  }

  if (loading) {
    return (
      <div className="text-slate-400 text-center py-20">
        Loading dashboard...
      </div>
    );
  }

  return (
    <div className="space-y-14">

      {/* Hero */}
      <div className="rounded-2xl bg-indigo-600/10 border border-indigo-600/20 p-8 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">
            Dashboard Overview
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Manage your quizzes and track performance.
          </p>
        </div>

        <Link
          href="/create-quiz"
          className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-sm"
        >
          + Create Quiz
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard
          label="My Quizzes"
          value={stats?.myStats?.totalQuizzes ?? 0}
        />

        <StatCard
          label="My Attempts"
          value={stats?.myStats?.totalAttempts ?? 0}
        />

        <StatCard
          label="Average %"
          value={stats?.myStats?.averagePercentage ?? 0}
          suffix="%"
        />

      </div>

      {/* My Quizzes */}
      <div className="rounded-2xl bg-[#0f172a] border border-white/10">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-sm text-slate-400 uppercase tracking-wide">
            My Quizzes
          </h2>
        </div>

        {myQuizzes.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            You haven’t created any quizzes yet.
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {myQuizzes.map((quiz) => (
              <div
                key={quiz._id}
                className="flex justify-between items-center px-6 py-4 hover:bg-white/5 transition"
              >
                <div>
                  <p className="font-medium">{quiz.title}</p>
                  <p className="text-xs text-slate-500">
                    {quiz.isPublic ? "Public" : "Private"}
                  </p>
                </div>

                <div className="flex gap-4 text-xs">
                  <Link
                    href={`/quiz/${quiz._id}`}
                    className="text-indigo-400"
                  >
                    Open
                  </Link>

                  <Link
                    href={`/quiz/${quiz._id}/edit`}
                    className="text-blue-400"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() =>
                      toggleVisibility(quiz._id, quiz.isPublic)
                    }
                    className="text-yellow-400"
                  >
                    Toggle
                  </button>

                  <button
                    onClick={() => copyLink(quiz._id)}
                    className="text-green-400"
                  >
                    Share
                  </button>

                  <button
                    onClick={() => deleteQuiz(quiz._id)}
                    className="text-red-400"
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Recent Attempts */}
      <div className="rounded-2xl bg-[#0f172a] border border-white/10">
        <div className="px-6 py-4 border-b border-white/10">
          <h2 className="text-sm text-slate-400 uppercase tracking-wide">
            Recent Attempts
          </h2>
        </div>

        {recentAttempts.length === 0 ? (
          <div className="p-8 text-center text-slate-500">
            No attempts yet.
          </div>
        ) : (
          <div className="divide-y divide-white/10">
            {recentAttempts.map((attempt) => {
              const percentage =
                attempt.totalQuestions > 0
                  ? Math.round(
                      (attempt.score /
                        attempt.totalQuestions) *
                        100
                    )
                  : 0;

              return (
                <div
                  key={attempt._id}
                  className="flex justify-between px-6 py-4"
                >
                  <div>
                    <p>{attempt.quizId?.title}</p>
                  </div>
                  <div>{percentage}%</div>
                </div>
              );
            })}
          </div>
        )}
      </div>

    </div>
  );
}

function StatCard({
  label,
  value,
  suffix = "",
}: {
  label: string;
  value: number;
  suffix?: string;
}) {
  return (
    <div className="rounded-2xl bg-[#0f172a] border border-white/10 p-6">
      <p className="text-slate-400 text-sm">{label}</p>
      <h3 className="text-3xl font-bold mt-2">
        {value}
        {suffix}
      </h3>
    </div>
  );
}
