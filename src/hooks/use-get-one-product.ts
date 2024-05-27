import { Product } from '@/consts/types'
import { db } from '@/services/config'
import { doc, getDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export const useGetOneProduct = (id: string) => {
  const [product, setProduct] = useState<Product>()
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'Products', id)
      const res = await getDoc(docRef)
      setProduct(res.data() as Product)
      setLoading(false)
    })()
  }, [id])

  return { product, loading }
}
