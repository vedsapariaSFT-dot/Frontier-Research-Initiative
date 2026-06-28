import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Science For Tomorrow - Inspiring Scientific Discovery',
  description: 'Investing in humanity\'s future through science. Discover groundbreaking research, explore scientific fields, and support organizations advancing human knowledge.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-navy-950 text-white overflow-x-hidden`}>
        {children}
      </body>
    </html>
  )
}
