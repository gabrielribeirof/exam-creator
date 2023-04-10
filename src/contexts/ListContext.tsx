import { createContext } from 'react'

interface Item {
  id: string
}

interface ListContextProps {
  items: Item[]
  move: (from: number, to: number) => void
}

export const ListContext = createContext({} as ListContextProps)
