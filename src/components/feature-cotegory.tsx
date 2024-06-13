import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export const FeatureCategory = () => {
  return (
    <ul className='w-full px-3 md:p-0 md:w-2/3 h-[500px] grid grid-cols-2 md:grid-cols-3 grid-rows-2 gap-3 place-items-start mb-14'>
      <li>
        <Link href='/categoria/1-4-butandiol' className='flex flex-col justify-end items-end'>
          <img src='/products/butadeniol.jpeg' alt='Butadeniol' className='size-full md:size-96 object-contain' />
          <h3 className='w-full text-center p-2 text-black font-bold'>1.4 - Butadeniol (BDO)</h3>
        </Link>
      </li>
      <li>
        <Link href='/categoria/multi-gel-remover' className='flex flex-col justify-end items-end'>
          <img src='/products/remover.jpeg' alt='Butadeniol' className='size-full object-contain md:size-96' />
          <h3 className='w-full text-center p-2 text-black font-bold'>Multi remover</h3>
        </Link>
      </li>
      <li className='flex justify-center col-span-2 md:col-span-1'>
        <Link href='/poppers' className='flex flex-col justify-end items-end w-1/2 md:w-full'>
          <img src='/products/poppers.jpeg' alt='Butadeniol' className='size-full object-contain md:size-96' />
          <h3 className='text-sm w-full text-center p-2 text-black font-bold'>Poppers (Pentilo, Amilo, Propilo y Mixtos)</h3>
        </Link>
      </li>
    </ul>
  )
}
