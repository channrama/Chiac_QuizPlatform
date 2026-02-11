'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function QuizPage({ params }){
  const id = params.id;
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [error, setError] = useState(null);
  const [locked, setLocked] = useState(false);
  const [pass, setPass] = useState('');
  const [unlockError, setUnlockError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  useEffect(()=>{ fetchQuiz(); },[]);
  async function fetchQuiz(){
    const res = await fetch(`/api/quiz/${id}`);
    const data = await res.json();
    if (res.ok) { setQuiz(data); setAnswers(new Array(data.questions.length).fill(null)); if (data.duration) setTimeLeft(data.duration*60); }
    else {
      if (res.status === 403 && data.error === 'locked') {
        setLocked(true);
        setUnlockError(null);
      } else setError(data.error || 'Failed to load quiz');
    }
  }
  useEffect(()=>{
    if (timeLeft==null) return;
    if (timeLeft<=0) return submit();
    const t = setInterval(()=> setTimeLeft(s=> s-1),1000);
    return ()=>clearInterval(t);
  },[timeLeft]);
  async function submit(){
    // ensure all questions answered
    if (answers.some(a=> a === null)) { setError('Please answer all questions before submitting'); return; }
    setLoading(true);
    const res = await fetch('/api/attempt', { method: 'POST', headers: {'Content-Type':'application/json','Authorization':'Bearer '+localStorage.getItem('token')}, body: JSON.stringify({ quizId: id, answers }) });
    const data = await res.json();
    setLoading(false);
    if (res.ok) router.push('/results'); else setError(data.error || 'Failed to submit attempt');
  }
  async function unlock(e){
    e && e.preventDefault();
    setUnlockError(null);
    const res = await fetch(`/api/quiz/${id}/unlock`, { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify({ password: pass }) });
    const data = await res.json();
    if (res.ok) { setQuiz(data); setAnswers(new Array(data.questions.length).fill(null)); if (data.duration) setTimeLeft(data.duration*60); setLocked(false); }
    else setUnlockError(data.error || 'Invalid password');
  }

  if (locked) return (
    <div className="max-w-md mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-3">This quiz is password protected</h2>
      {unlockError && <div className="mb-3 p-2 bg-red-50 border border-red-200 text-red-700">{unlockError}</div>}
      <form onSubmit={unlock}>
        <input type="password" className="block w-full mb-2 p-2 border rounded" placeholder="Enter quiz password" value={pass} onChange={e=>setPass(e.target.value)} />
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Unlock</button>
      </form>
    </div>
  );

  if (!quiz) return <div>Loading...</div>;
  return (
    <div>
      <h2 className="text-xl font-semibold">{quiz.title}</h2>
      {timeLeft!=null && <div className="text-sm text-red-600">Time left: {Math.max(0,Math.floor(timeLeft/60))}:{String(timeLeft%60).padStart(2,'0')}</div>}
      {error && <div className="mb-3 p-2 bg-red-50 border border-red-200 text-red-700">{error}</div>}
      <form onSubmit={(e)=>{e.preventDefault(); submit();}}>
        {quiz.questions.map((q, i)=> (
          <div key={i} className="p-2 border my-2 rounded">
            <div className="font-medium mb-2">{q.question}</div>
            {q.options.map((opt, j)=> (
              <label key={j} className="block mb-1"><input className="mr-2" type="radio" name={`q${i}`} checked={answers[i]===j} onChange={()=>{const a=[...answers]; a[i]=j; setAnswers(a);}} /> {opt}</label>
            ))}
          </div>
        ))}
        <button disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">{loading? 'Submitting...':'Submit'}</button>
      </form>
    </div>
  )
}
