import { db } from '@/services/config'
import { doc, getDoc, increment, updateDoc } from 'firebase/firestore'
import { useEffect, useState } from 'react'

export type Ref = {
  ref: number
}
export const useGetRef = () => {
  const [ref, setRef] = useState<Ref>({} as Ref)

  useEffect(() => {
    (async () => {
      const docRef = doc(db, 'Ref', 'GyzYMIKayrkHoVXsnG0P')
      await updateDoc(docRef, {
        ref: increment(1)
      })
      const res = await getDoc(docRef)
      setRef(res.data() as Ref)
    })()
  }, [])

  return { ref }
}
