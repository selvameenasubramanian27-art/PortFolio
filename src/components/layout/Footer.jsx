import React from 'react';
import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="bg-dark-lighter py-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center">
        <div className="text-xl font-bold tracking-tighter mb-4">
          SELVAMEENA<span className="text-primary">.</span>
        </div>
        
        <div className="flex gap-6 mb-8">
          <a href="https://github.com/selvameenasubramanian27-art" className="text-text-muted hover:text-primary transition-colors">
            <FaGithub size={20} />
          </a>
          <a href="mailto:selvameenasubramanian27@gmail.com" className="text-text-muted hover:text-primary transition-colors">
            <Mail size={20} />
          </a>
          {/* LinkedIn is hidden per user request */}
        </div>

        <p className="text-text-muted text-sm text-center">
          &copy; {new Date().getFullYear()} SelvameenaSubramanian. All rights reserved.
        </p>
        <p className="text-white/20 text-xs mt-2 uppercase tracking-widest">
          Built with React & Tailwind CSS
        </p>
      </div>
    </footer>
  );
};

export default Footer;
