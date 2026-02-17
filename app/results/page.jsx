'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { Trophy, Clock, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';

export default function Results() {
  const { user, loading } = useAuth();
  const [attempts, setAttempts] = useState([]);

  useEffect(() => {
    if (!loading && user) fetchMy();
  }, [user, loading]);

  async function fetchMy() {
    try {
      const res = await fetch('/api/attempt/my');
      const data = await res.json();
      if (res.ok) setAttempts(data);
    } catch (err) {
      console.error(err);
    }
  }

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
      <div className="text-xl font-medium text-gray-400">Loading your history...</div>
    </div>
  );

  if (!user) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-4xl mx-auto px-4"
    >
      <div className="flex items-center space-x-4 mb-10">
        <div className="p-3 bg-neon-blue/20 rounded-2xl border border-neon-blue/50 shadow-glow">
          <Trophy className="text-neon-blue w-8 h-8" />
        </div>
        <div>
          <h2 className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent">My Quiz History</h2>
          <p className="text-gray-400 mt-1">Review your performance across all assessments.</p>
        </div>
      </div>

      <div className="space-y-4">
        {attempts.length === 0 ? (
          <GlassCard className="text-center py-12">
            <p className="text-gray-400">You haven't attempted any quizzes yet. Start learning today!</p>
            <a href="/dashboard" className="inline-block mt-4 text-neon-blue hover:underline">Go to Dashboard</a>
          </GlassCard>
        ) : (
          attempts.map((a, i) => (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.05 }}
              key={a._id}
            >
              <GlassCard className="group hover:bg-white/10 border-l-4 border-l-transparent hover:border-l-neon-blue transition-all">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-neon-blue transition-colors">
                      {a.quizId?.title || 'Unknown Quiz'}
                    </h3>
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center space-x-1">
                        <Clock size={12} />
                        <span>{new Date(a.attemptedAt || a.createdAt).toLocaleDateString()}</span>
                      </span>
                      <span className="px-2 py-0.5 bg-white/5 border border-white/10 rounded-full">
                        {a.totalQuestions} Questions
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between md:justify-end md:space-x-8">
                    <div className="text-center md:text-right">
                      <div className="text-2xl font-bold text-white">
                        {a.score}<span className="text-sm text-gray-500 ml-1">%</span>
                      </div>
                      <p className="text-[10px] text-gray-500 uppercase tracking-tighter">Final Score</p>
                    </div>

                    <div className={`h-12 w-1 bg-white/10 hidden md:block`} />

                    <div className="flex items-center space-x-2 text-neon-blue font-bold group-hover:translate-x-1 transition-transform cursor-pointer">
                      <span>Review</span>
                      <ChevronRight size={18} />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))
        )}
      </div>
    </motion.div>
  )
}

