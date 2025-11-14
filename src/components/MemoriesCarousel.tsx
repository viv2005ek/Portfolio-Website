import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const MemoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const images = [
    "/photos/0.jpeg",
    "/photos/1.jpg",
    "/photos/8.jpeg",
    "/photos/2.jpeg",
    "/photos/3.jpg",
    "/photos/4.jpeg",
    "/photos/5.jpeg",
    "/photos/6.jpeg",
    "/photos/7.jpeg",
    
  ];

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <motion.div
      className="mt-12 max-w-4xl mx-auto"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.5 }}
    >
      <div className="bg-black/40 backdrop-blur-sm w-[600px] border border-[#00f7ff]/30 rounded-lg p-6">
        {/* Window Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="ml-4 text-gray-300 font-mono text-sm">memories.exe</span>
          </div>
          
          {/* Play/Pause Button */}
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="flex items-center space-x-2 px-3 py-1 rounded-lg border border-[#00f7ff]/30 hover:bg-[#00f7ff]/10 transition-all duration-300 group"
          >
            {isPlaying ? (
              <Pause className="w-4 h-4 text-[#00f7ff] group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-4 h-4 text-[#00f7ff] group-hover:scale-110 transition-transform" />
            )}
            <span className="text-xs text-gray-300 font-mono">
              {isPlaying ? 'PAUSE' : 'PLAY'}
            </span>
          </button>
        </div>
        
        {/* Main Carousel Container */}
        <div className="relative h-[400px]  overflow-hidden rounded-xl border-2 border-gray-700/50 bg-black/30 group">
          {/* Slides */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              className="absolute inset-0 p-4"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              <div className="h-full bg-gradient-to-br from-[#00f7ff]/20 via-[#228B22]/20 to-[#006D77]/20 rounded-lg p-2">
                <img 
                  src={images[currentSlide]} 
                  alt={`Memory ${currentSlide + 1}`}
                  className="w-full h-full object-contain rounded-md shadow-2xl bg-black/20"
                />
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full border border-[#00f7ff]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:border-[#00f7ff]"
          >
            <ChevronLeft className="w-5 h-5 text-[#00f7ff]" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/60 hover:bg-black/80 p-3 rounded-full border border-[#00f7ff]/30 opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:border-[#00f7ff]"
          >
            <ChevronRight className="w-5 h-5 text-[#00f7ff]" />
          </button>

          {/* Slide Counter */}
          <div className="absolute bottom-4 left-4 bg-black/60 px-3 py-1 rounded-full border border-[#00f7ff]/30">
            <span className="text-xs text-[#00f7ff] font-mono">
              {String(currentSlide + 1).padStart(2, '0')}/{String(images.length).padStart(2, '0')}
            </span>
          </div>

          {/* CRT Overlay Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="absolute w-full h-0.5 bg-[#00f7ff]"
                style={{ top: `${i * 6.66}%`, opacity: 0.03 }}
              />
            ))}
          </div>
        </div>
        
        {/* Navigation Dots */}
        <div className="flex justify-center mt-6 space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                index === currentSlide 
                  ? 'bg-[#00f7ff] scale-125 shadow-[0_0_10px_#00f7ff]' 
                  : 'bg-gray-600 hover:bg-[#00f7ff]/70 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip - DECREASED WIDTH */}
        <div className="flex justify-center mt-4 space-x-1 overflow-x-auto py-2">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`flex-shrink-0 w-8 h-12 rounded border transition-all duration-300 ${
                index === currentSlide 
                  ? 'border-[#00f7ff] scale-110 shadow-[0_0_6px_#00f7ff] border-2' 
                  : 'border-gray-500 hover:border-[#00f7ff]/50 hover:scale-105 border'
              }`}
            >
              <img 
                src={src} 
                alt={`Thumb ${index + 1}`}
                className="w-full h-full object-contain rounded bg-black/20"
              />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MemoriesCarousel;