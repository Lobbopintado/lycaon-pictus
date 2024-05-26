/* eslint-disable @next/next/no-img-element */
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
  const { category } = useCategoryContext()

  const addToCart = () => {
    localStorage.setItem('cart', JSON.stringify([...JSON.parse(localStorage.getItem('cart') || '[]'), { id }]))
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
    <div className='bg-white shadow-md rounded-md w-40 overflow-hidden flex flex-col justify-between'>
      <Link href={`productos/${id}`} className='h-full flex flex-col justify-between'>
        <img src={product.image.url} width={160} height={160} alt={product.image.name} className='size-40 object-cover' />
        <div className='px-3 flex h-28 justify-between flex-col'>
          <div className='flex gap-2'>
            {product.discountPrice > 0 && <p className='text-gray-500 font-bold'>{product.discountPrice}€</p>}
            <p className={`text-gray-500 ${product.discountPrice && 'line-through'}`}>{product.price}€</p>
          </div>
          <h2 className='font-bold'>{product.title} {product.ml}ml</h2>
          <p>
            {'⭐'.repeat(product.stars)}
          </p>
        </div>
      </Link>
      {
        exist
          ? <button onClick={removeFromCart} className='w-full text-black py-2'>Eliminar del carrito</button>
          : (
            <div className='flex flex-col'>
              <button onClick={addToCart} className='w-full bg-orange-200 text-white py-2'>Añadir al carrito</button>
            </div>
            )
      }
    </div>
  )
}
