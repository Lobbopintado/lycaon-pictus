'use client'
import { useEffect, useState } from 'react'
import { CreateProduct } from './components/create-product'
import { Header } from './components/header'
import { Products } from './components/products'
import { Sales } from './components/sales'

export default function Admin () {
  const [isOpen, setIsOpen] = useState('products')
  const [password, setPassword] = useState('')
  useEffect(() => {
    setPassword(prompt('Introduce la contraseña') as string)
  }, [])

  if (password !== 'lobbopintado') {
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
