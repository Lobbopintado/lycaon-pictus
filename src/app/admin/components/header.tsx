interface HeaderProps {
    setIsOpen: (isOpen: string) => void
    isOpen: string
}

export const Header = ({ setIsOpen, isOpen }: HeaderProps) => {
  return (
    <header>
      <nav className='flex justify-center'>
        <ul className='flex justify-center items-center gap-5 bg-sky-300 rounded-full p-3'>
          <li className={`${isOpen === 'create-product' && 'bg-white '} rounded-full p-1`}>
            <button onClick={() => setIsOpen('create-product')}>
              Crear producto
            </button>
          </li>
          <li className={`${isOpen === 'ventas' && 'bg-white '} rounded-full p-1`}>
            <button onClick={() => setIsOpen('ventas')}>
              Ventas
            </button>
          </li>
        </ul>
      </nav>
    </header>
  )
}
