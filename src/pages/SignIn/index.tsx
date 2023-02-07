import { Logo } from '../../components/Logo'

import { Container, Tab, Title, MainContent } from './styles'

export function SignIn() {
  return (
    <Container>
      <Tab>
        <div>
          <Logo />
          <Title>
            Digital<br />
            platform<br />
            for creating<br />
            <span className="last-word">exams</span>
          </Title>
        </div>
      </Tab>
      <MainContent>m</MainContent>
    </Container>
  )
}
