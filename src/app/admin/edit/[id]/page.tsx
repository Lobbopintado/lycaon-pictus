'use client'
import { useGetOneProduct } from '@/components/products/hooks/use-get-one-product'
import { CATEGORY } from '@/consts/consts'
import { Category, Product } from '@/consts/types'
import { storage } from '@/services/config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useParams } from 'next/navigation'
import React, { useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { updateProduct } from '../hooks/update-product'

const EditPublication = () => {
  const { id } = useParams<{ id: string }>()
  const { product } = useGetOneProduct(id)
  const [image, setImage] = useState({
    name: product?.image.name,
    url: product?.image.url

  })
  const formRef = useRef<HTMLFormElement>(null)

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
      image: {
        name: image.name || 'default.jpg',
        url: image.url || '/default.jpg'
      },
      createdAt: new Date(),
      category: formData.get('category') as Category,
      stars: Number(formData.get('stars')),
      ml: Number(formData.get('ml'))
    }
    updateProduct(product, id)
  }

  const previewImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return
    const storageRef = ref(storage, 'images/' + file.name)
    const uploadTask = uploadBytesResumable(storageRef, file)
    uploadTask.on('state_changed',
      (snapshot) => {
        switch (snapshot.state) {
          case 'paused':
            toast.error('La subida del archivo fue pausada')
            break
          case 'running':
            toast.loading('Subiendo archivo...', { duration: 1000 })
            break
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            toast.error('No tienes permisos para subir archivos')
            break
          case 'storage/canceled':
            toast.error('La subida del archivo fue cancelada')
            break
          case 'storage/unknown':
            toast.error('Ocurrió un error desconocido al subir el archivo')
            break
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          setImage({
            name: file.name,
            url: downloadURL
          })
        })
      }
    )
  }

  return (
    <div className='flex flex-col items-center'>
      <Toaster
        position='top-center'
        reverseOrder={false}
      />
      <form className='flex flex-col gap-5 p-5 justify-center items-center border md:border-solid border-gray-200 md:shadow-lg md:w-1/2 w-screen border-none rounded-md' ref={formRef} onSubmit={handleSubmit}>
        <div>
          {
            image.url
              ? (
                <div>
                  <img src={image.url} alt='preview' className='w-64 h-64 object-cover rounded-md shadow-md' />
                  <button onClick={() => setImage({ url: '', name: '' })} className='bg-red-400 px-3 py-2 rounded-md mt-2'>Eliminar imagen</button>
                </div>
                )
              : (
                <label htmlFor='file' className='w-64 h-64 flex justify-center items-center shadow-md rounded-md border-gray-200 border cursor-pointer'>
                  Imagen
                  <input type='file' id='file' name='image' className='hidden' accept='image/*' onChange={previewImage} />
                </label>
                )
          }
        </div>
        <input type='text' name='title' placeholder='Nombre del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.title} />
        <div className='flex gap-5 w-full'>
          <input type='number' name='price' placeholder='Precio del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.price} />
          <input type='number' name='discountPrice' placeholder='Precio con descuento' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.discountPrice} />
        </div>
        <div className='flex gap-5 w-full'>
          <input type='text' name='reference' placeholder='Referencia' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.reference} />
          <input type='number' name='stock' placeholder='Stock' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.stock} />
        </div>
        <input type='number' name='ml' placeholder='Mililitros' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.ml} />
        <select name='stars' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.stars}>
          <option>Número de estrellas</option>
          <option defaultValue='1'>1</option>
          <option defaultValue='2'>2</option>
          <option defaultValue='3'>3</option>
          <option defaultValue='4'>4</option>
          <option defaultValue='5'>5</option>
        </select>
        <select name='category' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.category}>
          <option>Categoría</option>
          {
            CATEGORY.map((category) => (
              <option key={category} defaultValue={category}>{category}</option>
            ))
          }
        </select>
        <textarea rows={10} name='description' placeholder='Descripción del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.description} />
        <button type='submit' className='bg-orange-200 rounded-md px-3 py-2  font-bold'>Actualizar producto</button>
      </form>
    </div>
  )
}

export default EditPublication
