import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import ServicesSection from '@/components/ServicesSection';
import TrustSignals from '@/components/TrustSignals';
import HowItWorks from '@/components/HowItWorks';
import Testimonials from '@/components/Testimonials';
import CtaSection from '@/components/CtaSection';

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="container mx-auto px-4 space-y-24">
          <HeroSection />
          <TrustSignals />
          <ServicesSection />
          <HowItWorks />
          <Testimonials />
          <CtaSection />
        </div>
      </div>
      <Footer />
    </main>
  );
} 