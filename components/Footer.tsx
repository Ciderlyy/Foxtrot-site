import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="bg-secondary/20 border-t border-accent/20">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <div className="flex items-center space-x-3 mb-4">
                             {/* Logo Icon */}
               <div className="relative w-8 h-8">
                 <Image
                   src="/foxtrot-logo.png"
                   alt="10C4I Foxtrot Logo"
                   fill
                   className="object-contain"
                 />
               </div>
              
              {/* Text */}
              <div className="flex flex-col">
                <span className="text-accent font-bold text-lg leading-none">10C4I</span>
                <span className="text-accent font-bold text-xl leading-none">FOXTROT</span>
              </div>
            </div>
            <div className="flex space-x-4">
              <Link 
                href="https://x.com/10c4ifoxtrot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </Link>
              <Link 
                href="https://github.com/10c4ifoxtrot" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-accent transition-colors"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </Link>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Navigation</h4>
            <div className="space-y-2">
              <Link 
                href="/" 
                className="block text-text-secondary hover:text-accent transition-colors"
              >
                Home
              </Link>
              <Link 
                href="/resources" 
                className="block text-text-secondary hover:text-accent transition-colors"
              >
                Resources
              </Link>
              <Link 
                href="/tools" 
                className="block text-text-secondary hover:text-accent transition-colors"
              >
                Tools
              </Link>
              <Link 
                href="/about" 
                className="block text-text-secondary hover:text-accent transition-colors"
              >
                About
              </Link>
              <Link 
                href="/contact" 
                className="block text-text-secondary hover:text-accent transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Legal</h4>
            <p className="text-sm text-text-secondary leading-relaxed">
              Copyright © 2024 - 2025 10C4I Foxtrot. All rights reserved.
            </p>
            <p className="text-sm text-text-secondary leading-relaxed mt-4">
              10C4I Foxtrot is a leading digital innovation company specializing in comprehensive technology solutions and digital ecosystem management. This megasite serves as the central hub for all our digital resources and tools.
            </p>
          </div>

          {/* Credits */}
          <div>
            <h4 className="text-lg font-semibold text-text mb-4">Credits</h4>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-text-secondary">
                  <span className="text-accent font-medium">Website Created By:</span>
                </p>
                <p className="text-lg font-bold text-accent">3SG KOH JER MING</p>
                <p className="text-xs text-text-secondary mt-1">
                  Full-Stack Developer & Military Automation Specialist
                </p>
                <p className="text-xs text-accent mt-1">
                  @Ciderlyy on GitHub
                </p>
              </div>
              <div className="pt-2">
                <p className="text-xs text-text-secondary">
                  Built with Next.js, React, TypeScript & Tailwind CSS
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Featuring Framer Motion animations
                </p>
                <p className="text-xs text-text-secondary mt-1">
                  Specializing in Military Automation & Web Development
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Credits Bar */}
        <div className="border-t border-accent/20 mt-8 pt-6">
          <div className="container-max">
            <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left">
              <div className="text-sm text-text-secondary mb-2 md:mb-0">
                <span>Website proudly created by </span>
                <span className="text-accent font-semibold">3SG KOH JER MING</span>
                <span> - Military Automation Specialist & Developer</span>
              </div>
              <div className="text-xs text-text-secondary">
                <span>GitHub: @Ciderlyy | Built with modern web technologies</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
