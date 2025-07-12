
import HeroSection from '../components/sections/HeroSection';
import FeaturesSection from '../components/sections/FeaturesSection';
import WorksSection from '../components/sections/WorksSection';
// import Testimonials from '../components/sections/Testimonials';

import BenefitsSection from '@/components/sections/BenifetsSection';


export default function HomePage() {
  return (
    <main className="min-h-screen m-auto">
      
      <HeroSection />
      <FeaturesSection />
      <WorksSection />
      <BenefitsSection />
      
    </main>
  );
}
