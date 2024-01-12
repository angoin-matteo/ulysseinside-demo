import type { Metadata } from 'next'
import type { Locale } from '../../../i18n.config'

import { Inter } from 'next/font/google'
import { Header, Providers } from '@/components/Layout'
import '../globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ulysse Inside',
  description: 'Coach Crypto & Web3',
}

export default function Layout({
  children,
  params: { lang },
}: {
  children: React.ReactNode,
  params: { lang: Locale }
}) {
  return (
    <html lang={lang}>
      <body className={inter.className}>
        <Providers>
          <Header lang={lang} />
          {children}
        </Providers>
      </body>
    </html>
  )
}
