import type { Metadata } from 'next'
// import localFont from 'next/font/local'
import '@/styles/globals.css'

// const geistSans = localFont({
//   src: '../styles/fonts/GeistVF.woff',
//   variable: '--font-geist-sans',
//   weight: '100 900',
// })
// const geistMono = localFont({
//   src: '../styles/fonts/GeistMonoVF.woff',
//   variable: '--font-geist-mono',
//   weight: '100 900',
// })

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
        <meta property="og:title" content="내 사랑 긍휼 유형을 확인하세요!" />
        <meta property="og:description" content="Love & Compassion" />
        <meta
          property="og:image"
          content="https://sungrak.vercel.app/images/mbti_thumbnail.jpeg"
        />
      </head>

      <body
        className={
          // ${geistSans.variable} ${geistMono.variable}
          `antialiased`
        }
      >
        {children}
      </body>
    </html>
  )
}
