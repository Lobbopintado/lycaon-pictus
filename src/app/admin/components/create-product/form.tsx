'use client'
import { Product } from '@/consts/types'
import React, { useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useCreateProduct } from '../../hooks/use-create-product'

export const CreateProductForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { createProduct } = useCreateProduct()
  const [image, setImage] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    const formData = new FormData(formRef.current)
    const product: Product = {
      title: formData.get('title') as string,
      price: Number(formData.get('price')),
      discountPrice: Number(formData.get('discountPrice')),
      reference: formData.get('reference') as string,
      stock: Number(formData.get('stock')),
      description: formData.get('description') as string,
      image: formData.get('file') as File,
      createdAt: new Date()
    }
    createProduct(product)
  }

  const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = () => {
      setImage(reader.result as string)
    }
  }

  return (
    <div className='flex flex-col items-center'>
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <form className='flex flex-col gap-5 p-5 justify-center items-center border md:border-solid border-gray-200 md:shadow-lg md:w-1/2 w-screen border-none rounded-md' ref={formRef} onSubmit={handleSubmit}>
        <input type='text' name='title' placeholder='Nombre del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        <div className='flex gap-5 w-full'>
          <input type='number' name='price' placeholder='Precio del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          <input type='number' name='discountPrice' placeholder='Precio con descuento' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </div>
        <div className='flex gap-5 w-full'>
          <input type='text' name='reference' placeholder='Referencia' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          <input type='number' name='stock' placeholder='Stock' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </div>
        <div>
          {
            image
              ? (
                <img src={image} alt='preview' className='w-64 h-64 object-cover rounded-md shadow-md' />
                )
              : (
                <label htmlFor='file' className='w-64 h-64 flex justify-center items-center shadow-md rounded-md border-gray-200 border cursor-pointer'>
                  Imagen
                  <input type='file' id='file' name='file' className='hidden' accept='image/*' onChange={previewImage} />
                </label>
                )
          }
        </div>
        <textarea rows={10} name='description' placeholder='Descripción del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        <button type='submit' className='bg-orange-200 rounded-md px-3 py-2  font-bold'>Crear producto</button>
      </form>
    </div>
  )
}
