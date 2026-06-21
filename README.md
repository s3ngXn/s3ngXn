# s3ngXn — Product Security & Compliance

> **Secure Products. Resilient Platforms. Trusted Growth.**

Official website for **s3ngXn** (pronounced *SengZen*) — a boutique cybersecurity and product security firm founded by a veteran CISO and Product Security Architect with 20+ years of experience in SaaS, Cloud, IoT, DevSecOps, Compliance, and AI Security.

🌐 **Live site:** [https://s3ngxn.github.io/s3ngXn/](https://s3ngxn.github.io/s3ngXn/)

---

## About the Name

**s3ngXn** is derived from the founder's name:
- **s3n** from *Saran*
- **gXn** from *Govindarajan*
- **X** represents the Roman numeral 10 — symbolizing the journey between G and N

The brand represents trusted guidance through complexity.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | Next.js 14 (App Router, Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion |
| Icons | Lucide React |
| Deployment | GitHub Pages via GitHub Actions |

---

## Site Structure

The homepage is a single-page application with the following sections:

### Navigation
- Sticky header with blur backdrop
- Responsive mobile drawer menu
- Scroll-aware transparency transition

### Hero Section
- Split layout with animated canvas network visualization
- 8-node security topology graph (Product Security, AI Security, Compliance, Red Team, Threat Modeling, Secure SDLC, DevSecOps, s3ngXn hub)
- Flowing data particle animations — no clichéd hacker imagery
- Key stats and social proof

### Trusted By
- Infinite marquee of industry categories (SaaS, Cloud Native, IoT, HealthTech, FinTech, Enterprise, AI, DevTools)
- Compliance framework badges: ISO 27001, SOC 2, NIS2, CRA, OWASP, NIST CSF

### Core Services (6 cards)
1. **Product Security as a Service** — Fractional Product Security Office
2. **Compliance Automation** — ISO 27001, SOC 2, NIS2, CRA readiness
3. **PhishGuard** — Phishing simulation and awareness platform
4. **AI Security & Governance** — LLMs, Copilots, Agents, MCP ecosystems
5. **Threat Modeling Studio** — AI-assisted architecture security analysis
6. **Red Team & Penetration Testing** — Web, API, Cloud, Kubernetes, IoT

### Featured Products (with CSS dashboard mockups)
- **PhishGuard** — Campaign management, user risk scoring, department analytics
- **Compliance Automation Suite** — Multi-framework readiness gauge, control tracking
- **Threat Modeling Studio** — Risk register, threat severity matrix, mitigation tracker

### Why s3ngXn
- 4 core pillars: Deep Expertise · Built by Practitioners · Automation First · Business-Focused
- Credential bar: 20+ years, CISO, 3 SaaS Products, 6+ Frameworks

### Security Maturity Journey
- Interactive 5-stage timeline: Startup → Growth → Scale-Up → Enterprise → Regulated Industry
- Each stage shows recommended services and engagement type

### Thought Leadership
- 6 article preview cards across AI Security, Secure SDLC, Compliance, Cloud Security, Product Security, Red Team
- Newsletter signup

### Founder Section
- Executive profile for Saran Govindarajan
- Brand origin story, credentials, expertise tags

### Testimonials
- 4 client success stories with measurable outcomes (SOC 2 in 6 months, 85% audit prep reduction, 62% phishing click rate reduction)

### CTA & Contact
- Full contact form
- Dual CTAs: Schedule Consultation / Request Assessment

### Footer
- 4-column link structure: Services · Products · Resources · Company
- Inline newsletter signup

---

## Design System

- **Theme:** Dark space navy (`#060b18` base)
- **Accent palette:** Indigo `#6366f1` · Violet `#8b5cf6` · Cyan `#06b6d4`
- **Cards:** Glassmorphism with `backdrop-blur`, 1px rgba borders, hover glow
- **Typography:** Inter (via Next.js font optimization), tight tracking on headings
- **Animations:** Framer Motion entrance stagger, canvas particle network, CSS marquee, interactive timeline

---

## Local Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run dev server
npm run dev
# → http://localhost:3000

# Build static export
npm run build
# → output in /out
```

---

## Deployment

The site deploys automatically to GitHub Pages on every push to `main` via GitHub Actions (`.github/workflows/deploy.yml`).

**To enable for the first time:**
1. Go to **Settings → Pages** in this repository
2. Set **Source** to **GitHub Actions**
3. Push to `main` — the workflow builds and deploys automatically

The static export is configured with `basePath: '/s3ngXn'` so all assets resolve correctly under the GitHub Pages project path.

---

## Project Files

```
├── app/
│   ├── layout.tsx          # Root layout, SEO metadata, Inter font
│   ├── page.tsx            # Page assembly (imports all sections)
│   └── globals.css         # Design system: tokens, utilities, animations
├── components/
│   ├── NetworkAnimation.tsx          # Canvas security topology animation
│   └── sections/
│       ├── Navigation.tsx            # Sticky nav with mobile drawer
│       ├── HeroSection.tsx           # Hero + network animation
│       ├── TrustedBySection.tsx      # Marquee + compliance badges
│       ├── ServicesSection.tsx       # 6 service cards
│       ├── ProductsSection.tsx       # 3 products with dashboard mockups
│       ├── WhySection.tsx            # 4 pillars + credentials
│       ├── MaturityJourneySection.tsx # Interactive 5-stage timeline
│       ├── ThoughtLeadershipSection.tsx # Articles + newsletter
│       ├── FounderSection.tsx        # Executive profile
│       ├── TestimonialsSection.tsx   # Client success stories
│       ├── CTASection.tsx            # Contact form + CTAs
│       └── Footer.tsx                # Multi-column footer
├── .github/workflows/deploy.yml      # GitHub Actions → GitHub Pages
├── next.config.mjs                   # Static export + basePath config
├── tailwind.config.ts                # Extended theme, custom animations
└── tsconfig.json
```

---

*Built with precision. Designed for trust.*
