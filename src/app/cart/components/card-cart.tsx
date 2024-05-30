/* eslint-disable @next/next/no-img-element */
import { Product } from '@/consts/types'
import { useCartContext } from '@/context/cart-context'
import { useEffect, useState } from 'react'

export const CardCart = ({ product, setReFetch, setTotal, setAllProducts }: {product: Product, setReFetch: any, setTotal: any, setAllProducts: any }) => {
  const { setCart } = useCartContext()
  const [counter, setCounter] = useState(1)

  const handleDelete = () => {
    const cart = JSON.parse(localStorage.getItem('cart') || '[]')
    const newCart = cart.filter((item: any) => item.id !== product.id)
    localStorage.setItem('cart', JSON.stringify(newCart))
    setReFetch((prev: boolean) => !prev)
    setCart(newCart)
    setTotal((prev: number) => prev - ((product.discountPrice ? (product.discountPrice * counter) : (product.price * counter))))
  }

  const handleCounter = (inc: string) => {
    if (inc === 'inc') {
      setCounter((prev: number) => ++prev)
      setTotal((prev: number) => prev + (product.discountPrice ? product.discountPrice : product.price))
    } else {
      if (counter === 1) return
      setCounter((prev: number) => --prev)
      setTotal((prev: number) => prev - (product.discountPrice ? product.discountPrice : product.price))
    }
  }

  useEffect(() => {
    if (product.discountPrice) {
      setTotal((prev: number) => prev + (product.discountPrice * counter))
    } else {
      setTotal((prev: number) => prev + (product.price * counter))
    }
  }, [])

  useEffect(() => {
    setAllProducts((prev: any) => {
      if (prev.some((item: any) => item.id === product.id)) {
        const newProducts = prev.map((item: any) => {
          if (item.id === product.id) {
            return {
              ...item,
              quantity: counter
            }
          }
          return item
        })
        return newProducts
      }
      const newProduct = {
        id: product.id,
        title: product.title,
        image: product.image.url,
        description: product.description,
        price: product.price,
        discountPrice: product.discountPrice,
        reference: product.reference,
        quantity: counter
      }
      return [...prev, newProduct]
    })
  }, [counter])
  return (
    <div key={product.title} className='rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6'>
      <div className='space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0'>
        <img className='h-20 w-20' src={product.image.url} alt={product.title} />
        <label htmlFor='counter-input' className='sr-only'>Elige cantidad:</label>
        <div className='flex items-center justify-between md:order-3 md:justify-end'>
          <div className='flex items-center'>
            <button onClick={() => handleCounter('')} type='button' className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100'>
              <svg className='h-2.5 w-2.5 text-gray-900' fill='none' viewBox='0 0 18 2'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 1h16' />
              </svg>
            </button>
            <span className='text-base font-bold text-gray-900 px-5'>{counter}</span>
            <button onClick={() => handleCounter('inc')} type='button' className='inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-100'>
              <svg className='h-2.5 w-2.5 text-gray-900' aria-hidden='true' fill='none' viewBox='0 0 18 18'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M9 1v16M1 9h16' />
              </svg>
            </button>
          </div>
          <div className='text-end md:order-4 md:w-32'>
            <p className='text-base font-bold text-gray-900'>
              {product.discountPrice ? `${(product.discountPrice * counter).toFixed(2)}€` : `${(product.price * counter).toFixed(2)}€`}
            </p>
          </div>
        </div>
        <div className='w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md'>
          {product.title}
          <div className='flex items-center gap-4'>
            <button onClick={handleDelete} type='button' className='inline-flex items-center text-sm font-medium text-red-600 hover:underline'>
              <svg className='me-1.5 h-5 w-5' aria-hidden='true' width='24' height='24' fill='none' viewBox='0 0 24 24'>
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M6 18 17.94 6M18 18 6.06 6' />
              </svg>
              Eliminar
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
