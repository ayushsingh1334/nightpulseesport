import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed w-full z-[60] top-0 transition-all duration-300 py-4 left-0 right-0">
      <div className="w-full px-6">
        <div className="max-w-7xl mx-auto glass-panel rounded-full px-6 py-2.5 flex items-center justify-between border border-white/5 bg-[#0a0a0c]/50">
          <a href="/" className="cursor-hover group flex items-center gap-2">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img
                src="./icons/LOGO.jpeg"
                alt="NightPulse Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <span className="font-heading font-semibold text-lg tracking-tight text-white">
              NIGHTPULSE
            </span>
          </a>
          <div className="hidden md:flex items-center gap-8">
            <a
              href="/"
              className="cursor-hover text-[11px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              Home
            </a>
            <a
              href="/games"
              className="cursor-hover text-[11px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              Games
            </a>
            <a
              href="/tournaments"
              className="cursor-hover text-[11px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              Tournaments
            </a>
            <a
              href="/highlights"
              className="cursor-hover text-[11px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              Highlights
            </a>
            <a
              href="/join"
              className="cursor-hover text-[11px] font-medium uppercase tracking-widest text-white/60 hover:text-white transition-colors"
            >
              Join
            </a>
          </div>
          <div className="hidden md:block">
            <button className="cursor-hover px-5 py-2 border border-white/10 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-black hover:border-white transition-colors bg-white/5 backdrop-blur-sm text-white">
              Discord
            </button>
          </div>
          <button className="md:hidden text-white cursor-hover">
            <span
              className="iconify"
              data-icon="lucide:menu"
              data-width="20"
            ></span>
          </button>
        </div>
      </div>
    </nav>
  );
}
