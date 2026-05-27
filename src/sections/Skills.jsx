import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import SkillCard from '../components/ui/SkillCard';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-container relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-primary/5 blur-[120px] rounded-full -z-10" />
      
      <SectionTitle title="Technical Expertise" subtitle="Realistic Skill Proficiency" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {skills.map((skillGroup) => (
          <SkillCard 
            key={skillGroup.category} 
            category={skillGroup.category} 
            items={skillGroup.items} 
          />
        ))}
      </div>
    </section>
  );
};

export default Skills;

