'use client'
import { CATEGORY } from '@/consts/consts'
import { Card } from '../card'
import { CardSkeleton } from '../card-skeleton'
import { useGetFeaturedProducts } from './hooks/useGetFeaturedProducts'
interface CategoryProductsProps {
  category: string
  name?: string
}

export const CategoryProducts = ({ category, name }: CategoryProductsProps) => {
  const { products, loading } = useGetFeaturedProducts(category)
  if (products.length === 0) return null
  return (
    <section className='w-full flex flex-col items-center justify-center'>
      <h2 className='text-2xl md:text-3xl font-bold text-left p-5'>
        {
          CATEGORY.find(cat => cat.slug === category)?.name || name
        }
      </h2>
      <div className='grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-6 w-screen md:w-2/3 place-items-center'>
        {products.map(product => (
          loading ? <CardSkeleton key={product.id} /> : <Card key={product.id} product={product} />
        ))}
      </div>
    </section>
  )
}
