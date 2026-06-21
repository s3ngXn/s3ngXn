'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Clock, Send } from 'lucide-react'
import { useState } from 'react'

const ARTICLES = [
  {
    category: 'AI Security',
    categoryColor: '#8b5cf6',
    title: 'MCP Security: What Every CISO Needs to Know About Model Context Protocol',
    excerpt:
      'AI agents are proliferating. The MCP ecosystem introduces new attack surfaces — prompt injection, data exfiltration, privilege escalation. Here\'s how to govern them.',
    readTime: '8 min',
    date: 'Jun 2025',
  },
  {
    category: 'Secure SDLC',
    categoryColor: '#6366f1',
    title: 'Why Threat Modeling Is the Highest-ROI Security Activity in Your SDLC',
    excerpt:
      'A security bug found in design costs 10× less to fix than one found in production. We break down how to embed threat modeling into sprint workflows without friction.',
    readTime: '6 min',
    date: 'May 2025',
  },
  {
    category: 'Compliance',
    categoryColor: '#10b981',
    title: 'CRA Readiness: A Practical Guide for SaaS Companies Selling into Europe',
    excerpt:
      'The EU Cyber Resilience Act takes effect in 2027. Here\'s what product teams need to do now — and how automation can turn compliance into a competitive advantage.',
    readTime: '10 min',
    date: 'May 2025',
  },
  {
    category: 'Cloud Security',
    categoryColor: '#06b6d4',
    title: 'Multi-Tenant SaaS: The 12 Security Controls Your Architecture Must Have',
    excerpt:
      'Data isolation, tenant poisoning, noisy neighbor attacks — multi-tenant SaaS security is a unique discipline. We\'ve battle-tested these controls across dozens of platforms.',
    readTime: '9 min',
    date: 'Apr 2025',
  },
  {
    category: 'Product Security',
    categoryColor: '#f59e0b',
    title: 'Building a Security Champion Program That Actually Works',
    excerpt:
      'Most security champion programs fail within 12 months. We\'ve run successful programs at scale — here\'s the blueprint, including what not to do.',
    readTime: '7 min',
    date: 'Apr 2025',
  },
  {
    category: 'Red Team',
    categoryColor: '#f43f5e',
    title: 'IoT Security Testing: Attack Vectors Modern Products Are Missing',
    excerpt:
      'From firmware extraction to MQTT broker attacks — IoT security is more complex than web app pentesting. A practitioner\'s guide to what actually matters.',
    readTime: '11 min',
    date: 'Mar 2025',
  },
]

export default function ThoughtLeadershipSection() {
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) setSubmitted(true)
  }

  return (
    <section id="insights" className="section-padding bg-[#080e1e] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14"
        >
          <div>
            <span className="section-tag mb-4">Thought Leadership</span>
            <h2 className="text-4xl sm:text-5xl font-black tracking-tight text-white mb-3">
              Security insights from the{' '}
              <span className="text-gradient-primary">field</span>
            </h2>
            <p className="text-lg text-slate-400 max-w-xl">
              Practitioner-written content on AI security, compliance, product security, and emerging threats.
            </p>
          </div>
          <a href="#" className="btn-secondary text-sm flex-shrink-0">
            View all articles <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </motion.div>

        {/* Article grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {ARTICLES.map((a, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -4 }}
              className="group card-glass p-6 cursor-pointer flex flex-col"
            >
              {/* Category + meta */}
              <div className="flex items-center justify-between mb-4">
                <span
                  className="text-[10px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full"
                  style={{
                    background: `${a.categoryColor}18`,
                    border: `1px solid ${a.categoryColor}28`,
                    color: a.categoryColor,
                  }}
                >
                  {a.category}
                </span>
                <div className="flex items-center gap-1 text-slate-600 text-[10px]">
                  <Clock className="w-3 h-3" />
                  {a.readTime}
                </div>
              </div>

              <h3 className="text-base font-bold text-white leading-snug mb-3 group-hover:text-indigo-300 transition-colors flex-1">
                {a.title}
              </h3>

              <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-3">
                {a.excerpt}
              </p>

              <div className="flex items-center justify-between mt-auto pt-4 border-t border-white/5">
                <span className="text-xs text-slate-600">{a.date}</span>
                <div className="flex items-center gap-1 text-xs font-semibold" style={{ color: a.categoryColor }}>
                  Read more
                  <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        {/* Newsletter signup */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden border border-white/6"
          style={{ background: 'linear-gradient(135deg, rgba(99,102,241,0.08) 0%, rgba(139,92,246,0.05) 50%, rgba(6,182,212,0.05) 100%)' }}
        >
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/30 to-transparent" />
          <div className="px-8 py-10 text-center">
            <h3 className="text-2xl font-black text-white mb-2">Stay ahead of emerging threats</h3>
            <p className="text-slate-400 mb-6 max-w-lg mx-auto">
              Monthly digest of product security, compliance updates, and AI governance insights. No spam, ever.
            </p>
            {submitted ? (
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="inline-flex items-center gap-2 text-emerald-400 font-semibold"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-400/20 flex items-center justify-center">✓</div>
                You&apos;re subscribed. Welcome aboard.
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@company.com"
                  required
                  className="flex-1 px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-slate-500 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30"
                />
                <button type="submit" className="btn-primary text-sm py-3 px-6 flex-shrink-0">
                  Subscribe
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
