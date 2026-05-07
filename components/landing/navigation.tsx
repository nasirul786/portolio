"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Projects", href: "#projects" },
  { name: "Process", href: "#process" },
  { name: "Skills", href: "#skills" },
  { name: "Stack", href: "#stack" },
  { name: "Experience", href: "#achievements" },
  { name: "Pricing", href: "#pricing" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed z-50 transition-all duration-500 ${isScrolled && !isMobileMenuOpen
        ? "top-4 left-4 right-4"
        : "top-0 left-0 right-0"
        }`}
    >
      <nav
        className={`mx-auto transition-all duration-500 ${isScrolled || isMobileMenuOpen
          ? "bg-background/80 backdrop-blur-xl border-b border-foreground/10"
          : "bg-transparent"
          } ${(isScrolled || isMobileMenuOpen) && !isMobileMenuOpen ? "rounded-2xl border shadow-lg max-w-[1200px]" : "max-w-[1400px]"}`}
      >
        <div
          className={`flex items-center justify-between transition-all duration-500 px-6 lg:px-8 ${isScrolled || isMobileMenuOpen ? "h-16" : "h-20"
            }`}
        >
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group z-[60]">
            <span className={`font-display tracking-tight transition-all duration-500 ${isScrolled || isMobileMenuOpen ? "text-xl text-foreground" : "text-2xl text-white"}`}>ARIJITIYAN</span>
            <span className={`font-mono transition-all duration-500 ${isScrolled || isMobileMenuOpen ? "text-[10px] mt-0.5 text-muted-foreground" : "text-xs mt-1 text-white/60"}`}>I AM CC</span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm transition-colors duration-300 relative group ${isScrolled ? "text-foreground/70 hover:text-foreground" : "text-white/70 hover:text-white"}`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${isScrolled ? "bg-foreground" : "bg-white"}`} />
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-all duration-500 z-[60] ${isScrolled || isMobileMenuOpen ? "text-foreground" : "text-white"}`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu - Full Screen Overlay */}
      <div
        className={`md:hidden fixed inset-0 bg-background z-40 transition-all duration-500 ${isMobileMenuOpen
          ? "opacity-100 pointer-events-auto"
          : "opacity-0 pointer-events-none"
          }`}
        style={{ top: 0 }}
      >
        <div className="flex flex-col h-full px-8 pt-40 pb-12 relative">
          {/* Explicit Close Button inside overlay */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-6 right-6 p-2 text-foreground hover:text-[#eca8d6] transition-colors"
            aria-label="Close menu"
          >
            <X className="w-8 h-8" />
          </button>

          {/* Navigation Links */}
          <div className="flex-1 flex flex-col justify-start gap-8">
            {navLinks.map((link, i) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`text-4xl sm:text-5xl font-display text-foreground hover:text-[#eca8d6] transition-all duration-500 ${isMobileMenuOpen
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
                  }`}
                style={{ transitionDelay: isMobileMenuOpen ? `${i * 60}ms` : "0ms" }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Status or Info */}
          <div className={`mt-auto transition-all duration-1000 delay-500 ${isMobileMenuOpen ? "opacity-100" : "opacity-0"}`}>
            <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Available for projects</p>
            <a href="mailto:me@arijitiyan.cc" className="text-sm text-foreground hover:text-[#eca8d6] transition-colors">me@arijitiyan.cc</a>
          </div>
        </div>
      </div>
    </header>
  );
}
