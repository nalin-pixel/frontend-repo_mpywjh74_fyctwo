import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import Features from './components/Features'
import How from './components/How'
import Pricing from './components/Pricing'
import FAQ from './components/FAQ'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      {/* Background aura gradient */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[-10%] -translate-x-1/2 h-[1200px] w-[1200px] rounded-full opacity-70 blur-3xl" style={{
          background: 'radial-gradient(closest-side, rgba(124,58,237,0.22), rgba(59,130,246,0.18), rgba(251,146,60,0.14), transparent)'
        }} />
      </div>

      <div className="relative">
        <Navbar />
        <Hero />
        <Marquee />
        <Features />
        <How />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
    </div>
  )
}

export default App
