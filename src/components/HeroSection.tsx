'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaButtons?: Array<{ label: string; href: string; variant?: 'primary' | 'secondary' }>
  showScroll?: boolean
}

export default function HeroSection({
  title,
  subtitle,
  ctaButtons,
  showScroll = true,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      <div className="absolute inset-0">
        {[...Array(50)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-300 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 0.8, 0.3],
              scale: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 bg-clip-text text-transparent leading-tight">
            {title}
          </h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-xl sm:text-2xl text-gray-300 mb-8 leading-relaxed">{subtitle}</p>
        </motion.div>
        {ctaButtons && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            {ctaButtons.map((btn) => (
              <Link
                key={btn.label}
                href={btn.href}
                className={`px-8 py-4 rounded-lg font-semibold transition-all duration-300 ${
                  btn.variant === 'secondary'
                    ? 'border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-navy-950'
                    : 'bg-cyan-500 text-navy-950 hover:bg-cyan-400 shadow-glow-cyan hover:shadow-glow-cyan-lg'
                }`}
              >
                {btn.label}
              </Link>
            ))}
          </motion.div>
        )}
      </div>
      {showScroll && (
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-cyan-400" size={32} />
        </motion.div>
      )}
    </section>
  )
}
