import { useContext } from 'react'
import { QuestionListContext } from '../contexts/QuestionListContext'

export function useQuestionList() {
  const data = useContext(QuestionListContext)

  if (!data) {
    throw new Error('useQuestionList must be used within a QuestionListContext')
  }

  return data
}
