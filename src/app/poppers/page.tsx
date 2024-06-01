'use client'
import { CategoryProducts } from '@/components/category-products'
import { NavCategory } from '@/components/nav-category'

export default function Poppers () {
  return (
    <main className='flex flex-col items-center gap-5 md:gap-25'>
      <NavCategory />
      <CategoryProducts category='pentilo' />
      <CategoryProducts category='amilo' />
      <CategoryProducts category='propilo' />
      <CategoryProducts category='mixtos' />
    </main>
  )
}
