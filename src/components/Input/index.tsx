import React, { type InputHTMLAttributes } from 'react'
import { type Icon } from 'phosphor-react'

import { Container } from './styles'
import { Label } from '../Label'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  labelIcon?: Icon
  mandatory?: boolean
  error?: string
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  function Input(
    { name, label, labelIcon, mandatory, error, ...props }: InputProps,
    forwardedRef
  ) {
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

        <input id={name} name={name} ref={forwardedRef} {...props} />
      </Container>
    )
  }
)
