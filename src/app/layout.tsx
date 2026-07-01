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
      <head>
        <style>{`
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          html, body {
            width: 100%;
            height: 100%;
          }
          body {
            font-family: system-ui, -apple-system, sans-serif;
          }
        `}</style>
      </head>
      <body>{children}</body>
    </html>
  )
}
