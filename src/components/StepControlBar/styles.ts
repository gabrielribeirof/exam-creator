import styled from 'styled-components'

export const Container = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
`

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  h2 {
    margin: 0;
  }

  span {
    font-size: 14px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`
