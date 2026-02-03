'use client'

import Link from 'next/link'
import { X, Github, Mail, Send, Home, Folder, User } from 'lucide-react'
import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

interface MobileSidebarProps {
    isOpen: boolean
    onClose: () => void
    navItems: { href: string; label: string }[]
}

export default function MobileSidebar({ isOpen, onClose, navItems }: MobileSidebarProps) {
    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) return null

    return createPortal(
        <>
            {/* Backdrop */}
            <div
                className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-[99] transition-opacity duration-300 md:hidden ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar Panel */}
            <div
                className={`fixed top-0 right-0 bottom-0 w-[280px] h-full bg-background border-l border-white/10 z-[100] shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {/* Sidebar Header */}
                <div className="flex items-center justify-between p-6 border-b border-white/5 bg-background/50 backdrop-blur-xl">
                    <span className="text-xl font-bold font-mono tracking-wider text-primary">
                        Menu
                    </span>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-white/5 rounded-full transition-colors"
                    >
                        <X size={24} className="text-foreground/80" />
                    </button>
                </div>

                {/* Sidebar Links */}
                <div className="flex-1 flex flex-col p-6 gap-2 overflow-y-auto bg-background">
                    {navItems.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            onClick={onClose}
                            className="flex items-center gap-4 p-4 text-foreground/70 hover:text-primary hover:bg-primary/5 rounded-xl transition-all duration-200 group"
                            suppressHydrationWarning
                        >
                            {item.label === 'Home' && <Home size={20} className="group-hover:scale-110 transition-transform" />}
                            {item.label === 'Projects' && <Folder size={20} className="group-hover:scale-110 transition-transform" />}
                            {item.label === 'About' && <User size={20} className="group-hover:scale-110 transition-transform" />}

                            <span className="font-semibold uppercase tracking-widest text-sm">
                                {item.label}
                            </span>
                        </Link>
                    ))}
                </div>

                {/* Sidebar Footer */}
                <div className="p-6 border-t border-white/5 bg-background/50 backdrop-blur-xl">
                    <div className="flex justify-center gap-6">
                        <a href="https://github.com/nasirul786" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/50 hover:text-primary transition-colors" suppressHydrationWarning>
                            <Github size={20} />
                        </a>
                        <a href="https://t.me/arijitiyan" target="_blank" rel="noopener noreferrer" className="p-2 text-foreground/50 hover:text-primary transition-colors" suppressHydrationWarning>
                            <Send size={20} />
                        </a>
                        <a href="mailto:alinasirul438@gmail.com" className="p-2 text-foreground/50 hover:text-primary transition-colors" suppressHydrationWarning>
                            <Mail size={20} />
                        </a>
                    </div>
                    <p className="text-center text-xs text-foreground/30 mt-4">
                        © 2026 Nasirul. All rights reserved.
                    </p>
                </div>
            </div>
        </>,
        document.body
    )
}
