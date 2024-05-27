/* eslint-disable @next/next/no-img-element */
export const FeatureCategory = () => {
  return (
    <ul className='w-full px-3 md:p-0 md:w-2/3 h-96 grid grid-cols-2 grid-rows-2 gap-3'>
      <li className='relative flex justify-center items-end'>
        <img src='/products/butadeniol.jpeg' alt='Butadeniol' className='size-full object-cover' />
        <h3 className='absolute bg-black/50 w-full text-center p-2 text-white font-bold'>1.4 - Butadeniol (BDO)</h3>
      </li>
      <li className='relative flex justify-center items-end'>
        <img src='/products/remover.jpeg' alt='Butadeniol' className='size-full object-cover' />
        <h3 className='absolute bg-black/50 w-full text-center p-2 text-white font-bold'>Multi remover (BDO)</h3>
      </li>
      <li className='relative flex justify-center items-end row-span-2 col-start-2 row-start-1'>
        <img src='/products/poppers.jpeg' alt='Butadeniol' className='size-full object-cover' />
        <h3 className='text-sm absolute bg-black/50 w-full text-center p-2 text-white font-bold'>Poppers (Pentilo, Amilo, Propilo y Mixtos)</h3>
      </li>
    </ul>
  )
}
