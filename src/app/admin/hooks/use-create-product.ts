import { createProduct } from '@/consts/types'
import { db, storage } from '@/services/config'
import { addDoc, collection } from 'firebase/firestore'
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import toast from 'react-hot-toast'

export const useCreateProduct = () => {
  const createProduct = async (product: createProduct) => {
    const storageRef = ref(storage, 'images/' + product.image.name)
    const uploadTask = uploadBytesResumable(storageRef, product.image)

    uploadTask.on('state_changed',
      (snapshot) => {
        switch (snapshot.state) {
          case 'paused':
            toast.error('La subida del archivo fue pausada')
            break
          case 'running':
            toast.loading('Subiendo archivo...', { duration: 1000 })
            break
        }
      },
      (error) => {
        switch (error.code) {
          case 'storage/unauthorized':
            toast.error('No tienes permisos para subir archivos')
            break
          case 'storage/canceled':
            toast.error('La subida del archivo fue cancelada')
            break
          case 'storage/unknown':
            toast.error('Ocurrió un error desconocido al subir el archivo')
            break
        }
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
          await addDoc(collection(db, 'Products'), {
            title: product.title,
            image: {
              name: product.image.name,
              url: downloadURL
            },
            price: product.price,
            description: product.description,
            stock: product.stock,
            discountPrice: product.discountPrice,
            reference: product.reference,
            createdAt: product.createdAt,
            category: product.category
          })
          toast.success('Producto creado con éxito')
        })
      }
    )
  }

  return { createProduct }
}
