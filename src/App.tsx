import Nav from './components/Nav'
import Hero from './components/Hero'
import Ticker from './components/Ticker'
import Stats from './components/Stats'
import About from './components/About'
import Facilities from './components/Facilities'
import Programs from './components/Programs'
import Instagram from './components/Instagram'
import Trainers from './components/Trainers'
import Pricing from './components/Pricing'
import Transformation from './components/Transformation'
import Reviews from './components/Reviews'
import FAQ from './components/FAQ'
import Visit from './components/Visit'
import Footer from './components/Footer'
import MobileBar from './components/MobileBar'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <Ticker />
        <Stats />
        <About />
        <Facilities />
        <Programs />
        <Instagram />
        <Trainers />
        <Pricing />
        <Transformation />
        <Reviews />
        <FAQ />
        <Visit />
      </main>
      <Footer />
      <MobileBar />
      <div className="grain" aria-hidden="true" />
    </>
  )
}
