import { Product } from '@/consts/types'
import { db } from '@/services/config'
import { collection, getDocs, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useGetProducts = () => {
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [reFetch, setReFetch] = useState(false)

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(query(collection(db, 'Products')))
      if (querySnapshot.empty) {
        toast.error('No hay productos')
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
  }, [reFetch])

  return { products, loading, setReFetch }
}
