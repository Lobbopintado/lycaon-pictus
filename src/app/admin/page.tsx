'use client'
import { useState } from 'react'
import { CreateProduct } from './components/create-product'
import { Header } from './components/header'

export default function Admin () {
  const [isOpen, setIsOpen] = useState('')
  return (
    <div>
      <Header setIsOpen={setIsOpen} isOpen={isOpen} />
      {isOpen === 'create-product' && <CreateProduct />}
    </div>
  )
}
