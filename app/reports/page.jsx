'use client';
import { useEffect, useState } from 'react';

export default function Reports(){
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);
  useEffect(()=>{ fetchReports(); },[]);
  async function fetchReports(){
    const res = await fetch('/api/report/teacher', { headers: { Authorization: 'Bearer '+localStorage.getItem('token') } });
    const data = await res.json();
    if (res.ok) setReports(data.reports || []);
    else setError(data.error || 'Failed to load reports');
  }
  return (
    <div>
      <h2 className="text-2xl font-semibold">Teacher Reports</h2>
      {error && <div className="mt-3 p-2 bg-red-50 border border-red-200 text-red-700">{error}</div>}
      <div className="mt-4 space-y-6">
        {reports.length===0 && <div className="text-gray-600">No quizzes or attempts found.</div>}
        {reports.map(r=> (
          <div key={r.quizId} className="p-4 border rounded bg-white">
            <div className="flex justify-between items-center">
              <div>
                <h3 className="font-semibold">{r.title}</h3>
                <div className="text-sm text-gray-600">Total Questions: {r.totalQuestions}</div>
              </div>
            </div>
            <table className="w-full mt-4 table-auto border-collapse">
              <thead><tr><th className="text-left">Student</th><th>Score</th><th>Date</th></tr></thead>
              <tbody>
                {r.students.map(s=> (
                  <tr key={s.studentId} className="border-t">
                    <td className="py-2">{s.name} <div className="text-xs text-gray-500">{s.email}</div></td>
                    <td className="text-center">{s.score}/{s.totalQuestions}</td>
                    <td className="text-center">{new Date(s.attemptedAt).toLocaleString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ))}
      </div>
    </div>
  );
}
