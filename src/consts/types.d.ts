import { Timestamp } from 'firebase/firestore'

export type Category = 'pentilo' | 'amilo' | 'propilo' | 'mixtos' | 'multi gel remover' | '1.4-butandiol'

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
    category: Category
    stars: number
    ml: number
    featured: number
  }

export type Product = {
  title: string
  image: {
    name: string
    url: string
  },
  price: number
  description: string
  id?: string
  stock: number
  discountPrice: number
  reference: string
  createdAt: Date
  category: Category
  stars: number
  ml:number
  featured: number
}

export type Sale = [
  {
    description: string
    price: number
    discountPrice: number
    reference: string
    stock: number
    image: string
    id: string
    title: string
    quantity: number
  }
]

export type Client = {
  name: string
  email: string
  phone: number
  address: string
  city: string
  population: string
  dni: string
  cp: number
}

export type Sales = {
  sale: Sale
  client: Client
  ref: number
  date: Timestamp
  id: string
  total: string
}
