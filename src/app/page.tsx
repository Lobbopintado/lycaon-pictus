import { FeatureCategory } from '@/components/feature-cotegory'
import { Products } from '@/components/feature-products'
import { NavCategory } from '@/components/nav-category'

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-between'>
      <NavCategory />
      <FeatureCategory />
      <Products />
    </main>
  )
}
