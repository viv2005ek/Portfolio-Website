import React, { useState, useEffect } from 'react';

const Epic404Page = () => {
  const [glitchText, setGlitchText] = useState('404');
  const [terminalLines, setTerminalLines] = useState([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [showCursor, setShowCursor] = useState(true);

  const terminalSequence = [
    '> Scanning for requested page...',
    '> ERROR: Page not found in database',
    '> Checking backup servers...',
    '> Connection timeout: 0.00ms',
    '> Initiating recovery protocols...',
    '> CRITICAL: Resource does not exist',
    '> Suggestion: Navigate to homepage',
    '> Status: Ready for new commands'
  ];

  // Glitch effect for 404 text
  useEffect(() => {
    const glitchChars = '!<>-_\\/[]{}—=+*^?#________';
    const interval = setInterval(() => {
      if (Math.random() < 0.1) {
        const original = '404';
        const glitched = original
          .split('')
          .map(char => Math.random() < 0.3 ? glitchChars[Math.floor(Math.random() * glitchChars.length)] : char)
          .join('');
        setGlitchText(glitched);
        setTimeout(() => setGlitchText('404'), 100);
      }
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Terminal typing animation
  useEffect(() => {
    if (currentLineIndex < terminalSequence.length) {
      const timeout = setTimeout(() => {
        setTerminalLines(prev => [...prev, terminalSequence[currentLineIndex]]);
        setCurrentLineIndex(prev => prev + 1);
      }, 800 + Math.random() * 400);

      return () => clearTimeout(timeout);
    }
  }, [currentLineIndex]);

  // Cursor blinking
  useEffect(() => {
    const interval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 600);

    return () => clearInterval(interval);
  }, []);



  return (
    <div className="min-h-screen bg-transparent relative overflow-hidden flex items-center justify-center">
      {/* Cyber Background Effects */}
   

      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:30px_30px] animate-grid-move"></div>
      </div>

      {/* Floating error particles */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-red-400 rounded-full animate-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${4 + Math.random() * 3}s`
          }}
        />
      ))}

      {/* Main Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Giant 404 with glitch effect */}
        <div className="mb-8 relative">
          <div className="text-8xl sm:text-9xl md:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-pink-500 to-purple-600 font-mono relative">
            {glitchText}
            <div className="absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-black text-cyan-400/20 animate-glitch-1">
              404
            </div>
            <div className="absolute inset-0 text-8xl sm:text-9xl md:text-[12rem] font-black text-red-400/20 animate-glitch-2">
              404
            </div>
          </div>
          
          {/* Scanning line effect */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent animate-scan opacity-70"></div>
          </div>
        </div>

        {/* Error message */}
        <div className="mb-8">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 animate-fade-in-up">
            Page Not Found
          </h1>
          <p className="text-lg text-slate-300 animate-fade-in-up delay-200">
            The requested resource could not be located in our servers.
          </p>
        </div>

        {/* Terminal simulation */}
        <div className="mb-8 max-w-2xl mx-auto">
          <div className="bg-slate-900/90 backdrop-blur-sm rounded-xl border border-slate-700/50 shadow-2xl overflow-hidden">
            {/* Terminal header */}
            <div className="bg-slate-800 px-4 py-3 flex items-center space-x-2 border-b border-slate-700">
              <div className="w-3 h-3 bg-red-500 rounded-full"></div>
              <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="ml-4 text-slate-300 text-sm font-mono">error_log.terminal</span>
            </div>
            
            {/* Terminal content */}
            <div className="p-4 h-48 font-mono text-sm overflow-hidden">
              {terminalLines.map((line, index) => (
                <div
                  key={index}
                  className="text-emerald-400 mb-1 animate-type-in opacity-0"
                  style={{
                    animationDelay: `${index * 0.1}s`,
                    animationFillMode: 'forwards'
                  }}
                >
                  {line}
                </div>
              ))}
              {currentLineIndex < terminalSequence.length && (
                <div className="text-emerald-400 mb-1">
                  {showCursor && <span className="text-cyan-400">█</span>}
                </div>
              )}
            </div>
          </div>
        </div>

       

        {/* Status indicators */}
        <div className="mt-12 flex justify-center space-x-8 text-sm font-mono">
          <div className="flex items-center space-x-2 text-red-400">
            <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
            <span>404</span>
          </div>
          <div className="flex items-center space-x-2 text-yellow-400">
            <div className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse delay-100"></div>
            <span>NOT_FOUND</span>
          </div>
          <div className="flex items-center space-x-2 text-cyan-400">
            <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse delay-200"></div>
            <span>SYSTEM_OK</span>
          </div>
        </div>
      </div>

      {/* Holographic UI elements */}
      <div className="absolute top-8 left-8 opacity-60">
        <div className="w-32 h-24 border border-cyan-500/30 rounded-lg bg-cyan-500/5 backdrop-blur-sm animate-hologram">
          <div className="p-3 font-mono text-xs text-cyan-400">
            <div>ERR_CODE: 404</div>
            <div>TIMESTAMP: {new Date().toLocaleTimeString()}</div>
            <div>STATUS: ACTIVE</div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 opacity-60">
        <div className="w-40 h-20 border border-purple-500/30 rounded-lg bg-purple-500/5 backdrop-blur-sm animate-hologram delay-1000">
          <div className="p-3 font-mono text-xs text-purple-400">
            <div>SYSTEM_HEALTH: OPTIMAL</div>
            <div>UPTIME: 99.9%</div>
          </div>
        </div>
      </div>

      {/* Custom Styles */}
      <style jsx>{`
        @keyframes glitch-1 {
          0%, 100% { 
            transform: translate(0); 
            filter: hue-rotate(0deg);
          }
          10% { 
            transform: translate(-2px, 1px); 
            filter: hue-rotate(90deg);
          }
          20% { 
            transform: translate(2px, -1px); 
            filter: hue-rotate(180deg);
          }
          30% { 
            transform: translate(-1px, 2px); 
            filter: hue-rotate(270deg);
          }
          40% { 
            transform: translate(1px, -2px); 
            filter: hue-rotate(360deg);
          }
        }
        
        @keyframes glitch-2 {
          0%, 100% { 
            transform: translate(0); 
            filter: hue-rotate(0deg);
          }
          15% { 
            transform: translate(1px, -1px); 
            filter: hue-rotate(45deg);
          }
          25% { 
            transform: translate(-1px, 1px); 
            filter: hue-rotate(135deg);
          }
          35% { 
            transform: translate(2px, 0px); 
            filter: hue-rotate(225deg);
          }
          45% { 
            transform: translate(-2px, -1px); 
            filter: hue-rotate(315deg);
          }
        }
        
        .animate-glitch-1 {
          animation: glitch-1 0.3s infinite linear alternate-reverse;
        }
        
        .animate-glitch-2 {
          animation: glitch-2 0.3s infinite linear alternate-reverse;
        }

        @keyframes scan {
          0% { 
            top: 0%; 
            opacity: 1; 
            box-shadow: 0 0 20px #00f7ff;
          }
          50% { 
            opacity: 1; 
            box-shadow: 0 0 30px #00f7ff, 0 0 60px #00f7ff;
          }
          100% { 
            top: 100%; 
            opacity: 0; 
            box-shadow: 0 0 20px #00f7ff;
          }
        }
        
        .animate-scan {
          animation: scan 2s ease-in-out infinite;
        }

        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(30px, 30px); }
        }
        
        .animate-grid-move {
          animation: grid-move 10s linear infinite;
        }

        @keyframes float {
          0%, 100% { 
            transform: translateY(0) rotate(0deg); 
            opacity: 0.4; 
          }
          25% { 
            transform: translateY(-15px) rotate(90deg); 
            opacity: 0.8; 
          }
          50% { 
            transform: translateY(-8px) rotate(180deg); 
            opacity: 0.6; 
          }
          75% { 
            transform: translateY(-20px) rotate(270deg); 
            opacity: 0.9; 
          }
        }
        
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }

        @keyframes hologram {
          0%, 100% { 
            opacity: 0.3; 
            transform: skewX(0deg); 
            filter: hue-rotate(0deg);
          }
          33% { 
            opacity: 0.7; 
            transform: skewX(1deg); 
            filter: hue-rotate(120deg);
          }
          66% { 
            opacity: 0.5; 
            transform: skewX(-1deg); 
            filter: hue-rotate(240deg);
          }
        }
        
        .animate-hologram {
          animation: hologram 4s ease-in-out infinite;
        }

        @keyframes type-in {
          from { 
            opacity: 0; 
            transform: translateX(-10px); 
          }
          to { 
            opacity: 1; 
            transform: translateX(0); 
          }
        }
        
        .animate-type-in {
          animation: type-in 0.6s ease-out forwards;
        }

        @keyframes fade-in-up {
          from { 
            opacity: 0; 
            transform: translateY(30px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .delay-200 {
          animation-delay: 0.2s;
        }

        .delay-500 {
          animation-delay: 0.5s;
        }

        .delay-1000 {
          animation-delay: 1s;
        }

        /* Matrix rain effect */
        @keyframes matrix-rain {
          0% { 
            transform: translateY(-100vh); 
            opacity: 0; 
          }
          10% { 
            opacity: 1; 
          }
          90% { 
            opacity: 1; 
          }
          100% { 
            transform: translateY(100vh); 
            opacity: 0; 
          }
        }

        .animate-matrix-rain {
          animation: matrix-rain 3s linear infinite;
        }

        /* Button hover effects */
        .group:hover .group-hover\\:animate-pulse {
          animation: pulse 1s infinite;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-glitch-1,
          .animate-glitch-2 {
            animation-duration: 0.5s;
          }
        }
      `}</style>

      {/* Matrix rain effect */}
      {[...Array(8)].map((_, i) => (
        <div
          key={`matrix-${i}`}
          className="absolute text-green-400 font-mono text-sm opacity-30 animate-matrix-rain"
          style={{
            left: `${10 + i * 12}%`,
            animationDelay: `${i * 0.7}s`,
            animationDuration: `${2 + Math.random() * 2}s`
          }}
        >
          {Array.from({ length: 15 }, (_, j) => (
            <div key={j} className="mb-1">
              {Math.random() > 0.5 ? '1' : '0'}
            </div>
          ))}
        </div>
      ))}

      {/* Holographic UI frame */}
      <div className="absolute inset-8 border border-cyan-500/20 rounded-3xl pointer-events-none animate-hologram">
        <div className="absolute top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-cyan-500/40 rounded-tl-lg"></div>
        <div className="absolute top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-cyan-500/40 rounded-tr-lg"></div>
        <div className="absolute bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-cyan-500/40 rounded-bl-lg"></div>
        <div className="absolute bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-cyan-500/40 rounded-br-lg"></div>
      </div>

      {/* Cyber circuit lines */}
      <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent animate-pulse"></div>
      <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent animate-pulse delay-1000"></div>
      <div className="absolute left-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-pink-500/50 to-transparent animate-pulse delay-500"></div>
      <div className="absolute right-1/4 top-0 w-px h-full bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent animate-pulse delay-1500"></div>
    </div>
  );
};

export default Epic404Page;