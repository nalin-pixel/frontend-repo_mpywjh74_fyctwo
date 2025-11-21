import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-[900px] w-[900px] rounded-full blur-3xl opacity-60" style={{
          background: 'radial-gradient(closest-side, rgba(124,58,237,0.35), rgba(59,130,246,0.25), rgba(251,146,60,0.2), transparent)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 pt-16 pb-24 lg:pt-24 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 ring-1 ring-white/15 px-3 py-1 text-xs text-white/80 mb-5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Live voice agent • <span className="text-white/70">beta</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
              Speak to your AI. Get things done.
            </h1>
            <p className="mt-5 text-lg text-slate-300 leading-relaxed max-w-xl">
              A futuristic, minimal voice agent that listens, thinks, and acts. Built for teams that want human-grade assistance with enterprise reliability.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <button className="px-5 py-3 rounded-xl bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Try the demo</button>
              <button className="px-5 py-3 rounded-xl bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15 transition">View docs</button>
            </div>
            <div className="mt-6 flex items-center gap-6 text-xs text-slate-300/80">
              <span>Secure by default</span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span>Enterprise SSO</span>
              <span className="h-1 w-1 rounded-full bg-slate-400" />
              <span>99.95% uptime</span>
            </div>
          </motion.div>

          <motion.div className="relative h-[420px] sm:h-[520px] lg:h-[560px]" initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="absolute inset-0 rounded-3xl ring-1 ring-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className="pointer-events-none absolute -inset-1 rounded-[28px]" style={{
              background: 'radial-gradient(1000px 200px at 50% 0%, rgba(124,58,237,0.15), rgba(59,130,246,0.08), transparent)'
            }} />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
