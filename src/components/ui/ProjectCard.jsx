import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { fadeIn } from '../../utils/animations';

const ProjectCard = ({ title, description, tech, image, github, demo, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="premium-card group overflow-hidden"
    >
      <div className="relative h-48 mb-6 overflow-hidden rounded-xl bg-dark border border-white/5">
        {/* In a real scenario, an img tag would be here. Using a placeholder div. */}
        <div className="w-full h-full bg-gradient-to-br from-blue-500/10 to-transparent flex items-center justify-center">
            <span className="text-white/20 font-bold italic tracking-widest">{title}</span>
        </div>
        <div className="absolute inset-0 bg-dark/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <a href={github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
            <FaGithub size={20} />
          </a>
          {demo !== '#' && (
            <a href={demo} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/10 rounded-full hover:bg-primary transition-colors">
              <ExternalLink size={20} />
            </a>
          )}
        </div>
      </div>

      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{title}</h3>
      <p className="text-text-muted text-sm mb-6 line-clamp-2">{description}</p>
      
      <div className="flex flex-wrap gap-2">
        {tech.map((item) => (
          <span key={item} className="text-[10px] uppercase tracking-widest px-2 py-1 bg-white/5 border border-white/10 rounded-md text-text-muted">
            {item}
          </span>
        ))}
      </div>
    </motion.div>
  );
};

export default ProjectCard;
