import React from 'react';
import { motion } from 'framer-motion';
import { Download, FileText, Award, Briefcase, ExternalLink } from 'lucide-react';
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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00f7ff] to-[#0fff50] bg-clip-text text-transparent">
            Resume
          </h1>
          
        <div className="bg-black/40 backdrop-blur-sm border border-[#00f7ff]/40 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
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
    output={`Patent: ${stats.patents} | Projects: ${stats.projects} | Certifications: ${stats.certifications}
CGPA: ${personalInfo.cgpa}/10 | Dean's List: ${stats.deansListSemesters}x
Status: Ready for new challenges 🚀`}
    delay={500}
  />
</div>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Resume Viewer */}
          <div className="lg:col-span-2">
          <motion.div
  initial={{ opacity: 0, x: -30 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ delay: 0.5 }}
>
  <GlassPanel glowColor="#00f7ff">
    <div className="flex items-center justify-between mb-6 flex-col md:flex-row gap-5">
      <div className="flex items-center">
        <FileText className="w-6 h-6 text-[#00f7ff] mr-3" />
        <h2 className="text-2xl font-bold text-[#00f7ff]">Resume Preview</h2>
      </div>
      
      <div className="flex items-center space-x-4 flex-wrap justify-center gap-4 sm:gap-2">
        <a
          href="/Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 border-2 bg-transparent border-[#00f7ff] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
        >
          <ExternalLink className="w-4 h-4" />
          <span>Open in New Tab</span>
        </a>
        <a
          href="/Resume.pdf"
          download="Vivek_Kumar_Garg_Resume.pdf"
          className="flex items-center space-x-2 bg-gradient-to-r relative right-2 sm:right-0 from-[#00f7ff] to-[#0a3a3e] text-white font-bold py-2 px-4 rounded-lg hover:opacity-90 transition-opacity"
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
          <FileText className="w-16 h-16 text-[#00f7ff] mx-auto mb-4" />
          <p className="text-white mb-4">Unable to load PDF preview</p>
          <div className="flex space-x-4 justify-center">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00f7ff] text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Open in New Tab
            </a>
            <a
              href="/Resume.pdf"
              download
              className="bg-gradient-to-r from-[#00f7ff] to-[#00f7ff] text-black px-4 py-2 rounded-lg hover:opacity-90 transition-opacity"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
    </div>
  </GlassPanel>
</motion.div>
              {/* Terminal Summary */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto hidden lg:block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-[#00f7ff]/40 rounded-lg p-6">
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
              output="Seeking opportunities to leverage my full-stack development skills,
startup experience, and passion for AI/Blockchain technologies to build
innovative solutions that make a real-world impact.

Ready to contribute to cutting-edge projects and grow with a dynamic team.
Let's build the future together! 🚀"
              delay={500}
            />
          </div>
        </motion.div>
          </div>

          {/* Quick Stats & Actions */}
          <div className="space-y-8 ">
            {/* Key Achievements */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <GlassPanel glowColor="#ff00f7">
                <div className="flex items-center mb-6">
                  <Award className="w-6 h-6 text-[#ff00f7] mr-3" />
                  <h3 className="text-xl font-bold text-[#ff00f7]">Key Highlights</h3>
                </div>
                
                <div className="space-y-4">
                  {[
                    { label: "CGPA", value: `${personalInfo.cgpa}/10`, icon: "🎓" },
                    { label: "Patents", value: stats.patents, icon: "💡" },
                    { label: "Projects", value: stats.projects, icon: "🚀" },
                    { label: "Dean's List", value: `${stats.deansListSemesters}x`, icon: "🏆" },
                    { label: "GitHub Repos", value: stats.repositories, icon: "📁" },
                    { label: "Certifications", value: stats.certifications, icon: "📜" }
                  ].map((item, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center justify-between p-3 bg-black/20 rounded-lg border border-white/10"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-gray-300">{item.label}</span>
                      </div>
                      <span className="text-[#ff00f7] font-bold">{item.value}</span>
                    </motion.div>
                  ))}
                </div>
              </GlassPanel>
            </motion.div>

            {/* Current Status */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <GlassPanel glowColor="#0fff50">
                <div className="flex items-center mb-6">
                  <Briefcase className="w-6 h-6 text-[#0fff50] mr-3" />
                  <h3 className="text-xl font-bold text-[#0fff50]">Current Status</h3>
                </div>
                
                <div className="space-y-4">
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="text-white font-semibold mb-2">🎓 Student</h4>
                    <p className="text-gray-300 text-sm">
                      {personalInfo.degree} at {personalInfo.university}
                    </p>
                    <p className="text-gray-400 text-xs mt-1">{personalInfo.duration}</p>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="text-white font-semibold mb-2">🚀 Founder</h4>
                    <p className="text-gray-300 text-sm">
                      Building IndoMate - SOS Security Application
                    </p>
                    <p className="text-gray-400 text-xs mt-1">Pre-incubated at AIC-MUJ</p>
                  </div>
                  
                  <div className="p-4 bg-black/20 rounded-lg border border-white/10">
                    <h4 className="text-white font-semibold mb-2">💼 Open to Opportunities</h4>
                    <p className="text-gray-300 text-sm">
                      Full-stack development, AI/ML, Blockchain projects
                    </p>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Contact Actions */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.1 }}
            >
              <GlassPanel glowColor="#00f7ff">
                <h3 className="text-xl font-bold text-[#00f7ff] mb-4">Get In Touch</h3>
                
                <div className="space-y-3">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="block w-full bg-gradient-to-r  from-[#00f7ff]  to-[#0a3a3e] text-white font-bold py-3 px-4 rounded-lg hover:opacity-90 transition-opacity text-center"
                  >
                    Email Me
                  </a>
                  
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black/40 border border-[#ff00f7]/40 text-[#ff00f7] font-bold py-3 px-4 rounded-lg hover:bg-black/60 transition-colors text-center"
                  >
                    LinkedIn Profile
                  </a>
                  
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-black/40 border border-[#0fff50]/40 text-[#0fff50] font-bold py-3 px-4 rounded-lg hover:bg-black/60 transition-colors text-center"
                  >
                    GitHub Portfolio
                  </a>
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
  {/* Terminal Summary */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto block lg:hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
        >
          <div className="bg-black/40 backdrop-blur-sm border border-[#00f7ff]/40 rounded-lg p-6">
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
              output="Seeking opportunities to leverage my full-stack development skills,
startup experience, and passion for AI/Blockchain technologies to build
innovative solutions that make a real-world impact.

Ready to contribute to cutting-edge projects and grow with a dynamic team.
Let's build the future together! 🚀"
              delay={500}
            />
          </div>
        </motion.div>
      
      </div>
    </div>
  );
}