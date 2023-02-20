import { type ReactNode } from 'react'
import { type Icon, IconContext } from 'phosphor-react'

import {
  Container,
  Header,
  HeaderContent,
  HeaderLine,
  HeaderTitle,
  HeaderButtons,
  HeaderProgressBar,
  HeaderProgressBarStep,
  HeaderProgressBarStepCircle,
  Content
} from './styles'

interface DashboardBaseProps {
  header: {
    title: string
    icon?: Icon
    color?: 'blue'
    buttons?: ReactNode
    progressBar?: Array<{ name: string, active: boolean }>
  }
  content?: {
    smallerWidth?: boolean
    biggerWidth?: boolean
  }
  children: ReactNode
}

export function DashboardBase({ header, content, children }: DashboardBaseProps) {
  return (
    <Container>
      <Header color={header.color}>
        <HeaderContent>
          <HeaderLine>
            <HeaderTitle>
              {header.icon && (
                <IconContext.Provider value={{ size: 32, weight: 'bold' }}>
                  <header.icon />
                </IconContext.Provider>
              )}

              <h1>{header.title}</h1>
            </HeaderTitle>

            {header.buttons && (
              <HeaderButtons>
                {header.buttons}
              </HeaderButtons>
            )}
          </HeaderLine>

          {header.progressBar && (
            <HeaderProgressBar>
              {header.progressBar.map((step, index) => (
                <HeaderProgressBarStep key={`${step.name}-${index}`} active={step.active}>
                  <HeaderProgressBarStepCircle>
                    {index + 1}
                  </HeaderProgressBarStepCircle>

                  {step.name}
                </HeaderProgressBarStep>
              ))}
            </HeaderProgressBar>
          )}
        </HeaderContent>
      </Header>

      <Content smallerWidth={content?.smallerWidth} biggerWidth={content?.biggerWidth}>
        {children}
      </Content>
    </Container>
  )
}
