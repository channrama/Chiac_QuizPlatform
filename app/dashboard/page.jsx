'use client';
import { useEffect, useState } from 'react';

export default function Dashboard(){
  const [user, setUser] = useState(null);
  const [quizzes, setQuizzes] = useState([]);
  useEffect(()=>{
    const t = localStorage.getItem('token');
    if (!t) return;
    // naive: decode role from token payload
    try{
      const payload = JSON.parse(atob(t.split('.')[1]));
      setUser(payload);
      if (payload.role === 'teacher') fetchMy(); else fetchAll();
    }catch(e){}
  },[]);
  async function fetchMy(){
    const res = await fetch('/api/quiz/my', { headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
    const data = await res.json();
    if (res.ok) setQuizzes(data);
  }
  async function fetchAll(){
    const res = await fetch('/api/quiz');
    const data = await res.json();
    if (res.ok) setQuizzes(data);
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold">Dashboard</h2>
      <p className="mt-2">Role: {user?.role}</p>
      <div className="mt-4">
        <h3 className="font-semibold">Quizzes</h3>
        <div className="mt-2 flex items-center justify-between">
          <div />
          {user?.role === 'teacher' && <a href="/reports" className="text-sm text-blue-600">View Reports</a>}
        </div>
        <ul className="mt-2">
          {quizzes.map(q=> (
            <li key={q._id} className="p-2 border mb-2 flex justify-between items-center">
              <div>
                <a href={`/quiz/${q._id}`} className="font-medium">{q.title}</a>
                <div className="text-sm text-gray-600">{q.description}</div>
              </div>
              {user?.role === 'teacher' && String(user.id) === String(q.createdBy) && (
                <div>
                  <button onClick={async ()=>{
                    if (!confirm('Delete this quiz? This action is irreversible.')) return;
                    const res = await fetch(`/api/quiz/${q._id}`, { method: 'DELETE', headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
                    if (res.ok) setQuizzes(prev => prev.filter(x=> x._id !== q._id));
                    else {
                      const data = await res.json();
                      alert(data.error || 'Failed to delete');
                    }
                  }} className="px-3 py-1 bg-red-600 text-white rounded">Delete</button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
