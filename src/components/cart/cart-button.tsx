'use client'
import { useCartContext } from '@/context/cart-context'
import { CartIcon } from '@/svg/cart'
import { useEffect, useState } from 'react'

export const CartButton = () => {
  const { cart } = useCartContext()
  const [cartCount, setCartCount] = useState([])
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    setCartCount(cart)
  }, [cart])

  if (cartCount.length === 0) return null
  return (
    <a href='/cart' className='fixed  bottom-24 right-4 bg-orange-200 rounded-full h-12 w-12 flex items-center justify-center'>
      <CartIcon className='h-6 w-6' />
      <span className='absolute -top-2 -right-2 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center'>
        {cartCount.length}
      </span>
    </a>
  )
}
