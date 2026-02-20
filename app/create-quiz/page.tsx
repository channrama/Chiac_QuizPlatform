"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

export default function CreateQuizPage() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) router.push("/login");
  }, []);

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState([
    {
      questionText: "",
      options: [
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
        { text: "", isCorrect: false },
      ],
    },
  ]);

  function handleQuestionChange(index: number, value: string) {
    const updated = [...questions];
    updated[index].questionText = value;
    setQuestions(updated);
  }

  function handleOptionChange(
    qIndex: number,
    oIndex: number,
    value: string
  ) {
    const updated = [...questions];
    updated[qIndex].options[oIndex].text = value;
    setQuestions(updated);
  }

  function handleCorrectOption(qIndex: number, oIndex: number) {
    const updated = [...questions];

    updated[qIndex].options = updated[qIndex].options.map(
      (option, index) => ({
        ...option,
        isCorrect: index === oIndex,
      })
    );

    setQuestions(updated);
  }

  function addQuestion() {
    setQuestions([
      ...questions,
      {
        questionText: "",
        options: [
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
          { text: "", isCorrect: false },
        ],
      },
    ]);
  }

  function removeQuestion(index: number) {
    if (questions.length === 1) return;
    setQuestions(questions.filter((_, i) => i !== index));
  }

  async function handleSubmit() {
    const token = localStorage.getItem("token");

    const res = await fetch("/api/quiz/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, questions }),
    });

    if (!res.ok) {
      const error = await res.json();
      alert(error.error || "Failed to create quiz");
      return;
    }

    router.push("/");
  }

  return (
    <div className="space-y-12">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Create New Quiz
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Build structured multiple-choice quizzes.
        </p>
      </div>

      {/* Quiz Title */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <label className="block text-sm text-slate-400 mb-2">
          Quiz Title
        </label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter quiz title"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>

      {/* Questions */}
      <div className="space-y-8">
        {questions.map((question, qIndex) => (
          <div
            key={qIndex}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-6"
          >
            <div className="flex justify-between items-center">
              <h2 className="font-medium">
                Question {qIndex + 1}
              </h2>

              <button
                onClick={() => removeQuestion(qIndex)}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Remove
              </button>
            </div>

            {/* Question Text */}
            <input
              type="text"
              value={question.questionText}
              onChange={(e) =>
                handleQuestionChange(qIndex, e.target.value)
              }
              placeholder="Enter question"
              className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />

            {/* Options */}
            <div className="space-y-3">
              {question.options.map((option, oIndex) => (
                <div
                  key={oIndex}
                  className={`flex items-center gap-3 rounded-xl px-4 py-3 border transition ${
                    option.isCorrect
                      ? "border-emerald-400/50 bg-emerald-500/10"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <input
                    type="radio"
                    name={`correct-${qIndex}`}
                    checked={option.isCorrect}
                    onChange={() =>
                      handleCorrectOption(qIndex, oIndex)
                    }
                  />

                  <input
                    type="text"
                    value={option.text}
                    onChange={(e) =>
                      handleOptionChange(
                        qIndex,
                        oIndex,
                        e.target.value
                      )
                    }
                    placeholder={`Option ${oIndex + 1}`}
                    className="flex-1 bg-transparent outline-none"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Add Question */}
      <div className="text-center">
        <button
          onClick={addQuestion}
          className="px-6 py-3 rounded-xl border border-indigo-500/40 text-indigo-400 hover:bg-indigo-500/10 transition"
        >
          + Add Question
        </button>
      </div>

      {/* Submit */}
      <div className="text-center">
        <button
          onClick={handleSubmit}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 font-medium hover:opacity-90 transition"
        >
          Create Quiz
        </button>
      </div>

    </div>
  );
}
