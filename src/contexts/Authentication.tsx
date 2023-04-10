import { type ReactNode, createContext, useState, useEffect } from 'react'

import { type FirebaseUser, auth } from '../services/firebase'
import {
  type UserCredential,
  signInWithPopup,
  GoogleAuthProvider
} from 'firebase/auth'

interface User {
  id: string
  name: string
  email: string | null
  avatar: string
}

interface AuthenticationContextData {
  user: User | null
  signed: boolean
  signInWithGoogle: () => Promise<UserCredential>
  signOut: () => Promise<void>
  firstChecked: boolean
}

interface AuthenticationProviderProps {
  children: ReactNode
}

export const AuthenticationContext = createContext(
  {} as AuthenticationContextData
)

export function AuthenticationProvider({
  children
}: AuthenticationProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [firstChecked, setFirstChecked] = useState(false)

  function setUserState(user: FirebaseUser | null) {
    if (user != null) {
      const { uid, displayName, email, photoURL } = user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google account')
      }

      setUser({
        id: uid,
        name: displayName,
        email,
        avatar: photoURL
      })
    }
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      user && setUserState(user)

      !firstChecked && setFirstChecked(true)
    })

    return () => {
      unsubscribe()
    }
  }, [])

  async function signInWithGoogle() {
    const provider = new GoogleAuthProvider()

    return await signInWithPopup(auth, provider)
  }

  async function signOut() {
    setUser(null)
    await auth.signOut()
  }

  return (
    <AuthenticationContext.Provider
      value={{
        user,
        signed: !!user,
        signInWithGoogle,
        signOut,
        firstChecked
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  )
}
