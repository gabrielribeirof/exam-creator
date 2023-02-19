import { type ReactNode } from 'react'
import { type Icon, IconContext } from 'phosphor-react'

import {
  Container,
  Header,
  HeaderContent,
  HeaderTitle,
  HeaderButton,
  HeaderProgressBar,
  HeaderProgressBarStep,
  HeaderProgressBarStepCircle,
  Content
} from './styles'

interface DashboardBaseProps {
  header: {
    title: string
    icon: Icon
    color?: 'blue'
    buttons?: ReactNode
    progressBar?: Array<{ name: string, active: boolean }>
  }
  content?: {
    smallerWidth?: boolean
  }
  children: ReactNode
}

export function DashboardBase({ header, content, children }: DashboardBaseProps) {
  return (
    <Container>
      <Header color={header.color}>
        <HeaderContent>
          <HeaderTitle>
            <IconContext.Provider value={{ size: 32, weight: 'bold' }}>
              <header.icon />
            </IconContext.Provider>

            <h1>{header.title}</h1>
          </HeaderTitle>

          {header.buttons && (
            <HeaderButton>
              {header.buttons}
            </HeaderButton>
          )}

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

      <Content smallerWidth={content?.smallerWidth}>
        {children}
      </Content>
    </Container>
  )
}
