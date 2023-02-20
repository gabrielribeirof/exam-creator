import styled, { css } from 'styled-components'

const STEP_CIRCLE_SIZE_IN_PX = 30

export const Container = styled.main``

interface HeaderProps {
  color?: 'blue'
}

export const Header = styled.div<HeaderProps>`
  ${props => props.color === 'blue' && css`
    background-color: #003BAE;
    color: #FFF;
  `}
`

export const HeaderContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  row-gap: 20px;

  @media(max-width: 576px) {
    flex-direction: column;
  }
`

export const HeaderLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;

  @media(max-width: 576px) {
    flex-direction: column;
  }
`

export const HeaderTitle = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: fit-content;
    margin-right: 10px;
  }

  h1 {
    margin: 0;
    font-size: 30px;
    word-break: break-word;
  }
`

export const HeaderButtons = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
`

interface HeaderProgressBarStepProps {
  active: boolean
}

export const HeaderProgressBarStep = styled.div<HeaderProgressBarStepProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
  position: relative;

  ${props => props.active && css`
    div:first-child {
      background-color: #FFF;
      color: #003BAE;
    }
  `}

  &::after {
    position: absolute;
    content: "";
    border-bottom: 2px solid #FFF;
    width: calc(100% - ${STEP_CIRCLE_SIZE_IN_PX}px);
    left: calc(50% + ${STEP_CIRCLE_SIZE_IN_PX / 2}px);
    top: ${STEP_CIRCLE_SIZE_IN_PX / 2}px;
  }
`

export const HeaderProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${HeaderProgressBarStep}:last-child {
    &::after {
      content: none
    }
  }
`

export const HeaderProgressBarStepCircle = styled.div`
  width: ${STEP_CIRCLE_SIZE_IN_PX}px;
  height: ${STEP_CIRCLE_SIZE_IN_PX}px;
  border: 2px solid #FFF;
  border-radius: 50%;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 18px;
  font-weight: bold;
  cursor: default;
`

interface ContentProps {
  smallerWidth?: boolean
  biggerWidth?: boolean
}

export const Content = styled.div<ContentProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  ${props => props.smallerWidth && css`
    max-width: 900px;
  `}

  ${props => props.biggerWidth && css`
    max-width: unset;
    margin: unset;
    padding: unset;
  `}
`
