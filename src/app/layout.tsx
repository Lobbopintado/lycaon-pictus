import { CartButton } from '@/components/cart/cart-button'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'
import { WhatsappButton } from '@/components/whatsapp-button'
import { CartProvider } from '@/context/cart-context'
import { CategoryProvider } from '@/context/category-context'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='es'>
      <CategoryProvider>
        <body className={inter.className}>
          <div className='fixed top-0 -z-10 h-full w-full bg-white'><div className='absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(173,109,244,0.5)] opacity-50 blur-[80px]' /></div>
          <WhatsappButton />
          <Header />
          <CartProvider>
            <CartButton />
            <div className='min-h-screen'>
              {children}
            </div>
          </CartProvider>
          <Footer />
        </body>
      </CategoryProvider>
    </html>
  )
}
