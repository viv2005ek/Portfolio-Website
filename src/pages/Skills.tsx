import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Smartphone, Server, Wrench, Award, FolderOpen, Users, ChevronDown, ChevronUp } from 'lucide-react';
import SkillNode from '../components/SkillNode';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { skills, certifications } from '../data/portfolio';
import ScrambledText from '../components/ScrambledText';

export default function Skills() {
  const [showAllCerts, setShowAllCerts] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [expandedCategories, setExpandedCategories] = useState<Record<number, boolean>>({});

  const toggleCategory = (index: number) => {
    setExpandedCategories(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const certsLimit = isMobile ? 4 : 8;
  const displayedCerts = showAllCerts ? certifications : certifications.slice(0, certsLimit);

  const skillCategories = [
    { title: 'AI / ML', icon: Database, skills: skills.AiMl, color: '#d4af37' },
    { title: 'Backend', icon: Server, skills: skills.backend, color: '#FF5349' },
    { title: 'Frontend', icon: Smartphone, skills: skills.frontend, color: '#ff7300' },
    { title: 'Databases', icon: Database, skills: skills.databases, color: '#d4af37' },
    { title: 'Languages', icon: Code, skills: skills.languages, color: '#FF5349' },

    { title: 'DevOps', icon: Wrench, skills: skills.DevOps, color: '#d4af37' },

    { title: 'Blockchain', icon: Code, skills: skills.blockchain, color: '#FF5349' },
    { title: 'Data Eng', icon: Database, skills: skills.dataEngineering, color: '#ff7300' },
    { title: 'Tools', icon: Wrench, skills: skills.tools, color: '#d4af37' },
    { title: 'Soft Skills', icon: Users, skills: skills.softSkills, color: '#ff7300' }
  ];

  const { leftCol, rightCol } = React.useMemo(() => {
    const left: (typeof skillCategories[0] & { originalIndex: number })[] = [];
    const right: (typeof skillCategories[0] & { originalIndex: number })[] = [];
    let leftHeight = 0;
    let rightHeight = 0;

    skillCategories
      .map((cat, idx) => ({ ...cat, originalIndex: idx }))
      .forEach((category) => {
        const isExpanded = !!expandedCategories[category.originalIndex];
        const numSkills = isExpanded ? category.skills.length : Math.min(category.skills.length, 4);
        const estimatedHeight = 150 + numSkills * 40 + (category.skills.length > 4 ? 40 : 0);

        if (leftHeight <= rightHeight) {
          left.push(category);
          leftHeight += estimatedHeight;
        } else {
          right.push(category);
          rightHeight += estimatedHeight;
        }
      });

    return { leftCol: left, rightCol: right };
  }, [expandedCategories]);

  const renderCategoryCard = (category: typeof skillCategories[0], catIndex: number) => {
    const isExpanded = !!expandedCategories[catIndex];
    const displayedSkills = isExpanded ? category.skills : category.skills.slice(0, 4);
    return (
      <motion.div
        key={catIndex}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ delay: catIndex * 0.03 + 0.05 }}
        className="w-full"
      >
        <GlassPanel glowColor={category.color}>
          <div className="flex items-center mb-6">
            <category.icon className="w-6 h-6 mr-3" style={{ color: category.color }} />
            <h3 className="text-xl font-bold font-oxanium" style={{ color: category.color }}>
              {category.title}
            </h3>
          </div>

          <div className="space-y-4">
            {displayedSkills.map((skill, skillIndex) => (
              <div key={skillIndex} className="flex items-center justify-between">
                <span className="text-white font-medium">{skill.name}</span>
                <div className="flex items-center space-x-3">
                  <div className="w-24 h-2 bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full rounded-full"
                      style={{ backgroundColor: category.color }}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.1, duration: 1 }}
                    />
                  </div>
                  <span className="text-sm text-gray-400 w-10 text-right font-mono">
                    {skill.level}%
                  </span>
                </div>
              </div>
            ))}
          </div>

          {category.skills.length > 4 && (
            <button
              onClick={() => toggleCategory(catIndex)}
              className="mt-6 w-full py-2 bg-white/5 border border-white/10 rounded-lg text-sm text-gray-300 font-semibold flex items-center justify-center gap-2 hover:bg-white/10 hover:text-white transition-all cursor-pointer"
            >
              {isExpanded ? (
                <>
                  <span>Show Less</span>
                  <ChevronUp className="w-4 h-4" />
                </>
              ) : (
                <>
                  <span>View All ({category.skills.length})</span>
                  <ChevronDown className="w-4 h-4" />
                </>
              )}
            </button>
          )}
        </GlassPanel>
      </motion.div>
    );
  };

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
            <ScrambledText text="Skills & Expertise" />
          </h1>

          <div className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 rounded-lg p-6 mb-8 text-left max-w-2xl mx-auto">
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
              output={`Scanning technical modules...
[✓] Frontend Architecture: React, Redux, WPF (C#), Electron, Tailwind CSS
[✓] Backend Architectures: Node.js, Express, FastAPI (Python), REST, WebSockets
[✓] Machine Learning & AI: OpenAI/Gemini SDKs, LangChain, Custom MCP servers
[✓] Databases & ORMs: PostgreSQL, MySQL, Prisma, SQLAlchemy, Oracle PL/SQL
[✓] Web3 & Blockchain: Solidity, Ethers.js, Hardhat, IPFS node configuration
[✓] DevOps & Hosting: Docker, AWS (EC2/Lightsail), Git/GitHub Actions CI/CD`}
              delay={500}
            />
          </div>

        </motion.div>

        {/* Interactive Skill Tree */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-bold text-[#d4af37] mb-8 text-center">Interactive Skill Tree</h2>

          <div className="grid grid-cols-2 min-[380px]:grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-10 gap-3 md:gap-6 lg:gap-8 justify-items-center">
            {skillCategories.map((category, categoryIndex) => (
              <div key={categoryIndex} className="text-center w-full">
                <motion.div
                  className="mb-4"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: categoryIndex * 0.2 }}
                >
                  <div
                    className="w-12 h-12 md:w-16 md:h-16 rounded-full border-2 flex items-center justify-center mb-2 mx-auto"
                    style={{ borderColor: category.color }}
                  >
                    <category.icon className="w-6 h-6 md:w-8 md:h-8" style={{ color: category.color }} />
                  </div>
                  <h3 className="text-xs md:text-sm font-bold text-white truncate px-0.5">{category.title}</h3>
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
        </motion.div>

        {/* Mobile View: Single sequential list */}
        <div className="block md:hidden space-y-8 mb-12 mt-12">
          {skillCategories.map((category, index) => renderCategoryCard(category, index))}
        </div>

        {/* Desktop View: Row-wise Masonry (Two columns of independent flex stacks) */}
        <div className="hidden md:grid grid-cols-2 gap-8 mb-12 mt-12 items-start">
          <div className="flex flex-col gap-8">
            {leftCol.map((category) => renderCategoryCard(category, category.originalIndex))}
          </div>
          <div className="flex flex-col gap-8">
            {rightCol.map((category) => renderCategoryCard(category, category.originalIndex))}
          </div>
        </div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ delay: 0.05 }}
        >
          <GlassPanel glowColor="#d4af37">
            <div className="flex items-center justify-between mb-6 flex-wrap gap-5 ">
              <div className="flex items-center">
                <Award className="w-6 h-6 text-[#d4af37] mr-3" />
                <h3 className="text-xl font-bold text-[#d4af37]">Certifications & Achievements</h3>
              </div>
              <button
                onClick={() => window.open("https://drive.google.com/file/d/1nZCN_J9zYBS3nq2mm2x8MbvWwfTYS66g/view", "_blank")}
                className="flex items-center gap-1 text-sm bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] py-1 px-2.5 rounded-md transition-colors border border-[#d4af37]/30"
              >
                <FolderOpen className="w-4 h-4" />
                <span>View Certificates</span>
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {displayedCerts.map((cert, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-3 p-3 bg-black/20 rounded-lg border border-white/10"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.05 }}
                  transition={{ delay: index * 0.03 + 0.05 }}
                >
                  <div className="w-2 h-2 rounded-full bg-[#d4af37] mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-sm">{cert}</p>
                </motion.div>
              ))}
            </div>

            {certifications.length > certsLimit && (
              <div className="text-center mt-6">
                <button
                  onClick={() => setShowAllCerts(!showAllCerts)}
                  className="bg-[#d4af37]/20 hover:bg-[#d4af37]/30 text-[#d4af37] px-4 py-2 rounded border border-[#d4af37]/30 transition-all text-sm font-semibold inline-flex items-center gap-2"
                >
                  {showAllCerts ? 'Show Less' : 'View All Certifications'}
                </button>
              </div>
            )}
          </GlassPanel>
        </motion.div>

        {/* Skills Summary Terminal */}
        <motion.div
          className="mt-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3 }}
        >
          {/* Terminal Command Output */}
          <div className="bg-black/40 backdrop-blur-sm border border-[#d4af37]/40 rounded-lg p-6">
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
Frontend Architecture   ████████████████████ 95%
Backend Systems         ████████████████████ 90%
Machine Learning / AI   ████████████████████ 92%
Databases & ORMs        ████████████████████ 88%
Web3 & Smart Contracts  ████████████████░░░░ 82%
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Status: Active Developer [SYSTEM_STATE: READY_FOR_DEPLOYMENT]"
              delay={500}
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
}