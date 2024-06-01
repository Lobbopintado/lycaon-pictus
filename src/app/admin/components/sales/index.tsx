/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useGetSales } from './hooks/useGetSales'

export const Sales = () => {
  const [isOpened, setIsOpened] = useState('')
  const { sales } = useGetSales()
  return (
    <div className='flex justify-center items-center flex-col'>
      <ul className='w-full md:w-1/2 flex flex-col gap-1'>
        <li className='grid grid-cols-4 gap-3 bg-black text-white p-3 place-items-center'>
          <h2>Nº</h2>
          <h2>Fecha</h2>
          <h2>Cliente</h2>
          <h2>Artículos</h2>
        </li>
        {sales?.map((sale) => (
          <div key={sale.id}>
            <li className='grid grid-cols-4 gap-3 bg-white text-black p-3 place-items-center'>
              <h3>{sale.ref}</h3>
              <h3 className='text-sm'>{sale.date.toDate().toLocaleDateString()}</h3>
              <button className='bg-sky-400 p-1 rounded-md text-white' onClick={() => setIsOpened(sale.client.address)}>
                Cliente
              </button>
              <button className='bg-sky-400 p-1 rounded-md text-white' onClick={() => setIsOpened(sale.ref.toString())}>
                Artículos
              </button>
            </li>
            {
              isOpened === sale.client.address && (
                <div className='flex flex-col p-3 bg-white'>
                  <h3 className='font-bold'>Nombre: {sale.client.name}</h3>
                  <p>DNI/CIF: {sale.client.dni}</p>
                  <p>Código Postal: {sale.client.cp}</p>
                  <p>Población: {sale.client.population}</p>
                  <p>Provincia: {sale.client.city}</p>
                  <p>Dirección: {sale.client.address}</p>
                  <p>Email: {sale.client.email}</p>
                  <p>Teléfono: {sale.client.phone}</p>
                </div>
              )
            }
            {
              isOpened === sale.ref.toString() && (
                <ul className='flex flex-col p-3 bg-white gap-3'>
                  {sale.sale.map((article) => (
                    <li key={article.id} className='flex gap-3'>
                      <img src={article.image} alt={article.title} className='size-24 object-cover rounded-sm' />
                      <div>
                        <h3 className='font-bold'>{article.title}</h3>
                        <div className='flex gap-2'>
                          {article.discountPrice ? <p>{article.discountPrice}€</p> : <p>{article.price}€</p>} x {article.quantity}
                        </div>
                        <p>Ref: {article.reference}</p>
                      </div>
                    </li>
                  ))}
                  <li className='font-bold'>Total venta: {Number(sale.total).toFixed(2)}€</li>
                </ul>
              )
            }
          </div>
        ))}
      </ul>
    </div>
  )
}
