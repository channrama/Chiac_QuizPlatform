"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { motion, Reorder } from "framer-motion";

export default function EditQuizPage() {
  const params = useParams();
  const router = useRouter();
  const id = params.id as string;

  const [title, setTitle] = useState("");
  const [questions, setQuestions] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchQuiz() {
      const token = localStorage.getItem("token");

      const res = await fetch(`/api/quiz/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (!res.ok) {
        router.push("/");
        return;
      }

      const data = await res.json();
      setTitle(data.title);
      setQuestions(data.questions);
      setLoading(false);
    }

    if (id) fetchQuiz();
  }, [id, router]);

  /* ------------------- QUESTION FUNCTIONS ------------------- */

  function addQuestion() {
    setQuestions([
      ...questions,
      {
        questionText: "New Question",
        options: [
          { text: "Option 1", isCorrect: true },
          { text: "Option 2", isCorrect: false },
        ],
      },
    ]);
  }

  function removeQuestion(index: number) {
    setQuestions(questions.filter((_, i) => i !== index));
  }

  function updateQuestionText(index: number, value: string) {
    const updated = [...questions];
    updated[index].questionText = value;
    setQuestions(updated);
  }

  /* ------------------- OPTION FUNCTIONS ------------------- */

  function addOption(qIndex: number) {
    const updated = [...questions];
    updated[qIndex].options.push({
      text: "New Option",
      isCorrect: false,
    });
    setQuestions(updated);
  }

  function removeOption(qIndex: number, oIndex: number) {
    const updated = [...questions];
    updated[qIndex].options = updated[qIndex].options.filter(
      (_: any, i: number) => i !== oIndex
    );
    setQuestions(updated);
  }

  function updateOptionText(qIndex: number, oIndex: number, value: string) {
    const updated = [...questions];
    updated[qIndex].options[oIndex].text = value;
    setQuestions(updated);
  }

  function setCorrectOption(qIndex: number, oIndex: number) {
    const updated = [...questions];
    updated[qIndex].options.forEach((opt: any, i: number) => {
      opt.isCorrect = i === oIndex;
    });
    setQuestions(updated);
  }

  /* ------------------- SAVE ------------------- */

  async function handleSave() {
    const token = localStorage.getItem("token");

    await fetch(`/api/quiz/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ title, questions }),
    });

    router.push("/");
  }

  if (loading)
    return (
      <div className="text-slate-400 text-center py-20">
        Loading quiz...
      </div>
    );

  return (
    <div className="space-y-12">

      {/* Header */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight">
          Edit Quiz
        </h1>
        <p className="text-slate-400 text-sm mt-1">
          Drag to reorder questions. Add, remove, modify.
        </p>
      </div>

      {/* Title */}
      <div className="rounded-2xl bg-white/5 border border-white/10 p-6">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-transparent outline-none text-xl font-medium"
          placeholder="Quiz Title"
        />
      </div>

      {/* Drag Reorder Questions */}
      <Reorder.Group
        axis="y"
        values={questions}
        onReorder={setQuestions}
        className="space-y-6"
      >
        {questions.map((question, qIndex) => (
          <Reorder.Item
            key={qIndex}
            value={question}
            className="rounded-2xl bg-white/5 border border-white/10 p-6 space-y-4"
          >
            <div className="flex justify-between items-center">
              <input
                value={question.questionText}
                onChange={(e) =>
                  updateQuestionText(qIndex, e.target.value)
                }
                className="flex-1 bg-transparent outline-none font-medium"
              />

              <button
                onClick={() => removeQuestion(qIndex)}
                className="text-red-400 text-sm"
              >
                Remove
              </button>
            </div>

            <div className="space-y-3">
              {question.options.map((option: any, oIndex: number) => (
                <motion.div
                  layout
                  key={oIndex}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl border transition ${
                    option.isCorrect
                      ? "border-emerald-400 bg-emerald-500/20"
                      : "border-white/10 bg-white/5"
                  }`}
                >
                  <input
                    value={option.text}
                    onChange={(e) =>
                      updateOptionText(
                        qIndex,
                        oIndex,
                        e.target.value
                      )
                    }
                    className="flex-1 bg-transparent outline-none"
                  />

                  <button
                    onClick={() =>
                      setCorrectOption(qIndex, oIndex)
                    }
                    className="text-xs px-3 py-1 rounded-lg bg-indigo-600"
                  >
                    Correct
                  </button>

                  <button
                    onClick={() =>
                      removeOption(qIndex, oIndex)
                    }
                    className="text-red-400 text-xs"
                  >
                    ✕
                  </button>
                </motion.div>
              ))}
            </div>

            <button
              onClick={() => addOption(qIndex)}
              className="text-indigo-400 text-sm"
            >
              + Add Option
            </button>
          </Reorder.Item>
        ))}
      </Reorder.Group>

      {/* Add Question */}
      <button
        onClick={addQuestion}
        className="text-indigo-400"
      >
        + Add Question
      </button>

      {/* Save */}
      <div className="text-center">
        <button
          onClick={handleSave}
          className="px-8 py-3 rounded-xl bg-gradient-to-r from-indigo-500 to-sky-500 font-medium hover:opacity-90 transition"
        >
          Save Changes
        </button>
      </div>

    </div>
  );
}
