'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import Logo from './Logo'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const handleLogout = () => {
    // Clear all authentication tokens
    localStorage.removeItem('auth_resources')
    localStorage.removeItem('auth_tools')
    // Reload the page to reset authentication state
    window.location.reload()
  }

  return (
    <header className="bg-primary/95 backdrop-blur-sm border-b border-accent/20 sticky top-0 z-50 shadow-lg">
      <div className="container-max">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <Link href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/" 
              className="text-text-secondary hover:text-accent transition-colors font-medium"
            >
              Home
            </Link>
            <Link 
              href="/resources" 
              className="text-text-secondary hover:text-accent transition-colors font-medium"
            >
              Resources
            </Link>
            <Link 
              href="/tools" 
              className="text-text-secondary hover:text-accent transition-colors font-medium"
            >
              Tools
            </Link>
            <Link 
              href="/about" 
              className="text-text-secondary hover:text-accent transition-colors font-medium"
            >
              About
            </Link>
            <Link 
              href="/contact" 
              className="text-text-secondary hover:text-accent transition-colors font-medium"
            >
              Contact
            </Link>
            <button
              onClick={handleLogout}
              className="text-text-secondary hover:text-accent transition-colors font-medium px-3 py-1 border border-accent/30 rounded hover:border-accent/50"
            >
              Logout
            </button>
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
          <div className="md:hidden border-t border-accent/20 bg-secondary/50">
            <div className="px-4 py-2 space-y-1">
              <Link 
                href="/" 
                className="block py-2 text-text-secondary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                href="/resources" 
                className="block py-2 text-text-secondary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Resources
              </Link>
              <Link 
                href="/tools" 
                className="block py-2 text-text-secondary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link 
                href="/about" 
                className="block py-2 text-text-secondary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block py-2 text-text-secondary hover:text-accent transition-colors font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <button
                onClick={() => {
                  handleLogout()
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left py-2 text-text-secondary hover:text-accent transition-colors font-medium border-t border-accent/20 pt-2 mt-2"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
