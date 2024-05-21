'use client'
import { Card } from './components/card'
import { useGetProducts } from './hooks/use-get-products'

export const Products = () => {
  const { products, loading } = useGetProducts()
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {products.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
