import { CategoryProducts } from '@/components/category-products'
import { FeatureCategory } from '@/components/feature-cotegory'
import { FeatureProducts } from '@/components/feature-products'
import { NavCategory } from '@/components/nav-category'
import { CATEGORY } from '@/consts/consts'

export default function Home () {
  return (
    <main className='flex flex-col items-center gap-5 md:gap-24'>
      <NavCategory />
      <FeatureCategory />
      <FeatureProducts />
      {
        CATEGORY.map((category) => (
          <CategoryProducts key={category.slug} name={category.name} category={category.slug} />
        ))
        }

    </main>
  )
}
