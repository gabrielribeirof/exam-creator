import { useContext } from 'react'
import { AuthenticationContext } from '../contexts/Authentication'

export function useAuthentication() {
  const data = useContext(AuthenticationContext)

  if (!data) {
    throw new Error(
      'useAuthentication must be used within a AuthenticationProvider'
    )
  }

  return data
}
