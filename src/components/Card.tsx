'use client'

import { motion } from 'framer-motion'
import React from 'react'

interface CardProps {
  title: string
  description: string
  icon?: React.ReactNode
  image?: string
  children?: React.ReactNode
  hover?: boolean
  className?: string
}

export default function Card({
  title,
  description,
  icon,
  image,
  children,
  hover = true,
  className = '',
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={hover ? { y: -5, scale: 1.02 } : {}}
      className={`glass-dark p-6 rounded-2xl border border-white/10 hover:border-cyan-500/50 transition-all duration-300 ${className}`}
    >
      {image && (
        <div className="mb-4 h-48 rounded-xl overflow-hidden bg-gradient-to-br from-cyan-500/20 to-navy-900">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      {icon && <div className="mb-4 text-cyan-400 text-3xl">{icon}</div>}
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-400 text-sm mb-4">{description}</p>
      {children}
    </motion.div>
  )
}
