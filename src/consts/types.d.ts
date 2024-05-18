export type createProduct = {
    title: string
    image: File
    price: number
    description: string
    id?: string
    stock: number
    discountPrice: number
    reference: string
    createdAt: Date
    category: string
  }

export type Product = {
  title: 'string',
  image: {
    name: 'string',
    url: 'string'
  },
  price: 'number',
  description: 'string',
  id: 'string',
  stock: 'number',
  discountPrice: 'number',
  reference: 'string',
  createdAt: 'Date',
  category: 'string'
}
