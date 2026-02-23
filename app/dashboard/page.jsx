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
  CheckCircle2,
  FileText,
  Sparkles,
  FolderOpen
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
                  <span>Command Center</span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {[
                  {
                    title: 'Create Manual',
                    desc: 'Design a bespoke assessment from scratch with custom parameters.',
                    icon: <FileText size={24} />,
                    href: '/create-quiz',
                    color: 'text-blue-400'
                  },
                  {
                    title: 'AI Generator',
                    desc: 'Instantly generate high-quality assessments from PDF or prompts.',
                    icon: <Sparkles size={24} />,
                    href: '/generate-quiz',
                    color: 'text-purple-400'
                  },
                  {
                    title: 'My Studio',
                    desc: 'Manage, edit, and distribute your existing quiz units.',
                    icon: <FolderOpen size={24} />,
                    href: '/my-quizzes',
                    color: 'text-emerald-400'
                  },
                  {
                    title: 'Global Insights',
                    desc: 'Deep analytics and automated performance tracking reports.',
                    icon: <TrendingUp size={24} />,
                    href: '/reports',
                    color: 'text-amber-400'
                  }
                ].map((action, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.02, y: -4 }}
                    whileTap={{ scale: 0.98 }}
                    onClick={() => router.push(action.href)}
                    className="cursor-pointer"
                  >
                    <GlassCard className="p-8 group hover:bg-white/10 transition-all border-l-4 border-l-transparent hover:border-l-neon-blue">
                      <div className="flex items-start space-x-6">
                        <div className={`p-4 bg-white/5 rounded-2xl ${action.color} border border-white/5 group-hover:scale-110 transition-transform`}>
                          {action.icon}
                        </div>
                        <div className="space-y-2">
                          <h3 className="text-xl font-bold text-white group-hover:text-neon-blue transition-colors">{action.title}</h3>
                          <p className="text-gray-500 text-sm leading-relaxed">{action.desc}</p>
                        </div>
                      </div>
                    </GlassCard>
                  </motion.div>
                ))}
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
          <div className="flex flex-col mb-6">
            <h2 className="text-2xl font-bold text-white flex items-center space-x-3">
              {isTeacher ? (
                <><History className="text-neon-purple" /><span>Recent Events</span></>
              ) : (
                <><Trophy className="text-neon-blue" /><span>Global Leaderboard</span></>
              )}
            </h2>
            {!isTeacher && (
              <div className="mt-2 text-[10px] text-gray-500 font-bold uppercase tracking-widest">
                Top Performers & Your Position
              </div>
            )}
          </div>

          <div className="space-y-4">
            {isTeacher ? (
              <GlassCard className="p-6 space-y-6">
                {/* ... teacher recent events ... */}
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
                {/* Leaderboard Section */}
                {studentStats.leaderboard && studentStats.leaderboard.length > 0 ? (
                  <div className="space-y-3">
                    {studentStats.leaderboard.map((student, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                      >
                        <div className={`p-4 rounded-2xl border transition-all flex items-center justify-between ${student.isMe ? 'bg-neon-blue/10 border-neon-blue/50 ring-1 ring-neon-blue/20' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                          <div className="flex items-center space-x-3">
                            <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-black text-sm ${student.rank === 1 ? 'bg-yellow-500 text-black shadow-[0_0_15px_rgba(234,179,8,0.5)]' :
                                student.rank === 2 ? 'bg-gray-300 text-black' :
                                  student.rank === 3 ? 'bg-amber-600 text-black' :
                                    'bg-white/10 text-white'
                              }`}>
                              {student.rank}
                            </div>
                            <div>
                              <p className={`text-sm font-bold ${student.isMe ? 'text-neon-blue' : 'text-white'}`}>
                                {student.name} {student.isMe && '(You)'}
                              </p>
                              <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">{student.totalScore} Total Pts</p>
                            </div>
                          </div>
                          {student.rank === 1 && <Trophy size={16} className="text-yellow-500 animate-pulse" />}
                        </div>
                      </motion.div>
                    ))}

                    {/* Your Current Rank Marker if not in Top 5 */}
                    {studentStats.rank > 5 && (
                      <div className="pt-4 mt-4 border-t border-white/5">
                        <div className="p-4 rounded-2xl bg-neon-purple/10 border border-neon-purple/50 flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-lg bg-neon-purple text-white flex items-center justify-center font-black text-sm shadow-glow-sm">
                              {studentStats.rank}
                            </div>
                            <div>
                              <p className="text-sm font-bold text-white">Your Position</p>
                              <p className="text-[10px] text-neon-purple font-bold uppercase tracking-widest">{studentStats.totalScore} Total Pts</p>
                            </div>
                          </div>
                          <Activity size={16} className="text-neon-purple" />
                        </div>
                      </div>
                    )}
                  </div>
                ) : (
                  <GlassCard className="text-center py-12">
                    <p className="text-gray-500 italic">Leaderboard is gathering data...</p>
                  </GlassCard>
                )}

                {/* Recent Activity Mini-Section */}
                <div className="pt-6 pb-2">
                  <h3 className="text-xs font-black text-gray-500 uppercase tracking-[0.2em] flex items-center space-x-2">
                    <History size={12} className="text-neon-blue" />
                    <span>Recent Achievements</span>
                  </h3>
                </div>

                <div className="space-y-3">
                  {attempts.length === 0 ? (
                    <p className="text-[10px] text-gray-600 italic pl-1">No recent activity found.</p>
                  ) : (
                    attempts.slice(0, 3).map((attempt, i) => {
                      const percentage = Math.round((attempt.score / (attempt.totalQuestions || 1)) * 100);
                      return (
                        <div key={attempt._id} className="p-4 bg-white/5 border border-white/10 rounded-2xl flex justify-between items-center group hover:border-white/20 transition-all">
                          <div className="space-y-1 overflow-hidden pr-4">
                            <p className="text-white font-bold text-xs truncate">{attempt.quizId?.title}</p>
                            <p className="text-[10px] text-gray-500 font-bold">{new Date(attempt.attemptedAt || attempt.createdAt).toLocaleDateString()}</p>
                          </div>
                          <span className={`text-sm font-black ${percentage >= 80 ? 'text-green-400' : 'text-yellow-400'}`}>
                            {percentage}%
                          </span>
                        </div>
                      );
                    })
                  )}
                </div>

                {attempts.length > 3 && (
                  <button onClick={() => router.push('/results')} className="w-full text-center text-[10px] font-black text-gray-500 hover:text-white transition-colors uppercase tracking-[0.2em] py-2">
                    View All History
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div >
  );
}

