import { useRef, useState } from 'react'
import { ArrowRight, Calendar, Watch } from 'phosphor-react'

import { Form } from '@unform/web'
import { type FormHandles, type SubmitHandler } from '@unform/core'

import { Content } from '../../ExamCreation/styles'
import { SchedulingGroup } from '../../ExamCreation/SettingStep/styles'

import { Input } from '../../../../components/Input'
import { Button } from '../../../../components/Button'
import { Textarea } from '../../../../components/Textarea'
import { CheckboxGroup } from '../../../../components/CheckboxGroup'
import { StepControlBar } from '../../../../components/StepControlBar'
import { Label } from '../../../../components/Label'

interface SettingStepProps {
  onSubmitted: () => void
}

interface FormData {
  title: string
  guidelines: string
  classes: string[]
  date: string
  opening_time: string
  closing_time: string
}

const delay = async () => await new Promise(resolve => setTimeout(resolve, 300))

export function SettingStep({ onSubmitted }: SettingStepProps) {
  const formRef = useRef<FormHandles>(null)

  const [loading, setLoading] = useState(false)

  async function handleSubmit(data: SubmitHandler<FormData>) {
    console.log(data)
    setLoading(true)

    await delay()

    onSubmitted()
  }

  return (
    <Form
      onSubmit={handleSubmit}
      ref={formRef}
      initialData={{
        classes: [
          {
            id: 'C1',
            label: 'Analytic Geometry',
            checked: false
          },
          {
            id: 'C2',
            label: 'Analytic Geometry',
            checked: false
          }
        ]
      }}
    >
      <StepControlBar
        title="Settings"
        description="* Mandatory fields"
        buttons={
          <Button
            icon={ArrowRight}
            color="blue"
            type="submit"
            isLoading={loading}
          >
            Continue
          </Button>
        }
      />

      <Content>
        <Input name="title" label="Setting Title" mandatory />

        <Textarea name="guidelines" label="Guidelines" mandatory />

        <CheckboxGroup name="classes" />

        <SchedulingGroup>
          <Label text="Scheduling" mandatory />

          <Input label="Date" labelIcon={Calendar} type="date" name="date" />

          <Input
            label="Opening Time"
            labelIcon={Watch}
            type="time"
            name="opening_time"
          />
          <Input
            label="Closing Time"
            labelIcon={Watch}
            type="time"
            name="closing_time"
          />
        </SchedulingGroup>
      </Content>
    </Form>
  )
}
