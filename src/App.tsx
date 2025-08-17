import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Background from './components/Background';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <ScrollToTop />
      <motion.div
        key={location.pathname}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.3 }}
        className="relative z-10"
      >
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resume" element={<Resume />} />
          {/* fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <div className="relative min-h-screen text-white overflow-x-hidden">
        <Background />
        <Navigation />
        <div className='mt-7'>
          <AnimatedRoutes />
        </div>
        {/* Cyberpunk Grid Overlay */}
        <div className="fixed inset-0 pointer-events-none z-0">
          <div className="absolute inset-0 bg-gradient-to-br from-transparent via-[#00f7ff]/5 to-transparent" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_24px,rgba(0,247,255,0.03)_25px,rgba(0,247,255,0.03)_26px,transparent_27px,transparent_74px,rgba(0,247,255,0.03)_75px,rgba(0,247,255,0.03)_76px,transparent_77px),linear-gradient(rgba(0,247,255,0.03)_50%,transparent_50%)] bg-[size:100px_100px]" />
        </div>
      </div>
    </Router>
  );
}

export default App;