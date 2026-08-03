import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter } from 'lucide-react';
import TerminalCommand from '../components/TerminalCommand';
import NeonCard from '../components/NeonCard';
import { personalInfo, stats } from '../data/portfolio';
import MemoriesCarousel from '../components/MemoriesCarousel';
import { SiHuggingface, SiLeetcode, SiDevdotto } from "react-icons/si";
import ScrambledText from '../components/ScrambledText';
import Counter from '../components/Counter';

export default function Home() {
  const [isAvatarHovered, setIsAvatarHovered] = useState(false);
  const socialCards = [
    {
      title: "GitHub",
      description: `Explore my ${stats.repositories} repositories filled with AI/ML projects, blockchain systems, and data pipelines.`,
      icon: Github,
      href: personalInfo.github,
      glowColor: "#00ff87"
    },
    {
      title: "LinkedIn",
      description: "Professional networking, career updates, and industry connections.",
      icon: Linkedin,
      href: personalInfo.linkedin,
      glowColor: "#00d4ff"
    },
    {
      title: "LeetCode",
      description: "Data Structures & Algorithms problem solving and competitive coding practice.",
      icon: SiLeetcode,
      href: personalInfo.leetcode,
      glowColor: "#ff9f1c"
    },
    {
      title: "Hugging Face",
      description: "Fine-tuned open-source LLM adapters, model weights, and demo Spaces.",
      icon: SiHuggingface,
      href: personalInfo.HF,
      glowColor: "#ffd21e"
    },
    {
      title: "DEV Community",
      description: "Technical blogs, programming tutorials, and developer community articles.",
      icon: SiDevdotto,
      href: personalInfo.devto,
      glowColor: "#a855f7"
    },
    {
      title: "Twitter / X",
      description: "Stay updated with my developer journey, startup builds, and technical insights.",
      icon: Twitter,
      href: personalInfo.X,
      glowColor: "#ec4899"
    }
  ];

  return (
    <div className="min-h-screen flex items-center justify-center p-4 pt-20 ">
      <div className="max-w-6xl w-full ">
        {/* Header Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          {/* Decorative Terminal Line */}
          <motion.div
            className="w-24 h-1 bg-[#d4af37] mx-auto mb-6 rounded-full"
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.4 }}
          />

          {/* Matrix Glitch Rain Effect (Background placeholder) */}
          <motion.div
            className="h-2 w-full max-w-md mx-auto mb-6 relative overflow-hidden bg-black/40 rounded border border-white/5"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
          >
            <div className="absolute inset-0 flex items-center justify-around">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="absolute w-full h-0.5 bg-[#d4af37]"
                  style={{ top: `${i * 12.5}%`, opacity: 0.1 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Pixel Art Avatar */}
          <motion.div
            className="relative w-32 h-32 mx-auto mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05, type: 'spring', stiffness: 120 }}
          >
            <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#d4af37] to-[#FF5349] rounded-full p-1 animate-gradient-xy ">
              <div
                className="w-full h-full bg-[#0a0a12] rounded-full flex items-center justify-center overflow-hidden group transition-all duration-300 cursor-pointer"
                onMouseEnter={() => setIsAvatarHovered(true)}
                onMouseLeave={() => setIsAvatarHovered(false)}
              >
                <img
                  src="/pfp.webp"
                  alt="Profile Picture"
                  loading="eager"
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{ transform: isAvatarHovered ? 'scale(1.5)' : 'scale(1.1)' }}
                />
                <div className="absolute inset-0 bg-[#d4af37] opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-full"></div>
              </div>
            </div>
          </motion.div>

          {/* Name and Title */}
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-[#ffffff] via-[#d4af37] to-[#FF5349] bg-clip-text text-transparent cursor-pointer"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.05 }}
            onMouseEnter={() => setIsAvatarHovered(true)}
            onMouseLeave={() => setIsAvatarHovered(false)}
          >
            <ScrambledText text={personalInfo.name} />
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            {personalInfo.title}
          </motion.p>

          {/* Quick Stats */}
          <motion.div
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-12 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.08 }}
          >
            {[
              { label: "Patents", value: stats.patents },
              { label: "CGPA", value: personalInfo.cgpa },
              { label: "Hackathons Won", value: stats.hackathonsWon },
              { label: "National & International Finals", value: stats.hackathonFinals },
              { label: "Student Excellence", value: stats.studentExcellence },
              { label: "LinkedIn Followers", value: stats.followers }
            ].map((stat, index) => (
              <div key={index} className="text-center p-3 rounded-lg bg-black/20 border border-white/5 backdrop-blur-sm flex flex-col justify-center min-h-[90px]">
                <div className="text-xl md:text-2xl lg:text-3xl font-bold text-[#d4af37] mb-1 font-mono">
                  <Counter value={stat.value} />
                </div>
                <div className="text-[11px] md:text-xs text-gray-400 leading-tight font-medium mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>

          <div className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
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
[✓] PATENT_174068_REGISTERED loaded
[✓] HACKATHON_FINALS_10_PLUS enabled
[✓] INDOMATE_FOUNDER_CORE active
[✓] AI_DEV_MODE & BLOCKCHAIN_MODULE loaded
[✓] System ready for full-stack deployment"
              delay={100}
              showFinalCursor={false}
            />

            <TerminalCommand
              command="whoami"
              output={personalInfo.title}
              delay={250}
            />
          </div>
        </motion.div>

        {/* Social Cards */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ delay: 0.05 }}
        >
          {socialCards.map((card, index) => (
            <motion.div
              key={index}
              className="h-full"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: index * 0.03 + 0.05 }}
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
        <div className='sm:flex justify-center hidden'>  <MemoriesCarousel /></div>


        {/* Bio Section */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.2 }}
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