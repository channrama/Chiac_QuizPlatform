'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Login() {
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  async function submit(e) {
    e.preventDefault();
    setError(null);
    if (!form.email || !form.password) { setError('Email and password are required'); return; }
    setLoading(true);
    const res = await fetch('/api/auth/login', { method: 'POST', headers: {'Content-Type':'application/json'}, body: JSON.stringify(form) });
    const data = await res.json();
    setLoading(false);
    if (res.ok) {
      localStorage.setItem('token', data.token);
      router.push('/dashboard');
    } else setError(data.error || 'Login failed');
  }
  return (
    <form onSubmit={submit} className="max-w-md mt-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold mb-4">Login</h2>
      {error && <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-700">{error}</div>}
      <input className="block w-full mb-2 p-2 border rounded" placeholder="Email" value={form.email} onChange={e=>setForm({...form,email:e.target.value})} />
      <input type="password" className="block w-full mb-2 p-2 border rounded" placeholder="Password" value={form.password} onChange={e=>setForm({...form,password:e.target.value})} />
      <button disabled={loading} className="px-4 py-2 bg-green-600 text-white rounded">{loading? 'Signing in...':'Login'}</button>
    </form>
  )
}
