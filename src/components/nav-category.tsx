'use client'
import { CATEGORY } from '@/consts/consts'
import { Category } from '@/consts/types'
import { useCategoryContext } from '@/context/category-context'
import { motion } from 'framer-motion'
import { useState } from 'react'

export const NavCategory = () => {
  const [toggled, setToggled] = useState(false)
  const { setCategory, category } = useCategoryContext()
  function capitalize (text: string) {
    const firstLetter = text.charAt(0)
    const rest = text.slice(1)
    return firstLetter.toUpperCase() + rest
  }

  return (
    <>
      <ul className='hidden p-5 flex-wrap gap-1 justify-between w-screen md:w-2/3 md:flex'>
        {
        CATEGORY.map((cat) => (
          <li key={cat} className='p-2'>
            <button onClick={() => setCategory(cat as Category)} className={`text-xl leading-6 font-jost text-primary-200 ${cat === category && 'border-b-4 border-solid border-black'}`}>
              {capitalize(cat)}
            </button>
          </li>
        ))
      }
      </ul>
      <div className='flex md:hidden justify-end w-full'>
        <button
          onClick={() => setToggled(!toggled)}
          className='flex justify-center items-center gap-2 cursor-pointer p-5 text-right w-full text-blue-500 font-semibold'
        >
          <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='font-bold'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 6l16 0' /><path d='M4 12l16 0' /><path d='M4 18l16 0' /></svg>
          Categorías
        </button>
      </div>

      {toggled && (
        <motion.nav
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          className='flex flex-col fixed h-screen bg-white w-screen text-black bottom-0 left-0 gap-6 items-center justify-center z-50 md:hidden list-none'
        >
          <button className='absolute top-5 right-5 font-bold' onClick={() => setToggled(!toggled)}>
            <svg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' className='text-bold size-8'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M18 6l-12 12' /><path d='M6 6l12 12' /></svg>
          </button>
          {
            CATEGORY.map((cat) => (
              <li key={cat} className='p-2'>
                <button
                  onClick={() => {
                    setCategory(cat as Category)
                    setToggled(false)
                  }}
                  className={`text-xl font-jost list-none ${cat === category && 'border-b-4 border-solid border-black'}`}
                >
                  {capitalize(cat)}
                </button>
              </li>
            ))
          }
        </motion.nav>
      )}
    </>
  )
}
