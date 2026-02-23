'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import {
  BookOpen,
  Users,
  TrendingUp,
  Clock,
  Trash2,
  PlusCircle,
  ChevronRight,
  History,
  Trophy,
  Activity,
  AlertCircle,
  Copy,
  Hash,
  CheckCircle2
} from 'lucide-react';

export default function Dashboard() {
  const { user, loading } = useAuth();
  const [quizzes, setQuizzes] = useState([]);
  const [joinCode, setJoinCode] = useState('');
  const [joinError, setJoinError] = useState('');
  const [joining, setJoining] = useState(false);
  const [attempts, setAttempts] = useState([]);
  const [studentStats, setStudentStats] = useState({ rank: 'N/A', totalScore: 0 });
  const [stats, setStats] = useState({ total: 0, secondary: 0, third: 0 });
  const [dataLoading, setDataLoading] = useState(true);
  const router = useRouter(); // Initialized useRouter

  useEffect(() => {
    if (!loading && user) {
      if (user.role === 'teacher') fetchTeacherData();
      else fetchStudentData();
    }
  }, [user, loading]);

  const fetchTeacherData = async () => {
    try {
      const res = await fetch('/api/quiz/my');
      const data = await res.json();
      if (res.ok) {
        setQuizzes(data);
        setStats({
          total: data.length,
          secondary: 0, // In real app, fetch total engagement from attempts
          third: data.filter(q => q.duration > 0).length
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setDataLoading(false);
    }
  };

  const fetchStudentData = async () => {
    try {
      setDataLoading(true);
      const attemptRes = await fetch('/api/attempt/my');
      const attemptData = await attemptRes.json();

      if (attemptRes.ok) setAttempts(attemptData);

      const statsRes = await fetch('/api/stats/student');
      const statsData = await statsRes.json();
      if (statsRes.ok) setStudentStats(statsData);

      setStats({
        total: statsData.rank || 'N/A',
        secondary: attemptData.length,
        third: statsData.totalScore || 0
      });
    } catch (err) {
      console.error(err);
    } finally {
      setDataLoading(false);
    }
  };

  const handleJoin = async (e) => {
    e && e.preventDefault();
    if (joinCode.length < 6) return setJoinError('Code must be 6 characters');
    setJoining(true);
    setJoinError('');
    try {
      const res = await fetch(`/api/quiz/join/${joinCode}`);
      const data = await res.json();
      if (res.ok) {
        router.push(`/quiz/${data.id}?key=${data.joinCode}`);
      } else {
        setJoinError(data.error || 'Invalid code');
      }
    } catch (err) {
      setJoinError('Something went wrong');
    } finally {
      setJoining(false);
    }
  };

  const deleteQuiz = async (id) => {
    if (!confirm('Are you sure? This cannot be undone.')) return;
    try {
      const res = await fetch(`/api/quiz/${id}`, { method: 'DELETE' });
      if (res.ok) setQuizzes(quizzes.filter(q => q._id !== id));
    } catch (err) {
      console.error(err);
    }
  };

  const [copiedId, setCopiedId] = useState(null);

  async function copyToClipboard(text, id) {
    try {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        await navigator.clipboard.writeText(text);
      } else {
        // Fallback for non-secure contexts or older browsers
        const textArea = document.createElement("textarea");
        textArea.value = text;
        textArea.style.position = "fixed";
        textArea.style.left = "-9999px";
        textArea.style.top = "0";
        document.body.appendChild(textArea);
        textArea.focus();
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    } catch (err) {
      console.error('Failed to copy!', err);
    }
  }

  if (loading || dataLoading) return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-6">
      <div className="relative">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-neon-blue"></div>
        <div className="absolute inset-0 animate-ping rounded-full h-16 w-16 border border-neon-blue/20"></div>
      </div>
      <div className="text-xl font-bold bg-accent-gradient bg-clip-text text-transparent animate-pulse text-center">
        Syncing Your Studio...
      </div>
    </div>
  );

  if (!user) return null;

  const isTeacher = user.role === 'teacher';

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-10 pb-20"
    >
      {/* Welcome Header */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-neon-blue/10 border border-neon-blue/20 text-neon-blue text-xs font-bold uppercase tracking-widest"
          >
            <Activity size={12} />
            <span>Dashboard Active</span>
          </motion.div>
          <h1 className="text-5xl font-black text-white tracking-tight">
            Hi, <span className="text-neon-blue">{user.name.split(' ')[0]}</span>
          </h1>
          <p className="text-gray-400 text-lg">Manage your {isTeacher ? 'assessments' : 'learning journeys'} with total control.</p>
        </div>
        {isTeacher && (
          <div className="flex items-center space-x-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/generate-quiz"
              className="flex items-center space-x-2 px-6 py-4 bg-white/5 border border-white/10 text-white rounded-2xl font-bold hover:bg-white/10 transition-all"
            >
              <PlusCircle size={20} className="text-neon-purple" />
              <span>AI Generate</span>
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              href="/create-quiz"
              className="flex items-center space-x-2 px-8 py-4 bg-accent-gradient text-white rounded-2xl font-bold shadow-glow-lg hover:shadow-glow-xl transition-all"
            >
              <PlusCircle size={20} />
              <span>Create Quiz</span>
            </motion.a>
          </div>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            label: isTeacher ? 'Total Quizzes' : 'Leaderboard Rank',
            val: isTeacher ? stats.total : `#${stats.total}`,
            icon: isTeacher ? <BookOpen size={24} /> : <Trophy size={24} />,
            color: 'blue',
            trend: isTeacher ? '+12% this month' : 'Global Ranking'
          },
          {
            label: isTeacher ? 'Active Students' : 'Quizzes Done',
            val: stats.secondary,
            icon: isTeacher ? <Users size={24} /> : <History size={24} />,
            color: 'purple',
            trend: isTeacher ? 'Trending Up' : 'Total Submissions'
          },
          {
            label: isTeacher ? 'Avg Performance' : 'Growth Level',
            val: isTeacher ? '84%' : `Level ${Math.floor((studentStats.totalScore || 0) / 10) + 1}`,
            icon: <Activity size={24} />,
            color: 'green',
            trend: isTeacher ? 'Stable' : `${studentStats.totalScore || 0} Total Hits`
          }
        ].map((s, i) => (
          <GlassCard key={i} className="relative overflow-hidden group">
            <div className={`absolute -right-4 -top-4 w-24 h-24 bg-neon-${s.color}/10 blur-3xl rounded-full group-hover:scale-150 transition-transform duration-700`} />
            <div className="flex items-center justify-between relative z-10">
              <div className="space-y-1">
                <p className="text-gray-500 text-xs font-bold uppercase tracking-widest">{s.label}</p>
                <p className="text-4xl font-black text-white">{s.val}</p>
                <p className={`text-[10px] font-medium pt-2 ${s.color === 'green' ? 'text-green-400' : 'text-neon-blue'}`}>{s.trend}</p>
              </div>
              <div className={`p-4 bg-neon-${s.color}/10 rounded-2xl text-neon-${s.color} border border-neon-${s.color}/20 shadow-glow-sm`}>
                {s.icon}
              </div>
            </div>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content Area */}
        <div className="lg:col-span-2 space-y-8">
          {isTeacher ? (
            <>
              <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold text-white flex items-center space-x-3">
                  <div className="w-2 h-8 bg-neon-blue rounded-full mr-1" />
                  <span>My Assessment Studio</span>
                </h2>
                <div className="text-xs text-gray-500 font-mono tracking-tighter">
                  Total of {quizzes.length} live units
                </div>
              </div>

              <div className="grid grid-cols-1 gap-4">
                {quizzes.length === 0 ? (
                  <GlassCard className="text-center py-20 border-dashed">
                    <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                      <BookOpen size={40} className="text-gray-600" />
                    </div>
                    <p className="text-xl font-bold text-white mb-2">No Quizzes Found</p>
                    <p className="text-gray-500 max-w-xs mx-auto mb-8">Ready to start? Design your first assessment or generate one with AI.</p>
                    <button onClick={() => router.push('/create-quiz')} className="px-8 py-3 bg-neon-blue text-white rounded-xl font-bold hover:shadow-glow transition-all">
                      Begin Creation
                    </button>
                  </GlassCard>
                ) : (
                  quizzes.map((quiz, i) => (
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      key={quiz._id}
                    >
                      <GlassCard className="group hover:bg-white/10 transition-all border-l-4 border-l-transparent hover:border-l-neon-blue p-6 md:p-8">
                        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                          <div className="flex-1 space-y-3">
                            <div className="flex flex-wrap items-center gap-4">
                              <h3 className="text-2xl font-black text-white group-hover:text-neon-blue transition-colors">{quiz.title}</h3>
                              <div className="flex items-center space-x-3">
                                <div
                                  onClick={() => copyToClipboard(quiz.joinCode, quiz._id)}
                                  className={`px-5 py-3 border-2 rounded-2xl flex items-center space-x-4 shadow-glow-sm group/key cursor-pointer transition-all active:scale-95 ${copiedId === quiz._id ? 'bg-green-500/10 border-green-500/50' : 'bg-neon-purple/10 border-neon-purple/50 hover:bg-neon-purple/20'}`}
                                  title="Click to Copy Access Code"
                                >
                                  <div className="flex flex-col">
                                    <span className={`text-[10px] font-black uppercase tracking-[0.3em] mb-1 transition-colors ${copiedId === quiz._id ? 'text-green-400' : 'text-neon-purple'}`}>
                                      {copiedId === quiz._id ? 'Copied to Clipboard!' : '6-Digit Access Key'}
                                    </span>
                                    <span className="text-2xl font-mono font-black text-white tracking-[0.25em] leading-none">{quiz.joinCode || 'GEN-FAIL'}</span>
                                  </div>
                                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all ${copiedId === quiz._id ? 'bg-green-500 text-white' : 'bg-neon-purple/20 text-neon-purple group-hover:bg-neon-purple group-hover:text-white'}`}>
                                    {copiedId === quiz._id ? <CheckCircle2 size={20} /> : <Copy size={20} />}
                                  </div>
                                </div>
                                <div className="hidden sm:flex flex-col px-3 py-1 bg-white/5 border border-white/10 rounded-xl">
                                  <span className="text-[8px] font-bold text-gray-600 uppercase">Internal ID</span>
                                  <span className="text-[10px] font-mono font-bold text-gray-500">{quiz.quizId || 'N/A'}</span>
                                </div>
                              </div>
                            </div>
                            <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">{quiz.description}</p>
                            <div className="flex items-center gap-6 pt-2">
                              <div className="flex items-center space-x-2 text-xs font-medium text-gray-500">
                                <Clock size={14} className="text-neon-blue" />
                                <span>{quiz.duration} Minutes</span>
                              </div>
                              <div className="flex items-center space-x-2 text-xs font-medium text-gray-500">
                                <Activity size={14} className="text-neon-purple" />
                                <span>{quiz.questions?.length || 0} Questions</span>
                              </div>
                              <div className="flex items-center space-x-2 text-xs font-medium text-gray-500">
                                <Users size={14} className="text-green-400" />
                                <span>{Math.floor(Math.random() * 50)} Attempts</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex items-center space-x-2 w-full md:w-auto">
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => router.push('/reports')}
                              className="flex-1 md:flex-none px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all"
                            >
                              <TrendingUp size={16} className="text-neon-purple" />
                              <span>Insights</span>
                            </motion.button>
                            <motion.button
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}
                              onClick={() => deleteQuiz(quiz._id)}
                              className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-xl transition-all"
                            >
                              <Trash2 size={20} />
                            </motion.button>
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))
                )}
              </div>
            </>
          ) : (
            <>
              <h2 className="text-3xl font-bold text-white flex items-center space-x-3 mb-6">
                <PlusCircle className="text-neon-blue" size={32} />
                <span>Join Global Learning</span>
              </h2>

              <GlassCard className="py-20 flex flex-col items-center justify-center space-y-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-neon-blue/5 blur-3xl -z-10" />
                <div className="text-center max-w-sm mx-auto space-y-6">
                  <div className="space-y-2">
                    <p className="text-2xl font-bold text-white">Enter Access Key</p>
                    <p className="text-gray-500 text-sm">Designated by your supervisor or teacher</p>
                  </div>
                  <form onSubmit={handleJoin} className="space-y-6">
                    <input
                      maxLength={6}
                      value={joinCode}
                      onChange={(e) => setJoinCode(e.target.value.toUpperCase())}
                      className="block w-full text-center text-5xl font-mono tracking-[0.4em] p-6 bg-white/5 border border-white/10 rounded-3xl text-white focus:outline-none focus:ring-4 focus:ring-neon-blue/20 focus:border-neon-blue transition-all"
                      placeholder="------"
                    />
                    {joinError && (
                      <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-sm font-medium flex items-center justify-center space-x-2">
                        <AlertCircle size={14} />
                        <span>{joinError}</span>
                      </motion.div>
                    )}
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      disabled={joining || joinCode.length < 6}
                      className="w-full py-5 bg-accent-gradient text-white rounded-2xl font-black text-xl shadow-glow transition-all disabled:opacity-50"
                    >
                      {joining ? (
                        <div className="flex items-center justify-center space-x-3">
                          <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full" />
                          <span>Verifying...</span>
                        </div>
                      ) : 'Secure Entry'}
                    </motion.button>
                  </form>
                </div>
              </GlassCard>
            </>
          )}
        </div>

        {/* Aside Stats/Activity Area */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold text-white flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              {isTeacher ? <><History className="text-neon-purple" /><span>Recent Events</span></> : <><Trophy className="text-neon-purple" /><span>My Rank</span></>}
            </div>
            {!isTeacher && studentStats.rank !== 'N/A' && (
              <span className="px-3 py-1 bg-neon-blue/20 border border-neon-blue/30 rounded-lg text-neon-blue text-xs font-black">
                RANK #{studentStats.rank}
              </span>
            )}
          </h2>

          <div className="space-y-4">
            {isTeacher ? (
              <GlassCard className="p-6 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-10 h-10 rounded-xl bg-neon-purple/20 flex items-center justify-center text-neon-purple">
                    <Users size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-white">New Submission</p>
                    <p className="text-[10px] text-gray-500 uppercase tracking-widest">Physics 101 • 2m ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4 p-4 bg-white/5 rounded-2xl border border-white/5">
                  <TrendingUp className="text-green-400" size={20} />
                  <p className="text-xs text-gray-400 leading-relaxed">Engagement is <span className="text-white font-bold">up 14%</span> compared to last week.</p>
                </div>
                <button onClick={() => router.push('/reports')} className="w-full py-4 rounded-xl border border-white/10 text-white text-xs font-bold hover:bg-white/5 transition-all">
                  Deep Analytics
                </button>
              </GlassCard>
            ) : (
              <div className="space-y-4">
                {attempts.length === 0 ? (
                  <GlassCard className="text-center py-12">
                    <p className="text-gray-500 italic">No achievements recorded yet.</p>
                  </GlassCard>
                ) : (
                  attempts.slice(0, 4).map((attempt, i) => (
                    <motion.div
                      key={attempt._id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                    >
                      <GlassCard className="p-5 flex justify-between items-center group cursor-pointer hover:border-white/20 transition-all">
                        <div className="space-y-1 overflow-hidden pr-4">
                          <p className="text-white font-bold text-sm truncate">{attempt.quizId?.title}</p>
                          <p className="text-gray-500 text-[10px] uppercase font-bold">{new Date(attempt.createdAt).toLocaleDateString()}</p>
                        </div>
                        <div className="text-right flex flex-col items-end">
                          <span className={`text-lg font-black ${attempt.score >= 80 ? 'text-green-400 shadow-glow-sm' : attempt.score >= 50 ? 'text-yellow-400' : 'text-red-400'}`}>
                            {attempt.score}%
                          </span>
                          <div className="w-8 h-1 bg-white/10 rounded-full mt-1 overflow-hidden">
                            <div className={`h-full ${attempt.score >= 80 ? 'bg-green-400' : 'bg-yellow-400'}`} style={{ width: `${attempt.score}%` }} />
                          </div>
                        </div>
                      </GlassCard>
                    </motion.div>
                  ))
                )}
                {attempts.length > 4 && (
                  <button onClick={() => router.push('/results')} className="w-full text-center text-xs font-bold text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em] py-4">
                    Expand Full History
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

