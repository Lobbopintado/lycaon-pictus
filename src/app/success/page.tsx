'use client'
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { SuccessSvg } from './components/success-svg'
import { useSetSale } from './hooks/use-set-sale'

export default function Success () {
  const { setSale } = useSetSale()
  const router = useRouter()
  useEffect(() => {
    const sale = localStorage.getItem('sale')
    const client = localStorage.getItem('client')
    const total = localStorage.getItem('total')
    if (sale && client && total) {
      setSale(JSON.parse(sale), JSON.parse(client), total, 'Tarjeta')
      localStorage.removeItem('sale')
      localStorage.removeItem('client')
      localStorage.removeItem('cart')
      setTimeout(() => {
        router.push('/')
      }, 5000)
    } else {
      toast.error('No se ha podido realizar la compra')
      setTimeout(() => {
        router.push('/')
      }, 2000)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section className='flex justify-center items-center mt-10 p-5'>
      <div className='flex flex-col bg-white rounded-md shadow-md p-5 items-center'>
        <h1 className='text-xl font-bold text-green-700'>El pago se ha realizado con éxito</h1>
        <SuccessSvg />
        <p>Por favor no salga de esta pantalla hasta que sea redirigido</p>
      </div>
    </section>
  )
}
