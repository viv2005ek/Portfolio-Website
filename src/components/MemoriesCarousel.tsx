/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play, Terminal, Cpu, Database, Wifi } from 'lucide-react';

const MemoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [imagesLoading, setImagesLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const scrollContainerRef = useRef(null);

  const images = [
    "/photo/pic1.webp", "/photo/pic2.webp", "/photo/pic3.webp", "/photo/pic4.webp",
    "/photo/pic5.webp", "/photo/pic6.webp", "/photo/pic7.webp", "/photo/pic8.webp",
    "/photo/pic9.webp", "/photo/pic10.webp", "/photo/pic11.webp", "/photo/pic12.webp",
    "/photo/pic13.webp", "/photo/pic14.webp", "/photo/pic15.webp", "/photo/pic16.webp",
  ];

  // Enhanced Cluster Loading Logic (4 by 4)
  useEffect(() => {
    const loadInClusters = async () => {
      setImagesLoading(true);
      const chunkSize = 4;
      
      for (let i = 0; i < images.length; i += chunkSize) {
        const chunk = images.slice(i, i + chunkSize);
        await Promise.all(chunk.map((src) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.src = src;
            img.onload = () => {
              setLoadedImages(prev => ({ ...prev, [src]: true }));
              resolve();
            };
            img.onerror = () => {
              setLoadedImages(prev => ({ ...prev, [src]: false }));
              resolve();
            };
          });
        }));
        // Update progress bar
        setLoadProgress(((i + chunkSize) / images.length) * 100);
        // Artificial delay for that "loading from disk" aesthetic
        await new Promise(resolve => setTimeout(resolve, 600));
      }
      setImagesLoading(false);
    };

    loadInClusters();
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying || imagesLoading) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [isPlaying, imagesLoading]);

  // Scroll active thumbnail into view
  useEffect(() => {
    if (scrollContainerRef.current) {
      const activeThumb = scrollContainerRef.current.children[currentSlide];
      if (activeThumb) {
        activeThumb.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentSlide]);

  const nextSlide = () => !imagesLoading && setCurrentSlide((prev) => (prev + 1) % images.length);
  const prevSlide = () => !imagesLoading && setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);

  return (
<div className="flex flex-col items-center justify-center 
p-2 px-12 min-h-screen 
bg-black/40 backdrop-blur-xl 
mt-10 border rounded-3xl border-transparent">      {/* Custom Scrollbar Styles */}
      <style>{`
        .cyber-scroll::-webkit-scrollbar { height: 4px; }
        .cyber-scroll::-webkit-scrollbar-track { background: rgba(0, 247, 255, 0.05); }
        .cyber-scroll::-webkit-scrollbar-thumb { 
          background: #00f7ff; 
          box-shadow: 0 0 10px #00f7ff;
          border-radius: 10px;
        }
      `}</style>

      <motion.div
        className="w-full max-w-2xl"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-black/60 backdrop-blur-md border-2 border-[#00f7ff]/40 rounded-xl overflow-hidden shadow-[0_0_30px_rgba(0,247,255,0.15)]">
          
          {/* Header Bar */}
          <div className="bg-[#00f7ff]/10 border-b border-[#00f7ff]/30 p-3 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex space-x-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 animate-pulse" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="h-4 w-px bg-[#00f7ff]/30 mx-2" />
              <Terminal className="w-4 h-4 text-[#00f7ff]" />
              <span className="text-[#00f7ff] font-mono text-xs tracking-tighter uppercase">Memory_Buffer_v2.0</span>
            </div>
            <div className="flex items-center gap-4 text-[#00f7ff]/60">
              <Wifi className="w-3 h-3" />
              <Database className="w-3 h-3" />
              <Cpu className="w-3 h-3 animate-spin-slow" />
            </div>
          </div>

          {/* Main Visualizer */}
          <div className="relative aspect-video bg-black flex items-center justify-center overflow-hidden">
            {/* Background Grid Effect */}
            <div className="absolute inset-0 opacity-10 pointer-events-none" 
                 style={{ backgroundImage: 'linear-gradient(#00f7ff 1px, transparent 1px), linear-gradient(90deg, #00f7ff 1px, transparent 1px)', backgroundSize: '20px 20px' }} 
            />

            <AnimatePresence mode="wait">
              {imagesLoading ? (
                <motion.div 
                  key="loader"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="z-20 text-center"
                >
                  <div className="w-64 h-1 bg-gray-800 rounded-full mb-4 overflow-hidden border border-[#00f7ff]/20">
                    <motion.div 
                      className="h-full bg-[#00f7ff] shadow-[0_0_15px_#00f7ff]"
                      animate={{ width: `${loadProgress}%` }}
                    />
                  </div>
                  <span className="text-[#00f7ff] font-mono text-[10px] tracking-[0.2em] animate-pulse">
                    FETCHING_DATA_CLUSTERS: {Math.round(loadProgress)}%
                  </span>
                </motion.div>
              ) : (
                <motion.div
                  key={currentSlide}
                  className="relative w-full h-full flex items-center justify-center p-3"
                  initial={{ opacity: 0, x: 20, filter: 'blur(10px) brightness(2)' }}
                  animate={{ opacity: 1, x: 0, filter: 'blur(0px) brightness(1)' }}
                  exit={{ opacity: 0, x: -20, filter: 'blur(10px) brightness(0)' }}
                  transition={{ duration: 0.5, ease: "circOut" }}
                >
                  <img 
                    src={images[currentSlide]} 
                    alt="Memory" 
                    className="max-w-full max-h-full object-contain shadow-[0_0_40px_rgba(0,0,0,0.5)] border border-white/5"
                  />
                  
                  {/* Glitch Overlay Effect */}
                  <motion.div 
                    className="absolute inset-0 bg-[#00f7ff]/5 mix-blend-overlay pointer-events-none"
                    animate={{ opacity: [0, 0.2, 0] }}
                    transition={{ repeat: Infinity, duration: 0.1, repeatDelay: 3 }}
                  />
                </motion.div>
              )}
            </AnimatePresence>

            {/* Navigation Overlay */}
            {!imagesLoading && (
              <>
                <button onClick={prevSlide} className="absolute left-4 z-30 p-2 rounded-full bg-black/40 border border-[#00f7ff]/20 text-[#00f7ff] hover:bg-[#00f7ff] hover:text-black transition-all group">
                  <ChevronLeft className="w-6 h-6 group-active:scale-90" />
                </button>
                <button onClick={nextSlide} className="absolute right-4 z-30 p-2 rounded-full bg-black/40 border border-[#00f7ff]/20 text-[#00f7ff] hover:bg-[#00f7ff] hover:text-black transition-all group">
                  <ChevronRight className="w-6 h-6 group-active:scale-90" />
                </button>
              </>
            )}

            {/* Scanning Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-[#00f7ff]/20 shadow-[0_0_15px_#00f7ff] z-10 pointer-events-none animate-scanline" />
          </div>

          {/* Controls Footer */}
          <div className="p-4 bg-black/40 border-t border-[#00f7ff]/20">
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-[10px] text-[#00f7ff]/70">
                STATUS: <span className={isPlaying ? "text-green-400" : "text-yellow-400"}>{isPlaying ? "EXECUTING_LOOP" : "PROCESS_HALTED"}</span>
              </div>
              <button 
                onClick={() => setIsPlaying(!isPlaying)}
                className="flex items-center gap-2 px-4 py-1.5 rounded-md border border-[#00f7ff]/40 bg-[#00f7ff]/5 hover:bg-[#00f7ff]/20 text-[#00f7ff] transition-all"
              >
                {isPlaying ? <Pause size={14} /> : <Play size={14} />}
                <span className="text-[10px] font-bold tracking-widest">{isPlaying ? "PAUSE" : "RESUME"}</span>
              </button>
              <div className="font-mono text-[10px] text-[#00f7ff]/70">
                SLIDE: {String(currentSlide + 1).padStart(2, '0')} / {images.length}
              </div>
            </div>

            {/* Auto-play Progress Bar */}
            <div className="w-full h-0.5 bg-gray-900 rounded-full mb-4 overflow-hidden">
               {isPlaying && !imagesLoading && (
                 <motion.div 
                    key={currentSlide}
                    className="h-full bg-[#00f7ff]"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 4, ease: "linear" }}
                 />
               )}
            </div>

            {/* Fixed Cyber Thumbnail Strip */}
            <div 
              ref={scrollContainerRef}
              className="cyber-scroll flex gap-2 overflow-x-auto pb-2 px-1 transition-all"
            >
              {images.map((src, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentSlide(idx)}
                  className={`relative flex-shrink-0 w-12 h-16 rounded overflow-hidden border-2 transition-all duration-300 ${
                    currentSlide === idx 
                    ? 'border-[#00f7ff] scale-110 shadow-[0_0_10px_#00f7ff] z-10' 
                    : 'border-white/10  hover:grayscale-0 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img src={src} className="w-full h-full object-cover" alt="thumb" />
                  {currentSlide === idx && (
                    <div className="absolute inset-0 border border-[#00f7ff] animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
        
        {/* Footer Technical Metadata */}
        <div className="mt-4 flex justify-between px-2 font-mono text-[8px] text-gray-500 uppercase tracking-widest">
          <span>Cache_Validated: 100%</span>
          <span>Buffer_Stream: Active</span>
          <span>Latency: 14ms</span>
        </div>
      </motion.div>

      {/* Animation Definitions */}
      <style>{`
        @keyframes scanline {
          0% { top: -10%; }
          100% { top: 110%; }
        }
        .animate-scanline {
          animation: scanline 8s linear infinite;
        }
        .animate-spin-slow {
          animation: spin 4s linear infinite;
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
};

export default MemoriesCarousel;