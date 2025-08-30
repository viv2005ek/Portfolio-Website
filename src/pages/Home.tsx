import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import TerminalCommand from '../components/TerminalCommand';
import NeonCard from '../components/NeonCard';
import { personalInfo, stats } from '../data/portfolio';

export default function Home() {
  const socialCards = [
    {
      title: "GitHub",
      description: `${stats.repositories} repositories`,
      icon: Github,
      href: personalInfo.github,
      glowColor: "#0fff50"
    },
    {
      title: "LinkedIn",
      description: `${stats.followers} followers`,
      icon: Linkedin,
      href: personalInfo.linkedin,
      glowColor: "#0077B5"
    },
   {
  title: "Twitter",
  description: "Follow me on Twitter or X",
  icon: Twitter,
  href: personalInfo.X,
  glowColor: "#ec4899"
}
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20 ">
      <div className="max-w-6xl w-full ">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Terminal Boot Sequence */}
         

          {/* Pixel Art Avatar */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay:.5, type: 'spring', stiffness: 100 }}
          >
         <div className="w-full h-full bg-gradient-to-br from-[#00f7ff] via-[#228B22] to-[#006D77] rounded-full p-1 animate-gradient-xy ">
  <div className="w-full h-full bg-[#0a0a12] rounded-full flex items-center justify-center overflow-hidden group transition-all duration-300 hover:scale-95">
    <img 
      src="/pfp.jpg" 
      alt="Profile Picture"
        loading="eager"
      className="w-full h-full object-cover transition-all duration-500 "
    />
    <div className="absolute inset-0 bg-[#00f7ff] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
  </div>
</div>
            
            {/* CRT Scanlines Effect */}
            <div className="absolute inset-0 rounded-full opacity-30 pointer-events-none">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-0.5 bg-[#00f7ff]"
                  style={{ top: `${i * 12.5}%`, opacity: 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#228B22] via-[#006D77] to-[#000080] bg-clip-text text-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            {personalInfo.name}
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
          >
            {personalInfo.title}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            {[
              { label: "Projects", value: stats.projects },
              { label: "Patents", value: stats.patents },
              { label: "CGPA", value: personalInfo.cgpa },
              { label: "Repos", value: stats.repositories }
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl md:text-3xl font-bold text-[#00f7ff] mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </motion.div>
           <div className="bg-black/40 backdrop-blur-sm border border-[#00f7ff]/40 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">VIVEK_OS v2.0</span>
            </div>
            
            <TerminalCommand 
              command="./welcome.sh" 
              output="Booting VIVEK_OS v2.0...
[✓] AI_DEV_MODE activated
[✓] BLOCKCHAIN_MODULE loaded
[✓] STARTUP_FOUNDER_MODE enabled
[✓] System ready for innovation"
              delay={500}
            />
            
            <TerminalCommand 
              command="whoami" 
              output={personalInfo.title}
              delay={3000}
            />
          </div>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, staggerChildren: 0.2 }}
        >
          {socialCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 3 + index * 0.2 }}
            >
              <NeonCard
                title={card.title}
                description={card.description}
                icon={card.icon}
                href={card.href}
                glowColor={card.glowColor}
                className="h-full"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Bio Section */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
        >
          <div className="bg-black/20 backdrop-blur-sm border border-white/10 rounded-lg p-6 mb-10">
            <p className="text-gray-300 leading-relaxed text-center">
              {personalInfo.bio}
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}