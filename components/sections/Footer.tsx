import { Linkedin, Twitter, Github, Mail, ArrowRight } from 'lucide-react'

const FOOTER_LINKS = {
  Services: [
    'Product Security as a Service',
    'Compliance Automation',
    'AI Security & Governance',
    'Threat Modeling',
    'Red Team & Penetration Testing',
    'Fractional CISO',
  ],
  Products: ['PhishGuard', 'Compliance Suite', 'Threat Modeling Studio'],
  Resources: ['Blog & Insights', 'Security Guides', 'Compliance Templates', 'Threat Modeling Toolkit', 'AI Security Checklist'],
  Company: ['About', 'Trust Center', 'Privacy Policy', 'Terms of Service', 'Contact'],
}

const SOCIAL = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Github, label: 'GitHub', href: '#' },
  { icon: Mail, label: 'Email', href: 'mailto:hello@s3ngxn.com' },
]

export default function Footer() {
  return (
    <footer className="bg-[#03060f] border-t border-white/5 pt-16 pb-8">
      <div className="container-max px-4 sm:px-6 lg:px-8">
        {/* Top section */}
        <div className="grid lg:grid-cols-6 gap-10 mb-14">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500/30 to-violet-600/30 border border-indigo-500/20 flex items-center justify-center">
                <span className="text-xs font-black text-indigo-300">s3n</span>
              </div>
              <span className="font-black text-xl tracking-tight">
                <span className="text-gradient-primary">s3ng</span>
                <span className="text-white">X</span>
                <span className="text-slate-400">n</span>
              </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed mb-5 max-w-xs">
              Boutique cybersecurity and product security firm. Trusted guidance through complexity — helping organizations build secure products, resilient platforms, and compliant businesses.
            </p>

            {/* Social links */}
            <div className="flex gap-2">
              {SOCIAL.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  aria-label={s.label}
                  className="w-8 h-8 rounded-lg bg-white/4 border border-white/6 flex items-center justify-center hover:bg-indigo-500/15 hover:border-indigo-500/30 transition-all"
                >
                  <s.icon className="w-3.5 h-3.5 text-slate-500 hover:text-indigo-300 transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(FOOTER_LINKS).map(([section, links]) => (
            <div key={section}>
              <h4 className="text-xs font-bold text-slate-300 uppercase tracking-widest mb-4">{section}</h4>
              <ul className="space-y-2.5">
                {links.map(link => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-slate-500 hover:text-slate-300 transition-colors group flex items-center gap-1"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter strip */}
        <div className="mb-10 p-5 rounded-2xl bg-white/2 border border-white/5 flex flex-col sm:flex-row items-center gap-4">
          <div className="flex-1">
            <div className="text-sm font-semibold text-white mb-0.5">Security Intelligence Newsletter</div>
            <div className="text-xs text-slate-500">Monthly practitioner insights. No spam.</div>
          </div>
          <div className="flex gap-2 flex-shrink-0">
            <input
              type="email"
              placeholder="your@company.com"
              className="px-3.5 py-2 rounded-xl bg-white/5 border border-white/8 text-white placeholder-slate-600 text-sm focus:outline-none focus:border-indigo-500/40 w-48"
            />
            <button className="btn-primary text-sm py-2 px-4">
              Subscribe <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-600">
            © {new Date().getFullYear()} s3ngXn. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            {['Privacy Policy', 'Terms of Service', 'Trust Center'].map(l => (
              <a key={l} href="#" className="text-xs text-slate-600 hover:text-slate-400 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <div className="text-xs text-slate-600">
            Designed with precision. Built for trust.
          </div>
        </div>
      </div>
    </footer>
  )
}
