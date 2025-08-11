import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '10C4I Foxtrot - Digital Command Center',
  description: 'Comprehensive digital hub for 10C4I Foxtrot company resources, tools, and operational excellence.',
  icons: {
    icon: '/favicon.svg',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-primary text-text`}>
        {children}
      </body>
    </html>
  )
}
