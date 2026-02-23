'use client';
import { useEffect, useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BarChart3,
  User,
  Calendar,
  CheckSquare,
  TrendingUp,
  Users,
  Search,
  ArrowUpRight,
  Clock,
  ChevronDown,
  Award,
  BookOpen,
  AlertCircle
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

export default function Reports() {
  const { user, loading } = useAuth();
  const [reports, setReports] = useState([]);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    if (!loading && user) fetchReports();
  }, [user, loading]);

  async function fetchReports() {
    try {
      const res = await fetch('/api/report/teacher');
      const data = await res.json();
      if (res.ok) setReports(data.reports || []);
      else setError(data.error || 'Failed to load reports');
    } catch (err) {
      setError('Network connection issues detected.');
    }
  }

  if (loading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <div className="animate-spin h-10 w-10 border-b-2 border-neon-blue rounded-full" />
      <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Aggregating Data...</span>
    </div>
  );
  if (!user || user.role !== 'teacher') return null;

  const filteredReports = reports.filter(r =>
    r.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="max-w-6xl mx-auto pb-20">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
        <div className="space-y-1">
          <div className="flex items-center space-x-2 text-neon-blue text-xs font-black uppercase tracking-[0.3em]">
            <TrendingUp size={14} />
            <span>Real-Time Intelligence</span>
          </div>
          <h1 className="text-4xl font-black text-white tracking-tight">Insights <span className="text-neon-blue">Dashboard</span></h1>
        </div>

        <div className="relative w-full md:w-96">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
          <input
            className="w-full pl-12 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
            placeholder="Filter by Assessment Title..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {error && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8 p-4 bg-red-500/10 border border-red-500/30 text-red-400 rounded-2xl text-sm flex items-center space-x-3">
          <AlertCircle size={18} />
          <span>{error}</span>
        </motion.div>
      )}

      <div className="space-y-12">
        {filteredReports.length === 0 && (
          <GlassCard className="text-center py-20 border-dashed">
            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="text-gray-600" />
            </div>
            <p className="text-gray-500">No telemetry data found for your search.</p>
          </GlassCard>
        )}

        {filteredReports.map((r, idx) => (
          <motion.div
            key={r.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="space-y-6"
          >
            {/* Quiz Header Card */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 px-2">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-accent-gradient rounded-xl flex items-center justify-center text-white shadow-glow-sm">
                  <CheckSquare size={24} />
                </div>
                <div>
                  <div className="flex items-center space-x-3">
                    <h3 className="text-2xl font-black text-white">{r.title}</h3>
                    <div className="px-3 py-1 bg-accent-gradient/10 border border-neon-purple/30 rounded-lg flex items-center space-x-3">
                      <span className="text-[10px] font-black text-neon-purple uppercase tracking-widest">Access Key</span>
                      <span className="text-sm font-mono font-black text-white tracking-[0.2em]">{r.joinCode || 'N/A'}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-1">
                    <span className="flex items-center space-x-1 text-xs text-gray-500 font-bold uppercase tracking-wider">
                      <Users size={12} className="text-neon-blue" />
                      <span>{r.students.length} Submissions</span>
                    </span>
                    <span className="flex items-center space-x-1 text-xs text-gray-500 font-bold uppercase tracking-wider">
                      <Award size={12} className="text-neon-purple" />
                      <span>Avg {Math.round(r.students.reduce((acc, s) => acc + s.score, 0) / (r.students.length || 1))} / {r.totalQuestions} Hits</span>
                    </span>
                  </div>
                </div>
              </div>
              <button className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-xs font-bold text-gray-400 hover:text-white hover:bg-white/10 transition-all flex items-center space-x-2">
                <span>Export CSV</span>
                <ArrowUpRight size={14} />
              </button>
            </div>

            {/* Students Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {r.students.map((s, sIdx) => {
                const scorePercentage = Math.round((s.score / r.totalQuestions) * 100);
                const statusColor = scorePercentage >= 80 ? 'green' : scorePercentage >= 50 ? 'neon-blue' : 'red-400';

                return (
                  <motion.div
                    key={s.studentId}
                    whileHover={{ y: -5 }}
                    className="relative"
                  >
                    <GlassCard className={`p-6 border-t-4 transition-all ${scorePercentage >= 80 ? 'border-t-green-500' : scorePercentage >= 50 ? 'border-t-neon-blue' : 'border-t-red-500'}`}>
                      <div className="flex justify-between items-start mb-6">
                        <div className="flex items-center space-x-3">
                          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                            <User size={18} className="text-gray-400" />
                          </div>
                          <div className="max-w-[120px]">
                            <p className="text-sm font-black text-white truncate">{s.name}</p>
                            <p className="text-[10px] text-gray-500 truncate">{s.email}</p>
                          </div>
                        </div>
                        <div className="text-right">
                          <span className={`text-2xl font-black ${scorePercentage >= 80 ? 'text-green-400 shadow-glow-sm' : scorePercentage >= 50 ? 'text-neon-blue' : 'text-red-400'}`}>
                            {s.score}<span className="text-sm opacity-50 ml-1">/{r.totalQuestions}</span>
                          </span>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="space-y-2">
                          <div className="flex justify-between text-[10px] font-bold uppercase tracking-widest text-gray-500">
                            <span>Score Logic</span>
                            <span className="text-white">{s.score} / {r.totalQuestions} Hits</span>
                          </div>
                          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
                            <motion.div
                              initial={{ width: 0 }}
                              animate={{ width: `${scorePercentage}%` }}
                              className={`h-full ${scorePercentage >= 80 ? 'bg-green-500 shadow-glow-sm' : scorePercentage >= 50 ? 'bg-neon-blue' : 'bg-red-500'}`}
                            />
                          </div>
                        </div>

                        <div className="flex justify-between items-center pt-2 border-t border-white/5">
                          <div className="flex items-center space-x-1 text-[10px] text-gray-500 font-bold">
                            <Clock size={10} />
                            <span>{new Date(s.attemptedAt).toLocaleDateString()}</span>
                          </div>
                          <div className="px-2 py-0.5 bg-white/5 rounded text-[8px] font-mono text-gray-500 uppercase tracking-tighter">
                            {new Date(s.attemptedAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

