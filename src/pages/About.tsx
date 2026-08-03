import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Users, Code, FolderOpen } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { personalInfo, workExperience, leadership, achievements, stats } from '../data/portfolio';
import ScrambledText from '../components/ScrambledText';
import Counter from '../components/Counter';

export default function About() {
  const [showAllJobs, setShowAllJobs] = useState(false);
  const [showAllAchievements, setShowAllAchievements] = useState(false);
  const [showAllLeadership, setShowAllLeadership] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const displayedJobs = showAllJobs ? workExperience : workExperience.slice(0, 2);

  const achievementsLimit = isMobile ? 4 : 8;
  const displayedAchievements = showAllAchievements ? achievements : achievements.slice(0, achievementsLimit);

  const leadershipLimit = isMobile ? 2 : 4;
  const displayedLeadership = showAllLeadership ? leadership : leadership.slice(0, leadershipLimit);

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#ffffff] via-[#d4af37] to-[#FF5349] bg-clip-text text-transparent">
            <ScrambledText text="About Me" />
          </h1>
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
              command="cat ~/about.txt"
              output="[PROFILE_ANALYSIS]
Name: Vivek Kumar Garg
Role: Software Developer & Founder
Specialization: Full-Stack Systems, AI Agents, & Distributed Ledger Tech
Key Strengths:
- Founder & Architect of IndoMate (SOS Security App pre-incubated at AIC-MUJ)
- Engineered AI-powered SQL Assistant & Data Lineage platforms at moneyHop (FastAPI/MCP)
- Delivered high-throughput GPU WebGPU compute shaders & WPF DICOM viewers for CFD Japan
- Mentored open-source teams, winning 10+ National & International Hackathons
Current Focus: Building scalable backend architectures & intelligent agents."
              delay={500}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {/* Left Column: Education & GATE Score */}
          <div className="space-y-8">
            {/* Education */}
            <GlassPanel glowColor="#d4af37">
              <div className="flex items-center mb-6">
                <GraduationCap className="w-8 h-8 text-[#d4af37] mr-3" />
                <h2 className="text-2xl font-bold text-[#d4af37]">
                  <ScrambledText text="Education" />
                </h2>
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
                      <span className="text-sm text-[#d4af37] font-bold">{personalInfo.cgpa}/10</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className="bg-gradient-to-r from-[#d4af37] to-[#FF5349] h-2 rounded-full"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${(personalInfo.cgpa / 10) * 100}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3, duration: 1.5 }}
                      />
                    </div>
                  </div>

                  {/* View Transcripts Button */}
                  <div className="mt-6">
                    <a
                      href="https://drive.google.com/file/d/1taMAvdZtzStj0ePYarRr47UdZKqYTTi5/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-transparent text-white border-2 border-[#d4af37] font-medium rounded-lg hover:from-[#d4af37] hover:to-[#FF5349] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#d4af37]/20"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                      View Transcripts
                    </a>
                  </div>
                </div>
              </div>
            </GlassPanel>

            {/* GATE CS 2026 Card */}
            <GlassPanel glowColor="#d4af37">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#d4af37] mr-3" />
                <h2 className="text-2xl font-bold text-[#d4af37]">
                  <ScrambledText text="GATE CS 2026" />
                </h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-black/20 rounded-lg border border-white/10 flex flex-col justify-between">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">Status</span>
                    <span className="text-[#d4af37] font-bold text-sm bg-[#d4af37]/10 px-2 py-0.5 rounded">Qualified</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">All India Rank (AIR)</span>
                    <span className="text-white font-bold text-lg">
                      <Counter value="3839" />
                    </span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-gray-300 text-sm">GATE Score</span>
                    <span className="text-[#d4af37] font-bold text-lg">
                      <Counter value="577" />
                    </span>
                  </div>
                  <p className="text-gray-400 text-xs mt-3 leading-relaxed">
                    Qualified in the Graduate Aptitude Test in Engineering (GATE) 2026 in Computer Science & Information Technology (CS) paper.
                  </p>
                </div>
              </div>
            </GlassPanel>
          </div>

          {/* Right Column: Quick Stats */}
          <div>
            <GlassPanel glowColor="#FF5349" className="h-full">
              <div className="flex items-center mb-6">
                <Award className="w-8 h-8 text-[#FF5349] mr-3" />
                <h2 className="text-2xl font-bold text-[#FF5349]">
                  <ScrambledText text="Quick Stats" />
                </h2>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: "Patents", value: stats.patents },
                  { label: "CGPA", value: `${personalInfo.cgpa}/10` },
                  { label: "Hackathons Won", value: stats.hackathonsWon },
                  { label: "National & International Finals", value: stats.hackathonFinals },
                  { label: "Student Excellence", value: stats.studentExcellence },
                  { label: "Projects", value: stats.projects },
                  { label: "Dean's List", value: `${stats.deansListSemesters}x` },
                  { label: "GitHub Repos", value: stats.repositories },
                  { label: "Certifications", value: stats.certifications },
                  { label: "LinkedIn Followers", value: stats.followers }
                ].map((stat, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-2 md:p-3 bg-black/20 rounded-lg border border-white/10 flex flex-col justify-center min-h-[85px]"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 + 0.05 }}
                  >
                    <div className="text-lg md:text-2xl font-bold text-white font-mono">
                      <Counter value={stat.value} />
                    </div>
                    <div className="text-[10px] md:text-xs text-gray-400 leading-tight font-medium mt-1">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </GlassPanel>
          </div>
        </div>

        {/* Work Experience */}
        <GlassPanel className="mb-8" glowColor="#d4af37">
          <div className="flex items-center mb-6">
            <Code className="w-8 h-8 text-[#d4af37] mr-3" />
            <h2 className="text-2xl font-bold text-[#d4af37]">
              <ScrambledText text="Work Experience" />
            </h2>
          </div>

          <div className="space-y-6">
            {displayedJobs.map((job, index) => (
              <motion.div
                key={index}
                className="border-l-2 border-[#d4af37]/30 pl-6 pb-6"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ delay: index * 0.05 + 0.05 }}
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-semibold text-white">{job.title}</h3>
                  <span className="text-sm text-[#FF5349] bg-[#FF5349]/20 px-2 py-1 rounded">
                    {job.type}
                  </span>
                </div>
                <p className="text-gray-300 mb-2">{job.company}</p>
                <p className="text-gray-400 text-sm mb-3">{job.duration}</p>
                <ul className="space-y-1">
                  {job.description.map((item, i) => (
                    <li key={i} className="text-gray-300 text-sm flex items-start">
                      <span className="text-[#FF5349] mr-2">•</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {workExperience.length > 2 && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllJobs(!showAllJobs)}
                className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] px-4 py-2 rounded border border-[#d4af37]/30 transition-all text-sm font-semibold inline-flex items-center gap-2"
              >
                {showAllJobs ? 'Show Less' : 'View All Work Experience'}
              </button>
            </div>
          )}
        </GlassPanel>

        {/* Achievements */}
        <GlassPanel glowColor="#FF5349">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-5">
            <div className="flex items-center">
              <Award className="w-8 h-8 text-[#FF5349] mr-3" />
              <h2 className="text-2xl font-bold text-[#FF5349]">
                <ScrambledText text="Achievements" />
              </h2>
            </div>
            <button
              onClick={() => window.open("https://drive.google.com/file/d/1nZCN_J9zYBS3nq2mm2x8MbvWwfTYS66g/view", "_blank")}
              className="flex items-center gap-1 text-sm bg-[#FF5349]/20 hover:bg-[#FF5349]/30 text-[#FF5349] py-1.5 px-3 rounded-md transition-colors border border-[#FF5349]/30"
            >
              <FolderOpen className="w-4 h-4" />
              <span>View Certificates</span>
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedAchievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg border border-white/10"
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: index * 0.03 + 0.05 }}
              >
                <div className="w-2 h-2 rounded-full bg-[#FF5349] mt-2 flex-shrink-0" />
                <p className="text-gray-300 text-sm">{achievement}</p>
              </motion.div>
            ))}
          </div>

          {achievements.length > achievementsLimit && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllAchievements(!showAllAchievements)}
                className="bg-[#FF5349]/20 hover:bg-[#FF5349]/30 text-[#FF5349] px-4 py-2 rounded border border-[#FF5349]/30 transition-all text-sm font-semibold inline-flex items-center gap-2"
              >
                {showAllAchievements ? 'Show Less' : 'View All Achievements'}
              </button>
            </div>
          )}
        </GlassPanel>

        {/* Leadership & Community */}
        <GlassPanel className="mb-8 mt-8" glowColor="#d4af37">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-5">
            <div className="flex items-center">
              <Users className="w-8 h-8 text-[#d4af37] mr-3" />
              <h2 className="text-2xl font-bold text-[#d4af37]">
                <ScrambledText text="Leadership & Community" />
              </h2>
            </div>
            <button
              onClick={() => window.open("https://www.linkedin.com/in/vivek-kumar-garg-097677280/details/experience/", "_blank")}
              className="flex items-center gap-1 text-sm bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] py-1.5 px-3 rounded-md transition-colors border border-[#d4af37]/30"
            >
              <FolderOpen className="w-4 h-4" />
              <span>View Experience</span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {displayedLeadership.map((role, index) => (
              <motion.div
                key={index}
                className="bg-black/20 rounded-lg p-4 border border-white/10"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.05 }}
                transition={{ delay: index * 0.03 + 0.05 }}
              >
                <h3 className="font-semibold text-white mb-1">{role.title}</h3>
                <p className="text-gray-300 text-sm mb-1">{role.org}</p>
                <p className="text-gray-400 text-xs">{role.duration}</p>
              </motion.div>
            ))}
          </div>

          {leadership.length > leadershipLimit && (
            <div className="text-center mt-6">
              <button
                onClick={() => setShowAllLeadership(!showAllLeadership)}
                className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] px-4 py-2 rounded border border-[#d4af37]/30 transition-all text-sm font-semibold inline-flex items-center gap-2"
              >
                {showAllLeadership ? 'Show Less' : 'View All Leadership'}
              </button>
            </div>
          )}
        </GlassPanel>
      </div>
    </div>
  );
}