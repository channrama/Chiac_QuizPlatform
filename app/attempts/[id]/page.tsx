"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AttemptDetailsPage() {
  const params = useParams();
  const router = useRouter();
  const id = params?.id as string;

  const [attempt, setAttempt] = useState<any>(null);
  const [quizStats, setQuizStats] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    async function fetchData() {
      try {
        const token = localStorage.getItem("token");

        if (!token) {
          router.push("/login");
          return;
        }

        /* ---------------- FETCH ATTEMPT ---------------- */
        const attemptRes = await fetch(`/api/attempts/${id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (!attemptRes.ok) {
          router.push("/");
          return;
        }

        const attemptData = await attemptRes.json();
        setAttempt(attemptData);

        /* ---------------- FETCH QUIZ-SPECIFIC STATS ---------------- */
        const quizId = attemptData.quizId?._id;

        if (quizId) {
          const quizStatsRes = await fetch(
            `/api/quiz/${quizId}/stats`
          );

          if (quizStatsRes.ok) {
            const statsData = await quizStatsRes.json();
            setQuizStats(statsData);
          }
        }

      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [id, router]);

  if (loading) {
    return (
      <div className="text-slate-400 text-center py-20">
        Loading attempt details...
      </div>
    );
  }

  if (!attempt) {
    return (
      <div className="text-red-400 text-center py-20">
        Attempt not found.
      </div>
    );
  }

  const percentage =
    attempt.totalQuestions > 0
      ? Math.round(
          (attempt.score / attempt.totalQuestions) * 100
        )
      : 0;

  const passed = percentage >= 50;

  return (
    <div className="space-y-12">

      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">
            Attempt Result
          </h1>
          <p className="text-slate-400 text-sm mt-1">
            Quiz: {attempt.quizId?.title}
          </p>
        </div>

        <div
          className={`px-4 py-2 rounded-xl text-sm font-medium ${
            passed
              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-400/30"
              : "bg-red-500/20 text-red-400 border border-red-400/30"
          }`}
        >
          {passed ? "Passed" : "Failed"}
        </div>
      </div>

      {/* Score Section */}
      <div className="rounded-2xl bg-[#0f172a] border border-white/10 p-10 flex flex-col items-center justify-center">
        <p className="text-slate-400 text-sm mb-6">
          Final Score
        </p>

        <ScoreCircle percentage={percentage} />

        <div className="mt-6 text-center">
          <p className="text-xl font-semibold">
            {attempt.score} / {attempt.totalQuestions}
          </p>
          <p className="text-slate-400 text-sm mt-1">
            Correct Answers
          </p>
        </div>
      </div>

      {/* Quiz-Specific Insights */}
      {quizStats && (
        <div className="grid md:grid-cols-3 gap-6">

          <InsightCard
            label="Quiz Average"
            value={`${quizStats.averagePercentage}%`}
          />

          <InsightCard
            label="Highest Score"
            value={`${quizStats.highestScore}`}
          />

          <InsightCard
            label="Performance Level"
            value={
              percentage >= 85
                ? "Excellent"
                : percentage >= 60
                ? "Good"
                : "Needs Improvement"
            }
            highlight
          />

        </div>
      )}

      {/* Questions Breakdown */}
      <div className="space-y-6">
        {attempt.quizId?.questions?.map(
          (q: any, index: number) => {
            const userAnswer = attempt.answers?.find(
              (a: any) => a.questionIndex === index
            );

            const correctIndex = q.options.findIndex(
              (opt: any) => opt.isCorrect
            );

            const isCorrect =
              userAnswer?.selectedOptionIndex === correctIndex;

            return (
              <div
                key={index}
                className="rounded-2xl bg-white/5 border border-white/10 p-6"
              >
                <p className="font-medium mb-4">
                  {index + 1}. {q.questionText}
                </p>

                <div className="space-y-2">
                  {q.options.map(
                    (opt: any, optIndex: number) => {
                      const isUserChoice =
                        userAnswer?.selectedOptionIndex === optIndex;
                      const isRight = opt.isCorrect;

                      return (
                        <div
                          key={optIndex}
                          className={`px-4 py-2 rounded-xl text-sm ${
                            isRight
                              ? "bg-emerald-500/20 border border-emerald-400/30"
                              : isUserChoice
                              ? "bg-red-500/20 border border-red-400/30"
                              : "bg-white/5"
                          }`}
                        >
                          {opt.text}
                        </div>
                      );
                    }
                  )}
                </div>

                <p
                  className={`mt-4 text-sm ${
                    isCorrect
                      ? "text-emerald-400"
                      : "text-red-400"
                  }`}
                >
                  {isCorrect
                    ? "Correct Answer"
                    : "Incorrect Answer"}
                </p>
              </div>
            );
          }
        )}
      </div>

    </div>
  );
}

/* ================= COMPONENTS ================= */

function ScoreCircle({ percentage }: { percentage: number }) {
  const radius = 70;
  const stroke = 10;
  const normalizedRadius = radius - stroke / 2;
  const circumference =
    normalizedRadius * 2 * Math.PI;

  const strokeDashoffset =
    circumference - (percentage / 100) * circumference;

  const color =
    percentage >= 50
      ? "stroke-emerald-400"
      : "stroke-red-400";

  return (
    <div className="relative w-[160px] h-[160px]">
      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#1e293b"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <motion.circle
          strokeWidth={stroke}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          fill="transparent"
          className={color}
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          animate={{ strokeDashoffset }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />
      </svg>

      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-3xl font-bold">
          {percentage}%
        </span>
      </div>
    </div>
  );
}

function InsightCard({
  label,
  value,
  highlight = false,
}: {
  label: string;
  value: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={`rounded-2xl p-6 border transition ${
        highlight
          ? "bg-indigo-600/10 border-indigo-600/30"
          : "bg-[#0f172a] border-white/10"
      }`}
    >
      <p className="text-slate-400 text-sm uppercase tracking-wide">
        {label}
      </p>
      <h3 className="text-xl font-semibold mt-3">
        {value}
      </h3>
    </div>
  );
}
