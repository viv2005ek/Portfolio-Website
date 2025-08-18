import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, ExternalLink, Paperclip } from 'lucide-react';
import GlassPanel from '../components/GlassPanel';
import TerminalCommand from '../components/TerminalCommand';
import { personalInfo } from '../data/portfolio';

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
            background: linear-gradient(135deg, #00f7ff, #ff00f7);
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
            border-left: 4px solid #00f7ff;
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
      formData.attachments.forEach(file => {
        formPayload.append('attachments', file);
      });

      // Send to your API
      const response = await fetch('https://nodemailer-server-92ud.onrender.com/send-email', {
        method: 'POST',
        body: formPayload
      });

      if (!response.ok) throw new Error('Failed to send message 1');
      
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
            background: linear-gradient(135deg, #00f7ff, #ff00f7);
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
            border-left: 4px solid #00f7ff;
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
        .social-link {
            display: inline-block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: #f0f0f0;
            text-align: center;
            line-height: 40px;
            transition: all 0.3s ease;
        }
        .social-link:hover {
            transform: translateY(-3px);
            box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        }
        .linkedin { background: #0077b5; color: white; }
        .github { background: #333; color: white; }
        .portfolio { background: linear-gradient(135deg, #00f7ff, #ff00f7); color: white; }
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
        
        <div style="text-align:center; margin-top:30px; font-family:Arial, sans-serif;">
  <h3 style="font-size:22px; color:#00f7ff; margin-bottom:15px; letter-spacing:1px;">
    You can connect with me too 🚀
  </h3>
  
  <div class="social-links" style="display:flex; justify-content:center; gap:15px;">
    <a href="https://www.linkedin.com/in/vivek-kumar-garg-097677280/" target="_blank" 
       style="text-decoration:none; padding:10px 15px; border-radius:8px; background:#0077b5; color:white; font-weight:bold; transition:0.3s;">
       in
    </a>
    <a href="https://github.com/viv2005ek" target="_blank" 
       style="text-decoration:none; padding:10px 15px; border-radius:8px; background:#333; color:white; font-weight:bold; transition:0.3s;">
       gh
    </a>
    <a href="https://vivekfolio-six.vercel.app/" target="_blank" 
       style="text-decoration:none; padding:10px 15px; border-radius:8px; background:#00f7ff; color:black; font-weight:bold; transition:0.3s;">
       VG
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

const confirmationResponse = await fetch('https://nodemailer-server-92ud.onrender.com/send-email', {
  method: 'POST',
  body: confirmPayload
});


      if (!confirmationResponse.ok) throw new Error('Failed to send confirmation 2');

      setSubmitted(true);
      setFormData({ name: '', email: '', message: '', attachments: [] });
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
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
                  <p className="text-gray-400 text-sm mt-2">
                    A confirmation has been sent to your email.
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

          <div className="space-y-8">
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