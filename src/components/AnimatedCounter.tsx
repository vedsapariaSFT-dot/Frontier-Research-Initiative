'use client'

import { useEffect, useRef, useState } from 'react'

interface AnimatedCounterProps {
  end: number
  duration?: number
  label?: string
  suffix?: string
}

export default function AnimatedCounter({
  end,
  duration = 2,
  label,
  suffix = '',
}: AnimatedCounterProps) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true)
    })
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const increment = end / (duration * 60)
    let current = 0
    const timer = setInterval(() => {
      current += increment
      if (current >= end) {
        setCount(end)
        clearInterval(timer)
      } else {
        setCount(Math.floor(current))
      }
    }, 1000 / 60)
    return () => clearInterval(timer)
  }, [isVisible, end, duration])

  return (
    <div
      ref={ref}
      style={{
        textAlign: 'center',
        opacity: isVisible ? 1 : 0.5,
        transition: 'opacity 0.3s',
      }}
    >
      <div style={{
        fontSize: '3rem',
        fontWeight: 'bold',
        background: 'linear-gradient(90deg, #06b6d4, #0891b2)',
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        marginBottom: '8px',
      }}>
        {count.toLocaleString()}{suffix}
      </div>
      {label && <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{label}</p>}
    </div>
  )
}
