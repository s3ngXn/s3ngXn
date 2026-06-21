'use client'

import { motion } from 'framer-motion'
import { Layers, FileCheck2, Inbox, Brain, Network, Target, ArrowRight } from 'lucide-react'

const SERVICES = [
  {
    icon: Layers,
    color: '#6366f1',
    gradient: 'from-indigo-500/20 to-violet-500/10',
    title: 'Product Security as a Service',
    subtitle: 'Fractional Product Security Office for startups and scale-ups.',
    features: [
      'Secure SDLC Design',
      'Security Design Reviews',
      'Threat Modeling',
      'Security Architecture Reviews',
      'Release Security Gates',
      'Security Champion Programs',
    ],
    cta: 'Learn More',
  },
  {
    icon: FileCheck2,
    color: '#10b981',
    gradient: 'from-emerald-500/20 to-teal-500/10',
    title: 'Compliance Automation',
    subtitle: 'Accelerate compliance readiness and audit preparation.',
    features: [
      'ISO 27001',
      'SOC 2 Type II',
      'NIS2',
      'CRA Readiness',
      'Vendor Risk Management',
      'Policy Automation',
    ],
    cta: 'Learn More',
  },
  {
    icon: Inbox,
    color: '#06b6d4',
    gradient: 'from-cyan-500/20 to-blue-500/10',
    title: 'PhishGuard',
    subtitle: 'Advanced phishing simulation and security awareness platform.',
    features: [
      'Campaign Management',
      'Realistic Simulations',
      'User Risk Scoring',
      'Executive Reporting',
      'Awareness Training',
      'Automated Scheduling',
    ],
    cta: 'View Product',
    isProduct: true,
  },
  {
    icon: Brain,
    color: '#a855f7',
    gradient: 'from-violet-500/20 to-purple-500/10',
    title: 'AI Security & Governance',
    subtitle: 'Secure adoption of AI, LLMs, Copilots, Agents, and MCP ecosystems.',
    features: [
      'AI Risk Assessments',
      'MCP Security Reviews',
      'AI Usage Policies',
      'Prompt Leakage Analysis',
      'AI Governance Programs',
    ],
    cta: 'Learn More',
  },
  {
    icon: Network,
    color: '#f59e0b',
    gradient: 'from-amber-500/20 to-orange-500/10',
    title: 'Threat Modeling Studio',
    subtitle: 'AI-assisted threat modeling and security design analysis.',
    features: [
      'Architecture Reviews',
      'Abuse Cases',
      'Security Requirements',
      'Risk Prioritization',
      'Mitigation Recommendations',
    ],
    cta: 'View Product',
    isProduct: true,
  },
  {
    icon: Target,
    color: '#f43f5e',
    gradient: 'from-rose-500/20 to-red-500/10',
    title: 'Red Team & Penetration Testing',
    subtitle: 'Real-world adversarial testing focused on business impact.',
    features: [
      'Web Applications',
      'APIs',
      'Cloud Platforms',
      'Kubernetes',
      'SaaS Multi-Tenant',
      'IoT Ecosystems',
    ],
    cta: 'Learn More',
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

export default function ServicesSection() {
  return (
    <section id="services" className="section-padding bg-[#080e1e] relative overflow-hidden">
      {/* Background orb */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-indigo-600/4 blur-[120px] pointer-events-none" />

      <div className="container-max">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">Core Services</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Security expertise,{' '}
            <span className="text-gradient-primary">delivered as a service</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            From fractional CISO engagements to hands-on red team exercises — tailored security programs that scale with your organization.
          </p>
        </motion.div>

        {/* Cards grid */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon
            return (
              <motion.div
                key={i}
                variants={item}
                whileHover={{ y: -4 }}
                className="group relative card-glass p-6 lg:p-7 flex flex-col cursor-default"
              >
                {/* Top gradient accent */}
                <div
                  className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r ${svc.gradient} opacity-70`}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 transition-transform group-hover:scale-110"
                  style={{ background: `linear-gradient(135deg, ${svc.color}22, ${svc.color}10)`, border: `1px solid ${svc.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: svc.color }} />
                </div>

                {/* Product badge */}
                {svc.isProduct && (
                  <div className="absolute top-4 right-4">
                    <span className="text-[9px] font-bold tracking-widest uppercase px-2 py-0.5 rounded-full bg-cyan-500/15 border border-cyan-500/25 text-cyan-400">
                      Product
                    </span>
                  </div>
                )}

                <h3 className="text-lg font-bold text-white mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-400 mb-5 leading-relaxed">{svc.subtitle}</p>

                {/* Features */}
                <ul className="flex-1 space-y-2 mb-6">
                  {svc.features.map(f => (
                    <li key={f} className="feature-item">{f}</li>
                  ))}
                </ul>

                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                  style={{ color: svc.color }}
                >
                  {svc.cta}
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
