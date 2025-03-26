/* eslint-disable jsx-a11y/alt-text */

import { EmailIcon } from '@/svg/email'
import Link from 'next/link'

/* eslint-disable @next/next/no-img-element */
export default function Contacto () {
  return (
    <div className=' mt-10 font-[sans-serif] max-w-6xl mx-auto relative bg-white rounded-3xl shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] overflow-hidden'>
      <div className='absolute -top-6 -left-6 w-20 h-20 rounded-full bg-blue-400' />
      <div className='absolute -bottom-6 -left-0 w-24 h-20 rounded-tr-[40px] bg-teal-200' />
      <div className='absolute -top-6 -right-6 w-20 h-20 rounded-full bg-blue-400' />
      <div className='absolute -bottom-6 -right-0 w-24 h-20 rounded-tl-[40px] bg-blue-300' />
      <div className='grid md:grid-cols-3 p-10 place-items-center'>
        <section className='flex gap-3 flex-col justify-center items-center'>
          Por WhatsApp
          <Link href='https://wa.me/+34611072714'>
            <img
              src='/whatsapp-logo.png'
              alt='Whatsapp'
              className='w-16 h-16'
            />
          </Link>
        </section>
        <div className='text-center p-6 xl:p-10 flex flex-col items-center justify-center'>
          <h2 className='text-3xl text-blue-500 font-bold'>Contáctanos</h2>
          <img src='https://readymadeui.com/contact.webp' className='mt-4 shrink-0 w-full' />
        </div>
        <section className='flex flex-col justify-center gap-3 items-center'>
          Por Email
          <Link href='mailto:lobbopintado@gmail.com'>
            <EmailIcon className='w-20 h-20' />
          </Link>
        </section>
      </div>
    </div>
  )
}
