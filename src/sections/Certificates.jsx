import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { certificates } from '../data/certificates';
import { fadeIn, staggerContainer } from '../utils/animations';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';

const Certificates = () => {
  return (
    <section id="certificates" className="section-container bg-dark/30 relative overflow-hidden">
       {/* Background accent */}
       <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -z-10" />

      <SectionTitle title="Certifications" subtitle="Professional Validation" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            variants={fadeIn('up', index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-card group border-white/5 hover:border-primary/20 flex flex-col md:flex-row gap-6 items-center"
          >
            {/* Preview Area */}
            <div className="w-full md:w-32 h-32 bg-dark rounded-xl border border-white/10 flex items-center justify-center relative overflow-hidden group-hover:border-primary/30 transition-all duration-500">
               <Award size={40} className="text-primary/20 group-hover:text-primary/40 group-hover:scale-110 transition-all duration-500" />
               <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent" />
            </div>

            <div className="flex-1 flex flex-col gap-2 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 text-primary">
                <ShieldCheck size={16} />
                <span className="text-[10px] font-bold uppercase tracking-[0.2em]">Verified Achievement</span>
              </div>
              <h3 className="text-lg font-bold text-white group-hover:text-primary transition-colors duration-300">{cert.title}</h3>
              <div className="flex flex-col md:flex-row md:items-center gap-1 md:gap-4 text-text-muted text-sm">
                <span className="font-medium text-text-main/80">{cert.issuer}</span>
                <span className="hidden md:block w-1 h-1 rounded-full bg-white/20" />
                <span className="text-xs">{cert.date}</span>
              </div>
              
              {cert.link !== '#' && (
                <div className="mt-2">
                  <a 
                    href={cert.link} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center gap-2 text-xs font-bold text-primary hover:text-blue-400 transition-colors py-1 group/btn"
                  >
                    View Document
                    <ExternalLink size={12} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                  </a>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;

