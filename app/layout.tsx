import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Satellite Command - Cross-Modal Image Retrieval',
  description: 'AI-powered satellite image retrieval platform for the Bharatiya Antariksh Hackathon 2026',
  generator: 'Next.js',
  
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full font-sans antialiased">
        {children}
      </body>
    </html>
  )
}
