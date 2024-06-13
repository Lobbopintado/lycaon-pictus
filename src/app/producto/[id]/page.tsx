/* eslint-disable @next/next/no-img-element */
'use client'
import { useGetOneProduct } from '@/hooks/use-get-one-product'
import { useGetRemoveCart } from '@/hooks/use-get-remove-cart'
import { useParams } from 'next/navigation'

export default function ProductPage () {
  const { id } = useParams<{ id: string }>()
  const { product } = useGetOneProduct(id)
  const { addToCart, removeFromCart, exist } = useGetRemoveCart(id)
  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href)
  }
  return (
    <div className='py-8'>
      <div className='max-w-6xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex flex-col md:flex-row -mx-4'>
          <div className='md:flex-1 px-4'>
            <div className='h-[460px] rounded-lg bg-gray-300 mb-4'>
              <img className='w-full h-full object-cover' src={product?.image.url} alt='Product Image' />
            </div>
            <div className='flex -mx-2 mb-4'>
              <div className='w-1/2 px-2'>
                {
                  exist
                    ? <button onClick={removeFromCart} className='w-full text-black py-2'>Eliminar del carrito</button>
                    : (
                      <div className='flex flex-col'>
                        <button onClick={addToCart} className='w-full bg-orange-200 text-white py-2 px-4 rounded-full font-bold hover:bg-orange-300'>Añadir al carrito</button>
                      </div>
                      )
                }
              </div>
              <div className='w-1/2 px-2'>
                <button onClick={copyLink} className='w-full bg-gray-200 text-gray-800 py-2 px-4 rounded-full font-bold hover:bg-gray-300'>Copiar enlace</button>
              </div>
            </div>
          </div>
          <div className='md:flex-1 px-4'>
            <h2 className='text-2xl font-bold text-gray-800 mb-2'>{product?.title}</h2>
            <div className='flex flex-col mb-4'>
              <div className='mr-4'>
                <span className='font-bold text-gray-700'>Precio: </span>
                <span className={`text-gray-600 ${product?.discountPrice && 'text-red-500'}`}>{product?.price}€</span>
              </div>
              {
                product?.discountPrice && (
                  <div className='mr-4'>
                    <span className='font-bold text-gray-700'>Precio con descuento: </span>
                    <span className='text-gray-600'>{product?.discountPrice}€</span>
                  </div>
                )
              }
            </div>
            <div>
              <span className='font-bold text-gray-700'>Description:</span>
              <p className='text-gray-600 text-sm mt-2'>
                {product?.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
