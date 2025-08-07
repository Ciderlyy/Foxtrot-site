import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '10C4I Foxtrot - Digital Hub',
  description: 'Central hub for all 10C4I Foxtrot digital resources, tools, and company information.',
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
