import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import SkillCard from '../components/ui/SkillCard';
import { skills } from '../data/skills';

const Skills = () => {
  return (
    <section id="skills" className="section-container bg-dark/30">
      <SectionTitle title="Technical Skills" subtitle="Toolbox & Expertise" />
      
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {skills.map((skillGroup, index) => (
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
