import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import * as FaIcons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';

const SkillCard = ({ category, items }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="premium-card h-full flex flex-col"
    >
      <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
          <LucideIcons.Layers size={20} />
        </div>
        {category}
      </h3>
      
      <div className="space-y-6 flex-1">
        {items.map((skill, index) => {
          // Determine which icon set to use
          let Icon = LucideIcons[skill.icon];
          if (!Icon) Icon = FaIcons[skill.icon];
          if (!Icon) Icon = SiIcons[skill.icon];
          if (!Icon) Icon = LucideIcons.Code2; // Fallback

          return (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Icon size={16} className="text-primary/70" />
                  <span className="text-sm font-medium text-text-main">{skill.name}</span>
                </div>
                <span className="text-[10px] font-bold text-text-muted uppercase tracking-widest">{skill.level}%</span>
              </div>
              
              <div className="h-2 w-full bg-white/5 rounded-full overflow-hidden border border-white/5">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: index * 0.1, ease: "easeOut" }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary/40 to-primary rounded-full relative"
                >
                  {/* Pulse effect on the bar tip */}
                  <div className="absolute right-0 top-0 h-full w-2 bg-white/30 blur-[2px]" />
                </motion.div>
              </div>
            </div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SkillCard;
