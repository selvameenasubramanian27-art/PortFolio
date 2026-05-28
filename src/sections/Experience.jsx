import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { experience } from '../data/experience';
import { fadeIn, staggerContainer } from '../utils/animations';
import { Briefcase, MapPin, Calendar, FileCheck, ExternalLink } from 'lucide-react';
import Button from '../components/common/Button';

const Experience = () => {
  return (
    <section id="experience" className="section-container">
      <SectionTitle title="Work Experience" subtitle="My Professional Internship" />
      
      <div className="max-w-4xl mx-auto">
        <motion.div
           variants={staggerContainer(0.2, 0.1)}
           initial="hidden"
           whileInView="show"
           viewport={{ once: true }}
           className="space-y-12"
        >
          {experience.map((exp, index) => (
            <motion.div
              key={exp.company}
              variants={fadeIn('up', index * 0.2)}
              className="premium-card relative overflow-hidden group"
            >
              {/* Background accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors" />
              
              <div className="flex flex-col gap-6 relative z-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500 shadow-xl">
                      <Briefcase size={28} />
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-bold text-white">{exp.role}</h3>
                      <div className="flex items-center gap-2 text-primary font-semibold">
                        <span>{exp.company}</span>
                        <span className="w-1 h-1 rounded-full bg-primary/40" />
                        <div className="flex items-center gap-1 text-xs text-text-muted font-normal">
                          <MapPin size={12} />
                          {exp.location}
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1">
                    <div className="flex items-center gap-2 text-xs font-bold text-text-muted uppercase tracking-widest px-4 py-2 bg-white/5 rounded-xl border border-white/5">
                      <Calendar size={14} className="text-primary/70" />
                      {exp.duration}
                    </div>
                  </div>
                </div>
                
                <p className="text-text-muted text-base md:text-lg leading-relaxed max-w-3xl">
                  {exp.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => (
                    <span key={skill} className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 bg-primary/10 text-primary border border-primary/20 rounded-lg">
                      {skill}
                    </span>
                  ))}
                </div>

                {exp.certificate && (
                  <div className="pt-4 border-t border-white/5 mt-2">
                    <Button href={exp.certificate} target="_blank" rel="noopener noreferrer" variant="outline" className="px-6 py-2.5 text-xs">
                      <FileCheck size={16} /> View Internship Certificate
                      <ExternalLink size={12} className="opacity-50" />
                    </Button>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
