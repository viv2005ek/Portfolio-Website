import React, { useState, useEffect } from 'react';
import { Cpu, Database, Wifi, Loader2 } from 'lucide-react';

const DeveloperLoadingScreen = ({ onLoaded }: { onLoaded: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [status, setStatus] = useState('Initializing workspace...');
  const [showData, setShowData] = useState(false);
  const [jsonData, setJsonData] = useState<{[key: string]: any} | null>(null);

  useEffect(() => {
    const statusMessages = [
      'Initializing workspace...',
      'Connecting to cloud services...',
      'Fetching user portfolio...',
      'Loading project data...',
      'Compiling components...',
      'Optimizing performance...',
      'Syncing repositories...',
      'Launch sequence complete ✨'
    ];

    const interval = setInterval(() => {
      setProgress(prev => {
        const newProgress = prev + Math.random() * 10 + 5;
        if (newProgress >= 100) {
          clearInterval(interval);
          setTimeout(onLoaded, 1200);
          return 100;
        }
        
        const messageIndex = Math.min(
          Math.floor(newProgress / (100 / statusMessages.length)), 
          statusMessages.length - 1
        );
        setStatus(statusMessages[messageIndex]);
        
        if (newProgress > 55 && !showData) {
          setShowData(true);
          setJsonData({
            developer: {
              name: "Vivek Kumar Garg",
              role: "Developer",
              specialties: ["React", "Node.js", "TypeScript", "BlockChain"],
              experience: "2+ years",
              location: "Jaipur, India",
              status: "Available for opportunities"
            },
            portfolio: {
              projects: 15,
              technologies: 18,
              contributions: 247,
              certifications: 10
            },
            timestamp: new Date().toISOString().split('T')[0]
          });
        }
        
        return newProgress;
      });
    }, 280);

    return () => clearInterval(interval);
  }, [onLoaded, showData]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent overflow-hidden">
      {/* Floating particles */}
      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-indigo-400 rounded-full animate-float opacity-60"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${3 + Math.random() * 2}s`
          }}
        />
      ))}

      {/* Server visualization - hidden on mobile, shown on desktop */}
      <div className="hidden md:block absolute left-8 lg:left-1/4 top-1/2 transform -translate-y-1/2 lg:-translate-x-12">
        <div className="relative group">
          <div className="w-16 h-28 sm:w-20 sm:h-32 md:w-24 md:h-36 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 relative overflow-hidden">
            {/* Holographic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#d4af37]/10 via-transparent to-[#FF5349]/10 animate-hologram"></div>
            
            {/* Status LEDs */}
            <div className="absolute top-3 left-3 space-y-1">
              <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse shadow-lg shadow-emerald-400/50"></div>
              <div className="w-2 h-2 bg-amber-400 rounded-full animate-pulse delay-100 shadow-lg shadow-amber-400/50"></div>
              <div className="w-2 h-2 bg-rose-400 rounded-full animate-pulse delay-200 shadow-lg shadow-rose-400/50"></div>
            </div>
            
            {/* Server activity bars */}
            <div className="absolute bottom-4 left-2 right-2 space-y-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-1 bg-slate-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#d4af37] to-[#FF5349] rounded-full animate-activity"
                    style={{ animationDelay: `${i * 0.2}s` }}
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-lg text-xs text-slate-300 font-mono border border-slate-700 shadow-xl">
            Database
          </div>
        </div>
      </div>

      {/* Data stream visualization - hidden on mobile */}
      <div className="hidden md:block absolute left-1/4 right-1/4 top-1/2 transform -translate-y-1/2 h-px overflow-visible">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-sm animate-data-flow opacity-80"
            style={{
              left: `${i * 15}%`,
              animationDelay: `${i * 0.4}s`,
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#d4af37, #FF5349' : '#ffffff, #d4af37'})`
            }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-sm animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Client visualization - hidden on mobile, shown on desktop */}
      <div className="hidden md:block absolute right-8 lg:right-1/4 top-1/2 transform -translate-y-1/2 lg:translate-x-12">
        <div className="relative group">
          <div className="w-20 h-32 sm:w-24 sm:h-36 md:w-28 md:h-40 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 rounded-xl shadow-2xl border border-slate-600 relative overflow-hidden">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#d4af37]/20 via-[#FF5349]/20 to-[#ffffff]/20 animate-border-glow"></div>
            
            {/* Browser chrome */}
            <div className="absolute top-0 left-0 w-full h-5 bg-slate-700 rounded-t-xl flex items-center px-2 space-x-1 border-b border-slate-600">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            </div>
            
            {/* Screen content */}
            <div className="mt-5 h-full p-2 font-mono text-xs overflow-hidden relative">
                {showData && jsonData ? (
                  <div className="text-white leading-tight animate-type-in font-mono">
                    <div className="text-[#d4af37] mb-1">{'{'}</div>
                    <div className="pl-2 text-[#FF5349]">"developer": {'{'}</div>
                    <div className="pl-4 text-white">"name": "{jsonData.developer.name}"</div>
                    <div className="pl-4 text-white">"role": "{jsonData.developer.role}"</div>
                    <div className="pl-2 text-[#FF5349]">{'}'}</div>
                    <div className="text-[#d4af37]">{'}'}</div>
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-full">
                    <div className="w-8 h-8 border-2 border-[#d4af37] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                )}
            </div>
          </div>
          
          <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 px-3 py-1 bg-slate-900/90 backdrop-blur-sm rounded-lg text-xs text-slate-300 font-mono border border-slate-700 shadow-xl">
            Portfolio
          </div>
        </div>
      </div>

      {/* Main status container - responsive */}
      <div 
        className="relative w-full max-w-sm mx-4 sm:max-w-md md:max-w-lg p-6 sm:p-8 bg-black/80 backdrop-blur-xl rounded-2xl border-2 transition-all duration-500 text-center"
        style={{ 
          borderColor: '#ff730030',
          boxShadow: '0 0 30px rgba(255, 115, 0, 0.15), inset 0 0 15px rgba(255, 115, 0, 0.05)'
        }}
      >
        {/* Holographic scanner effect overlay */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none rounded-2xl">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#ff7300]/30 to-transparent animate-scan opacity-60"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[size:100%_4px,6px_100%] pointer-events-none"></div>
        </div>

        {/* Glowing orb */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-16 h-16 bg-gradient-to-br from-[#ffffff] via-[#d4af37] to-[#FF5349] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,115,0,0.4)] relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <Cpu className="h-8 w-8 text-white relative z-10 animate-spin" style={{ animationDuration: '6s' }} />
              <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/30 to-[#FF5349]/30 rounded-2xl animate-pulse"></div>
            </div>
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-[#ff7300]/40 animate-ping"></div>
          </div>
        </div>
        
        {/* Status text */}
        <div className="text-sm sm:text-base font-mono text-slate-100 mb-6 h-6 sm:h-8 flex items-center justify-center min-h-[1.5rem] sm:min-h-[2rem]">
          <span className="animate-fade-in text-[#d4af37] tracking-wider">&gt; {status}</span>
        </div>
        
        {/* Progress bar with glassmorphism */}
        <div className="w-full h-3.5 bg-slate-900/90 backdrop-blur-sm rounded-full overflow-hidden mb-3 border border-white/5 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-[#ff7300] via-[#d4af37] to-[#FF5349] transition-all duration-300 ease-out relative rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent animate-shimmer rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/30 rounded-full"></div>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-between text-[10px] font-mono text-slate-400">
          <span className="bg-slate-900/60 px-2 py-0.5 rounded border border-white/5">SYS_0%</span>
          <span className={`transition-all duration-300 px-3 py-0.5 rounded font-bold border ${
            progress > 50 
              ? 'text-[#ff7300] bg-[#ff7300]/10 border-[#ff7300]/30 shadow-[0_0_10px_rgba(255,115,0,0.2)]' 
              : 'bg-slate-900/60 border-white/5'
          }`}>
            {Math.round(progress)}%
          </span>
          <span className="bg-slate-900/60 px-2 py-0.5 rounded border border-white/5">LAUNCH_100%</span>
        </div>

        {/* Scrolling technical logs */}
        <div className="mt-6 p-3 bg-black/90 rounded-xl border border-white/10 font-mono text-[10px] text-emerald-400 text-left h-28 overflow-y-auto space-y-1 shadow-inner relative">
          <div className="text-gray-500 mb-1 flex items-center justify-between border-b border-white/5 pb-1">
            <span>[LOG_PIPE: active]</span>
            <span className="animate-pulse text-[#ff7300]">●</span>
          </div>
          <div>&gt; [OK] VIVEK_OS core modules ready</div>
          {progress > 15 && <div>&gt; [ESTABLISHED] Cloud services ping success</div>}
          {progress > 35 && <div>&gt; [OK] Loaded portfolio.ts datasets</div>}
          {progress > 55 && <div>&gt; [SUCCESS] Parsed work experience & certifications</div>}
          {progress > 75 && <div>&gt; [OK] Compiled page routing maps</div>}
          {progress > 90 && <div>&gt; [READY] Launching graphics pipelines...</div>}
          <div className="text-[#ff7300] animate-pulse">&gt; {status}</div>
        </div>
      </div>

      {/* Enhanced animations and styles */}
      <style>{`
        @keyframes scan {
          0% { 
            top: 0%; 
            opacity: 1; 
            box-shadow: 0 0 10px #ff7300;
          }
          50% { 
            opacity: 1; 
            box-shadow: 0 0 20px #ff7300, 0 0 40px #ff7300;
          }
          100% { 
            top: 100%; 
            opacity: 0; 
            box-shadow: 0 0 10px #ff7300;
          }
        }
        
        .animate-scan {
          animation: scan 3s ease-in-out infinite;
        }

        @keyframes data-flow {
          0% { 
            transform: translateX(-100%) scale(0.8) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
            transform: translateX(-50%) scale(1) rotate(180deg); 
          }
          80% { 
            opacity: 1; 
            transform: translateX(200%) scale(1.2) rotate(360deg); 
          }
          100% { 
            transform: translateX(300%) scale(0.6) rotate(540deg); 
            opacity: 0; 
          }
        }
        .animate-data-flow {
          animation: data-flow 3s ease-in-out infinite;
        }
        
        @keyframes shimmer {
          0% { transform: translateX(-200%); }
          100% { transform: translateX(200%); }
        }
        .animate-shimmer {
          animation: shimmer 2.5s infinite;
        }
        
        @keyframes grid-move {
          0% { transform: translate(0, 0); }
          100% { transform: translate(20px, 20px); }
        }
        .animate-grid-move {
          animation: grid-move 8s linear infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); opacity: 0.4; }
          25% { transform: translateY(-10px) rotate(90deg); opacity: 0.8; }
          50% { transform: translateY(-5px) rotate(180deg); opacity: 0.6; }
          75% { transform: translateY(-15px) rotate(270deg); opacity: 0.9; }
        }
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        @keyframes hologram {
          0%, 100% { opacity: 0.3; transform: skewX(0deg); }
          50% { opacity: 0.6; transform: skewX(1deg); }
        }
        .animate-hologram {
          animation: hologram 3s ease-in-out infinite;
        }
        
        @keyframes activity {
          0% { width: 0%; opacity: 0.5; }
          50% { width: 100%; opacity: 1; }
          100% { width: 0%; opacity: 0.5; }
        }
        .animate-activity {
          animation: activity 2s ease-in-out infinite;
        }
        
        @keyframes border-glow {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
        
        @keyframes type-in {
          from { 
            opacity: 0; 
            transform: translateY(10px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-type-in {
          animation: type-in 0.8s ease-out;
        }
        
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(5px); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0); 
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .animate-data-flow {
            animation-duration: 2s;
          }
        }
        
        /* Custom gradient animations for mobile performance */
        @media (max-width: 768px) {
          .animate-hologram {
            animation: none;
          }
          .animate-grid-move {
            animation-duration: 12s;
          }
        }
      `}</style>
    </div>
  );
};

export default DeveloperLoadingScreen;