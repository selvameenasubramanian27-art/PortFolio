import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, ArrowUpRight, ChevronLeft, ChevronRight, Images, X } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';

import { fadeIn } from '../../utils/animations';

const ProjectCard = ({ title, description, tech, image, github, demo, screenshots = [], index }) => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [activeScreenshot, setActiveScreenshot] = useState(0);
  const hasDemo = Boolean(demo && demo !== '#');
  const hasImage = Boolean(image);
  const hasGithub = Boolean(github && github !== '#');
  const hasScreenshots = screenshots.length > 0;
  const currentScreenshot = screenshots[activeScreenshot];

  const openGallery = () => {
    setActiveScreenshot(0);
    setIsGalleryOpen(true);
  };

  const closeGallery = () => setIsGalleryOpen(false);
  const showPrevious = () => setActiveScreenshot((current) => (current === 0 ? screenshots.length - 1 : current - 1));
  const showNext = () => setActiveScreenshot((current) => (current === screenshots.length - 1 ? 0 : current + 1));

  useEffect(() => {
    if (!isGalleryOpen) {
      return undefined;
    }

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setIsGalleryOpen(false);
      }

      if (event.key === 'ArrowLeft') {
        setActiveScreenshot((current) => (current === 0 ? screenshots.length - 1 : current - 1));
      }

      if (event.key === 'ArrowRight') {
        setActiveScreenshot((current) => (current === screenshots.length - 1 ? 0 : current + 1));
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isGalleryOpen, screenshots.length]);

  return (
    <>
      <motion.div
        variants={fadeIn('up', index * 0.1)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="premium-card group flex h-full flex-col overflow-hidden !p-0"
      >
        {/* Project Image Container */}
        <div className="relative h-56 overflow-hidden bg-gradient-to-br from-dark-lighter via-dark to-primary/10 sm:h-64">
          <div className="absolute inset-0 z-10 bg-gradient-to-t from-dark/60 via-transparent to-white/5 transition-all duration-500 group-hover:from-dark/35" />
          {hasImage ? (
            <img
              src={image}
              alt={`${title} project preview`}
              className="h-full w-full object-cover object-top transition duration-700 group-hover:scale-105 group-hover:saturate-125"
              loading="lazy"
            />
          ) : (
            <div className="flex h-full w-full flex-col justify-between p-6">
              <div className="flex gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-300/70" />
              </div>
              <div className="space-y-3">
                <div className="h-3 w-2/3 rounded-full bg-white/20" />
                <div className="h-3 w-full rounded-full bg-white/10" />
                <div className="h-3 w-4/5 rounded-full bg-white/10" />
              </div>
              <div className="text-xs font-bold uppercase tracking-[0.24em] text-primary/80">
                Project Preview
              </div>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 bg-dark/80 opacity-0 backdrop-blur-sm transition-all duration-500 group-hover:opacity-100">
            {hasGithub && (
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                title="GitHub Repository"
                aria-label={`${title} GitHub Repository`}
              >
                <FaGithub size={22} />
              </a>
            )}

            {hasDemo && (
              <a
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                title="Live Demo"
                aria-label={`${title} Live Demo`}
              >
                <ExternalLink size={22} />
              </a>
            )}

            {hasScreenshots && (
              <button
                type="button"
                onClick={openGallery}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white transition-all duration-300 hover:-translate-y-1 hover:bg-primary"
                title="View Screenshots"
                aria-label={`View ${title} screenshots`}
              >
                <Images size={22} />
              </button>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col gap-5 p-6">
          <div className="flex items-start justify-between gap-4">
            <h3 className="line-clamp-1 text-xl font-bold text-white transition-colors duration-300 group-hover:text-primary">
              {title}
            </h3>
            <ArrowUpRight size={20} className="translate-y-2 text-text-muted opacity-0 transition-colors duration-300 group-hover:translate-y-0 group-hover:text-primary group-hover:opacity-100" />
          </div>

          <p className="line-clamp-4 text-sm leading-7 text-text-muted">
            {description}
          </p>

          <div className="mt-auto flex flex-wrap gap-2 border-t border-white/5 pt-4">
            {tech.map((item) => (
              <span key={item} className="inline-flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.06] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-slate-300 transition-colors group-hover:border-primary/25 group-hover:text-primary/80">
                <Code size={10} />
                {item}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-3 pt-1">
            {hasDemo && (
              <a href={demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-xs font-bold text-white transition-all hover:-translate-y-0.5 hover:border-primary/70 hover:bg-primary/20">
                <ExternalLink size={14} /> Live Demo
              </a>
            )}
            {hasGithub && (
              <a href={github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/85 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
                <FaGithub size={14} /> GitHub Repository
              </a>
            )}
            {hasScreenshots && (
              <button type="button" onClick={openGallery} className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-bold text-white/85 transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:text-primary">
                <Images size={14} /> View Screenshots
              </button>
            )}
          </div>
        </div>
      </motion.div>

      {isGalleryOpen && hasScreenshots && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-6 backdrop-blur-xl"
          role="dialog"
          aria-modal="true"
          aria-label={`${title} screenshot gallery`}
          onClick={closeGallery}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.25 }}
            className="relative flex max-h-[92vh] w-full max-w-6xl flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-lighter shadow-premium"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-4">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.24em] text-primary/80">
                  Screenshot Gallery
                </p>
                <h4 className="mt-1 text-lg font-semibold text-white">
                  {currentScreenshot.title}
                </h4>
              </div>
              <button
                type="button"
                onClick={closeGallery}
                className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-colors hover:border-primary/40 hover:text-primary"
                aria-label="Close screenshot gallery"
              >
                <X size={18} />
              </button>
            </div>

            <div className="relative bg-black/35 p-3 sm:p-5">
              <img
                src={currentScreenshot.src}
                alt={`${title} - ${currentScreenshot.title}`}
                className="mx-auto max-h-[64vh] w-full rounded-xl border border-white/10 object-contain shadow-2xl"
              />

              {screenshots.length > 1 && (
                <>
                  <button
                    type="button"
                    onClick={showPrevious}
                    className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-dark/80 text-white shadow-lg backdrop-blur transition-all hover:border-primary/50 hover:bg-primary"
                    aria-label="Previous screenshot"
                  >
                    <ChevronLeft size={22} />
                  </button>
                  <button
                    type="button"
                    onClick={showNext}
                    className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-dark/80 text-white shadow-lg backdrop-blur transition-all hover:border-primary/50 hover:bg-primary"
                    aria-label="Next screenshot"
                  >
                    <ChevronRight size={22} />
                  </button>
                </>
              )}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-4">
              <p className="text-sm text-text-muted">
                {activeScreenshot + 1} of {screenshots.length}
              </p>
              <div className="flex gap-2">
                {screenshots.map((screenshot, screenshotIndex) => (
                  <button
                    type="button"
                    key={screenshot.src}
                    onClick={() => setActiveScreenshot(screenshotIndex)}
                    className={`h-2.5 rounded-full transition-all ${screenshotIndex === activeScreenshot ? 'w-8 bg-primary' : 'w-2.5 bg-white/25 hover:bg-white/50'}`}
                    aria-label={`Show ${screenshot.title}`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default ProjectCard;
