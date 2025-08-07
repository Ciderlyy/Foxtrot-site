'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-primary/95 backdrop-blur-sm border-b border-secondary/20 sticky top-0 z-50">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold text-text hover:text-accent transition-colors">
            10C4I FOXTROT
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-text-secondary hover:text-text transition-colors"
            >
              Home
            </Link>
            <Link 
              href="/resources" 
              className="text-text-secondary hover:text-text transition-colors"
            >
              Resources
            </Link>
            <Link 
              href="/tools" 
              className="text-text-secondary hover:text-text transition-colors"
            >
              Tools
            </Link>
            <Link 
              href="/about" 
              className="text-text-secondary hover:text-text transition-colors"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-text-secondary hover:text-text transition-colors"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 text-text-secondary hover:text-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-secondary/20">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/" 
                className="block py-2 text-text-secondary hover:text-text transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/resources" 
                className="block py-2 text-text-secondary hover:text-text transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/tools" 
                className="block py-2 text-text-secondary hover:text-text transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-text-secondary hover:text-text transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-text-secondary hover:text-text transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
