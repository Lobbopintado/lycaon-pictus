'use client'
import { useState } from 'react'
import { CreateProduct } from './components/create-product'
import { Header } from './components/header'
import { Products } from './components/products'
import { Sales } from './components/sales'

export default function Admin () {
  const [isOpen, setIsOpen] = useState('products')

  if (prompt('Introduce la contraseña') !== 'lobbopintado') {
    return null
  }
  return (
    <div>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen === 'create-product' && <CreateProduct />}
      {isOpen === 'products' && <Products />}
      {isOpen === 'sales' && <Sales />}
    </div>
  )
}
