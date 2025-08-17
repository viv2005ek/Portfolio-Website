import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Home, User, Code, Award, Mail, FileText, Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/', label: 'Home', icon: Home, command: './home.sh' },
  { path: '/about', label: 'About', icon: User, command: './about.sh' },
  { path: '/projects', label: 'Projects', icon: Code, command: './projects.sh' },
  { path: '/skills', label: 'Skills', icon: Award, command: './skills.sh' },
  { path: '/contact', label: 'Contact', icon: Mail, command: './contact.sh' },
  { path: '/resume', label: 'Resume', icon: FileText, command: './resume.sh' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      {/* Mobile Menu Button */}
      <motion.button
        className="fixed top-4 right-4 z-50 md:hidden bg-black/40 backdrop-blur-sm border border-[#00f7ff]/40 rounded-lg p-2"
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.95 }}
      >
        {isOpen ? (
          <X className="w-6 h-6 text-[#00f7ff]" />
        ) : (
          <Menu className="w-6 h-6 text-[#00f7ff]" />
        )}
      </motion.button>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-black/20 backdrop-blur-md border border-white/10 rounded-full px-6 py-3">
        <div className="flex space-x-1">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;

            return (
              <Link key={item.path} to={item.path}>
                <motion.div
                  className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#00f7ff] bg-[#00f7ff]/20'
                      : 'text-gray-300 hover:text-[#00f7ff] hover:bg-white/5'
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
                      className="absolute inset-0 rounded-full border border-[#00f7ff]/60"
                      layoutId="activeTab"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </motion.div>
              </Link>
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
            const isActive = location.pathname === item.path;

            return (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
              >
                <motion.div
                  className={`flex items-center space-x-4 px-6 py-3 rounded-lg text-lg font-medium transition-all duration-300 ${
                    isActive
                      ? 'text-[#00f7ff] bg-[#00f7ff]/20 border border-[#00f7ff]/40'
                      : 'text-gray-300 hover:text-[#00f7ff] hover:bg-white/5'
                  }`}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -50 }}
                  transition={{ delay: index * 0.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon className="w-6 h-6" />
                  <span>{item.label}</span>
                </motion.div>
              </Link>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
