import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { fadeIn, staggerContainer } from '../utils/animations';
import { Mail, Send, CheckCircle, Copy, MessageSquare } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, sent
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText('selvameenasubramanian27@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate professional behavior
    setTimeout(() => {
      setFormState('sent');
      
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      const mailtoLink = `mailto:selvameenasubramanian27@gmail.com?subject=Portfolio Inquiry from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
      
      setTimeout(() => {
         window.location.href = mailtoLink;
         setFormState('idle');
         e.target.reset();
      }, 1500);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[150px] rounded-full -z-10" />

      <SectionTitle title="Get In Touch" subtitle="Available for Opportunities" />
      
      <div className="grid lg:grid-cols-5 gap-12 max-w-6xl mx-auto">
        {/* Contact Info - 2 Columns */}
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-2 flex flex-col gap-8"
        >
          <div className="flex flex-col gap-6">
            <h3 className="text-2xl font-bold text-white">Let's connect</h3>
            <p className="text-text-muted leading-relaxed text-base">
              I am currently open to internship and junior developer roles. Whether you have a project in mind or just want to connect professionally, feel free to reach out.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Email Card */}
            <div className="premium-card !p-5 flex items-center justify-between group">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Mail size={20} />
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">Email</span>
                  <span className="text-sm font-medium text-white truncate max-w-[180px] sm:max-w-none">selvameena... @gmail.com</span>
                </div>
              </div>
              <button 
                onClick={handleCopyEmail}
                className="p-2.5 rounded-lg bg-white/5 hover:bg-primary/20 text-text-muted hover:text-primary transition-all relative"
                title="Copy Email"
              >
                {copied ? <CheckCircle size={18} className="text-green-500" /> : <Copy size={18} />}
              </button>
            </div>

            {/* Socials Grid */}
            <div className="grid grid-cols-2 gap-4">
              <a 
                href="https://github.com/selvameenasubramanian27-art" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-card !p-5 flex items-center gap-4 group hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-muted group-hover:text-white transition-colors">
                  <FaGithub size={20} />
                </div>
                <span className="text-sm font-bold">GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/selvameena-subramanian" 
                target="_blank" 
                rel="noopener noreferrer"
                className="premium-card !p-5 flex items-center gap-4 group hover:bg-primary/5 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-text-muted group-hover:text-blue-400 transition-colors">
                  <FaLinkedin size={20} />
                </div>

                <span className="text-sm font-bold">LinkedIn</span>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Contact Form - 3 Columns */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="lg:col-span-3 premium-card relative group"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative">
                <input 
                  required
                  name="name" 
                  type="text" 
                  id="name"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-primary outline-none transition-all placeholder-transparent"
                />
                <label 
                  htmlFor="name" 
                  className="absolute left-0 -top-3.5 text-text-muted text-xs uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
                >
                  Full Name
                </label>
              </div>
              <div className="relative">
                <input 
                  required
                  name="email" 
                  type="email" 
                  id="email"
                  placeholder=" "
                  className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-primary outline-none transition-all placeholder-transparent"
                />
                <label 
                  htmlFor="email" 
                  className="absolute left-0 -top-3.5 text-text-muted text-xs uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
                >
                  Email Address
                </label>
              </div>
            </div>
            
            <div className="relative">
              <textarea 
                required
                name="message" 
                id="message"
                rows="4" 
                placeholder=" "
                className="peer w-full bg-transparent border-b border-white/10 py-3 text-white focus:border-primary outline-none transition-all placeholder-transparent resize-none"
              ></textarea>
              <label 
                htmlFor="message" 
                className="absolute left-0 -top-3.5 text-text-muted text-xs uppercase tracking-widest font-bold transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-12 peer-focus:-top-3.5 peer-focus:text-primary peer-focus:text-xs"
              >
                Your Message
              </label>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full h-14 group"
              disabled={formState !== 'idle'}
            >
              {formState === 'idle' && (
                <div className="flex items-center gap-3">
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  <span className="uppercase tracking-widest text-xs font-bold">Transmit Message</span>
                </div>
              )}
              {formState === 'sending' && <span className="animate-pulse">Establishing Connection...</span>}
              {formState === 'sent' && (
                <div className="flex items-center gap-3">
                  <CheckCircle size={18} />
                  <span className="uppercase tracking-widest text-xs font-bold">Redirecting...</span>
                </div>
              )}
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

