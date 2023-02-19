import { useState } from 'react'
import { Plus } from 'phosphor-react'
import produce from 'immer'

import { QuestionCard } from '../../../../components/QuestionCard'
import { QuestionListContext } from '../../../../contexts/QuestionListContext'
import { StepControlBar } from '../../../../components/StepControlBar'

import { Content } from '../styles'
import { Button } from '../../../../components/Button'
import { QuestionModal } from '../../../../components/QuestionModal'

interface QuestionsStepProps {
  onSubmitted: () => void
}

export function QuestionsStep({ onSubmitted }: QuestionsStepProps) {
  const [isQuestionEditModalOpen, setIsQuestionEditModalOpen] = useState(false)
  const [questionEditModalId, setQuestionEditModalId] = useState('')

  const [questions, setQuestions] = useState([
    {
      id: '1'
    },
    {
      id: '2'
    },
    {
      id: '3'
    },
    {
      id: '4'
    },
    {
      id: '5'
    }
  ])

  function handleQuestionEditRequest(id: string) {
    setQuestionEditModalId(id)
    setIsQuestionEditModalOpen(true)
  }

  function handleQuestionDeleteRequest(id: string) {
    console.log(id)
  }

  function move(from: number, to: number) {
    setQuestions(produce(questions, draft => {
      const dragged = draft[from]

      draft.splice(from, 1)
      draft.splice(to, 0, dragged)
    }))
  }

  return (
    <div>
      <StepControlBar
        title={`${questions.length} questions created`}
        description='Create questions and define their positions'
        buttons={<>
          <QuestionModal
            type='creation'
            trigger={
              <Button
                icon={Plus}
                color='blue'
                variant='outlined'
              >
                New question
              </Button>
            }
          />

          <Button color='blue' type='submit'>Create</Button>
        </>}
      />

      <Content>
        <QuestionListContext.Provider value={{ questions, move }}>
          {questions.map((question, index) => (
            <QuestionCard
              key={question.id}
              id={question.id}
              index={index}
              onEditRequest={handleQuestionEditRequest}
              onDeleteRequest={handleQuestionDeleteRequest}
            />
          ))}
        </QuestionListContext.Provider>

        <QuestionModal
          type='edition'
          id={questionEditModalId}
          open={isQuestionEditModalOpen}
          onOpenChange={setIsQuestionEditModalOpen}
        />
      </Content>
    </div>
  )
}
