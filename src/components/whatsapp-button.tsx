/* eslint-disable @next/next/no-img-element */
export const WhatsappButton = () => {
  return (
    <a
      href='https://wa.me/+34684738607'
      target='_blank'
      className='fixed bottom-4 right-4 rounded-full shadow-md z-10' rel='noreferrer'
    >
      <img src='/whatsapp-logo.png' alt='Whatsapp' className='w-16 h-16' />
    </a>
  )
}
