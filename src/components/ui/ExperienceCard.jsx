import { motion } from 'framer-motion'

export default function ExperienceCard({ experience }) {
  return (
    <motion.article
      whileHover={{ y: -3 }}
      transition={{ duration: 0.2 }}
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200">{experience.company}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{experience.role}</h3>
        </div>
        <span className="text-sm text-slate-300">{experience.period}</span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{experience.summary}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {experience.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-sky-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>

      <div className="mt-4 flex flex-wrap gap-2">
        {experience.skills.map((skill) => (
          <span key={skill} className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
            {skill}
          </span>
        ))}
      </div>
    </motion.article>
  )
}
