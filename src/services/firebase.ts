import firebase from 'firebase/app'

import { getAuth, type UserInfo } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

type FirebaseUser = UserInfo

const firebaseConfig = {
  apiKey: 'AIzaSyBX809afaqupAmI56jgETmBDIlmsinYSRs',
  authDomain: 'exam-creator-fd7ff.firebaseapp.com',
  projectId: 'exam-creator-fd7ff',
  storageBucket: 'exam-creator-fd7ff.appspot.com',
  messagingSenderId: '1075351013632',
  appId: '1:1075351013632:web:d80520121d118a4f780be5',
  measurementId: 'G-RYKEFEX01V'
}

firebase.initializeApp(firebaseConfig)

export { firebase, type FirebaseUser }
export const auth = getAuth()
export const database = getFirestore()
