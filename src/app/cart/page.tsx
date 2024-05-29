/* eslint-disable @next/next/no-img-element */
'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { CardCart } from './components/card-cart'
import { useGetProductsOfCart } from './hooks/use-get-products-of-cart'

export default function Cart () {
  const { products, setReFetch } = useGetProductsOfCart()
  const [total, setTotal] = useState(0)
  const [ivaOfTotal, setIvaOfTotal] = useState(0)
  const [allProducts, setAllProducts] = useState([])
  const router = useRouter()

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
    const { url } = await response.json()
    if (url) {
      localStorage.setItem('buy', JSON.stringify(allProducts))
      router.push(url)
    }
  }

  return (
    <section className='py-8 md:py-16 flex flex-col md:flex-row px-10 w-screen gap-10 justify-start items-start'>
      <form className='flex flex-col gap-5 p-5 justify-center items-center border md:border-solid border-gray-200 md:shadow-lg md:w-1/2 w-full border-none rounded-md'>
        <label htmlFor='name' className='w-full text-lg font-bold'>
          Nombre Completo
          <input type='text' id='name' name='name' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </label>
        <label htmlFor='email' className='w-full text-lg font-bold'>
          Email
          <input type='email' id='email' name='email' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </label>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='reference' className='w-full text-lg font-bold'>
            Dirección
            <input type='text' name='address' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
          <label htmlFor='stock' className='w-full text-lg font-bold'>
            Código Postal
            <input type='number' name='stock' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
        </div>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='reference' className='w-full text-lg font-bold'>
            Población
            <input type='text' name='reference' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
          <label htmlFor='stock' className='w-full text-lg font-bold'>
            Provincia
            <input type='text' name='city' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
        </div>
        <label htmlFor='ml' className='w-full text-lg font-bold'>
          Teléfono
          <input type='number' name='ml' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </label>
      </form>
      <div className='w-full md:w-1/2'>
        <div className='md:gap-6 lg:items-start xl:gap-8 flex flex-col'>
          <div className='mx-auto w-full flex-none lg:max-w-2xl xl:max-w-4xl'>
            <section className='space-y-6'>
              {
                products?.map((product) => (
                  <CardCart key={product.id} product={product} setReFetch={setReFetch} setTotal={setTotal} setAllProducts={setAllProducts} />
                ))
              }
            </section>
          </div>
          <div className='w-full mt-5 flex-1 space-y-6 lg:mt-0 lg:w-full'>
            <div className='rounded-lg border border-gray-200 bg-white p-5 shadow-sm w-full flex flex-col gap-3'>
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
