/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useGetSales } from './hooks/useGetSales'

export const Sales = () => {
  const [isOpened, setIsOpened] = useState('')
  const [clientName, setClientName] = useState('' as string)
  const [clientMethod, setClientMethod] = useState('' as string)
  const { sales } = useGetSales()

  const saleFilterByName = clientName ? sales?.filter((sale) => sale.client.name.toLowerCase().includes(clientName.toLowerCase())) : sales

  const saleFilterByMethod = clientMethod ? saleFilterByName?.filter((sale) => sale.method === clientMethod) : saleFilterByName
  return (
    <div className='flex justify-center items-center flex-col'>
      <div className='flex flex-col md:flex-row gap-5 mb-5'>
        <label>
          <input
            type='text'
            placeholder='Buscar por nombre'
            className='p-2 border border-gray-400 rounded-md'
            onChange={(e) => setClientName(e.target.value)}
          />
        </label>
        <select className='rounded-md' onChange={(e) => setClientMethod(e.target.value)}>
          <option value=''>Todos</option>
          <option value='Tarjeta'>Tarjeta</option>
          <option value='Transferencia'>Transferencia</option>
          <option value='Contrareembolso'>Contrareembolso</option>
        </select>
      </div>
      <ul className='w-full md:w-1/2 flex flex-col gap-1'>
        <li className='grid grid-cols-5 gap-3 bg-black text-white p-3 place-items-center'>
          <h2>Nº</h2>
          <h2>Fecha</h2>
          <h2>Cliente</h2>
          <h2>Artículos</h2>
          <h2>Método</h2>
        </li>
        {saleFilterByMethod?.map((sale) => (
          <div key={sale.id}>
            <li className='grid grid-cols-5 gap-3 bg-white text-black p-3 place-items-center'>
              <h3>{sale.ref}</h3>
              <h3 className='text-sm'>{sale.date.toDate().toLocaleDateString()}</h3>
              <button className='bg-[#168cec] p-1 rounded-md text-white' onClick={() => setIsOpened(sale.client.address)}>
                Cliente
              </button>
              <button className='bg-[#168cec] p-1 rounded-md text-white' onClick={() => setIsOpened(sale.ref.toString())}>
                Artículos
              </button>
              <div>
                {sale.method === 'Tarjeta' && (
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-credit-card'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M3 5m0 3a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v8a3 3 0 0 1 -3 3h-12a3 3 0 0 1 -3 -3z' /><path d='M3 10l18 0' /><path d='M7 15l.01 0' /><path d='M11 15l2 0' /></svg>
                )}
                {sale.method === 'Transferencia' && (
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-transfer'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M20 10h-16l5.5 -6' /><path d='M4 14h16l-5.5 6' /></svg>
                )}
                {sale.method === 'Contrareembolso' && (
                  <svg width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round' className='icon icon-tabler icons-tabler-outline icon-tabler-cash'><path stroke='none' d='M0 0h24v24H0z' fill='none' /><path d='M7 9m0 2a2 2 0 0 1 2 -2h10a2 2 0 0 1 2 2v6a2 2 0 0 1 -2 2h-10a2 2 0 0 1 -2 -2z' /><path d='M14 14m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0' /><path d='M17 9v-2a2 2 0 0 0 -2 -2h-10a2 2 0 0 0 -2 2v6a2 2 0 0 0 2 2h2' /></svg>
                )}
              </div>
            </li>
            {
              isOpened === sale.client.address && (
                <div className='flex flex-col p-3 bg-white'>
                  <h3 className='font-bold'>Nombre: {sale.client.name}</h3>
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
