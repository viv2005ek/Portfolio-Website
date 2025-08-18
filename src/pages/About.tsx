import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Code } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { personalInfo, workExperience, leadership, achievements } from '../data/portfolio';

export default function About() {
  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00f7ff] to-[#ff00f7] bg-clip-text text-transparent">
            About Me
          </h1>
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
    command="cat ~/about.txt" 
    output={personalInfo.bio}
    delay={500}
  />
</div>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Education */}
          <GlassPanel glowColor="#00f7ff">
            <div className="flex items-center mb-6">
              <GraduationCap className="w-8 h-8 text-[#00f7ff] mr-3" />
              <h2 className="text-2xl font-bold text-[#00f7ff]">Education</h2>
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">{personalInfo.degree}</h3>
                <p className="text-gray-300 mb-2">{personalInfo.university}</p>
                <p className="text-gray-400 text-sm mb-4">{personalInfo.duration}</p>
                
                {/* CGPA Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-300">CGPA</span>
                    <span className="text-sm text-[#00f7ff] font-bold">{personalInfo.cgpa}/10</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <motion.div
                      className="bg-gradient-to-r from-[#00f7ff] to-[#0fff50] h-2 rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: `${(personalInfo.cgpa / 10) * 100}%` }}
                      transition={{ delay: 1, duration: 1.5 }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </GlassPanel>

          {/* Quick Stats */}
          <GlassPanel glowColor="#ff00f7">
            <div className="flex items-center mb-6">
              <Award className="w-8 h-8 text-[#ff00f7] mr-3" />
              <h2 className="text-2xl font-bold text-[#ff00f7]">Quick Stats</h2>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Projects", value: "15+" },
                { label: "Patents", value: "1" },
                { label: "Dean's List", value: "3x" },
                { label: "Certifications", value: "10+" },
                { label: "GitHub Repos", value: "70+" },
                { label: "LinkedIn Followers", value: "2.3k+" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center p-3 bg-black/20 rounded-lg border border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 + 0.5 }}
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </div>

        {/* Work Experience */}
        <GlassPanel className="mb-8" glowColor="#0fff50">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-[#0fff50] mr-3" />
            <h2 className="text-2xl font-bold text-[#0fff50]">Work Experience</h2>
          </div>
          
          <div className="space-y-6">
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-[#0fff50]/30 pl-6 pb-6"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <span className="text-sm text-[#0fff50] bg-[#0fff50]/20 px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-3">{job.duration}</p>
                <ul className="space-y-1">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-[#0fff50] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
{/* Achievements */}
        <GlassPanel glowColor="#00f7ff">
          <div className="flex items-center mb-6">
            <Award className="w-8 h-8 text-[#00f7ff] mr-3" />
            <h2 className="text-2xl font-bold text-[#00f7ff]">Achievements</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg border border-white/10"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#00f7ff] mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{achievement}</p>
              </motion.div>
            ))}
          </div>
        </GlassPanel>
        {/* Leadership & Community */}
        <GlassPanel className="mb-8" glowColor="#ff00f7">
          <div className="flex items-center mb-6">
            <Users className="w-8 h-8 text-[#ff00f7] mr-3" />
            <h2 className="text-2xl font-bold text-[#ff00f7]">Leadership & Community</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {leadership.map((role, index) => (
              <motion.div
                key={index}
                className="bg-black/20 rounded-lg p-4 border border-white/10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <h3 className="font-semibold text-white mb-1">{role.title}</h3>
                <p className="text-gray-300 text-sm mb-1">{role.org}</p>
                <p className="text-gray-400 text-xs">{role.duration}</p>
              </motion.div>
            ))}
          </div>
        </GlassPanel>

        
      </div>
    </div>
  );
}