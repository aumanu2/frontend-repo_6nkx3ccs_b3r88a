import React, { useRef } from 'react'
import Hero from './components/Hero'
import Services from './components/Services'
import Pricing from './components/Pricing'
import Showcase from './components/Showcase'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import { Navbar, Footer } from './components/NavFooter'

function App() {
  const contactRef = useRef(null)
  const scrollToContact = () => {
    const el = document.getElementById('contact')
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  const handlePayClick = async (tier) => {
    // Redirects to a pre-configured Stripe Checkout link placeholders
    const links = {
      Starter: 'https://buy.stripe.com/test_4gw3dS4T45YI2Te5kk',
      Growth: 'https://buy.stripe.com/test_9AQ4kUeHqfFM2qE8ww',
      Premium: 'https://buy.stripe.com/test_9AQeWkgUo0mQ8hq7ss'
    }
    const url = links[tier.name]
    if (url) window.location.href = url
  }

  return (
    <div className="min-h-screen bg-white text-slate-900">
      <Navbar onCTAClick={scrollToContact} />
      <Hero onCTAClick={scrollToContact} />
      <Services />
      <div id="showcase"><Showcase /></div>
      <Pricing onPayClick={handlePayClick} />
      <Testimonials />
      <div ref={contactRef}><Contact /></div>
      <Footer />
    </div>
  )
}

export default App
