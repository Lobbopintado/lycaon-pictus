'use client'
import { Product } from '@/consts/types'
import { db } from '@/services/config'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export const useGetProductsOfCart = () => {
  const [products, setProducts] = useState<Product[]>()

  useEffect(() => {
    const ids: string[] = []
    const products = localStorage.getItem('cart')
    if (products) {
      const parsedProducts = JSON.parse(products)
      parsedProducts.forEach((product: any) => {
        ids.push(product.id)
      })
    }
    (async () => {
      const productsArray: Product[] = []
      ids.forEach(async (id: string) => {
        const docRef = doc(db, 'Products', id)
        const res = await getDoc(docRef)
        productsArray.push(res.data() as Product)
      })
      setProducts(productsArray)
    })()
  }, [])

  return { products }
}
