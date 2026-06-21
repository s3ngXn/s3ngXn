'use client'

import { motion } from 'framer-motion'
import { ArrowRight, ChevronDown, Zap } from 'lucide-react'
import dynamic from 'next/dynamic'

const NetworkAnimation = dynamic(() => import('@/components/NetworkAnimation'), {
  ssr: false,
  loading: () => <div className="w-full h-full" />,
})

const STATS = [
  { value: '20+', label: 'Years Experience' },
  { value: '50+', label: 'Organizations Secured' },
  { value: '3', label: 'SaaS Products' },
]

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#060b18] dot-grid"
    >
      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb-1 absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-indigo-600/8 blur-[120px]" />
        <div className="orb-2 absolute -bottom-40 -right-20 w-[700px] h-[700px] rounded-full bg-violet-600/8 blur-[140px]" />
        <div className="orb-3 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-cyan-500/5 blur-[100px]" />
      </div>

      {/* Radial gradient center spotlight */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 30% 50%, rgba(99,102,241,0.06) 0%, transparent 70%)' }}
      />

      <div className="container-max px-4 sm:px-6 lg:px-8 relative z-10 pt-20 pb-12">
        <div className="grid lg:grid-cols-2 gap-12 xl:gap-20 items-center min-h-[calc(100vh-80px)]">
          {/* Left: Content */}
          <div className="flex flex-col justify-center order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="section-tag mb-6 inline-flex">
                <Zap className="w-3 h-3 text-indigo-400" />
                Boutique Cybersecurity · Est. 2025
              </span>
            </motion.div>

            {/* Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <h1 className="text-5xl sm:text-6xl xl:text-7xl font-black tracking-tight leading-[1.05] mb-6">
                <span className="block text-gradient-indigo-violet">Secure Products.</span>
                <span className="block text-gradient-violet-cyan">Resilient Platforms.</span>
                <span className="block text-white">Trusted Growth.</span>
              </h1>
            </motion.div>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.35 }}
              className="text-lg text-slate-400 leading-relaxed max-w-lg mb-8"
            >
              Product Security, Compliance Automation, AI Governance, Threat Modeling,
              Red Teaming, and Security Engineering for modern{' '}
              <span className="text-slate-300 font-medium">SaaS, Cloud, and IoT</span>{' '}
              organizations.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.45 }}
              className="flex flex-col sm:flex-row gap-3 mb-12"
            >
              <a href="#contact" className="btn-primary text-base py-3.5 px-7">
                Book a Security Consultation
                <ArrowRight className="w-4 h-4" />
              </a>
              <a href="#services" className="btn-secondary text-base py-3.5 px-7">
                Explore Services
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex items-center gap-8"
            >
              {STATS.map((s, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl font-black text-gradient-primary">{s.value}</div>
                  <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                </div>
              ))}
              <div className="hidden sm:block w-px h-10 bg-white/8" />
              <div className="hidden sm:flex flex-col">
                <div className="flex -space-x-1 mb-1">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-5 h-5 rounded-full bg-gradient-to-br from-indigo-400 to-violet-500 border-2 border-[#060b18]" />
                  ))}
                </div>
                <p className="text-xs text-slate-500">Trusted by security leaders</p>
              </div>
            </motion.div>
          </div>

          {/* Right: Network Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            className="order-1 lg:order-2 relative"
          >
            <div className="relative aspect-square w-full max-w-[540px] mx-auto lg:max-w-none">
              {/* Outer glow frame */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-violet-500/5 to-cyan-500/10 border border-white/5 backdrop-blur-sm overflow-hidden">
                <NetworkAnimation />
              </div>
              {/* Corner accents */}
              <div className="absolute -top-px -left-px w-16 h-16 border-t-2 border-l-2 border-indigo-500/40 rounded-tl-3xl" />
              <div className="absolute -bottom-px -right-px w-16 h-16 border-b-2 border-r-2 border-violet-500/40 rounded-br-3xl" />
              {/* Floating labels */}
              <div className="absolute top-4 right-4 bg-glass border-glass rounded-xl px-3 py-2 backdrop-blur-md">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Security Score</div>
                <div className="text-lg font-bold text-gradient-primary">A+</div>
              </div>
              <div className="absolute bottom-4 left-4 bg-glass border-glass rounded-xl px-3 py-2 backdrop-blur-md">
                <div className="text-[10px] text-slate-400 uppercase tracking-wider">Threat Coverage</div>
                <div className="text-lg font-bold text-emerald-400">98.4%</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[11px] text-slate-600 tracking-widest uppercase">Explore</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-4 h-4 text-slate-600" />
        </motion.div>
      </motion.div>
    </section>
  )
}
