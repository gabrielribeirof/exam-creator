import { useState } from 'react'
import { Exam } from 'phosphor-react'
import { useNavigate } from 'react-router-dom'

import { DashboardBase } from '../../../components/DashboardBase'

import { SettingStep } from './SettingStep'
import { QuestionsStep } from './QuestionsStep'

type STEPS = 'questions' | 'settings'

export function ExamCreation() {
  const navigate = useNavigate()

  const [step, setStep] = useState<STEPS>('settings')

  function handleSubmitted() {
    navigate('/dashboard/exams')
  }

  return (
    <DashboardBase
      header={{
        icon: Exam,
        title: 'Exam Creation',
        color: 'blue',
        progressBar: [
          {
            name: 'Settings',
            active: step === 'settings'
          },
          {
            name: 'Questions',
            active: step === 'questions'
          }
        ]
      }}
      content={{ smallerWidth: true }}
    >
      {step === 'settings' && (
        <SettingStep onSubmitted={() => setStep('questions')} />
      )}

      {step === 'questions' && <QuestionsStep onSubmitted={handleSubmitted} />}
    </DashboardBase>
  )
}
