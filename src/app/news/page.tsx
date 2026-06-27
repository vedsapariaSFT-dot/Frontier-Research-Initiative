'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function News() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const news = [
    {
      title: 'James Webb Discovers Ancient Galaxies',
      category: 'astronomy',
      date: 'June 2026',
      description: 'Revolutionary observations reveal galaxies formed just 300 million years after the Big Bang.'
    },
    {
      title: 'Quantum Computer Solves Complex Problem',
      category: 'physics',
      date: 'May 2026',
      description: 'Breakthrough in quantum computing demonstrates practical applications for drug discovery.'
    },
    {
      title: 'AI Discovers New Antibiotic',
      category: 'medicine',
      date: 'April 2026',
      description: 'Artificial intelligence identifies powerful new antibiotic to fight resistant bacteria.'
    },
    {
      title: 'Climate Restoration Project Succeeds',
      category: 'climate',
      date: 'June 2026',
      description: 'Large-scale carbon capture facility removes record amounts of CO2 from atmosphere.'
    },
    {
      title: 'Renewable Energy Reaches 50% Global',
      category: 'technology',
      date: 'May 2026',
      description: 'Milestone achieved: renewable energy now powers half the world\'s electricity.'
    },
    {
      title: 'AI System Masters Scientific Research',
      category: 'ai',
      date: 'April 2026',
      description: 'Machine learning model predicts protein structures and accelerates drug development.'
    },
  ]

  const categories = ['all', 'astronomy', 'technology', 'physics', 'medicine', 'climate', 'ai']
  const filtered = selectedCategory === 'all' ? news : news.filter(n => n.category === selectedCategory)

  return (
    <>
      <Navigation />
      
      <HeroSection
        title="Latest Scientific News"
        subtitle="Stay updated with groundbreaking discoveries and research advances"
        showScroll={false}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="flex flex-wrap gap-3 justify-center mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition-all duration-300 ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-navy-950 shadow-glow-cyan'
                  : 'border border-cyan-500/50 text-cyan-400 hover:border-cyan-400 hover:bg-cyan-500/10'
              }`}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* News Articles */}
        <div className="space-y-6">
          {filtered.map((article, index) => (
            <motion.div
              key={article.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="glass-dark p-8 rounded-2xl border border-cyan-500/30 hover:border-cyan-400/50 transition-all duration-300 cursor-pointer group"
            >
              <div className="flex items-start justify-between mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-semibold bg-cyan-500/20 text-cyan-300">
                  {article.category.toUpperCase()}
                </span>
                <span className="text-sm text-gray-500">{article.date}</span>
              </div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-3 group-hover:text-cyan-300 transition-colors">
                {article.title}
              </h3>
              <p className="text-gray-400">{article.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
