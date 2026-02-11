'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import GlassCard from '../../components/GlassCard';
import { Upload, Sparkles, CheckCircle } from 'lucide-react';

export default function AIPremiumGenerator() {
  const [file, setFile] = useState(null);
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    difficulty: 'medium',
    numberOfQuestions: 5,
    duration: 15,
    accessPassword: '',
  });
  const [loading, setLoading] = useState(false);
  const [generatedQuiz, setGeneratedQuiz] = useState(null);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const selectedFile = e.target.files?.[0];
    if (selectedFile && selectedFile.type === 'application/pdf') {
      setFile(selectedFile);
      setError('');
    } else {
      setError('Please upload a PDF file');
      setFile(null);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setError('Please select a PDF');
      return;
    }

    setLoading(true);
    setError('');

    const fd = new FormData();
    fd.append('pdf', file);
    Object.entries(formData).forEach(([key, value]) => {
      fd.append(key, value);
    });

    try {
      const res = await fetch('/api/quiz/generate-ai', {
        method: 'POST',
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        setGeneratedQuiz(data.quiz);
      } else {
        setError(data.error || 'Generation failed');
      }
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const saveQuiz = async () => {
    // Quiz is already saved in DB during generation
    window.location.href = '/dashboard';
  };

  return (
    <div className="space-y-8">
      <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }}>
        <h1 className="text-4xl font-bold bg-accent-gradient bg-clip-text text-transparent mb-2">
          AI Quiz Generator
        </h1>
        <p className="text-gray-400">Upload a PDF and let AI create questions automatically</p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Panel - Form */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <GlassCard className="h-full">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* PDF Upload */}
              <div>
                <label className="block text-sm font-medium mb-3">Upload PDF</label>
                <motion.label
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center border-2 border-dashed border-white/20 rounded-lg p-8 cursor-pointer hover:border-neon-blue transition-colors"
                >
                  <div className="text-center">
                    <Upload className="mx-auto mb-2 text-neon-blue" size={32} />
                    <p className="text-sm font-medium">
                      {file ? file.name : 'Click to upload or drag and drop'}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">PDF only</p>
                  </div>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                </motion.label>
              </div>

              {/* Quiz Title */}
              <div>
                <label className="block text-sm font-medium mb-2">Quiz Title</label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="Enter quiz title"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  required
                />
              </div>

              {/* Description */}
              <div>
                <label className="block text-sm font-medium mb-2">Description</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleInputChange}
                  placeholder="Enter quiz description"
                  rows={3}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all resize-none"
                />
              </div>

              {/* Difficulty */}
              <div>
                <label className="block text-sm font-medium mb-2">Difficulty</label>
                <select
                  name="difficulty"
                  value={formData.difficulty}
                  onChange={handleInputChange}
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                >
                  <option value="easy">Easy</option>
                  <option value="medium">Medium</option>
                  <option value="hard">Hard</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {/* Questions */}
                <div>
                  <label className="block text-sm font-medium mb-2">Questions</label>
                  <input
                    type="number"
                    name="numberOfQuestions"
                    value={formData.numberOfQuestions}
                    onChange={handleInputChange}
                    min="1"
                    max="50"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  />
                </div>

                {/* Duration */}
                <div>
                  <label className="block text-sm font-medium mb-2">Duration (min)</label>
                  <input
                    type="number"
                    name="duration"
                    value={formData.duration}
                    onChange={handleInputChange}
                    min="1"
                    className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                  />
                </div>
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm font-medium mb-2">Password (Optional)</label>
                <input
                  type="password"
                  name="accessPassword"
                  value={formData.accessPassword}
                  onChange={handleInputChange}
                  placeholder="Leave empty for public quiz"
                  className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-neon-blue/50 transition-all"
                />
              </div>

              {error && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="bg-red-500/20 border border-red-500/50 text-red-400 p-3 rounded-lg text-sm"
                >
                  {error}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                disabled={loading}
                className="w-full bg-accent-gradient py-3 rounded-lg font-medium text-white hover:shadow-glow-lg disabled:opacity-50 transition-all flex items-center justify-center space-x-2"
              >
                <Sparkles size={20} />
                <span>{loading ? 'Generating...' : 'Generate Quiz'}</span>
              </motion.button>
            </form>
          </GlassCard>
        </motion.div>

        {/* Right Panel - Preview */}
        <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          {loading ? (
            <GlassCard className="h-full flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-neon-blue mx-auto"></div>
                <p className="text-gray-400">AI is generating your quiz...</p>
              </div>
            </GlassCard>
          ) : generatedQuiz ? (
            <GlassCard className="h-full space-y-4">
              <div className="flex items-center space-x-2 text-green-400 mb-4">
                <CheckCircle size={24} />
                <span className="font-medium">Quiz Generated Successfully!</span>
              </div>

              <div className="space-y-2">
                <p className="text-gray-400 text-sm">Title</p>
                <p className="text-xl font-bold">{generatedQuiz.title}</p>
              </div>

              <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                <div>
                  <p className="text-gray-400 text-sm">Questions</p>
                  <p className="text-2xl font-bold text-neon-blue">
                    {generatedQuiz.questions?.length || 0}
                  </p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Duration</p>
                  <p className="text-2xl font-bold text-neon-purple">
                    {generatedQuiz.duration} min
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/10">
                <p className="text-gray-400 text-sm mb-2">Preview Questions</p>
                <div className="space-y-3 max-h-64 overflow-y-auto">
                  {generatedQuiz.questions?.slice(0, 3).map((q, idx) => (
                    <div key={idx} className="bg-white/5 rounded p-3">
                      <p className="text-sm font-medium text-neon-blue">
                        Q{idx + 1}: {q.question}
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        {q.options?.length} options • Correct: {q.correctAnswer + 1}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={saveQuiz}
                className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-medium mt-6 transition-colors"
              >
                ✓ Quiz Saved! Return to Dashboard
              </motion.button>
            </GlassCard>
          ) : (
            <GlassCard className="h-full flex items-center justify-center">
              <p className="text-center text-gray-400">
                Upload a PDF and fill in the details to generate AI-powered questions
              </p>
            </GlassCard>
          )}
        </motion.div>
      </div>
    </div>
  );
}
