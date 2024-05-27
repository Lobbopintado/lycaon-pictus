'use client'
import { Card } from '../card'
import { CardSkeleton } from '../card-skeleton'
import { useGetFeaturedProducts } from './hooks/useGetFeaturedProducts'

export const Products = () => {
  const { products, loading } = useGetFeaturedProducts()
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <h2 className='text-3xl font-bold text-center p-5'>Productos destacados</h2>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-6 w-screen md:w-2/3 place-items-center'>
        {products.map(product => (
          loading ? <CardSkeleton key={product.id} /> : <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
