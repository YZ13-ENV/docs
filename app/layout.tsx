import type { Metadata } from 'next'
import './globals.css'
import { Geologica } from 'next/font/google'
const first_font = Geologica({ subsets: ['latin', 'cyrillic'], weight: ['600', '500', '400', '300', '200'], variable: '--root-font' })

export const metadata: Metadata = {
  title: 'DM Docs',
  description: 'Created by DM Family Team',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={first_font.className}>
      <body className='dark'>{children}</body>
    </html>
  )
}
