import { Product } from '@/consts/types'
import { useCartContext } from '@/context/cart-context'
import { useEffect, useState } from 'react'

export const useGetRemoveCart = (id:string) => {
  const { cart, setCart } = useCartContext()
  const [exist, setExist] = useState(false)
  const addToCart = () => {
    localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStorage.getItem('cart') || '[]'), { id }]))
    setCart(!cart)
    setExist(true)
  }
  const removeFromCart = () => {
    localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.getItem('cart') || '[]').filter((item: Product) => item.id !== id)))
    setCart(!cart)
    setExist(false)
  }
  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    if (cart.some((item: Product) => item.id === id)) {
      setCart(!cart)
      setExist(true)
    } else {
      setCart(!cart)
      setExist(false)
    }
  }, [cart, setCart, id])

  return { addToCart, removeFromCart, exist }
}
