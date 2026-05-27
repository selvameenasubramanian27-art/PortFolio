import React, { useState } from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import Button from '../components/common/Button';
import { fadeIn } from '../utils/animations';
import { Mail, Send, CheckCircle } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

const Contact = () => {
  const [formState, setFormState] = useState('idle'); // idle, sending, sent

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormState('sending');
    
    // Simulate professional behavior
    setTimeout(() => {
      setFormState('sent');
      
      // Construct mailto link
      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('email');
      const message = formData.get('message');
      
      const mailtoLink = `mailto:selvameenasubramanian27@gmail.com?subject=Contact from ${name}&body=From: ${name} (${email})%0D%0A%0D%0A${message}`;
      
      // Delay opening to let user see "Sent" state
      setTimeout(() => {
         window.location.href = mailtoLink;
         setFormState('idle');
         e.target.reset();
      }, 1500);
    }, 1000);
  };

  return (
    <section id="contact" className="section-container bg-dark/30">
      <SectionTitle title="Get In Touch" subtitle="Let's Build Something Together" />
      
      <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <div className="premium-card border-none bg-transparent p-0">
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-text-muted mb-8 leading-relaxed">
              I am currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            
            <div className="space-y-6">
              <a href="mailto:selvameenasubramanian27@gmail.com" className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={24} />
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-widest font-bold">Email</span>
                  <p className="font-medium group-hover:text-primary transition-colors">selvameenasubramanian27@gmail.com</p>
                </div>
              </a>
              
              <a href="https://github.com/selvameenasubramanian27-art" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group cursor-pointer">
                <div className="p-4 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <FaGithub size={24} />
                </div>
                <div>
                  <span className="text-xs text-text-muted uppercase tracking-widest font-bold">GitHub</span>
                  <p className="font-medium group-hover:text-primary transition-colors">selvameenasubramanian27-art</p>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="premium-card"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Name</label>
                <input 
                  required
                  name="name" 
                  type="text" 
                  placeholder="John Doe" 
                  className="w-full bg-dark border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Email</label>
                <input 
                  required
                  name="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="w-full bg-dark border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-all"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-xs font-bold text-text-muted uppercase tracking-widest">Message</label>
              <textarea 
                required
                name="message" 
                rows="5" 
                placeholder="How can I help you?" 
                className="w-full bg-dark border border-white/5 rounded-xl px-4 py-3 text-sm focus:border-primary/50 outline-none transition-all resize-none"
              ></textarea>
            </div>

            <Button 
              type="submit" 
              variant="primary" 
              className="w-full h-12"
              disabled={formState !== 'idle'}
            >
              {formState === 'idle' && <><Send size={18} /> Send Message</>}
              {formState === 'sending' && <span className="animate-pulse">Processing...</span>}
              {formState === 'sent' && <><CheckCircle size={18} /> Message Prepared!</>}
            </Button>
            
            {formState === 'sent' && (
              <p className="text-[10px] text-center text-primary/60 animate-bounce">
                Redirecting to your email client...
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
