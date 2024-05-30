'use client'
import { Client, Sale } from '@/consts/types'
import { db } from '@/services/config'
import { addDoc, collection } from 'firebase/firestore'

export const useSetSale = () => {
  const setSale = async (sale: Sale, client: Client) => {
    await addDoc(collection(db, 'Sales'), {
      sale: {
        ...sale
      },
      client: {
        ...client
      }
    })
  }

  return { setSale }
}
