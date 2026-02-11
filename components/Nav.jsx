'use client';
import { useEffect, useState } from 'react';

export default function Nav() {
  const [role, setRole] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Read from localStorage on mount
    const t = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (t) {
      try {
        const payload = JSON.parse(atob(t.split('.')[1]));
        setRole(payload.role);
        setLoggedIn(true);
      } catch (e) {
        setLoggedIn(false);
      }
    }
    setMounted(true);
  }, []);

  function logout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setRole(null);
    if (typeof window !== 'undefined') window.location.href = '/';
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <nav className="flex justify-between items-center mb-6">
        <div className="text-xl font-bold">Online Quiz</div>
        <div className="space-x-4">
          <a className="text-blue-600" href="/">Home</a>
          <a className="text-blue-600" href="/dashboard">Dashboard</a>
          <a className="text-blue-600" href="/login">Login</a>
          <a className="text-blue-600" href="/register">Register</a>
        </div>
      </nav>
    );
  }

  return (
    <nav className="flex justify-between items-center mb-6">
      <div className="text-xl font-bold">Online Quiz</div>
      <div className="space-x-4">
        <a className="text-blue-600" href="/">Home</a>
        <a className="text-blue-600" href="/dashboard">Dashboard</a>
        {loggedIn && role === 'teacher' && <a className="text-blue-600" href="/create-quiz">Create Quiz</a>}
        {loggedIn && role === 'teacher' && <a className="text-blue-600" href="/generate-quiz">Generate from PDF</a>}
        {loggedIn && role === 'teacher' && <a className="text-blue-600" href="/reports">Reports</a>}
        {!loggedIn && <a className="text-blue-600" href="/login">Login</a>}
        {!loggedIn && <a className="text-blue-600" href="/register">Register</a>}
        {loggedIn && <button onClick={logout} className="text-red-600">Logout</button>}
      </div>
    </nav>
  );
}
