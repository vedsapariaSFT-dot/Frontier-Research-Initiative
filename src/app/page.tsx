'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'
import AnimatedCounter from '@/components/AnimatedCounter'
import { Rocket, Zap, Brain, Heart, Cloud, Zap as ZapIcon } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const features = [
    {
      title: 'Space Exploration',
      description: 'Advancing human knowledge through satellite technology and deep space missions.',
      icon: <Rocket />,
    },
    {
      title: 'Quantum Physics',
      description: 'Unlocking the fundamental nature of reality at the quantum scale.',
      icon: <Zap />,
    },
    {
      title: 'Artificial Intelligence',
      description: 'Creating intelligent systems that solve humanity\'s greatest challenges.',
      icon: <Brain />,
    },
    {
      title: 'Medical Research',
      description: 'Developing breakthrough treatments and cures for disease.',
      icon: <Heart />,
    },
    {
      title: 'Climate Science',
      description: 'Understanding and protecting our planet\'s critical systems.',
      icon: <Cloud />,
    },
    {
      title: 'Renewable Energy',
      description: 'Transitioning to sustainable energy sources for a better future.',
      icon: <ZapIcon />,
    },
  ]

  return (
    <>
      <Navigation />
      
      {/* Hero Section */}
      <HeroSection
        title="Science For Tomorrow"
        subtitle="Investing in Humanity's Future Through Scientific Discovery"
        ctaButtons={[
          { label: 'Explore Science', href: '/discover', variant: 'primary' },
          { label: 'Discover Organizations', href: '/organizations', variant: 'secondary' },
        ]}
      />

      {/* Mission Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Mission</h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Science For Tomorrow connects curious minds with groundbreaking research organizations worldwide. We believe in democratizing access to scientific knowledge and inspiring the next generation of innovators.
          </p>
        </motion.div>
      </section>

      {/* Feature Cards */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-12"
          >
            Scientific Fields We Cover
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature) => (
              <Card
                key={feature.title}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-center mb-12"
        >
          Our Impact
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <AnimatedCounter end={50} label="Research Organizations" />
          <AnimatedCounter end={200} label="Scientific Breakthroughs" suffix="+" />
          <AnimatedCounter end={1000000} label="Inspired Scientists" />
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-navy-900/50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-2xl mx-auto text-center glass-dark p-8 rounded-3xl border border-cyan-500/30"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Stay Updated</h2>
          <p className="text-gray-400 mb-6">
            Subscribe to our newsletter for the latest scientific discoveries and research insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg bg-navy-900/50 border border-cyan-500/30 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400"
            />
            <button className="px-6 py-3 bg-cyan-500 hover:bg-cyan-400 text-navy-950 font-semibold rounded-lg transition-all duration-300">
              Subscribe
            </button>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  )
}
