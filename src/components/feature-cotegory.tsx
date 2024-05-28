/* eslint-disable @next/next/no-img-element */
export const FeatureCategory = () => {
  return (
    <ul className='w-full px-3 md:p-0 md:w-2/3 h-[400px] md:h-auto grid grid-cols-2 grid-rows-2 gap-3 place-items-start md:flex'>
      <li className='flex flex-col justify-end items-end'>
        <img src='/products/butadeniol.jpeg' alt='Butadeniol' className='size-full md:size-96 object-contain' />
        <h3 className='w-full text-center p-2 text-black font-bold'>1.4 - Butadeniol (BDO)</h3>
      </li>
      <li className='flex flex-col justify-end items-end'>
        <img src='/products/remover.jpeg' alt='Butadeniol' className='size-full object-contain md:size-96' />
        <h3 className='w-full text-center p-2 text-black font-bold'>Multi remover (BDO)</h3>
      </li>
      <li className='flex flex-col justify-end items-end row-span-2 col-start-2 row-start-1'>
        <img src='/products/poppers.jpeg' alt='Butadeniol' className='size-full object-contain md:size-96' />
        <h3 className='text-sm w-full text-center p-2 text-black font-bold'>Poppers (Pentilo, Amilo, Propilo y Mixtos)</h3>
      </li>
    </ul>
  )
}
