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

  ${props => (props.color === 'blue' && !props.variant) && css`
    background-color: #003BAE;
    color: #FFF;

    &:hover {
      background-color: #01308B;
    }
  `}

  ${props => (props.color === 'blue' && props.variant === 'outlined') && css`
    border: 2px solid #003BAE;
    background-color: transparent;
    color: #003BAE;

    &:hover {
      border: 2px solid #01308B;
      color: #01308B;
    }
  `}

  ${props => (props.color === 'red' && props.variant !== 'outlined') && css`
    background-color: #DE4534;
    color: #FFF;

    &:hover {
      background-color: #9F1101;
    }
  `}

  ${props => (props.color === 'red' && props.variant === 'outlined') && css`
    border: 2px solid #DE4534;
    background-color: transparent;
    color: #DE4534;

    &:hover {
      border: 2px solid #9F1101;
      color: #9F1101;
    }
  `}

  ${props => (props.color === 'white' && props.variant !== 'outlined') && css`
    background-color: #FFF;
    color: #003BAE;

    &:hover {
      background-color: #DDDDDD;
    }
  `}

  ${props => (props.color === 'white' && props.variant === 'outlined') && css`
    border: 2px solid #FFF;
    background-color: transparent;
    color: #FFF;

    &:hover {
      border: 2px solid #DDDDDD;
      color: #DDDDDD;
    }
  `}

  &::after {
    content: "";
    position: absolute;
    border-width: 2px;
    border-style: solid;
    border-color: rgb(255, 255, 255) rgba(255, 255, 255, 0.25) rgb(255, 255, 255) rgb(255, 255, 255);
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

  ${props => props.isLoading && css`
    color: transparent;

    &::after {
      opacity: 1;
    }
  `}
`

export const ButtonIcon = styled.div`
  display: flex;
`
