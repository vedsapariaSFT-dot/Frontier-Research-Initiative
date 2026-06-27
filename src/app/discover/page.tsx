'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'
import { motion } from 'framer-motion'

export default function Discover() {
  const fields = [
    {
      title: 'Space Exploration',
      description: 'Venturing beyond Earth to understand our place in the cosmos.',
      breakthroughs: 'James Webb Space Telescope discoveries, Mars rovers, exoplanet detection',
      future: 'Lunar bases, Mars settlements, interstellar probes'
    },
    {
      title: 'Quantum Mechanics',
      description: 'Understanding the fundamental rules governing matter and energy.',
      breakthroughs: 'Quantum computing, quantum cryptography, particle physics',
      future: 'Quantum internet, room-temperature superconductors'
    },
    {
      title: 'Artificial Intelligence',
      description: 'Creating intelligent systems that enhance human capabilities.',
      breakthroughs: 'Large language models, computer vision, autonomous systems',
      future: 'AGI research, AI-designed medicines, human-AI collaboration'
    },
    {
      title: 'Medical Research',
      description: 'Developing treatments and cures for human diseases.',
      breakthroughs: 'Gene therapy, immunotherapy, mRNA vaccines',
      future: 'Personalized medicine, aging reversal, organ regeneration'
    },
    {
      title: 'Climate Science',
      description: 'Understanding and protecting our planet\'s critical systems.',
      breakthroughs: 'Climate modeling, renewable technology, carbon capture',
      future: 'Net-zero emissions, climate restoration, sustainable energy'
    },
    {
      title: 'Renewable Energy',
      description: 'Powering the world with clean, sustainable energy sources.',
      breakthroughs: 'Solar efficiency, battery technology, wind innovation',
      future: 'Fusion power, global energy grid, zero-carbon civilization'
    },
  ]

  return (
    <>
      <Navigation />
      
      <HeroSection
        title="Discover Science"
        subtitle="Explore the frontiers of human knowledge across all scientific disciplines"
        showScroll={false}
      />

      {/* Scientific Fields */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="space-y-16">
          {fields.map((field, index) => (
            <motion.div
              key={field.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-dark p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300"
            >
              <div className="flex items-start gap-6 mb-6">
                <div className="text-5xl font-bold text-cyan-400/30">{String(index + 1).padStart(2, '0')}</div>
                <div className="flex-1">
                  <h3 className="text-3xl font-bold mb-2 text-cyan-400">{field.title}</h3>
                  <p className="text-gray-300 text-lg">{field.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Current Breakthroughs
                  </h4>
                  <p className="text-gray-400">{field.breakthroughs}</p>
                </div>
                <div>
                  <h4 className="text-cyan-400 font-semibold mb-2 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                    Future Possibilities
                  </h4>
                  <p className="text-gray-400">{field.future}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
