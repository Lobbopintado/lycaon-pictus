'use client'
/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function Cancel () {
  const router = useRouter()
  useEffect(() => {
    localStorage.removeItem('sale')
    localStorage.removeItem('client')
    setTimeout(() => {
      router.push('/')
    }, 3000)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <section className='flex justify-center items-center mt-10 p-5'>
      <div className='flex flex-col bg-white rounded-md shadow-md p-5 items-center'>
        <h1 className='text-xl font-bold text-red-700'>El pago ha sido rechazado</h1>
        <p>Por favor no salga de esta pantalla hasta que sea redirigido</p>
      </div>
    </section>
  )
}
