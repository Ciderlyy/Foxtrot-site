'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  external?: boolean
}

export default function ServiceCard({ title, description, icon, link, external }: ServiceCardProps) {
  const cardContent = (
    <motion.div 
      className="bg-secondary/20 border border-accent/20 rounded-lg p-6 hover:border-accent/50 hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg group cursor-pointer"
      whileHover={{ 
        y: -8,
        scale: 1.02,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="flex items-start space-x-4">
        <motion.div 
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-fox-orange/20 rounded-lg flex items-center justify-center"
          whileHover={{ 
            rotate: 360,
            transition: { duration: 0.6 }
          }}
        >
          <div className="text-accent group-hover:text-fox-orange transition-colors duration-300">
            {icon}
          </div>
        </motion.div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300">
            {title}
          </h3>
          <p className="text-text-secondary text-sm leading-relaxed">
            {description}
          </p>
        </div>
        
        <motion.div
          className="flex-shrink-0 w-6 h-6 text-accent/60 group-hover:text-accent transition-colors duration-300"
          whileHover={{ x: 3 }}
        >
          <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </motion.div>
      </div>
    </motion.div>
  )

  if (link) {
    if (external) {
      return (
        <a 
          href={link} 
          target="_blank" 
          rel="noopener noreferrer"
          className="block"
        >
          {cardContent}
        </a>
      )
    } else {
      return (
        <Link href={link} className="block">
          {cardContent}
        </Link>
      )
    }
  }

  return cardContent
}