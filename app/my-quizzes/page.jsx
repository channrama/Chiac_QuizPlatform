'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import {
    BookOpen,
    Trash2,
    PlusCircle,
    Clock,
    Activity,
    Users,
    Copy,
    CheckCircle2,
    TrendingUp,
    Search,
    ArrowLeft
} from 'lucide-react';

export default function MyQuizzes() {
    const { user, loading } = useAuth();
    const [quizzes, setQuizzes] = useState([]);
    const [dataLoading, setDataLoading] = useState(true);
    const [copiedId, setCopiedId] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const router = useRouter();

    useEffect(() => {
        if (!loading && user) {
            if (user.role === 'teacher') fetchQuizzes();
            else router.push('/dashboard');
        }
    }, [user, loading]);

    const fetchQuizzes = async () => {
        try {
            const res = await fetch('/api/quiz/my');
            const data = await res.json();
            if (res.ok) setQuizzes(data);
        } catch (err) {
            console.error(err);
        } finally {
            setDataLoading(false);
        }
    };

    const deleteQuiz = async (id) => {
        if (!confirm('Are you sure? This action is permanent.')) return;
        try {
            const res = await fetch(`/api/quiz/${id}`, { method: 'DELETE' });
            if (res.ok) setQuizzes(quizzes.filter(q => q._id !== id));
        } catch (err) {
            console.error(err);
        }
    };

    async function copyToClipboard(text, id) {
        try {
            await navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        } catch (err) {
            console.error('Failed to copy!', err);
        }
    }

    if (loading || dataLoading) return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <div className="animate-spin h-10 w-10 border-b-2 border-neon-blue rounded-full" />
            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Accessing Studio...</span>
        </div>
    );

    const filteredQuizzes = quizzes.filter(q =>
        q.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        q.joinCode?.includes(searchTerm)
    );

    return (
        <div className="max-w-7xl mx-auto pb-20 px-4">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div className="flex items-center space-x-4">
                    <button onClick={() => router.push('/dashboard')} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-gray-400 hover:text-white">
                        <ArrowLeft size={18} />
                    </button>
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight">My <span className="text-neon-blue">Quizzes</span></h1>
                        <p className="text-gray-500 text-sm font-medium">Manage and distribute your assessments</p>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row gap-4 w-full md:w-auto">
                    <div className="relative w-full md:w-80">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" size={18} />
                        <input
                            className="w-full pl-12 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                            placeholder="Search by title or code..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <button
                        onClick={() => router.push('/create-quiz')}
                        className="px-6 py-3 bg-accent-gradient text-white rounded-xl font-bold flex items-center justify-center space-x-2 shadow-glow hover:shadow-glow-lg transition-all"
                    >
                        <PlusCircle size={20} />
                        <span>New Quiz</span>
                    </button>
                </div>
            </div>

            {/* Quiz Grid */}
            <div className="grid grid-cols-1 gap-6">
                {filteredQuizzes.length === 0 ? (
                    <GlassCard className="text-center py-24 border-dashed">
                        <div className="w-20 h-20 bg-white/5 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BookOpen size={40} className="text-gray-600" />
                        </div>
                        <p className="text-xl font-bold text-white mb-2">No Quizzes Found</p>
                        <p className="text-gray-500 mb-8">Try adjusting your search or create a new assessment.</p>
                    </GlassCard>
                ) : (
                    filteredQuizzes.map((quiz, i) => (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.05 }}
                            key={quiz._id}
                        >
                            <GlassCard className="group hover:bg-white/10 transition-all border-l-4 border-l-transparent hover:border-l-neon-blue p-6 md:p-8">
                                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                                    <div className="flex-1 space-y-3">
                                        <div className="flex flex-wrap items-center gap-4">
                                            <h3 className="text-2xl font-black text-white group-hover:text-neon-blue transition-colors">{quiz.title}</h3>
                                            <div
                                                onClick={() => copyToClipboard(quiz.joinCode, quiz._id)}
                                                className={`px-4 py-2 border rounded-xl flex items-center space-x-3 cursor-pointer transition-all ${copiedId === quiz._id ? 'bg-green-500/10 border-green-500/50' : 'bg-neon-purple/10 border-neon-purple/50 hover:bg-neon-purple/20'}`}
                                                title="Click to Copy Access Code"
                                            >
                                                <span className="text-lg font-mono font-black text-white tracking-widest leading-none">{quiz.joinCode}</span>
                                                <div className={`w-8 h-8 rounded-lg flex items-center justify-center transition-all ${copiedId === quiz._id ? 'bg-green-500 text-white' : 'bg-neon-purple/20 text-neon-purple'}`}>
                                                    {copiedId === quiz._id ? <CheckCircle2 size={16} /> : <Copy size={16} />}
                                                </div>
                                            </div>
                                        </div>
                                        <p className="text-gray-400 text-sm line-clamp-2">{quiz.description}</p>
                                        <div className="flex items-center gap-6 pt-2">
                                            <div className="flex items-center space-x-2 text-xs font-medium text-gray-500">
                                                <Clock size={14} className="text-neon-blue" />
                                                <span>{quiz.duration}m</span>
                                            </div>
                                            <div className="flex items-center space-x-2 text-xs font-medium text-gray-500">
                                                <Activity size={14} className="text-neon-purple" />
                                                <span>{quiz.questions?.length || 0} Qs</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-2 w-full md:w-auto">
                                        <button
                                            onClick={() => router.push(`/reports?quizId=${quiz._id}`)}
                                            className="flex-1 md:flex-none px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all"
                                        >
                                            <TrendingUp size={16} className="text-neon-purple" />
                                            <span>Insights</span>
                                        </button>
                                        <button
                                            onClick={() => router.push(`/edit-quiz/${quiz._id}`)}
                                            className="flex-1 md:flex-none px-4 py-3 bg-white/5 border border-white/10 hover:bg-white/10 text-white rounded-xl text-sm font-bold flex items-center justify-center space-x-2 transition-all"
                                        >
                                            <PlusCircle size={16} className="text-neon-blue" />
                                            <span>Edit</span>
                                        </button>
                                        <button
                                            onClick={() => deleteQuiz(quiz._id)}
                                            className="p-3 bg-red-500/10 border border-red-500/20 text-red-400 hover:bg-red-500/20 rounded-xl transition-all"
                                        >
                                            <Trash2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            </GlassCard>
                        </motion.div>
                    ))
                )}
            </div>
        </div>
    );
}
