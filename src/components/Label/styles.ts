import styled, { css } from 'styled-components'

interface ContainerProps {
  error?: boolean
}

export const Container = styled.label<ContainerProps>`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  font-weight: bold;

  > svg {
    margin-right: 5px;
  }

  .mandatory-indicator {
    margin-left: 5px;
    color: #D33131;
  }

  .error-text {
    margin-left: 5px;
    color: #D33131;
    font-weight: 400;
    font-style: italic;
  }

  ${props => props.error && css`
    color: #D33131;
  `}
`
