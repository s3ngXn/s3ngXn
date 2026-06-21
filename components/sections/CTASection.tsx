'use client'

import { motion } from 'framer-motion'
import { ArrowRight, CalendarCheck, ClipboardCheck } from 'lucide-react'

export default function CTASection() {
  return (
    <section id="contact" className="section-padding bg-[#080e1e] relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent" />

      {/* Gradient orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-96 h-96 rounded-full bg-indigo-600/10 blur-[100px]" />
        <div className="absolute -bottom-20 right-1/4 w-96 h-96 rounded-full bg-violet-600/10 blur-[100px]" />
      </div>

      <div className="container-max relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto"
        >
          <span className="section-tag mb-6">Ready to Begin?</span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 leading-tight">
            Build Security Into{' '}
            <span className="text-gradient-primary">Your Business DNA.</span>
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed mb-10 max-w-xl mx-auto">
            Whether you need a fractional CISO, compliance automation, or a full red team exercise —
            we&apos;ll meet you where you are and take you where you need to go.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <motion.a
              href="mailto:hello@s3ngxn.com"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-primary text-base py-4 px-8"
            >
              <CalendarCheck className="w-5 h-5" />
              Schedule Consultation
            </motion.a>
            <motion.a
              href="mailto:hello@s3ngxn.com"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="btn-secondary text-base py-4 px-8"
            >
              <ClipboardCheck className="w-5 h-5" />
              Request Assessment
            </motion.a>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            {[
              '✦ No long-term contracts',
              '✦ Response within 24 hours',
              '✦ NDA available on request',
              '✦ Confidential by default',
            ].map(t => (
              <span key={t}>{t}</span>
            ))}
          </div>
        </motion.div>

        {/* Contact form stub */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-14 max-w-2xl mx-auto card-glass p-8"
        >
          <h3 className="text-lg font-bold text-white mb-6 text-center">Send a Message</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {[
              { label: 'Your Name', placeholder: 'Jane Smith', type: 'text' },
              { label: 'Work Email', placeholder: 'jane@company.com', type: 'email' },
              { label: 'Company', placeholder: 'Acme Corp', type: 'text' },
              { label: 'Role / Title', placeholder: 'CISO, CTO, VP Engineering', type: 'text' },
            ].map(f => (
              <div key={f.label}>
                <label className="block text-xs text-slate-400 mb-1.5 font-medium">{f.label}</label>
                <input
                  type={f.type}
                  placeholder={f.placeholder}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 transition-all"
                />
              </div>
            ))}
          </div>
          <div className="mb-4">
            <label className="block text-xs text-slate-400 mb-1.5 font-medium">How can we help?</label>
            <textarea
              rows={3}
              placeholder="Tell us about your security challenges or goals..."
              className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/30 resize-none transition-all"
            />
          </div>
          <button className="btn-primary w-full justify-center py-3.5 text-sm">
            Send Message
            <ArrowRight className="w-4 h-4" />
          </button>
          <p className="text-center text-xs text-slate-600 mt-3">
            Your information is confidential. We never share client data.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
