'use client'
import { Client, Sale } from '@/consts/types'
import { db } from '@/services/config'
import { addDoc, collection, doc, getDoc, increment, updateDoc } from 'firebase/firestore'
import { Ref } from './use-get-total-of-sales'

export const useSetSale = async () => {
  const docRef = doc(db, 'Ref', 'GyzYMIKayrkHoVXsnG0P')
  await updateDoc(docRef, {
    ref: increment(1)
  })
  const res = await getDoc(docRef)
  const setSale = async (sale: Sale, client: Client, ref: Ref) => {
    await addDoc(collection(db, 'Sales'), {
      sale: {
        ...sale
      },
      client: {
        ...client
      },
      ref: res.data()?.ref,
      date: new Date()
    })
  }

  return { setSale }
}
