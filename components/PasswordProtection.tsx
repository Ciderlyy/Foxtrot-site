'use client'

import React, { useState, useEffect } from 'react'

interface PasswordProtectionProps {
  children: React.ReactNode
  pageName: string
}

export default function PasswordProtection({ children, pageName }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)

  const correctPassword = 'P@ssw0rd'

  useEffect(() => {
    // Check if user is already authenticated for this page
    const authKey = `auth_${pageName.toLowerCase()}`
    const isAuth = localStorage.getItem(authKey)
    if (isAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [pageName])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    
    if (password === correctPassword) {
      setIsAuthenticated(true)
      setError('')
      setAttempts(0)
      // Store authentication in localStorage
      const authKey = `auth_${pageName.toLowerCase()}`
      localStorage.setItem(authKey, 'true')
    } else {
      setAttempts(prev => prev + 1)
      setError('Incorrect password. Please try again.')
      setPassword('')
      
      // Lock out after 5 attempts for 5 minutes
      if (attempts >= 4) {
        setError('Too many failed attempts. Please wait 5 minutes before trying again.')
        setTimeout(() => {
          setAttempts(0)
          setError('')
        }, 5 * 60 * 1000) // 5 minutes
      }
    }
  }

  if (isAuthenticated) {
    return <>{children}</>
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary">
      <div className="max-w-md w-full mx-4">
        <div className="bg-secondary/20 border border-accent/20 rounded-lg p-8 shadow-lg">
          {/* Logo */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center">
              <div className="relative w-12 h-12">
                <img
                  src="/foxtrot-logo.png"
                  alt="10C4I Foxtrot Logo"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <h1 className="text-2xl font-bold text-accent">10C4I FOXTROT</h1>
            <p className="text-text-secondary mt-2">Secure Access Required</p>
          </div>

          {/* Password Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
                Enter Password to Access {pageName}
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 bg-secondary/50 border border-accent/30 rounded-lg text-text placeholder-text-secondary focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent"
                placeholder="Enter password"
                disabled={attempts >= 5}
                required
              />
            </div>

            {error && (
              <div className="text-red-400 text-sm text-center bg-red-400/10 border border-red-400/20 rounded-lg p-3">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={attempts >= 5 || !password.trim()}
              className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Access {pageName}
            </button>
          </form>

          {/* Security Notice */}
          <div className="mt-6 text-center">
            <p className="text-xs text-text-secondary">
              This area contains sensitive company information.<br />
              Access is restricted to authorized personnel only.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

