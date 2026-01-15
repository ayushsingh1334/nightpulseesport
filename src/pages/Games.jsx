
import React, { useEffect, useRef } from "react";
import "../styles/Home.css";
import useHomeEffects from "../utils/useHomeEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Use available icons, and placeholders for missing ones
const games = [
  {
    name: "BGMI",
    image: "/icons/bgmi.png",
    color: "indigo",
    desc: "Battle it out in India's most popular mobile battle royale. Daily scrims, tournaments, and leaderboards await your squad.",
    btn: "Learn More",
  },
  {
    name: "Free Fire",
    image: "/icons/freefire.png",
    color: "orange",
    desc: "Fast-paced survival shooter action. Compete in open cups, custom rooms, and exclusive NightPulse events.",
    btn: "Learn More",
  },
  {
    name: "Chess",
    image: "/icons/Chess.png", // Placeholder icon
    color: "emerald",
    desc: "Test your mind in rapid, blitz, and classical chess tournaments. Climb the NightPulse chess ladder and earn your title.",
    btn: "Play Chess",
  },
  {
    name: "Call of Duty Mobile",
    image: "/icons/callofduty.jpg", // Placeholder icon
    color: "yellow",
    desc: "Join the battle in COD Mobile. Tournaments, scrims, and more coming soon!",
    soon: true,
  },
  {
    name: "More Mobile Games",
    image: "https://img.icons8.com/ios-filled/100/8b5cf6/controller.png", // Placeholder icon
    color: "violet",
    desc: "Stay tuned! More mobile battle royale, sports, and strategy games are on the way to NightPulse.",
    soon: true,
  },
];

export default function Games() {
  useHomeEffects();
  const gridRef = useRef(null);

  // Animate cards on scroll
  useEffect(() => {
    const cards = document.querySelectorAll('.game-card');
    const handleScroll = () => {
      cards.forEach((card, i) => {
        const rect = card.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
          card.classList.add('show');
        }
      });
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Animate hero text
  useEffect(() => {
    const title = document.querySelector('.games-hero-title');
    const subtitle = document.querySelector('.games-hero-subtitle');
    if (title) title.classList.add('animate-hero-title');
    if (subtitle) subtitle.classList.add('animate-hero-subtitle');
  }, []);

  return (
    <div className="text-gray-300 text-base scroll-smooth min-h-screen bg-[var(--bg)] relative overflow-x-hidden">
      {/* Custom Cursor and Noise Overlay for Home background effect */}
      <div id="cursor" />
      <div className="noise-overlay" />
      {/* Navbar */}
      <Navbar />

      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center py-24 md:py-32 text-center select-none">
        {/* Glassy blobs for extra effect */}
        <div className="liquid-blob" style={{top: '-120px', left: '-80px', width: 300, height: 300, background: 'var(--primary)', opacity: 0.18, zIndex: 0}} />
        <div className="liquid-blob" style={{bottom: '-100px', right: '-100px', width: 320, height: 320, background: 'var(--secondary)', opacity: 0.13, zIndex: 0}} />
        <h1 className="games-hero-title font-heading text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-6 opacity-0">
          Explore Our <span className="text-indigo-400">Games</span>
        </h1>
        <p className="games-hero-subtitle text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8 opacity-0">
          Dive into the most competitive and thrilling titles on NightPulse. Choose your battlefield and rise to the top!
        </p>
      </section>

      {/* Games Grid */}
      <section className="relative z-10 max-w-7xl mx-auto px-4 pb-32">
        <div ref={gridRef} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {games.map((game, i) => (
            <div
              key={game.name}
              className={`game-card group glass-panel border-2 border-${game.color}-500/30 rounded-3xl p-8 flex flex-col items-center shadow-2xl overflow-hidden opacity-0 translate-y-16 transition-all duration-700 ease-out relative ${game.soon ? 'grayscale opacity-70 pointer-events-none' : ''}`}
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <div className={`absolute -top-10 -right-10 w-40 h-40 bg-${game.color}-500/10 rounded-full blur-2xl z-0`} />
              <div className="relative z-10 flex flex-col items-center">
                <div className={`w-28 h-28 mb-6 rounded-2xl bg-${game.color}-500/20 border-4 border-${game.color}-500/30 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-500`}>
                  <img src={game.image} alt={game.name} className="w-20 h-20 object-contain drop-shadow-xl" />
                </div>
                <h2 className="text-3xl font-bold text-white mb-2 tracking-wide drop-shadow-lg font-heading">{game.name}</h2>
                <p className="text-gray-200 text-base mb-6 font-medium drop-shadow-sm text-center max-w-xs">{game.desc}</p>
                <a
                  href="#"
                  className={`inline-block px-8 py-2 rounded-full bg-${game.color}-500 text-white text-sm font-semibold uppercase tracking-widest shadow-lg hover:bg-${game.color}-400 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-${game.color}-400/60 ${game.soon ? 'cursor-not-allowed opacity-60' : ''}`}
                >
                  {game.btn}
                  {game.soon && (
                    <span className="block mt-2 text-xs font-bold text-gray-400 tracking-widest animate-pulse">COMING SOON</span>
                  )}
                </a>
              </div>
              {/* Animated floating shapes */}
              <div className="absolute left-4 bottom-4 w-8 h-8 bg-white/10 rounded-full blur-md animate-float-slow" />
              <div className="absolute right-8 top-8 w-6 h-6 bg-white/10 rounded-full blur-md animate-float-fast" />
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer />

      {/* Custom Animations */}
      <style>{`
        .game-card.show {
          opacity: 1;
          transform: translateY(0);
        }
        .games-hero-title.animate-hero-title {
          opacity: 1;
          animation: heroTitleFadeIn 1.1s cubic-bezier(.4,0,.2,1) 0.1s both;
        }
        .games-hero-subtitle.animate-hero-subtitle {
          opacity: 1;
          animation: heroSubtitleFadeIn 1.2s cubic-bezier(.4,0,.2,1) 0.5s both;
        }
        @keyframes heroTitleFadeIn {
          0% { opacity: 0; transform: translateY(40px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes heroSubtitleFadeIn {
          0% { opacity: 0; transform: translateY(30px) scale(0.98); }
          100% { opacity: 1; transform: translateY(0) scale(1); }
        }
        @keyframes floatSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-16px); }
        }
        @keyframes floatFast {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-float-slow { animation: floatSlow 4s ease-in-out infinite; }
        .animate-float-fast { animation: floatFast 2.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse 8s cubic-bezier(.4,0,.2,1) infinite; }
        @keyframes pulse {
          0%, 100% { opacity: 0.7; }
          50% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}

