import Nav from './components/Nav'
import Hero from './components/Hero'
import TrustBar from './components/TrustBar'
import Why from './components/Why'
import Services from './components/Services'
import WomensPT from './components/WomensPT'
import CoupleOffer from './components/CoupleOffer'
import Gallery from './components/Gallery'
import Reviews from './components/Reviews'
import Membership from './components/Membership'
import AppAndFitpass from './components/AppAndFitpass'
import About from './components/About'
import FAQ from './components/FAQ'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppFab from './components/WhatsAppFab'

export default function App() {
  return (
    <>
      <a className="skip" href="#main">
        Skip to content
      </a>
      <Nav />
      <main id="main">
        <Hero />
        <TrustBar />
        <Why />
        <Services />
        <WomensPT />
        <CoupleOffer />
        <Gallery />
        <Reviews />
        <Membership />
        <AppAndFitpass />
        <About />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </>
  )
}
