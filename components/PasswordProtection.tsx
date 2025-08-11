'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

interface PasswordProtectionProps {
  children: React.ReactNode
  pageName: string
}

interface User {
  id: string
  username: string
  rank: string
  unit: string
  email?: string
}

export default function PasswordProtection({ children, pageName }: PasswordProtectionProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [attempts, setAttempts] = useState(0)
  const [isLocked, setIsLocked] = useState(false)
  const [lockoutTime, setLockoutTime] = useState(0)
  const [isLoading, setIsLoading] = useState(false)
  const [user, setUser] = useState<User | null>(null)

  useEffect(() => {
    // Check if already authenticated for this page
    const authKey = `auth_${pageName.toLowerCase()}`
    const savedAuth = localStorage.getItem(authKey)
    const savedUser = localStorage.getItem(`${authKey}_user`)
    const savedTimestamp = localStorage.getItem(`${authKey}_timestamp`)
    
    if (savedAuth && savedUser && savedTimestamp) {
      const timestamp = parseInt(savedTimestamp)
      const now = Date.now()
      // Session expires after 2 hours
      if (now - timestamp < 2 * 60 * 60 * 1000) {
        setIsAuthenticated(true)
        setUser(JSON.parse(savedUser))
        return
      } else {
        // Clear expired session
        localStorage.removeItem(authKey)
        localStorage.removeItem(`${authKey}_user`)
        localStorage.removeItem(`${authKey}_timestamp`)
      }
    }

    // Check if locked out
    const lockoutKey = `lockout_${pageName.toLowerCase()}`
    const savedLockout = localStorage.getItem(lockoutKey)
    if (savedLockout) {
      const lockoutData = JSON.parse(savedLockout)
      if (Date.now() < lockoutData.until) {
        setIsLocked(true)
        setLockoutTime(lockoutData.until)
        setAttempts(lockoutData.attempts)
      } else {
        localStorage.removeItem(lockoutKey)
      }
    }
  }, [pageName])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (isLocked) {
      setError('Account temporarily locked. Please try again later.')
      return
    }

    if (username.trim() === '' || password.trim() === '') {
      setError('Please enter both username and password')
      return
    }

    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      })

      const data = await response.json()

      if (response.ok && data.success) {
        setIsAuthenticated(true)
        setUser(data.user)
        setError('')
        setAttempts(0)
        
        // Save authentication with timestamp
        const authKey = `auth_${pageName.toLowerCase()}`
        localStorage.setItem(authKey, 'true')
        localStorage.setItem(`${authKey}_user`, JSON.stringify(data.user))
        localStorage.setItem(`${authKey}_timestamp`, Date.now().toString())
        
        // Clear any lockout
        localStorage.removeItem(`lockout_${pageName.toLowerCase()}`)
      } else {
        const newAttempts = attempts + 1
        setAttempts(newAttempts)
        
        if (newAttempts >= 5) {
          // Lock out for 15 minutes after 5 failed attempts
          const lockoutUntil = Date.now() + (15 * 60 * 1000)
          setIsLocked(true)
          setLockoutTime(lockoutUntil)
          
          const lockoutData = {
            until: lockoutUntil,
            attempts: newAttempts
          }
          localStorage.setItem(`lockout_${pageName.toLowerCase()}`, JSON.stringify(lockoutData))
          
          setError('Too many failed attempts. Account locked for 15 minutes.')
        } else {
          setError(`Invalid credentials. ${5 - newAttempts} attempts remaining.`)
        }
        
        // Clear password field
        setPassword('')
      }
    } catch (error) {
      console.error('Login error:', error)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setIsLoading(false)
    }
  }

  const handleLogout = () => {
    setIsAuthenticated(false)
    setUser(null)
    setUsername('')
    setPassword('')
    setError('')
    
    // Clear authentication
    const authKey = `auth_${pageName.toLowerCase()}`
    localStorage.removeItem(authKey)
    localStorage.removeItem(`${authKey}_user`)
    localStorage.removeItem(`${authKey}_timestamp`)
  }

  if (isAuthenticated) {
    return (
      <div>
        {/* Success Banner */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-r from-green-500/20 to-emerald-500/20 border border-green-500/30 rounded-lg p-4 mb-6"
        >
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <div>
                <span className="text-green-600 font-medium">
                  Access Granted - Welcome to {pageName}
                </span>
                {user && (
                  <div className="text-sm text-green-600/80 mt-1">
                    {user.rank} {user.username} - {user.unit}
                  </div>
                )}
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="text-sm text-green-600 hover:text-green-700 font-medium px-3 py-1 rounded border border-green-500/30 hover:bg-green-500/10 transition-colors"
            >
              Lock Page
            </button>
          </div>
        </motion.div>
        
        {children}
      </div>
    )
  }

  if (isLocked) {
    const remainingTime = Math.ceil((lockoutTime - Date.now()) / 1000 / 60)
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-secondary/20 border border-accent/20 rounded-lg p-8 max-w-md w-full text-center"
        >
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-text mb-4">Access Temporarily Locked</h2>
          <p className="text-text-secondary mb-6">
            Too many failed login attempts. Please wait before trying again.
          </p>
          
          <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-4">
            <p className="text-red-600 font-medium">
              Lockout expires in: {remainingTime} minutes
            </p>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-secondary/20 border border-accent/20 rounded-lg p-8 max-w-md w-full"
      >
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
            </svg>
          </div>
          
          <h2 className="text-2xl font-bold text-text mb-2">Access Restricted</h2>
          <p className="text-text-secondary">
            This {pageName} page requires authentication
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-text mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-4 py-3 bg-secondary/30 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent text-text placeholder-text-secondary/50"
              placeholder="Enter your username"
              disabled={isLocked}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-text mb-2">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 bg-secondary/30 border border-accent/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-transparent text-text placeholder-text-secondary/50"
              placeholder="Enter your password"
              disabled={isLocked}
            />
          </div>

          {error && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              className="bg-red-500/10 border border-red-500/20 rounded-lg p-3"
            >
              <p className="text-red-600 text-sm">{error}</p>
            </motion.div>
          )}

          <button
            type="submit"
            disabled={isLocked || username.trim() === '' || password.trim() === '' || isLoading}
            className="w-full bg-gradient-to-r from-accent to-fox-orange text-white font-semibold py-3 px-6 rounded-lg hover:from-accent/90 hover:to-fox-orange/90 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {isLoading ? (
              <div className="flex items-center justify-center space-x-2">
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                <span>Authenticating...</span>
              </div>
            ) : (
              isLocked ? 'Locked' : 'Access Page'
            )}
          </button>
        </form>

        {attempts > 0 && (
          <div className="mt-4 text-center">
            <p className="text-sm text-text-secondary">
              Failed attempts: {attempts}/5
            </p>
          </div>
        )}

        <div className="mt-6 text-center">
          <p className="text-xs text-text-secondary/60">
            © 2024 10C4I Foxtrot - Secure Access Portal
          </p>
        </div>
      </motion.div>
    </div>
  )
}

