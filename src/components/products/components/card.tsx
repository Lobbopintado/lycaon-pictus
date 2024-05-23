'use client'

import { Product } from '@/consts/types'
import { useCartContext } from '@/context/cart-context'
import { useCategoryContext } from '@/context/category-context'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface ProductProps {
  product: Product
}

export const Card = ({ product }: ProductProps) => {
  const id = product.id
  const { cart, setCart } = useCartContext()
  const [exist, setExist] = useState(false)
  const [units, setUnits] = useState(1)
  const { category } = useCategoryContext()

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

  if (category !== 'todos' && product.category !== category) return null
  return (
    <div className='bg-white shadow-md rounded-md w-64 overflow-hidden flex flex-col justify-between h-[400px]'>
      <Link href={`productos/${id}`} className='h-full flex flex-col justify-between'>
        <img src={product.image.url} width={256} height={256} alt={product.image.name} className='w-64 h-64 object-cover' />
        <div className='px-3 flex items-start gap-3'>
          <h2 className='font-bold px-3'>{product.title} {product.ml}ml</h2>
          <div>
            {product.discountPrice > 0 && <p className='text-gray-500 font-bold'>{product.discountPrice}€</p>}
            <p className={`text-gray-500 ${product.discountPrice && 'line-through'}`}>{product.price}€</p>
          </div>
        </div>
        <p className='pb-3 px-3'>
          {'⭐'.repeat(product.stars)}
        </p>
      </Link>
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
