import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

interface TerminalCommandProps {
  command: string;
  output?: string;
  delay?: number;
  className?: string;
}

export default function TerminalCommand({ command, output, delay = 0, className = '' }: TerminalCommandProps) {
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [commandComplete, setCommandComplete] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      let i = 0;
      const typeCommand = () => {
        if (i < command.length) {
          setDisplayedCommand(command.slice(0, i + 1));
          i++;
          setTimeout(typeCommand, 50);
        } else {
          setCommandComplete(true);
          if (output) {
            setTimeout(() => {
              let j = 0;
              const typeOutput = () => {
                if (j < output.length) {
                  setDisplayedOutput(output.slice(0, j + 1));
                  j++;
                  setTimeout(typeOutput, 20);
                }
              };
              typeOutput();
            }, 300);
          }
        }
      };
      typeCommand();
    }, delay);

    return () => clearTimeout(timer);
  }, [command, output, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div 
      className={`font-mono text-sm md:text-base ${className}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: delay / 1000 }}
    >
      <div className="flex items-center text-[#0fff50]">
        <span className="text-[#00f7ff] mr-2">$</span>
        <span>{displayedCommand}</span>
        {!commandComplete && showCursor && (
          <span className="bg-[#00f7ff] text-[#0a0a12] ml-1 animate-pulse">█</span>
        )}
      </div>
      {displayedOutput && (
        <div className="text-[#e0e0e0] mt-1 pl-4 whitespace-pre-line">
          {displayedOutput}
        </div>
      )}
    </motion.div>
  );
}