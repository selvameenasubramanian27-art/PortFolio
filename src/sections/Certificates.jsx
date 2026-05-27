import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { certificates } from '../data/certificates';
import { fadeIn } from '../utils/animations';
import { Award, ExternalLink } from 'lucide-react';

const Certificates = () => {
  return (
    <section id="certificates" className="section-container">
      <SectionTitle title="Certificates" subtitle="Verified Skills" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {certificates.map((cert, index) => (
          <motion.div
            key={cert.title}
            variants={fadeIn('up', index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-card group border-white/5 hover:border-primary/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary/10 rounded-lg text-primary group-hover:bg-primary group-hover:text-white transition-all duration-500">
                <Award size={24} />
              </div>
              <div className="flex-1">
                 <h3 className="font-bold text-sm leading-tight">{cert.title}</h3>
                 <span className="text-xs text-text-muted">{cert.issuer}</span>
              </div>
              {cert.link !== '#' && (
                <a href={cert.link} target="_blank" rel="noopener noreferrer" className="text-text-muted hover:text-primary transition-colors">
                  <ExternalLink size={16} />
                </a>
              )}
            </div>
            <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/5">
                <span className="text-[10px] uppercase tracking-widest font-black text-text-muted/30">Verified Certificate</span>
                <span className="text-[10px] font-bold text-text-muted">{cert.date}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Certificates;
