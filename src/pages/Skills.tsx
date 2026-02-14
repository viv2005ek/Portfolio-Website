import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Server, Wrench, Award, FolderOpen } from 'lucide-react';
import SkillNode from '../components/SkillNode';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { skills, certifications } from '../data/portfolio';

export default function Skills() {
  const skillCategories = [
    { title: 'Frontend', icon: Smartphone, skills: skills.frontend, color: '#00f7ff' },
    { title: 'Backend', icon: Server, skills: skills.backend, color: '#ff00f7' },
    { title: 'Blockchain', icon: Code, skills: skills.blockchain, color: '#0fff50' },
      { title: 'AI / ML', icon: Database, skills: skills.AiMl, color: '#ffaa00' },
    { title: 'Languages', icon: Code, skills: skills.languages, color: '#ffff00' },
    { title: 'Databases', icon: Database, skills: skills.databases, color: '#ff6b6b' },
      { title: 'DevOps', icon: Wrench, skills: skills.DevOps, color: '#8a2be2' },

    { title: 'Tools', icon: Wrench, skills: skills.tools, color: '#4ecdc4' }
  ];

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00f7ff] to-[#0fff50] bg-clip-text text-transparent">
            Skills & Expertise
          </h1>
          
        <div className="bg-black/40 backdrop-blur-sm border border-[#00f7ff]/40 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
  {/* Top bar with buttons and OS name */}
  <div className="flex items-center mb-4">
    <div className="flex space-x-2">
      <div className="w-3 h-3 rounded-full bg-red-500"></div>
      <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
      <div className="w-3 h-3 rounded-full bg-green-500"></div>
    </div>
    <span className="ml-4 text-gray-400 text-sm">VIVEK_OS v2.0</span>
  </div>

  {/* Terminal Command */}
  <TerminalCommand 
    command="./scan_skills.sh --verbose" 
    output={`Scanning technical expertise...
[✓] Frontend Development: Advanced
[✓] Backend Systems: Advanced  
[✓] Blockchain Development: Intermediate+
[✓] AI/ML Integration: Intermediate
[✓] Database Design: Advanced
[✓] DevOps & Tools: Advanced`}
    delay={500}
  />
</div>

        </motion.div>

        {/* Interactive Skill Tree */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-[#00f7ff] mb-8 text-center">Interactive Skill Tree</h2>
          
          <div className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-8 justify-items-center">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center">
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <div 
                    className="w-16 h-16 rounded-full border-2 flex items-center justify-center mb-2 mx-auto"
                    style={{ borderColor: category.color }}
                  >
                    <category.icon className="w-8 h-8" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-sm font-bold text-white">{category.title}</h3>
                </motion.div>
                
                <div className="space-y-4">
                  {category.skills.slice(0, 3).map((skill, skillIndex) => (
                    <SkillNode
                      key={skillIndex}
                      name={skill.name}
                      level={skill.level}
                      color={category.color}
                      delay={categoryIndex * 0.2 + skillIndex * 0.1 + 0.5}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Skills Breakdown */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 1 }}
            >
              <GlassPanel glowColor={category.color}>
                <div className="flex items-center mb-6">
                  <category.icon className="w-6 h-6 mr-3" style={{ color: category.color }} />
                  <h3 className="text-xl font-bold" style={{ color: category.color }}>
                    {category.title}
                  </h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center justify-between">
                      <span className="text-white font-medium">{skill.name}</span>
                      <div className="flex items-center space-x-3">
                        <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                          <motion.div
                            className="h-full rounded-full"
                            style={{ backgroundColor: category.color }}
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: index * 0.1 + skillIndex * 0.1 + 1.5, duration: 1 }}
                          />
                        </div>
                        <span className="text-sm text-gray-400 w-10 text-right">
                          {skill.level}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>
          ))}
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2 }}
        >
          <GlassPanel glowColor="#00f7ff">
           <div className="flex items-center justify-between mb-6 flex-wrap gap-5 ">
  <div className="flex items-center">
    <Award className="w-6 h-6 text-[#00f7ff] mr-3" />
    <h3 className="text-xl font-bold text-[#00f7ff]">Certifications & Achievements</h3>
  </div>
  <button 
    onClick={() => window.open("https://drive.google.com/file/d/1iAb5FU524ZgMxOR5gbedorL5t2vGzX6F/view?usp=sharing", "_blank")}
    className="flex items-center gap-1 text-sm bg-[#00f7ff]/20 hover:bg-[#00f7ff]/30 text-[#00f7ff] py-1 px-2.5 rounded-md transition-colors border border-[#00f7ff]/30"
  >
    <FolderOpen className="w-4 h-4" />
    <span>View Certificates</span>
  </button>
</div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 2.5 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#00f7ff] mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{cert}</p>
                </motion.div>
              ))}
            </div>
          </GlassPanel>
        </motion.div>

        {/* Skills Summary Terminal */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-[#00f7ff]/40 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">skills_terminal</span>
            </div>
            
            <TerminalCommand 
              command="vivek --skills --summary" 
              output="Technical Proficiency Summary:
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Frontend Development    ████████████████████ 95%
Backend Systems         ████████████████████ 90%
Blockchain Development  ████████████████░░░░ 82%
Database Management     ████████████████████ 88%
DevOps & Tools         ████████████████████ 93%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: Ready for full-stack challenges 🚀"
              delay={500}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}