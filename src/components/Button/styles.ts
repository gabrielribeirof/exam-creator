import styled, { css, keyframes } from 'styled-components'

const rotate = keyframes`
  100% { 
    -webkit-transform: rotate(360deg); 
    transform:rotate(360deg); 
} 
`

interface ContainerProps {
  color?: 'blue' | 'red' | 'white'
  variant?: 'outlined'
  isLoading?: boolean
}

export const Container = styled.button<ContainerProps>`
  padding: 10px 30px;
  border: 2px solid transparent;
  border-radius: 16px;

  font-family: 'Inter';
  font-size: 16px;
  font-weight: bold;
  word-break: break-word;

  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 10px;

  transition: background-color 200ms;
  cursor: pointer;

  ${props =>
    props.color === 'blue' &&
    !props.variant &&
    css`
      background-color: #003bae;
      color: #fff;

      &:hover {
        background-color: #01308b;
      }
    `}

  ${props =>
    props.color === 'blue' &&
    props.variant === 'outlined' &&
    css`
      border: 2px solid #003bae;
      background-color: transparent;
      color: #003bae;

      &:hover {
        border: 2px solid #01308b;
        color: #01308b;
      }
    `}

  ${props =>
    props.color === 'red' &&
    props.variant !== 'outlined' &&
    css`
      background-color: #de4534;
      color: #fff;

      &:hover {
        background-color: #9f1101;
      }
    `}

  ${props =>
    props.color === 'red' &&
    props.variant === 'outlined' &&
    css`
      border: 2px solid #de4534;
      background-color: transparent;
      color: #de4534;

      &:hover {
        border: 2px solid #9f1101;
        color: #9f1101;
      }
    `}

  ${props =>
    props.color === 'white' &&
    props.variant !== 'outlined' &&
    css`
      background-color: #fff;
      color: #003bae;

      &:hover {
        background-color: #dddddd;
      }
    `}

  ${props =>
    props.color === 'white' &&
    props.variant === 'outlined' &&
    css`
      border: 2px solid #fff;
      background-color: transparent;
      color: #fff;

      &:hover {
        border: 2px solid #dddddd;
        color: #dddddd;
      }
    `}

  &::after {
    content: '';
    position: absolute;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(255, 255, 255) rgba(255, 255, 255, 0.25)
      rgb(255, 255, 255) rgb(255, 255, 255);
    border-image: initial;
    width: 12px;
    height: 12px;
    top: calc(50% - 8px);
    left: calc(50% - 8px);
    border-radius: 50%;
    animation: 0.75s linear 0s infinite normal none running ${rotate};
    will-change: transform, opacity;
    opacity: 0;
  }

  ${props =>
    props.isLoading &&
    css`
      color: transparent;

      &::after {
        opacity: 1;
      }
    `}
`

export const ButtonIcon = styled.div`
  display: flex;
`
