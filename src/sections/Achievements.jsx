import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { achievements } from '../data/achievements';
import { fadeIn } from '../utils/animations';
import { Trophy } from 'lucide-react';

const Achievements = () => {
  return (
    <section id="achievements" className="section-container bg-dark/30">
      <SectionTitle title="Achievements" subtitle="Recognition & Presentation" />
      
      <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {achievements.map((item, index) => (
          <motion.div
            key={item.title}
            variants={fadeIn('up', index * 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="premium-card flex gap-6"
          >
            <div className="text-primary mt-1">
              <Trophy size={28} strokeWidth={1.5} />
            </div>
            <div>
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-bold text-lg leading-tight">{item.title}</h3>
                <span className="text-[10px] font-black opacity-30 select-none">{item.date}</span>
              </div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">{item.event}</p>
              <p className="text-text-muted text-sm leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
