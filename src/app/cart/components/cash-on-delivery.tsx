interface CashOnDeliveryProps {
    cashOnDelivery: boolean
}
export const CashOnDelivery = ({ cashOnDelivery }: CashOnDeliveryProps) => {
  if (!cashOnDelivery) return null
  return (
    <div className='z-10 top-0 left-0 fixed flex justify-center items-center w-screen h-screen bg-black/50'>
      <div className='md:w-1/2 md:h-96 size-full flex flex-col justify-center items-center gap-5 bg-white'>
        <h1 className='font-bold text-2xl'>¡Gracias por su compra!</h1>
        <p>Pagará en su domicilio cuando le lleguen los productos</p>
      </div>
    </div>
  )
}