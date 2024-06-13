'use client'
import { Sales } from '@/consts/types'
import { db } from '@/services/config'
import { collection, getDocs, orderBy, query } from 'firebase/firestore'
import { useEffect, useState } from 'react'
import toast from 'react-hot-toast'

export const useGetSales = () => {
  const [sales, setSales] = useState<Sales[]>()

  useEffect(() => {
    (async () => {
      const querySnapshot = await getDocs(query(collection(db, 'Sales'), orderBy('ref', 'desc')))
      if (querySnapshot.empty) {
        toast.error('No hay Ventas actualmente')
        return
      }
      const ArrSales: Sales[] = []
      querySnapshot.forEach((doc) => {
        ArrSales.push({ ...doc.data(), id: doc.id } as Sales)
      })
      setSales(ArrSales)
    })()
  }, [])

  return { sales }
}
