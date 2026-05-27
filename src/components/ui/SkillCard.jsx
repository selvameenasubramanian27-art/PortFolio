import React from 'react';
import { motion } from 'framer-motion';
import * as LucideIcons from 'lucide-react';
import * as FaIcons from 'react-icons/fa6';
import * as SiIcons from 'react-icons/si';

const SkillCard = ({ category, items }) => {
  return (
    <div className="premium-card">
      <h3 className="text-lg font-bold mb-6 text-primary flex items-center gap-2">
        <LucideIcons.LayoutGrid size={18} />
        {category}
      </h3>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {items.map((skill, index) => {
          // Determine which icon set to use
          let Icon = LucideIcons[skill.icon];
          if (!Icon) Icon = FaIcons[skill.icon];
          if (!Icon) Icon = SiIcons[skill.icon];
          if (!Icon) Icon = LucideIcons.Code2; // Fallback

          return (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-2 p-3 bg-white/5 border border-white/5 rounded-xl hover:bg-white/10 transition-colors"
            >
              <Icon size={20} className="text-text-muted" />
              <span className="text-xs font-medium">{skill.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default SkillCard;
