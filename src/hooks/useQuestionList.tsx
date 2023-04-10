import { useContext } from 'react'
import { ListContext } from '../contexts/ListContext'

export function useList() {
  const data = useContext(ListContext)

  if (!data) {
    throw new Error('useList must be used within a ListContext')
  }

  return data
}
