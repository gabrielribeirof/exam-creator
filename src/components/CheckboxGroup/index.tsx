import { type RefObject, useEffect, useRef } from 'react'
import { useField } from '@unform/core'

import { Check } from 'phosphor-react'

import { Label } from '../Label'
import { Checkbox, CheckboxBox, CheckboxIndicator, Container } from './styles'

interface CheckboxProps {
  name: string
}

export function CheckboxGroup({ name }: CheckboxProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: containerRef,
      getValue: (ref: RefObject<HTMLDivElement>) => {
        if (!ref.current) return undefined

        return Array.from(ref.current.getElementsByTagName('div')).map(value => ({
          id: value.getElementsByTagName('button')[0].id,
          label: value.getElementsByTagName('label')[0].innerText,
          checked: value.getElementsByTagName('input')[0].checked
        }))
      },
      setValue: ref => {
        ref.current = defaultValue
      },
      clearValue: ref => {
        ref.current = []
      }
    })
  }, [fieldName, containerRef])

  return (
    <Container ref={containerRef}>
      <Label text='Which classes will take the exam?' error={error} mandatory />

      {defaultValue.map((checkbox: { id: string, label: string, checked: boolean }) => (
        <Checkbox key={checkbox.id}>
          <CheckboxBox id={checkbox.id}>
            <CheckboxIndicator>
              <Check weight='bold' />
            </CheckboxIndicator>
          </CheckboxBox>

          <label htmlFor={checkbox.id}>
            {checkbox.label}
          </label>
        </Checkbox>
      ))}
    </Container>
  )
}
