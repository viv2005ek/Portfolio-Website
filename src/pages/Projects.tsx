import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, ArrowRight, Sparkles, ChevronDown, ArrowUpRight, Twitter, FileText, Tv, Link } from 'lucide-react';
import TerminalCommand from '../components/TerminalCommand';
import { projects, stats, personalInfo } from '../data/portfolio';
import ScrambledText from '../components/ScrambledText';
import { SiDevdotto } from "react-icons/si";

export default function Projects() {
  const [hoveredCard, setHoveredCard] = useState(null);
  const [showAllFeatured, setShowAllFeatured] = useState(false);
  const [showAllOther, setShowAllOther] = useState(false);

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

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
            <ScrambledText text="Projects" />
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
              command="ls ~/projects --stats" 
              output={`[PROJECTS_METRIC_REPORT]
Total Source Repositories: ${stats.repositories} | Full-Stack Applications: ${stats.projects}
Key Deployments:
- IndoMate (SOS Application): Pre-incubated at AIC-MUJ, 1000+ test users
- AI SQL Agent: fastapi-mcp server with schema lineage automation
- CFD DICOM: WPF rendering pipeline processing 500MB+ medical visual frames
- WebGPU Render Engine: Parallel compute shader pipeline via WebGPU
Build Status: All builds passing [OK]`}
              delay={500}
            />
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#d4af37] mb-6 flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {featuredProjects
              .slice(0, showAllFeatured ? undefined : 3)
              .map((project, index) => (
                <ProjectCard 
                  key={index}
                  project={project}
                  index={index}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  isFeatured={true}
                />
              ))}
            
            {/* View More Card for Featured Projects - Show when more than 3 projects */}
            {!showAllFeatured && featuredProjects.length > 3 && (
              <ViewMoreCard 
                count={featuredProjects.length - 3}
                onClick={() => setShowAllFeatured(true)}
                isFeatured={true}
              />
            )}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#FF5349] mb-6">Other Notable Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-start">
            {otherProjects
              .slice(0, showAllOther ? undefined : 3)
              .map((project, index) => (
                <ProjectCard 
                  key={index}
                  project={project}
                  index={index}
                  hoveredCard={hoveredCard}
                  setHoveredCard={setHoveredCard}
                  isFeatured={false}
                />
              ))}
            
            {/* View More Card for Other Projects - Show when more than 3 projects */}
            {!showAllOther && otherProjects.length > 3 && (
              <ViewMoreCard 
                count={otherProjects.length - 3}
                onClick={() => setShowAllOther(true)}
                isFeatured={false}
              />
            )}
          </div>
        </div>

        {/* GitHub Portfolio Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.05 }}
          whileHover={{ y: -8 }}
          className="lg:col-span-3 h-full max-w-2xl mx-auto"
        >
          <div 
            onClick={() => window.open(personalInfo.github, '_blank')}
            onMouseEnter={() => setHoveredCard('github')}
            onMouseLeave={() => setHoveredCard(null)}
            className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl overflow-hidden border border-[#FF5349]/30 hover:border-[#FF5349] transition-all duration-500 p-6 cursor-pointer"
          >
            <div className={`absolute inset-0 bg-gradient-to-br from-[#FF5349]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredCard === 'github' ? 'opacity-100' : ''}`}></div>
            
            <div className="relative z-10 flex flex-col justify-between h-full min-h-[220px]">
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center space-x-3 mb-2">
                    <Github className="w-6 h-6 text-[#FF5349]" />
                    <h3 className="text-xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-400 transition-colors">
                      <ScrambledText text="GitHub Profile" />
                    </h3>
                  </div>
                  <p className="text-gray-400 text-sm max-w-xl">
                    Explore all my repositories, open source contributions, and commit activity history.
                  </p>
                </div>
              </div>

              <div className="font-mono text-sm space-y-1 my-4">
                <div className="text-[#FF5349]">$ git stats --summary</div>
                <div className="text-gray-400">Total Repositories: {stats.repositories}</div>
                <div className="text-gray-400">Contributions: 350+ this year</div>
                <div className="text-gray-400">Status: Active Developer [ONLINE]</div>
              </div>

              <div className="flex items-center mt-6 text-[#FF5349] group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-sm font-semibold mr-2">Explore GitHub</span>
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const ViewMoreCard = ({ count, onClick, isFeatured }) => {
  const glowColor = isFeatured ? '#d4af37' : '#FF5349';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.05 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-fit"
    >
      <div 
        className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-500 p-6 h-fit cursor-pointer border-opacity-40 hover:border-opacity-80"
        style={{ 
          borderColor: glowColor,
          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
        }}
        onClick={onClick}
      >
        {/* Animated background */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at 50% 50%, ${glowColor}15, transparent 70%)`
            }}
          ></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center p-8">
          <motion.div
            className="w-16 h-16 rounded-full border-2 border-dashed flex items-center justify-center mb-4 group-hover:border-solid transition-all duration-300"
            style={{ borderColor: glowColor }}
            whileHover={{ scale: 1.1, rotate: 180 }}
            transition={{ duration: 0.5 }}
          >
            <ChevronDown className="w-8 h-8" style={{ color: glowColor }} />
          </motion.div>
          
          <h3 className="text-xl font-bold text-white mb-2">
            View {count} More Project{count > 1 ? 's' : ''}
          </h3>
          
          <p className="text-gray-300 text-sm mb-4">
            Discover more amazing projects and work
          </p>
          
          <motion.div
            className="px-6 py-2 rounded-full font-semibold text-sm transition-colors duration-300"
            style={{ 
              backgroundColor: `${glowColor}20`,
              color: glowColor,
              border: `1px solid ${glowColor}40`
            }}
            whileHover={{ 
              backgroundColor: `${glowColor}30`,
              borderColor: glowColor
            }}
          >
            Explore More
          </motion.div>
        </div>
        
        {/* Floating dots */}
        {[1, 2, 3].map(i => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: glowColor,
              top: `${20 + (i * 20)}%`,
              left: `${10 + (i * 25)}%`,
              opacity: 0.6
            }}
            animate={{
              y: [0, -8, 0],
              scale: [1, 1.3, 1]
            }}
            transition={{
              duration: 2 + i,
              repeat: Infinity,
              delay: i * 0.3
            }}
          />
        ))}
      </div>
    </motion.div>
  );
};

// Project Card Component
const ProjectCard = ({ project, index, hoveredCard, setHoveredCard, isFeatured }) => {
  const cardId = `project-${index}`;
  const glowColors = isFeatured 
    ? ['#ffffff', '#d4af37', '#FF5349'] 
    : ['#FF5349', '#ffffff', '#d4af37'];
  
  const glowColor = glowColors[index % 3];
  
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [isTagsExpanded, setIsTagsExpanded] = useState(false);
  
  // Determine which link to use as primary
  const getPrimaryLink = () => {
    if (project.links.website) return project.links.website;
    if (project.links.demo) return project.links.demo;
    if (project.links.X) return project.links.X;
    if (project.links.github) return project.links.github;
    if (project.links.dev) return project.links.dev;
    if (project.links.post) return project.links.post;
    if (project.links.presentation) return project.links.presentation;
    if (project.links.customs && project.links.customs.length > 0) return project.links.customs[0].url;
    return '#';
  };
  
  const handleCardClick = () => {
    const link = getPrimaryLink();
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };
  
  // Check if any links are available
  const hasLinks = !!(
    project.links.website || 
    project.links.demo || 
    project.links.X || 
    project.links.github || 
    project.links.dev || 
    project.links.post || 
    project.links.presentation || 
    (project.links.customs && project.links.customs.length > 0)
  );
  
  return (
    <motion.div
      initial={{ opacity: 0, y: isFeatured ? 20 : 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ delay: index * 0.03 + 0.05 }}
      whileHover={{ y: -8 }}
      className="h-fit"
    >
      <div 
        className={`group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden border-2 transition-all duration-500 p-6 h-fit cursor-pointer
          ${hoveredCard === cardId ? 'border-opacity-80' : 'border-opacity-30'}`}
        style={{ 
          borderColor: glowColor,
          boxShadow: hoveredCard === cardId ? 
            `0 0 25px ${glowColor}60, 0 0 50px ${glowColor}20` : 
            '0 4px 14px rgba(0, 0, 0, 0.25)',
          transform: hoveredCard === cardId ? 'translateY(-8px) scale(1.02)' : 'none',
          background: hoveredCard === cardId ? 
            `linear-gradient(135deg, rgba(0, 0, 0, 0.9), rgba(20, 20, 20, 0.9)), radial-gradient(circle at 70% 20%, ${glowColor}15, transparent 300px)` :
            'linear-gradient(135deg, rgba(0, 0, 0, 0.85), rgba(20, 20, 20, 0.85))'
        }}
        onClick={handleCardClick}
        onMouseEnter={() => setHoveredCard(cardId)}
        onMouseLeave={() => setHoveredCard(null)}
      >
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div 
            className="absolute -inset-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
            style={{
              background: `radial-gradient(circle at ${Math.random() * 100}% ${Math.random() * 100}%, ${glowColor}15, transparent 50%)`
            }}
          ></div>
          
          {/* Animated grid pattern */}
          <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-1000"
            style={{
              backgroundImage: `linear-gradient(${glowColor}33 1px, transparent 1px), linear-gradient(90deg, ${glowColor}33 1px, transparent 1px)`,
              backgroundSize: '30px 30px',
              maskImage: 'radial-gradient(ellipse at 50% 50%, black 20%, transparent 70%)'
            }}
          ></div>
        </div>
        
        {/* Floating particles */}
        {[1, 2, 3, 4, 5].map(i => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              backgroundColor: glowColor,
              top: `${15 + (i * 15)}%`,
              left: `${5 + (i * 15)}%`,
              opacity: 0.4
            }}
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{
              duration: 3 + i,
              repeat: Infinity,
              delay: i * 0.5
            }}
          />
        ))}
        
        {/* Content */}
        <div className="relative z-10 h-full flex flex-col">
          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <div className="flex-1 min-w-0">
                <motion.h3 
                  className="text-xl font-bold text-white mb-1 truncate"
                  whileHover={{ color: glowColor }}
                  transition={{ duration: 0.2 }}
                >
                  {project.title}
                </motion.h3>
                {project.subtitle && (
                  <h4 className="text-lg font-semibold text-gray-300 mb-2 opacity-90 group-hover:opacity-100 transition-opacity">
                    {project.subtitle}
                  </h4>
                )}
              </div>
              
              {/* Animated link indicator */}
              <motion.div 
                className={`p-2 rounded-full ${hasLinks ? 'bg-white/10 group-hover:bg-white/20' : 'bg-gray-700/50'} transition-colors`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  animate={{ 
                    scale: hasLinks && hoveredCard === cardId ? [1, 1.2, 1] : 1 
                  }}
                  transition={{ duration: 0.5 }}
                >
                  <ExternalLink className="w-4 h-4 text-white" />
                </motion.div>
              </motion.div>
            </div>
            
            <motion.p 
              className="text-gray-300 text-sm leading-relaxed mb-4 group-hover:text-gray-200 transition-colors"
              initial={{ opacity: 0.8 }}
              whileHover={{ opacity: 1 }}
            >
              {project.description.length > 150 && !isDescExpanded 
                ? `${project.description.slice(0, 150)}...` 
                : project.description}
              {project.description.length > 150 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsDescExpanded(!isDescExpanded);
                  }}
                  className="font-semibold hover:underline ml-1 inline-block text-xs"
                  style={{ color: glowColor }}
                >
                  {isDescExpanded ? 'Show Less' : 'Show More'}
                </button>
              )}
            </motion.p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {(isTagsExpanded ? project.tech : project.tech.slice(0, 4)).map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="font-sora px-3 py-1 text-xs font-medium bg-black/50 border rounded-full text-gray-300 group-hover:text-white transition-colors"
                  style={{ borderColor: `${glowColor}40` }}
                  whileHover={{ 
                    scale: 1.05, 
                    backgroundColor: `${glowColor}20`,
                    borderColor: glowColor,
                    color: '#fff'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  {tech}
                </motion.span>
              ))}
              {project.tech.length > 4 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsTagsExpanded(!isTagsExpanded);
                  }}
                  className="font-sora px-3 py-1 text-xs font-semibold bg-white/10 hover:bg-white/20 border rounded-full transition-all hover:scale-105"
                  style={{ color: glowColor, borderColor: `${glowColor}40` }}
                >
                  {isTagsExpanded ? 'Show Less' : `+${project.tech.length - 4} More`}
                </button>
              )}
            </div>
          </div>
          
          {/* Links with enhanced animation */}
          <motion.div 
            className="flex flex-wrap gap-x-3 gap-y-2 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            {project.links.website && (
              <motion.a
                href={project.links.website}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#d4af37] hover:text-[#d4af37] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#d4af37]/10 group-hover/link:bg-[#d4af37]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">Website</span>
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#FF5349] hover:text-[#FF5349] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#FF5349]/10 group-hover/link:bg-[#FF5349]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">Demo</span>
              </motion.a>
            )}
            {project.links.X && (
              <motion.a
                href={project.links.X}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#00d4ff] hover:text-[#00d4ff] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#00d4ff]/10 group-hover/link:bg-[#00d4ff]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Twitter className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">X</span>
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#ffffff] hover:text-[#ffffff] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#ffffff]/10 group-hover/link:bg-[#ffffff]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">Code</span>
              </motion.a>
            )}
            {project.links.dev && (
              <motion.a
                href={project.links.dev}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#a855f7] hover:text-[#a855f7] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#a855f7]/10 group-hover/link:bg-[#a855f7]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <SiDevdotto className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">Dev</span>
              </motion.a>
            )}
            {project.links.post && (
              <motion.a
                href={project.links.post}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#00a8ff] hover:text-[#00a8ff] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#00a8ff]/10 group-hover/link:bg-[#00a8ff]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <FileText className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">Post</span>
              </motion.a>
            )}
            {project.links.presentation && (
              <motion.a
                href={project.links.presentation}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#10b981] hover:text-[#10b981] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#10b981]/10 group-hover/link:bg-[#10b981]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Tv className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">Presentation</span>
              </motion.a>
            )}
            {project.links.customs && project.links.customs.map((custom, customIndex) => (
              <motion.a
                key={customIndex}
                href={custom.url}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#6366f1] hover:text-[#6366f1] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#6366f1]/10 group-hover/link:bg-[#6366f1]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Link className="w-4 h-4" />
                </motion.div>
                <span className="font-space-grotesk text-sm font-medium">{custom.name}</span>
              </motion.a>
            ))}
            
            {!hasLinks && (
              <div className="flex items-center text-gray-500 text-sm font-space-grotesk">
                <Sparkles className="w-4 h-4 mr-1" />
                Coming soon
              </div>
            )}
          </motion.div>
        </div>
        
        {/* Hover shine effect */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -inset-10 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-[-100%] group-hover:translate-x-[100%]"></div>
        </div>
      </div>
    </motion.div>
  );
};

export { ProjectCard };