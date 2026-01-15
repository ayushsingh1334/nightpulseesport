import React from "react";
import "../styles/Home.css";

import useHomeEffects from "../utils/useHomeEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Highlights() {
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
        <div className="max-w-7xl mx-auto px-6 py-20">
          <div className="relative mb-16 text-center">
            <div className="absolute left-1/2 -translate-x-1/2 -top-10 z-0">
              <div className="liquid-blob bg-indigo-500/20" style={{width:180,height:180,filter:'blur(60px)'}}></div>
            </div>
            <h1 className="font-heading text-5xl md:text-6xl font-extrabold text-white drop-shadow-2xl mb-4 relative z-10 animate-fade-in">Highlights</h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-2 relative z-10 animate-fade-in delay-100">Relive the most electrifying moments from our tournaments: epic clutches, best kills, and MVP perspectives.</p>
          </div>

          {/* Last Game Highlights */}
          <section className="mb-24 relative">
            <div className="absolute -left-10 top-0 z-0">
              <div className="liquid-blob bg-indigo-400/10" style={{width:120,height:120,filter:'blur(40px)'}}></div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-indigo-300 mb-8 text-left animate-fade-in">Last Game Highlights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              {/* Example video cards */}
              <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-indigo-500/20 reveal opacity-0 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  {/* YouTube Embed Example */}
                  <a href="https://www.youtube.com/watch?v=VIDEO_ID1" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/game1.jpg" alt="Final Zone Showdown" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-indigo-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Finals</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">Final Zone Showdown</h3>
                  <p className="text-gray-300 text-sm">Watch the intense final moments of the last tournament match.</p>
                </div>
              </div>
              <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-indigo-500/20 reveal opacity-0 delay-100 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.instagram.com/reel/INSTAGRAM_ID1/" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/game2.jpg" alt="Clutch Revival" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-indigo-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Semi-Finals</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">Epic Comeback</h3>
                  <p className="text-gray-300 text-sm">A game-changing revive and team wipe in the semi-finals.</p>
                </div>
              </div>
                            <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-indigo-500/20 reveal opacity-0 delay-100 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.instagram.com/reel/INSTAGRAM_ID1/" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/game2.jpg" alt="Clutch Revival" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-indigo-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Semi-Finals</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">Clutch Revival</h3>
                  <p className="text-gray-300 text-sm">A game-changing revive and team wipe in the semi-finals.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Best Kills */}
          <section className="mb-24 relative">
            <div className="absolute right-0 -top-10 z-0">
              <div className="liquid-blob bg-orange-400/10" style={{width:120,height:120,filter:'blur(40px)'}}></div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-orange-300 mb-8 text-left animate-fade-in">Best Kills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-orange-500/20 reveal opacity-0 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.youtube.com/watch?v=VIDEO_ID2" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/kill1.jpg" alt="Sniper Headshot" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-orange-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Sniper</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">Sniper Headshot</h3>
                  <p className="text-gray-300 text-sm">A perfect long-range snipe for the highlight reel.</p>
                </div>
              </div>
              <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-orange-500/20 reveal opacity-0 delay-100 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.instagram.com/reel/INSTAGRAM_ID2/" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/kill2.jpg" alt="Double Elimination" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-orange-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Double Kill</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">Rapid Double Knockout</h3>
                  <p className="text-gray-300 text-sm">Back-to-back eliminations in a crucial round.</p>
                </div>
              </div>
                            <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-orange-500/20 reveal opacity-0 delay-100 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.instagram.com/reel/INSTAGRAM_ID2/" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/kill2.jpg" alt="Elimination King" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-orange-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Double Kill</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">Elimination King</h3>
                  <p className="text-gray-300 text-sm">Back-to-back eliminations in a crucial round.</p>
                </div>
              </div>
            </div>
          </section>

          {/* MVPs POV */}
          <section className="mb-10 relative">
            <div className="absolute left-0 -top-10 z-0">
              <div className="liquid-blob bg-emerald-400/10" style={{width:120,height:120,filter:'blur(40px)'}}></div>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-emerald-300 mb-8 text-left animate-fade-in">MVPs POV</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 relative z-10">
              <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-emerald-500/20 reveal opacity-0 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.youtube.com/watch?v=VIDEO_ID3" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/mvp1.jpg" alt="MVP: Shadow" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-emerald-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Shadow</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">MVP: Shadow</h3>
                  <p className="text-gray-300 text-sm">Shadow's POV: 1v3 clutch to secure the win for the team.</p>
                </div>
              </div>
              <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-emerald-500/20 reveal opacity-0 delay-100 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.instagram.com/reel/INSTAGRAM_ID3/" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/mvp2.jpg" alt="MVP: Blaze" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-emerald-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Blaze</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">MVP: Phoenix</h3>
                  <p className="text-gray-300 text-sm">Blaze's best moments from the finals, including a triple kill.</p>
                </div>
              </div>
                            <div className="glass-panel highlight-card rounded-3xl overflow-hidden border border-emerald-500/20 reveal opacity-0 delay-100 hover:scale-[1.03] transition-transform duration-300 shadow-xl">
                <div className="relative group">
                  <a href="https://www.instagram.com/reel/INSTAGRAM_ID3/" target="_blank" rel="noopener noreferrer" className="block group">
                    <img src="/thumbnails/mvp2.jpg" alt="MVP: Blaze" className="w-full h-60 object-cover group-hover:brightness-110 transition duration-300" />
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition bg-black/40">
                      <svg width="60" height="60" viewBox="0 0 60 60" fill="none"><circle cx="30" cy="30" r="30" fill="#fff" fillOpacity="0.7"/><polygon points="25,20 45,30 25,40" fill="#6366f1"/></svg>
                    </div>
                  </a>
                  <div className="absolute top-3 right-3 bg-emerald-500/80 text-white text-xs px-3 py-1 rounded-full font-bold shadow-lg">Blaze</div>
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl text-white mb-2">MVP: Blaze</h3>
                  <p className="text-gray-300 text-sm">Blaze's best moments from the finals, including a triple kill.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
