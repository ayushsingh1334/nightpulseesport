import React from "react";

export default function Footer() {
  return (
    <footer className="relative py-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Copyright */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(99,102,241,0.3)] group-hover:scale-110 transition-transform duration-300 overflow-hidden">
              <img
                src="./icons/LOGO.jpeg"
                alt="NightPulse Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <span className="font-heading font-semibold text-white block">NIGHTPULSE</span>
              <p className="text-[9px] text-gray-600">© 2026 All rights reserved</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex items-center gap-8 text-[11px] uppercase tracking-widest text-gray-500">
            <a href="/games" className="cursor-hover hover:text-white transition-colors">Games</a>
            <a href="/tournaments" className="cursor-hover hover:text-white transition-colors">Tournaments</a>
            <a href="#" className="cursor-hover hover:text-white transition-colors">Privacy</a>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            <a href="#" className="cursor-hover group flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300">
              <span className="iconify text-white group-hover:text-indigo-400" data-icon="lucide:twitter" data-width="14"></span>
            </a>
            <a href="#" className="cursor-hover group flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-pink-500/20 hover:border-pink-500/30 transition-all duration-300">
              <span className="iconify text-white group-hover:text-pink-400" data-icon="lucide:instagram" data-width="14"></span>
            </a>
            <a href="#" className="cursor-hover group flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-purple-500/20 hover:border-purple-500/30 transition-all duration-300">
              <span className="iconify text-white group-hover:text-purple-400" data-icon="lucide:twitch" data-width="14"></span>
            </a>
            <a href="#" className="cursor-hover group flex items-center justify-center w-8 h-8 rounded-full bg-white/5 border border-white/10 hover:bg-blue-500/20 hover:border-blue-500/30 transition-all duration-300">
              <span className="iconify text-white group-hover:text-blue-400" data-icon="lucide:youtube" data-width="14"></span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
