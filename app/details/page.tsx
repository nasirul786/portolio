'use client'

import Link from 'next/link'
import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { ArrowLeft, MapPin, Mail, Phone, Cake, Send } from 'lucide-react'

export default function Details() {
  const details = {
    realName: 'Nasirul',
    dob: '01/02/2007',
    country: 'India',
    state: 'Assam',
    aliases: ['Arijitiyan', 'I AM CC', 'Captain Cool'],
    email: 'alinasirul438@gmail.com',
    telegram: '@arijitiyan'
  }

  return (
    <div className="min-h-screen text-foreground">
      <Navigation />

      <main className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 py-12 pt-32">


        <div className="space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Personal Details</h1>
            <p className="text-lg text-foreground/70">
              Get to know me better - here's a bit about who I am and how to reach me.
            </p>
          </div>

          {/* Main Info Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* Identity Card */}
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold text-primary">Identity</h2>

              <div>
                <label className="text-sm font-semibold text-muted-foreground uppercase">Real Name</label>
                <p className="text-xl mt-2">{details.realName}</p>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground uppercase">Known As</label>
                <div className="flex flex-wrap gap-2 mt-2">
                  {details.aliases.map((alias) => (
                    <span
                      key={alias}
                      className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                    >
                      {alias}
                    </span>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-muted-foreground uppercase">Date of Birth</label>
                <div className="flex items-center gap-2 mt-2">
                  <Cake size={20} className="text-primary" />
                  <p className="text-lg">{details.dob}</p>
                </div>
              </div>
            </div>

            {/* Location Card */}
            <div className="bg-card border border-border rounded-lg p-8 space-y-6">
              <h2 className="text-2xl font-bold text-primary">Location</h2>

              <div className="flex justify-between items-center gap-4">
                <div className="space-y-6">
                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase">Country</label>
                    <div className="flex items-center gap-2 mt-2">
                      <MapPin size={20} className="text-primary" />
                      <p className="text-lg">{details.country}</p>
                    </div>
                  </div>

                  <div>
                    <label className="text-sm font-semibold text-muted-foreground uppercase">State</label>
                    <p className="text-lg mt-2">{details.state}</p>
                  </div>
                </div>

                {/* Map Image */}
                <div className="relative w-28 md:w-64 aspect-square">
                  <img
                    src="/img/assam.png"
                    alt="Map of Assam"
                    className="w-full h-full object-contain opacity-80 hover:opacity-100 transition-opacity duration-300 drop-shadow-[0_0_15px_rgba(236,72,153,0.3)]"
                  />
                </div>
              </div>

              <div className="pt-4 border-t border-border">
                <p className="text-sm text-foreground/60">
                  Based in {details.state}, {details.country}, I'm available for remote work and collaboration on projects worldwide.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Section */}
          <div className="bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>

            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <Mail className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-foreground/70">Email</p>
                  <a href={`mailto:${details.email}`} className="text-lg text-primary hover:underline" suppressHydrationWarning>
                    {details.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <Send className="text-primary" size={24} />
                <div>
                  <p className="text-sm text-foreground/70">Telegram</p>
                  <a
                    href="https://t.me/arijitiyan"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-lg text-primary hover:underline"
                    suppressHydrationWarning
                  >
                    {details.telegram}
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* About Section */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">About Me</h2>

            <div className="bg-card border border-border rounded-lg p-8 space-y-4">
              <p className="text-foreground/80 leading-relaxed">
                I'm a passionate full-stack developer with expertise in building innovative solutions for the web3 and Telegram ecosystem. My journey into development started with curiosity and has evolved into a professional career spanning multiple technologies and platforms.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                My primary focus is on Telegram bot development and mini-applications, where I've created numerous projects that serve thousands of users. I'm also deeply involved in crypto-related projects, helping teams build decentralized applications and blockchain solutions.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Beyond specializations, I'm versatile and can adapt to any project requirements. Whether it's Next.js web development, PHP backends, or any other technology stack, I approach each challenge with enthusiasm and professionalism.
              </p>
            </div>
          </div>

          {/* Skills Overview */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Technical Skills</h2>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-3">Languages</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• JavaScript/TypeScript</li>
                  <li>• Python</li>
                  <li>• PHP</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-3">Frameworks</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Next.js</li>
                  <li>• React</li>
                  <li>• Node.js</li>
                </ul>
              </div>

              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="font-semibold text-primary mb-3">Specializations</h3>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li>• Telegram Bots</li>
                  <li>• Web3/Crypto</li>
                  <li>• Mini Apps</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      {/* Footer */}
      <Footer />
    </div>
  )
}
