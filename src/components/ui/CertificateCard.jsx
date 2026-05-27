import { motion } from 'framer-motion'

export default function CertificateCard({ certificate }) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-5"
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-sky-200">{certificate.issuer}</p>
          <h3 className="mt-2 text-lg font-semibold text-white">{certificate.title}</h3>
        </div>
        <span className="rounded-full border border-white/10 bg-slate-950/60 px-3 py-1 text-xs text-slate-200">
          {certificate.date}
        </span>
      </div>

      <p className="mt-4 text-sm leading-7 text-slate-300">{certificate.summary}</p>

      <ul className="mt-4 space-y-2 text-sm text-slate-200">
        {certificate.details.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </motion.article>
  )
}
