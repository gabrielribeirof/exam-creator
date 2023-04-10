import styled, { keyframes } from 'styled-components'
import {
  Root,
  Viewport,
  Title,
  Description,
  Close
} from '@radix-ui/react-toast'

export const ToastViewport = styled(Viewport)`
  width: 400px;
  max-width: 100vw;
  margin: 0;
  padding: 25px;

  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 10000;

  display: flex;
  flex-direction: column;

  list-style: none;
  outline: none;
`

const slideIn = keyframes`
  from {
    transform: translateX(100%);
  }
  to {
    transform: translateX(0);
  }
`

const hide = keyframes`
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
`

export const ToastCloseButton = styled(Close)`
  width: 20px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 50%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(-20%, -20%);

  display: flex;
  justify-content: center;
  align-items: center;

  opacity: 0;
  transition: opacity 200ms;

  background-color: rgba(255, 255, 255, 1);
  backdrop-filter: blur(15px) saturate(86%);
  box-shadow: 0 0 20px rgb(0 0 0 / 20%);
  cursor: pointer;
  color: #202020;
`

export const ToastRoot = styled(Root)`
  padding: 20px;
  border-radius: 16px;
  background-color: hsla(0, 0%, 100%, 0.3);
  backdrop-filter: blur(15px) saturate(86%);
  box-shadow: 0 0 30px rgb(0 0 0 / 20%);

  &[data-state='open'] {
    animation: ${slideIn} 150ms cubic-bezier(0.16, 1, 0.3, 1);
  }

  &[data-state='closed'] {
    animation: ${hide} 100ms ease-in;
  }

  &:hover ${ToastCloseButton} {
    opacity: 1;
  }
`

export const ToastTitle = styled(Title)`
  margin-bottom: 3px;
  font-size: 14px;
  font-weight: bold;
`

export const ToastDescription = styled(Description)`
  font-size: 14px;
`
