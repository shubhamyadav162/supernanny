import '@/styles/globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'

export const metadata: Metadata = {
  title: 'SuperNanny - Your Child\'s Care Superheroes',
  description: 'Providing quality, trustworthy childcare that empowers parents and nurtures children',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className="min-h-screen hero-gradient">
        <Header />
        <div className="max-w-[1440px] mx-auto">
          {children}
        </div>
      </body>
    </html>
  )
} 