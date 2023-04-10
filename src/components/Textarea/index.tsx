import { useEffect, useRef, type TextareaHTMLAttributes } from 'react'
import { useField } from '@unform/core'

import { Container } from './styles'

type TextareaProps = TextareaHTMLAttributes<HTMLElement> & {
  name: string
  label: string
  mandatory?: boolean
}

export function Textarea({ name, label, mandatory, ...props }: TextareaProps) {
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: textareaRef.current,
      path: 'value'
    })
  }, [fieldName, textareaRef])

  return (
    <Container>
      <label htmlFor={name}>
        {label}

        {mandatory && <span className="mandatory-indicator">*</span>}

        {error && `- ${error}`}
      </label>

      <textarea
        ref={textareaRef}
        id={name}
        name={name}
        defaultValue={defaultValue}
        {...props}
      />
    </Container>
  )
}
