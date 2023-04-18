import { type CheckedState } from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

import { Container, CheckboxBox, CheckboxIndicator } from './styles'

interface CheckboxProps {
  id: string
  label: string
  checked: boolean
  onCheckedChange?: (checked: CheckedState) => void
}

export function Checkbox({
  id,
  label,
  checked,
  onCheckedChange
}: CheckboxProps) {
  return (
    <Container>
      <CheckboxBox
        id={id}
        defaultChecked={checked}
        onCheckedChange={onCheckedChange}
      >
        <CheckboxIndicator>
          <Check weight="bold" />
        </CheckboxIndicator>
      </CheckboxBox>

      <label htmlFor={id}>{label}</label>
    </Container>
  )
}
