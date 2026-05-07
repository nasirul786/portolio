"use client";

import { useEffect, useRef, useState } from "react";

const projects = [
  {
    number: "01",
    title: "Ads Galaxy",
    subtitle: "Ad-Network Mini App",
    description: "A sophisticated Telegram ad-network connecting advertisers and publishers. Features continental targeting, cheat-proof interaction detection, and a comprehensive admin panel.",
    tech: ["Next.js", "MySQL", "Telegram Bot API"],
    link: "https://t.me/Ads_Galaxy_bot",
  },
  {
    number: "02",
    title: "GiFTM",
    subtitle: "Digital Marketplace",
    description: "A premium marketplace for Telegram services (Premium, Stars, TON). Features automated UPI verification via reverse-engineering and instant delivery through Fragment.com automation.",
    tech: ["Next.js", "MySQL", "Fragment Automation"],
    link: "https://giftm.cc",
  },
  {
    number: "03",
    title: "PrizeNova",
    subtitle: "Task-to-Earn Mini App",
    description: "Comprehensive Task-to-Earn Mini App with integrated games, ads, and crypto rewards. Built to handle scale with a seamless user experience.",
    tech: ["PHP", "vanilla", "MySQL"],
    link: "https://t.me/PrizeNovaBot",
  },
  {
    number: "04",
    title: "WhatOTP",
    subtitle: "2FA Mini App",
    description: "A secure, elegant Two-Factor Authentication (2FA) authenticator built for the Telegram ecosystem. Next.js and MySQL powered security.",
    tech: ["Next.js", "TypeScript", "MySQL"],
    link: "https://t.me/What_OTP_bot",
  },
];

export function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

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
      setActiveProject((prev) => (prev + 1) % projects.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-24 lg:py-32 bg-[oklch(0.09_0.01_260)] text-white overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-white/[0.02] blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="relative mb-20 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end relative z-10">
            <div className="lg:col-span-8 overflow-hidden">
              <div className={`transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"}`}>
                <span className="inline-flex items-center gap-3 text-sm font-mono text-white/40 mb-8">
                  <span className="w-12 h-px bg-white/20" />
                  Featured Work
                </span>
              </div>

              <h2 className={`text-5xl sm:text-7xl lg:text-[128px] font-display tracking-tighter leading-[0.8] transition-all duration-1000 delay-100 ${isVisible ? "translate-y-0 opacity-100" : "translate-y-16 opacity-0"
                }`}>
                <span className="block">Crafted</span>
                <span className="block text-white/30">with</span>
                <span className="block text-white/10 italic">precision.</span>
              </h2>
            </div>
          </div>

          {/* Decorative Tree Image - Open Layout */}
          <div className={`absolute top-0 right-0 lg:top-0 lg:right-0 w-[45%] lg:w-[60%] h-[60%] lg:h-full pointer-events-none transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-110"
            }`}>
            <img
              src="/images/tree.png"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-contain object-right-bottom lg:object-bottom opacity-60 lg:opacity-100"
            />
            {/* Soft fade to ensure text readability on mobile */}
            <div className="absolute inset-0 bg-gradient-to-t from-[oklch(0.09_0.01_260)] via-transparent to-transparent md:hidden" />
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {projects.map((project, index) => (
            <div
              key={project.title}
              onMouseEnter={() => setActiveProject(index)}
              className={`relative text-left p-8 border transition-all duration-500 min-h-[360px] flex flex-col justify-between group ${activeProject === index
                ? "bg-white/[0.05] border-white/40 shadow-2xl"
                : "bg-transparent border-white/10 hover:border-white/30"
                }`}
            >
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <span className={`text-2xl font-mono transition-colors duration-300 ${activeProject === index ? "text-[#eca8d6]" : "text-white/20"
                    }`}>
                    {project.number}
                  </span>
                  <div className="flex-1 h-px bg-white/10">
                    {activeProject === index && (
                      <div className="h-full bg-[#eca8d6] animate-progress" />
                    )}
                  </div>
                </div>

                <h3 className="text-3xl font-display mb-1">{project.title}</h3>
                <span className="text-sm text-white/40 font-mono block mb-4 uppercase tracking-widest">{project.subtitle}</span>
                <p className="text-white/50 text-sm leading-relaxed mb-6">{project.description}</p>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-2 text-xs font-mono uppercase tracking-tighter transition-all duration-300 ${activeProject === index ? "text-[#eca8d6] opacity-100" : "text-white/40 opacity-0 group-hover:opacity-100"
                      }`}
                  >
                    View Project
                    <span className="text-[10px]">↗</span>
                  </a>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="text-[10px] font-mono px-2 py-1 bg-white/5 text-white/40 border border-white/10 uppercase tracking-tighter">
                    {t}
                  </span>
                ))}
              </div>

              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-[#eca8d6] transition-transform duration-500 origin-left ${activeProject === index ? "scale-x-100" : "scale-x-0"
                }`} />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes progress {
          from { width: 0%; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 6s linear forwards;
        }
      `}</style>
    </section>
  );
}
