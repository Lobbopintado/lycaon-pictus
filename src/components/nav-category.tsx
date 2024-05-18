import { CATEGORY } from '@/consts/consts'

export const NavCategory = () => {
  return (
    <ul className='flex p-5 flex-wrap gap-1 justify-between'>
      {
        CATEGORY.map((category) => (
          <li key={category} className='p-2 bg-orange-300 text-white'>
            <a href={`/category/${category}`} className='text-xl leading-6 font-jost text-primary-200'>
              {category.toUpperCase()}
            </a>
          </li>
        ))
    }
    </ul>
  )
}
