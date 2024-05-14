// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyAyHryBtGhVUz9X4NmgD1DYrdunonEN0D4',
  authDomain: 'limpieza-83abd.firebaseapp.com',
  projectId: 'limpieza-83abd',
  storageBucket: 'limpieza-83abd.appspot.com',
  messagingSenderId: '69913813678',
  appId: '1:69913813678:web:5ff5c7a68e7606b2de833f'
}
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
