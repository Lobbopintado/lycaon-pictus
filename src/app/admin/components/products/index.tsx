/* eslint-disable @next/next/no-img-element */
import { useGetProducts } from '@/hooks/use-get-products'
import Link from 'next/link'

export const Products = () => {
  const { products } = useGetProducts()
  return (
    <div className='flex justify-center items-center flex-col'>
      <ul className='w-full md:w-1/2 flex flex-col gap-1'>
        <li className='grid grid-cols-5 gap-3 bg-black text-white p-3 place-items-center'>
          <h2>Imagen</h2>
          <h2 className='col-span-2'>Nombre</h2>
          <h2>Editar</h2>
          <h2>Eliminar</h2>
        </li>
        {products.map((product) => (
          <li key={product.id} className='grid grid-cols-5 gap-3 bg-white text-black p-3 place-items-center'>
            <img src={product.image.url} alt={product.image.name} className='size-12 object-cover' />
            <h2 className='text-sm col-span-2'>{product.title.slice(0, 25)}...</h2>
            <Link href={`/admin/edit/${product.id}`}>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 7h-1a2 2 0 0 0 -2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2 -2v-1' /><path d='M20.385 6.585a2.1 2.1 0 0 0 -2.97 -2.97l-8.415 8.385v3h3l8.385 -8.415z' /><path d='M16 5l3 3' /></svg>
            </Link>
            <button>
              <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M4 7l16 0' /><path d='M10 11l0 6' /><path d='M14 11l0 6' /><path d='M5 7l1 12a2 2 0 0 0 2 2h8a2 2 0 0 0 2 -2l1 -12' /><path d='M9 7v-3a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v3' /></svg>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
