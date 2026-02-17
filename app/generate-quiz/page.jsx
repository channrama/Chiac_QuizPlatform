'use client';
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAuth } from '../../context/AuthContext';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileUp,
  Sparkles,
  AlertCircle,
  CheckCircle2,
  Settings,
  Clock,
  Lock,
  Activity,
  Zap,
  ChevronRight,
  ShieldCheck,
  Brain
} from 'lucide-react';
import GlassCard from '../../components/GlassCard';

export default function GenerateAIQuiz() {
  const { user, loading: authLoading } = useAuth();
  const [form, setForm] = useState({
    title: '',
    description: '',
    numberOfQuestions: 5,
    difficulty: 'medium',
    duration: 10,
    accessPassword: '',
  });
  const [pdf, setPdf] = useState(null);
  const [errors, setErrors] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  if (authLoading) return (
    <div className="flex items-center justify-center min-h-[400px]">
      <div className="animate-spin h-12 w-12 border-b-2 border-neon-blue rounded-full" />
    </div>
  );
  if (!user || user.role !== 'teacher') return null;

  function handleFileChange(e) {
    const file = e.target.files?.[0];
    if (file && file.type === 'application/pdf') {
      setPdf(file);
      setErrors([]);
    } else {
      setPdf(null);
      setErrors(['Please select a valid PDF file']);
    }
  }

  async function submit(e) {
    e.preventDefault();
    const errs = [];
    if (!form.title || form.title.trim().length < 3) errs.push('Title must be at least 3 characters');
    if (!pdf) errs.push('PDF file is required');
    if (form.numberOfQuestions < 1 || form.numberOfQuestions > 50) errs.push('Questions must be 1-50');
    if (errs.length) { setErrors(errs); return; }

    setLoading(true);
    const formData = new FormData();
    formData.append('pdf', pdf);
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('numberOfQuestions', form.numberOfQuestions);
    formData.append('difficulty', form.difficulty);
    formData.append('duration', form.duration);
    formData.append('accessPassword', form.accessPassword);

    try {
      const res = await fetch('/api/quiz/generate-ai', {
        method: 'POST',
        body: formData,
      });
      const data = await res.json();
      if (res.ok) router.push('/dashboard');
      else setErrors([data.error || 'Failed to generate quiz']);
    } catch (err) {
      setErrors(['Network error during generation']);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="max-w-6xl mx-auto pb-20">
      <div className="text-center mb-12 space-y-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center space-x-2 px-4 py-2 bg-neon-purple/10 border border-neon-purple/20 text-neon-purple rounded-full text-xs font-black uppercase tracking-widest shadow-glow-sm"
        >
          <Zap size={14} />
          <span>Neural Engine Active</span>
        </motion.div>
        <h1 className="text-5xl font-black text-white tracking-tight">AI Magic <span className="bg-accent-gradient bg-clip-text text-transparent">Workbench</span></h1>
        <p className="text-gray-500 text-lg font-medium">Transform any PDF document into a strategic assessment in seconds.</p>
      </div>

      <form onSubmit={submit} className="grid grid-cols-1 lg:grid-cols-5 gap-10">
        {/* Left Column: File & Mode */}
        <div className="lg:col-span-3 space-y-8">
          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <FileUp size={18} className="text-neon-blue" />
              <span>Knowledge Source</span>
            </h2>

            <div className={`relative border-2 border-dashed rounded-3xl p-12 transition-all group overflow-hidden ${pdf ? 'border-green-500/50 bg-green-500/5' : 'border-white/10 hover:border-neon-blue/40 bg-white/2'}`}>
              {pdf && <div className="absolute inset-0 bg-green-500/5 backdrop-blur-3xl -z-10" />}
              <input
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
              />
              <div className="flex flex-col items-center justify-center text-center space-y-6 relative z-10">
                <motion.div
                  animate={pdf ? { scale: [1, 1.1, 1] } : {}}
                  className={`w-20 h-20 rounded-2xl flex items-center justify-center shadow-glow-lg transition-colors ${pdf ? 'bg-green-500 text-white' : 'bg-white/5 text-gray-400 group-hover:text-neon-blue'}`}
                >
                  {pdf ? <CheckCircle2 size={40} /> : <FileUp size={40} />}
                </motion.div>

                <div className="space-y-2">
                  {pdf ? (
                    <div className="space-y-1">
                      <span className="text-2xl font-black text-white">{pdf.name}</span>
                      <div className="flex items-center justify-center space-x-2 text-xs text-gray-500 font-mono">
                        <span>Size: {(pdf.size / 1024 / 1024).toFixed(2)} MB</span>
                        <span>•</span>
                        <span className="text-green-400 font-bold uppercase">Ready for processing</span>
                      </div>
                    </div>
                  ) : (
                    <>
                      <p className="text-xl font-bold text-white">Click or Drop PDF</p>
                      <p className="text-gray-500 text-sm max-w-xs mx-auto italic">Upload textbooks, papers, or notes for the AI to analyze.</p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-lg font-bold text-white flex items-center space-x-2">
              <Brain size={18} className="text-neon-purple" />
              <span>Instructional Design</span>
            </h2>
            <GlassCard className="p-8 space-y-8">
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Assessment Theme</label>
                <input
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white font-bold focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all placeholder-gray-700"
                  placeholder="e.g. Chapter 4: Neural Foundations"
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest ml-1">Context / Special Requests</label>
                <textarea
                  className="w-full p-4 bg-white/5 border border-white/10 rounded-2xl text-white text-sm focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all min-h-[100px] resize-none placeholder-gray-700 leading-relaxed"
                  placeholder="Focus on the specific definitions or the main case study mentioned in the PDF..."
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Right Column: Parameters */}
        <div className="lg:col-span-2 space-y-8">
          <h2 className="text-lg font-bold text-white flex items-center space-x-2">
            <Settings size={18} className="text-neon-purple" />
            <span>Synthesis Parameters</span>
          </h2>

          <GlassCard className="p-8 space-y-10">
            <div className="space-y-6">
              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
                  <span>Difficulty Level</span>
                  <span className={`text-neon-purple`}>{form.difficulty} Synth</span>
                </div>
                <div className="grid grid-cols-3 gap-3">
                  {['easy', 'medium', 'hard'].map((lvl) => (
                    <button
                      key={lvl}
                      type="button"
                      onClick={() => setForm({ ...form, difficulty: lvl })}
                      className={`py-3 rounded-xl border-2 transition-all text-[10px] font-black uppercase tracking-tighter ${form.difficulty === lvl ? 'bg-neon-purple/20 border-neon-purple text-white shadow-glow-sm' : 'bg-white/2 border-white/5 text-gray-600 hover:border-white/20'}`}
                    >
                      {lvl}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between items-center text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">
                  <span>Synthesis Batch Size</span>
                  <span className="text-neon-blue font-mono">{form.numberOfQuestions} Qs</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="30"
                  value={form.numberOfQuestions}
                  onChange={(e) => setForm({ ...form, numberOfQuestions: Number(e.target.value) })}
                  className="w-full h-1.5 bg-white/10 rounded-full appearance-none accent-neon-blue cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-gray-600 font-mono">
                  <span>1</span>
                  <span>15</span>
                  <span>30</span>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6">
                <div className="space-y-2">
                  <label className="text-[10px] font-bold text-gray-500 uppercase tracking-widest px-1">Synthesis Time Lock (min)</label>
                  <div className="relative">
                    <Clock size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500" />
                    <input
                      type="number"
                      className="w-full pl-11 pr-4 py-4 bg-white/5 border border-white/10 rounded-2xl text-white font-mono focus:outline-none focus:ring-2 focus:ring-neon-purple/50 transition-all"
                      value={form.duration}
                      onChange={(e) => setForm({ ...form, duration: Number(e.target.value) })}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                disabled={loading}
                className="w-full py-6 bg-accent-gradient text-white rounded-3xl font-black text-xl shadow-glow-lg hover:shadow-glow-xl transition-all flex items-center justify-center space-x-3 disabled:opacity-50 relative overflow-hidden group"
              >
                {loading && <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 2 }} className="w-6 h-6 border-2 border-white/20 border-t-white rounded-full" />}
                <Sparkles className={loading ? 'hidden' : 'group-hover:animate-pulse'} size={24} />
                <span>{loading ? 'Synthesizing...' : 'Ignite Generation'}</span>
              </button>
            </div>

            <div className="flex items-start space-x-3 p-4 bg-neon-blue/5 border border-neon-blue/20 rounded-2xl">
              <ShieldCheck className="text-neon-blue h-5 w-5 shrink-0" />
              <p className="text-[10px] text-gray-400 font-medium leading-relaxed">Our <span className="text-white">Neural Engine</span> analyzes text patterns to generate high-quality, relevant questions automatically.</p>
            </div>
          </GlassCard>

          <AnimatePresence>
            {errors.length > 0 && (
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} className="p-4 bg-red-500/10 border border-red-500/30 rounded-2xl space-y-1">
                {errors.map((e, i) => (
                  <div key={i} className="flex items-center space-x-2 text-red-300 text-xs font-bold">
                    <AlertCircle size={14} />
                    <span>{e}</span>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </form>

      {/* Generation Overlay */}
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-dark-950/90 backdrop-blur-3xl flex flex-col items-center justify-center space-y-12"
          >
            <div className="relative">
              <motion.div
                animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 4 }}
                className="w-48 h-48 rounded-full border-t-4 border-l-2 border-neon-blue shadow-glow-xl"
              />
              <motion.div
                animate={{ rotate: -360, scale: [1, 0.8, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute inset-4 rounded-full border-b-4 border-r-2 border-neon-purple"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain size={48} className="text-white animate-pulse" />
              </div>
            </div>

            <div className="text-center space-y-2">
              <h3 className="text-3xl font-black text-white tracking-widest uppercase">Deep Synthesis In Progress</h3>
              <p className="text-neon-blue font-mono text-sm tracking-tighter">Analyzing documentation patterns • Generating unit content</p>
            </div>

            <div className="w-64 h-1 bg-white/5 rounded-full overflow-hidden">
              <motion.div
                animate={{ x: [-256, 256] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
                className="w-1/2 h-full bg-accent-gradient shadow-glow"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
