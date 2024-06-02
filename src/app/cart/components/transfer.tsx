interface TransferProps {
    email: string
    transfer: boolean
}
export const Transfer = ({ email, transfer }: TransferProps) => {
  if (!transfer) return null
  return (
    <div className='z-10 top-0 left-0 fixed flex justify-center items-center w-screen h-screen bg-black/50'>
      <div className='md:w-1/2 md:h-96 size-full flex flex-col justify-center items-center gap-5 bg-white'>
        <h1 className='font-bold text-2xl'>Pago por transferencia</h1>
        <p>Ha recibido las instrucciones en el email: {email}</p>
      </div>
    </div>
  )
}
