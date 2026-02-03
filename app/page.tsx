'use client'

import Link from 'next/link'
import { Github, Mail, Send } from 'lucide-react'
import NameSwitcher from '@/components/name-switcher'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'


export default function Home() {
  return (
    <div className="min-h-screen text-foreground overflow-hidden">
      <Navigation />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="pt-32 pb-20 md:py-32 flex flex-col md:flex-row gap-12 items-center relative z-10">
          <div className="flex-1 animate-fadeInUp">
            <div className="mb-6">
              <p className="text-primary text-sm font-semibold uppercase tracking-wider mb-2">Welcome</p>
              <NameSwitcher />
            </div>

            <p className="text-lg md:text-xl text-foreground/80 mb-4 leading-relaxed">
              Full-stack developer passionate about building innovative solutions
            </p>

            <p className="text-base md:text-lg text-foreground/70 mb-8 max-w-lg leading-relaxed">
              I specialize in Telegram bots, mini apps, and crypto-related projects. I can also work with any other projects including Next.js web development, PHP, and more.
            </p>

            <div className="flex gap-4 flex-wrap">
              <Link
                href="/projects"
                className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:opacity-90 hover:shadow-lg transition-all duration-300"
                suppressHydrationWarning
              >
                View Projects
              </Link>
              <Link
                href="/details"
                className="px-6 py-3 border border-primary text-primary font-medium rounded-lg hover:bg-primary/10 transition-colors"
                suppressHydrationWarning
              >
                About Me
              </Link>
            </div>
          </div>

          {/* Code Block */}
          <div className="flex-1 bg-card border border-border rounded-lg p-6 font-mono text-sm hover:border-primary/50 transition-colors duration-300">
            <div className="space-y-4">
              <div className="text-muted-foreground">
                <span className="text-primary">const</span> developer = {'{'}
              </div>
              <div className="text-muted-foreground ml-4">
                <span className="text-primary">name:</span> <span className="text-green-400">"Nasirul"</span>,
              </div>
              <div className="text-muted-foreground ml-4">
                <span className="text-primary">skills:</span> [<span className="text-green-400">"Telegram Bots"</span>, <span className="text-green-400">"Mini Apps"</span>, <span className="text-green-400">"Crypto"</span>, <span className="text-green-400">"Web Dev"</span>],
              </div>
              <div className="text-muted-foreground ml-4">
                <span className="text-primary">languages:</span> [<span className="text-green-400">"JavaScript"</span>, <span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"PHP"</span>],
              </div>
              <div className="text-muted-foreground ml-4">
                <span className="text-primary">passionate:</span> <span className="text-blue-400">true</span>
              </div>
              <div className="text-muted-foreground">
                {'}'}
              </div>
            </div>
          </div>


        </section>

        {/* Skills Section */}
        <section className="py-16 md:py-24 border-t border-border relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 animate-slideInLeft">Skills & Expertise</h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-primary mb-3">Telegram Development</h3>
              <p className="text-foreground/70">Building interactive bots and mini applications on Telegram platform with advanced features and integrations.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-primary mb-3">Crypto Projects</h3>
              <p className="text-foreground/70">Developing blockchain-related applications, smart contract integration, and cryptocurrency trading platforms.</p>
            </div>

            <div className="bg-card border border-border rounded-lg p-6 hover:border-primary/50 hover:shadow-lg transition-all duration-300 cursor-pointer">
              <h3 className="text-xl font-semibold text-primary mb-3">Web Development</h3>
              <p className="text-foreground/70">Full-stack development with Next.js, React, TypeScript, PHP, and modern web technologies.</p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-24 border-t border-border relative z-10">
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 p-8 md:p-16 text-center backdrop-blur-sm rounded-xl md:px-px md:py-px md:pt-2.5 md:pb-2.5">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Collaborate?</h2>
            <p className="text-foreground/70 mb-10 max-w-2xl mx-auto text-lg">
              Have an interesting project? Let's work together to bring your ideas to life.
            </p>
            <a
              href="https://t.me/arijitiyan"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 hover:shadow-xl transition-all duration-300 text-lg py-2"
              suppressHydrationWarning
            >
              <Send size={20} />
              Message on Telegram
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div >
  )
}
