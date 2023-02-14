import { Logo } from '../Logo'
import { UserIndicator } from './UserIndicator'

import { Container, Content, Nav, NavItem } from './styles'
import { useLocation } from 'react-router-dom'

export function Header() {
  const location = useLocation()

  return (
    <Container>
      <Content>
        <Logo />

        <Nav>
          <NavItem
            to='/dashboard/exams'
            active={location.pathname === '/dashboard/exams'}
          >
            Exams
          </NavItem>
          <NavItem
            to='/dashboard/classes'
            active={location.pathname === '/dashboard/classes'}
          >
            Classes
          </NavItem>
        </Nav>

        <UserIndicator />
      </Content>
    </Container>
  )
}
