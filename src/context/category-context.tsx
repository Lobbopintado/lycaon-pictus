'use client'
import { Category } from '@/consts/types'
import React, { createContext, useContext, useState } from 'react'

const CategoryContext = createContext({} as { category: Category, setCategory: React.Dispatch<React.SetStateAction<Category>> })

export const useCategoryContext = () => useContext(CategoryContext)

interface CartProviderProps {
    children: React.ReactNode
}

export const CategoryProvider = ({ children }: CartProviderProps) => {
  const [category, setCategory] = useState<Category>('todos')

  return (
    <CategoryContext.Provider value={{ category, setCategory }}>
      {children}
    </CategoryContext.Provider>
  )
}
