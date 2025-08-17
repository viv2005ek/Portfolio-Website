import React from 'react';
import { motion } from 'framer-motion';

interface GlassPanelProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
}

export default function GlassPanel({ children, className = '', glowColor = '#00f7ff' }: GlassPanelProps) {
  return (
    <motion.div
      className={`relative group ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div 
        className="absolute inset-0 rounded-xl opacity-20 group-hover:opacity-30 transition-opacity duration-300 blur-xl"
        style={{ 
          background: `linear-gradient(135deg, ${glowColor}30, transparent, ${glowColor}20)`
        }}
      />
      
      <div className="relative bg-black/20 backdrop-blur-md border border-white/10 rounded-xl p-6 group-hover:bg-black/30 transition-all duration-300">
        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/5 via-transparent to-white/5" />
        <div className="relative z-10">
          {children}
        </div>
      </div>
    </motion.div>
  );
}