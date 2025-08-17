import React from 'react';
import { motion } from 'framer-motion';

interface SkillNodeProps {
  name: string;
  level: number;
  color?: string;
  delay?: number;
}

export default function SkillNode({ name, level, color = '#00f7ff', delay = 0 }: SkillNodeProps) {
  return (
    <motion.div
      className="relative group cursor-pointer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, type: 'spring', stiffness: 100 }}
      whileHover={{ scale: 1.1, rotateZ: 5 }}
    >
      <div 
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg"
        style={{ 
          background: `radial-gradient(circle, ${color}60, transparent)`,
          transform: 'scale(1.5)'
        }}
      />
      
      <div className="relative bg-black/40 backdrop-blur-sm border-2 rounded-full w-24 h-24 flex flex-col items-center justify-center group-hover:bg-black/60 transition-all duration-300"
           style={{ borderColor: `${color}60` }}>
        
        <div className="text-xs font-bold text-center px-2" style={{ color }}>
          {name}
        </div>
        
        <div className="w-16 h-1 bg-gray-700 rounded-full mt-2 overflow-hidden">
          <motion.div
            className="h-full rounded-full"
            style={{ backgroundColor: color }}
            initial={{ width: 0 }}
            animate={{ width: `${level}%` }}
            transition={{ delay: delay + 0.5, duration: 1 }}
          />
        </div>
        
        <div className="text-xs mt-1 text-gray-400">
          {level}%
        </div>
      </div>
    </motion.div>
  );
}