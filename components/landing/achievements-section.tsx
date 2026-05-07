"use client";

import { useEffect, useState, useRef } from "react";

const accomplishments = [
  {
    name: "Junior Developer",
    detail: "Official recruitment into the development team @ Bots.Business",
    status: "02 Nov 2025"
  },
  {
    name: "Legend Title",
    detail: "Bots Business Community Legend Title",
    status: "16 May 2025",
    link: "https://t.me/botsbus/2201"
  },
  {
    name: "#1 Video Editing",
    detail: "BB YouTube Video Editing Contest Winner",
    status: "07 May 2025",
    link: "https://t.me/botsbus/2194"
  },
  {
    name: "#1 Bot Making",
    detail: "BB Refer & Earn Bot Making Contest Winner",
    status: "20 Apr 2025",
    link: "https://t.me/botsbus/2187"
  },
  {
    name: "#2 WebApp Making",
    detail: "BB WebApp Making Contest Winner",
    status: "15 Mar 2025",
    link: "https://t.me/botsbus/2165"
  },
  {
    name: "#1 SmartBot",
    detail: "BB SmartBot Making Contest Winner",
    status: "10 Feb 2025",
    link: "https://t.me/botsbus/2141"
  },
];

export function AchievementsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeItem, setActiveItem] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isHovered) {
        setActiveItem((prev) => (prev + 1) % accomplishments.length);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="achievements" ref={sectionRef} className="relative py-32 lg:py-40 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-20">
          <span className={`inline-flex items-center gap-4 text-sm font-mono text-muted-foreground mb-8 transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0"
            }`}>
            <span className="w-12 h-px bg-foreground/20" />
            Milestones & Awards
          </span>

          <div className="grid grid-cols-[auto_1fr] gap-6 sm:gap-8 lg:gap-16 items-center">
            <div className={`w-24 sm:w-48 lg:w-72 xl:w-80 shrink-0 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
              <img
                src="/images/world.png"
                alt="Achievement sphere"
                className="w-full h-full object-contain object-center"
              />
            </div>

            <div className="flex flex-col justify-center">
              <h2 className={`text-3xl sm:text-6xl md:text-7xl lg:text-[128px] font-display tracking-tighter leading-[0.85] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                }`}>
                Driven by
                <br />
                <span className="text-muted-foreground">excellence.</span>
              </h2>

              <p className={`mt-4 sm:mt-6 text-sm sm:text-xl text-muted-foreground leading-relaxed max-w-lg transition-all duration-1000 delay-100 ${isVisible ? "opacity-100" : "opacity-0"
                }`}>
                A proven track record of winning competitions and delivering high-quality automation solutions within the Telegram Bot ecosystem.
              </p>
            </div>
          </div>
        </div>

        {/* Main content grid - Horizontal on mobile too */}
        <div className="grid grid-cols-12 gap-3 sm:gap-6">
          {/* Large stat card */}
          <div className={`col-span-7 sm:col-span-8 relative p-4 sm:p-8 lg:p-12 border border-foreground/10 bg-foreground/[0.02] overflow-hidden transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}>
            <div className="absolute inset-0 opacity-70">
              <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: "none" }}>
                <defs>
                  <style>{`
                    @keyframes drawLine {
                      0%   { stroke-dashoffset: 1000; opacity: 0; }
                      15%  { opacity: 1; }
                      70%  { opacity: 0.7; }
                      100% { stroke-dashoffset: 0; opacity: 0; }
                    }
                    .connecting-line {
                      stroke: #eca8d6;
                      stroke-width: 1.2;
                      fill: none;
                      stroke-dasharray: 1000;
                      animation: drawLine 3s ease-in-out infinite;
                    }
                  `}</style>
                </defs>
                {[...Array(19)].map((_, i) => {
                  const x1 = 10 + (i % 5) * 20;
                  const y1 = 10 + Math.floor(i / 5) * 25;
                  const x2 = 10 + ((i + 1) % 5) * 20;
                  const y2 = 10 + Math.floor((i + 1) / 5) * 25;
                  return (
                    <line
                      key={`line-${i}`}
                      x1={`${x1}%`}
                      y1={`${y1}%`}
                      x2={`${x2}%`}
                      y2={`${y2}%`}
                      className="connecting-line"
                      style={{ animationDelay: `${i * 0.15}s` }}
                    />
                  );
                })}
              </svg>
            </div>

            <div className="relative z-10">
              <div className="flex items-baseline gap-1 sm:gap-2 mb-1 sm:mb-4">
                <span className="text-4xl sm:text-8xl lg:text-[10rem] font-display leading-none">05</span>
                <span className="text-xs sm:text-2xl text-muted-foreground">Wins</span>
              </div>
              <p className="text-[10px] sm:text-base text-muted-foreground max-w-md leading-tight">
                Multiple #1 and #2 placements in official dev contests.
              </p>
            </div>
          </div>

          {/* Stacked stat cards */}
          <div className="col-span-5 sm:col-span-4 flex flex-col gap-3 sm:gap-6">
            <div className={`flex-1 p-4 sm:p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
              <span className="text-xl sm:text-5xl lg:text-6xl font-display">Legend</span>
              <span className="block text-[8px] sm:text-sm text-muted-foreground mt-1">Community Title</span>
            </div>

            <div className={`flex-1 p-4 sm:p-8 border border-foreground/10 bg-foreground/[0.02] transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}>
              <span className="text-xl sm:text-5xl lg:text-6xl font-display">Junior</span>
              <span className="block text-[8px] sm:text-sm text-muted-foreground mt-1">Dev @ BB</span>
            </div>
          </div>
        </div>

        {/* Accomplishment list */}
        <div
          className={`mt-8 lg:mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 lg:gap-4 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100" : "opacity-0"}`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {accomplishments.map((item, index) => {
            const CardContent = (
              <div
                className={`h-full p-5 sm:p-6 border transition-all duration-300 ${item.link ? "cursor-pointer" : "cursor-default"} ${activeItem === index
                  ? "border-foreground/30 bg-foreground/[0.04]"
                  : "border-foreground/10 hover:border-foreground/20"
                  }`}
              >
                <div className="flex items-center gap-2 mb-2 sm:mb-3">
                  <span className={`w-1.5 h-1.5 rounded-full transition-colors ${activeItem === index ? "bg-[#eca8d6]" : "bg-foreground/20"
                    }`} />
                  <span className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider">
                    {item.status}
                  </span>
                </div>
                <h4 className="text-base sm:text-lg font-display mb-1">{item.name}</h4>
                <p className="text-xs sm:text-sm text-muted-foreground leading-snug">{item.detail}</p>
                {item.link && (
                  <div className={`mt-3 text-[9px] font-mono uppercase tracking-widest transition-opacity duration-300 ${activeItem === index ? "opacity-100" : "opacity-0"}`}>
                    <span className="text-[#eca8d6]">View Proof ↗</span>
                  </div>
                )}
              </div>
            );

            return item.link ? (
              <a key={item.name} href={item.link} target="_blank" rel="noopener noreferrer" onMouseEnter={() => setActiveItem(index)} className="block">
                {CardContent}
              </a>
            ) : (
              <div key={item.name} onMouseEnter={() => setActiveItem(index)}>
                {CardContent}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
