import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export const FeatureCategory = () => {
  return (
    <ul className='w-full justify-center gap-5 px-3 md:p-0 md:w-2/3 flex flex-wrap md:flex-nowrap mb-14'>
      <li className='w-[45%] md:h-[30%]'>
        <Link href='/categoria/1-4-butandiol' className='flex flex-col justify-end items-end'>
          <img src='/products/butadeniol.jpeg' alt='Butadeniol' className='size-full md:size-96 object-contain' />
          <h3 className='w-full text-center p-2 text-black font-bold'>1.4 - Butadeniol (BDO)</h3>
        </Link>
      </li>
      <li className='w-[45%] md:w-[30%]'>
        <Link href='/categoria/multi-gel-remover' className='flex flex-col justify-end items-end'>
          <img src='/products/remover.jpeg' alt='Butadeniol' className='size-full object-contain md:size-96' />
          <h3 className='w-full text-center p-2 text-black font-bold'>Multi remover</h3>
        </Link>
      </li>
    </ul>
  )
}
