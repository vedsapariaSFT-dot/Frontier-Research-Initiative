'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { motion } from 'framer-motion'

export default function Research() {
  const areas = [
    { name: 'Space Exploration', description: 'Missions to explore planets, moons, and deep space' },
    { name: 'Astronomy', description: 'Observing and studying celestial objects and phenomena' },
    { name: 'Quantum Mechanics', description: 'Understanding subatomic particles and quantum fields' },
    { name: 'Particle Physics', description: 'Discovering fundamental particles and their interactions' },
    { name: 'Artificial Intelligence', description: 'Building intelligent systems and neural networks' },
    { name: 'Machine Learning', description: 'Algorithms that learn from data and improve performance' },
    { name: 'Medicine', description: 'Developing treatments and improving healthcare' },
    { name: 'Biotechnology', description: 'Using biology to create innovative solutions' },
    { name: 'Climate Science', description: 'Understanding climate systems and change' },
    { name: 'Ocean Science', description: 'Studying marine ecosystems and ocean health' },
    { name: 'Renewable Energy', description: 'Creating sustainable energy sources' },
    { name: 'Fusion Energy', description: 'Harnessing nuclear fusion for power generation' },
  ]

  return (
    <>
      <Navigation />
      
      <HeroSection
        title="Research Areas"
        subtitle="Exploring humanity's greatest scientific frontiers"
        showScroll={false}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {areas.map((area, index) => (
            <motion.div
              key={area.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-dark p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 hover:shadow-glow-cyan"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-2">{area.name}</h3>
              <p className="text-gray-400">{area.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
