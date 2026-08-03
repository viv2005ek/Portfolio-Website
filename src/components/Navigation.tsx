import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Award, Mail, FileText, Menu, X } from 'lucide-react';

const navItems = [
  { path: '/', label: 'Home', icon: Home, command: './home.sh' },
  { path: '/about', label: 'About', icon: User, command: './about.sh' },
  { path: '/projects', label: 'Projects', icon: Code, command: './projects.sh' },
  { path: '/skills', label: 'Skills', icon: Award, command: './skills.sh' },
  { path: '/contact', label: 'Contact', icon: Mail, command: './contact.sh' },
  { path: '/resume', label: 'Resume', icon: FileText, command: './resume.sh' },
];

interface NavigationProps {
  activeSection: string;
  onSectionClick: (path: string) => void;
}

export default function Navigation({ activeSection, onSectionClick }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 md:hidden bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 rounded-lg p-2"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#d4af37]" />
        ) : (
          <Menu className="w-6 h-6 text-[#d4af37]" />
        )}
      </motion.button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.path;

            return (
              <button 
                key={item.path} 
                onClick={() => onSectionClick(item.path)}
                className="focus:outline-none"
              >
                <motion.div
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#d4af37] bg-[#d4af37]/20'
                      : 'text-gray-300 hover:text-[#d4af37] hover:bg-white/5'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-2">
                    <Icon className="w-4 h-4" />
                    <span className="hidden lg:inline">{item.label}</span>
                  </div>

                  {isActive && (
                    <motion.div
                      className="absolute inset-0 rounded-full border border-[#d4af37]/60"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </button>
            );
          })}
        </div>
      </nav>

      {/* Mobile Navigation */}
      <motion.nav
        className={`fixed inset-0 z-40 md:hidden bg-black/90 backdrop-blur-md ${
          isOpen ? 'pointer-events-auto' : 'pointer-events-none'
        }`}
        initial={{ opacity: 0 }}
        animate={{ opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <div className="flex flex-col items-center justify-center h-full space-y-6">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            const isActive = activeSection === item.path;

            return (
              <button
                key={item.path}
                onClick={() => {
                  setIsOpen(false);
                  onSectionClick(item.path);
                }}
                className="focus:outline-none w-full max-w-[200px]"
              >
                <motion.div
                  className={`flex items-center space-x-4 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#d4af37] bg-[#d4af37]/20 border border-[#d4af37]/40'
                      : 'text-gray-300 hover:text-[#d4af37] hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -50 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                  <span>{item.label}</span>
                </motion.div>
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
