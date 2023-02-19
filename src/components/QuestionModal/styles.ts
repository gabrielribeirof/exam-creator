import styled from 'styled-components'
import { DialogContent, DialogTitle, DialogClose } from '@radix-ui/react-dialog'

export const Content = styled(DialogContent)`
  background-color: #FFF;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  overflow: scroll;
`

export const Header = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;
`

export const HeaderCloseButton = styled(DialogClose)`
  height: fit-content;
  padding: 6px;
  background: none;
  border: none;
  display: flex;
  align-items: center;
  cursor: pointer;
`

export const HeaderTitle = styled(DialogTitle)`
  margin: 0;
  display: flex;
  align-items: center;
`

export const HeaderActions = styled.div``

export const Body = styled.div`
  max-width: 900px;
  margin: 0 auto;
  padding: 0 20px;

  > * {
    margin-bottom: 20px;
  }
`

export const ChoicesInputControlBar = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  label {
    margin: 0;
    flex-wrap: wrap;
    flex: 1;
  }

  @media(max-width: 960px) {
    flex-direction: column;
  }
`

export const ChoicesInputControlBarButtons = styled.div`
  display: flex;
  gap: 10px;
`
