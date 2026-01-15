import React, { useEffect, useState } from "react";
import "../styles/Home.css";
import useHomeEffects from "../utils/useHomeEffects";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Home() {
  useHomeEffects();
  const [activeCard, setActiveCard] = useState(0);
  const [activeTab, setActiveTab] = useState("battle");

  // Helper to set active tab
  const handleSetTab = (tab) => {
    setActiveTab(tab);
  };

  // Helper to stop events on touch/mouse before click to avoid accidental navigation on mobile
  const stopEvent = (e) => {
    if (!e) return;
    if (typeof e.preventDefault === "function") e.preventDefault();
    if (typeof e.stopPropagation === "function") e.stopPropagation();
  };

  const handleCarouselNav = (direction) => {
    setActiveCard((prev) => {
      if (direction === "next") return (prev + 1) % 3;
      return (prev - 1 + 3) % 3;
    });
  };

  // Tab content data
  const tabContent = {
    battle: [
      {
        icon: "./icons/bgmi.png",
        isImage: true,
        iconColor: "text-indigo-400",
        bgColor: "bg-indigo-500/10 border-indigo-500/20",
        title: "BGMI Leagues",
        desc: "Daily scrims and weekly major tournaments with high-stakes prize pools for mobile squads.",
        status: "Live Now",
        statusColor: "text-indigo-400"
      },
      {
        icon: "./icons/freefire.png",
        isImage: true,
        iconColor: "text-orange-400",
        bgColor: "bg-orange-500/10 border-orange-500/20",
        title: "Free Fire Cup",
        desc: "Fast-paced survival tournaments. Show your skills in the ultimate survival shooter arena.",
        status: "Registration Open",
        statusColor: "text-orange-400"
      },
      {
        icon: "lucide:shield-check",
        isImage: false,
        iconColor: "text-emerald-400",
        bgColor: "bg-emerald-500/10 border-emerald-500/20",
        title: "Anti-Cheat System",
        desc: "Fair play is our priority. Advanced monitoring to ensure skill is the only winning factor.",
        status: "",
        statusColor: ""
      }
    ],
    strategy: [
      {
        icon: "./icons/Chess.png",
        isImage: true,
        iconColor: "text-white",
        bgColor: "bg-white/10 border-white/20",
        title: "Rapid Chess",
        desc: "Blitz and Bullet formats. Join chess tournaments with real-time rankings and competitive ladders. Test your tactical brilliance against elite players.",
        status: "Coming Soon",
        statusColor: "text-white"
      },
      {
        icon: "lucide:puzzle",
        isImage: true,
        iconColor: "text-purple-400",
        bgColor: "bg-purple-500/10 border-purple-500/20",
        title: "Grandmaster Series",
        desc: "Elite strategic tournaments for chess masters with international competition. High prize pools and prestigious rankings for the ultimate chess experience.",
        status: "Coming Soon",
        statusColor: "text-purple-400"
      },
      {
        icon: "lucide:zap",
        isImage: true,
        iconColor: "text-yellow-400",
        bgColor: "bg-yellow-500/10 border-yellow-500/20",
        title: "Tactical Strategy",
        desc: "Expanding into card battles and turn-based tactical games. Compete in strategic warfare with cash prizes and seasonal tournaments.",
        status: "Coming Soon",
        statusColor: "text-yellow-400"
      }
    ],
    community: [
      {
        icon: "lucide:mic-2",
        isImage: true,
        iconColor: "text-pink-400",
        bgColor: "bg-pink-500/10 border-pink-500/20",
        title: "Casting & Streaming",
        desc: "Professional commentary for top-tier matches streamed directly to YouTube and Loco. Watch live esports action with expert analysis and intense rivalries.",
        status: "Live",
        statusColor: "text-pink-400"
      },
      {
        icon: "lucide:users",
        isImage: true,
        iconColor: "text-cyan-400",
        bgColor: "bg-cyan-500/10 border-cyan-500/20",
        title: "Clan Scrims",
        desc: "Register your clan for daily practice matches against the best teams in the region. Build team chemistry and climb the competitive rankings.",
        status: "Open",
        statusColor: "text-cyan-400"
      },
      {
        icon: "lucide:message-circle",
        isImage: true,
        iconColor: "text-blue-400",
        bgColor: "bg-blue-500/10 border-blue-500/20",
        title: "Community Discord",
        desc: "Join 50K+ gamers in our Discord. Daily events, giveaways, LFG channels, and exclusive NightPulse updates. Be part of the competitive gaming revolution.",
        status: "Join Now",
        statusColor: "text-blue-400"
      }
    ]
  };

  // Error boundary component local to this file to surface runtime errors instead of a blank screen
  class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
      return { hasError: true, error };
    }

    componentDidCatch(error, info) {
      console.error("ErrorBoundary caught:", error, info);
    }

    render() {
      if (this.state.hasError) {
        return (
          <div className="min-h-screen flex items-center justify-center p-6">
            <div className="max-w-xl text-center bg-black/60 glass-panel p-8 rounded-xl border border-white/10">
              <h2 className="font-heading text-2xl text-white mb-4">Something went wrong</h2>
              <p className="text-gray-400 mb-6">An unexpected error occurred while rendering this page. Check the console for details.</p>
              <button
                type="button"
                onClick={() => window.location.reload()}
                className="px-4 py-2 bg-indigo-600 text-white rounded"
              >
                Reload
              </button>
            </div>
          </div>
        );
      }
      return this.props.children;
    }
  }

  // Ensure activeTab always references a valid tab key
  useEffect(() => {
    if (!tabContent || !Object.prototype.hasOwnProperty.call(tabContent, activeTab)) {
      console.warn("activeTab invalid, resetting to 'battle':", activeTab);
      setActiveTab("battle");
    }
  }, []);

  return (
    <ErrorBoundary>
    <div className="text-gray-300 selection:bg-indigo-500/30 selection:text-white text-base scroll-smooth">
      {/* Custom Cursor */}
      <div id="cursor"></div>
      <div className="noise-overlay"></div>

      {/* Liquid Background Layer */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-[-1]">
        <div
          className="liquid-blob bg-indigo-900"
          style={{
            width: "600px",
            height: "600px",
            top: "-100px",
            left: "-100px",
            opacity: "0.15",
            animationDuration: "18s",
          }}
        ></div>
        <div
          className="liquid-blob bg-purple-900"
          style={{
            width: "500px",
            height: "500px",
            top: "40%",
            right: "-150px",
            opacity: "0.12",
            animationDuration: "22s",
            animationDelay: "-5s",
          }}
        ></div>
        <div
          className="liquid-blob bg-blue-900"
          style={{
            width: "700px",
            height: "700px",
            bottom: "-200px",
            left: "20%",
            opacity: "0.1",
            animationDuration: "25s",
            animationDelay: "-10s",
          }}
        ></div>
      </div>

      {/* Preloader */}
      <div id="preloader">
        <div className="flex flex-col items-center gap-4">
          <span
            id="loader-text"
            className="font-heading tracking-[0.3em] text-[10px] uppercase text-white/40"
          >
            Initializing Matchmaking
          </span>
          <div className="loader-bar">
            <div id="loader-progress" className="loader-progress"></div>
          </div>
        </div>
      </div>

      {/* Navbar Component */}
      <Navbar />

      {/* HERO SECTION */}
      <header
        id="hero"
        className="relative h-screen w-full flex items-center justify-center overflow-hidden"
      >
        <div className="absolute top-28 left-6 md:left-12 z-20 hidden md:block">
          <span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-500 border border-white/5">
            [ 00. LOBBY ]
          </span>
        </div>
        <div className="absolute inset-0 z-0 overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=2070&auto=format&fit=crop"
            alt="Background"
            data-parallax-speed="0.5"
            className="parallax-element w-full h-[120%] object-cover opacity-20 grayscale contrast-125 will-change-transform mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#030305] via-[#030305]/60 to-transparent"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImEiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTTAgNDBoNDBWMEgwIiBmaWxsPSJub25lIiBzdHJva2U9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIHN0cm9rZS13aWR0aD0iMSIvPjwvcGF0dGVybj48L2RlZnM+PHJlY3Qgd2lkdGg9IjEwMCUiIGhlaWdodD0iMTAwJSIgZmlsbD0idXJsKCNhKSIvPjwvc3ZnPg==')] z-0 opacity-30"></div>
        </div>
        <div className="relative z-10 text-center px-6 w-full max-w-7xl mx-auto flex flex-col items-center">
          <div className="reveal mb-6 opacity-0">
            <div className="glass-panel inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse shadow-[0_0_10px_#6366f1]"></span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-indigo-200">
                Live Tournaments Active
              </span>
            </div>
          </div>
          <h1 className="font-heading text-6xl md:text-8xl lg:text-9xl font-semibold leading-[0.9] tracking-tight text-white drop-shadow-2xl reveal opacity-0 delay-100">
            <span className="split-line">
              <span className="block">PULSE OF</span>
            </span>
            <span className="split-line">
              <span
                className="block text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/10"
                style={{ transitionDelay: "100ms" }}
              >
                VICTORY
              </span>
            </span>
          </h1>
          <p className="mt-8 text-lg md:text-xl text-gray-400 font-light max-w-lg mx-auto leading-relaxed reveal opacity-0 delay-200 backdrop-blur-sm rounded-lg p-2">
            Dominate the Battlegrounds of{" "}
            <span className="text-white">BGMI</span> &{" "}
            <span className="text-white">Free Fire</span>. Preparing the board
            for our strategic expansion into{" "}
            <span className="text-indigo-400 border-b border-indigo-500/30">
              Chess
            </span>.
          </p>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 z-20 reveal opacity-0 delay-500">
          <span className="text-[9px] uppercase tracking-[0.2em] text-gray-600">
            Scroll to Start
          </span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-indigo-500 to-transparent opacity-50"></div>
        </div>
      </header>

      {/* GAMES SECTION - THE ARENA */}
      <section id="games" className="py-32 relative z-10">
        <div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
          <span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-500 border border-white/5">
            [ 01. THE ARENA ]
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="reveal opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
                Choose Your<br />
                <span className="text-cyan-400">Battlefield</span>
              </h2>
              <p className="text-gray-500 max-w-sm text-base">From fast-paced survival to calculating strategy.</p>
            </div>
          </div>

          {/* Service Grid - Battle Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabContent.battle?.map((card, idx) => (
              <div 
                key={idx}
                className={`glass-panel p-8 rounded-2xl group border border-white/5 reveal opacity-0 transition-all duration-500 hover:border-white/20 hover:shadow-lg ${
                  idx === 0 ? "" : idx === 1 ? "delay-100" : "delay-200"
                }`}
              >
                <div className={`w-14 h-14 ${card.bgColor} border rounded-2xl flex items-center justify-center ${card.iconColor} mb-6`}>
                  {card.isImage ? (
                    card.icon ? (
                      <img src={card.icon} alt={card.title} className="w-full h-full object-cover rounded-xl" />
                    ) : null
                  ) : (
                    <span className="iconify" data-icon={card.icon} data-width="28" data-height="28"></span>
                  )}
                </div>
                <h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {card.desc}
                </p>
                {card.status && (
                  <span className={`text-[10px] uppercase tracking-widest font-semibold ${card.statusColor}`}>
                    {card.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CHESS & STRATEGY SECTION */}
      <section id="chess" className="py-32 relative z-10">
        <div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
          <span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-500 border border-white/5">
            [ 02. STRATEGY ]
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="reveal opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
                Master the<br />
                <span className="text-purple-400">Chessboard</span>
              </h2>
              <p className="text-gray-500 max-w-sm text-base">Elite tactical tournaments for strategic minds.</p>
            </div>
          </div>

          {/* Service Grid - Chess Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: "/icons/Chess.png",
                isImage: true,
                iconColor: "text-white",
                bgColor: "bg-white/10 border-white/20",
                title: "Rapid Chess",
                desc: "Blitz and Bullet formats. Join chess tournaments with real-time rankings and competitive ladders. Test your tactical brilliance against elite players.",
                status: "Coming Soon",
                statusColor: "text-white"
              },
              {
                icon: "lucide:chess-queen",
                isImage: false,
                iconColor: "text-yellow-400",
                bgColor: "bg-yellow-500/10 border-yellow-500/20",
                title: "Weekly Tournaments",
                desc: "Compete every week in time-controlled matches. Build your rating and climb the global leaderboards with consistent performances.",
                status: "Coming Soon",
                statusColor: "text-yellow-400"
              },
              {
                icon: "lucide:chess-king",
                isImage: false,
                iconColor: "text-purple-400",
                bgColor: "bg-purple-500/10 border-purple-500/20",
                title: "Grandmaster Series",
                desc: "Elite strategic tournaments for chess masters with international competition. High prize pools and prestigious rankings for the ultimate chess experience.",
                status: "Coming Soon",
                statusColor: "text-purple-400"
              }
            ].map((card, idx) => (
              <div 
                key={idx}
                className={`glass-panel p-8 rounded-2xl group border border-white/5 reveal opacity-0 transition-all duration-500 hover:border-white/20 hover:shadow-lg ${
                  idx === 0 ? "" : idx === 1 ? "delay-100" : "delay-200"
                }`}
              >
                <div className={`w-14 h-14 ${card.bgColor} border rounded-2xl flex items-center justify-center ${card.iconColor} mb-6`}>
                  {card.isImage ? (
                    card.icon ? (
                      <img src={card.icon} alt={card.title} className="w-full h-full object-cover rounded-xl" />
                    ) : null
                  ) : (
                    <span className="iconify" data-icon={card.icon} data-width="28" data-height="28"></span>
                  )}
                </div>
                <h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {card.desc}
                </p>
                {card.status && (
                  <span className={`text-[10px] uppercase tracking-widest font-semibold ${card.statusColor}`}>
                    {card.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMMUNITY SECTION */}
      <section id="community" className="py-32 relative z-10">
        <div className="absolute top-0 left-6 md:left-12 z-20 hidden md:block -translate-y-1/2">
          <span className="glass-panel px-3 py-1 rounded text-[10px] font-mono uppercase tracking-widest text-gray-500 border border-white/5">
            [ 03. COMMUNITY ]
          </span>
        </div>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="reveal opacity-0">
              <h2 className="font-heading text-4xl md:text-5xl font-medium tracking-tight mb-4 text-white">
                Join the<br />
                <span className="text-pink-400">Community</span>
              </h2>
              <p className="text-gray-500 max-w-sm text-base">Connect, compete, and grow with fellow gamers.</p>
            </div>
          </div>

          {/* Service Grid - Community Only */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tabContent.community?.map((card, idx) => (
              <div 
                key={idx}
                className={`glass-panel p-8 rounded-2xl group border border-white/5 reveal opacity-0 transition-all duration-500 hover:border-white/20 hover:shadow-lg ${
                  idx === 0 ? "" : idx === 1 ? "delay-100" : "delay-200"
                }`}
              >
                <div className={`w-14 h-14 ${card.bgColor} border rounded-2xl flex items-center justify-center ${card.iconColor} mb-6`}>
                  {card.isImage ? (
                    card.icon ? (
                      <img src={card.icon} alt={card.title} className="w-full h-full object-cover rounded-xl" />
                    ) : null
                  ) : (
                    <span className="iconify" data-icon={card.icon} data-width="28" data-height="28"></span>
                  )}
                </div>
                <h3 className="font-heading text-lg font-medium mb-3 text-white tracking-tight">
                  {card.title}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                  {card.desc}
                </p>
                {card.status && (
                  <span className={`text-[10px] uppercase tracking-widest font-semibold ${card.statusColor}`}>
                    {card.status}
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* TOURNAMENTS SECTION */}
      <section id="tournaments" className="relative py-32 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-24 text-center reveal opacity-0">
            <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.3em] text-indigo-400">
              Competitive Timeline
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white tracking-tight">
              Upcoming Tournaments
            </h2>
            <p className="mt-6 text-gray-400 max-w-xl mx-auto text-base leading-relaxed">
              Precision-organized competitions engineered for
              high-performance esports athletes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="glass-panel rounded-2xl p-8 border border-white/10 reveal opacity-0">
              <span className="text-[10px] uppercase tracking-[0.3em] text-indigo-400">
                BGMI
              </span>
              <h3 className="font-heading text-2xl text-white font-semibold mt-4">
                NightPulse Invitational
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                Elite squads clash under pressure in a
                high-reward invitational format.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Squad • TPP
                </span>
                <span className="text-[10px] uppercase tracking-widest text-indigo-400">
                  Jan 18
                </span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-8 border border-white/10 reveal opacity-0 delay-100">
              <span className="text-[10px] uppercase tracking-[0.3em] text-orange-400">
                Free Fire
              </span>
              <h3 className="font-heading text-2xl text-white font-semibold mt-4">
                Rapid Fire League
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                Fast-paced eliminations with aggressive
                zone rotations.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Duo • Ranked
                </span>
                <span className="text-[10px] uppercase tracking-widest text-orange-400">
                  Feb 02
                </span>
              </div>
            </div>
            <div className="glass-panel rounded-2xl p-8 border border-white/10 reveal opacity-0 delay-200">
              <span className="text-[10px] uppercase tracking-[0.3em] text-emerald-400">
                Chess
              </span>
              <h3 className="font-heading text-2xl text-white font-semibold mt-4">
                Grandmaster Arena
              </h3>
              <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                Strategic warfare between elite chess minds
                with international participation and massive prize pools.
              </p>
              <div className="mt-6 flex items-center justify-between">
                <span className="text-[10px] uppercase tracking-widest text-gray-500">
                  Blitz • Rapid • Classical
                </span>
                <span className="text-[10px] uppercase tracking-widest text-emerald-400">
                  Coming Soon
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY CHOOSE NIGHTPULSE SECTION */}
      <section id="why-choose" className="relative py-32 md:py-40 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-20 text-center reveal opacity-0">
            <span className="inline-block mb-4 text-[10px] uppercase tracking-[0.3em] text-indigo-400">
              What Sets Us Apart
            </span>
            <h2 className="font-heading text-4xl md:text-6xl font-semibold text-white tracking-tight">
              Why Choose NightPulse
            </h2>
            <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-base leading-relaxed">
              Built from the ground up for Indian esports enthusiasts. We bring innovation, security, and fairness to every tournament.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: "lucide:gamepad-2",
                title: "Secure & Fair Gaming",
                desc: "Advanced anti-cheat system with real-time monitoring to ensure every match is played on equal footing. Your trust is our priority.",
                color: "emerald",
                linkText: "Learn More",
                link: "/secure-fair-gaming"
              },
              {
                icon: "lucide:handshake",
                title: "Strategic Partnerships",
                desc: "Collaborate with leading brands and organizations. Join our partner network and grow together in the esports ecosystem.",
                color: "yellow",
                linkText: "Learn More",
                link: "mailto:nightpulsestudio.contactus@gmail.com?subject=Strategic Partnership Inquiry&body=Hello NightPulse Team,%0A%0AI am interested in exploring strategic partnership opportunities with NightPulse Esports.%0A%0APlease let me know how we can collaborate.%0A%0AThanks"
              },
              {
                icon: "lucide:gift",
                title: "Instant Payouts",
                desc: "Quick and secure prize withdrawals. Earn rewards and access them immediately with transparent transactions.",
                color: "pink",
                linkText: "Learn More",
                link: "https://drive.google.com/drive/folders/1o-0rut2QaXJloSVyP3H9Ioum-VF7_xYu?usp=sharing"
              },
              {
                icon: "lucide:headphones",
                title: "24/7 Support",
                desc: "Dedicated support team ready to help. Questions about tournaments? We're here around the clock.",
                color: "blue",
                linkText: "Contact Us",
                link: "mailto:nightpulsestudio.contactus@gmail.com"
              },
              {
                icon: "lucide:users-round",
                title: "Thriving Community",
                desc: "Connect with passionate gamers, join Discord events, participate in exclusive meetups, and grow together.",
                color: "cyan",
                linkText: "Learn More",
                link: "/join"
              },
              {
                icon: "lucide:briefcase",
                title: "Sponsorship Opportunities",
                desc: "Partner with NightPulse and reach millions of esports enthusiasts. Build your brand with us.",
                color: "purple",
                linkText: "Learn More",
                link: "mailto:nightpulsestudio.contactus@gmail.com?subject=Sponsorship Opportunity Inquiry&body=Hello NightPulse Team,%0A%0AI am interested in sponsorship opportunities with NightPulse Esports.%0A%0APlease provide details about available sponsorship packages.%0A%0AThank you"
              }
            ].map((item, idx) => (
              <div
                key={idx}
                className={`group reveal opacity-0 ${
                  idx === 0 ? "" : idx === 1 ? "delay-100" : idx === 2 ? "delay-200" : idx === 3 ? "delay-300" : idx === 4 ? "delay-500" : "delay-700"
                }`}
              >
                <div className="glass-panel border border-white/5 rounded-2xl p-8 transition-all duration-500 hover:border-white/20 hover:shadow-xl h-full flex flex-col">
                  <div className="flex items-start gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110 ${
                      item.color ? `bg-${item.color}-500/10 border border-${item.color}-500/30` : "bg-purple-500/10 border border-purple-500/30"
                    }`}>
                      <span className={`iconify ${item.color ? `text-${item.color}-400` : "text-purple-400"}`} data-icon={item.icon} data-width="24" data-height="24"></span>
                    </div>
                    <a href={item.link} className="group/link flex-1">
                      <h3 className="font-heading text-lg font-semibold text-white tracking-tight hover:text-indigo-400 transition-colors cursor-pointer">
                        {item.title}
                      </h3>
                    </a>
                  </div>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MARQUEE SECTION */}
      <section className="relative py-24 overflow-hidden border-y border-white/5">
        <div className="flex gap-16 whitespace-nowrap animate-marquee text-[12px] uppercase tracking-[0.4em] text-white/30 font-semibold">
          <span>NIGHTPULSE ESPORTS</span>
          <span>BGMI • FREE FIRE • CHESS</span>
          <span>COMPETITIVE GAMING</span>
          <span>NIGHTPULSE ESPORTS</span>
          <span>BGMI • FREE FIRE • CHESS</span>
          <span>COMPETITIVE GAMING</span>
        </div>
      </section>

      {/* Footer Component */}
      <Footer />
    </div>
    </ErrorBoundary>
  );
}
