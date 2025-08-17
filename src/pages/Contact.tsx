import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
    }, 2000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

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
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#00f7ff] to-[#ff00f7] bg-clip-text text-transparent">
            Get In Touch
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
    command="./contact_vivek.sh --init" 
    output={`Initializing secure communication channel...
[✓] Encryption protocols active
[✓] Ready to receive your message
[✓] Response time: < 24 hours`}
    delay={500}
  />
</div>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <GlassPanel glowColor="#00f7ff">
              <h2 className="text-2xl font-bold text-[#00f7ff] mb-6">Send Message</h2>
              
              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#00f7ff] focus:outline-none transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#00f7ff] focus:outline-none transition-colors"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Message
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#00f7ff] focus:outline-none transition-colors resize-none"
                      placeholder="Let's build something amazing together..."
                    />
                  </div>
                  
                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#00f7ff] to-[#ff00f7] text-black font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </motion.button>
                </form>
              ) : (
                <div className="text-center py-8">
                  <div className="w-16 h-16 bg-[#0fff50] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send className="w-8 h-8 text-black" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0fff50] mb-2">Message Sent!</h3>
                  <p className="text-gray-300">
                    Thanks for reaching out! I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 text-[#00f7ff] hover:text-[#00f7ff]/80 transition-colors"
                  >
                    Send another message
                  </button>
                </div>
              )}
            </GlassPanel>
          </motion.div>

          {/* Contact Info & 3D Avatar */}
          <div className="space-y-8">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
            >
              <GlassPanel glowColor="#ff00f7">
                <h2 className="text-2xl font-bold text-[#ff00f7] mb-6">Contact Information</h2>
                
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#ff00f7]/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#ff00f7]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a 
                        href={`mailto:${personalInfo.email}`}
                        className="text-white hover:text-[#ff00f7] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#ff00f7]/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#ff00f7]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a 
                        href={`tel:${personalInfo.phone}`}
                        className="text-white hover:text-[#ff00f7] transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#ff00f7]/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#ff00f7]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9 }}
            >
              <GlassPanel glowColor="#0fff50">
                <h2 className="text-2xl font-bold text-[#0fff50] mb-6">Connect With Me</h2>
                
                <div className="space-y-4">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#0fff50]/40 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-[#0fff50]" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-gray-400 text-sm">{personalInfo.followers} followers</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#0fff50] transition-colors" />
                  </a>
                  
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#0fff50]/40 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-[#0fff50]" />
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <p className="text-gray-400 text-sm">60+ repositories</p>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 ml-auto group-hover:text-[#0fff50] transition-colors" />
                  </a>
                </div>
              </GlassPanel>
            </motion.div>

            {/* 3D Hologram Avatar */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.1 }}
            >
              <GlassPanel glowColor="#00f7ff">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-[#00f7ff] to-[#ff00f7] rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-[#0a0a12] rounded-full flex items-center justify-center">
                        <motion.span 
                          className="text-3xl font-bold text-[#00f7ff]"
                          animate={{ 
                            rotateY: [0, 360],
                            scale: [1, 1.1, 1]
                          }}
                          transition={{ 
                            duration: 4,
                            repeat: Infinity,
                            ease: "linear"
                          }}
                        >
                          VG
                        </motion.span>
                      </div>
                    </div>
                    
                    {/* Hologram effect lines */}
                    <div className="absolute inset-0 rounded-full opacity-30 pointer-events-none">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-0.5 bg-[#00f7ff]"
                          style={{ 
                            top: `${i * 16.67}%`, 
                            opacity: 0.2,
                            animation: `pulse ${2 + i * 0.5}s infinite`
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  
                  <p className="text-[#00f7ff] font-medium">
                    "Let's build the future together!"
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Available for collaboration and new opportunities
                  </p>
                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}