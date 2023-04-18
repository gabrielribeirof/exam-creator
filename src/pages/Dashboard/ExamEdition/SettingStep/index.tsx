import { useState } from 'react'
import { ArrowRight, Calendar, Watch } from 'phosphor-react'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import {
  type ExamSettingFormData,
  examSettingFormSchema
} from '../../../../lib/schemas/examSettingFormSchema'

import { FormContent } from '../../../../components/Form'
import { SchedulingGroup } from '../../ExamCreation/SettingStep/styles'

import { StepControlBar } from '../../../../components/StepControlBar'
import { Button } from '../../../../components/Button'
import { Label } from '../../../../components/Label'
import { Input } from '../../../../components/Input'
import { Textarea } from '../../../../components/Textarea'

import { CheckboxGroupContainer } from '../../../../components/CheckboxGroup/styles'
import { Checkbox } from '../../../../components/Checkbox'

interface SettingStepProps {
  onSubmitted: () => void
}

const delay = async () => await new Promise(resolve => setTimeout(resolve, 300))

export function SettingStep({ onSubmitted }: SettingStepProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<ExamSettingFormData>({
    resolver: zodResolver(examSettingFormSchema)
  })

  const [loading, setLoading] = useState(false)

  async function onSubmit(data: ExamSettingFormData) {
    console.log(data)
    setLoading(true)

    await delay()

    onSubmitted()
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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

      <FormContent>
        <Input
          label="Setting Title"
          error={errors.title?.message}
          mandatory
          {...register('title')}
        />

        <Textarea
          label="Guidelines"
          error={errors.guidelines?.message}
          mandatory
          {...register('guidelines')}
        />

        <CheckboxGroupContainer>
          <Label
            text="Which classes will take the exam?"
            error={errors.classes?.message?.message}
            mandatory
          />

          {[
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
          ].map(checkbox => (
            <Controller
              key={checkbox.id}
              name={`classes.${checkbox.id}`}
              control={control}
              defaultValue={checkbox.checked}
              render={({ field: { onChange } }) => (
                <Checkbox
                  id={checkbox.id}
                  label={checkbox.label}
                  checked={checkbox.checked}
                  onCheckedChange={checked => onChange(checked === true)}
                />
              )}
            />
          ))}
        </CheckboxGroupContainer>

        <SchedulingGroup>
          <Label text="Scheduling" />

          <Input
            label="Date"
            labelIcon={Calendar}
            type="date"
            error={errors.date?.message}
            mandatory
            {...register('date')}
          />

          <Input
            label="Opening Time"
            labelIcon={Watch}
            type="time"
            error={errors.opening_time?.message}
            mandatory
            {...register('opening_time')}
          />

          <Input
            label="Closing Time"
            labelIcon={Watch}
            type="time"
            error={errors.closing_time?.message}
            mandatory
            {...register('closing_time')}
          />
        </SchedulingGroup>
      </FormContent>
    </form>
  )
}
