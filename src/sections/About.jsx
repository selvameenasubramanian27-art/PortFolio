import { motion } from 'framer-motion';
import SectionTitle from '../components/common/SectionTitle';
import { fadeIn, staggerContainer } from '../utils/animations';
import profileImg from '../assets/images/profile.png';
import { User, GraduationCap, Briefcase, Rocket } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: <Rocket size={20} />,
      title: "4+ Projects",
      subtitle: "Built & Deployed"
    },
    {
      icon: <Briefcase size={20} />,
      title: "Aspiring Developer",
      subtitle: "Software Engineering"
    },
    {
      icon: <GraduationCap size={20} />,
      title: "CSE Student",
      subtitle: "P.S.R Engineering"
    }
  ];

  return (
    <section id="about" className="section-container">
      <SectionTitle title="About Me" subtitle="Professional Journey" />
      
      <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16 items-center">
        <motion.div
          variants={fadeIn('right', 0.2)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="relative group mx-auto lg:mx-0 w-full max-w-xs sm:max-w-sm"
        >
          <div className="relative">
            {/* Decorative background element */}
            <div className="absolute -inset-4 bg-primary/10 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="aspect-[4/5] bg-dark-lighter border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative z-10">
              <img 
                src={profileImg} 
                alt="Profile" 
                className="w-full h-full object-cover grayscale-[30%] group-hover:grayscale-0 transition-all duration-700"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-dark/60 via-transparent to-transparent opacity-60" />
            </div>
          </div>

          {/* Floating Badge */}
          <motion.div 
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
            className="absolute -bottom-5 -right-5 bg-primary p-4 rounded-2xl shadow-xl z-20 hidden md:block"
          >
            <User className="text-white" size={32} />
          </motion.div>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.2, 0.3)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="flex flex-col gap-8"
        >
          <motion.div variants={fadeIn('up', 0.1)}>
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Empowering Ideas Through <span className="text-primary italic">Modern Technology</span>
            </h3>
            <p className="text-text-muted leading-relaxed text-base md:text-lg mb-6">
              I am a final-year Computer Science and Engineering student at P.S.R Engineering College, dedicated to the art of clean code and efficient software delivery. My journey is fueled by a curiosity for how systems work and a passion for creating interfaces that feel intuitive and alive.
            </p>
            <p className="text-text-muted leading-relaxed text-base md:text-lg">
              Beyond just writing code, I focus on the user's experience, ensuring every interaction is meaningful and every solution is scalable. I am currently seeking opportunities to apply my technical foundation in real-world environments.
            </p>
          </motion.div>
          
          <motion.div 
            variants={fadeIn('up', 0.2)}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4"
          >
            {highlights.map((item, index) => (
              <div key={index} className="bg-white/5 border border-white/10 p-5 rounded-xl flex flex-col gap-3 hover:bg-white/10 hover:border-primary/30 transition-all group">
                <div className="text-primary group-hover:scale-110 transition-transform duration-300">
                  {item.icon}
                </div>
                <div>
                  <span className="text-white font-bold text-sm block">{item.title}</span>
                  <span className="text-[10px] text-text-muted uppercase tracking-wider">{item.subtitle}</span>
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
