import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ChevronDown, Rocket, ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import Button from '../components/common/Button';
import { Link } from 'react-scroll';
import { fadeIn, staggerContainer } from '../utils/animations';
import profileImg from '../assets/images/profile.png';

const Hero = () => {
  const techStack = ['React', 'JavaScript', 'Tailwind CSS', 'Java', 'GitHub'];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden px-6 pt-20">
      {/* Background Glows - Premium Subtle Radial Gradients */}
      <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-primary/20 blur-[120px] rounded-full -z-10 opacity-50" />
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-900/10 blur-[150px] rounded-full -z-10 opacity-30" />
      
      <div className="section-container grid md:grid-cols-2 gap-12 items-center">
        {/* Left Side: Intro Content */}
        <motion.div
          variants={staggerContainer(0.2, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-2 md:order-1"
        >
          <motion.div variants={fadeIn('up', 0.1)} className="flex items-center gap-2 mb-6">
            <span className="w-8 h-[1px] bg-primary"></span>
            <span className="text-primary font-medium tracking-[0.3em] uppercase text-xs md:text-sm">
              Welcome to my professional space
            </span>
          </motion.div>
          
          <motion.h1
            variants={fadeIn('up', 0.2)}
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight leading-tight"
          >
            Hi, I'm <span className="text-primary drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]">Selvameena</span> Subramanian
          </motion.h1>
          
          <motion.h2
            variants={fadeIn('up', 0.3)}
            className="text-xl md:text-2xl text-text-main font-medium mb-6 opacity-90"
          >
            Full Stack Developer & Software Enthusiast
          </motion.h2>
          
          <motion.p
            variants={fadeIn('up', 0.4)}
            className="text-base md:text-lg text-text-muted mb-8 max-w-xl leading-relaxed"
          >
            I specialize in crafting high-performance web applications with a focus on clean code, scalability, and exceptional user experiences.
          </motion.p>

          {/* Tech Stack Tags */}
          <motion.div 
            variants={fadeIn('up', 0.5)}
            className="flex flex-wrap gap-3 mb-10"
          >
            {techStack.map((tech) => (
              <span 
                key={tech} 
                className="px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs md:text-sm font-medium hover:border-primary/50 hover:bg-primary/5 transition-all duration-300 cursor-default"
              >
                {tech}
              </span>
            ))}
          </motion.div>
          
          <motion.div
            variants={fadeIn('up', 0.6)}
            className="flex flex-wrap items-center gap-5"
          >
            <Link to="projects" smooth={true} duration={800} offset={-70}>
              <Button variant="primary" className="px-8 py-4 group">
                View My Work 
                <Rocket size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </Link>
            
            <Button 
              href="/resume.pdf" 
              variant="secondary" 
              className="px-8 py-4 group"
              // Adding download attribute directly as Button passes it to Component
              download="Selvameena_Resume.pdf"
            >
              <FileText size={18} /> Resume
            </Button>
          </motion.div>
        </motion.div>

        {/* Right Side: Professional Profile Image */}
        <motion.div
          variants={fadeIn('left', 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="order-1 md:order-2 flex justify-center relative"
        >
          <div className="relative group">
            {/* Image Glow/Backdrop */}
            <div className="absolute -inset-4 bg-primary/20 blur-2xl rounded-full opacity-50 group-hover:opacity-75 transition-opacity duration-500 -z-10" />
            
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-2 border-white/10 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
              <img 
                src={profileImg} 
                alt="Selvameena Subramanian" 
                className="w-full h-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-700" 
              />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <Link to="about" smooth={true} duration={500} offset={-70} className="flex flex-col items-center gap-2 cursor-pointer text-text-muted hover:text-primary transition-colors">
          <span className="text-[10px] uppercase tracking-widest font-bold opacity-60">Scroll Down</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <ChevronDown size={20} />
          </motion.div>
        </Link>
      </motion.div>
    </section>
  );
};

export default Hero;

