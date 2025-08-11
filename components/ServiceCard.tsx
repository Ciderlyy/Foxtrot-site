import React from 'react'
import Link from 'next/link'

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
  link?: string
  external?: boolean
}

export default function ServiceCard({ title, description, icon, link, external }: ServiceCardProps) {
  const cardContent = (
    <div className="bg-secondary/20 border border-accent/20 rounded-lg p-6 hover:border-accent/50 hover:bg-secondary/30 transition-all duration-300 hover:shadow-lg group">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-accent/20 to-fox-orange/20 rounded-lg flex items-center justify-center text-accent group-hover:from-accent/30 group-hover:to-fox-orange/30 transition-all duration-300">
          {icon}
        </div>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-text mb-2 group-hover:text-accent transition-colors duration-300">{title}</h3>
          <p className="text-text-secondary leading-relaxed">{description}</p>
          
          {link && (
            <div className="mt-4 flex items-center text-accent text-sm font-medium">
              <span>{external ? 'External Link' : 'View Details'}</span>
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {external ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                )}
              </svg>
            </div>
          )}
        </div>
      </div>
    </div>
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
        className="block hover:transform hover:scale-105 transition-transform duration-200"
      >
        {cardContent}
      </a>
    )
  }

  return (
    <Link href={link} className="block hover:transform hover:scale-105 transition-transform duration-200">
      {cardContent}
    </Link>
  )
}
