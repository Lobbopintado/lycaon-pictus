'use client'
import { Card } from './components/card'
import { CardSkeleton } from './components/card-skeleton'
import { useGetProducts } from './hooks/use-get-products'

export const Products = () => {
  const { products, loading } = useGetProducts()
  return (
    <div className='grid md:grid-cols-4 grid-cols-2 gap-2 md:gap-6 w-screen md:w-2/3 place-items-center'>
      {products.map(product => (
        loading ? <CardSkeleton key={product.id} /> : <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
