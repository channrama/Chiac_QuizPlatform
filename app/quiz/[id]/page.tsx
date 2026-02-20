"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";

export default function QuizAttemptPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [quiz, setQuiz] = useState<any>(null);
  const [leaderboard, setLeaderboard] = useState<any[]>([]);
  const [answers, setAnswers] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [result, setResult] = useState<any>(null);

  useEffect(() => {
    async function fetchQuiz() {
      try {
        const token = localStorage.getItem("token");

        const res = await fetch(`/api/quiz/${id}`, {
          headers: token
            ? { Authorization: `Bearer ${token}` }
            : {},
        });

        if (!res.ok) {
          setQuiz(null);
          return;
        }

        const quizData = await res.json();
        setQuiz(quizData);

        const lb = await fetch(`/api/quiz/${id}/leaderboard`);
        if (lb.ok) setLeaderboard(await lb.json());

      } catch (error) {
        console.error("Failed to fetch quiz");
      } finally {
        setLoading(false);
      }
    }

    if (id) fetchQuiz();
  }, [id]);

  function handleOptionSelect(questionIndex: number, optionIndex: number) {
    setAnswers((prev) => {
      const filtered = prev.filter(
        (a) => a.questionIndex !== questionIndex
      );

      return [
        ...filtered,
        { questionIndex, selectedOptionIndex: optionIndex },
      ];
    });
  }

  async function handleSubmit() {
    const token = localStorage.getItem("token");

    const res = await fetch(`/api/quiz/${id}/attempt`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ answers }),
    });

    const data = await res.json();
    setResult(data);
  }

  if (loading) {
    return (
      <div className="text-slate-400 text-center py-20">
        Loading quiz...
      </div>
    );
  }

  if (!quiz) {
    return (
      <div className="text-red-400 text-center py-20">
        Quiz not accessible.
      </div>
    );
  }

  // RESULT SCREEN
  if (result) {
    const percentage = Math.round(
      (result.score / result.totalQuestions) * 100
    );

    const passed = percentage >= 50;

    return (
      <div className="flex flex-col items-center justify-center py-20 space-y-8">

        <div className="rounded-3xl bg-white/5 border border-white/10 p-10 text-center space-y-6 w-full max-w-xl">

          <h1 className="text-2xl font-semibold">
            Quiz Completed
          </h1>

          <div className="text-5xl font-bold">
            {percentage}%
          </div>

          <p className="text-slate-400">
            {result.score} / {result.totalQuestions} correct
          </p>

          <div
            className={`inline-block px-4 py-2 rounded-xl text-sm ${
              passed
                ? "bg-emerald-500/20 text-emerald-400 border border-emerald-400/30"
                : "bg-red-500/20 text-red-400 border border-red-400/30"
            }`}
          >
            {passed ? "Passed" : "Failed"}
          </div>

          <div className="flex justify-center gap-4 pt-4">
            <button
              onClick={() => router.push(`/attempts/${result.attemptId}`)}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 font-medium hover:opacity-90 transition"
            >
              View Details
            </button>

            <button
              onClick={() => router.push("/")}
              className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/5 transition"
            >
              Back to Dashboard
            </button>
          </div>

        </div>
      </div>
    );
  }

  return (
    <div className="space-y-12">

      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          {quiz.title}
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Select the correct answer for each question.
        </p>
      </div>

      <div className="text-sm text-slate-400">
        Answered {answers.length} of {quiz.questions.length}
      </div>

      <div className="space-y-8">
        {quiz.questions.map((question: any, qIndex: number) => (
          <div
            key={qIndex}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4"
          >
            <h2 className="font-medium">
              {qIndex + 1}. {question.questionText}
            </h2>

            <div className="space-y-3">
              {question.options.map((option: any, oIndex: number) => {
                const isSelected = answers.some(
                  (a) =>
                    a.questionIndex === qIndex &&
                    a.selectedOptionIndex === oIndex
                );

                return (
                  <button
                    key={oIndex}
                    onClick={() =>
                      handleOptionSelect(qIndex, oIndex)
                    }
                    className={`w-full text-left px-4 py-3 rounded-xl border transition ${
                      isSelected
                        ? "border-indigo-400 bg-indigo-500/20"
                        : "border-white/10 bg-white/5 hover:bg-white/10"
                    }`}
                  >
                    {option.text}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="text-center">
        <button
          onClick={handleSubmit}
          disabled={answers.length !== quiz.questions.length}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 font-medium disabled:opacity-40 hover:opacity-90 transition"
        >
          Submit Quiz
        </button>
      </div>

      {/* Leaderboard */}
      <div className="pt-16">
        <h2 className="text-xl font-semibold mb-4">
          Leaderboard
        </h2>

        {leaderboard.length === 0 ? (
          <p className="text-slate-400">
            No attempts yet.
          </p>
        ) : (
          leaderboard.map((entry, index) => (
            <div key={entry._id}>
              {index + 1}. {entry.userId?.name} — {entry.score}
            </div>
          ))
        )}
      </div>

    </div>
  );
}
