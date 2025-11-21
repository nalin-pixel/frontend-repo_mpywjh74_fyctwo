import { motion } from 'framer-motion'

const faqs = [
  {
    q: 'What models do you support?',
    a: 'We support leading foundation models and can route based on cost, latency, and accuracy.'
  },
  {
    q: 'Is my data private?',
    a: 'Yes. We never use your data to train models. Enterprise plans include private deployments.'
  },
  {
    q: 'Can I connect my tools?',
    a: 'Easily connect calendars, CRMs, internal APIs, and more via secure tool calling.'
  }
]

export default function FAQ() {
  return (
    <section id="faq" className="relative py-24">
      <div className="relative mx-auto max-w-5xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white tracking-tight">Frequently asked questions</h2>
        <div className="mt-10 divide-y divide-white/10 rounded-2xl ring-1 ring-white/10 bg-white/[0.04]">
          {faqs.map((item, i) => (
            <motion.details key={item.q} className="group p-6" initial={false}>
              <summary className="cursor-pointer list-none text-white/90 font-medium flex items-center justify-between">
                {item.q}
                <span className="ml-6 h-6 w-6 rounded-full bg-white/10 grid place-items-center text-white/70 group-open:rotate-45 transition-transform">+</span>
              </summary>
              <motion.p
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="mt-3 text-slate-300/90"
              >
                {item.a}
              </motion.p>
            </motion.details>
          ))}
        </div>
      </div>
    </section>
  )
}
