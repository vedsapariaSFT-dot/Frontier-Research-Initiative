import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Science For Tomorrow',
  description: 'Investing in Humanity\'s Future Through Scientific Discovery',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
