import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Play, Code } from 'lucide-react';
import NeonCard from '../components/NeonCard';
import TerminalCommand from '../components/TerminalCommand';
import { projects, stats, personalInfo } from '../data/portfolio';

export default function Projects() {
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
          
          <div className="max-w-2xl mx-auto mb-8">
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
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {projects.filter(project => project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.5 }}
              >
                <NeonCard
                  title={project.title}
                  glowColor={index % 3 === 0 ? '#00f7ff' : index % 3 === 1 ? '#ff00f7' : '#0fff50'}
                  className="h-full"
                >
                  <div className="mb-4">
                    <h4 className="text-lg font-semibold text-white mb-2">{project.subtitle}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed mb-4">
                      {project.description}
                    </p>
                    
                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-1 text-xs bg-black/40 border border-white/20 rounded text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    
                    {/* Links */}
                    <div className="flex space-x-3">
                      {project.links.website && (
                        <a
                          href={project.links.website}
                          className="flex items-center space-x-1 text-[#00f7ff] hover:text-[#00f7ff]/80 transition-colors"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span className="text-sm">Website</span>
                        </a>
                      )}
                      {project.links.demo && (
                        <a
                          href={project.links.demo}
                          className="flex items-center space-x-1 text-[#0fff50] hover:text-[#0fff50]/80 transition-colors"
                        >
                          <Play className="w-4 h-4" />
                          <span className="text-sm">Demo</span>
                        </a>
                      )}
                    </div>
                  </div>
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-[#ff00f7] mb-6">Other Notable Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.filter(project => !project.featured).map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 1 }}
              >
                <NeonCard
                  title={project.title}
                  description={project.description}
                  glowColor="#ff00f7"
                  className="h-full"
                >
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 text-xs bg-black/40 border border-white/20 rounded text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {project.links.website && (
                    <a
                      href={project.links.website}
                      className="flex items-center space-x-1 text-[#ff00f7] hover:text-[#ff00f7]/80 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span className="text-sm">View Project</span>
                    </a>
                  )}
                </NeonCard>
              </motion.div>
            ))}
          </div>
        </div>

        {/* GitHub Portfolio Card */}
        <motion.div
          className="max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          <NeonCard
            title="Complete GitHub Portfolio"
            description={`Explore all ${stats.repositories} repositories including development tools, open-source contributions, and experimental projects.`}
            icon={Github}
            href={personalInfo.github}
            glowColor="#0fff50"
            className="text-center"
          >
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
          </NeonCard>
        </motion.div>
      </div>
    </div>
  );
}