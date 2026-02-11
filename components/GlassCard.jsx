'use client';
import { motion } from 'framer-motion';

export default function GlassCard({ children, className = '', hover = true, ...props }) {
  return (
    <motion.div
      whileHover={hover ? { y: -5 } : {}}
      className={`bg-white/5 border border-white/10 backdrop-blur-md rounded-xl p-6 hover:shadow-glow transition-all duration-300 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
