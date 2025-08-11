'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function FloatingElements() {
  const floatingElements = [
    { id: 1, x: '10%', y: '20%', size: 'w-4 h-4', color: 'bg-accent/20', delay: 0 },
    { id: 2, x: '85%', y: '15%', size: 'w-6 h-6', color: 'bg-fox-orange/20', delay: 0.5 },
    { id: 3, x: '20%', y: '80%', size: 'w-3 h-3', color: 'bg-navy-blue/20', delay: 1 },
    { id: 4, x: '75%', y: '70%', size: 'w-5 h-5', color: 'bg-maroon-red/20', delay: 1.5 },
    { id: 5, x: '50%', y: '10%', size: 'w-2 h-2', color: 'bg-accent/30', delay: 2 },
    { id: 6, x: '15%', y: '60%', size: 'w-4 h-4', color: 'bg-fox-light/20', delay: 2.5 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element) => (
        <motion.div
          key={element.id}
          className={`absolute ${element.size} ${element.color} rounded-full`}
          style={{
            left: element.x,
            top: element.y,
          }}
          animate={{
            y: [0, -20, 0],
            opacity: [0.3, 0.7, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 4,
            delay: element.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
