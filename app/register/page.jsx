'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function submit(e) {
    e.preventDefault();
    const errs = [];
    if (!form.name || form.name.trim().length < 2) errs.push('Name must be at least 2 characters');
    if (!validateEmail(form.email)) errs.push('Enter a valid email');
    if (!form.password || form.password.length < 6) errs.push('Password must be at least 6 characters');
    if (!['student','teacher'].includes(form.role)) errs.push('Select a valid role');
    if (errs.length) { setErrors(errs); return; }
    setLoading(true);
    const res = await fetch('/api/auth/register', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } else setErrors([data.error || 'Registration failed'].concat(data.details || []));
  }
  return (
    <form onSubmit={submit} className="max-w-md mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Register</h2>
      {errors.length > 0 && (
        <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700">
          <ul>
            {errors.map((e,i)=>(<li key={i}>• {e}</li>))}
          </ul>
        </div>
      )}
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Name" value={form.name} onChange={e=>setForm({...form,name:e.target.value})} />
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <input type="password" className="block w-full mb-2 p-2 border rounded" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
      <select value={form.role} onChange={e=>setForm({...form,role:e.target.value})} className="block w-full mb-4 p-2 border rounded">
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>
      <button disabled={loading} className="px-4 py-2 bg-blue-600 text-white rounded">{loading? 'Registering...':'Register'}</button>
    </form>
  )
}
