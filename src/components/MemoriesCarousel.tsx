import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';

const MemoriesCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [loadedImages, setLoadedImages] = useState({});
  const [imagesLoading, setImagesLoading] = useState(true);

  const images = [
    "/photos/0.jpeg",
    "/photos/1.jpg",
    "/photos/8.jpeg",
    "/photos/9.jpg",
    "/photos/2.jpeg",
    "/photos/3.jpg",
    "/photos/4.jpeg",
    "/photos/5.jpeg",
    "/photos/6.jpeg",
    "/photos/7.jpeg",
  ];

  // Preload images and track loading state
  useEffect(() => {
    setImagesLoading(true);
    const loadPromises = images.map((src, index) => {
      return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => {
          setLoadedImages(prev => ({ ...prev, [src]: true }));
          resolve();
        };
        img.onerror = () => {
          console.warn(`Failed to load image: ${src}`);
          setLoadedImages(prev => ({ ...prev, [src]: false }));
          resolve();
        };
        img.src = src;
      });
    });

    Promise.all(loadPromises).then(() => {
      setImagesLoading(false);
    });
  }, []);

  // Auto-slide effect
  useEffect(() => {
    if (!isPlaying || imagesLoading) return;
    
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [isPlaying, images.length, imagesLoading]);

  const nextSlide = () => {
    if (imagesLoading) return;
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    if (imagesLoading) return;
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToSlide = (index) => {
    if (imagesLoading) return;
    setCurrentSlide(index);
  };

  // Loading animation component
  const LoadingAnimation = () => (
    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-[#00f7ff]/10 via-[#228B22]/10 to-[#006D77]/10 rounded-lg">
      <div className="text-center">
        {/* Animated dots */}
        <div className="flex justify-center space-x-2 mb-4">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-[#00f7ff] rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: i * 0.2,
                ease: "easeInOut"
              }}
            />
          ))}
        </div>
        
        {/* Scanning text effect */}
        <motion.div
          className="relative inline-block"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span className="font-mono text-[#00f7ff] text-lg tracking-wider bg-gradient-to-r from-[#00f7ff] to-[#228B22] bg-clip-text text-transparent">
            LOADING MEMORIES
          </span>
          
          {/* Scanning line effect */}
          <motion.div
            className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-[#00f7ff] to-transparent"
            animate={{
              x: [-100, 100],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </motion.div>
        
        {/* Binary rain effect in background */}
        <div className="absolute inset-0 overflow-hidden rounded-lg pointer-events-none">
          {Array.from({ length: 15 }, (_, i) => (
            <motion.div
              key={i}
              className="absolute text-[#00f7ff]/20 font-mono text-xs"
              style={{
                left: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, 400],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
                ease: "linear"
              }}
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );

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
            onClick={() => !imagesLoading && setIsPlaying(!isPlaying)}
            className={`flex items-center space-x-2 px-3 py-1 rounded-lg border transition-all duration-300 group ${
              imagesLoading 
                ? 'border-gray-500 cursor-not-allowed' 
                : 'border-[#00f7ff]/30 hover:bg-[#00f7ff]/10'
            }`}
            disabled={imagesLoading}
          >
            {imagesLoading ? (
              <motion.div
                className="w-4 h-4 border-2 border-[#00f7ff] border-t-transparent rounded-full"
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              />
            ) : isPlaying ? (
              <Pause className="w-4 h-4 text-[#00f7ff] group-hover:scale-110 transition-transform" />
            ) : (
              <Play className="w-4 h-4 text-[#00f7ff] group-hover:scale-110 transition-transform" />
            )}
            <span className={`text-xs font-mono ${
              imagesLoading ? 'text-gray-500' : 'text-gray-300'
            }`}>
              {imagesLoading ? 'LOADING' : isPlaying ? 'PAUSE' : 'PLAY'}
            </span>
          </button>
        </div>
        
        {/* Main Carousel Container */}
        <div className="relative h-[400px] overflow-hidden rounded-xl border-2 border-gray-700/50 bg-black/30 group">
          {/* Loading State */}
          {imagesLoading && <LoadingAnimation />}
          
          {/* Slides */}
          <AnimatePresence mode="wait">
            {!imagesLoading && (
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
            )}
          </AnimatePresence>

          {/* Navigation Arrows - Disabled during loading */}
          {!imagesLoading && (
            <>
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
            </>
          )}

          {/* Slide Counter */}
          <div className={`absolute bottom-4 left-4 px-3 py-1 rounded-full border font-mono text-xs ${
            imagesLoading 
              ? 'border-gray-500 text-gray-500' 
              : 'border-[#00f7ff]/30 text-[#00f7ff]'
          }`}>
            {imagesLoading ? (
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                --/--
              </motion.span>
            ) : (
              `${String(currentSlide + 1).padStart(2, '0')}/${String(images.length).padStart(2, '0')}`
            )}
          </div>

          {/* CRT Overlay Effect */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 15 }, (_, i) => (
              <div
                key={i}
                className="absolute w-full h-0.5 bg-[#00f7ff]"
                style={{ top: `${i * 6.66}%`, opacity: imagesLoading ? 0.1 : 0.03 }}
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
              disabled={imagesLoading}
              className={`w-3 h-3 rounded-full transition-all duration-300 cursor-pointer ${
                imagesLoading
                  ? 'bg-gray-700 cursor-not-allowed'
                  : index === currentSlide 
                    ? 'bg-[#00f7ff] scale-125 shadow-[0_0_10px_#00f7ff]' 
                    : 'bg-gray-600 hover:bg-[#00f7ff]/70 hover:scale-110'
              }`}
            />
          ))}
        </div>

        {/* Thumbnail Strip */}
        <div className="flex justify-center mt-4 space-x-1 overflow-x-auto py-2">
          {images.map((src, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              disabled={imagesLoading}
              className={`flex-shrink-0 w-8 h-12 rounded border transition-all duration-300 ${
                imagesLoading
                  ? 'border-gray-600 cursor-not-allowed opacity-50'
                  : index === currentSlide 
                    ? 'border-[#00f7ff] scale-110 shadow-[0_0_6px_#00f7ff] border-2' 
                    : 'border-gray-500 hover:border-[#00f7ff]/50 hover:scale-105 border'
              }`}
            >
              <div className="w-full h-full relative">
                {!loadedImages[src] && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div
                      className="w-2 h-2 bg-[#00f7ff] rounded-full"
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                    />
                  </div>
                )}
                <img 
                  src={src} 
                  alt={`Thumb ${index + 1}`}
                  className={`w-full h-full object-contain rounded bg-black/20 ${
                    !loadedImages[src] ? 'opacity-0' : 'opacity-100'
                  }`}
                />
              </div>
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default MemoriesCarousel;