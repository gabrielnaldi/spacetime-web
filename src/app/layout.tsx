import './globals.css'
import { Roboto_Flex, Bai_Jamjuree } from 'next/font/google'
import { type ReactNode } from 'react'

const roboto = Roboto_Flex({ subsets: ['latin'], variable: '--font-roboto' })
const baiJamjuee = Bai_Jamjuree({
  subsets: ['latin'],
  weight: ['700'],
  variable: '--font-bai-jamjuree',
})

export default function RootLayout({
  children,
}: {
  children: ReactNode
}): JSX.Element {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baiJamjuee.variable} font-roboto`}>
        {children}
      </body>
    </html>
  )
}
