import React, { useEffect, useState, useRef } from 'react';
import { useInView } from 'framer-motion';

interface CounterProps {
  value: string | number;
  duration?: number; // in seconds
}

export default function Counter({ value, duration = 1.2 }: CounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.01 });
  const [currentVal, setCurrentVal] = useState('0');
  const [suffix, setSuffix] = useState('');
  const isStartedRef = useRef(false);

  const strVal = String(value);

  useEffect(() => {
    // Parse numeric parts and suffixes (e.g. "100+", "3.1k+", "5x", "30+")
    const numMatch = strVal.match(/^([0-9.]+)(.*)$/);
    if (numMatch) {
      const numStr = numMatch[1];
      const num = parseFloat(numStr);
      const suf = numMatch[2] || '';
      setSuffix(suf);

      const isFloat = numStr.includes('.');
      const decimalPlaces = isFloat ? numStr.split('.')[1].length : 0;
      
      if (isInView && !isStartedRef.current) {
        isStartedRef.current = true;
        let start = 0;
        const end = num;
        if (start === end) {
          setCurrentVal(end.toFixed(decimalPlaces));
          return;
        }

        const totalFrames = duration * 60; // 60 FPS
        let frame = 0;
        
        const counterInterval = setInterval(() => {
          frame++;
          const progress = frame / totalFrames;
          // Ease-out exponential deceleration
          const easeProgress = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
          
          const currentRaw = start + easeProgress * (end - start);
          const current = currentRaw.toFixed(decimalPlaces);
          setCurrentVal(current);

          if (frame >= totalFrames) {
            clearInterval(counterInterval);
            setCurrentVal(end.toFixed(decimalPlaces));
          }
        }, 1000 / 60);

        return () => clearInterval(counterInterval);
      }
    } else {
      setSuffix(strVal);
      setCurrentVal('');
    }
  }, [isInView, strVal, duration]);

  // Fallback for scrapers / SEO: render complete value directly
  const isServer = typeof window === 'undefined';

  return (
    <span ref={ref} style={{ display: 'inline-block' }}>
      {isServer ? strVal : (isInView ? `${currentVal}${suffix}` : `0${suffix}`)}
    </span>
  );
}
