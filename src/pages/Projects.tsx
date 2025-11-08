import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code, ArrowRight, Sparkles, ChevronDown } from 'lucide-react';
import TerminalCommand from '../components/TerminalCommand';
import { projects, stats, personalInfo } from '../data/portfolio';

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
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00f7ff] to-[#0fff50] bg-clip-text text-transparent">
            Projects
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
              command="ls ~/projects --stats" 
              output={`${stats.repositories} repositories | ${stats.projects} full-stack projects
Development tools and open-source contributions
Building the future, one commit at a time`}
              delay={500}
            />
          </div>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#00f7ff] mb-6 flex items-center">
            <Code className="w-6 h-6 mr-2" />
            Featured Projects
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          <h2 className="text-2xl font-bold text-[#ff00f7] mb-6">Other Notable Projects</h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <div 
            className="group relative bg-gradient-to-br from-black to-gray-900 rounded-xl overflow-hidden border border-[#0fff50]/30 hover:border-[#0fff50] transition-all duration-500 p-6 cursor-pointer"
            onClick={() => window.open(personalInfo.github, '_blank')}
            onMouseEnter={() => setHoveredCard('github')}
            onMouseLeave={() => setHoveredCard(null)}
          >
            {/* Glow effect */}
            <div className={`absolute inset-0 bg-gradient-to-br from-[#0fff50]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${hoveredCard === 'github' ? 'opacity-100' : ''}`}></div>
            
            {/* Content */}
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-white">Complete GitHub Portfolio</h3>
                <Github className="w-6 h-6 text-[#0fff50]" />
              </div>
              
              <p className="text-gray-300 mb-6">
                Explore all {stats.repositories} repositories including development tools, open-source contributions, and experimental projects.
              </p>
              
              <div className="mt-4 p-4 bg-black/20 rounded-lg border border-white/10">
                <div className="text-sm text-gray-300 font-mono">
                  <div className="text-[#0fff50]">$ git stats --summary</div>
                  <div className="mt-2 text-gray-400">
                    {stats.repositories} repositories<br/>
                    {stats.projects} full-stack projects<br/>
                    Multiple programming languages<br/>
                    Active open-source contributor
                  </div>
                </div>
              </div>
              
              <div className="flex items-center mt-6 text-[#0fff50] group-hover:translate-x-1 transition-transform duration-300">
                <span className="text-sm mr-2">View GitHub</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

const ViewMoreCard = ({ count, onClick, isFeatured }) => {
  const glowColor = isFeatured ? '#00f7ff' : '#ff00f7';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className="h-full"
    >
      <div 
        className="group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden border-2 border-dashed transition-all duration-500 p-6 h-full cursor-pointer border-opacity-40 hover:border-opacity-80"
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
    ? ['#00f7ff', '#ff00f7', '#0fff50'] 
    : ['#ff00f7', '#00f7ff', '#0fff50'];
  
  const glowColor = glowColors[index % 3];
  
  // Determine which link to use as primary
  const getPrimaryLink = () => {
    return project.links.website || project.links.demo || project.links.github || '#';
  };
  
  const handleCardClick = () => {
    const link = getPrimaryLink();
    if (link && link !== '#') {
      window.open(link, '_blank');
    }
  };
  
  // Check if any links are available
  const hasLinks = project.links.website || project.links.demo || project.links.github;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: isFeatured ? 30 : 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * (isFeatured ? 0.2 : 0.1) + (isFeatured ? 0.5 : 1) }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <div 
        className={`group relative bg-gradient-to-br from-gray-900 via-black to-gray-900 rounded-2xl overflow-hidden border-2 transition-all duration-500 p-6 h-full cursor-pointer
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
              {project.description}
            </motion.p>
            
            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, techIndex) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 text-xs font-medium bg-black/50 border rounded-full text-gray-300 group-hover:text-white transition-colors"
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
            </div>
          </div>
          
          {/* Links with enhanced animation */}
          <motion.div 
            className="flex space-x-3 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors"
            initial={{ opacity: 0.7 }}
            whileHover={{ opacity: 1 }}
          >
            {project.links.website && (
              <motion.a
                href={project.links.website}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#00f7ff] hover:text-[#00f7ff] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#00f7ff]/10 group-hover/link:bg-[#00f7ff]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <ExternalLink className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Website</span>
              </motion.a>
            )}
            {project.links.demo && (
              <motion.a
                href={project.links.demo}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#0fff50] hover:text-[#0fff50] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#0fff50]/10 group-hover/link:bg-[#0fff50]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Play className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Demo</span>
              </motion.a>
            )}
            {project.links.github && (
              <motion.a
                href={project.links.github}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center space-x-1 text-[#ff00f7] hover:text-[#ff00f7] transition-colors group/link"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
              >
                <motion.div
                  className="p-1 rounded-md bg-[#ff00f7]/10 group-hover/link:bg-[#ff00f7]/20 transition-colors"
                  whileHover={{ scale: 1.1 }}
                >
                  <Github className="w-4 h-4" />
                </motion.div>
                <span className="text-sm font-medium">Code</span>
              </motion.a>
            )}
            
            {!hasLinks && (
              <div className="flex items-center text-gray-500 text-sm">
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