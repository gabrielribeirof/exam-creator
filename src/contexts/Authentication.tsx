import { type ReactNode, createContext, useState } from 'react'

import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth, type FirebaseUser } from '../services/firebase'

interface User {
  id: string
  name: string
  avatar: string
}

interface AuthenticationContextData {
  user: User | null
  signInWithGoogle: () => Promise<void>
  signOut: () => Promise<void>
  isLoading: boolean
}

interface AuthenticationProviderProps {
  children: ReactNode
}

export const AuthenticationContext = createContext({} as AuthenticationContextData)

export function AuthenticationProvider({ children }: AuthenticationProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  function setUserState(user: FirebaseUser | null) {
    if (user != null) {
      const { uid, displayName, photoURL } = user

      if (!displayName || !photoURL) {
        throw new Error('Missing information from Google account')
      }

      setUser({
        id: uid,
        name: displayName,
        avatar: photoURL
      })
    }
  }

  async function signInWithGoogle() {
    setIsLoading(true)

    const provider = new GoogleAuthProvider()

    try {
      const result = await signInWithPopup(auth, provider)

      setUserState(result.user)
    } catch (error) {
      console.log(error)
    }

    setIsLoading(false)
  }

  async function signOut() {
    await auth.signOut()
    setUser(null)
  }

  return (
    <AuthenticationContext.Provider value={{
      user,
      signInWithGoogle,
      signOut,
      isLoading
    }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
