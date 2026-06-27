'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function Organizations() {
  const organizations = [
    {
      name: 'The Planetary Society',
      mission: 'Advancing space exploration and scientific discovery',
      areas: 'Space Exploration, Planetary Science',
      website: 'https://www.planetary.org',
      donate: 'https://www.planetary.org/donate'
    },
    {
      name: 'SETI Institute',
      mission: 'Searching for extraterrestrial intelligence and life',
      areas: 'Astrobiology, Space Science',
      website: 'https://www.seti.org',
      donate: 'https://www.seti.org/support'
    },
    {
      name: 'Perimeter Institute',
      mission: 'Advancing theoretical physics through research',
      areas: 'Quantum Physics, Fundamental Physics',
      website: 'https://www.perimeterinstitute.ca',
      donate: 'https://www.perimeterinstitute.ca/support'
    },
    {
      name: 'CERN & Society Foundation',
      mission: 'Supporting scientific research at the frontiers',
      areas: 'Particle Physics, Engineering',
      website: 'https://www.cern.ch',
      donate: 'https://home.cern/support-cern'
    },
    {
      name: 'St. Jude Children\'s Research Hospital',
      mission: 'Treating and curing childhood cancer',
      areas: 'Medical Research, Oncology',
      website: 'https://www.stjude.org',
      donate: 'https://www.stjude.org/donate'
    },
    {
      name: 'The Nature Conservancy',
      mission: 'Protecting lands and waters for all life',
      areas: 'Climate Science, Environmental Conservation',
      website: 'https://www.nature.org',
      donate: 'https://www.nature.org/en-us/get-involved/how-to-help/donate/'
    },
    {
      name: 'Ocean Conservancy',
      mission: 'Protecting ocean ecosystems worldwide',
      areas: 'Marine Science, Environmental Protection',
      website: 'https://oceanconservancy.org',
      donate: 'https://oceanconservancy.org/ways-to-help/donate/'
    },
    {
      name: 'Breakthrough Initiatives',
      mission: 'Supporting scientific research for humanity\'s future',
      areas: 'Multi-disciplinary Scientific Research',
      website: 'https://breakthroughinitiatives.org',
      donate: 'https://breakthroughinitiatives.org'
    },
  ]

  return (
    <>
      <Navigation />
      
      <HeroSection
        title="Featured Organizations"
        subtitle="Supporting the world's leading research institutions"
        showScroll={false}
      />

      {/* Organizations Grid */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {organizations.map((org) => (
            <motion.div
              key={org.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="glass-dark p-6 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 flex flex-col"
            >
              <h3 className="text-2xl font-bold text-cyan-400 mb-3">{org.name}</h3>
              <p className="text-gray-300 mb-4 flex-1">{org.mission}</p>
              <div className="mb-6">
                <p className="text-sm text-gray-400 font-semibold mb-1">Research Areas:</p>
                <p className="text-sm text-cyan-300">{org.areas}</p>
              </div>
              <div className="flex gap-3">
                <Link
                  href={org.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 text-center text-sm border border-cyan-500 text-cyan-400 hover:bg-cyan-500/20 rounded-lg transition-all duration-300"
                >
                  Learn More
                </Link>
                <Link
                  href={org.donate}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 px-4 py-2 text-center text-sm bg-cyan-500 text-navy-950 font-semibold hover:bg-cyan-400 rounded-lg transition-all duration-300"
                >
                  Support
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
