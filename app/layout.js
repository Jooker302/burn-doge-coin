import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Burn Doge Coin',
  description: 'Burn Doge Coin by DxSale',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href='main.jpeg'></link>
      </head>
      <body>{children}</body>
    </html>
  )
}
