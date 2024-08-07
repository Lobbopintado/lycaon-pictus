import { CartButton } from '@/components/cart/cart-button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { WhatsappButton } from '@/components/whatsapp-button'
import { CartProvider } from '@/context/cart-context'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import { Toaster } from 'react-hot-toast'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lycaon Pictus',
  description: 'Tienda online de productos de limpieza profesional'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <body className={inter.className}>
        <Toaster
          position='top-center'
          reverseOrder={false}
        />
        <div className='fixed top-0 -z-10 h-full w-full bg-white'><div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]' /></div>
        <WhatsappButton />
        <Header />
        <CartProvider>
          <CartButton />
          <div className='min-h-[403px]'>
            {children}
          </div>
        </CartProvider>
        <Footer />
      </body>
    </html>
  )
}
