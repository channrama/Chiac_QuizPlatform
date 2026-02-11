'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Bell, Settings, LogOut, Menu, X } from 'lucide-react';

export default function PremiumNav() {
  const [role, setRole] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const t = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (t) {
      try {
        const payload = JSON.parse(atob(t.split('.')[1]));
        setRole(payload.role);
        setLoggedIn(true);
      } catch (e) {
        setLoggedIn(false);
      }
    }
    setMounted(true);
  }, []);

  function logout() {
    localStorage.removeItem('token');
    setLoggedIn(false);
    setRole(null);
    if (typeof window !== 'undefined') window.location.href = '/';
  }

  if (!mounted) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold bg-accent-gradient bg-clip-text text-transparent cursor-pointer"
        >
          QuizAI
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {loggedIn ? (
            <>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full text-sm font-medium ${
                  role === 'teacher'
                    ? 'bg-blue-500/20 text-blue-400 border border-blue-500/50'
                    : 'bg-purple-500/20 text-purple-400 border border-purple-500/50'
                }`}
              >
                {role === 'teacher' ? '👨‍🏫 Teacher' : '👨‍🎓 Student'}
              </motion.span>

              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Bell size={20} className="text-gray-400 hover:text-neon-blue transition-colors" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setShowDropdown(!showDropdown)}
                className="relative"
              >
                <Settings size={20} className="text-gray-400 hover:text-neon-blue transition-colors" />
              </motion.button>

              {showDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="absolute right-0 mt-2 w-48 bg-dark-900/95 backdrop-blur border border-white/10 rounded-lg shadow-lg p-2"
                >
                  <button
                    onClick={() => {
                      logout();
                      setShowDropdown(false);
                    }}
                    className="w-full flex items-center space-x-2 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Logout</span>
                  </button>
                </motion.div>
              )}
            </>
          ) : (
            <>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/login"
                className="text-white hover:text-neon-blue transition-colors"
              >
                Login
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                href="/register"
                className="px-4 py-2 bg-accent-gradient rounded-lg font-medium hover:shadow-glow-lg transition-all"
              >
                Register
              </motion.a>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          className="md:hidden bg-dark-900/95 border-t border-white/10 p-4 space-y-3"
        >
          {loggedIn ? (
            <>
              <div className="text-sm text-gray-400 mb-4">
                {role === 'teacher' ? '👨‍🏫 Teacher' : '👨‍🎓 Student'}
              </div>
              <button
                onClick={() => {
                  logout();
                  setMobileMenuOpen(false);
                }}
                className="w-full flex items-center space-x-2 px-4 py-2 text-red-400 hover:bg-red-500/10 rounded transition-colors"
              >
                <LogOut size={16} />
                <span>Logout</span>
              </button>
            </>
          ) : (
            <>
              <a href="/login" className="block text-white hover:text-neon-blue">
                Login
              </a>
              <a href="/register" className="block text-white hover:text-neon-blue">
                Register
              </a>
            </>
          )}
        </motion.div>
      )}
    </motion.nav>
  );
}
