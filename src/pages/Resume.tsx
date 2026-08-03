import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, BookOpen, Award, Briefcase, ExternalLink, Lightbulb, GraduationCap, Trophy, Target, Star, Rocket, Medal, Code, FileCheck } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { personalInfo, stats } from '../data/portfolio';

export default function Resume() {
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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ffffff] via-[#d4af37] to-[#FF5349] bg-clip-text text-transparent">
            Resume
          </h1>

          <div className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
            {/* Terminal Header */}
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
              command="vivek --resume --stats"
              output={`[ENGINEERING_METRICS]
Patent Registrations: ${stats.patents} (SOS Security Systems)
Academic Rating: CGPA ${personalInfo.cgpa}/10 | Dean's Honor List: ${stats.deansListSemesters} Semesters
Project Repository Count: ${stats.repositories} repositories | ${stats.projects} deployed
Competitions: 10+ Hackathon Wins & International Finals
Status: Active Developer [SYSTEM_STATE: DISPATCH_READY]`}
              delay={500}
            />
          </div>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Viewer */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.05 }}
            >
              <GlassPanel glowColor="#d4af37">
                <div className="flex items-center justify-between mb-6 flex-col md:flex-row gap-5">
                  <div className="flex items-center">
                    <FileText className="w-6 h-6 text-[#d4af37] mr-3" />
                    <h2 className="text-2xl font-bold text-[#d4af37]">Resume Preview</h2>
                  </div>

                  <div className="flex items-center space-x-4 flex-wrap justify-center gap-4 sm:gap-2">
                    <a
                      href="/Resume.pdf"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 border-2 bg-transparent border-[#d4af37] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Open in New Tab</span>
                    </a>
                    <a
                      href="/Resume.pdf"
                      download="Vivek_Kumar_Garg_Resume.pdf"
                      className="flex items-center space-x-2 bg-gradient-to-r relative right-2 sm:right-0 from-[#d4af37] to-[#FF5349] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <Download className="w-4 h-4" />
                      <span>Download PDF</span>
                    </a>
                  </div>
                </div>

                {/* PDF Embed */}
                <div className="relative w-full h-[600px] bg-black/20 rounded-lg border border-white/10 overflow-hidden hidden md:block">
                  <iframe
                    src="/Resume.pdf#toolbar=0&navpanes=0&scrollbar=0"
                    className="w-full h-full overflow-hidden"
                    title="Resume PDF"
                    style={{
                      border: 'none',
                      overflow: 'hidden',
                      display: 'block'
                    }}
                  />

                  {/* Fallback message - only shows if PDF fails to load */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/40 hidden">
                    <div className="text-center">
                      <FileText className="w-16 h-16 text-[#d4af37] mx-auto mb-4" />
                      <p className="text-white mb-4">Unable to load PDF preview</p>
                      <div className="flex space-x-4 justify-center">
                        <a
                          href="/Resume.pdf"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-[#d4af37] text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Open in New Tab
                        </a>
                        <a
                          href="/Resume.pdf"
                          download
                          className="bg-gradient-to-r from-[#d4af37] to-[#FF5349] text-white px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
                        >
                          Download PDF
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>
            {/* Relevant Coursework (Left Column) */}
            <motion.div
              className="mt-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.08 }}
            >
              <GlassPanel glowColor="#FF5349">
                <div className="flex items-center mb-6">
                  <BookOpen className="w-6 h-6 text-[#FF5349] mr-3" />
                  <h3 className="text-xl font-bold text-[#FF5349]">Relevant Coursework</h3>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm text-[#FF5349]">
                        Core CS & Software
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Data Structures & Algorithms, Design & Analysis of Algorithms (DAA), OOP (Java), Operating Systems, DBMS, Computer Networks, Software Engineering.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg border border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm text-[#FF5349]">
                        AI, ML & Data Science
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Machine Learning, Natural Language Processing (NLP), Computer Vision (CV), Information Retrieval, Recommender Systems, Predictive Analytics, AI & Soft Computing, Statistics & Probability.
                      </p>
                    </div>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg border border-white/10 h-full flex flex-col justify-between">
                    <div>
                      <h4 className="text-white font-semibold mb-2 text-sm text-[#FF5349]">
                        Systems & Security
                      </h4>
                      <p className="text-gray-300 text-xs leading-relaxed">
                        Cryptography, Computer Organization & Architecture, Automata & Compiler Design, Information Storage & Data Protection, UI/UX Design.
                      </p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Terminal Summary */}
            <motion.div
              className="mt-16 max-w-4xl mx-auto hidden lg:block"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.09 }}
            >
              <div className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 rounded-lg p-6">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  </div>
                  <span className="ml-4 text-gray-400 text-sm">resume_terminal</span>
                </div>

                <TerminalCommand
                  command="cat ~/career_objective.txt"
                  output="Mission: Build scalable full-stack applications and high-throughput backend pipelines.
Core Intent: Leverage 2+ years of startup founder (IndoMate) and software engineering internship experience (moneyHop, Cardio Flow Design) to deploy optimized systems utilizing AI models, WebSockets, and WebGPU.

Ready to architect reliable codebases and deliver production-ready software.
Target: System Integration & Optimization [STATUS: READY]"
                  delay={500}
                />
              </div>
            </motion.div>
          </div>

          {/* Quick Stats & Actions */}
          <div className="space-y-4 ">
            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.05 }}
            >
              <GlassPanel glowColor="#FF5349">
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-[#FF5349] mr-3" />
                  <h3 className="text-xl font-bold text-[#FF5349]">Key Highlights</h3>
                </div>

                <div className="space-y-4">
                  {[
                    { label: "Patents", value: stats.patents, icon: Lightbulb },
                    { label: "CGPA", value: `${personalInfo.cgpa}/10`, icon: GraduationCap },
                    { label: "Hackathons Won", value: stats.hackathonsWon, icon: Trophy },
                    { label: "National & International Finals", value: stats.hackathonFinals, icon: Target },
                    { label: "Student Excellence", value: stats.studentExcellence, icon: Star },
                    { label: "Projects", value: stats.projects, icon: Rocket },
                    { label: "Dean's List", value: `${stats.deansListSemesters}x`, icon: Medal },
                    { label: "GitHub Repos", value: stats.repositories, icon: Code },
                    { label: "Certifications", value: stats.certifications, icon: FileCheck }
                  ].map((item, index) => {
                    const IconComponent = item.icon;
                    return (
                      <motion.div
                        key={index}
                        className="flex items-center justify-between p-2 sm:p-3 bg-black/20 rounded-lg border border-white/10 gap-2"
                        initial={{ opacity: 0, y: 5 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.05 + index * 0.03 }}
                      >
                        <div className="flex items-center space-x-2 sm:space-x-3 min-w-0">
                          <IconComponent className="w-4 h-4 text-gray-400 flex-shrink-0" />
                          <span className="text-gray-300 text-xs sm:text-sm truncate sm:overflow-visible">{item.label}</span>
                        </div>
                        <span className="text-[#FF5349] font-bold font-mono text-xs sm:text-sm flex-shrink-0">{item.value}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </GlassPanel>
            </motion.div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.08 }}
            >
              <GlassPanel glowColor="#ff7300">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-[#ff7300] mr-3" />
                  <h3 className="text-xl font-bold text-[#ff7300]">Current Status</h3>
                </div>

                <div className="space-y-4">
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <GraduationCap className="w-4 h-4 text-[#ff7300]" /> Student
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {personalInfo.degree} at {personalInfo.university}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{personalInfo.duration}</p>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Rocket className="w-4 h-4 text-[#ff7300]" /> Founder
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Building IndoMate - SOS Security Application
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Pre-incubated at AIC-MUJ</p>
                  </div>

                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="text-white font-semibold mb-2 flex items-center gap-2">
                      <Briefcase className="w-4 h-4 text-[#ff7300]" /> Open to Opportunities
                    </h4>
                    <p className="text-gray-300 text-sm">
                      Full-stack development, AI/ML, Blockchain projects
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>



            {/* Contact Actions */}
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.1 }}
            >
              <GlassPanel glowColor="#d4af37">
                <h3 className="text-xl font-bold text-[#d4af37] mb-4">Get In Touch</h3>

                <div className="space-y-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block w-full bg-gradient-to-r  from-[#d4af37]  to-[#FF5349] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity text-center"
                  >
                    Email Me
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black/40 border border-[#0077B5]/40 text-[#0077B5] font-bold py-3 px-4 rounded-lg hover:bg-black/60 transition-colors text-center"
                  >
                    LinkedIn
                  </a>
                  <a
                    href={personalInfo.devto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black/40 border border-[#a855f7]/40 text-[#a855f7] font-bold py-3 px-4 rounded-lg hover:bg-black/60 transition-colors text-center"
                  >
                    Dev Community
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black/40 border border-[#FF5349]/40 text-[#FF5349] font-bold py-3 px-4 rounded-lg hover:bg-black/60 transition-colors text-center"
                  >
                    GitHub
                  </a>

                  <a
                    href={personalInfo.X}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black/40 border border-[#ec4899]/40 text-[#ec4899] font-bold py-3 px-4 rounded-lg hover:bg-black/60 transition-colors text-center"
                  >
                    Twitter
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
        {/* Terminal Summary */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto block lg:hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 rounded-lg p-6">
            <div className="flex items-center mb-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <span className="ml-4 text-gray-400 text-sm">resume_terminal</span>
            </div>

            <TerminalCommand
              command="cat ~/career_objective.txt"
              output="Mission: Build scalable full-stack applications and high-throughput backend pipelines.
Core Intent: Leverage 2+ years of startup founder (IndoMate) and software engineering internship experience (moneyHop, Cardio Flow Design) to deploy optimized systems utilizing AI models, WebSockets, and WebGPU.

Ready to architect reliable codebases and deliver production-ready software.
Target: System Integration & Optimization [STATUS: READY]"
              delay={500}
            />
          </div>
        </motion.div>

      </div>
    </div>
  );
}