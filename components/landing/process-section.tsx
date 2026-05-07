"use client";

import { useEffect, useRef, useState } from "react";

const steps = [
  {
    title: "Discovery",
    description: "Deep diving into your requirements, target audience, and technical goals to lay a solid foundation.",
  },
  {
    title: "Architecture",
    description: "Designing scalable systems with specialized focus on the requirement of your project, and high-performance backends.",
  },
  {
    title: "Development",
    description: "Crafting robust code with Next.js, MySQL, and specialized bot frameworks with extreme attention to detail.",
  },
  {
    title: "Optimization",
    description: "Continuous refinement, cheat-proof testing, and scaling to ensure your product handles 100k+ users smoothly.",
  },
];

export function ProcessSection() {
  const [isVisible, setIsVisible] = useState(false);
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

  return (
    <section id="process" ref={sectionRef} className="relative min-h-screen flex items-center overflow-hidden bg-black">
      {/* Full-width Background Image */}
      <div className={`absolute right-[-50%] bottom-0 w-[250%] h-[250%] lg:inset-0 lg:w-full lg:h-full transition-all duration-1000 ${isVisible ? "scale-100 opacity-100" : "scale-110 opacity-0"}`}>
        <img
          src="/images/stairs.png"
          alt="The Journey"
          className="w-full h-full object-contain lg:object-cover object-right-bottom lg:object-[80%_center]"
        />
        {/* Subtle Dark Overlays for Readability - Lightened for Mobile */}
        <div className="absolute inset-0 bg-black/30 lg:bg-black/20" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/20 to-transparent lg:from-black lg:via-black/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:from-black/60" />
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 lg:px-12 py-32">
        <div className="max-w-4xl">
          <span className={`inline-flex items-center gap-3 text-sm font-mono text-[#eca8d6] mb-8 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}>
            <span className="w-12 h-px bg-[#eca8d6]/50" />
            The Process
          </span>

          <h2 className={`text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-display tracking-tighter leading-[0.8] text-white mb-20 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"}`}>
            Steps to
            <br />
            <span className="text-white/40 italic">perfection.</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            {steps.map((step, index) => (
              <div
                key={step.title}
                className={`group transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${index * 150 + 400}ms` }}
              >
                <div className="flex gap-6">
                  <span className="text-sm font-mono text-[#eca8d6] mt-1 shrink-0">
                    0{index + 1}
                  </span>
                  <div>
                    <h3 className="text-2xl font-display text-white mb-3 group-hover:text-[#eca8d6] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-base text-white/60 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
