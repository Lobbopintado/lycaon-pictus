import { PRODUCTS } from '@/services/data'
import { Card } from './components/card'

export const Products = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6'>
      {PRODUCTS.map(product => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  )
}
