'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'
import { motion } from 'framer-motion'
import { Lightbulb, Shield, BookOpen, Zap, Globe, Target } from 'lucide-react'

export default function About() {
  const values = [
    { title: 'Scientific Curiosity', description: 'We fuel the innate human desire to understand the universe', icon: <Lightbulb /> },
    { title: 'Integrity', description: 'We prioritize honesty and transparency in all our work', icon: <Shield /> },
    { title: 'Education', description: 'We believe knowledge should be accessible to everyone', icon: <BookOpen /> },
    { title: 'Innovation', description: 'We embrace breakthrough thinking and new approaches', icon: <Zap /> },
    { title: 'Global Impact', description: 'We connect minds across borders for common good', icon: <Globe /> },
    { title: 'Purpose-Driven', description: 'We guide decisions through scientific excellence', icon: <Target /> },
  ]

  return (
    <>
      <Navigation />
      
      <HeroSection
        title="About Science For Tomorrow"
        subtitle="Founded on the belief that science should inspire, educate, and unite humanity"
        showScroll={false}
      />

      {/* Founder Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Founded by Ved Saparia</h2>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-6">
            Ved Saparia is a passionate advocate for scientific discovery and education. With a vision to make cutting-edge research accessible to everyone, he founded Science For Tomorrow to bridge the gap between world-class research institutions and curious minds everywhere.
          </p>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            His mission is simple: inspire the next generation of scientists and ensure humanity's greatest challenges receive the attention and resources they deserve.
          </p>
        </motion.div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-dark p-8 rounded-2xl border border-cyan-500/30"
            >
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Our Mission</h3>
              <p className="text-gray-300 leading-relaxed">
                To inspire scientific curiosity, connect researchers with global audiences, and support organizations advancing humanity through groundbreaking research across all scientific disciplines.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="glass-dark p-8 rounded-2xl border border-cyan-500/30"
            >
              <h3 className="text-3xl font-bold mb-4 text-cyan-400">Our Vision</h3>
              <p className="text-gray-300 leading-relaxed">
                A world where scientific knowledge is universally accessible, where research institutions are celebrated for their contributions, and where every person understands their role in humanity's scientific progress.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Core Values
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {values.map((value) => (
            <Card
              key={value.title}
              title={value.title}
              description={value.description}
              icon={value.icon}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
