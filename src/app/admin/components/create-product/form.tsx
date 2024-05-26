/* eslint-disable @next/next/no-img-element */
'use client'
import { CATEGORY } from '@/consts/consts'
import { Category, createProduct } from '@/consts/types'
import React, { useRef, useState } from 'react'
import { Toaster } from 'react-hot-toast'
import { useCreateProduct } from '../../hooks/use-create-product'

export const CreateProductForm = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const { createProduct } = useCreateProduct()
  const [image, setImage] = useState('')
  const [file, setFile] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    const formData = new FormData(formRef.current)
    const product: createProduct = {
      title: formData.get('title') as string,
      price: Number(formData.get('price')),
      discountPrice: Number(formData.get('discountPrice')),
      reference: formData.get('reference') as string,
      stock: Number(formData.get('stock')),
      description: formData.get('description') as string,
      image: file as File,
      createdAt: new Date(),
      category: formData.get('category') as Category,
      stars: Number(formData.get('stars')),
      ml: Number(formData.get('ml')),
      featured: Number(formData.get('featured'))
    }
    createProduct(product)
  }

  const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    setFile(file)
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
      <form className='flex flex-col gap-5 p-5 justify-center items-center border md:border-solid border-gray-200 md:shadow-lg md:w-1/2 w-screen border-none rounded-md mt-5' ref={formRef} onSubmit={handleSubmit}>
        <div>
          {
          image
            ? (
              <img src={image} alt='preview' className='w-64 h-64 object-cover rounded-md shadow-md' />
              )
            : (
              <label htmlFor='file' className='w-64 h-64 flex justify-center items-center shadow-md rounded-md border-gray-200 border cursor-pointer'>
                Imagen
                <input type='file' id='file' name='image' className='hidden' accept='image/*' onChange={previewImage} />
              </label>
              )
        }
        </div>
        <label htmlFor='title' className='w-full text-lg font-bold'>
          Nombre del producto
          <input type='text' name='title' placeholder='Nombre del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </label>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='price' className='w-full text-lg font-bold'>
            Precio
            <input type='number' name='price' placeholder='Precio del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
          <label htmlFor='discountPrice' className='w-full text-lg font-bold'>
            Precio con descuento
            <input type='number' name='discountPrice' placeholder='Precio con descuento' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
        </div>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='reference' className='w-full text-lg font-bold'>
            Referencia
            <input type='text' name='reference' placeholder='Referencia' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
          <label htmlFor='stock' className='w-full text-lg font-bold'>
            Stock
            <input type='number' name='stock' placeholder='Stock' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          </label>
        </div>
        <label htmlFor='ml' className='w-full text-lg font-bold'>
          Mililitros
          <input type='number' name='ml' placeholder='Mililitros' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </label>
        <label htmlFor='featured' className='w-full text-lg font-bold'>
          Destacado
          <select name='featured' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full'>
            <option value='1'>Sí</option>
            <option value='0'>No</option>
          </select>
        </label>
        <label htmlFor='stars' className='w-full text-lg font-bold'>
          Estrellas
          <select name='stars' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full'>
            <option value='1'>1</option>
            <option value='2'>2</option>
            <option value='3'>3</option>
            <option value='4'>4</option>
            <option value='5'>5</option>
          </select>
        </label>
        <label htmlFor='category' className='w-full text-lg font-bold'>
          Categoría
          <select name='category' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full'>
            {
            CATEGORY.map((category) => (
              <option key={category} value={category}>{category}</option>
            ))
          }
          </select>
        </label>
        <label htmlFor='description' className='w-full text-lg font-bold'>
          Descripción
          <textarea rows={10} name='description' placeholder='Descripción del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </label>
        <button type='submit' className='bg-orange-200 rounded-md px-3 py-2  font-bold'>Actualizar producto</button>
      </form>
    </div>
  )
}
