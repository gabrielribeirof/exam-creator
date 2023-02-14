import { type ReactNode } from 'react'
import { type Icon, IconContext } from 'phosphor-react'

import {
  Container,
  BaseContent,
  BaseHeader,
  BaseHeaderContent,
  BaseHeaderTitle,
  BaseHeaderButton,
  BaseHeaderProgressBar,
  BaseHeaderProgressBarStep,
  BaseHeaderProgressBarStepCircle,
  BaseContentBar,
  BaseContentBarTitle,
  BaseContentBarButtons
} from './styles'

interface BaseProps {
  header: {
    title: string
    icon: Icon
    color?: 'blue'
    buttons?: ReactNode
    progressBar?: Array<{ name: string, active: boolean }>
  }
  content?: {
    smallerWidth?: boolean
    controlBar?: {
      name: string
      description: string
      buttons?: ReactNode
    }
  }
  children: ReactNode
}

export function Base({ header, content, children }: BaseProps) {
  return (
    <Container>
      <BaseHeader color={header.color}>
        <BaseHeaderContent>
          <BaseHeaderTitle>
            <IconContext.Provider value={{ size: 32, weight: 'bold' }}>
              <header.icon />
            </IconContext.Provider>

            <h1>{header.title}</h1>
          </BaseHeaderTitle>

          {header.buttons && (
            <BaseHeaderButton>
              {header.buttons}
            </BaseHeaderButton>
          )}

          {header.progressBar && (
            <BaseHeaderProgressBar>
              {header.progressBar.map((step, index) => (
                <BaseHeaderProgressBarStep key={`${step.name}-${index}`} active={step.active}>
                  <BaseHeaderProgressBarStepCircle>
                    {index + 1}
                  </BaseHeaderProgressBarStepCircle>

                  {step.name}
                </BaseHeaderProgressBarStep>
              ))}
            </BaseHeaderProgressBar>
          )}
        </BaseHeaderContent>
      </BaseHeader>

      <BaseContent smallerWidth={content?.smallerWidth}>
        {content?.controlBar && (
          <BaseContentBar>
            <BaseContentBarTitle>
              <h2>{content.controlBar.name}</h2>
              <span>{content.controlBar.description}</span>
            </BaseContentBarTitle>

            {content.controlBar.buttons && (
              <BaseContentBarButtons>
                {content.controlBar.buttons}
              </BaseContentBarButtons>
            )}
          </BaseContentBar>
        )}

        {children}
      </BaseContent>
    </Container>
  )
}
