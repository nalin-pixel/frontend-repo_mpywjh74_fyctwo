import { motion } from 'framer-motion'

const logos = ['OpenAI', 'Vercel', 'Stripe', 'Notion', 'Linear', 'Figma']

export default function Marquee() {
  return (
    <section className="relative py-10">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-2xl ring-1 ring-white/10 bg-white/[0.03] overflow-hidden">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex gap-12 whitespace-nowrap py-6 px-6"
          >
            {[...logos, ...logos].map((name, idx) => (
              <span key={idx} className="text-slate-300/90 text-sm">Trusted by teams at <span className="text-white">{name}</span></span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
