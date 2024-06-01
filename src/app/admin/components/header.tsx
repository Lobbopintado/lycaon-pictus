interface HeaderProps {
    setIsOpen: (isOpen: string) => void
    isOpen: string
}

export const Header = ({ setIsOpen, isOpen }: HeaderProps) => {
  return (
    <header>
      <nav className='flex justify-center py-5'>
        <ul className='flex justify-center items-center gap-5 rounded-md p-3'>
          <li className={`${isOpen === 'products' && 'text-[#168cec] font-bold border-b-2 border-[#168cec]'} rounded-md p-1`}>
            <button onClick={() => setIsOpen('products')}>
              Productos
            </button>
          </li>
          <li className={`${isOpen === 'create-product' && 'text-[#168cec] font-bold border-b-2 border-[#168cec]'} rounded-md p-1`}>
            <button onClick={() => setIsOpen('create-product')}>
              Crear producto
            </button>
          </li>
          <li className={`${isOpen === 'sales' && 'text-[#168cec] font-bold border-b-2 border-[#168cec]'} rounded-full p-1`}>
            <button onClick={() => setIsOpen('sales')}>
              Ventas
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
