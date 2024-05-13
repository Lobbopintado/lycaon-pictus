export const CreateProductForm = () => {
  return (
    <div className='flex flex-col items-center'>
      <form className='flex flex-col gap-5 p-5 justify-center items-center border md:border-solid border-gray-200 md:shadow-lg md:w-1/2 w-screen border-none'>
        <input type='text' placeholder='Nombre del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        <div className='flex gap-5 w-full'>
          <input type='number' placeholder='Precio del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          <input type='number' placeholder='Precio con descuento' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </div>
        <div className='flex gap-5 w-full'>
          <input type='text' placeholder='Referencia' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
          <input type='number' placeholder='Stock' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        </div>
        <div>
          <label htmlFor='file'>
            Imagen
            <input type='file' id='file' className='hidden' accept='image/*' />
          </label>
        </div>
        <textarea rows={10} placeholder='Descripción del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg w-full' />
        <button type='submit' className='bg-orange-200 rounded-md px-3 py-2  font-bold'>Crear producto</button>
      </form>
    </div>
  )
}
