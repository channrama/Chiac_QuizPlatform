'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../../context/AuthContext';
import { Clock, AlertCircle, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import GlassCard from '../../../components/GlassCard';

export default function QuizPage({ params }) {
  const id = params.id;
  const { user, loading: authLoading } = useAuth();
  const [quiz, setQuiz] = useState(null);
  const [answers, setAnswers] = useState([]);
  const [timeLeft, setTimeLeft] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [quizStarted, setQuizStarted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const router = useRouter();

  useEffect(() => {
    if (!authLoading && user) fetchQuiz();

    return () => {
      if (typeof document !== 'undefined' && document.fullscreenElement) {
        document.exitFullscreen().catch(err => console.error(err));
      }
    };
  }, [authLoading, user]);

  useEffect(() => {
    if (!quizStarted || timeLeft === null) return;
    if (timeLeft <= 0) {
      submitQuiz();
      return;
    }
    const t = setInterval(() => setTimeLeft(s => (s > 0 ? s - 1 : 0)), 1000);
    return () => clearInterval(t);
  }, [timeLeft, quizStarted]);

  async function fetchQuiz() {
    try {
      const searchParams = new URLSearchParams(window.location.search);
      const key = searchParams.get('key');
      const res = await fetch(`/api/quiz/${id}?key=${key}`);
      const data = await res.json();
      if (res.ok) {
        if (!data.questions || data.questions.length === 0) {
          setError('This quiz has no questions.');
        } else {
          setQuiz(data);
          setAnswers(new Array(data.questions.length).fill(null));
          setTimeLeft(data.duration * 60 || 600);
        }
      } else {
        setError(data.error || 'Failed to load quiz');
      }
    } catch (err) {
      setError('An error occurred while fetching the quiz');
    }
  }

  const enterFullscreen = async () => {
    try {
      const element = document.documentElement;
      if (element.requestFullscreen) await element.requestFullscreen();
      else if (element.webkitRequestFullscreen) await element.webkitRequestFullscreen();
      else if (element.msRequestFullscreen) await element.msRequestFullscreen();
    } catch (err) {
      console.warn('Fullscreen request failed:', err);
    }
  };

  const exitFullscreen = async () => {
    if (typeof document !== 'undefined' && document.fullscreenElement) {
      try {
        await document.exitFullscreen();
      } catch (err) {
        console.error('Exit fullscreen failed:', err);
      }
    }
  };

  const startQuiz = async () => {
    await enterFullscreen();
    setQuizStarted(true);
  };

  const submitQuiz = async () => {
    if (submitting) return;
    setSubmitting(true);
    try {
      const score = Math.round((answers.filter((a, i) => a === quiz.questions[i].correctAnswer).length / quiz.questions.length) * 100);
      const res = await fetch('/api/attempt', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          quizId: id,
          answers,
          score,
          totalQuestions: quiz.questions.length
        })
      });
      if (res.ok) {
        await exitFullscreen();
        router.push('/results');
      } else {
        const data = await res.json();
        setError(data.error || 'Failed to submit');
      }
    } catch (err) {
      setError('Connection error during submission');
    } finally {
      setSubmitting(false);
    }
  };

  if (authLoading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
    </div>
  );

  if (!user) return null;

  if (error) return (
    <div className="max-w-md mx-auto mt-20">
      <GlassCard className="text-center p-8 border-red-500/20">
        <AlertCircle className="mx-auto text-red-500 mb-4" size={48} />
        <h2 className="text-xl font-bold text-white mb-2">Error</h2>
        <p className="text-gray-400 mb-6">{error}</p>
        <button onClick={() => router.push('/dashboard')} className="w-full py-3 bg-white/5 rounded-xl hover:bg-white/10 transition-all font-medium">
          Back to Dashboard
        </button>
      </GlassCard>
    </div>
  );

  if (!quiz) return (
    <div className="flex flex-col items-center justify-center min-h-[400px]">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue"></div>
      <p className="text-gray-400 mt-4">Loading assessment...</p>
    </div>
  );

  if (!quizStarted) {
    return (
      <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="max-w-2xl mx-auto mt-12 px-4">
        <GlassCard className="p-10 text-center">
          <h1 className="text-4xl font-bold text-white mb-4">{quiz.title}</h1>
          <p className="text-gray-400 mb-8">{quiz.description || "Take this assessment to test your knowledge."}</p>
          <div className="grid grid-cols-2 gap-6 py-8 border-y border-white/10 mb-8">
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Time Limit</p>
              <p className="text-2xl font-bold text-white font-mono">{quiz.duration} mins</p>
            </div>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-widest mb-1">Questions</p>
              <p className="text-2xl font-bold text-white font-mono">{quiz.questions.length}</p>
            </div>
          </div>
          <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-2xl text-sm text-yellow-200/70 flex items-start space-x-3 text-left mb-8">
            <AlertCircle className="text-yellow-500 flex-shrink-0 mt-0.5" size={18} />
            <p>Starting the quiz will enter full-screen. Do not exit until finished.</p>
          </div>
          <button onClick={startQuiz} className="w-full py-5 bg-accent-gradient text-white rounded-2xl font-bold text-xl shadow-glow">
            Start Assessment
          </button>
        </GlassCard>
      </motion.div>
    );
  }

  const currentQuestion = quiz.questions[currentQ];

  return (
    <div className="fixed inset-0 z-[9999] bg-[#0A0A0B] overflow-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-white truncate max-w-[200px] md:max-w-sm">{quiz.title}</h2>
            <p className="text-xs text-gray-500 font-medium">Question {currentQ + 1} of {quiz.questions.length}</p>
          </div>
          <div className={`px-5 py-2 rounded-xl border flex items-center space-x-3 ${timeLeft < 60 ? 'bg-red-500/20 border-red-500/50 text-red-400' : 'bg-white/5 border-white/10 text-white'}`}>
            <Clock size={16} />
            <span className="text-xl font-mono font-bold">
              {Math.floor(timeLeft / 60)}:{(timeLeft % 60).toString().padStart(2, '0')}
            </span>
          </div>
        </div>

        <div className="w-full h-1.5 bg-white/5 rounded-full mb-12 overflow-hidden">
          <motion.div className="h-full bg-accent-gradient shadow-glow" initial={{ width: 0 }} animate={{ width: `${((currentQ + 1) / quiz.questions.length) * 100}%` }} />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={currentQ} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="mb-10">
            <GlassCard className="p-8 md:p-12">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-10">{currentQuestion.question}</h3>
              <div className="grid grid-cols-1 gap-4">
                {currentQuestion.options.map((opt, i) => (
                  <button
                    key={i}
                    onClick={() => {
                      const next = [...answers];
                      next[currentQ] = i;
                      setAnswers(next);
                    }}
                    className={`w-full p-6 p-4 rounded-2xl text-left border-2 transition-all ${answers[currentQ] === i ? 'bg-neon-blue/10 border-neon-blue text-white' : 'bg-white/5 border-white/5 text-gray-400 hover:border-white/20'}`}
                  >
                    <div className="flex items-center">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center mr-5 font-bold ${answers[currentQ] === i ? 'bg-neon-blue text-white' : 'bg-white/5 text-gray-500'}`}>
                        {String.fromCharCode(65 + i)}
                      </div>
                      <span>{opt}</span>
                    </div>
                  </button>
                ))}
              </div>
            </GlassCard>
          </motion.div>
        </AnimatePresence>

        <div className="flex flex-col sm:flex-row justify-between items-center bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-3xl gap-4">
          <button disabled={currentQ === 0} onClick={() => setCurrentQ(q => q - 1)} className="w-full sm:w-auto px-10 py-4 rounded-2xl font-bold text-gray-400 hover:text-white disabled:opacity-0">
            Previous
          </button>
          {currentQ === quiz.questions.length - 1 ? (
            <button onClick={submitQuiz} disabled={submitting} className="w-full sm:w-auto px-12 py-4 bg-green-500 text-white rounded-2xl font-bold hover:bg-green-600 disabled:opacity-50">
              {submitting ? 'Submitting...' : 'Finish Assessment'}
            </button>
          ) : (
            <button onClick={() => setCurrentQ(q => q + 1)} className="w-full sm:w-auto px-12 py-4 bg-neon-blue text-white rounded-2xl font-bold flex items-center justify-center space-x-2">
              <span>Next Question</span>
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

