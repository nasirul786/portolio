"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Send, Mail } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />

          <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24 text-center lg:text-left">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
              {/* Left content */}
              <div className="flex-1">
                <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[72px] font-display tracking-tight mb-4 sm:mb-8 leading-[0.95]">
                  Let's build
                  <br />
                  together.
                </h2>

                <p className="text-base sm:text-xl text-muted-foreground mb-8 sm:mb-12 leading-relaxed max-w-xl mx-auto lg:mx-0">
                  Ready to transform your ideas into reality? Contact me today to discuss your next project in the Telegram or Web ecosystem.
                </p>

                <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3 sm:gap-4 justify-center lg:justify-start">
                  <Button
                    size="lg"
                    asChild
                    className="w-full sm:w-auto bg-foreground hover:bg-foreground/90 text-background px-8 h-12 sm:h-14 text-sm sm:text-base rounded-full group"
                  >
                    <a href="https://t.me/arijitiyan" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Send className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                      Message on Telegram
                      <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 ml-1 transition-transform group-hover:translate-x-1" />
                    </a>
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    asChild
                    className="w-full sm:w-auto h-12 sm:h-14 px-8 text-sm sm:text-base rounded-full border-foreground/20 hover:bg-foreground/5 group"
                  >
                    <a href="mailto:me@arijitiyan.cc" className="flex items-center gap-2">
                      <Mail className="w-3 h-3 sm:w-4 sm:h-4 transition-transform group-hover:scale-110" />
                      Email Me
                    </a>
                  </Button>
                </div>
              </div>

              {/* Right decorative element - Profile Image */}
              <div className="relative w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] shrink-0">
                <div className="absolute inset-0 bg-[#eca8d6]/5 rounded-full animate-pulse" />
                <div className="absolute inset-2 sm:inset-4 border border-[#eca8d6]/20 rounded-full shadow-[0_0_20px_rgba(236,168,214,0.1)]" />
                <div className="absolute inset-4 sm:inset-8 border border-[#eca8d6]/30 rounded-full shadow-[0_0_30px_rgba(236,168,214,0.15)]" />
                <div className="absolute inset-6 sm:inset-12 overflow-hidden rounded-full border-2 border-[#eca8d6]/40 shadow-[0_0_50px_rgba(236,168,214,0.2)]">
                  <img
                    src="/images/profile.jpg"
                    alt="Nasirul"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                </div>
                {/* Status indicator */}
                <div className="absolute bottom-[10%] right-[10%] bg-background border border-[#eca8d6]/30 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full flex items-center gap-2 shadow-[0_4px_20px_rgba(236,168,214,0.1)]">
                  <span className="w-1.5 sm:w-2 h-1.5 sm:h-2 rounded-full bg-green-500 animate-pulse" />
                  <span className="text-[8px] sm:text-[10px] font-mono font-bold tracking-widest uppercase">Available Now</span>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-32 h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-32 h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
