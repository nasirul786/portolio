"use client";

import { useEffect, useRef, useState } from "react";

const skills = [
  {
    number: "01",
    title: "Telegram Bots",
    description: "Advanced automation using TDLib and Telegram Bot API. Built systems for 100k+ users.",
    stats: { value: "100k+", label: "users served" },
  },
  {
    number: "02",
    title: "Mini Apps (TMA)",
    description: "Secure and feature-rich Web Apps integrated within Telegram. Next.js & React based.",
    stats: { value: "20+", label: "apps developed" },
  },
  {
    number: "03",
    title: "Web3 & Crypto",
    description: "Decentralized applications, automated ROI plans, and blockchain integrations.",
    stats: { value: "500k+", label: "volume handled" },
  },
  {
    number: "04",
    title: "Full-stack Dev",
    description: "Versatile development across JS/TS, PHP, and modern frameworks for any project.",
    stats: { value: "5yr", label: "coding journey" },
  },
];

// Floating dot particles visualization
function ParticleVisualization() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef(0);
  const mouseRef = useRef({ x: 0.5, y: 0.5 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height,
      };
    };
    canvas.addEventListener("mousemove", handleMouseMove);

    // Generate stable particle positions
    const COUNT = 70;
    const particles = Array.from({ length: COUNT }, (_, i) => {
      const seed = i * 1.618;
      return {
        bx: ((seed * 127.1) % 1),
        by: ((seed * 311.7) % 1),
        phase: seed * Math.PI * 2,
        speed: 0.4 + (seed % 0.4),
        radius: 1.2 + (seed % 2.2),
      };
    });

    let time = 0;
    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const w = rect.width;
      const h = rect.height;

      ctx.clearRect(0, 0, w, h);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      particles.forEach((p) => {
        const flowX = Math.sin(time * p.speed * 0.4 + p.phase) * 38;
        const flowY = Math.cos(time * p.speed * 0.3 + p.phase * 0.7) * 24;

        const bx = p.bx * w;
        const by = p.by * h;
        const dx = p.bx - mx;
        const dy = p.by - my;
        const dist = Math.sqrt(dx * dx + dy * dy);
        const influence = Math.max(0, 1 - dist * 2.8);

        const x = bx + flowX + influence * Math.cos(time + p.phase) * 36;
        const y = by + flowY + influence * Math.sin(time + p.phase) * 36;

        const pulse = Math.sin(time * p.speed + p.phase) * 0.5 + 0.5;
        const alpha = 0.08 + pulse * 0.18 + influence * 0.3;

        ctx.beginPath();
        ctx.arc(x, y, p.radius + pulse * 0.8, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`;
        ctx.fill();
      });

      time += 0.016;
      frameRef.current = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-auto"
      style={{ width: "100%", height: "100%" }}
    />
  );
}

export function SkillsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header - Full width with diagonal layout */}
        <div className="relative mb-24 lg:mb-32">
          <div className="grid lg:grid-cols-12 gap-8 items-end">
            <div className="lg:col-span-7">
              <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
                <span className="w-12 h-px bg-foreground/30" />
                Technical Expertise
              </span>
              <h2
                className={`text-5xl sm:text-6xl md:text-7xl lg:text-[128px] font-display tracking-tighter leading-[0.85] transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
                  }`}
              >
                Innovative
                <br />
                <span className="text-muted-foreground">solutions.</span>
              </h2>
            </div>
            <div className="lg:col-span-5 lg:pb-4">
              <p className={`text-xl text-muted-foreground leading-relaxed transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
                }`}>
                Specializing in Telegram bots, mini-apps, and Web3 technologies to bring your decentralized ideas to life.
              </p>
            </div>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-4 lg:gap-6">
          <div
            className={`lg:col-span-8 relative bg-black border border-foreground/10 min-h-[340px] md:min-h-[400px] overflow-hidden group transition-all duration-700 flex ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <div className="relative flex-1 p-6 md:p-12 bg-black">
              {/* Subtle accent glow */}
              <div className="absolute -left-20 -top-20 w-64 h-64 bg-[#eca8d6]/5 blur-[100px] rounded-full pointer-events-none" />
              
              <div className="relative z-10">
                <span className="font-mono text-xs md:text-sm text-muted-foreground">{skills[0].number}</span>
                <h3 className="text-2xl sm:text-3xl lg:text-5xl font-display mt-3 md:mt-4 mb-4 md:mb-6 group-hover:text-[#eca8d6] transition-colors duration-500">
                  {skills[0].title}
                </h3>
                <p className="text-sm md:text-lg text-white/50 leading-relaxed max-w-md mb-8 md:mb-12">
                  {skills[0].description}
                </p>
                <div className="flex items-baseline gap-4">
                  <span className="text-5xl md:text-6xl lg:text-7xl font-display text-white">{skills[0].stats.value}</span>
                  <span className="text-[10px] md:text-sm text-muted-foreground font-mono uppercase tracking-widest">{skills[0].stats.label}</span>
                </div>
              </div>
            </div>

            {/* Right Image with stronger mask */}
            <div className="hidden md:block relative w-[45%] shrink-0 overflow-hidden">
              <img
                src="/images/slope.png"
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover object-center"
                style={{ transform: "scaleX(-1)" }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black" />
            </div>
          </div>

          {/* Secondary feature - Mini Apps */}
          <div
            className={`lg:col-span-4 relative bg-black border border-foreground/10 p-6 md:p-10 group transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <span className="font-mono text-xs md:text-sm text-muted-foreground">{skills[1].number}</span>
            <h3 className="text-xl sm:text-2xl lg:text-3xl font-display mt-3 md:mt-4 mb-4 md:mb-6 group-hover:text-[#eca8d6] transition-colors">
              {skills[1].title}
            </h3>
            <p className="text-sm md:text-base text-muted-foreground mb-10 md:mb-12">
              {skills[1].description}
            </p>
            <div className="mt-auto">
              <span className="text-3xl md:text-5xl font-display">{skills[1].stats.value}</span>
              <span className="block text-[10px] md:text-xs text-muted-foreground font-mono mt-1">{skills[1].stats.label}</span>
            </div>
          </div>

          {/* Bottom row features */}
          <div
            className={`lg:col-span-6 relative bg-black border border-foreground/10 p-6 md:p-10 group transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <span className="font-mono text-xs md:text-sm text-muted-foreground">{skills[2].number}</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display mt-3 md:mt-4 mb-3 md:mb-4 group-hover:text-[#eca8d6] transition-colors">
                  {skills[2].title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-sm mb-4 sm:mb-8">
                  {skills[2].description}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-3xl md:text-5xl font-display">{skills[2].stats.value}</span>
                <span className="block text-[10px] md:text-xs text-muted-foreground font-mono mt-1">{skills[2].stats.label}</span>
              </div>
            </div>
          </div>

          <div
            className={`lg:col-span-6 relative bg-black border border-foreground/10 p-6 md:p-10 group transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
              }`}
          >
            <div className="flex flex-col sm:flex-row justify-between items-start gap-4">
              <div>
                <span className="font-mono text-xs md:text-sm text-muted-foreground">{skills[3].number}</span>
                <h3 className="text-xl sm:text-2xl lg:text-3xl font-display mt-3 md:mt-4 mb-3 md:mb-4 group-hover:text-[#eca8d6] transition-colors">
                  {skills[3].title}
                </h3>
                <p className="text-sm md:text-base text-muted-foreground max-w-sm mb-4 sm:mb-8">
                  {skills[3].description}
                </p>
              </div>
              <div className="sm:text-right">
                <span className="text-3xl md:text-5xl font-display">{skills[3].stats.value}</span>
                <span className="block text-[10px] md:text-xs text-muted-foreground font-mono mt-1">{skills[3].stats.label}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
