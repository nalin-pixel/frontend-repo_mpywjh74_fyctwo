import { Mic, Zap, ShieldCheck, Globe } from 'lucide-react';
import { motion } from 'framer-motion'

const features = [
  {
    icon: Mic,
    title: 'Natural voice',
    desc: 'Human-like conversation with low latency streaming and barge-in support.'
  },
  {
    icon: Zap,
    title: 'Takes action',
    desc: 'Connect tools and APIs so your agent can schedule, search, and execute.'
  },
  {
    icon: ShieldCheck,
    title: 'Enterprise-grade',
    desc: 'SSO, audit logs, role-based permissions, and SOC2-ready controls.'
  },
  {
    icon: Globe,
    title: 'Global scale',
    desc: 'Multi-region, autoscaling infra with 99.95% uptime and dedicated instances.'
  }
];

export default function Features() {
  return (
    <section id="features" className="relative py-20">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 h-64 w-64 rounded-full blur-3xl opacity-40" style={{
          background: 'radial-gradient(circle, rgba(99,102,241,0.35), rgba(168,85,247,0.25), transparent)'
        }} />
      </div>
      <div className="relative mx-auto max-w-7xl px-6">
        <h2 className="text-center text-3xl md:text-4xl font-semibold text-white tracking-tight">Built for real work</h2>
        <p className="mt-3 text-center text-slate-300 max-w-2xl mx-auto">
          A minimal, futuristic voice agent that plugs into your stack and gets results.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, desc }, i) => (
            <motion.div
              key={title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative rounded-2xl bg-white/[0.04] ring-1 ring-white/10 p-6 hover:bg-white/[0.06] transition"
            >
              <div className="absolute inset-px rounded-[14px] pointer-events-none" style={{
                background: 'linear-gradient(180deg, rgba(255,255,255,0.05), rgba(255,255,255,0))'
              }} />
              <div className="relative h-10 w-10 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 flex items-center justify-center text-white shadow-lg shadow-indigo-500/30">
                <Icon size={20} />
              </div>
              <h3 className="relative mt-4 text-white font-medium text-lg">{title}</h3>
              <p className="relative mt-2 text-slate-300 text-sm leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
