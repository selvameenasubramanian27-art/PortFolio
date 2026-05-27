import React from 'react';
import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { fadeIn } from '../utils/animations';

const About = () => {
  return (
    <section id="about" className="section-container">
      <SectionTitle title="About Me" subtitle="Professional Journey" />
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative group"
        >
          <div className="aspect-square bg-dark-lighter border border-white/5 rounded-2xl overflow-hidden shadow-2xl relative">
            {/* Placeholder for Profile Image */}
            <div className="w-full h-full bg-gradient-to-br from-primary/20 to-transparent flex items-center justify-center">
               <span className="text-white/5 font-black text-8xl italic select-none">SS</span>
            </div>
            {/* Animated frame */}
            <div className="absolute inset-4 border border-primary/20 rounded-xl group-hover:inset-2 transition-all duration-500" />
          </div>
        </motion.div>

        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-6"
        >
          <h3 className="text-2xl font-bold text-white">
            Aspiring Software Developer
          </h3>
          <p className="text-text-muted leading-relaxed">
            I am a final-year Computer Science and Engineering student at P.S.R Engineering College. My passion lies in creating efficient, scalable, and user-centric software solutions. I enjoy tackling complex problems and turning them into simple, beautiful code.
          </p>
          <p className="text-text-muted leading-relaxed">
            With a strong foundation in Programming (C, Java, Python) and Web Technologies (React, Tailwind), I am constantly learning and evolving as a developer. My goal is to contribute to innovative projects that make a meaningful impact on users lives.
          </p>
          
          <div className="grid grid-cols-2 gap-4 pt-4">
             <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <span className="text-primary font-bold text-xl block">Honesty</span>
                <span className="text-xs text-text-muted uppercase tracking-widest">Core Value</span>
             </div>
             <div className="bg-white/5 border border-white/5 p-4 rounded-xl">
                <span className="text-primary font-bold text-xl block">Learning</span>
                <span className="text-xs text-text-muted uppercase tracking-widest">Daily Goal</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
