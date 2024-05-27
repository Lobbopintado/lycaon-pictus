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
