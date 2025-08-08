import type { Metadata, Viewport } from 'next'
import { Inter, Nunito } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
  weight: ['400', '600', '700', '800', '900']
})

// ✅ Metadata with iTunes app meta tag added
export const metadata: Metadata = {
  title: "What's My GPA? - GPA Calculator for SRM IST Students",
  description: "Simple and accurate GPA calculator designed specifically for SRM IST students. Calculate SGPA and CGPA with preloaded subjects and credits.",
  keywords: "GPA calculator, SGPA, CGPA, SRM IST, student tools, grade calculator",
  authors: [{ name: "What's My GPA Team" }],
  robots: "index, follow",
  openGraph: {
    title: "What's My GPA? - GPA Calculator for SRM IST Students",
    description: "Simple and accurate GPA calculator designed specifically for SRM IST students.",
    type: "website",
    locale: "en_US",
  },
  other: {
    'apple-itunes-app': 'app-id=6747209109'
  }
}

// ✅ Move viewport into its own export
export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
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