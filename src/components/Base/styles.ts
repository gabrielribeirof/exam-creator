import styled, { css } from 'styled-components'

const STEP_CIRCLE_SIZE_IN_PX = 30

export const Container = styled.main``

interface BaseHeaderProps {
  color?: 'blue'
}

export const BaseHeader = styled.div<BaseHeaderProps>`
  ${props => props.color === 'blue' && css`
    background-color: #003BAE;
    color: #FFF;
  `}
`

export const BaseHeaderContent = styled.div`
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

export const BaseHeaderTitle = styled.div`
  display: flex;
  align-items: center;

  svg {
    min-width: fit-content;
    margin-right: 10px;
  }

  h1 {
    margin: 0;
    font-size: 32px;
    word-break: break-word;
  }
`

export const BaseHeaderButton = styled.div``

interface BaseHeaderProgressBarStepProps {
  active: boolean
}

export const BaseHeaderProgressBarStep = styled.div<BaseHeaderProgressBarStepProps>`
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

export const BaseHeaderProgressBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  ${BaseHeaderProgressBarStep}:last-child {
    &::after {
      content: none
    }
  }
`

export const BaseHeaderProgressBarStepCircle = styled.div`
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

interface BaseContentProps {
  smallerWidth?: boolean
}

export const BaseContent = styled.div<BaseContentProps>`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;

  ${props => props.smallerWidth && css`
    max-width: 900px;
  `}
`

export const BaseContentBar = styled.div`
  padding: 20px 0;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
`

export const BaseContentBarTitle = styled.div`
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

export const BaseContentBarButtons = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`
