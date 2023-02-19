import styled from 'styled-components'

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
