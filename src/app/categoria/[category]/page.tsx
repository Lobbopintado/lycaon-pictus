'use client'
import { CategoryProducts } from '@/components/category-products'
import { NavCategory } from '@/components/nav-category'
import { useParams } from 'next/navigation'

export default function CategoryPage () {
  const { category } = useParams<{ category: string }>()
  return (
    <main className='flex flex-col items-center justify-between'>
      <NavCategory />
      <CategoryProducts category={category} />
    </main>
  )
}
