'use client'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const Header = () => {
  const [toggled, setToggled] = useState(false)
  const linkStyle = 'text-xl leading-6 font-jost text-black md:text-white'

  return (
    <header className='relative w-full xl:px-0 m-auto py-5 flex justify-between md:justify-around items-center md:shadow-md'>
      <img src='/header.jfif' alt='Logo' className='w-full h-full absolute top-0  z-[-1]' />
      <a href='/' className='pl-10 md:pl-0 flex flex-col gap-3'>
        <img src='/logo.png' alt='Logo' className='w-24 h-32' />
        <span className='text-blue-600 text-lg font-semibold font-jost'>Venta de productos de limpieza profesional</span>
      </a>

      <nav className='hidden flex-row gap-6 md:flex'>
        <a href='/' className={linkStyle}>
          Inicio
        </a>
        <a href='/nosotros' className={linkStyle}>
          Nosotros
        </a>
        <a href='/contacto' className={linkStyle}>
          Contacto
        </a>
        <a href='/admin' className={linkStyle}>
          Admin
        </a>
      </nav>

      <button
        onClick={() => setToggled(!toggled)}
        className='space-y-1 cursor-pointer block md:hidden pr-10 md:pr-0'
      >
        <motion.span
          animate={{ rotateZ: toggled ? 45 : 0, y: toggled ? 8 : 0 }}
          className='block h-0.5 w-8 bg-white'
        />
        <motion.span
          animate={{ width: toggled ? 0 : 24 }}
          className='block h-0.5 w-6 bg-white'
        />
        <motion.span
          animate={{
            rotateZ: toggled ? -45 : 0,
            y: toggled ? -8 : 0,
            width: toggled ? 32 : 16
          }}
          className='block h-0.5 w-4 bg-white'
        />
      </button>

      {toggled && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex flex-col fixed h-screen bg-white w-[75%] md:w-[90%] text-black bottom-0 left-0 gap-6 items-center justify-center z-50 md:hidden'
        >
          <a href='/' className={linkStyle}>
            Inicio
          </a>
          <a href='/nosotros' className={linkStyle}>
            Nosotros
          </a>
          <a href='/contacto' className={linkStyle}>
            Contacto
          </a>
          <a href='/admin' className={linkStyle}>
            Admin
          </a>
        </motion.nav>
      )}
    </header>
  )
}
