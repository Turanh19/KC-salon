import Hero from '../components/sections/Hero.jsx'
import ServiceTicker from '../components/sections/ServiceTicker.jsx'
import Stats from '../components/sections/Stats.jsx'
import About from '../components/sections/About.jsx'
import CategoriesOverview from '../components/sections/CategoriesOverview.jsx'
import PicoSureFeature from '../components/sections/PicoSureFeature.jsx'
import WhyUs from '../components/sections/WhyUs.jsx'
import Results from '../components/sections/Results.jsx'
import Team from '../components/sections/Team.jsx'
import Testimonials from '../components/sections/Testimonials.jsx'
import Contact from '../components/sections/Contact.jsx'
import CtaBand from '../components/sections/CtaBand.jsx'

export default function Home() {
  return (
    <>
      <Hero />
      <ServiceTicker />
      <Stats />
      <About />
      <CategoriesOverview />
      <PicoSureFeature />
      <WhyUs />
      <Results />
      <Team />
      <Testimonials />
      <Contact />
      <CtaBand />
    </>
  )
}
