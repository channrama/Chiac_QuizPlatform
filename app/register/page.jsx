'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, ShieldCheck, AlertCircle, ChevronRight, GraduationCap, Presentation } from 'lucide-react';
import GlassCard from '../../components/GlassCard';

function validateEmail(email) {
  return /\S+@\S+\.\S+/.test(email);
}

export default function Register() {
  const [form, setForm] = useState({ name: '', email: '', password: '', role: 'student' });
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { login } = useAuth();

  const submit = async (e) => {
    e.preventDefault();
    const errs = [];
    if (!form.name || form.name.trim().length < 2) errs.push('Name must be at least 2 characters');
    if (!validateEmail(form.email)) errs.push('Enter a valid email address');
    if (!form.password || form.password.length < 6) errs.push('Password must be at least 6 characters');
    if (!['student', 'teacher'].includes(form.role)) errs.push('Please select a valid role');

    if (errs.length) {
      setErrors(errs);
      return;
    }

    setLoading(true);
    setErrors([]);
    try {
      const res = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      });
      const data = await res.json();
      if (res.ok) {
        login(data.user);
        router.push('/dashboard');
      } else {
        setErrors([data.error || 'Registration failed'].concat(data.details || []));
      }
    } catch (err) {
      setErrors(['Something went wrong. Please try again.']);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-[90vh] flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-lg"
      >
        <GlassCard className="p-8 md:p-10">
          <div className="text-center mb-10">
            <div className="w-16 h-16 bg-neon-purple/10 rounded-2xl flex items-center justify-center mx-auto mb-4 border border-neon-purple/20">
              <UserPlus className="text-neon-purple" size={32} />
            </div>
            <h1 className="text-3xl font-bold text-white">Create Account</h1>
            <p className="text-gray-400 mt-2 text-sm">Join the next generation of digital learning</p>
          </div>

          {errors.length > 0 && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="mb-8 p-4 bg-red-500/10 border border-red-500/30 rounded-xl space-y-1"
            >
              {errors.map((err, i) => (
                <div key={i} className="flex items-center space-x-2 text-red-300 text-sm">
                  <AlertCircle size={14} />
                  <span>{err}</span>
                </div>
              ))}
            </motion.div>
          )}

          <form onSubmit={submit} className="space-y-6">
            {/* Role Selection */}
            <div className="grid grid-cols-2 gap-4 mb-4">
              <button
                type="button"
                onClick={() => setForm({ ...form, role: 'student' })}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${form.role === 'student' ? 'bg-neon-blue/10 border-neon-blue text-white shadow-glow-sm' : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/20'}`}
              >
                <GraduationCap size={24} className={form.role === 'student' ? 'text-neon-blue' : ''} />
                <span className="text-xs font-bold mt-2 uppercase tracking-tighter">Student</span>
              </button>
              <button
                type="button"
                onClick={() => setForm({ ...form, role: 'teacher' })}
                className={`flex flex-col items-center justify-center p-4 rounded-2xl border-2 transition-all ${form.role === 'teacher' ? 'bg-neon-purple/10 border-neon-purple text-white shadow-glow-sm' : 'bg-white/5 border-white/5 text-gray-500 hover:border-white/20'}`}
              >
                <Presentation size={24} className={form.role === 'teacher' ? 'text-neon-purple' : ''} />
                <span className="text-xs font-bold mt-2 uppercase tracking-tighter">Teacher</span>
              </button>
            </div>

            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">Full Name</label>
                <div className="relative group">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-neon-blue transition-colors" size={20} />
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="John Doe"
                    value={form.name}
                    onChange={e => setForm({ ...form, name: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">Email Address</label>
                <div className="relative group">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-neon-blue transition-colors" size={20} />
                  <input
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="john@example.com"
                    value={form.email}
                    onChange={e => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-semibold uppercase tracking-wider text-gray-400 ml-1">Secure Password</label>
                <div className="relative group">
                  <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-neon-blue transition-colors" size={20} />
                  <input
                    type="password"
                    className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-gray-600 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                    placeholder="••••••••"
                    value={form.password}
                    onChange={e => setForm({ ...form, password: e.target.value })}
                  />
                </div>
              </div>
            </div>

            <button
              disabled={loading}
              className="w-full py-4 bg-accent-gradient text-white rounded-2xl font-bold text-lg shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center space-x-2 disabled:opacity-50 mt-4"
            >
              <span>{loading ? 'Creating Account...' : 'Get Started'}</span>
              {!loading && <ChevronRight size={20} />}
            </button>
          </form>

          <div className="mt-10 text-center">
            <p className="text-gray-400 text-sm">
              Already a member?{' '}
              <button
                onClick={() => router.push('/login')}
                className="text-white font-bold hover:text-neon-blue transition-colors underline decoration-neon-blue/20 underline-offset-4"
              >
                Sign in instead
              </button>
            </p>
          </div>
        </GlassCard>
      </motion.div>
    </div>
  );
}
