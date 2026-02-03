'use client'

import { useState } from 'react'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import ProjectCard from '@/components/project-card'
import ProjectModal from '@/components/project-modal'
import { Shield, Fingerprint, Cloud, QrCode, Globe, Palette, TrendingUp, LayoutDashboard, Wallet, Users, Lock, Zap, FileCheck, Megaphone, Gamepad2, Gift, Trophy, Ticket, Bot, MessageSquare, BrainCircuit, Search, Calendar, ExternalLink } from 'lucide-react'

const projectsData = [
  {
    id: "whatotp",
    title: "WhatOTP",
    image: "/img/whatOTP-project.png",
    shortDescription: "A secure, elegant, and feature-rich Two-Factor Authentication (2FA) authenticator built specifically as a Telegram Mini App.",
    fullDescription: "WhatOTP is a secure, elegant, and feature-rich Two-Factor Authentication (2FA) authenticator built specifically as a Telegram Mini App. Unlike traditional authenticators, it lives directly within your messenger, eliminating the need for a separate app while ensuring your accounts are always accessible.\n\nKey capabilities include:\n\n• **Cloud Synchronization:** Your accounts are securely tied to your Telegram ID, allowing seamless access across multiple devices without manual transfer.\n• **Bank-Grade Security:** All secrets are encrypted on secure servers, protected by Telegram's native Biometric Manager (FaceID/TouchID) and a fallback passcode.\n• **Ease of Migration:** Quickly import accounts via QR scan and export them anytime, ensuring you never get locked out.\n• **User-Centric Design:** A modern, dark-themed interface with smooth Lottie animations makes the experience intuitive and visually appealing.",
    techStack: ["Next.js", "TypeScript", "MySQL", "Node.js"],
    features: [
      {
        title: "Secure Storage",
        icon: <Shield size={24} className="text-primary" />,
        description: "User secrets are encrypted and stored securely on private servers."
      },
      {
        title: "Biometric Protection",
        icon: <Fingerprint size={24} className="text-primary" />,
        description: "Integrated with Telegram's Biometric Manager for FaceID/TouchID support with fallback passcode."
      },
      {
        title: "Cloud Sync",
        icon: <Cloud size={24} className="text-primary" />,
        description: "Accounts are tied to your Telegram user ID for seamless cross-device access."
      },
      {
        title: "Import / Export",
        icon: <QrCode size={24} className="text-primary" />,
        description: "Scan QR codes to add accounts or export via QR code/file for migration."
      },
      {
        title: "Multi-Language",
        icon: <Globe size={24} className="text-primary" />,
        description: "Support for English, Hindi, Bengali, Indonesian, and more via scalable JSON locales."
      },
      {
        title: "Modern UI",
        icon: <Palette size={24} className="text-primary" />,
        description: "Beautiful dark/light mode with smooth animations using Lottie and Framer Motion."
      }
    ],
    techDetails: [
      { label: "Framework", value: "Next.js 14+ (App Router)" },
      { label: "Language", value: "TypeScript" },
      { label: "Styling", value: "Tailwind CSS, Lucide React" },
      { label: "Animations", value: "Framer Motion, Lottie" },
      { label: "Database", value: "MySQL" },
      { label: "Cryptography", value: "otpauth, bcryptjs, crypto" },
      { label: "Deployment", value: "Vercel" }
    ],
    demoLink: "https://t.me/What_OTP_bot"
  },
  {
    id: "capitora",
    title: "Capitora",
    image: "/img/capitora-project.png",
    shortDescription: "A lightweight, secure crypto investment platform with automated ROI plans and a comprehensive admin panel.",
    fullDescription: "Capitora is a high-performance crypto investment platform designed for transparency and automation. It serves as a turnkey solution for investment businesses, allowing administrators to define custom plans with specific ROI, duration, and pricing structures.\n\nThe system is engineered for speed and reliability:\n\n• **Automated Finance:** Integrated with Oxapay, deposits and withdrawals are processed automatically, reducing manual workload while maintaining audit trails.\n• **Flexible Plans:** Admins can configure plans that pay out daily, weekly, or at maturity, with precise control over interest rates and compounding.\n• **Lightweight Architecture:** Built with Vanilla JS and Tailwind CSS, the frontend is incredibly fast, ensuring a smooth experience even on low-end devices.\n• **Powerful Admin Panel:** A comprehensive dashboard provides real-time analytics on user growth, total deposits, and pending payouts, giving owners full operational awareness.",
    techStack: ["PHP", "Vanilla JS", "MySQL", "Tailwind CSS"],
    features: [
      {
        title: "Investment Plans",
        icon: <TrendingUp size={24} className="text-primary" />,
        description: "Admin-configurable plans with flexible pricing, duration, and daily ROI calculations."
      },
      {
        title: "Admin Dashboard",
        icon: <LayoutDashboard size={24} className="text-primary" />,
        description: "Comprehensive control panel for user management, balance adjustments, and platform analytics."
      },
      {
        title: "Automated Payments",
        icon: <Wallet size={24} className="text-primary" />,
        description: "Seamless deposit and withdrawal integration using Oxapay crypto payment gateway."
      },
      {
        title: "User Management",
        icon: <Users size={24} className="text-primary" />,
        description: "Tools to restrict users, manage pending withdrawals, and modify account balances."
      },
      {
        title: "Secure Core",
        icon: <Lock size={24} className="text-primary" />,
        description: "Built with secure backend connections and a robust MySQL database architecture."
      },
      {
        title: "Lightweight UI",
        icon: <Zap size={24} className="text-primary" />,
        description: "High-performance interface built with Vanilla JS and Tailwind CSS for maximum speed."
      }
    ],
    techDetails: [
      { label: "Frontend", value: "HTML, Tailwind CSS, Vanilla JS" },
      { label: "Backend", value: "PHP" },
      { label: "Database", value: "MySQL" },
      { label: "Payments", value: "Oxapay Gateway" },
      { label: "Design", value: "Modern & Responsive" }
    ],
    demoLink: "https://capitora.net"
  },
  {
    id: "prizenova",
    title: "PrizeNova",
    image: "/img/prizenova-project.png",
    shortDescription: "A comprehensive Task-to-Earn Telegram Mini App with games, ads, and crypto rewards.",
    fullDescription: "PrizeNova is an advanced 'Task-to-Earn' ecosystem operating as a Telegram Mini App. It bridges the gap between user engagement and crypto rewards through a diversified economy of Games, Tasks, and Events.\n\nThe platform offers a rich variety of features:\n\n• **Gamified Earning:** Users aren't just clicking links; they are playing Slot Games with spin tokens, hunting for keys to open Treasure Boxes, and competing in seasonal events like 'Snowflakes' to earn exclusive NFTs.\n• **Robust Task Engine:** The system automatically verifies complex actions such as joining private channels, starting bots, or engaging with social media, rewarding users instantly with Gold or Diamonds.\n• **User-Created Economy:** Uniquely, users can spend their earned TON to create their own tasks, driving traffic to their channels and creating a self-sustaining ecosystem.\n• **Weekly Draws & Events:** A transparent lottery system allows users to buy tickets with Stars or game currency, while configurable seasonal events keep retention high.\n• **Monetization & Ads:** Integrated with top ad networks (Monetag, Adsgram), the app generates revenue while rewarding users, creating a win-win model.",
    techStack: ["PHP", "MySQL", "Telegram API", "HTML5/JS"],
    features: [
      {
        title: "Task System",
        icon: <FileCheck size={24} className="text-primary" />,
        description: "Automated verification for channel joins, bot starts, and link visits."
      },
      {
        title: "Mini Games",
        icon: <Gamepad2 size={24} className="text-primary" />,
        description: "Engaging Slot and Treasure Box games with configurable win rates and prizes."
      },
      {
        title: "Ad Network",
        icon: <Megaphone size={24} className="text-primary" />,
        description: "Integrated high-paying ad networks (Monetag, Adsgram) for user monetization."
      },
      {
        title: "Events & Rewards",
        icon: <Gift size={24} className="text-primary" />,
        description: "Seasonal events (Snowflakes), weekly draws, and NFT prizes for top performers."
      },
      {
        title: "Leaderboards",
        icon: <Trophy size={24} className="text-primary" />,
        description: "Competitive referral system with instant bonuses and commission sharing."
      },
      {
        title: "Economy",
        icon: <Ticket size={24} className="text-primary" />,
        description: "Multi-currency system (Gold, Diamonds, TON) with promo codes and dynamic withdrawal limits."
      }
    ],
    techDetails: [
      { label: "Frontend", value: "HTML, CSS, JS (Mini App)" },
      { label: "Backend", value: "PHP, MySQL" },
      { label: "Integration", value: "Telegram API, Monetag" },
      { label: "Payments", value: "TON Blockchain, Manual" },
      { label: "Features", value: "Ads, Games, Tasks, Admin Panel" }
    ],
    demoLink: "https://t.me/prizenovabot"
  },
  {
    id: "smmnova",
    title: "SMM Nova",
    image: "/img/smmnova-project.png",
    shortDescription: "An AI-powered Telegram SMM panel Mini App where 'Kritika' helps you grow your presence via chat.",
    fullDescription: "SMM Nova redefines social media marketing directly within Telegram, powered by an advanced AI assistant named **Kritika**. Unlike traditional dashboards, this Mini App offers a conversational interface where users can simply tell the AI what they need.\n\n**Meet Kritika (AI):**\n• **Smart Service matching:** comprehensive service scanning allows Kritika to find the best reaction, view, or member packages based on simple text queries like \"I want likes for my post\".\n• **Instant Execution:** The AI can generate order forms, track status, and fetch history directly in the chat window.\n• **Intelligent Navigation:** Users can ask for help finding features (e.g., \"How do I deposit?\") and Kritika will guide them or deep-link them to the correct section.\n\nThe platform integrates with third-party SMM providers to fulfill orders for Telegram reactions, views, members, and more, while the backend ensures secure automated payments via Oxapay and manages a commission-based referral system.",
    techStack: ["PHP", "Bootstrap", "MySQL", "AI Integration"],
    features: [
      {
        title: "AI Assistant (Kritika)",
        icon: <Bot size={24} className="text-primary" />,
        description: "Conversational AI that scans services, processes orders, and guides users via natural language."
      },
      {
        title: "Chat-Based Ordering",
        icon: <MessageSquare size={24} className="text-primary" />,
        description: "Order SMM services like reactions and views directly through a chat interface without complex menus."
      },
      {
        title: "Smart Navigation",
        icon: <BrainCircuit size={24} className="text-primary" />,
        description: "AI-driven help system that navigates users to specific app features based on their intent."
      },
      {
        title: "Service Scanner",
        icon: <Search size={24} className="text-primary" />,
        description: "Intelligent search that parses thousands of third-party services to find the best match."
      },
      {
        title: "Automated Wallet",
        icon: <Wallet size={24} className="text-primary" />,
        description: "Seamless crypto deposits via Oxapay with automated balance updates."
      },
      {
        title: "Referral System",
        icon: <Users size={24} className="text-primary" />,
        description: "Deposit-commission based referral program with transparent tracking."
      }
    ],
    techDetails: [
      { label: "Frontend", value: "HTML, Bootstrap, JS" },
      { label: "Backend", value: "PHP, MySQL" },
      { label: "AI Engine", value: "Custom NLP Integration" },
      { label: "Payments", value: "Oxapay Gateway" },
      { label: "Platform", value: "Telegram Mini App" }
    ],
    demoLink: "https://t.me/SMMNovaBot"
  }
]

const achievementsData = [
  {
    title: "Recruited by Bots Business (BB) as Junior Dev",
    date: "02 Nov 2025",
    description: "Official recruitment into the development team.",
    icon: <Users size={24} className="text-primary" />
  },
  {
    title: "Legend Title on BB",
    date: "16 May 2025",
    link: "https://t.me/botsbus/2201",
    linkText: "View Announcement",
    icon: <Trophy size={24} className="text-yellow-500" />
  },
  {
    title: "#1 Winner: BB YouTube Video Editing Contest",
    date: "7 May 2025",
    link: "https://t.me/botsbus/2194",
    linkText: "View Results",
    icon: <Trophy size={24} className="text-yellow-400" />
  },
  {
    title: "#1 Winner: BB Refer & Earn Bot Making Contest",
    date: "20 April 2025",
    link: "https://t.me/botsbus/2187",
    linkText: "View Results",
    icon: <Trophy size={24} className="text-yellow-400" />
  },
  {
    title: "#2 Winner: BB WebApp Making Contest",
    date: "15 March 2025",
    link: "https://t.me/botsbus/2165",
    linkText: "View Results",
    icon: <Trophy size={24} className="text-gray-400" />
  },
  {
    title: "#1 Winner: BB SmartBot Making Contest",
    date: "10 Feb 2025",
    link: "https://t.me/botsbus/2141",
    linkText: "View Results",
    icon: <Trophy size={24} className="text-yellow-400" />
  }
]

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<any>(null)

  return (
    <div className="min-h-screen text-foreground">
      <Navigation />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">

        {/* Header */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold font-mono mb-4 text-primary animate-slideInLeft">My Projects</h1>
          <p className="text-foreground/70 max-w-3xl text-lg animate-fadeInUp leading-relaxed">
            {`I have been building around the Telegram ecosystem **since 2023**, specializing in **Bots**, **Mini Apps**, and advanced **TDLib** automation. While below are some of my personal highlights, I have also collaborated with numerous clients to bring their unique ideas to life in projects not listed here.`.split('**').map((part, index) =>
              index % 2 === 1 ? <strong key={index} className="text-primary/90 font-bold">{part}</strong> : part
            )}
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          {projectsData.map((project, index) => (
            <div key={project.id} className="animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
              <ProjectCard
                project={project}
                onOpen={setSelectedProject}
              />
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div className="mb-12 animate-fadeInUp">
          <h2 className="text-3xl font-bold font-mono mb-8 text-primary flex items-center gap-3">
            <Trophy size={32} />
            Achievements
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievementsData.map((item, index) => (
              <div
                key={index}
                className="bg-card/50 border border-white/5 rounded-xl p-6 hover:border-primary/50 transition-colors flex gap-4 items-start"
              >
                <div className="p-3 bg-white/5 rounded-lg shrink-0">
                  {item.icon}
                </div>
                <div className="flex-1 space-y-2">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-lg text-white leading-tight">{item.title}</h3>
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground bg-white/5 px-2 py-1 rounded-full shrink-0">
                      <Calendar size={12} />
                      <span>{item.date}</span>
                    </div>
                  </div>

                  {item.description && (
                    <p className="text-foreground/70 text-sm">{item.description}</p>
                  )}

                  {item.link && (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-1"
                      suppressHydrationWarning
                    >
                      {item.linkText}
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Modal */}
        <ProjectModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          project={selectedProject}
        />

      </main>
      <Footer />
    </div>
  )
}
