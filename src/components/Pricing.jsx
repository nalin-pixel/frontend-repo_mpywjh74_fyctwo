import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Starter',
    price: '$0',
    blurb: 'Perfect to explore the API and build a prototype.',
    features: ['10k tokens/day', 'Community support', 'Shared infra']
  },
  {
    name: 'Pro',
    price: '$39',
    blurb: 'For small teams shipping real assistants.',
    features: ['2M tokens/month', 'Priority support', 'Tool calling & webhooks']
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    blurb: 'Compliance-ready deployments at scale.',
    features: ['SSO/SAML', 'VPC & dedicated instances', 'SLAs & audit logs']
  }
]

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/3 top-10 h-80 w-80 rounded-full blur-3xl opacity-40" style={{
          background: 'radial-gradient(circle, rgba(124,58,237,0.25), rgba(251,146,60,0.2), transparent)'
        }} />
      </div>

      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white tracking-tight">Simple pricing</h2>
        <p className="mt-3 text-center text-slate-300 max-w-2xl mx-auto">
          Start free. Scale as your assistant takes on more work.
        </p>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {tiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative rounded-3xl p-8 ring-1 ring-white/10 bg-white/[0.04] ${tier.name === 'Pro' ? 'lg:scale-105 lg:-mt-2' : ''}`}
            >
              {tier.name === 'Pro' && (
                <span className="absolute right-4 top-4 text-[10px] uppercase tracking-wider px-2 py-1 rounded-full bg-amber-400/20 text-amber-300 ring-1 ring-amber-300/30">Popular</span>
              )}
              <h3 className="text-white text-lg font-medium">{tier.name}</h3>
              <div className="mt-3 text-4xl font-semibold text-white">{tier.price}<span className="text-base text-slate-400 font-normal">{tier.name==='Pro' ? '/mo' : ''}</span></div>
              <p className="mt-2 text-slate-300/90">{tier.blurb}</p>
              <ul className="mt-5 space-y-2 text-sm text-slate-300/90">
                {tier.features.map(f => (
                  <li key={f} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400" />
                    {f}
                  </li>
                ))}
              </ul>
              <button className={`mt-6 w-full rounded-xl px-4 py-3 font-medium transition ${tier.name === 'Pro' ? 'bg-white text-slate-900 hover:bg-slate-100' : 'bg-white/10 text-white ring-1 ring-white/15 hover:bg-white/15'}`}>Get started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
