'use client'

import React, { useEffect, useRef, useState } from 'react'

interface AnimatedSectionCSSProps {
  children: React.ReactNode
  className?: string
  delay?: number
  direction?: 'up' | 'down' | 'left' | 'right'
  duration?: number
}

export default function AnimatedSectionCSS({ 
  children, 
  className = '', 
  delay = 0, 
  direction = 'up',
  duration = 0.6 
}: AnimatedSectionCSSProps) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay * 1000)
        }
      },
      { threshold: 0.1 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [delay])

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700 ease-out'
    
    if (!isVisible) {
      switch (direction) {
        case 'up':
          return `${baseClasses} opacity-0 translate-y-12`
        case 'down':
          return `${baseClasses} opacity-0 -translate-y-12`
        case 'left':
          return `${baseClasses} opacity-0 translate-x-12`
        case 'right':
          return `${baseClasses} opacity-0 -translate-x-12`
        default:
          return `${baseClasses} opacity-0 translate-y-12`
      }
    }
    
    return `${baseClasses} opacity-100 translate-y-0 translate-x-0`
  }

  return (
    <div
      ref={ref}
      className={`${className} ${getAnimationClasses()}`}
      style={{ transitionDelay: `${delay * 1000}ms` }}
    >
      {children}
    </div>
  )
}

