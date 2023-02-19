import React, { type ButtonHTMLAttributes } from 'react'
import { IconContext, type Icon } from 'phosphor-react'

import { Container, ButtonIcon } from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  color?: 'blue' | 'red' | 'white'
  variant?: 'outlined'
  icon?: Icon
  isLoading?: boolean
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  function Button({ icon, children, ...props }, forwardedRef) {
    const Icon = icon

    return (
      <Container {...props} ref={forwardedRef}>
        {Icon && (
          <ButtonIcon>
            <IconContext.Provider value={{ size: 16, weight: 'bold' }}>
              <Icon />
            </IconContext.Provider>
          </ButtonIcon>
        )}

        {children}
      </Container>
    )
  }
)
