'use client'
import { useState } from 'react'
import { CreateProduct } from './components/create-product'
import { Header } from './components/header'
import { Products } from './components/products'

export default function Admin () {
  const [isOpen, setIsOpen] = useState('products')
  return (
    <div>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen === 'create-product' && <CreateProduct />}
      {isOpen === 'products' && <Products />}
    </div>
  )
}
