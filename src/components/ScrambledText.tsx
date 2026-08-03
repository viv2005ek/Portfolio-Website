import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

const chars = '01#$%/\\-+=_?*&^@';

interface ScrambledTextProps {
  text: string;
  className?: string;
  delay?: number;
  triggerOnce?: boolean;
}

export default function ScrambledText({ text, className = '', delay = 0, triggerOnce = true }: ScrambledTextProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: triggerOnce, amount: 0.3 });
  const [displayText, setDisplayText] = useState('');
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (isInView && !isAnimating) {
      let isCancelled = false;
      setIsAnimating(true);
      
      const runAnimation = async () => {
        if (delay > 0) {
          await new Promise((resolve) => setTimeout(resolve, delay));
        }
        
        let iteration = 0;
        const interval = setInterval(() => {
          if (isCancelled) return;
          
          setDisplayText(
            text
              .split('')
              .map((char, index) => {
                if (char === ' ') return ' ';
                if (index < iteration) {
                  return text[index];
                }
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join('')
          );

          if (iteration >= text.length) {
            clearInterval(interval);
            setIsAnimating(false);
          }

          iteration += Math.max(0.5, text.length / 15); // speed of resolution scales with text length
        }, 30);
      };

      runAnimation();

      return () => {
        isCancelled = true;
      };
    } else if (!isInView && !triggerOnce) {
      setDisplayText('');
    }
  }, [isInView, text, delay, triggerOnce]);

  // Fallback: render text normally if not in view but triggerOnce is true (SEO scraper fallback)
  const isServer = typeof window === 'undefined';
  
  return (
    <span ref={ref} className={className}>
      {isServer ? text : (displayText || text.split('').map(() => ' ').join(''))}
    </span>
  );
}
