'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { BookOpen, Users, TrendingUp, Clock, Trash2 } from 'lucide-react';

export default function TeacherDashboard() {
  const [quizzes, setQuizzes] = useState([]);
  const [stats, setStats] = useState({ total: 0, students: 0, avgScore: 0, active: 0 });
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
      return;
    }

    try {
      const payload = JSON.parse(atob(token.split('.')[1]));
      if (payload.role !== 'teacher') {
        router.push('/dashboard');
        return;
      }
      setRole(payload.role);
    } catch (e) {
      router.push('/login');
    }

    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch('/api/quiz/my');
      const data = await res.json();

      if (data.success) {
        setQuizzes(data.quizzes || []);
        setStats({
          total: data.quizzes?.length || 0,
          students: 0,
          avgScore: 0,
          active: data.quizzes?.filter(q => !q.archived)?.length || 0,
        });
      }
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const deleteQuiz = async (id) => {
    if (!confirm('Are you sure? This cannot be undone.')) return;

    try {
      const res = await fetch(`/api/quiz/${id}`, { method: 'DELETE' });
      if (res.ok) {
        setQuizzes(quizzes.filter(q => q._id !== id));
        setStats({ ...stats, total: stats.total - 1 });
      }
    } catch (err) {
      console.error(err);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">
          Teacher Dashboard
        </h1>
        <p className="text-gray-400">Manage your quizzes and track student progress</p>
      </motion.div>

      {/* Stats Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="show"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        <motion.div variants={itemVariants}>
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Total Quizzes</p>
                <p className="text-3xl font-bold mt-2">{stats.total}</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-blue-500/20 rounded-lg"
              >
                <BookOpen className="text-neon-blue" size={24} />
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Active Quizzes</p>
                <p className="text-3xl font-bold mt-2">{stats.active}</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-purple-500/20 rounded-lg"
              >
                <TrendingUp className="text-neon-purple" size={24} />
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Students Attempted</p>
                <p className="text-3xl font-bold mt-2">0</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-indigo-500/20 rounded-lg"
              >
                <Users className="text-neon-indigo" size={24} />
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>

        <motion.div variants={itemVariants}>
          <GlassCard>
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">Avg Score</p>
                <p className="text-3xl font-bold mt-2">0%</p>
              </div>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="p-3 bg-green-500/20 rounded-lg"
              >
                <Clock className="text-green-400" size={24} />
              </motion.div>
            </div>
          </GlassCard>
        </motion.div>
      </motion.div>

      {/* Recent Quizzes */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <h2 className="text-2xl font-bold mb-6">Recent Quizzes</h2>
        {loading ? (
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
          </div>
        ) : quizzes.length === 0 ? (
          <GlassCard>
            <p className="text-center text-gray-400 py-8">No quizzes yet. Create one to get started!</p>
          </GlassCard>
        ) : (
          <div className="overflow-x-auto">
            <GlassCard className="overflow-hidden p-0">
              <table className="w-full">
                <thead className="border-b border-white/10 bg-gradient-to-r from-indigo-500/10 to-purple-500/10">
                  <tr>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Quiz Name</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Questions</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Duration</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Created</th>
                    <th className="px-6 py-4 text-left text-sm font-semibold">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {quizzes.map((quiz, idx) => (
                    <motion.tr
                      key={quiz._id}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: idx * 0.05 }}
                      className="border-b border-white/5 hover:bg-white/5 transition-colors"
                    >
                      <td className="px-6 py-4">
                        <motion.a
                          whileHover={{ color: '#00d4ff' }}
                          href={`/quiz/${quiz._id}`}
                          className="font-medium text-white hover:text-neon-blue transition-colors"
                        >
                          {quiz.title}
                        </motion.a>
                      </td>
                      <td className="px-6 py-4 text-gray-400">{quiz.questions?.length || 0}</td>
                      <td className="px-6 py-4 text-gray-400">{quiz.duration} min</td>
                      <td className="px-6 py-4 text-gray-400 text-sm">
                        {new Date(quiz.createdAt).toLocaleDateString()}
                      </td>
                      <td className="px-6 py-4">
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => deleteQuiz(quiz._id)}
                          className="p-2 hover:bg-red-500/20 rounded transition-colors text-red-400"
                        >
                          <Trash2 size={18} />
                        </motion.button>
                      </td>
                    </motion.tr>
                  ))}
                </tbody>
              </table>
            </GlassCard>
          </div>
        )}
      </motion.div>
    </div>
  );
}
