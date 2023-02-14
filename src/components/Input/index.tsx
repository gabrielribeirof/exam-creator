import { type InputHTMLAttributes } from 'react'
import { type Icon, IconContext } from 'phosphor-react'

import { Container } from './styles'

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  name: string
  label?: string
  labelIcon?: Icon
  mandatory?: boolean
}

export function Input({ name, label, labelIcon, mandatory, ...props }: InputProps) {
  const LabelIcon = labelIcon

  return (
    <Container>
      {label && (
        <label htmlFor={name}>
          {LabelIcon && <IconContext.Provider value={{ size: 16 }} >
            <LabelIcon />
          </IconContext.Provider>}

          {label}

          {mandatory && <span className='mandatory-indicator'>*</span>}
        </label>
      )}

      <input id={name} name={name} {...props} />
    </Container>
  )
}
