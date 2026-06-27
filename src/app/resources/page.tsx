'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import Card from '@/components/Card'
import { motion } from 'framer-motion'

export default function Resources() {
  const resources = [
    {
      title: 'What is Quantum Physics?',
      description: 'Explore the fundamental principles governing particles and forces at the smallest scales.'
    },
    {
      title: 'How Rockets Work',
      description: 'Understanding the physics and engineering behind space travel and launch systems.'
    },
    {
      title: 'Black Holes Explained',
      description: 'Discover the mysteries of spacetime, gravity, and the universe\'s most extreme objects.'
    },
    {
      title: 'Fusion Energy',
      description: 'Learn how nuclear fusion could power a sustainable future.'
    },
    {
      title: 'Dark Matter & Dark Energy',
      description: 'Uncovering the invisible forces shaping our universe.'
    },
    {
      title: 'The James Webb Space Telescope',
      description: 'Peering deeper into space and time than ever before.'
    },
    {
      title: 'Artificial Intelligence',
      description: 'How machine learning is revolutionizing science and technology.'
    },
    {
      title: 'Space Colonization',
      description: 'The challenges and possibilities of human settlements beyond Earth.'
    },
    {
      title: 'Climate Change',
      description: 'Understanding the science behind global warming and climate action.'
    },
    {
      title: 'Medical Breakthroughs',
      description: 'Latest advances in treating cancer, genetic diseases, and aging.'
    },
    {
      title: 'CRISPR & Gene Editing',
      description: 'Revolutionary technology for modifying DNA and treating genetic disorders.'
    },
    {
      title: 'Neural Networks',
      description: 'How artificial neural networks mimic biological brains.'
    },
  ]

  return (
    <>
      <Navigation />
      
      <HeroSection
        title="Educational Resources"
        subtitle="Learn about groundbreaking science and research"
        showScroll={false}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <Card
              key={resource.title}
              title={resource.title}
              description={resource.description}
              hover={true}
            />
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
