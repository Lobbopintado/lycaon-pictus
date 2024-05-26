import { Product } from '@/consts/types'
import { db } from '@/services/config'
import { doc, updateDoc } from 'firebase/firestore'

export const updateProduct = async (product: Product, id: string) => {
  const productRef = doc(db, 'Products', id)
  await updateDoc(productRef, {
    title: product.title,
    image: {
      name: product.image.name,
      url: product.image.url
    },
    price: product.price,
    description: product.description,
    stock: product.stock,
    discountPrice: product.discountPrice,
    reference: product.reference,
    createdAt: product.createdAt,
    category: product.category,
    stars: product.stars,
    ml: product.ml,
    featured: product.featured
  })
}
