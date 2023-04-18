import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Exam } from 'phosphor-react'

import { DashboardBase } from '../../../components/DashboardBase'

import { SettingStep } from './SettingStep'
import { QuestionsStep } from './QuestionsStep'

type STEPS = 'questions' | 'settings'

export function ExamEdition() {
  const navigate = useNavigate()
  const { id } = useParams()

  const [step, setStep] = useState<STEPS>('settings')

  useEffect(() => {
    if (!id) alert('Exam not found')
  }, [id])

  return (
    <DashboardBase
      header={{
        icon: Exam,
        title: 'Exam Edition',
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

      {step === 'questions' && (
        <QuestionsStep onSubmitted={() => navigate('/dashboard/exams')} />
      )}
    </DashboardBase>
  )
}
