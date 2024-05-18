import { Product } from '@/consts/types'

export const PRODUCTS: Product[] = [
  {
    title: 'Zapatos',
    image: {
      name: 'zapatos.jpg',
      url: 'https://images.unsplash.com/photo-1612835977531-4a6f2f6a1d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    price: 150,
    description: 'Zapatos de moda',
    id: '1',
    stock: 10,
    discountPrice: 100,
    reference: 'ZP-001',
    createdAt: new Date(),
    category: 'Calzado'
  },
  {
    title: 'Camisa',
    image: {
      name: 'camisa.jpg',
      url: 'https://images.unsplash.com/photo-1612835977531-4a6f2f6a1d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    price: 100,
    description: 'Camisa de moda',
    id: '2',
    stock: 10,
    discountPrice: 80,
    reference: 'CM-001',
    createdAt: new Date(),
    category: 'Ropa'
  },
  {
    title: 'Pantalón',
    image: {
      name: 'pantalon.jpg',
      url: 'https://images.unsplash.com/photo-1612835977531-4a6f2f6a1d5f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA==&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60'
    },
    price: 120,
    description: 'Pantalón de moda',
    id: '3',
    stock: 10,
    discountPrice: 90,
    reference: 'PT-001',
    createdAt: new Date(),
    category: 'Ropa'
  }
]
