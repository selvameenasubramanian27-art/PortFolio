import React from 'react';
import SectionTitle from '../components/common/SectionTitle';
import ProjectCard from '../components/ui/ProjectCard';
import { projects } from '../data/projects';

const Projects = () => {
  return (
    <section id="projects" className="section-container bg-dark/30">
      <SectionTitle title="Featured Projects" subtitle="Academic & Personal Work" />
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProjectCard 
            key={project.title} 
            index={index}
            {...project} 
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
