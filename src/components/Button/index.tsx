import React, { type ButtonHTMLAttributes } from 'react'
import { IconContext, type Icon } from 'phosphor-react'

import { Container, ButtonIcon } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'blue' | 'red' | 'white'
  variant?: 'outlined'
  icon?: Icon
}

export function Button({ children, icon, ...props }: ButtonProps) {
  const Icon = icon

  return (
    <Container {...props}>
      {Icon && <IconContext.Provider value={{ size: 16, weight: 'bold' }}>
        <ButtonIcon>
          <Icon />
        </ButtonIcon>
      </IconContext.Provider>}

      {children}
    </Container>
  )
}
