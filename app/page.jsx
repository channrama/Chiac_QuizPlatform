'use client';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Sparkles, Shield, Monitor, ChevronRight, BrainCircuit, Users } from 'lucide-react';
import GlassCard from '../components/GlassCard';

export default function Home() {
  const router = useRouter();

  const features = [
    {
      icon: <BrainCircuit className="text-neon-blue" size={32} />,
      title: "AI Quiz Hub",
      desc: "Generate professional assessments from PDFs and text in seconds using our advanced AI engine."
    },
    {
      icon: <Shield className="text-neon-purple" size={32} />,
      title: "Secure Join",
      desc: "Private code-based access ensures only authorized students can enter your assessments."
    },
    {
      icon: <Monitor className="text-green-400" size={32} />,
      title: "Immersive Mode",
      desc: "A distraction-free, full-screen environment designed to maximize focus and prevent cheating."
    }
  ];

  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -z-10 w-[1000px] h-[600px] bg-neon-blue/10 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 -z-10 w-[600px] h-[600px] bg-neon-purple/10 blur-[120px] rounded-full" />

      {/* Hero Section */}
      <section className="pt-20 pb-24 md:pt-32 md:pb-40 px-4">
        <div className="max-w-5xl mx-auto text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-neon-blue text-sm font-medium"
          >
            <Sparkles size={16} />
            <span>Next-Generation Assessment Platform</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-extrabold tracking-tight text-white leading-tight"
          >
            Master Knowledge with <br />
            <span className="bg-accent-gradient bg-clip-text text-transparent">AI-Powered Precision</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed"
          >
            The ultimate platform for teachers to create verified assessments and for students to excel in a distraction-free environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6"
          >
            <button
              onClick={() => router.push('/register')}
              className="w-full sm:w-auto px-10 py-4 bg-accent-gradient text-white rounded-2xl font-bold text-lg shadow-glow hover:shadow-glow-lg transition-all flex items-center justify-center space-x-2 group"
            >
              <span>Get Started Free</span>
              <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => router.push('/login')}
              className="w-full sm:w-auto px-10 py-4 bg-white/5 text-white border border-white/10 rounded-2xl font-bold text-lg hover:bg-white/10 transition-all"
            >
              View Demo
            </button>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 px-4 border-t border-white/5 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((f, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <GlassCard className="p-8 h-full space-y-4 hover:border-white/20 transition-colors">
                  <div className="mb-4">{f.icon}</div>
                  <h3 className="text-xl font-bold text-white">{f.title}</h3>
                  <p className="text-gray-400 leading-relaxed text-sm">{f.desc}</p>
                </GlassCard>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats/Social Proof */}
      <section className="py-24 px-4">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-accent-gradient p-[1px]">
          <div className="bg-dark-950 rounded-[3rem] px-8 py-16 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-white">10k+</p>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Quizzes Managed</p>
            </div>
            <div className="space-y-2 border-y md:border-y-0 md:border-x border-white/10 py-8 md:py-0">
              <p className="text-5xl font-extrabold text-white">99%</p>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Assessment Accuracy</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-white">Unlimited</p>
              <p className="text-gray-500 font-medium uppercase tracking-widest text-xs">Learning Potential</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-24 px-4 text-center">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8">Ready to revolutionize your learning?</h2>
        <button
          onClick={() => router.push('/register')}
          className="px-12 py-5 bg-white text-dark-950 rounded-2xl font-black text-xl hover:scale-105 transition-all shadow-glow-white"
        >
          Join QuizAI Today
        </button>
      </section>
    </div>
  )
}
