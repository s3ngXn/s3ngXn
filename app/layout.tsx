import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 's3ngXn — Product Security, Compliance & AI Governance',
  description:
    'Boutique cybersecurity and product security firm. Product Security as a Service, Compliance Automation, AI Security & Governance, Threat Modeling, and Red Teaming for SaaS, Cloud, and IoT organizations.',
  keywords: [
    'product security',
    'CISO',
    'compliance automation',
    'SOC2',
    'ISO27001',
    'AI security',
    'threat modeling',
    'red team',
    'DevSecOps',
    'cybersecurity consulting',
  ],
  authors: [{ name: 's3ngXn' }],
  creator: 's3ngXn',
  openGraph: {
    title: 's3ngXn — Secure Products. Resilient Platforms. Trusted Growth.',
    description:
      'Boutique Product Security & Compliance firm led by a veteran CISO and Product Security Architect with 20+ years of experience.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 's3ngXn — Product Security & Compliance',
    description: 'Boutique cybersecurity led by 20+ year veteran CISO.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#060b18',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.variable} suppressHydrationWarning>
      <body className="bg-navy-900 text-slate-100 antialiased">{children}</body>
    </html>
  )
}
