import { NavCategory } from '@/components/nav-category'
import { Products } from '@/components/products'

export default function Home () {
  return (
    <main className='flex flex-col items-center justify-between'>
      <NavCategory />
      <Products />
    </main>
  )
}
