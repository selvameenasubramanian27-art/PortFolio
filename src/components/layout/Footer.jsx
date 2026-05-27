import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tighter text-white">
              SELVAMEENA<span className="text-primary">.</span>
            </span>
            <p className="text-text-muted text-xs font-medium">
              Built with React + Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://github.com/selvameenasubramanian27-art" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/selvameena-subramanian" target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
              <FaLinkedin size={20} />
            </a>

            <a href="mailto:selvameenasubramanian27@gmail.com" className="text-text-muted hover:text-primary transition-colors">
              <Mail size={20} />
            </a>
          </div>

          <div className="text-text-muted text-xs font-medium">
            &copy; {currentYear} All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
