import { motion } from 'framer-motion'
import { Sparkles, Workflow, Headphones } from 'lucide-react'

const steps = [
  {
    icon: Headphones,
    title: 'Listen',
    desc: 'Your agent understands intent with streaming ASR and smart interruptions.'
  },
  {
    icon: Workflow,
    title: 'Reason',
    desc: 'Chain-of-thought planning routes tasks, tools, and data sources safely.'
  },
  {
    icon: Sparkles,
    title: 'Act',
    desc: 'Executes actions, confirms results, and follows up — fully hands-free.'
  }
]

export default function How() {
  return (
    <section id="how" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute right-1/4 -top-10 h-72 w-72 rounded-full blur-3xl opacity-40" style={{
          background: 'radial-gradient(circle, rgba(59,130,246,0.25), rgba(168,85,247,0.2), transparent)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white tracking-tight">How it works</h2>
        <p className="mt-3 text-center text-slate-300 max-w-2xl mx-auto">
          Three simple phases, one fluid conversation.
        </p>

        <div className="mt-12 grid gap-8 lg:grid-cols-3">
          {steps.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="relative rounded-3xl bg-white/[0.04] ring-1 ring-white/10 p-8 overflow-hidden"
            >
              <div className="absolute inset-px rounded-[22px] pointer-events-none" style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0))'
              }} />
              <div className="relative flex items-center gap-4">
                <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-white text-lg font-medium">{title}</h3>
                  <p className="text-slate-300/90 mt-1">{desc}</p>
                </div>
              </div>
              <div className="mt-6 text-sm text-slate-400">Step {i + 1} of 3</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
