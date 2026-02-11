'use client';
import { motion } from 'framer-motion';

export default function SkeletonLoader() {
  return (
    <motion.div
      animate={{ backgroundPosition: ['0% 0%', '100% 0%', '0% 0%'] }}
      transition={{ duration: 2, repeat: Infinity }}
      className="bg-gradient-to-r from-white/5 via-white/10 to-white/5 rounded-lg h-full min-h-12 animate-shimmer"
    />
  );
}
