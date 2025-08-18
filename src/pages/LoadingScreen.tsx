import React, { useState, useEffect } from 'react';

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
          <div className="fixed inset-0 pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00f7ff]/5 to-transparent" />
                <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(0,247,255,0.03)_25px,rgba(0,247,255,0.03)_26px,transparent_27px,transparent_74px,rgba(0,247,255,0.03)_75px,rgba(0,247,255,0.03)_76px,transparent_77px),linear-gradient(rgba(0,247,255,0.03)_50%,transparent_50%)] bg-[size:100px_100px]" />
              </div>
      {/* Animated background grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.1)_1px,transparent_1px)] bg-[size:20px_20px] animate-grid-move"></div>
      </div>

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

      {/* Server visualization - responsive positioning */}
      <div className="absolute left-4 sm:left-8 md:left-1/4 top-1/2 transform -translate-y-1/2 md:transform md:-translate-x-1/2 md:-translate-y-1/2">
        <div className="relative group">
          <div className="w-16 h-28 sm:w-20 sm:h-32 md:w-24 md:h-36 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-xl shadow-2xl border border-slate-600 relative overflow-hidden">
            {/* Holographic effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-transparent to-purple-500/10 animate-hologram"></div>
            
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
                    className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full animate-activity"
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

      {/* Data stream visualization */}
      <div className="absolute left-1/4 right-1/4 top-1/2 transform -translate-y-1/2 h-px overflow-visible">
        {[...Array(6)].map((_, i) => (
          <div 
            key={i}
            className="absolute w-3 h-3 rounded-sm animate-data-flow opacity-80"
            style={{
              left: `${i * 15}%`,
              animationDelay: `${i * 0.4}s`,
              background: `linear-gradient(45deg, ${i % 2 === 0 ? '#06b6d4, #3b82f6' : '#8b5cf6, #ec4899'})`
            }}
          >
            <div className="absolute inset-0 bg-white/20 rounded-sm animate-pulse"></div>
          </div>
        ))}
      </div>

      {/* Client visualization - responsive positioning */}
      <div className="absolute right-4 sm:right-8 md:right-1/4 top-1/2 transform -translate-y-1/2 md:transform md:translate-x-1/2 md:-translate-y-1/2">
        <div className="relative group">
          <div className="w-20 h-32 sm:w-24 sm:h-36 md:w-28 md:h-40 bg-gradient-to-b from-slate-800 via-slate-900 to-slate-950 rounded-xl shadow-2xl border border-slate-600 relative overflow-hidden">
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-cyan-500/20 via-purple-500/20 to-pink-500/20 animate-border-glow"></div>
            
            {/* Browser chrome */}
            <div className="absolute top-0 left-0 w-full h-5 bg-slate-700 rounded-t-xl flex items-center px-2 space-x-1 border-b border-slate-600">
              <div className="w-1.5 h-1.5 bg-red-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            </div>
            
            {/* Screen content */}
            <div className="mt-5 h-full p-2 font-mono text-xs overflow-hidden relative">
              {showData && jsonData ? (
                <div className="text-emerald-400 leading-tight animate-type-in">
                  <div className="text-cyan-400 mb-1">{'{'}</div>
                  <div className="pl-2 text-purple-400">"developer": {'{'}</div>
                  <div className="pl-4 text-emerald-400">"name": "{jsonData.developer.name}"</div>
                  <div className="pl-4 text-emerald-400">"role": "{jsonData.developer.role}"</div>
                  <div className="pl-2 text-purple-400">{'}'}</div>
                  <div className="text-cyan-400">{'}'}</div>
                </div>
              ) : (
                <div className="flex items-center justify-center h-full">
                  <div className="w-8 h-8 border-2 border-indigo-500 border-t-transparent rounded-full animate-spin"></div>
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
      <div className="relative w-full max-w-sm mx-4 sm:max-w-md md:max-w-lg p-6 sm:p-8 bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-slate-700/50 shadow-2xl text-center mt-32 sm:mt-40 md:mt-48">
        {/* Glowing orb */}
        <div className="flex justify-center mb-6">
          <div className="relative">
            <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-cyan-500 via-indigo-600 to-purple-700 rounded-2xl flex items-center justify-center shadow-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-2xl"></div>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-7 w-7 sm:h-8 sm:w-8 text-white relative z-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-2xl animate-pulse"></div>
            </div>
            {/* Pulsing ring */}
            <div className="absolute inset-0 rounded-2xl border-2 border-cyan-500/30 animate-ping"></div>
          </div>
        </div>
        
        {/* Status text */}
        <div className="text-base sm:text-lg font-mono text-slate-100 mb-8 h-6 sm:h-8 flex items-center justify-center min-h-[1.5rem] sm:min-h-[2rem]">
          <span className="animate-fade-in">{status}</span>
        </div>
        
        {/* Progress bar with glassmorphism */}
        <div className="w-full h-3 bg-slate-800/50 backdrop-blur-sm rounded-full overflow-hidden mb-3 border border-slate-700/30 shadow-inner">
          <div 
            className="h-full bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 transition-all duration-500 ease-out relative rounded-full"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer rounded-full"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-transparent to-white/20 rounded-full"></div>
          </div>
        </div>
        
        {/* Progress indicators */}
        <div className="flex justify-between text-xs font-mono text-slate-400">
          <span className="bg-slate-800/50 px-2 py-1 rounded backdrop-blur-sm">0%</span>
          <span className={`transition-all duration-300 px-2 py-1 rounded backdrop-blur-sm ${
            progress > 50 ? 'text-cyan-400 bg-cyan-950/50 shadow-lg shadow-cyan-500/20' : 'bg-slate-800/50'
          }`}>
            {Math.round(progress)}%
          </span>
          <span className="bg-slate-800/50 px-2 py-1 rounded backdrop-blur-sm">100%</span>
        </div>

        {/* Additional loading indicators */}
        <div className="mt-6 flex justify-center space-x-1">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full animate-bounce"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </div>
      </div>

      {/* Enhanced animations and styles */}
      <style jsx>{`
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