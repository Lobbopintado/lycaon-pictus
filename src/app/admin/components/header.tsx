interface HeaderProps {
    setIsOpen: (isOpen: string) => void
    isOpen: string
}

export const Header = ({ setIsOpen, isOpen }: HeaderProps) => {
  return (
    <header>
      <nav className='flex justify-center p-5'>
        <ul className='flex justify-center items-center gap-5 bg-sky-300 rounded-md p-3'>
          <li className={`${isOpen === 'products' && 'text-white '} rounded-md p-1`}>
            <button onClick={() => setIsOpen('products')}>
              Productos
            </button>
          </li>
          <li className={`${isOpen === 'create-product' && 'text-white '} rounded-md p-1`}>
            <button onClick={() => setIsOpen('create-product')}>
              Crear producto
            </button>
          </li>
          <li className={`${isOpen === 'ventas' && 'text-white '} rounded-full p-1`}>
            <button onClick={() => setIsOpen('ventas')}>
              Ventas
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
