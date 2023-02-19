import { createContext } from 'react'

interface Question {
  id: string
}

interface QuestionListContextProps {
  questions: Question[]
  move: (from: number, to: number) => void
}

export const QuestionListContext = createContext({} as QuestionListContextProps)
