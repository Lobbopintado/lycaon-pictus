import { CATEGORY } from '@/consts/consts'
import { Category } from '@/consts/types'
import { useCategoryContext } from '@/context/category-context'

export const NavCategory = () => {
  const { setCategory } = useCategoryContext()
  return (
    <ul className='flex p-5 flex-wrap gap-1 justify-between'>
      {
        CATEGORY.map((category) => (
          <li key={category} className='p-2 bg-orange-300 text-white'>
            <button onClick={() => setCategory(category as Category)} className='text-xl leading-6 font-jost text-primary-200'>
              {category.toUpperCase()}
            </button>
          </li>
        ))
    }
    </ul>
  )
}
