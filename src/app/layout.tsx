import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '@/styles/globals.css'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: '성락교회 SUNGRAK CHURCH',
  description: '',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta
          property="og:title"
          content="2024 성락인의 행복한 헌신을 응원하며"
        />
        <meta
          property="og:image"
          content="https://sungrak.vercel.app/images/devotion_thumbnail.jpg"
        />
      </head>

      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
