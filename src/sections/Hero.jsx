import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronDown } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Button from '../components/common/Button';
import { Link } from 'react-scroll';
import { fadeIn, staggerContainer } from '../utils/animations';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-primary/10 blur-[120px] rounded-full -z-10" />
      
      <motion.div
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="text-center max-w-4xl"
      >
        <motion.span
          variants={fadeIn('up', 0.1)}
          className="text-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm mb-6 block"
        >
          Welcome to my professional portfolio
        </motion.span>
        
        <motion.h1
          variants={fadeIn('up', 0.2)}
          className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter leading-tight"
        >
          I'm <span className="text-primary">Selvameena</span>Subramanian
        </motion.h1>
        
        <motion.p
          variants={fadeIn('up', 0.3)}
          className="text-lg md:text-xl text-text-muted mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Aspiring Software Developer passionate about building responsive, user-friendly, and modern web experiences.
        </motion.p>
        
        <motion.div
          variants={fadeIn('up', 0.4)}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button href="#" variant="primary" className="min-w-[160px]">
            <FaGithub size={18} /> View Projects
          </Button>
          <Button variant="secondary" className="min-w-[160px]">
            <FileText size={18} /> Download Resume
          </Button>
        </motion.div>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10"
      >
        <Link to="about" smooth={true} duration={500} className="flex flex-col items-center gap-2 cursor-pointer text-text-muted hover:text-primary transition-colors">
          <span className="text-[10px] uppercase tracking-widest font-bold">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;
