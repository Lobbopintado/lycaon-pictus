'use client'
import React, { createContext, useContext, useState } from 'react'

const CartContext = createContext(
    {} as {
        cart: boolean
        setCart: React.Dispatch<React.SetStateAction<boolean>>
    }
)
export const useCartContext = () => useContext(CartContext)

interface CartProviderProps {
    children: React.ReactNode
}

export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState(false)

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  )
}
