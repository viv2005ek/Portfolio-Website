import React, { useEffect } from 'react';
import Home from './Home';
import About from './About';
import Projects from './Projects';
import Skills from './Skills';
import Contact from './Contact';
import Resume from './Resume';

interface SinglePageLayoutProps {
  setActiveSection: (path: string) => void;
  isScrollingRef: React.MutableRefObject<boolean>;
}

export default function SinglePageLayout({ setActiveSection, isScrollingRef }: SinglePageLayoutProps) {
  
  // 1. Handle initial scroll based on URL path on mount
  useEffect(() => {
    const path = window.location.pathname;
    if (path !== '/') {
      const sectionId = path.replace('/', '');
      const element = document.getElementById(sectionId);
      if (element) {
        const timer = setTimeout(() => {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'auto' });
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, []);

  // 2. Setup scroll observer to update active tab & URL path
  useEffect(() => {
    const sectionIds = ['home', 'about', 'projects', 'skills', 'contact', 'resume'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -50% 0px', // focused strip in middle-top
      threshold: 0
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (isScrollingRef.current) return;

      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.id;
          const newPath = sectionId === 'home' ? '/' : `/${sectionId}`;
          
          setActiveSection(newPath);
          window.history.replaceState(null, '', newPath);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [setActiveSection, isScrollingRef]);

  return (
    <div className="flex flex-col">
      <section id="home"><Home /></section>
      <section id="about"><About /></section>
      <section id="projects"><Projects /></section>
      <section id="skills"><Skills /></section>
      <section id="contact"><Contact /></section>
      <section id="resume"><Resume /></section>
    </div>
  );
}
