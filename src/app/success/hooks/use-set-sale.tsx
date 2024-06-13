'use client'
import { Client, Sale } from '@/consts/types'
import { db } from '@/services/config'
import { addDoc, collection, doc, getDoc, increment, updateDoc } from 'firebase/firestore'

export const useSetSale = () => {
  const setSale = async (sale: Sale, client: Client, total: string, method: string) => {
    const docRef = doc(db, 'Ref', 'GyzYMIKayrkHoVXsnG0P')
    await updateDoc(docRef, {
      ref: increment(1)
    })
    const res = await getDoc(docRef)
    await addDoc(collection(db, 'Sales'), {
      sale: [
        ...sale
      ],
      client: {
        ...client
      },
      ref: res.data()?.ref,
      date: new Date(),
      total,
      method
    })
  }

  return { setSale }
}
