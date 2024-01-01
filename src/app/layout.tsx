import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Banner from '@/components/Banner'
import { Footer, Header } from '@/components/rootLayout'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ulysse Inside',
  description: 'Coach Crypto & Web3',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        <Banner />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
