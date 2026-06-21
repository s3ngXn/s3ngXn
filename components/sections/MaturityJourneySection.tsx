'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Rocket, TrendingUp, Zap, Building2, ShieldCheck, ArrowRight } from 'lucide-react'

const STAGES = [
  {
    icon: Rocket,
    stage: 'Startup',
    timeframe: '0–18 months',
    color: '#6366f1',
    headline: 'Lay the security foundation',
    description:
      'Establish security fundamentals that won\'t slow you down. Get investor and enterprise-ready without a full-time security team.',
    services: [
      'Security Posture Assessment',
      'Basic Secure SDLC',
      'Authentication & Secrets Management',
      'Basic Threat Modeling',
      'Privacy Policy & Data Handling',
    ],
  },
  {
    icon: TrendingUp,
    stage: 'Growth',
    timeframe: '18 months – 3 years',
    color: '#8b5cf6',
    headline: 'Scale security with your product',
    description:
      'As your customer base grows, so do your security obligations. Build automated defenses and start your compliance journey.',
    services: [
      'SOC 2 Type I Readiness',
      'Security Champion Program',
      'PhishGuard Deployment',
      'API Security Reviews',
      'Incident Response Planning',
    ],
  },
  {
    icon: Zap,
    stage: 'Scale-Up',
    timeframe: '3–6 years',
    color: '#06b6d4',
    headline: 'Enterprise-grade security programs',
    description:
      'Land enterprise customers with confidence. Formalize your security program and achieve multi-framework compliance.',
    services: [
      'SOC 2 Type II & ISO 27001',
      'Fractional CISO',
      'Threat Modeling Studio',
      'Penetration Testing',
      'Vendor Risk Management',
    ],
  },
  {
    icon: Building2,
    stage: 'Enterprise',
    timeframe: '6–10 years',
    color: '#10b981',
    headline: 'Mature, predictable security',
    description:
      'Run a mature security organization that enables the business. Deep integration of security across engineering and product.',
    services: [
      'Red Team Engagements',
      'AI Security Governance',
      'Full Compliance Suite',
      'Security Metrics & KPIs',
      'Board-Level Reporting',
    ],
  },
  {
    icon: ShieldCheck,
    stage: 'Regulated',
    timeframe: 'Regulated Industry',
    color: '#f59e0b',
    headline: 'Compliance as a competitive edge',
    description:
      'Turn your compliance program into a market differentiator. Navigate complex regulatory environments with precision.',
    services: [
      'NIS2 & CRA Compliance',
      'HIPAA / PCI-DSS',
      'Continuous Compliance Monitoring',
      'Regulatory Change Management',
      'Audit Management Automation',
    ],
  },
]

export default function MaturityJourneySection() {
  const [active, setActive] = useState(0)
  const current = STAGES[active]
  const Icon = current.icon

  return (
    <section id="journey" className="section-padding bg-[#060b18] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(99,102,241,0.07) 0%, transparent 70%)' }}
      />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-4">Security Maturity Journey</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Security that{' '}
            <span className="text-gradient-primary">grows with you</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Wherever you are on your journey, we have the right services to move you forward.
          </p>
        </motion.div>

        {/* Timeline tabs */}
        <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 mb-10 relative">
          {/* Connector line (desktop) */}
          <div className="hidden sm:block absolute top-1/2 left-0 right-0 h-px bg-white/5 -translate-y-1/2 z-0" />

          {STAGES.map((s, i) => {
            const SIcon = s.icon
            const isActive = i === active
            return (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`relative z-10 flex sm:flex-col items-center gap-3 sm:gap-2 flex-1 px-3 py-3 sm:py-4 rounded-xl sm:rounded-2xl text-left sm:text-center transition-all duration-300 border ${
                  isActive
                    ? 'bg-[#0d1424] border-white/10'
                    : 'bg-transparent border-transparent hover:bg-white/3'
                }`}
              >
                <div
                  className="w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                  style={{
                    background: isActive ? `${s.color}25` : 'rgba(255,255,255,0.04)',
                    border: `2px solid ${isActive ? s.color : 'rgba(255,255,255,0.08)'}`,
                  }}
                >
                  <SIcon
                    className="w-4 h-4 transition-colors"
                    style={{ color: isActive ? s.color : '#64748b' }}
                  />
                </div>
                <div>
                  <div
                    className="text-xs font-bold transition-colors"
                    style={{ color: isActive ? s.color : '#64748b' }}
                  >
                    {s.stage}
                  </div>
                  <div className="text-[10px] text-slate-600 hidden sm:block">{s.timeframe}</div>
                </div>
                {isActive && (
                  <motion.div
                    layoutId="stage-indicator"
                    className="absolute -bottom-px left-0 right-0 h-0.5 hidden sm:block"
                    style={{ background: `linear-gradient(90deg, transparent, ${s.color}, transparent)` }}
                  />
                )}
              </button>
            )
          })}
        </div>

        {/* Stage detail */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            className="grid lg:grid-cols-2 gap-8 card-glass p-8"
          >
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-11 h-11 rounded-2xl flex items-center justify-center"
                  style={{ background: `${current.color}20`, border: `1px solid ${current.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: current.color }} />
                </div>
                <div>
                  <div className="text-xs text-slate-500 uppercase tracking-wider">{current.timeframe}</div>
                  <h3 className="text-xl font-bold text-white">{current.stage} Stage</h3>
                </div>
              </div>
              <p className="text-lg font-semibold mb-3" style={{ color: current.color }}>
                {current.headline}
              </p>
              <p className="text-slate-400 leading-relaxed mb-6">{current.description}</p>
              <a href="#contact" className="btn-primary text-sm" style={{
                background: `linear-gradient(135deg, ${current.color}dd, ${current.color}99)`
              }}>
                Start at {current.stage}
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>

            <div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-4">
                Recommended Services
              </div>
              <div className="space-y-2.5">
                {current.services.map((svc, i) => (
                  <motion.div
                    key={svc}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06 }}
                    className="flex items-center gap-3 p-3 rounded-xl bg-white/3 border border-white/5 group hover:border-white/10 transition-colors"
                  >
                    <div
                      className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                      style={{ background: current.color }}
                    />
                    <span className="text-sm text-slate-300 group-hover:text-white transition-colors">{svc}</span>
                    <ArrowRight className="w-3.5 h-3.5 text-slate-600 ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Progress dots */}
        <div className="flex justify-center gap-2 mt-6">
          {STAGES.map((s, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className="w-2 h-2 rounded-full transition-all duration-300"
              style={{
                background: i === active ? s.color : 'rgba(255,255,255,0.15)',
                transform: i === active ? 'scale(1.4)' : 'scale(1)',
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
