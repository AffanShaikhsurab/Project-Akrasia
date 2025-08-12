import Header from '@/components/Header'
import ParadoxSection from '@/components/sections/ParadoxSection'
import WhySection from '@/components/sections/WhySection'
import ImpactSection from '@/components/sections/ImpactSection'
import HowSection from '@/components/sections/HowSection'
import DisciplineEquationSection from '@/components/sections/DisciplineEquationSection'
import StudiesSection from '@/components/sections/StudiesSection'
// TODO: Create and import ResourcesSection component
import ResourcesSection from '@/components/sections/ResourcesSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFBF8] text-[#38332F] antialiased">
      <Header />
      <main>
        <ParadoxSection />
        <WhySection />
        <ImpactSection />
        <HowSection />
        <DisciplineEquationSection />
        <StudiesSection />
        <ResourcesSection />
      </main>
      <Footer />
    </div>
  )
}