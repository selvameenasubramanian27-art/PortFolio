import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { experience } from '../data/experience';
import { fadeIn } from '../utils/animations';
import { Briefcase } from 'lucide-react';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <SectionTitle title="Experience" subtitle="Internship History" />
      
      <div className="max-w-4xl mx-auto space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={exp.company}
            variants={fadeIn('up', index * 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-card relative pl-12"
          >
            {/* Timeline Line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-primary/20" />
            
            {/* Timeline Icon */}
            <div className="absolute left-3.5 top-8 w-6 h-6 bg-dark border border-primary rounded-full flex items-center justify-center z-10 shadow-[0_0_15px_rgba(59,130,246,0.3)]">
              <Briefcase size={10} className="text-primary" />
            </div>

            <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
              <div>
                <h3 className="text-xl font-bold">{exp.role}</h3>
                <span className="text-primary font-medium">{exp.company}</span>
              </div>
              <span className="text-xs uppercase tracking-widest font-bold px-3 py-1 bg-white/5 border border-white/5 rounded-full text-text-muted">
                {exp.duration}
              </span>
            </div>
            
            <p className="text-text-muted text-sm md:text-base leading-relaxed mb-6 italic">
              "{exp.description}"
            </p>

            <div className="flex flex-wrap gap-2">
              {exp.skills.map(skill => (
                <span key={skill} className="text-[10px] px-2 py-1 bg-primary/10 text-primary border border-primary/20 rounded">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
