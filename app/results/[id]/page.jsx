'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { CheckCircle2, XCircle, ArrowLeft, Trophy, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import GlassCard from '../../../components/GlassCard';

export default function ReviewQuiz({ params }) {
    const { id } = params;
    const { user, loading: authLoading } = useAuth();
    const [attempt, setAttempt] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const router = useRouter();

    useEffect(() => {
        if (!authLoading && user) fetchAttempt();
    }, [authLoading, user]);

    async function fetchAttempt() {
        try {
            const res = await fetch(`/api/attempt/${id}`);
            const data = await res.json();
            if (res.ok) {
                setAttempt(data);
            } else {
                setError(data.error || 'Failed to load attempt details');
            }
        } catch (err) {
            setError('An error occurred while fetching details');
        } finally {
            setLoading(false);
        }
    }

    if (authLoading || loading) return (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
            <p className="text-gray-400">Loading analysis...</p>
        </div>
    );

    if (error) return (
        <div className="max-w-md mx-auto mt-20 px-4">
            <GlassCard className="text-center p-8 border-red-500/20">
                <h2 className="text-xl font-bold text-white mb-2">{error}</h2>
                <button onClick={() => router.push('/results')} className="mt-4 px-6 py-2 bg-white/5 rounded-lg hover:bg-white/10 transition-all font-medium">
                    Back to Results
                </button>
            </GlassCard>
        </div>
    );

    if (!attempt) return null;

    const quiz = attempt.quizId;
    const scoreRaw = `${attempt.score}/${attempt.totalQuestions}`;
    const percentage = Math.round((attempt.score / attempt.totalQuestions) * 100);

    return (
        <div className="max-w-4xl mx-auto px-4 pb-20">
            <button
                onClick={() => router.push('/results')}
                className="flex items-center space-x-2 text-gray-500 hover:text-white transition-colors mb-8"
            >
                <ArrowLeft size={18} />
                <span className="font-medium">Back to Results</span>
            </button>

            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
                <div className="space-y-1">
                    <h1 className="text-4xl font-bold text-white">{quiz.title}</h1>
                    <p className="text-gray-400">Review your performance and answers below.</p>
                </div>

                <GlassCard className="px-8 py-4 flex items-center space-x-6 border-neon-blue/20">
                    <div className="text-center">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Final Score</p>
                        <p className="text-3xl font-black text-neon-blue">{scoreRaw}</p>
                    </div>
                    <div className="h-10 w-[1px] bg-white/10" />
                    <div className="text-center">
                        <p className="text-[10px] text-gray-500 uppercase tracking-widest mb-1">Percentage</p>
                        <div className="flex items-center space-x-1">
                            <span className="text-3xl font-black text-white">{percentage}%</span>
                        </div>
                    </div>
                </GlassCard>
            </div>

            <div className="space-y-6">
                {quiz.questions.map((q, idx) => {
                    // Safety check if answers array is missing or shorter than questions
                    const studentAnswer = (attempt.answers && attempt.answers.length > idx && attempt.answers[idx] !== undefined && attempt.answers[idx] !== null)
                        ? attempt.answers[idx]
                        : null;
                    const isCorrect = studentAnswer !== null && Number(studentAnswer) === Number(q.correctAnswer);

                    return (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                        >
                            <GlassCard className={`p-8 border-l-4 ${isCorrect ? 'border-l-green-500' : 'border-l-red-500'}`}>
                                <div className="flex justify-between items-start mb-6">
                                    <h3 className="text-xl font-bold text-white max-w-[80%]">
                                        <span className="text-gray-500 mr-3">#{idx + 1}</span>
                                        {q.question}
                                    </h3>
                                    {studentAnswer === null ? (
                                        <div className="flex items-center space-x-2 text-gray-400 font-bold bg-white/5 px-3 py-1 rounded-lg">
                                            <span className="text-xs uppercase">Not Answered</span>
                                        </div>
                                    ) : isCorrect ? (
                                        <div className="flex items-center space-x-2 text-green-500 font-bold bg-green-500/10 px-3 py-1 rounded-lg">
                                            <CheckCircle2 size={18} />
                                            <span className="text-xs uppercase">Correct</span>
                                        </div>
                                    ) : (
                                        <div className="flex items-center space-x-2 text-red-500 font-bold bg-red-500/10 px-3 py-1 rounded-lg">
                                            <XCircle size={18} />
                                            <span className="text-xs uppercase">Incorrect</span>
                                        </div>
                                    )}
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {q.options.map((opt, oIdx) => {
                                        const isThisCorrect = Number(oIdx) === Number(q.correctAnswer);
                                        const isThisStudentChoice = studentAnswer !== null && Number(oIdx) === Number(studentAnswer);

                                        let containerClass = "p-4 rounded-xl border transition-all text-sm flex items-center space-x-3 relative ";
                                        let indicatorClass = "w-8 h-8 rounded-lg flex items-center justify-center font-bold flex-shrink-0 ";

                                        if (isThisCorrect) {
                                            containerClass += "bg-green-500/10 border-green-500/50 text-white ring-1 ring-green-500/20";
                                            indicatorClass += "bg-green-500 text-white";
                                        } else if (isThisStudentChoice && !isCorrect) {
                                            containerClass += "bg-red-500/10 border-red-500/50 text-white ring-1 ring-red-500/20";
                                            indicatorClass += "bg-red-500 text-white";
                                        } else {
                                            containerClass += "bg-white/5 border-white/5 text-gray-500";
                                            indicatorClass += "bg-white/5 text-gray-500";
                                        }

                                        return (
                                            <div key={oIdx} className={containerClass}>
                                                <div className={indicatorClass}>
                                                    {String.fromCharCode(65 + oIdx)}
                                                </div>
                                                <div className="flex flex-col">
                                                    <span>{opt}</span>
                                                    {isThisCorrect && (
                                                        <span className="text-[9px] text-green-500 font-black uppercase tracking-tighter mt-0.5">Correct Answer</span>
                                                    )}
                                                    {isThisStudentChoice && !isCorrect && (
                                                        <span className="text-[9px] text-red-500 font-black uppercase tracking-tighter mt-0.5">Your Choice</span>
                                                    )}
                                                    {isThisStudentChoice && isCorrect && (
                                                        <span className="text-[9px] text-green-400 font-black uppercase tracking-tighter mt-0.5">Your Choice (Correct)</span>
                                                    )}
                                                </div>
                                                {isThisCorrect && <CheckCircle2 size={14} className="ml-auto text-green-500" />}
                                                {isThisStudentChoice && !isCorrect && <XCircle size={14} className="ml-auto text-red-500" />}
                                            </div>
                                        );
                                    })}
                                </div>
                            </GlassCard>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
