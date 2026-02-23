'use client';
import { useEffect, useState } from 'react';
import { useRouter, useParams } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Plus,
    Trash2,
    Save,
    ChevronRight,
    Clock,
    Settings,
    Layout,
    AlertCircle,
    FileText,
    ListPlus,
    ArrowLeft
} from 'lucide-react';
import GlassCard from '../../../components/GlassCard';

function validateQuiz(title, questions) {
    const errors = [];
    if (!title || title.trim().length < 3) errors.push('Title must be at least 3 characters');
    if (!Array.isArray(questions) || questions.length === 0) errors.push('At least one question is required');
    questions.forEach((q, idx) => {
        if (!q.question || q.question.trim().length === 0) errors.push(`Question ${idx + 1}: text required`);
        if (!Array.isArray(q.options) || q.options.length !== 4) errors.push(`Question ${idx + 1}: must have 4 options`);
        else q.options.forEach((o, j) => { if (!o || o.trim().length === 0) errors.push(`Question ${idx + 1}: option ${j + 1} required`); });
        if (typeof q.correctAnswer !== 'number' || q.correctAnswer < 0 || q.correctAnswer > 3) errors.push(`Question ${idx + 1}: correct answer index must be 0-3`);
    });
    return errors;
}

export default function EditQuiz() {
    const { user, loading: authLoading } = useAuth();
    const { id } = useParams();
    const router = useRouter();

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [duration, setDuration] = useState(10);
    const [accessPassword, setAccessPassword] = useState('');
    const [questions, setQuestions] = useState([{ question: '', options: ['', '', '', ''], correctAnswer: 0 }]);
    const [errors, setErrors] = useState([]);
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);

    useEffect(() => {
        if (!authLoading && user) {
            if (user.role !== 'teacher') router.push('/dashboard');
            else fetchQuiz();
        }
    }, [user, authLoading]);

    async function fetchQuiz() {
        try {
            const res = await fetch(`/api/quiz/${id}`);
            const data = await res.json();
            if (res.ok) {
                setTitle(data.title);
                setDescription(data.description);
                setDuration(data.duration);
                // Note: We don't fetch questions with correct answers for students, 
                // but for teachers it should be available if we use the right endpoint or logic.
                // The original GET /api/quiz/[id] sanitzes questions. 
                // I need to ensure teachers get the full data.
                setQuestions(data.questions.map(q => ({
                    ...q,
                    // Ensure correct answer is populated if it exists in the response
                    correctAnswer: q.correctAnswer !== undefined ? q.correctAnswer : 0
                })));
            } else {
                setErrors([data.error || 'Failed to load quiz']);
            }
        } catch (err) {
            setErrors(['Network error while fetching quiz']);
        } finally {
            setFetching(false);
        }
    }

    if (authLoading || fetching) return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <div className="animate-spin h-10 w-10 border-b-2 border-neon-blue rounded-full" />
            <span className="text-gray-500 font-mono text-xs uppercase tracking-widest">Loading Studio...</span>
        </div>
    );

    function setQ(i, val) { const arr = [...questions]; arr[i] = val; setQuestions(arr); }
    function addQ() { setQuestions([...questions, { question: '', options: ['', '', '', ''], correctAnswer: 0 }]); }
    function removeQ(i) {
        if (questions.length > 1) {
            const arr = questions.filter((_, idx) => idx !== i);
            setQuestions(arr);
        }
    }

    async function submit(e) {
        e.preventDefault();
        const errs = validateQuiz(title, questions);
        if (errs.length) { setErrors(errs); return; }
        setLoading(true);
        setErrors([]);
        const body = { title, description, duration, questions, accessPassword: accessPassword || undefined };
        try {
            const res = await fetch(`/api/quiz/${id}`, {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(body)
            });
            const data = await res.json();
            if (res.ok) router.push('/dashboard');
            else setErrors([data.error || 'Failed to update quiz'].concat(data.details || []));
        } catch (err) {
            setErrors(['Network error during update']);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="max-w-7xl mx-auto pb-20">
            {/* Header Area */}
            <div className="flex justify-between items-center mb-10">
                <div className="flex items-center space-x-4">
                    <button onClick={() => router.back()} className="p-3 bg-white/5 border border-white/10 rounded-xl hover:bg-white/10 transition-all text-gray-400 hover:text-white">
                        <ArrowLeft size={18} />
                    </button>
                    <div className="w-12 h-12 bg-neon-purple/10 rounded-2xl flex items-center justify-center border border-neon-purple/20">
                        <Layout className="text-neon-purple" size={24} />
                    </div>
                    <div>
                        <h1 className="text-4xl font-black text-white tracking-tight">Edit <span className="text-neon-purple">Studio</span></h1>
                        <p className="text-gray-500 text-sm font-medium">Refining assessment strategy</p>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-3 text-xs font-mono uppercase tracking-widest text-gray-500">
                    <span className="px-2 py-1 bg-white/5 rounded">Live</span>
                    <ChevronRight size={14} />
                    <span className="text-neon-purple">Modification</span>
                </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
                <div className="space-y-6">
                    <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                        <Settings size={18} className="text-neon-blue" />
                        <span>Unit Settings</span>
                    </h2>

                    <GlassCard className="p-6 space-y-6 sticky top-28">
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Title</label>
                                <input
                                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all font-medium"
                                    placeholder="Mastery Unit 1"
                                    value={title}
                                    onChange={e => setTitle(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Descriptor</label>
                                <textarea
                                    className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all min-h-[120px] text-sm resize-none"
                                    placeholder="What will students learn from this?"
                                    value={description}
                                    onChange={e => setDescription(e.target.value)}
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Duration (Minutes)</label>
                                <div className="relative">
                                    <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-600" />
                                    <input
                                        type="number"
                                        className="w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all font-mono"
                                        value={duration}
                                        onChange={e => setDuration(Number(e.target.value))}
                                    />
                                </div>
                            </div>
                        </div>

                        <button
                            disabled={loading}
                            onClick={submit}
                            className="w-full py-5 bg-accent-gradient text-white rounded-2xl font-black text-lg shadow-glow-lg hover:shadow-glow-xl transition-all flex items-center justify-center space-x-3 disabled:opacity-50"
                        >
                            {loading ? <div className="animate-spin h-5 w-5 border-b-2 border-white rounded-full" /> : <Save size={22} />}
                            <span>{loading ? 'Updating...' : 'Save Changes'}</span>
                        </button>
                    </GlassCard>
                </div>

                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-lg font-bold text-white flex items-center space-x-2">
                            <ListPlus size={18} className="text-neon-purple" />
                            <span>Content Builder</span>
                        </h2>
                    </div>

                    <div className="space-y-8">
                        <AnimatePresence initial={false}>
                            {questions.map((q, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    className="relative group"
                                >
                                    <GlassCard className="p-8 md:p-10 border-l-4 border-l-neon-purple transition-all">
                                        <div className="flex justify-between items-start mb-6">
                                            <div className="flex items-center space-x-4">
                                                <div className="w-10 h-10 bg-neon-purple text-white rounded-xl flex items-center justify-center font-black text-lg shadow-glow-sm">
                                                    {i + 1}
                                                </div>
                                                <h4 className="text-xs font-bold text-gray-500 uppercase tracking-[0.2em]">Focus Card</h4>
                                            </div>
                                            <button
                                                onClick={() => removeQ(i)}
                                                className="p-2 text-gray-600 hover:text-red-400 opacity-0 group-hover:opacity-100 transition-all hover:bg-red-500/10 rounded-lg"
                                            >
                                                <Trash2 size={20} />
                                            </button>
                                        </div>

                                        <div className="space-y-8">
                                            <div className="space-y-2">
                                                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">The Question</label>
                                                <input
                                                    className="w-full p-5 bg-white/5 border border-white/10 rounded-2xl text-xl font-bold text-white focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                                                    placeholder="Type your strategic question here..."
                                                    value={q.question}
                                                    onChange={e => setQ(i, { ...q, question: e.target.value })}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                                {q.options.map((opt, j) => (
                                                    <div key={j} className="space-y-2">
                                                        <div className="flex justify-between items-center ml-1">
                                                            <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">Option {String.fromCharCode(65 + j)}</label>
                                                            <label className="flex items-center space-x-2 cursor-pointer group/label">
                                                                <span className={`text-[10px] font-bold uppercase transition-colors ${q.correctAnswer === j ? 'text-green-400' : 'text-gray-600'}`}>Correct</span>
                                                                <input
                                                                    type="radio"
                                                                    name={`correct-${i}`}
                                                                    checked={q.correctAnswer === j}
                                                                    onChange={() => setQ(i, { ...q, correctAnswer: j })}
                                                                    className="w-4 h-4 accent-green-500 bg-white/5 border-white/10"
                                                                />
                                                            </label>
                                                        </div>
                                                        <input
                                                            className={`w-full p-4 bg-white/5 border rounded-2xl text-white text-sm focus:outline-none transition-all ${q.correctAnswer === j ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 focus:ring-2 focus:ring-neon-purple/30'}`}
                                                            placeholder={`Candidate ${String.fromCharCode(65 + j)}`}
                                                            value={opt}
                                                            onChange={e => { const opts = [...q.options]; opts[j] = e.target.value; setQ(i, { ...q, options: opts }) }}
                                                        />
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </GlassCard>
                                </motion.div>
                            ))}
                        </AnimatePresence>

                        <motion.button
                            whileHover={{ scale: 1.01, y: -2 }}
                            whileTap={{ scale: 0.99 }}
                            onClick={addQ}
                            className="w-full py-6 bg-white/5 border-2 border-dashed border-white/10 rounded-3xl text-gray-500 hover:text-white hover:border-neon-purple/50 hover:bg-white/10 transition-all flex flex-col items-center justify-center space-y-2 group"
                        >
                            <div className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center border border-white/10 group-hover:border-neon-purple/30 transition-all text-gray-500 group-hover:text-neon-purple shadow-glow-sm">
                                <Plus size={24} />
                            </div>
                            <span className="text-sm font-black uppercase tracking-widest">Append Focus Card</span>
                        </motion.button>
                    </div>
                </div>
            </div>

            {/* Errors Notification */}
            <AnimatePresence>
                {errors.length > 0 && (
                    <motion.div
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 100 }}
                        className="fixed bottom-10 left-10 right-10 md:left-auto md:w-96 z-[60]"
                    >
                        <div className="bg-red-950/90 backdrop-blur-xl border border-red-500/50 p-6 rounded-3xl shadow-glow-lg">
                            <div className="flex items-center space-x-3 text-red-400 mb-4">
                                <AlertCircle size={20} />
                                <span className="font-black uppercase tracking-widest text-xs">Correction Required</span>
                            </div>
                            <ul className="space-y-2">
                                {errors.slice(0, 3).map((e, i) => (
                                    <li key={i} className="text-[11px] text-red-200/70 italic leading-relaxed">• {e}</li>
                                ))}
                            </ul>
                            <button onClick={() => setErrors([])} className="w-full mt-6 py-2 bg-red-500/20 hover:bg-red-500/30 text-red-400 text-[10px] font-black uppercase tracking-widest rounded-lg transition-all">
                                Dismiss Alerts
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
