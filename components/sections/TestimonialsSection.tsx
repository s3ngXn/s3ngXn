'use client'

import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const TESTIMONIALS = [
  {
    quote:
      'Working with s3ngXn transformed how we think about product security. We went from reactive patching to proactive threat modeling embedded in every sprint. Our enterprise customers noticed immediately.',
    author: 'VP of Engineering',
    company: 'Series B SaaS Platform',
    industry: 'HealthTech',
    metrics: ['70% reduction in security findings', 'SOC 2 Type II achieved in 6 months'],
    accentColor: '#6366f1',
  },
  {
    quote:
      'The Compliance Automation Suite cut our SOC 2 audit prep from 4 months to 3 weeks. Evidence collection is now continuous and automated. Our auditors actually complimented our documentation.',
    author: 'Chief Compliance Officer',
    company: 'Enterprise SaaS',
    industry: 'FinTech',
    metrics: ['85% reduction in audit prep time', 'Zero audit findings on first pass'],
    accentColor: '#10b981',
  },
  {
    quote:
      'PhishGuard gave us real data on human risk for the first time. We used to guess about training effectiveness — now we have measurable improvement and exec dashboards that actually tell a story.',
    author: 'CISO',
    company: 'Mid-Market Tech',
    industry: 'Cloud Native',
    metrics: ['62% reduction in phishing click rate', '3x increase in threat reporting'],
    accentColor: '#06b6d4',
  },
  {
    quote:
      'The red team engagement was unlike anything I\'d seen before. The team understood our multi-tenant architecture deeply and found critical tenant isolation issues that internal testing had missed entirely.',
    author: 'CTO',
    company: 'IoT Platform Provider',
    industry: 'Industrial IoT',
    metrics: ['4 critical vulnerabilities found', 'Full remediation in 8 weeks'],
    accentColor: '#f43f5e',
  },
]

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="section-padding bg-[#060b18] relative overflow-hidden">
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(99,102,241,0.04) 0%, transparent 70%)' }}
      />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <span className="section-tag mb-4">Client Results</span>
          <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-4">
            Security that moves{' '}
            <span className="text-gradient-primary">the needle</span>
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Measurable outcomes from organizations that chose to build security into their DNA.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6">
          {TESTIMONIALS.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.12 }}
              whileHover={{ y: -4 }}
              className="group card-glass p-7 relative overflow-hidden"
            >
              {/* Accent corner */}
              <div
                className="absolute top-0 left-0 w-24 h-1 rounded-br-full"
                style={{ background: `linear-gradient(90deg, ${t.accentColor}, transparent)` }}
              />

              {/* Quote icon */}
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center mb-5"
                style={{ background: `${t.accentColor}18`, border: `1px solid ${t.accentColor}28` }}
              >
                <Quote className="w-4 h-4" style={{ color: t.accentColor }} />
              </div>

              {/* Quote text */}
              <blockquote className="text-slate-300 leading-relaxed mb-6 text-[15px]">
                &ldquo;{t.quote}&rdquo;
              </blockquote>

              {/* Metrics */}
              <div className="flex flex-wrap gap-2 mb-5">
                {t.metrics.map(m => (
                  <div
                    key={m}
                    className="text-[11px] px-2.5 py-1 rounded-full font-semibold"
                    style={{
                      background: `${t.accentColor}15`,
                      border: `1px solid ${t.accentColor}25`,
                      color: t.accentColor,
                    }}
                  >
                    ↑ {m}
                  </div>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div
                  className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 text-xs font-bold text-white"
                  style={{ background: `linear-gradient(135deg, ${t.accentColor}, ${t.accentColor}88)` }}
                >
                  {t.author.split(' ').map(w => w[0]).join('').slice(0, 2)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{t.author}</div>
                  <div className="text-xs text-slate-500">
                    {t.company} · {t.industry}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
