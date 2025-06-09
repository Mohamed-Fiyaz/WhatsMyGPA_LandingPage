import type { Metadata } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

// Load fonts with proper configuration
const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap'
})

const nunito = Nunito({ 
  subsets: ['latin'], 
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900'] // Added bolder weights
})

export const metadata: Metadata = {
  title: "What's My GPA? - GPA Calculator for SRM IST Students",
  description: "Simple and accurate GPA calculator designed specifically for SRM IST students. Calculate SGPA and CGPA with preloaded subjects and credits.",
  keywords: "GPA calculator, SGPA, CGPA, SRM IST, student tools, grade calculator",
  authors: [{ name: "What's My GPA Team" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "What's My GPA? - GPA Calculator for SRM IST Students",
    description: "Simple and accurate GPA calculator designed specifically for SRM IST students.",
    type: "website",
    locale: "en_US",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable} ${nunito.variable}`}>
      <body className="font-inter antialiased">
        {children}
      </body>
    </html>
  )
}