import React from 'react'
import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex items-center space-x-3">
      {/* Logo Icon */}
      <div className="relative w-12 h-12">
        <Image
          src="/foxtrot-logo.png"
          alt="10C4I Foxtrot Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      
      {/* Text */}
      <div className="flex flex-col">
        <span className="text-accent font-bold text-lg leading-none">10C4I</span>
        <span className="text-accent font-bold text-xl leading-none">FOXTROT</span>
      </div>
    </div>
  )
}
