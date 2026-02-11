'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function validateQuiz(title, questions) {
  const errors = [];
  if (!title || title.trim().length < 3) errors.push('Title must be at least 3 characters');
  if (!Array.isArray(questions) || questions.length === 0) errors.push('At least one question is required');
  questions.forEach((q, idx) => {
    if (!q.question || q.question.trim().length === 0) errors.push(`Question ${idx+1}: text required`);
    if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Question ${idx+1}: must have 4 options`);
    else q.options.forEach((o,j)=> { if (!o || o.trim().length===0) errors.push(`Question ${idx+1}: option ${j+1} required`); });
    if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) errors.push(`Question ${idx+1}: correct answer index must be 0-3`);
  });
  return errors;
}

export default function CreateQuiz(){
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(10);
  const [accessPassword, setAccessPassword] = useState('');
  const [questions, setQuestions] = useState([{question:'',options:['','','',''],correctAnswer:0}]);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  function setQ(i, val){ const arr=[...questions]; arr[i]=val; setQuestions(arr); }
  function addQ(){ setQuestions([...questions, {question:'',options:['','','',''],correctAnswer:0}]); }
  async function submit(e){
    e.preventDefault();
    const errs = validateQuiz(title, questions);
    if (errs.length) { setErrors(errs); return; }
    setLoading(true);
    const body = { title, description, duration, questions, accessPassword: accessPassword || undefined };
    const res = await fetch('/api/quiz', { method: 'POST', headers: {'Content-Type':'application/json', Authorization: 'Bearer '+localStorage.getItem('token') }, body: JSON.stringify(body) });
    const data = await res.json();
    setLoading(false);
    if (res.ok) router.push('/dashboard'); else setErrors([data.error || 'Failed to create quiz'].concat(data.details || []));
  }
  return (
    <form onSubmit={submit} className="max-w-2xl mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Create Quiz</h2>
      {errors.length>0 && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700"><ul>{errors.map((e,i)=>(<li key={i}>• {e}</li>))}</ul></div>}
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Title" value={title} onChange={e=>setTitle(e.target.value)} />
      <textarea className="block w-full mb-2 p-2 border rounded" placeholder="Description" value={description} onChange={e=>setDescription(e.target.value)} />
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Optional quiz password (students must enter this)" value={accessPassword} onChange={e=>setAccessPassword(e.target.value)} />
      <input type="number" className="block w-32 mb-4 p-2 border rounded" value={duration} onChange={e=>setDuration(Number(e.target.value))} />
      {questions.map((q, i)=> (
        <div className="p-3 border mb-2 rounded" key={i}>
          <input className="block w-full mb-2 p-2 border rounded" placeholder={`Question ${i+1}`} value={q.question} onChange={e=>setQ(i,{...q,question:e.target.value})} />
          {q.options.map((opt, j)=> (
            <input key={j} className="block w-full mb-1 p-2 border rounded" placeholder={`Option ${j+1}`} value={opt} onChange={e=>{const opts=[...q.options]; opts[j]=e.target.value; setQ(i,{...q,options:opts})}} />
          ))}
          <label className="block mt-2">Correct answer index (0-3)</label>
          <input type="number" className="block w-24 p-2 border rounded" value={q.correctAnswer} onChange={e=>setQ(i,{...q,correctAnswer: Number(e.target.value)})} />
        </div>
      ))}
      <div className="mt-3">
        <button type="button" onClick={addQ} className="px-3 py-1 bg-gray-200 mr-2 rounded">Add Question</button>
        <button disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">{loading? 'Creating...':'Create Quiz'}</button>
      </div>
    </form>
  )
}
