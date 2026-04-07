import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon, Copy, Check } from 'lucide-react';

interface NeonCardProps {
  title: string;
  description?: string;
  icon?: LucideIcon;
  href?: string;
  className?: string;
  glowColor?: string;
  children?: React.ReactNode;
  onClick?: () => void;
}

export default function NeonCard({
  title,
  description,
  icon: Icon,
  href,
  className = '',
  glowColor = '#00f7ff',
  children,
  onClick
}: NeonCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault();    // stops the anchor from opening the link
    e.stopPropagation();   // prevents card click events
    if (!href) return;
    try {
      await navigator.clipboard.writeText(href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const CardContent = (
    <motion.div
      className={`relative group cursor-pointer ${className}`}
      whileHover={{ scale: 1.02, rotateX: 5, rotateY: 5 }}
      whileTap={{ scale: 0.98 }}
      style={{ perspective: '1000px' }}
      onClick={onClick}
    >
      <div
        className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"
        style={{
          background: `linear-gradient(45deg, ${glowColor}40, ${glowColor}20)`,
          transform: 'scale(1.1)'
        }}
      />

      <div className="relative bg-black/40 backdrop-blur-sm border border-gray-800 rounded-lg p-6 group-hover:border-opacity-60 transition-all duration-300"
        style={{ borderColor: `${glowColor}40` }}>

        {/* Copy button - always visible, matches neon card border color */}
        {href && (
          <button
            onClick={handleCopy}
            className="absolute top-3 right-3 z-10 p-1.5 rounded-md bg-black/30 backdrop-blur-sm transition-all duration-200 hover:bg-black/50 focus:outline-none"
            style={{ border: `1px solid ${glowColor}40` }}
            aria-label="Copy link"
          >
            {copied ? (
              <Check className="w-4 h-4" style={{ color: glowColor }} />
            ) : (
              <Copy className="w-4 h-4" style={{ color: glowColor }} />
            )}
          </button>
        )}

        <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {Icon && (
          <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 group-hover:from-gray-700 group-hover:to-gray-800 transition-all duration-300">
            <Icon
              className="w-6 h-6 transition-colors duration-300"
              style={{ color: glowColor }}
            />
          </div>
        )}

        <h3
          className="text-lg font-bold mb-2 transition-colors duration-300"
          style={{ color: glowColor }}
        >
          {title}
        </h3>

        {description && (
          <p className="text-gray-300 text-sm leading-relaxed mb-4">
            {description}
          </p>
        )}

        {children}

        <div
          className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:w-full"
          style={{ background: `linear-gradient(90deg, ${glowColor}, transparent)` }}
        />
      </div>
    </motion.div>
  );

  if (href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className="block">
        {CardContent}
      </a>
    );
  }

  return CardContent;
}