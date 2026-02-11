'use client';
import { useEffect, useState } from 'react';

export default function Results(){
  const [attempts, setAttempts] = useState([]);
  useEffect(()=>{ fetchMy(); },[]);
  async function fetchMy(){
    const res = await fetch('/api/attempt/my', { headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
    const data = await res.json();
    if (res.ok) setAttempts(data);
  }
  return (
    <div>
      <h2 className="text-2xl">My Attempts</h2>
      <table className="w-full mt-4 table-auto border-collapse">
        <thead><tr><th>Quiz</th><th>Score</th><th>Date</th></tr></thead>
        <tbody>
          {attempts.map(a=> (
            <tr key={a._id}><td>{a.quizId?.title}</td><td>{a.score}/{a.totalQuestions}</td><td>{new Date(a.attemptedAt).toLocaleString()}</td></tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
