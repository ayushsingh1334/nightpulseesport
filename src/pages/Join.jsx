import React from "react";
import "../styles/Home.css";
import useHomeEffects from "../utils/useHomeEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Join() {
  useHomeEffects();
  return (
    <div className="text-gray-300 selection:bg-indigo-500/30 selection:text-white text-base scroll-smooth">
      {/* Custom Cursor */}
      <div id="cursor"></div>
      <div className="noise-overlay"></div>

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="pt-20 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-8">Join NightPulse</h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">Connect with our community and never miss an update! Join us on all platforms below.</p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {/* YouTube Channel */}
            <a href="https://www.youtube.com/@NightPulseEsports" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-2xl p-8 flex flex-col items-center border border-red-500/20 reveal opacity-0 hover:scale-[1.04] transition-transform duration-300 shadow-xl">
              <img src="https://img.icons8.com/color/96/youtube-play.png" alt="YouTube" className="mb-4 w-16 h-16" />
              <h2 className="font-heading text-xl text-white mb-2">YouTube Channel</h2>
              <p className="text-gray-400 text-sm mb-4 text-center">Watch live tournaments, highlights, and exclusive content.</p>
              <span className="px-5 py-2 rounded-full bg-red-500/20 text-red-400 font-bold text-xs tracking-widest">Join Now</span>
            </a>

            {/* Instagram Channel */}
            <a href="https://instagram.com/nightpulseesports" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-2xl p-8 flex flex-col items-center border border-pink-500/20 reveal opacity-0 hover:scale-[1.04] transition-transform duration-300 shadow-xl delay-100">
              <img src="https://img.icons8.com/color/96/instagram-new.png" alt="Instagram" className="mb-4 w-16 h-16" />
              <h2 className="font-heading text-xl text-white mb-2">Instagram Channel</h2>
              <p className="text-gray-400 text-sm mb-4 text-center">Follow us for reels, updates, and behind-the-scenes action.</p>
              <span className="px-5 py-2 rounded-full bg-pink-500/20 text-pink-400 font-bold text-xs tracking-widest">Join Now</span>
            </a>

            {/* Discord Channel */}
            <a href="https://discord.gg/nightpulse" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-2xl p-8 flex flex-col items-center border border-indigo-500/20 reveal opacity-0 hover:scale-[1.04] transition-transform duration-300 shadow-xl delay-200">
              <img src="https://img.icons8.com/color/96/discord-logo.png" alt="Discord" className="mb-4 w-16 h-16" />
              <h2 className="font-heading text-xl text-white mb-2">Discord Channel</h2>
              <p className="text-gray-400 text-sm mb-4 text-center">Chat, compete, and connect with 50K+ gamers in our Discord.</p>
              <span className="px-5 py-2 rounded-full bg-indigo-500/20 text-indigo-400 font-bold text-xs tracking-widest">Join Now</span>
            </a>

            {/* Telegram Community */}
            <a href="https://t.me/NightPulseCommunity" target="_blank" rel="noopener noreferrer" className="glass-panel rounded-2xl p-8 flex flex-col items-center border border-cyan-500/20 reveal opacity-0 hover:scale-[1.04] transition-transform duration-300 shadow-xl delay-300">
              <img src="https://img.icons8.com/color/96/telegram-app.png" alt="Telegram" className="mb-4 w-16 h-16" />
              <h2 className="font-heading text-xl text-white mb-2">Telegram Community</h2>
              <p className="text-gray-400 text-sm mb-4 text-center">Get instant updates, event alerts, and join the conversation on Telegram.</p>
              <span className="px-5 py-2 rounded-full bg-cyan-500/20 text-cyan-400 font-bold text-xs tracking-widest">Join Now</span>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
