import { initializeApp } from 'firebase/app'

import { getAuth, type User } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

type FirebaseUser = User

const firebaseConfig = {
  apiKey: 'AIzaSyBX809afaqupAmI56jgETmBDIlmsinYSRs',
  authDomain: 'exam-creator-fd7ff.firebaseapp.com',
  projectId: 'exam-creator-fd7ff',
  storageBucket: 'exam-creator-fd7ff.appspot.com',
  messagingSenderId: '1075351013632',
  appId: '1:1075351013632:web:d80520121d118a4f780be5',
  measurementId: 'G-RYKEFEX01V'
}

initializeApp(firebaseConfig)

export { type FirebaseUser }
export const auth = getAuth()
export const database = getFirestore()
