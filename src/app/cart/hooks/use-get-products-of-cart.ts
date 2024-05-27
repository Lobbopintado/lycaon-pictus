'use client'
import { Product } from '@/consts/types'
import { db } from '@/services/config'
import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useGetProductsOfCart = () => {
  const [products, setProducts] = useState<Product[]>()
  const [reFetch, setReFetch] = useState(false)

  useEffect(() => {
    const ids: string[] = []

    JSON.parse(localStorage.getItem('cart') || '[]')
      .forEach((product: any) => {
        ids.push(product.id)
      });
    (async () => {
      const querySnapshot = await getDocs(query(collection(db, 'Products')))
      if (querySnapshot.empty) {
        toast.error('No hay productos')
        return
      }
      const ArrProducts: Product[] = []
      querySnapshot.forEach((doc) => {
        if (ids.includes(doc.id)) {
          ArrProducts.push({ ...doc.data(), id: doc.id } as Product)
        }
      })
      setProducts(ArrProducts)
    })()
  }, [reFetch])

  return { products, setReFetch }
}
