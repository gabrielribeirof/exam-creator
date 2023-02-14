import { type TextareaHTMLAttributes } from 'react'
import { Container } from './styles'

type TextareaProps = TextareaHTMLAttributes<HTMLElement> & {
  name: string
  label: string
  mandatory?: boolean
}

export function Textarea({ name, label, mandatory, ...props }: TextareaProps) {
  return (
    <Container>
      <label htmlFor={name}>
        {label}
        {mandatory && <span className='mandatory-indicator'>*</span>}
      </label>
      <textarea id={name} name={name} {...props} />
    </Container>
  )
}
