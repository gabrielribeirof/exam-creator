import { IconContext, type Icon } from 'phosphor-react'
import { Container } from './styles'

interface LabelProps {
  text: string
  icon?: Icon
  mandatory?: boolean
  error?: string
}

export function Label({ text, icon, mandatory, error }: LabelProps) {
  const Icon = icon

  return (
    <Container error={!!error}>
      {Icon && (
        <IconContext.Provider value={{ size: 16 }} >
          <Icon />
        </IconContext.Provider>
      )}

      {text}

      {!error && mandatory && <span className='mandatory-indicator'>*</span>}

      {error && <span className='error-text'>- {error}</span>}
    </Container>
  )
}
