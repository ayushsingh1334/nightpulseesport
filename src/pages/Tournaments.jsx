import React from "react";
import "../styles/Home.css";
import "../styles/Tournaments.css";
import useHomeEffects from "../utils/useHomeEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Tournaments() {
  useHomeEffects();
  // Tournament categories and active tournaments
  // Tournament service card data for BGMI and Free Fire

  // Tournament data for BGMI and Free Fire (no icons)
  const bgmiTournaments = [
    {
      title: "Weekly Full Map",
      desc: "Battle across the full map every week. Open to all BGMI squads.",
      status: "Live Now",
      statusColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "Weekly TDM 2v2 Showdown",
      desc: "Fast-paced 2v2 TDM action. Prove your duo's skills in weekly showdowns!",
      status: "Live Now",
      statusColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/20"
    },
    {
      title: "Monthly Major",
      desc: "The best teams face off monthly for the ultimate BGMI glory and big prizes.",
      status: "Registration Open",
      statusColor: "text-indigo-400",
      bgColor: "bg-indigo-500/10 border-indigo-500/20"
    }
  ];

  const freeFireTournaments = [
    {
      title: "Weekly Full Map",
      desc: "Weekly Free Fire full map battles. Fast-paced, high-reward action!",
      status: "Live Now",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Weekly Clash Squad",
      desc: "Clash Squad mode every week. Team up and dominate the arena!",
      status: "Live Now",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Lone Wolf 2v2",
      desc: "Lone Wolf 2v2 mode for duos. Show your skills in this unique Free Fire format!",
      status: "Registration Open",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    },
    {
      title: "Monthly Full Map Match",
      desc: "The best Free Fire teams face off monthly for glory and prizes.",
      status: "Registration Open",
      statusColor: "text-orange-400",
      bgColor: "bg-orange-500/10 border-orange-500/20"
    }
  ];

  // Active tournaments (from both BGMI and Free Fire, status: Live Now)
  const activeTournaments = [
    ...bgmiTournaments.filter(t => t.status === "Live Now"),
    ...freeFireTournaments.filter(t => t.status === "Live Now")
  ];




  return (
    <div className="text-gray-300 text-base scroll-smooth min-h-screen bg-[var(--bg)] relative overflow-x-hidden">
      <div id="cursor" />
      <div className="noise-overlay" />
      <Navbar />
      {/* HERO SECTION */}
      <section className="tournaments-hero">
        <div className="liquid-blob" style={{top: '-120px', left: '-80px', width: 300, height: 300, background: 'var(--primary)', opacity: 0.18, zIndex: 0, position: 'absolute'}} />
        <div className="liquid-blob" style={{bottom: '-100px', right: '-100px', width: 320, height: 320, background: 'var(--secondary)', opacity: 0.13, zIndex: 0, position: 'absolute'}} />
        {/* Removed main logo from hero section */}
        <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl mb-4">Tournaments</h1>
        <p className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto mb-8">
          NightPulse organizes weekly, monthly, and special tournaments for BGMI, Free Fire, and more. Compete, win, and become a legend!
        </p>
      </section>

      {/* ACTIVE TOURNAMENTS SECTION */}
      <section className="py-16 max-w-7xl mx-auto px-6">
        <div className="mb-12 text-center reveal opacity-0">
          <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.3em] text-green-400">Currently Active</span>
          <h2 className="font-heading text-3xl md:text-4xl font-semibold text-white tracking-tight mb-2">Active Tournaments</h2>
          <p className="text-gray-500 max-w-xl mx-auto text-base">Join the action in our live tournaments right now!</p>
        </div>
        <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {activeTournaments.map((card, idx) => (
            <div 
              key={idx}
              className={`glass-panel p-8 rounded-2xl cursor-hover group border border-white/5 reveal opacity-0 transition-all duration-500 ${idx === 0 ? "" : idx === 1 ? "delay-100" : "delay-200"}`}
            >
              <h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{card.desc}</p>
              {card.status && (
                <span className={`text-[10px] uppercase tracking-widest ${card.statusColor}`}>{card.status}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* BGMI TOURNAMENTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center reveal opacity-0">
          <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.3em] text-indigo-400">BGMI</span>
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/icons/bgmi.png" alt="BGMI" style={{width:36,height:36,borderRadius:'0.7rem',background:'#181a2a',border:'1.5px solid #23244a'}} />
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white tracking-tight">BGMI Tournaments</h2>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto text-base">Full Map, TDM 2v2 Showdown, Monthly Major</p>
        </div>
        <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {bgmiTournaments.map((card, idx) => (
            <div 
              key={idx}
              className={`glass-panel p-8 rounded-2xl cursor-hover group border border-white/5 reveal opacity-0 transition-all duration-500 ${idx === 0 ? "" : idx === 1 ? "delay-100" : "delay-200"}`}
            >
              <h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{card.desc}</p>
              {card.status && (
                <span className={`text-[10px] uppercase tracking-widest ${card.statusColor}`}>{card.status}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* FREE FIRE TOURNAMENTS SECTION */}
      <section className="py-20 max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center reveal opacity-0">
          <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.3em] text-orange-400">Free Fire</span>
          <div className="flex items-center justify-center gap-3 mb-2">
            <img src="/icons/freefire.png" alt="Free Fire" style={{width:36,height:36,borderRadius:'0.7rem',background:'#181a2a',border:'1.5px solid #23244a'}} />
            <h2 className="font-heading text-4xl md:text-5xl font-semibold text-white tracking-tight">Free Fire Tournaments</h2>
          </div>
          <p className="text-gray-500 max-w-xl mx-auto text-base">Weekly Full Map, Weekly Clash Squad, Lone Wolf 2v2, Monthly Full Map Match</p>
        </div>
        <div className="service-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {freeFireTournaments.map((card, idx) => (
            <div 
              key={idx}
              className={`glass-panel p-8 rounded-2xl cursor-hover group border border-white/5 reveal opacity-0 transition-all duration-500 ${idx === 0 ? "" : idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : "delay-300"}`}
            >
              <h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">{card.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed mb-6">{card.desc}</p>
              {card.status && (
                <span className={`text-[10px] uppercase tracking-widest ${card.statusColor}`}>{card.status}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
}
