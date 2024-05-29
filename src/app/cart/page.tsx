/* eslint-disable @next/next/no-img-element */
'use client'
import { useEffect, useState } from 'react'
import { CardCart } from './components/card-cart'
import { useGetProductsOfCart } from './hooks/use-get-products-of-cart'

export default function Cart () {
  const { products, setReFetch } = useGetProductsOfCart()
  const [total, setTotal] = useState(0)
  const [ivaOfTotal, setIvaOfTotal] = useState(0)
  const [allProducts, setAllProducts] = useState([])
  console.log(allProducts)

  useEffect(() => {
    setIvaOfTotal(total - (total / 1.21))
    const query = new URLSearchParams(window.location.search)
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.')
    }

    if (query.get('canceled')) {
      console.log('Order canceled -- continue to shop around and checkout when you’re ready.')
    }
  }, [total])

  const handleClick = async () => {
    const response = await fetch('/api/checkout-session', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ products: allProducts })
    })
    console.log(response)
  }

  return (
    <section className='bg-white py-8 antialiased md:py-16'>
      <div className='mx-auto max-w-screen-xl px-4 2xl:px-0'>
        <h2 className='text-xl font-semibold text-gray-900 sm:text-2xl'>Carrito</h2>
        <div className='mt-6 sm:mt-8 md:gap-6 lg:flex lg:items-start xl:gap-8'>
          <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
            <section className='space-y-6'>
              {
                products?.map((product) => (
                  <CardCart key={product.id} product={product} setReFetch={setReFetch} setTotal={setTotal} setAllProducts={setAllProducts} />
                ))
              }
            </section>
          </div>
          <div className='mx-auto mt-6 max-w-4xl flex-1 space-y-6 lg:mt-0 lg:w-full'>
            <div className='space-y-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm sm:p-6'>
              <p className='text-xl font-semibold text-gray-900'>Resumen del pedido</p>

              <div className='space-y-4'>
                <div className='space-y-2'>
                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='text-base font-normal text-gray-500'>Precio
                    </dt>
                    <dd className='text-base font-medium text-gray-900'>{(total - ivaOfTotal).toFixed(2)}€</dd>
                  </dl>

                  <dl className='flex items-center justify-between gap-4'>
                    <dt className='text-base font-normal text-gray-500'>IVA (21%)</dt>
                    <dd className='text-base font-medium text-gray-900'>{ivaOfTotal.toFixed(2)}€</dd>
                  </dl>
                </div>

                <dl className='flex items-center justify-between gap-4 border-t border-gray-200 pt-2'>
                  <dt className='text-base font-bold text-gray-900'>Total</dt>
                  <dd className='text-base font-bold text-gray-900'>{total.toFixed(2)}€</dd>
                </dl>
              </div>

              <button onClick={handleClick} className='flex w-full items-center justify-center rounded-lg bg-green-400 px-5 py-2.5 text-sm font-medium text-black hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300'>Proceder con el pago</button>
              <div className='flex items-center justify-center gap-2'>
                <span className='text-sm font-normal text-gray-500'> o </span>
                <a href='#' title='' className='inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline'>
                  Continuar comprando
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
