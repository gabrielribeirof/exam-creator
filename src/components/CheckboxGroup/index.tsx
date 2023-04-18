import { useRef } from 'react'
import {
  type Control,
  Controller,
  type FieldValues,
  type FieldError
} from 'react-hook-form'

import { Check } from 'phosphor-react'

import { Label } from '../Label'
import {
  Checkbox,
  CheckboxBox,
  CheckboxIndicator,
  CheckboxGroupContainer
} from './styles'

interface CheckboxProps {
  name: string
  error?: FieldError
  checkboxs: Array<{
    id: string
    label: string
    checked: boolean
  }>
  control: Control<FieldValues>
}

export function CheckboxGroup({
  name,
  error,
  checkboxs,
  control
}: CheckboxProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  return (
    <CheckboxGroupContainer ref={containerRef}>
      <Label
        text="Which classes will take the exam?"
        error={error?.message}
        mandatory
      />

      {checkboxs.map((checkbox, index) => (
        <Controller
          key={checkbox.id}
          name={`${name}[${index}]`}
          control={control}
          render={({ field: { onChange } }) => (
            <Checkbox>
              <CheckboxBox
                id={checkbox.id}
                defaultChecked={checkbox.checked}
                onCheckedChange={checked =>
                  onChange(checked === true && checkbox.id)
                }
              >
                <CheckboxIndicator>
                  <Check weight="bold" />
                </CheckboxIndicator>
              </CheckboxBox>

              <label htmlFor={checkbox.id}>{checkbox.label}</label>
            </Checkbox>
          )}
        />
      ))}
    </CheckboxGroupContainer>
  )
}
