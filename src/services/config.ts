// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyDe-Jxerv9NGDnuEAfK5MCnjUxMONM6Tjg',
  authDomain: 'lycaon-pictus.firebaseapp.com',
  projectId: 'lycaon-pictus',
  storageBucket: 'lycaon-pictus.appspot.com',
  messagingSenderId: '416390561680',
  appId: '1:416390561680:web:9e4ba378a0082a35c37d15'
}
export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)
