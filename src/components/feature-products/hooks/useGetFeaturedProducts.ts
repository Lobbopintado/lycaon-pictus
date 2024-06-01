import { Product } from '@/consts/types'
import { db } from '@/services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export const useGetFeaturedProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const q = query(collection(db, 'Products'), where('featured', '==', 1))
      const querySnapshot = await getDocs(q)
      if (querySnapshot.empty) {
        setLoading(false)
        return
      }
      const ArrProducts: Product[] = []
      querySnapshot.forEach((doc) => {
        ArrProducts.push({ ...doc.data(), id: doc.id } as Product)
      })
      setProducts(ArrProducts)
      setLoading(false)
    })()
  }, [])

  return { products, loading }
}
