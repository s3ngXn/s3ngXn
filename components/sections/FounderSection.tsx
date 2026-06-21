'use client'

import { motion } from 'framer-motion'
import { Linkedin, Globe, ArrowRight, Award, Briefcase, Code2, Brain } from 'lucide-react'

const CREDENTIALS = [
  { icon: Briefcase, label: 'CISO Experience', detail: 'Led security programs at enterprise SaaS companies' },
  { icon: Code2, label: 'Product Security Architect', detail: 'Designed security for SaaS, Cloud, and IoT platforms' },
  { icon: Brain, label: 'AI Security Pioneer', detail: 'Early adopter of AI governance and LLM security frameworks' },
  { icon: Award, label: 'Compliance Leader', detail: 'SOC 2, ISO 27001, NIS2, and HIPAA program delivery' },
]

const EXPERTISE = [
  'Product Security',
  'Cloud Security (AWS, Azure, GCP)',
  'IoT Security Architecture',
  'DevSecOps & Shift-Left',
  'AI / LLM Security',
  'Compliance Automation',
  'Threat Modeling',
  'Red Team & Penetration Testing',
  'Security Program Building',
  'Board-Level Reporting',
]

export default function FounderSection() {
  return (
    <section id="founder" className="section-padding bg-[#060b18] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 70% at 75% 50%, rgba(99,102,241,0.05) 0%, transparent 70%)' }}
      />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-4">About the Founder</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Led by Experience.{' '}
            <span className="text-gradient-primary">Driven by Security.</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Portrait area */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Portrait card */}
            <div className="relative max-w-sm mx-auto lg:max-w-none">
              {/* Glow */}
              <div className="absolute -inset-8 rounded-3xl bg-gradient-to-br from-indigo-600/15 via-violet-600/10 to-transparent blur-3xl" />

              <div className="relative card-glass rounded-3xl overflow-hidden border border-white/8">
                {/* Abstract portrait area */}
                <div
                  className="aspect-[4/5] flex flex-col items-center justify-center relative overflow-hidden"
                  style={{ background: 'linear-gradient(145deg, #0d1535 0%, #0a1020 100%)' }}
                >
                  {/* Decorative rings */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-64 h-64 rounded-full border border-indigo-500/10" />
                    <div className="absolute w-48 h-48 rounded-full border border-violet-500/10" />
                    <div className="absolute w-32 h-32 rounded-full border border-cyan-500/10" />
                  </div>

                  {/* Avatar placeholder */}
                  <div className="relative z-10 w-32 h-32 rounded-full flex items-center justify-center mb-4"
                    style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6)', boxShadow: '0 0 60px rgba(99,102,241,0.3)' }}>
                    <span className="text-4xl font-black text-white">SG</span>
                  </div>

                  <div className="relative z-10 text-center px-6 pb-4">
                    <div className="text-lg font-bold text-white">Saran Govindarajan</div>
                    <div className="text-sm text-indigo-300 mb-3">Founder & Principal Consultant</div>
                    <div className="flex justify-center gap-3">
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all"
                      >
                        <Linkedin className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                      <a
                        href="#"
                        className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-indigo-500/20 hover:border-indigo-500/40 transition-all"
                      >
                        <Globe className="w-3.5 h-3.5 text-slate-400" />
                      </a>
                    </div>
                  </div>

                  {/* Floating badges */}
                  <div className="absolute top-4 right-4 bg-glass border-glass rounded-xl px-3 py-1.5 backdrop-blur-md">
                    <div className="text-[10px] text-slate-400 uppercase tracking-wider">Experience</div>
                    <div className="text-base font-bold text-gradient-primary">20+ Years</div>
                  </div>
                  <div className="absolute bottom-20 -left-2 bg-glass border-glass rounded-xl px-3 py-1.5 backdrop-blur-md">
                    <div className="text-[10px] text-emerald-400 font-semibold">CISO · PSA · DevSecOps</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Brand story */}
            <div className="mb-6 p-4 rounded-2xl bg-indigo-500/5 border border-indigo-500/15">
              <div className="text-xs text-indigo-400 uppercase tracking-widest mb-2 font-semibold">The Name &amp; The Story</div>
              <p className="text-sm text-slate-400 leading-relaxed">
                <span className="text-white font-semibold">s3ngXn</span> is derived from the founder&apos;s name.{' '}
                <span className="text-indigo-300">s3n</span> from <em>Saran</em>,{' '}
                <span className="text-violet-300">gXn</span> from <em>Govindarajan</em>, where{' '}
                <span className="text-cyan-300">X</span> represents the Roman numeral 10 — symbolizing the journey
                between G and N. The brand represents <strong className="text-white">trusted guidance through complexity</strong>.
              </p>
            </div>

            <p className="text-slate-400 leading-relaxed mb-6">
              With over 20 years in cybersecurity, Saran has served as CISO and Product Security Architect
              across SaaS platforms, cloud-native companies, and IoT organizations. He has built security programs
              from scratch, led compliance initiatives across multiple frameworks, and shipped three production
              security products used by enterprises globally.
            </p>

            {/* Credentials */}
            <div className="grid sm:grid-cols-2 gap-3 mb-8">
              {CREDENTIALS.map((c, i) => {
                const Icon = c.icon
                return (
                  <div key={i} className="flex items-start gap-3 p-3 rounded-xl bg-white/3 border border-white/5">
                    <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Icon className="w-3.5 h-3.5 text-indigo-400" />
                    </div>
                    <div>
                      <div className="text-xs font-semibold text-white mb-0.5">{c.label}</div>
                      <div className="text-[11px] text-slate-500 leading-relaxed">{c.detail}</div>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Expertise tags */}
            <div className="mb-8">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-3">Core Expertise</div>
              <div className="flex flex-wrap gap-2">
                {EXPERTISE.map(e => (
                  <span
                    key={e}
                    className="text-xs px-3 py-1.5 rounded-full bg-white/3 border border-white/6 text-slate-400 hover:border-indigo-500/30 hover:text-slate-300 transition-colors"
                  >
                    {e}
                  </span>
                ))}
              </div>
            </div>

            <a href="#contact" className="btn-primary text-sm py-3 px-6">
              Connect with Saran
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
