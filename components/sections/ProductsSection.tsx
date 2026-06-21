'use client'

import { motion } from 'framer-motion'
import { Inbox, FileCheck2, Network, ArrowRight, TrendingUp, Users, BarChart3, CheckCircle2, AlertTriangle, Activity } from 'lucide-react'

/* ─── PhishGuard mock dashboard ─── */
function PhishGuardDashboard() {
  const risks = [
    { user: 'Engineering', pct: 12, color: '#10b981' },
    { user: 'Finance', pct: 34, color: '#f59e0b' },
    { user: 'Sales', pct: 28, color: '#f59e0b' },
    { user: 'HR', pct: 58, color: '#f43f5e' },
    { user: 'Executives', pct: 9, color: '#10b981' },
  ]
  return (
    <div className="rounded-xl bg-[#0a0f1e] border border-white/5 overflow-hidden text-xs font-mono">
      {/* Window chrome */}
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5 bg-white/2">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-slate-500 text-[10px]">PhishGuard — Campaign Dashboard</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Metric row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { label: 'Sent', value: '2,847', icon: Inbox, color: '#6366f1' },
            { label: 'Click Rate', value: '23.4%', icon: TrendingUp, color: '#f59e0b' },
            { label: 'Reported', value: '31.2%', icon: CheckCircle2, color: '#10b981' },
          ].map(m => (
            <div key={m.label} className="bg-white/3 rounded-lg p-2.5 border border-white/4">
              <m.icon className="w-3 h-3 mb-1" style={{ color: m.color }} />
              <div className="text-white font-bold text-sm">{m.value}</div>
              <div className="text-slate-500 text-[9px]">{m.label}</div>
            </div>
          ))}
        </div>
        {/* Risk by department */}
        <div>
          <div className="text-slate-500 text-[10px] mb-2 uppercase tracking-wider">Department Risk Score</div>
          <div className="space-y-1.5">
            {risks.map(r => (
              <div key={r.user} className="flex items-center gap-2">
                <span className="text-slate-400 w-20 text-[10px] truncate">{r.user}</span>
                <div className="flex-1 bg-white/4 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all"
                    style={{ width: `${r.pct}%`, background: r.color }}
                  />
                </div>
                <span className="text-[10px] w-6 text-right" style={{ color: r.color }}>{r.pct}%</span>
              </div>
            ))}
          </div>
        </div>
        {/* Recent simulations */}
        <div className="border-t border-white/5 pt-3">
          <div className="text-slate-500 text-[10px] mb-1.5 uppercase tracking-wider">Recent Simulation</div>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-white text-[11px] font-semibold">IT Security Alert — Q4</div>
              <div className="text-slate-500 text-[9px]">Active · 2,847 targets</div>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-400 text-[10px]">Live</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ─── Compliance Automation mock dashboard ─── */
function ComplianceDashboard() {
  const controls = [
    { name: 'SOC 2 Type II', pct: 87, status: 'In Progress' },
    { name: 'ISO 27001', pct: 94, status: 'Audit Ready' },
    { name: 'NIS2', pct: 62, status: 'In Progress' },
    { name: 'CRA', pct: 41, status: 'Planning' },
  ]
  return (
    <div className="rounded-xl bg-[#0a0f1e] border border-white/5 overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5 bg-white/2">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-slate-500 text-[10px]">Compliance Suite — Control Center</span>
      </div>
      <div className="p-4 space-y-4">
        {/* Readiness score */}
        <div className="flex items-center gap-4">
          <div className="relative w-16 h-16 flex-shrink-0">
            <svg viewBox="0 0 56 56" className="w-16 h-16 -rotate-90">
              <circle cx="28" cy="28" r="22" fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="5" />
              <circle cx="28" cy="28" r="22" fill="none" stroke="#10b981" strokeWidth="5"
                strokeDasharray={`${2 * Math.PI * 22 * 0.81} ${2 * Math.PI * 22 * 0.19}`}
                strokeLinecap="round" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white text-sm font-bold">81%</span>
            </div>
          </div>
          <div>
            <div className="text-white font-semibold text-sm">Audit Readiness</div>
            <div className="text-slate-500 text-[10px]">Overall compliance posture</div>
            <div className="flex items-center gap-1 mt-1">
              <div className="w-1.5 h-1.5 rounded-full bg-amber-400" />
              <span className="text-amber-400 text-[10px]">2 frameworks need attention</span>
            </div>
          </div>
        </div>
        {/* Frameworks */}
        <div className="space-y-2">
          {controls.map(c => (
            <div key={c.name} className="bg-white/3 rounded-lg p-2.5 border border-white/4">
              <div className="flex justify-between mb-1.5">
                <span className="text-slate-300 text-[11px] font-medium">{c.name}</span>
                <span className={`text-[9px] px-2 py-0.5 rounded-full ${
                  c.pct >= 90 ? 'bg-emerald-500/15 text-emerald-400' :
                  c.pct >= 60 ? 'bg-amber-500/15 text-amber-400' :
                  'bg-rose-500/15 text-rose-400'
                }`}>{c.status}</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 bg-white/4 rounded-full h-1.5">
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${c.pct}%`,
                      background: c.pct >= 90 ? '#10b981' : c.pct >= 60 ? '#f59e0b' : '#f43f5e'
                    }}
                  />
                </div>
                <span className="text-[10px] text-slate-400">{c.pct}%</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ─── Threat Modeling mock dashboard ─── */
function ThreatModelDashboard() {
  const threats = [
    { id: 'T-001', name: 'SQL Injection via API', severity: 'High', status: 'Mitigated' },
    { id: 'T-002', name: 'Privilege Escalation', severity: 'Critical', status: 'Open' },
    { id: 'T-003', name: 'Data Exfiltration', severity: 'High', status: 'In Review' },
    { id: 'T-004', name: 'SSRF Attack Vector', severity: 'Medium', status: 'Mitigated' },
  ]
  return (
    <div className="rounded-xl bg-[#0a0f1e] border border-white/5 overflow-hidden text-xs font-mono">
      <div className="flex items-center gap-1.5 px-3 py-2.5 border-b border-white/5 bg-white/2">
        <div className="w-2.5 h-2.5 rounded-full bg-rose-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber-500/60" />
        <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/60" />
        <span className="ml-2 text-slate-500 text-[10px]">Threat Modeling Studio — Risk Register</span>
      </div>
      <div className="p-4 space-y-3">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: 'Threats', value: '24', color: '#f43f5e' },
            { label: 'Mitigated', value: '18', color: '#10b981' },
            { label: 'Open', value: '6', color: '#f59e0b' },
          ].map(m => (
            <div key={m.label} className="bg-white/3 rounded-lg p-2 border border-white/4 text-center">
              <div className="font-bold text-sm" style={{ color: m.color }}>{m.value}</div>
              <div className="text-slate-500 text-[9px]">{m.label}</div>
            </div>
          ))}
        </div>
        <div className="space-y-1.5">
          {threats.map(t => (
            <div key={t.id} className="flex items-center gap-2 p-2 rounded-lg bg-white/2 border border-white/3">
              <span className="text-slate-600 text-[9px] w-10">{t.id}</span>
              <span className="flex-1 text-slate-300 text-[10px] truncate">{t.name}</span>
              <span className={`text-[9px] px-1.5 py-0.5 rounded ${
                t.severity === 'Critical' ? 'bg-rose-500/20 text-rose-400' :
                t.severity === 'High' ? 'bg-orange-500/20 text-orange-400' :
                'bg-amber-500/20 text-amber-400'
              }`}>{t.severity}</span>
              <span className={`text-[9px] ${
                t.status === 'Mitigated' ? 'text-emerald-400' :
                t.status === 'Open' ? 'text-rose-400' : 'text-amber-400'
              }`}>{t.status}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

const PRODUCTS = [
  {
    icon: Inbox,
    color: '#06b6d4',
    name: 'PhishGuard',
    tagline: 'Transform awareness into resilience.',
    description:
      'Enterprise phishing simulation and security awareness platform. Run realistic campaigns, measure human risk, and build a culture of security.',
    features: ['AI-Generated Templates', 'Real-Time Analytics', 'Risk Scoring', 'Compliance Reports'],
    dashboard: <PhishGuardDashboard />,
  },
  {
    icon: FileCheck2,
    color: '#10b981',
    name: 'Compliance Automation Suite',
    tagline: 'Evidence, controls, and audits on autopilot.',
    description:
      'Continuous compliance monitoring across multiple frameworks. Automate evidence collection, policy generation, and audit preparation.',
    features: ['Multi-Framework', 'Evidence Automation', 'Policy Builder', 'Audit Workflows'],
    dashboard: <ComplianceDashboard />,
  },
  {
    icon: Network,
    color: '#f59e0b',
    name: 'Threat Modeling Studio',
    tagline: 'Design security before writing code.',
    description:
      'AI-powered threat modeling that integrates into your design and development workflow. Identify risks before they become vulnerabilities.',
    features: ['AI Threat Analysis', 'STRIDE & PASTA', 'IDE Integration', 'Risk Registry'],
    dashboard: <ThreatModelDashboard />,
  },
]

export default function ProductsSection() {
  return (
    <section id="products" className="section-padding bg-[#060b18] relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[700px] h-[700px] rounded-full bg-violet-600/5 blur-[130px] pointer-events-none" />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="section-tag mb-4">SaaS Products</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Purpose-built security{' '}
            <span className="text-gradient-primary">products</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Not just consulting — production-grade SaaS products you can deploy today.
          </p>
        </motion.div>

        <div className="space-y-12">
          {PRODUCTS.map((prod, i) => {
            const Icon = prod.icon
            const isEven = i % 2 === 0
            return (
              <motion.div
                key={prod.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className={`grid lg:grid-cols-2 gap-10 items-center ${!isEven ? 'lg:grid-flow-col-dense' : ''}`}
              >
                {/* Content */}
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{ background: `${prod.color}20`, border: `1px solid ${prod.color}30` }}
                    >
                      <Icon className="w-5 h-5" style={{ color: prod.color }} />
                    </div>
                    <span
                      className="text-xs font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                      style={{ background: `${prod.color}15`, border: `1px solid ${prod.color}25`, color: prod.color }}
                    >
                      SaaS Product
                    </span>
                  </div>
                  <h3 className="text-3xl font-black text-white mb-2">{prod.name}</h3>
                  <p className="text-lg font-medium mb-4" style={{ color: prod.color }}>{prod.tagline}</p>
                  <p className="text-slate-400 leading-relaxed mb-6">{prod.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {prod.features.map(f => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-400">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" style={{ color: prod.color }} />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <a href="#contact" className="btn-primary text-sm py-2.5 px-5" style={{
                      background: `linear-gradient(135deg, ${prod.color}dd, ${prod.color}aa)`
                    }}>
                      Request Demo <ArrowRight className="w-3.5 h-3.5" />
                    </a>
                    <a href="#contact" className="btn-secondary text-sm py-2.5 px-5">Learn More</a>
                  </div>
                </div>

                {/* Dashboard mockup */}
                <div className={`${!isEven ? 'lg:col-start-1' : ''} relative`}>
                  <div
                    className="absolute -inset-4 rounded-3xl blur-2xl opacity-20"
                    style={{ background: `radial-gradient(circle, ${prod.color}, transparent 70%)` }}
                  />
                  <div className="relative">
                    {prod.dashboard}
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
