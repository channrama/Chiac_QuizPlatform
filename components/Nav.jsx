'use client';
import { useAuth } from '../context/AuthContext';

export default function Nav() {
  const { user, loading, logout } = useAuth();

  if (loading) {
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

  const role = user?.role;
  const loggedIn = !!user;

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
