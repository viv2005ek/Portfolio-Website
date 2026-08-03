import React, { useState, useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface TerminalCommandProps {
  command: string;
  output?: string;
  delay?: number;
  className?: string;
  showFinalCursor?: boolean;
}

export default function TerminalCommand({ command, output, delay = 0, className = '', showFinalCursor = true }: TerminalCommandProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [displayedCommand, setDisplayedCommand] = useState('');
  const [displayedOutput, setDisplayedOutput] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [commandComplete, setCommandComplete] = useState(false);
  const [outputComplete, setOutputComplete] = useState(false);
  const isStartedRef = useRef(false);

  useEffect(() => {
    if (isInView && !isStartedRef.current) {
      isStartedRef.current = true;
      const timer = setTimeout(() => {
        let i = 0;
        const typeCommand = () => {
          if (i < command.length) {
            setDisplayedCommand(command.slice(0, i + 1));
            i++;
            setTimeout(typeCommand, 18); // Typing command faster
          } else {
            setCommandComplete(true);
            if (output) {
              setTimeout(() => {
                let j = 0;
                const typeOutput = () => {
                  if (j < output.length) {
                    setDisplayedOutput(output.slice(0, j + 1));
                    j++;
                    setTimeout(typeOutput, 4); // Typing output faster
                  } else {
                    setOutputComplete(true);
                  }
                };
                typeOutput();
              }, 120); // Faster trigger delay
            } else {
              setOutputComplete(true);
            }
          }
        };
        typeCommand();
      }, delay);

      return () => clearTimeout(timer);
    }
  }, [isInView, command, output, delay]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <motion.div 
      ref={ref}
      className={`font-mono text-xs md:text-sm leading-relaxed ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center text-[#d4af37] min-h-[24px]">
        <span className="text-[#FF5349] mr-2">$</span>
        <span>{displayedCommand}</span>
        <span 
          className="w-2.5 h-4 bg-[#FF5349] inline-block ml-1 transition-opacity duration-75" 
          style={{ opacity: !commandComplete && showCursor ? 1 : 0 }}
        />
      </div>
      {displayedOutput && (
        <div className="text-[#e0e0e0] mt-1 pl-4 whitespace-pre-line min-h-[20px]">
          {displayedOutput}
        </div>
      )}
      {/* Blinking Prompt Cursor at the end of the session */}
      {outputComplete && showFinalCursor && (
        <div className="flex items-center text-[#d4af37] mt-2 border-t border-white/5 pt-2">
          <span className="text-[#FF5349] mr-2">$</span>
          <span 
            className="w-2.5 h-4 bg-[#d4af37] inline-block transition-opacity duration-75" 
            style={{ opacity: showCursor ? 1 : 0 }}
          />
        </div>
      )}
    </motion.div>
  );
}