'use client'

import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import HeroSection from '@/components/HeroSection'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { useState } from 'react'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      q: 'What is Science For Tomorrow?',
      a: 'Science For Tomorrow is an educational initiative dedicated to inspiring scientific curiosity and connecting people with leading research organizations advancing human knowledge.'
    },
    {
      q: 'Who founded Science For Tomorrow?',
      a: 'Science For Tomorrow was founded by Ved Saparia, a passionate advocate for scientific discovery and education.'
    },
    {
      q: 'How are organizations selected?',
      a: 'Organizations are selected based on their impact, research quality, transparency, and commitment to advancing human knowledge in their respective fields.'
    },
    {
      q: 'How can I support scientific research?',
      a: 'You can support research by visiting featured organizations, making donations, volunteering, or engaging with educational content to spread awareness.'
    },
    {
      q: 'How can I suggest an organization?',
      a: 'We welcome suggestions! Please contact us through our contact page with details about the organization you\'d like us to feature.'
    },
    {
      q: 'Is there any cost to access content?',
      a: 'All content on Science For Tomorrow is completely free. We believe scientific knowledge should be accessible to everyone.'
    },
  ]

  return (
    <>
      <Navigation />
      
      <HeroSection
        title="Frequently Asked Questions"
        subtitle="Find answers to common questions about Science For Tomorrow"
        showScroll={false}
      />

      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              className="glass-dark rounded-2xl border border-cyan-500/30 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-cyan-500/10 transition-colors duration-300"
              >
                <h3 className="text-lg font-bold text-left text-cyan-400">{faq.q}</h3>
                <ChevronDown
                  size={24}
                  className={`text-cyan-400 transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-4 border-t border-cyan-500/20"
                >
                  <p className="text-gray-400">{faq.a}</p>
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      <Footer />
    </>
  )
}
