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
          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-fox-orange/20 rounded-lg flex items-center justify-center text-accent group-hover:from-accent/30 group-hover:to-fox-orange/30 transition-all duration-300"
          whileHover={{ 
            rotate: 5,
            scale: 1.1,
            transition: { duration: 0.2 }
          }}
        >
          {icon}
        </motion.div>
        
        <div className="flex-1">
          <motion.h3 
            className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300"
            whileHover={{ x: 5 }}
          >
            {title}
          </motion.h3>
          <p className="text-text-secondary leading-relaxed">{description}</p>
          
          {link && (
            <motion.div 
              className="mt-4 flex items-center text-accent text-sm font-medium"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <span>{external ? 'External Link' : 'View Details'}</span>
              <motion.svg 
                className="w-4 h-4 ml-2" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
                whileHover={{ x: 3 }}
              >
                {external ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                )}
              </motion.svg>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  )

  if (!link) {
    return cardContent
  }

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
  }

  return (
    <Link href={link} className="block">
      {cardContent}
    </Link>
  )
}
