'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Bell,
  Settings,
  LogOut,
  Menu,
  X,
  LayoutDashboard,
  FileText,
  Sparkles,
  FolderOpen,
  Users,
  User as UserIcon
} from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function PremiumNav() {
  const { user, loading, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  if (loading) return null;

  const role = user?.role;
  const loggedIn = !!user;

  const teacherMenus = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: FileText, label: 'Quiz Studio', href: '/create-quiz' },
    { icon: Sparkles, label: 'AI Workbench', href: '/generate-quiz' },
    { icon: FolderOpen, label: 'My Quizzes', href: '/my-quizzes' },
    { icon: Users, label: 'Insights', href: '/reports' },
  ];

  const studentMenus = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
    { icon: FolderOpen, label: 'My Attempts', href: '/results' },
  ];

  const menus = role === 'teacher' ? teacherMenus : studentMenus;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="sticky top-0 z-50 bg-dark-900/80 backdrop-blur-md border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-black tracking-tighter cursor-pointer flex items-center space-x-2"
          >
            <div className="w-8 h-8 bg-accent-gradient rounded-lg flex items-center justify-center text-white text-lg font-bold">Q</div>
            <span className="bg-accent-gradient bg-clip-text text-transparent">QuizAI</span>
          </motion.div>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-6">
          {loggedIn ? (
            <>
              <motion.span
                whileHover={{ scale: 1.05 }}
                className={`px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-widest ${role === 'teacher'
                  ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20'
                  : 'bg-purple-500/10 text-purple-400 border border-purple-500/20'
                  }`}
              >
                {role === 'teacher' ? 'Teacher Studio' : 'Student Mode'}
              </motion.span>

              <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                <Bell size={20} className="text-gray-400 hover:text-neon-blue transition-colors" />
              </motion.button>

              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowDropdown(!showDropdown)}
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:border-neon-blue/50 transition-all overflow-hidden bg-white/5"
                >
                  <UserIcon size={20} className="text-gray-400" />
                </motion.button>

                <AnimatePresence>
                  {showDropdown && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute right-0 mt-3 w-56 bg-dark-950/95 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-2 z-[60]"
                    >
                      <div className="px-4 py-3 border-b border-white/5 mb-2">
                        <p className="text-xs font-black text-white truncate">{user.name}</p>
                        <p className="text-[10px] text-gray-500 truncate">{user.email}</p>
                      </div>
                      <Link href="/dashboard" onClick={() => setShowDropdown(false)}>
                        <div className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-gray-400 hover:text-white hover:bg-white/5 rounded-xl transition-all">
                          <LayoutDashboard size={16} />
                          <span>Dashboard</span>
                        </div>
                      </Link>
                      <button
                        onClick={() => {
                          logout();
                          setShowDropdown(false);
                        }}
                        className="w-full flex items-center space-x-2 px-4 py-2.5 text-sm text-red-400 hover:bg-red-500/10 rounded-xl transition-colors mt-1"
                      >
                        <LogOut size={16} />
                        <span>Sign Out</span>
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </>
          ) : (
            <>
              <Link href="/login">
                <span className="text-sm font-bold text-gray-400 hover:text-white transition-colors cursor-pointer">Login</span>
              </Link>
              <Link href="/register">
                <span className="px-5 py-2.5 bg-accent-gradient rounded-xl font-black text-xs uppercase tracking-widest text-white hover:shadow-glow-lg transition-all cursor-pointer">Register</span>
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-white bg-white/5 rounded-xl border border-white/10"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-dark-950/95 backdrop-blur-2xl border-t border-white/10 overflow-hidden"
          >
            <div className="p-6 space-y-6">
              {loggedIn ? (
                <>
                  <div className="flex items-center space-x-4 pb-6 border-b border-white/5">
                    <div className="w-12 h-12 rounded-full bg-accent-gradient flex items-center justify-center text-white font-black text-lg shadow-glow-sm">
                      {user.name?.[0]?.toUpperCase() || 'U'}
                    </div>
                    <div>
                      <p className="text-sm font-black text-white">{user.name}</p>
                      <p className="text-xs text-neon-blue font-bold uppercase tracking-widest leading-none mt-1">{role} Studio</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {menus.map((item) => {
                      const Icon = item.icon;
                      const isActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className={`flex flex-col items-center justify-center p-4 rounded-2xl border transition-all space-y-2 ${isActive ? 'bg-neon-blue/10 border-neon-blue text-white shadow-glow-sm' : 'bg-white/5 border-white/5 text-gray-400'}`}>
                            <Icon size={20} />
                            <span className="text-[10px] font-black uppercase tracking-tighter">{item.label}</span>
                          </div>
                        </Link>
                      );
                    })}
                  </div>

                  <button
                    onClick={() => {
                      logout();
                      setMobileMenuOpen(false);
                    }}
                    className="w-full flex items-center justify-center space-x-2 py-4 bg-red-500/10 text-red-400 rounded-2xl border border-red-500/20 font-black text-xs uppercase tracking-widest transition-colors"
                  >
                    <LogOut size={16} />
                    <span>Sign Out</span>
                  </button>
                </>
              ) : (
                <div className="flex flex-col space-y-4">
                  <Link href="/login" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-full py-4 bg-white/5 text-white text-center rounded-2xl font-bold">Login</div>
                  </Link>
                  <Link href="/register" onClick={() => setMobileMenuOpen(false)}>
                    <div className="w-full py-4 bg-accent-gradient text-white text-center rounded-2xl font-black uppercase tracking-widest text-xs">Register</div>
                  </Link>
                </div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
