/* eslint-disable @next/next/no-img-element */
import { CategoryProducts } from '@/components/category-products'
import { FeatureCategory } from '@/components/feature-cotegory'
import { FeatureProducts } from '@/components/feature-products'
import { NavCategory } from '@/components/nav-category'
import { CATEGORY } from '@/consts/consts'
import Link from 'next/link'

export default function Home () {
  return (
    <main className='flex flex-col items-center gap-5 md:gap-24'>
      <NavCategory />
      <FeatureCategory />
      <p className='text-red-500 px-5 font-semibold'>
        Uso exclusivo y obligatorio para equipos de limpieza
      </p>
      <div className='flex flex-col  gap-5 p-5 bg-white shadow-md border border-gray-200 border-solid rounded-md'>
        <p className='text-center font-bold'>Envíos solo en España</p>
        <p>Tienes dudas, necesitas más información o quieres un trato más personalizado
        </p>
        <p>
          ¡puedes hacer tu pedido por WhatsApp!
        </p>
        <div className='flex gap-3 justify-center items-center'>
          <Link href='https://wa.me/+34684738607' className='flex gap-3 justify-center items-center p-3 border rounded-md border-green-500 w-40'>
            Contactar
            <img className='size-8' src='/whatsapp-logo.png' alt='logo de whatsapp' />
          </Link>
        </div>
      </div>
      <FeatureProducts />
      {
        CATEGORY.map((category) => (
          <CategoryProducts key={category.slug} name={category.name} category={category.slug} />
        ))
        }

    </main>
  )
}
