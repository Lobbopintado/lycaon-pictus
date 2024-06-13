/* eslint-disable @next/next/no-img-element */
'use client'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { useSetSale } from '../success/hooks/use-set-sale'
import { CardCart } from './components/card-cart'
import { CashOnDelivery } from './components/cash-on-delivery'
import { Transfer } from './components/transfer'
import { useGetProductsOfCart } from './hooks/use-get-products-of-cart'

export default function Cart () {
  const { products, setReFetch } = useGetProductsOfCart()
  const [total, setTotal] = useState(0)
  const [email, setEmail] = useState('')
  const [transfer, setTransfer] = useState(false)
  const { setSale } = useSetSale()
  const [cashOnDelivery, setCashOnDelivery] = useState(false)
  const [ivaOfTotal, setIvaOfTotal] = useState(0)
  const [allProducts, setAllProducts] = useState([] as any)
  const formRef = useRef(null)
  const router = useRouter()

  useEffect(() => {
    setIvaOfTotal(total - (total / 1.21))
  }, [total])

  const handleClick = async (method: string) => {
    if (!formRef.current) return
    const formData = new FormData(formRef.current)
    const client = Object.fromEntries(formData.entries())
    if (!client.email) {
      toast.error('Por favor, rellene el campo email')
      return
    } else if (!client.name) {
      toast.error('Por favor, rellene el campo nombre')
      return
    } else if (!client.address) {
      toast.error('Por favor, rellene el campo dirección')
      return
    } else if (!client.cp) {
      toast.error('Por favor, rellene el campo código postal')
      return
    } else if (!client.population) {
      toast.error('Por favor, rellene el campo población')
      return
    } else if (!client.city) {
      toast.error('Por favor, rellene el campo provincia')
      return
    } else if (!client.phone) {
      toast.error('Por favor, rellene el campo teléfono')
      return
    } else if (client.phone.toString().length < 9) {
      toast.error('Por favor, rellene un teléfono válido')
      return
    } else if (client.cp.toString().length < 5) {
      toast.error('Por favor, rellene un código postal válido')
      return
    }

    if (method === 'card') {
      const response = await fetch('/api/checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ products: allProducts, email: client.email })
      })
      const { url } = await response.json()
      if (url) {
        localStorage.setItem('sale', JSON.stringify(allProducts))
        localStorage.setItem('client', JSON.stringify(client))
        localStorage.setItem('total', JSON.stringify(total))
        router.push(url)
      }
    }
    if (method === 'transfer') {
      if (!allProducts) return
      const params = {
        user_id: 'CFTvURdi9kuOO_Odu',
        service_id: 'service_hwvz4ni',
        template_id: 'template_9vsenag',
        template_params: {
          name: client.name,
          total: total.toFixed(2),
          products: allProducts.map((product: any) => `${product.title} - ${product.price}€`).join(', '),
          email
        }
      }
      const headers = {
        'Content-type': 'application/json'
      }
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(params)
      }

      fetch('https://api.emailjs.com/api/v1.0/email/send', options)
        .then((response) => {
          if (response.ok) {
            toast.success('Email enviado correctamente')
            setSale(allProducts, client as any, String(total), 'Transferencia')
            localStorage.removeItem('cart')
            setTransfer(true)
            setTimeout(() => {
              router.push('/')
            }, 5000)
          } else {
            return response.text().then((text) => Promise.reject(text))
          }
        })
        .catch(() => {
          toast.error('Ha ocurrido un error')
        })
    }
    if (method === 'cashOnDelivery') {
      if (!allProducts) return
      const params = {
        user_id: 'CFTvURdi9kuOO_Odu',
        service_id: 'service_hwvz4ni',
        template_id: 'template_72l610o',
        template_params: {
          name: client.name,
          total: total.toFixed(2),
          products: allProducts.map((product: any) => `${product.title} - ${product.price}€`).join(', '),
          email
        }
      }
      const headers = {
        'Content-type': 'application/json'
      }
      const options = {
        method: 'POST',
        headers,
        body: JSON.stringify(params)
      }

      fetch('https://api.emailjs.com/api/v1.0/email/send', options)
        .then((response) => {
          if (response.ok) {
            toast.success('Email enviado correctamente')
            setSale(allProducts, client as any, String(total), 'Transferencia')
            localStorage.removeItem('cart')
            setTransfer(true)
            setTimeout(() => {
              router.push('/')
            }, 5000)
          } else {
            return response.text().then((text) => Promise.reject(text))
          }
        })
        .catch(() => {
          toast.error('Ha ocurrido un error')
        })
      setSale(allProducts, client as any, String(total), 'Contrareembolso')
      setCashOnDelivery(true)
      localStorage.removeItem('cart')
      setTimeout(() => {
        router.push('/')
      }, 5000)
    }
  }

  return (
    <section className='py-8 md:py-16 flex flex-col md:flex-row px-10 w-full gap-10 justify-start items-start'>
      <Transfer email={email} transfer={transfer} />
      <CashOnDelivery cashOnDelivery={cashOnDelivery} />
      <form ref={formRef} className='flex flex-col gap-5 p-5 justify-center items-center border md:border-solid border-gray-200 md:shadow-lg md:w-1/2 w-full border-none rounded-md'>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='name' className='w-full text-lg font-bold'>
            Nombre completo o razón social
            <input type='text' id='name' name='name' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
        </div>
        <label htmlFor='email' className='w-full text-lg font-bold'>
          Email
          <input onChange={(e) => setEmail(e.target.value)} type='email' id='email' name='email' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </label>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='address' className='w-full text-lg font-bold'>
            Dirección
            <input type='text' id='address' name='address' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
          <label htmlFor='cp' className='w-full text-lg font-bold'>
            Código Postal
            <input type='number' name='cp' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
        </div>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='population' className='w-full text-lg font-bold'>
            Población
            <input type='text' name='population' id='population' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
          <label htmlFor='city' className='w-full text-lg font-bold'>
            Provincia
            <input type='text' id='city' name='city' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
        </div>
        <label htmlFor='phone' className='w-full text-lg font-bold'>
          Teléfono
          <input type='number' name='phone' id='phone' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
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
                    <dt className='text-base font-normal text-gray-500'>Envío
                    </dt>
                    <dd className='text-base font-bold text-gray-900'>Gratis</dd>
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
              <div className='flex flex-col gap-5 items-center w-full'>
                <button onClick={() => handleClick('card')} className='flex w-full md:w-1/2 items-center justify-center rounded-lg bg-green-500 px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 hover:bg-green-700'>Pagar por tarjeta o PayPal</button>
                <button onClick={() => handleClick('transfer')} className='flex w-full md:w-1/2 items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 hover:bg-blue-700'>Pagar por transferencia o Bizum</button>
                <button onClick={() => handleClick('cashOnDelivery')} className='flex w-full md:w-1/2 items-center justify-center rounded-lg bg-blue-500 px-5 py-2.5 text-sm font-medium text-white focus:outline-none focus:ring-4 focus:ring-primary-300 hover:bg-blue-700'>Pagar por contrareembolso</button>
              </div>
              <div className='flex items-center justify-center gap-2'>
                <span className='text-sm font-normal text-gray-500'> o </span>
                <a href='/' title='' className='inline-flex items-center gap-2 text-sm font-medium text-primary-700 underline hover:no-underline'>
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
