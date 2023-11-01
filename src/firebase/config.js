import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: 'AIzaSyALx8RfOkMABgyPcPH0iXj7lnu_NezWapU',
  authDomain: 'datamed-13891.firebaseapp.com',
  databaseURL: 'https://datamed-13891-default-rtdb.firebaseio.com',
  projectId: 'datamed-13891',
  storageBucket: 'datamed-13891.appspot.com',
  messagingSenderId: '135159147198',
  appId: '1:135159147198:web:dcd503d464c1019f1a0cef'
}
// init firebase
initializeApp(firebaseConfig)

// init services
const db = getFirestore()
const auth = getAuth()
const storage = getStorage()

export { db, auth, storage }
