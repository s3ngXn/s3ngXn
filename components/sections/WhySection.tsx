'use client'

import { motion } from 'framer-motion'
import { Layers, Users2, Cpu, TrendingUp } from 'lucide-react'

const PILLARS = [
  {
    icon: Layers,
    color: '#6366f1',
    number: '01',
    title: 'Deep Product Security Expertise',
    description:
      '20+ years securing enterprise SaaS and cloud-native products from the ground up — from early-stage startups to Fortune 500 organizations.',
  },
  {
    icon: Users2,
    color: '#8b5cf6',
    number: '02',
    title: 'Built by Practitioners',
    description:
      'Designed and delivered by leaders who have actually built security programs — not consultants reading frameworks, but engineers who\'ve shipped secure products.',
  },
  {
    icon: Cpu,
    color: '#06b6d4',
    number: '03',
    title: 'Automation First',
    description:
      'Reduce manual compliance and security effort through intelligent automation. Spend less time on evidence collection and more time building.',
  },
  {
    icon: TrendingUp,
    color: '#10b981',
    number: '04',
    title: 'Business-Focused Security',
    description:
      'Security aligned with business velocity and customer trust. We speak both languages — risk and revenue — to help you make informed decisions.',
  },
]

export default function WhySection() {
  return (
    <section id="why" className="section-padding bg-[#080e1e] relative overflow-hidden">
      {/* Decorative line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">Why s3ngXn</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            The difference is{' '}
            <span className="text-gradient-primary">experience</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            We&apos;ve been in your seat. We know what keeps CISOs up at night, what slows engineering teams down, and what compliance auditors actually care about.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((p, i) => {
            const Icon = p.icon
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                whileHover={{ y: -4 }}
                className="group card-glass p-6 relative overflow-hidden"
              >
                {/* Number watermark */}
                <div
                  className="absolute -top-2 -right-2 text-7xl font-black opacity-[0.04] select-none pointer-events-none"
                  style={{ color: p.color }}
                >
                  {p.number}
                </div>

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `${p.color}18`, border: `1px solid ${p.color}28` }}
                >
                  <Icon className="w-5 h-5" style={{ color: p.color }} />
                </div>

                <div
                  className="text-xs font-bold tracking-widest uppercase mb-3"
                  style={{ color: p.color + '99' }}
                >
                  {p.number}
                </div>

                <h3 className="text-base font-bold text-white mb-3 leading-snug">{p.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{p.description}</p>

                {/* Bottom accent */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: `linear-gradient(90deg, transparent, ${p.color}60, transparent)` }}
                />
              </motion.div>
            )
          })}
        </div>

        {/* Credentials bar */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-14 p-6 rounded-2xl bg-white/2 border border-white/5"
        >
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            {[
              { value: '20+', label: 'Years in Cybersecurity' },
              { value: 'CISO', label: 'Executive Experience' },
              { value: '3', label: 'SaaS Security Products' },
              { value: '6+', label: 'Compliance Frameworks' },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl font-black text-gradient-primary mb-1">{stat.value}</div>
                <div className="text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
