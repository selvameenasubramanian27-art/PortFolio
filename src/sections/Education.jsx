import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { education } from '../data/education';
import { fadeIn } from '../utils/animations';
import { GraduationCap } from 'lucide-react';

const Education = () => {
  return (
    <section id="education" className="section-container">
      <SectionTitle title="Education" subtitle="Academic Background" />
      
      <div className="max-w-4xl mx-auto">
        {education.map((edu) => (
          <motion.div
            key={edu.college}
            variants={fadeIn('up', 0.2)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-card flex flex-col md:flex-row gap-8 items-start md:items-center"
          >
            <div className="p-4 bg-primary/10 rounded-2xl flex items-center justify-center text-primary border border-primary/20 shadow-lg shadow-primary/5">
              <GraduationCap size={40} strokeWidth={1.5} />
            </div>
            
            <div className="flex-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-xl font-bold">{edu.degree}</h3>
                  <span className="text-primary font-medium">{edu.college}</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-xs font-bold px-3 py-1 bg-white/5 rounded-full text-text-muted mb-2">
                    {edu.duration}
                  </span>
                  <span className="text-primary font-bold text-sm">CGPA: {edu.cgpa}</span>
                </div>
              </div>
              <p className="text-text-muted text-sm leading-relaxed max-w-2xl">
                {edu.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
