import { useEffect, useRef, type InputHTMLAttributes } from 'react'
import { type Icon } from 'phosphor-react'
import { useField } from '@unform/core'

import { Container } from './styles'
import { Label } from '../Label'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  labelIcon?: Icon
  mandatory?: boolean
}

export function Input({
  name,
  label,
  labelIcon,
  mandatory,
  ...props
}: InputProps) {
  const inputRef = useRef<HTMLInputElement>(null)

  const { fieldName, registerField, defaultValue, error } = useField(name)

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value'
    })
  }, [fieldName, inputRef])

  return (
    <Container>
      {label && (
        <Label
          text={label}
          icon={labelIcon}
          error={error}
          mandatory={mandatory}
        />
      )}

      <input
        ref={inputRef}
        id={name}
        name={name}
        defaultValue={defaultValue}
        {...props}
      />
    </Container>
  )
}
