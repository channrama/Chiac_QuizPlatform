'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function GenerateAIQuiz() {
  const [form, setForm] = useState({
    title: '',
    description: '',
    numberOfQuestions: 5,
    difficulty: 'medium',
    duration: 10,
    accessPassword: '',
  });
  const [pdf, setPdf] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdf(file);
      setErrors([]);
    } else {
      setPdf(null);
      setErrors(['Please select a valid PDF file']);
    }
  }

  async function submit(e) {
    e.preventDefault();
    const errs = [];
    if (!form.title || form.title.trim().length < 3) errs.push('Title must be at least 3 characters');
    if (!pdf) errs.push('PDF file is required');
    if (form.numberOfQuestions < 1 || form.numberOfQuestions > 50) errs.push('Questions must be 1-50');
    if (errs.length) { setErrors(errs); return; }

    setLoading(true);
    const formData = new FormData();
    formData.append('pdf', pdf);
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('numberOfQuestions', form.numberOfQuestions);
    formData.append('difficulty', form.difficulty);
    formData.append('duration', form.duration);
    formData.append('accessPassword', form.accessPassword);

    const res = await fetch('/api/quiz/generate-ai', {
      method: 'POST',
      headers: { Authorization: 'Bearer ' + localStorage.getItem('token') },
      body: formData,
    });
    const data = await res.json();
    setLoading(false);

    if (res.ok) {
      router.push('/dashboard');
    } else {
      setErrors([data.error || 'Failed to generate quiz']);
    }
  }

  return (
    <form onSubmit={submit} className="max-w-2xl mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Generate Quiz from PDF</h2>
      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700">
          <ul>{errors.map((e, i) => (<li key={i}>• {e}</li>))}</ul>
        </div>
      )}
      <div className="mb-4">
        <label className="block font-medium mb-2">Upload PDF</label>
        <input
          type="file"
          accept=".pdf"
          onChange={handleFileChange}
          className="block w-full p-2 border rounded"
        />
        {pdf && <div className="text-sm text-green-600 mt-1">✓ {pdf.name}</div>}
      </div>
      <input
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Quiz Title"
        value={form.title}
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <textarea
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Description (optional)"
        value={form.description}
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <div className="grid grid-cols-2 gap-2 mb-2">
        <select
          value={form.difficulty}
          onChange={(e) => setForm({ ...form, difficulty: e.target.value })}
          className="p-2 border rounded"
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
        <input
          type="number"
          className="p-2 border rounded"
          placeholder="Number of Questions (1-50)"
          value={form.numberOfQuestions}
          onChange={(e) => setForm({ ...form, numberOfQuestions: Number(e.target.value) })}
        />
      </div>
      <input
        type="number"
        className="block w-full mb-2 p-2 border rounded"
        placeholder="Duration (minutes)"
        value={form.duration}
        onChange={(e) => setForm({ ...form, duration: Number(e.target.value) })}
      />
      <input
        type="password"
        className="block w-full mb-4 p-2 border rounded"
        placeholder="Optional quiz password"
        value={form.accessPassword}
        onChange={(e) => setForm({ ...form, accessPassword: e.target.value })}
      />
      <button
        disabled={loading}
        className="px-4 py-2 bg-purple-600 text-white rounded"
      >
        {loading ? 'Generating...' : 'Generate Quiz'}
      </button>
    </form>
  );
}
