import { Mail } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-xl font-bold tracking-tighter text-white">
              SELVAMEENA<span className="text-primary">.</span>
            </span>
            <p className="text-text-muted text-xs font-medium">
              Built with React + Tailwind CSS
            </p>
          </div>

          <div className="flex items-center gap-3">
            <a href="https://github.com/selvameenasubramanian27-art" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors flex items-center justify-center" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://linkedin.com/in/selvameena-subramanian" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors flex items-center justify-center" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>

            <a href="mailto:selvameenasubramanian27@gmail.com" className="w-10 h-10 rounded-full border border-white/10 text-text-muted hover:text-primary hover:border-primary/40 hover:bg-primary/10 transition-colors flex items-center justify-center" aria-label="Email">
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
