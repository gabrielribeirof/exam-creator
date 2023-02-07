import styled from 'styled-components'

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
`

export const Tab = styled.div`
  width: 52%;
  border-radius: 0 64px 64px 0;
  background: linear-gradient(316deg, #1E2AD2 6.08%, #FFA6B7 85.93%);
`

export const Title = styled.h1`
  font-family: 'DM Sans';
  font-weight: bold;
  font-size: 50px;
  color: #FFFFFF;

  > .last-word {
    color: #202020;
  }
`

export const MainContent = styled.div`
  width: 48%;
`
