import React, { type TextareaHTMLAttributes } from 'react'
import { type Icon } from 'phosphor-react'

import { Container } from './styles'
import { Label } from '../Label'

type TextareaProps = TextareaHTMLAttributes<HTMLElement> & {
  name: string
  label: string
  labelIcon?: Icon
  mandatory?: boolean
  error?: string
}

export const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  function Textarea(
    { name, label, labelIcon, mandatory, error, ...props }: TextareaProps,
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

        <textarea id={name} name={name} ref={forwardedRef} {...props} />
      </Container>
    )
  }
)
