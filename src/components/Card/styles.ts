import styled, { css } from 'styled-components'

interface ContainerProps {
  textColor?: string
  backgroundColor?: string
}

export const Container = styled.div<ContainerProps>`
  border-radius: 16px;

  overflow: hidden;

  background-color: #ECECEC;
  color: #202020;
  transition: transform 200ms;
  cursor: pointer;

  ${props => props.textColor && css`
    color: ${props.textColor};
  `}

  ${props => props.backgroundColor && css`
    background-color: ${props.backgroundColor};
  `}

  &:hover {
    transform: scale(1.01);
  }
`

export const CardContent = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;

  > *:not(:last-child) {
    margin-bottom: 10px;
  }
`

export const CardContentTitle = styled.span`
  font-weight: bold;
`

export const CardContentItem = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 5px;
  }
  `

export const CardFooter = styled.div`
  height: 50px;
  padding: 0 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.25);
`

export const CardFooterLeft = styled.div`
  display: flex;
  align-items: center;

  > svg {
    margin-right: 5px;
  }
`

export const CardFooterRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex: 1;

  > svg {
    margin-left: 5px;
  }
`
