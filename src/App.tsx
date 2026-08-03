import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import SinglePageLayout from './pages/SinglePageLayout';
import LoadingScreen from './pages/LoadingScreen';
import Epic404Page from './pages/Epic404Page';
import CustomCursor from './components/CustomCursor';
import GridBackground from './components/GridBackground';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('/');
  const isScrollingRef = useRef(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleSectionClick = (path: string) => {
    const sectionId = path === '/' ? 'home' : path.replace('/', '');
    const element = document.getElementById(sectionId);
    if (element) {
      isScrollingRef.current = true;
      setActiveSection(path);
      window.history.pushState(null, '', path);
      
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });

      setTimeout(() => {
        isScrollingRef.current = false;
      }, 800);
    } else {
      window.location.href = path;
    }
  };

  return (
    <Router>
      <div className="relative min-h-screen text-white overflow-x-hidden">
        <Background />
        
        {/* Cyberpunk Grid Overlay with moving highlight lines */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#d4af37]/5 to-transparent" />
          <GridBackground />
        </div>

        <CustomCursor activeSection={activeSection} />
        
        <AnimatePresence>
          {isLoading ? (
            <LoadingScreen onLoaded={() => setIsLoading(false)} />
          ) : (
            <>
              <Navigation activeSection={activeSection} onSectionClick={handleSectionClick} />
              <div className='mt-7 relative z-10'>
                <Routes>
                  <Route path="/" element={<SinglePageLayout setActiveSection={setActiveSection} isScrollingRef={isScrollingRef} />} />
                  <Route path="/about" element={<SinglePageLayout setActiveSection={setActiveSection} isScrollingRef={isScrollingRef} />} />
                  <Route path="/projects" element={<SinglePageLayout setActiveSection={setActiveSection} isScrollingRef={isScrollingRef} />} />
                  <Route path="/skills" element={<SinglePageLayout setActiveSection={setActiveSection} isScrollingRef={isScrollingRef} />} />
                  <Route path="/contact" element={<SinglePageLayout setActiveSection={setActiveSection} isScrollingRef={isScrollingRef} />} />
                  <Route path="/resume" element={<SinglePageLayout setActiveSection={setActiveSection} isScrollingRef={isScrollingRef} />} />
                  <Route path="*" element={<Epic404Page />} />
                </Routes>
              </div>
            </>
          )}
        </AnimatePresence>
      </div>
    </Router>
  );
}

export default App;