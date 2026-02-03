'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import MobileSidebar from '@/components/mobile-sidebar'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/details', label: 'About' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 w-full px-4 sm:px-6 lg:px-8 py-4 pointer-events-none">
      <div className="pointer-events-auto bg-white/5 backdrop-blur-2xl backdrop-saturate-150 border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.36)] rounded-full px-8 py-4 mx-auto max-w-5xl flex items-center justify-between transition-all duration-300 hover:bg-white/10 hover:shadow-[0_8px_32px_0_rgba(255,255,255,0.1)] hover:border-white/30">

        {/* Logo / Title */}
        <Link href="/" className="text-xl font-bold font-mono tracking-wider text-primary" suppressHydrationWarning>
          Captain Cool
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm transition-colors duration-300 group font-bold uppercase tracking-[0.1em]"
              suppressHydrationWarning
            >
              <span className="text-foreground/80 group-hover:text-primary transition-colors">
                {item.label}
              </span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 hover:bg-white/5 rounded-full transition-colors"
          onClick={() => setIsOpen(true)}
        >
          <Menu size={24} className="text-primary" />
        </button>

        {/* Dedicated Mobile Sidebar Component */}
        <MobileSidebar
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          navItems={navItems}
        />

      </div>
    </nav>
  )
}
