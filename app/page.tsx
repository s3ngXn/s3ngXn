import Navigation from '@/components/sections/Navigation'
import HeroSection from '@/components/sections/HeroSection'
import TrustedBySection from '@/components/sections/TrustedBySection'
import ServicesSection from '@/components/sections/ServicesSection'
import ProductsSection from '@/components/sections/ProductsSection'
import WhySection from '@/components/sections/WhySection'
import MaturityJourneySection from '@/components/sections/MaturityJourneySection'
import ThoughtLeadershipSection from '@/components/sections/ThoughtLeadershipSection'
import FounderSection from '@/components/sections/FounderSection'
import TestimonialsSection from '@/components/sections/TestimonialsSection'
import CTASection from '@/components/sections/CTASection'
import Footer from '@/components/sections/Footer'

export default function HomePage() {
  return (
    <main className="relative overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <TrustedBySection />
      <ServicesSection />
      <ProductsSection />
      <WhySection />
      <MaturityJourneySection />
      <ThoughtLeadershipSection />
      <FounderSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </main>
  )
}
