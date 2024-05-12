'use client'

import { Product } from '@/consts/types'
import { useCartContext } from '@/context/cart-context'
import { useEffect, useState } from 'react'

interface ProductProps {
  product: Product
}

export const Card = ({ product }: ProductProps) => {
  const id = product.id
  const { cart, setCart } = useCartContext()
  const [exist, setExist] = useState(false)
  const [units, setUnits] = useState(1)

  const addToCart = () => {
    localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStorage.getItem('cart') || '[]'), { id, units }]))
    setCart(!cart)
    setExist(true)
  }
  const removeFromCart = () => {
    localStorage.setItem('cart', JSON.stringify(JSON.parse(localStorage.getItem('cart') || '[]').filter((item: Product) => item.id !== product.id)))
    setCart(!cart)
    setExist(false)
  }

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    if (cart.some((item: Product) => item.id === product.id)) {
      setCart(!cart)
      setExist(true)
    } else {
      setCart(!cart)
      setExist(false)
    }
  }, [product.id, cart, setCart])

  return (
    <div className='bg-white shadow-md rounded-md w-64 overflow-hidden'>
      <img src={product.image} width={256} height={256} alt={product.name} className='w-64 h-64 object-cover' />
      <div className='px-5'>
        <h3 className='text-xl font-jost font-bold mt-4'>{product.name}</h3>
        <p className='text-primary-200 mt-2'>${product.price}</p>
        <p className='text-primary-300 mt-2 mb-4'>{product.description}</p>
      </div>
      {
        exist
          ? <button onClick={removeFromCart} className='w-full bg-red-200 text-white py-2'>Eliminar del carrito</button>
          : (
            <div className='flex'>
              <button onClick={addToCart} className='w-full bg-orange-200 text-white py-2'>Añadir al carrito</button>
              <div className='flex'>
                <button disabled={units <= 1} onClick={() => setUnits(units - 1)} className=' bg-slate-600 text-white py-2 w-10'>-</button>
                <span className='w-10 flex justify-center items-center  bg-gray-100 text-black py-2'>{units}</span>
                <button onClick={() => setUnits(units + 1)} className='w-10 bg-slate-600 text-white py-2'>+</button>
              </div>
            </div>
            )
      }
    </div>
  )
}
