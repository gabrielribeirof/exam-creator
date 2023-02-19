import styled from 'styled-components'

export const Grid = styled.div`
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 20px;

  @media(max-width: 960px) {
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  }
`
