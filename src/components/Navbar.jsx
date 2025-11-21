import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-20">
      <nav className="mx-auto max-w-7xl px-6 py-6 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-indigo-500 via-fuchsia-500 to-amber-400 shadow-lg shadow-indigo-500/30" />
          <span className="text-white text-lg font-semibold tracking-tight">NovaVoice AI</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm text-slate-300">
          <a className="hover:text-white transition" href="#features">Features</a>
          <a className="hover:text-white transition" href="#how">How it works</a>
          <a className="hover:text-white transition" href="#pricing">Pricing</a>
          <a className="hover:text-white transition" href="#faq">FAQ</a>
        </div>
        <div className="hidden md:flex items-center gap-3">
          <button className="px-4 py-2 rounded-lg text-slate-200 hover:text-white transition">Sign in</button>
          <button className="px-4 py-2 rounded-lg bg-white text-slate-900 font-medium hover:bg-slate-100 transition">Get started</button>
        </div>
        <button className="md:hidden text-white/80" aria-label="Open menu">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  );
}
