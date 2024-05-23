'use client'
import { Card } from './components/card'
import { CardSkeleton } from './components/card-skeleton'
import { useGetProducts } from './hooks/use-get-products'

export const Products = () => {
  const { products, loading } = useGetProducts()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 min-h-96 w-screen md:w-2/3 place-items-center'>
      {products.map(product => (
        loading ? <CardSkeleton key={product.id} /> : <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
