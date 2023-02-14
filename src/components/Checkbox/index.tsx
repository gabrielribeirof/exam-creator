import { Check } from 'phosphor-react'
import { Container, CheckboxContainer, Indicator } from './styles'

interface CheckboxProps {
  name: string
  label?: string
}

export function Checkbox({ name, label }: CheckboxProps) {
  return (
    <Container>
      <CheckboxContainer id={name}>
        <Indicator>
          <Check weight='bold' />
        </Indicator>
      </CheckboxContainer>

      {label && (
        <label htmlFor={name}>{label}</label>
      )}
    </Container>
  )
}
