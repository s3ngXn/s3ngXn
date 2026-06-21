'use client'

import { motion } from 'framer-motion'

const CATEGORIES = [
  'SaaS Platforms',
  'Cloud Native',
  'IoT Providers',
  'HealthTech',
  'FinTech',
  'Enterprise Software',
  'AI Companies',
  'DevTools',
  'Regulated Industries',
  'Startups',
]

const DOUBLED = [...CATEGORIES, ...CATEGORIES]

export default function TrustedBySection() {
  return (
    <section className="relative py-16 bg-[#060b18] border-y border-white/5 overflow-hidden">
      <div className="container-max px-4 sm:px-6 lg:px-8 mb-8">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-slate-500 tracking-widest uppercase"
        >
          Trusted by security-forward organizations across
        </motion.p>
      </div>

      {/* Marquee */}
      <div className="relative flex overflow-hidden">
        {/* Fade masks */}
        <div className="absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#060b18] to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#060b18] to-transparent" />

        <div className="flex animate-marquee whitespace-nowrap gap-0">
          {DOUBLED.map((cat, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 mx-4 px-5 py-2.5 rounded-full
                         bg-white/3 border border-white/6 text-slate-400 text-sm font-medium
                         hover:border-indigo-500/30 hover:text-slate-300 transition-colors flex-shrink-0"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500 flex-shrink-0" />
              {cat}
            </div>
          ))}
        </div>
      </div>

      {/* Certification badges */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="container-max px-4 sm:px-6 lg:px-8 mt-10"
      >
        <div className="flex flex-wrap justify-center items-center gap-6">
          {['ISO 27001', 'SOC 2 Type II', 'NIS2', 'CRA', 'OWASP', 'NIST CSF'].map(badge => (
            <div
              key={badge}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full
                         bg-white/2 border border-white/5 text-xs text-slate-500 font-medium"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              {badge}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
