import { motion } from 'framer-motion';
import { fadeIn } from '../../utils/animations';

const SectionTitle = ({ title, subtitle }) => {
  return (
    <motion.div
      variants={fadeIn('up', 0.1)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="mb-12 md:mb-16 text-center"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
        {title} <span className="text-primary italic">.</span>
      </h2>
      {subtitle && (
        <p className="text-text-muted text-sm md:text-base max-w-2xl mx-auto uppercase tracking-[0.2em] font-medium">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-1 bg-primary mx-auto mt-6 rounded-full opacity-50" />
    </motion.div>
  );
};

export default SectionTitle;
