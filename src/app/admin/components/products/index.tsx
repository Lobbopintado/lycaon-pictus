import { useGetProducts } from '@/components/products/hooks/use-get-products'

export const Products = () => {
  const { products } = useGetProducts()
  return (
    <div className='flex justify-center items-center flex-col'>
      <ul className='w-full md:w-1/2 flex flex-col gap-1'>
        <li className='grid grid-cols-5 gap-3 bg-black text-white p-3 place-items-center'>
          <h2>Imagen</h2>
          <h2>Nombre</h2>
          <h2>Precio</h2>
          <h2>Editar</h2>
          <h2>Eliminar</h2>
        </li>
        {products.map((product) => (
          <li key={product.id} className='grid grid-cols-5 gap-3 bg-white text-black p-3 place-items-center'>
            <img src={product.image.url} alt={product.image.name} className='size-12 object-cover' />
            <h2>{product.title}</h2>
            <p>{product.price}</p>
            <button>Editar</button>
            <button>Eliminar</button>
          </li>
        ))}
      </ul>
    </div>
  )
}
