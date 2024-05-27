/* eslint-disable @next/next/no-img-element */
'use client'
import { useState } from 'react'
import { CardCart } from './components/card-cart'
import { useGetProductsOfCart } from './hooks/use-get-products-of-cart'

export default function Cart () {
  const { products, setReFetch } = useGetProductsOfCart()
  const [total, setTotal] = useState(0)
  const iva = 0.21
  return (
    <section className='bg-white py-8 antialiased md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <h2 className='text-xl font-semibold text-gray-900 sm:text-2xl'>Shopping Cart</h2>
        <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
          <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
            <section className='space-y-6'>
              {
                products?.map((product) => (
                  <CardCart key={product.id} product={product} setReFetch={setReFetch} setTotal={setTotal} />
                ))
              }
            </section>
          </div>
          <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
            <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6'>
              <p className='text-xl font-semibold text-gray-900'>Order summary</p>

              <div className='space-y-4'>
                <div className='space-y-2'>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='text-base font-normal text-gray-500'>Precio
                    </dt>
                    <dd className='text-base font-medium text-gray-900'>{total - (total * iva)}€</dd>
                  </dl>

                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='text-base font-normal text-gray-500'>IVA (21%)</dt>
                    <dd className='text-base font-medium text-gray-900'>{(total - (total / 1.21)).toFixed(2)}€</dd>
                  </dl>
                </div>

                <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2'>
                  <dt className='text-base font-bold text-gray-900'>Total</dt>
                  <dd className='text-base font-bold text-gray-900'>$8,191.00</dd>
                </dl>
              </div>

              <a href='#' className='flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'>Proceed to Checkout</a>

              <div className='flex items-center justify-center gap-2'>
                <span className='text-sm font-normal text-gray-500'> or </span>
                <a href='#' title='' className='inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline'>
                  Continue Shopping
                  <svg className='h-5 w-5' aria-hidden='true' fill='none' viewBox='0 0 24 24'>
                    <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M19 12H5m14 0-4 4m4-4-4-4' />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
