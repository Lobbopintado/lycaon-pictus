import { CATEGORY } from '@/consts/consts'

/* eslint-disable @next/next/no-img-element */
export const Footer = () => {
  return (
    <footer className='w-full bg-black text-white mt-10'>
      <div className='w-full max-w-[1200px] px-12 xl:px-0 mx-auto pb-5 grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 gap-6'>
        {/* start */}
        <div className='col-span-1 flex flex-col gap-4 pl-5'>
          <h5 className='font-dm text-[22px] lg:text-[25px] leading-loose'>
            Páginas
          </h5>
          <div className='flex flex-col gap-4'>
            <a
              href='/'
              className='tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost flex gap-5 items-center'
            >
              <span className='size-3 bg-text-blue rounded-full' />
              Inicio
            </a>
            <a
              href='/nosotros'
              className='tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost flex gap-5 items-center'
            >
              <span className='size-3 bg-text-blue rounded-full' />
              Nosotros
            </a>
            <a
              href='/contacto'
              className='tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost flex gap-5 items-center'
            >
              <span className='size-3 bg-text-blue rounded-full' />
              Contacto
            </a>
          </div>
        </div>
        <div className='col-span-1 flex flex-col gap-4 border-l-4 border-white border-solid pl-5'>
          <h5 className='font-dm text-text-blue text-[22px] lg:text-[25px] leading-loose'>
            Categorías
          </h5>
          <div className='grid grid-cols-2 gap-4'>
            {
              CATEGORY.map((category) => (
                <a
                  key={category.name}
                  href={`/categorias/${category.slug}`}
                  className='tracking-tight text-base lg:text-[22px] lg:leading-[33px] font-jost flex gap-5 items-center'
                >
                  <span className='size-3 bg-text-blue rounded-full' />
                  {category.name}
                </a>
              ))
            }
          </div>
        </div>
      </div>
      <div className='w-full bg-text-blue text-center py-5'>
        <p className='text-lg lg:text-xl font-jost'>
          Lycaon Pictus © 2024 - Todos los derechos reservados
        </p>
      </div>
    </footer>
  )
}
