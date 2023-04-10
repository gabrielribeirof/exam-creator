import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

import { AuthenticationProvider } from './contexts/Authentication'

import { Routes } from './routes'
import { GlobalStyle } from './styles/GlobalStyle'

export function App() {
  return (
    <AuthenticationProvider>
      <DndProvider backend={HTML5Backend}>
        <Routes />
        <GlobalStyle />
      </DndProvider>
    </AuthenticationProvider>
  )
}
