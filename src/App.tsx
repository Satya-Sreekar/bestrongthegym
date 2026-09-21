import Nav from './components/Nav'
import Hero from './components/Hero'
import PhotoMarquee from './components/PhotoMarquee'
import Inside from './components/Inside'
import FirstMonth from './components/FirstMonth'
import Tracks from './components/Tracks'
import Coaches from './components/Coaches'
import Pricing from './components/Pricing'
import Voices from './components/Voices'
import Instagram from './components/Instagram'
import Visit from './components/Visit'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Hero />
        <PhotoMarquee />
        <Inside />
        <FirstMonth />
        <Tracks />
        <Coaches />
        <Pricing />
        <Voices />
        <Instagram />
        <Visit />
        <FAQ />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
