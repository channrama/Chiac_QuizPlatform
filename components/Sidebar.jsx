'use client';
import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useAuth } from '../context/AuthContext';
import {
  LayoutDashboard,
  FileText,
  Sparkles,
  FolderOpen,
  Users,
  Settings,
  ChevronDown,
  Menu,
} from 'lucide-react';

export default function Sidebar() {
  const { user, loading } = useAuth();
  const [collapsed, setCollapsed] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');

  if (loading || !user) return null;

  const role = user.role;

  const teacherMenus = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', id: 'dashboard' },
    { icon: FileText, label: 'Create Quiz', href: '/create-quiz', id: 'create' },
    { icon: Sparkles, label: 'AI Generate', href: '/generate-quiz', id: 'ai' },
    { icon: FolderOpen, label: 'My Quizzes', href: '/quiz/my', id: 'my-quizzes' },
    { icon: Users, label: 'Attempts', href: '/reports', id: 'attempts' },
    { icon: Settings, label: 'Settings', href: '#', id: 'settings' },
  ];

  const studentMenus = [
    { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard', id: 'dashboard' },
    { icon: FolderOpen, label: 'My Attempts', href: '/results', id: 'attempts' },
    { icon: Settings, label: 'Settings', href: '#', id: 'settings' },
  ];

  const menus = role === 'teacher' ? teacherMenus : studentMenus;

  return (
    <motion.aside
      animate={{ width: collapsed ? 80 : 280 }}
      className="hidden md:flex flex-col bg-dark-900/50 border-r border-white/10 backdrop-blur-sm h-[calc(100vh-80px)] sticky top-20 z-40"
    >
      {/* Collapse Button */}
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setCollapsed(!collapsed)}
        className="p-4 hover:bg-white/5 transition-colors"
      >
        <Menu size={20} className="text-neon-blue" />
      </motion.button>

      {/* Menu Items */}
      <nav className="flex-1 overflow-y-auto p-3 space-y-2">
        {menus.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.id;

          return (
            <motion.div key={item.id}>
              <Link href={item.href}>
                <motion.div
                  whileHover={{ x: 5 }}
                  onClick={() => setActiveTab(item.id)}
                  className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-250 relative ${isActive
                    ? 'bg-gradient-to-r from-indigo-500/20 to-purple-500/20 text-white'
                    : 'text-gray-400 hover:bg-white/5'
                    }`}
                >
                  <Icon size={20} />
                  {!collapsed && <span className="text-sm font-medium">{item.label}</span>}

                  {isActive && (
                    <motion.div
                      layoutId="sidebar-indicator"
                      className="absolute -right-3 top-1/2 transform -translate-y-1/2 w-1 h-8 bg-neon-blue rounded-full shadow-glow"
                    />
                  )}
                </motion.div>
              </Link>
            </motion.div>
          );
        })}
      </nav>

      {/* Bottom User Info */}
      <div className="p-4 border-t border-white/10">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-3 px-3 py-2 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"
        >
          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white text-sm font-bold">
            {role === 'teacher' ? 'T' : 'S'}
          </div>
          {!collapsed && (
            <div className="text-xs">
              <div className="font-medium text-white">Profile</div>
              <div className="text-gray-400 capitalize">{role}</div>
            </div>
          )}
        </motion.div>
      </div>
    </motion.aside>
  );
}
