import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowUpRight } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import { fadeIn } from '../../utils/animations';

const ProjectCard = ({ title, description, tech, image, github, demo, index }) => {
  return (
    <motion.div
      variants={fadeIn('up', index * 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="premium-card group flex flex-col h-full overflow-hidden !p-0"
    >
      {/* Project Image Container */}
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-primary/20 mix-blend-overlay group-hover:bg-transparent transition-all duration-500 z-10" />
        <img 
          src={image} 
          alt={title}
          onError={(e) => {
            e.target.src = 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=800';
            e.target.className = 'w-full h-full object-cover opacity-20 contrast-125';
          }}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-dark/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-500 z-20 flex items-center justify-center gap-4">
          <a 
            href={github} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
            title="View Source"
          >
            <FaGithub size={22} />
          </a>

          {demo !== '#' && (
            <a 
              href={demo} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-primary flex items-center justify-center text-white transition-all duration-300 hover:-translate-y-1"
              title="Live Demo"
            >
              <ExternalLink size={22} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300 line-clamp-1">
            {title}
          </h3>
          <ArrowUpRight size={20} className="text-text-muted group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 duration-300" />
        </div>
        
        <p className="text-text-muted text-sm leading-relaxed line-clamp-3">
          {description}
        </p>
        
        <div className="mt-auto pt-4 border-t border-white/5 flex flex-wrap gap-2">
          {tech.map((item) => (
            <span key={item} className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 bg-white/5 border border-white/10 rounded-md text-text-muted group-hover:border-primary/20 group-hover:text-primary/70 transition-colors">
              <Code size={10} />
              {item}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;

