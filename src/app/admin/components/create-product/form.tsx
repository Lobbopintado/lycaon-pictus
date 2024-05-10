export const CreateProductForm = () => {
  return (
    <div className='flex flex-col items-center'>
      <form className='flex flex-col gap-5 justify-center items-center border border-solid border-gray-200 shadow-lg md:w-1/2'>
        <input type='text' placeholder='Nombre del producto' className='p-2 border border-solid border-gray-200 rounded-md shadow-lg' />
        <div className='flex gap-5'>
          <input type='number' placeholder='Precio del producto' />
          <input type='number' placeholder='Precio con descuento' />
        </div>
        <div className='flex gap-5'>
          <input type='text' placeholder='Referencia' />
          <input type='number' placeholder='Stock' />
        </div>
        <div>
          <label htmlFor='file'>
            Imagen
            <input type='file' id='file' className='hidden' accept='image/*' />
          </label>
        </div>
        <textarea rows={10} placeholder='Descripción del producto' />
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
