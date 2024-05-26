/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetOneProduct } from '@/components/products/hooks/use-get-one-product'
import { CATEGORY } from '@/consts/consts'
import { Category, Product } from '@/consts/types'
import { storage } from '@/services/config'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { useParams, useRouter } from 'next/navigation'
import React, { useEffect, useRef, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { updateProduct } from '../hooks/update-product'

const EditPublication = () => {
  const { id } = useParams<{ id: string }>()
  const [disabled, setDisabled] = useState(false)
  const router = useRouter()
  const { product } = useGetOneProduct(id)
  const [image, setImage] = useState({
    name: '',
    url: ''

  })
  const formRef = useRef<HTMLFormElement>(null)

  useEffect(() => {
    if (!product) return
    setImage({
      name: product.image.name,
      url: product.image.url
    })
  }, [product])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!formRef.current) return
    setDisabled(true)
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
      ml: Number(formData.get('ml')),
      featured: Number(formData.get('featured'))
    }
    updateProduct(product, id)
    toast.success('Producto actualizado correctamente')
    setTimeout(() => {
      router.push('/admin')
    }, 2000)
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
      <form className='flex flex-col gap-5 p-5 justify-center items-center border md:border-solid border-gray-200 md:shadow-lg md:w-1/2 w-screen border-none rounded-md mt-5' ref={formRef} onSubmit={handleSubmit}>
        <div>
          {
            image.url
              ? (
                <div>
                  <img src={image.url} alt='preview' className='w-64 h-64 object-cover rounded-md shadow-md' />
                  <button onClick={() => setImage({ url: '', name: '' })} className='w-full bg-red-400 px-3 py-2 rounded-md mt-2'>Eliminar imagen</button>
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
        <label htmlFor='title' className='w-full text-lg font-bold'>
          Nombre del producto
          <input type='text' name='title' placeholder='Nombre del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.title} />
        </label>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='price' className='w-full text-lg font-bold'>
            Precio
            <input type='number' name='price' placeholder='Precio del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.price} />
          </label>
          <label htmlFor='discountPrice' className='w-full text-lg font-bold'>
            Precio con descuento
            <input type='number' name='discountPrice' placeholder='Precio con descuento' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.discountPrice} />
          </label>
        </div>
        <div className='flex gap-5 w-full flex-col md:flex-row'>
          <label htmlFor='reference' className='w-full text-lg font-bold'>
            Referencia
            <input type='text' name='reference' placeholder='Referencia' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.reference} />
          </label>
          <label htmlFor='stock' className='w-full text-lg font-bold'>
            Stock
            <input type='number' name='stock' placeholder='Stock' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.stock} />
          </label>
        </div>
        <label htmlFor='ml' className='w-full text-lg font-bold'>
          Mililitros
          <input type='number' name='ml' placeholder='Mililitros' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.ml} />
        </label>
        <label htmlFor='featured' className='w-full text-lg font-bold'>
          Destacado
          <select name='featured' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full'>
            <option value='1' selected={product?.featured === 1}>Sí</option>
            <option value='0' selected={product?.featured === 0}>No</option>
          </select>
        </label>
        <label htmlFor='stars' className='w-full text-lg font-bold'>
          Estrellas
          <select name='stars' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.stars.toString()}>
            <option value='1' selected={product?.stars === 1}>1</option>
            <option value='2' selected={product?.stars === 2}>2</option>
            <option value='3' selected={product?.stars === 3}>3</option>
            <option value='4' selected={product?.stars === 4}>4</option>
            <option value='5' selected={product?.stars === 5}>5</option>
          </select>
        </label>
        <label htmlFor='category' className='w-full text-lg font-bold'>
          Categoría
          <select name='category' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.category}>
            {
            CATEGORY.map((category) => (
              <option key={category} value={category} selected={product?.category === category} hidden={category === 'todos'}>{category}</option>
            ))
          }
          </select>
        </label>
        <label htmlFor='description' className='w-full text-lg font-bold'>
          Descripción
          <textarea rows={10} name='description' placeholder='Descripción del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' defaultValue={product?.description} />
        </label>
        <button type='submit' className='bg-orange-200 rounded-md px-3 py-2  font-bold' disabled={disabled}>Actualizar producto</button>
      </form>
    </div>
  )
}

export default EditPublication
