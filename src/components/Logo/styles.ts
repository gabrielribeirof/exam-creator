import styled from 'styled-components'

export const LOGO_WIDTH_IN_PX = 50
export const LOGO_HEIGHT_IN_PX = 50

export const Container = styled.div`
  width: ${LOGO_WIDTH_IN_PX}px;
  min-width: ${LOGO_WIDTH_IN_PX}px;
  height: ${LOGO_HEIGHT_IN_PX}px;
  border-radius: 16px;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #003bae;
`
