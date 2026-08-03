import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Paperclip, Twitter } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { personalInfo, stats } from '../data/portfolio';
import ScrambledText from '../components/ScrambledText';
import { SiHuggingface, SiLeetcode, SiDevdotto } from "react-icons/si";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    attachments: [] as File[]
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const totalSize = files.reduce((sum, file) => sum + file.size, 0);

      if (totalSize > 25 * 1024 * 1024) {
        alert('Total attachments size exceeds 25MB limit');
        return;
      }

      setFormData({
        ...formData,
        attachments: files
      });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const formPayload = new FormData();

      // Append all form fields
      formPayload.append('to', 'viv2005ek@gmail.com');
      formPayload.append('subject', `New message from ${formData.name}`);
      formPayload.append('text', `From: ${formData.name} <${formData.email}>\n\n${formData.message}`);
      formPayload.append('html', `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .header {
            background: linear-gradient(135deg, #d4af37, #FF5349);
            color: white;
            padding: 25px;
            text-align: center;
            border-radius: 8px 8px 0 0;
            margin-bottom: 0;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        .message-container {
            background: #f8f8f8;
            border-left: 4px solid #d4af37;
            padding: 15px 20px;
            margin: 20px 0;
            border-radius: 0 4px 4px 0;
        }
        .info-item {
            margin-bottom: 15px;
            padding-bottom: 15px;
            border-bottom: 1px solid #eee;
        }
        .info-item:last-child {
            border-bottom: none;
            margin-bottom: 0;
            padding-bottom: 0;
        }
        .label {
            font-weight: 600;
            color: #555;
            display: inline-block;
            min-width: 80px;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 12px;
            color: #999;
        }
        .highlight {
            color: #00a8ff;
            font-weight: 600;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1 style="margin:0;">New Message Received</h1>
    </div>
    <div class="content">
        <div class="info-item">
            <span class="label">From:</span>
            <span class="highlight">${formData.name}</span>
        </div>
        <div class="info-item">
            <span class="label">Email:</span>
            <a href="mailto:${formData.email}" style="color: #00a8ff; text-decoration: none;">${formData.email}</a>
        </div>
        
        <div style="margin-top: 25px;">
            <h3 style="margin-bottom: 15px; color: #444;">Message Content:</h3>
            <div class="message-container">
                ${formData.message.replace(/\n/g, '<br>')}
            </div>
        </div>
        
        <div class="footer">
            <p>This message was sent via your portfolio contact form on ${new Date().toLocaleString()}</p>
        </div>
    </div>
</body>
</html>
`);

      // Append files - IMPORTANT: Use the same field name 'attachments'
      if (formData.attachments && formData.attachments.length > 0) {
        formData.attachments.forEach((file) => {
          formPayload.append('attachments', file);
        });
        console.log(`Appended ${formData.attachments.length} files`);
      }

      // Log FormData contents (for debugging)
      // console.log('Sending FormData with fields:');
      // for (let pair of formPayload.entries()) {
      //     if (pair[0] === 'attachments') {
      //         // console.log(pair[0], ':', pair[1].name, 'size:', pair[1].size);
      //     } else {
      //         // console.log(pair[0], ':', pair[1]);
      //     }
      // }

      // Send to your API with explicit fetch options
      const response = await fetch('https://node-mailer-server-chi.vercel.app/send-email', {
        method: 'POST',
        body: formPayload,
        // Don't set Content-Type header - browser will set it automatically with boundary
        credentials: 'omit', // Don't send cookies
        mode: 'cors' // Explicitly set CORS mode
      });

      // console.log('Response status:', response.status);

      const data = await response.json();
      // console.log('Server response:', data);

      if (!response.ok) {
        throw new Error(data.message || data.error || 'Failed to send message');
      }

      // Send confirmation email
      const confirmPayload = new FormData();
      confirmPayload.append('to', formData.email);
      confirmPayload.append('subject', 'Thank you for your message!');
      confirmPayload.append('html', `
<!DOCTYPE html>
<html>
<head>
    <style>
        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            line-height: 1.6;
            color: #333;
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #f9f9f9;
        }
        .header {
            background: linear-gradient(135deg, #d4af37, #FF5349);
            color: white;
            padding: 30px 20px;
            text-align: center;
            border-radius: 8px 8px 0 0;
        }
        .content {
            background: white;
            padding: 30px;
            border-radius: 0 0 8px 8px;
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        blockquote {
            border-left: 4px solid #d4af37;
            padding: 10px 20px;
            margin: 20px 0;
            background: #f5f5f5;
            font-style: italic;
        }
        .social-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin: 30px 0;
        }
        .footer {
            margin-top: 30px;
            text-align: center;
            font-size: 14px;
            color: #777;
        }
    </style>
</head>
<body>
    <div class="header">
        <h1>Thank You!</h1>
    </div>
    <div class="content">
        <h2>Hi ${formData.name},</h2>
        <p>I've received your message and will get back to you within 24 hours.</p>
        
        <blockquote>${formData.message}</blockquote>
        
        <div style="text-align:center; margin-top:30px;">
            <h3 style="font-size:22px; color:#d4af37; margin-bottom:15px; letter-spacing:1px;">
                Connect with me:
            </h3>
            
            <div style="display:flex; justify-content:center; gap:15px;">
                <a href="https://www.linkedin.com/in/vivek-kumar-garg-097677280/" target="_blank" 
                   style="text-decoration:none; padding:10px 20px; border-radius:5px; background:#0077b5; color:white; font-weight:bold;">
                    LinkedIn
                </a>
                <a href="https://github.com/viv2005ek" target="_blank" 
                   style="text-decoration:none; padding:10px 20px; border-radius:5px; background:#333; color:white; font-weight:bold;">
                    GitHub
                </a>
            </div>
        </div>
        
        <p>Best regards,<br>Vivek Kumar Garg</p>
        
        <div class="footer">
            <p>© ${new Date().getFullYear()} Vivek Kumar Garg. All rights reserved.</p>
        </div>
    </div>
</body>
</html>
`);

      const confirmResponse = await fetch('https://node-mailer-server-chi.vercel.app/send-email', {
        method: 'POST',
        body: confirmPayload,
        mode: 'cors'
      });

      if (!confirmResponse.ok) {
        console.warn('Confirmation email may not have sent');
      }

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', attachments: [] });

    } catch (error) {
      console.error('Frontend Error:', error);
      alert(error instanceof Error ? error.message : 'Failed to send message. Please check console for details.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.4 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#ffffff] via-[#d4af37] to-[#FF5349] bg-clip-text text-transparent">
            <ScrambledText text="Get In Touch" />
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
              command="./contact_vivek.sh --init"
              output={`Initializing secure communication channel...
[✓] SSL/TLS handshake complete [OK]
[✓] Message dispatcher initialized
[✓] SLA response threshold: < 24 hours
Connection state: ESTABLISHED [READY]`}
              delay={500}
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.05 }}
            >
              <GlassPanel glowColor="#d4af37">
                <h2 className="text-2xl font-bold text-[#d4af37] mb-6">
                  <ScrambledText text="Send Message" />
                </h2>

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
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none transition-colors"
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
                        className="w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-[#d4af37] focus:outline-none transition-colors resize-none"
                        placeholder="Let's build something amazing together..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Attachments (optional, max 25MB total)
                      </label>
                      <div className="relative">
                        <input
                          type="file"
                          id="attachments"
                          multiple
                          onChange={handleFileChange}
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        <label
                          htmlFor="attachments"
                          className="flex items-center justify-between w-full px-4 py-3 bg-black/40 border border-white/20 rounded-lg text-gray-400 hover:text-white transition-colors"
                        >
                          <div className="flex items-center">
                            <Paperclip className="w-5 h-5 mr-2" />
                            <span>
                              {formData.attachments.length > 0
                                ? `${formData.attachments.length} file(s) selected`
                                : 'Choose files...'}
                            </span>
                          </div>
                          <span className="text-sm">Max 25MB</span>
                        </label>
                      </div>
                      {formData.attachments.length > 0 && (
                        <div className="mt-2 text-sm text-gray-400">
                          Selected: {formData.attachments.map(f => f.name).join(', ')}
                        </div>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#d4af37]  to-[#FF5349] text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-opacity disabled:opacity-50 flex items-center justify-center space-x-2"
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
                    <div className="w-16 h-16 bg-[#FF5349] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-black" />
                    </div>
                    <h3 className="text-xl font-bold text-[#FF5349] mb-2">Message Sent!</h3>
                    <p className="text-gray-300">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
                    <p className="text-gray-400 text-sm mt-2">
                      A confirmation has been sent to your email.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-4 text-[#d4af37] hover:text-[#d4af37]/80 transition-colors"
                    >
                      Send another message
                    </button>
                  </div>
                )}
              </GlassPanel>
            </motion.div>

            {/* VG Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.1 }}
            >
              <GlassPanel glowColor="#d4af37">
                <div className="text-center">
                  <div className="relative w-32 h-32 mx-auto mb-4">
                    <div className="w-full h-full bg-gradient-to-br from-[#ffffff] via-[#d4af37] to-[#FF5349] rounded-full p-1 animate-pulse">
                      <div className="w-full h-full bg-[#0a0a12] rounded-full flex items-center justify-center">
                        <motion.span
                          className="text-3xl font-bold text-[#d4af37]"
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

                    <div className="absolute inset-0 rounded-full opacity-30 pointer-events-none">
                      {Array.from({ length: 6 }, (_, i) => (
                        <div
                          key={i}
                          className="absolute w-full h-0.5 bg-[#d4af37]"
                          style={{
                            top: `${i * 16.67}%`,
                            opacity: 0.2,
                            animation: `pulse ${2 + i * 0.5}s infinite`
                          }}
                        />
                      ))}
                    </div>
                  </div>

                  <p className="text-[#d4af37] font-medium">
                    "Let's build the future together!"
                  </p>
                  <p className="text-gray-400 text-sm mt-2">
                    Available for collaboration and new opportunities
                  </p>
                </div>
              </GlassPanel>
            </motion.div>
          </div>

          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.08 }}
            >
              <GlassPanel glowColor="#FF5349">
                <h2 className="text-2xl font-bold text-[#FF5349] mb-6">
                  <ScrambledText text="Contact Information" />
                </h2>

                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Email</p>
                      <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-white hover:text-[#d4af37] transition-colors"
                      >
                        {personalInfo.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#FF5349]/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-[#FF5349]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Phone</p>
                      <a
                        href={`tel:${personalInfo.phone}`}
                        className="text-white hover:text-[#FF5349] transition-colors"
                      >
                        {personalInfo.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-[#d4af37]/20 rounded-lg flex items-center justify-center">
                      <MapPin className="w-5 h-5 text-[#d4af37]" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">Location</p>
                      <p className="text-white hover:text-[#d4af37]">{personalInfo.location}</p>
                    </div>
                  </div>
                </div>
              </GlassPanel>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ delay: 0.08 }}
            >
              <GlassPanel glowColor="#ffffff">
                <h2 className="text-2xl font-bold text-[#d4af37] mb-6">Connect With Me</h2>

                <div className="space-y-4">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#d4af37]/40 transition-colors group"
                  >
                    <Mail className="w-6 h-6 text-[#d4af37]" />
                    <div>
                      <p className="text-white font-medium">Email Me</p>
                      <p className="text-gray-400 text-sm">{personalInfo.email}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#d4af37] transition-colors" />
                  </a>

                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#00d4ff]/40 transition-colors group"
                  >
                    <Linkedin className="w-6 h-6 text-[#00d4ff]" />
                    <div>
                      <p className="text-white font-medium">LinkedIn</p>
                      <p className="text-gray-400 text-sm">{personalInfo.followers} followers</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#00d4ff] transition-colors" />
                  </a>

                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#FF5349]/40 transition-colors group"
                  >
                    <Github className="w-6 h-6 text-[#FF5349]" />
                    <div>
                      <p className="text-white font-medium">GitHub</p>
                      <p className="text-gray-400 text-sm">{stats.repositories} repositories</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#FF5349] transition-colors" />
                  </a>
                  <a
                    href={personalInfo.X}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#ec4899]/40 transition-colors group"
                  >
                    <Twitter className="w-6 h-6 text-[#ec4899]" />
                    <div>
                      <p className="text-white font-medium">Twitter / X</p>
                      <p className="text-gray-400 text-sm">Developer Journey & Updates</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#ec4899] transition-colors" />
                  </a>
                  <a
                    href={personalInfo.devto}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#a855f7]/40 transition-colors group"
                  >
                    <SiDevdotto className="w-6 h-6 text-[#a855f7]" />
                    <div>
                      <p className="text-white font-medium">DEV Community</p>
                      <p className="text-gray-400 text-sm">Technical Publications</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#a855f7] transition-colors" />
                  </a>
                  <a
                    href={personalInfo.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#ff9f1c]/40 transition-colors group"
                  >
                    <SiLeetcode className="w-6 h-6 text-[#ff9f1c]" />
                    <div>
                      <p className="text-white font-medium">LeetCode</p>
                      <p className="text-gray-400 text-sm">Competitive Coding & DSA</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#ff9f1c] transition-colors" />
                  </a>

                  <a
                    href={personalInfo.HF}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-4 p-3 bg-black/20 rounded-lg border border-white/10 hover:border-[#ffd21e]/40 transition-colors group"
                  >
                    <SiHuggingface className="w-6 h-6 text-[#ffd21e]" />
                    <div>
                      <p className="text-white font-medium">Hugging Face</p>
                      <p className="text-gray-400 text-sm">LLM Adapters & Demo Spaces</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto text-[#ffd21e] transition-colors" />
                  </a>




                </div>
              </GlassPanel>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}