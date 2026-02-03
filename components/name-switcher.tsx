'use client'

import { useState, useEffect } from 'react'

const names = ['Arijitiyan', 'I AM CC', 'Captain Cool', 'Nasirul']

export default function NameSwitcher() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true)
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % names.length)
        setIsTransitioning(false)
      }, 300)
    }, 4000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative h-16 md:h-20">
      <h1 
        className={`absolute text-4xl md:text-6xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent transition-all duration-300 ${
          isTransitioning ? 'opacity-0 -translate-y-4' : 'opacity-100 translate-y-0'
        }`}
      >
        {names[currentIndex]}
      </h1>
    </div>
  )
}
