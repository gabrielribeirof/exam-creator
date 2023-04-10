import { type ReactNode } from 'react'
import { ButtonsContainer, Container, Title } from './styles'

interface ContentBarProps {
  title: string
  description: string
  buttons: ReactNode
}

export function StepControlBar({
  title,
  description,
  buttons
}: ContentBarProps) {
  return (
    <Container>
      <Title>
        <h2>{title}</h2>
        <span>{description}</span>
      </Title>

      <ButtonsContainer>{buttons}</ButtonsContainer>
    </Container>
  )
}
