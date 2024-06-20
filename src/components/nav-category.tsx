/* eslint-disable @next/next/no-img-element */
'use client'
import { CATEGORY } from '@/consts/consts'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

export const NavCategory = () => {
  const [toggled, setToggled] = useState(false)
  const pathname = usePathname()
  return (
    <>
      <ul className='hidden p-5 flex-wrap gap-1 justify-between w-screen md:w-2/3 md:flex'>
        <img src='/danger.png' alt='Señal de peligro' className='size-10' />
        {
        CATEGORY.map((cat) => (
          <li key={cat.name} className='p-2'>
            <Link href={`/categoria/${cat.slug}`} className={`text-xl leading-6 font-jost text-primary-200 ${cat.slug === pathname && 'border-b-4 border-solid border-black'}`}>
              {cat.name}
            </Link>
          </li>
        ))
      }
        <img src='/spain.png' alt='bandera de españa' className='h-8 w-10' />
      </ul>
      <div className='flex md:hidden justify-center gap-5 items-center px-14 w-full'>
        <img src='/danger.png' alt='Señal de peligro' className='size-10' />
        <button
          onClick={() => setToggled(!toggled)}
          className='flex justify-center items-center gap-2 cursor-pointer p-5 text-right w-full text-blue-500 font-semibold'
        >
          <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='font-bold'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 6l16 0' /><path d='M4 12l16 0' /><path d='M4 18l16 0' /></svg>
          Categorías
        </button>
        <img src='/spain.png' alt='bandera de españa' className='h-8 w-10' />
      </div>

      {toggled && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex flex-col fixed h-screen bg-white w-screen text-black bottom-0 left-0 gap-6 items-center justify-center z-50 md:hidden list-none'
        >
          <button className='absolute top-16 right-5 font-bold' onClick={() => setToggled(!toggled)}>
            <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='text-bold size-8'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 6l-12 12' /><path d='M6 6l12 12' /></svg>
          </button>
          {
            CATEGORY.map((cat) => (
              <li key={cat.name} className='p-2'>
                <Link
                  href={`/categoria/${cat.slug}`}
                  className={`text-xl font-jost list-none ${cat.slug === pathname && 'border-b-4 border-solid border-black'}`}
                >
                  {cat.name}
                </Link>
              </li>
            ))
          }
        </motion.nav>
      )}
    </>
  )
}
