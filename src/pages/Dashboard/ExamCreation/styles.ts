import styled from 'styled-components'

export const Content = styled.div`
  margin-bottom: 20px;

  > *:not(:last-child) {
    margin-bottom: 14px;
  }

  textarea:first-of-type {
    min-height: 120px;
  }
`
